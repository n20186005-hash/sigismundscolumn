#!/usr/bin/env bash
set -euo pipefail
mkdir -p public/guide-photos
# Each query describes the actual subject. Only image filenames with identifiable
# place names are selected; uncertain results are skipped, not substituted.
while IFS='|' read -r slug query match; do
  response="$(curl -fsSL --max-time 25 -G 'https://commons.wikimedia.org/w/api.php' \
    --data-urlencode 'action=query' --data-urlencode 'generator=search' \
    --data-urlencode "gsrsearch=$query" --data-urlencode 'gsrnamespace=6' \
    --data-urlencode 'gsrlimit=12' --data-urlencode 'prop=imageinfo' \
    --data-urlencode 'iiprop=url|mime' --data-urlencode 'iiurlwidth=900' \
    --data-urlencode 'format=json' || true)"
  url="$(printf '%s' "$response" | jq -r --arg m "$match" '[.query.pages[]? | select(.title | ascii_downcase | contains($m)) | select(.imageinfo[0].mime == "image/jpeg") | .imageinfo[0].thumburl] | first // empty' 2>/dev/null)"
  if [[ -n "$url" ]]; then
    curl -fsSL --max-time 40 "$url" -o "public/guide-photos/$slug.jpg" || true
    printf '%s %s\n' "$slug" "$url"
  else
    printf 'SKIPPED %s\n' "$slug"
  fi
done <<'PLACES'
castle-square|Castle Square Warsaw Poland photo|castle square
royal-castle-warsaw|Royal Castle Warsaw Poland photo|royal castle
st-annes-church|St Anne Church Warsaw photograph|st. anne
old-town-market-square|Old Town Market Square Warsaw photo|old town market square
warsaw-mermaid-statue|Warsaw mermaid statue old town photo|mermaid
warsaw-barbican|Warsaw Barbican photo|barbican
st-johns-archcathedral|St Johns Archcathedral Warsaw photograph|st. john
kanonia-square|Kanonia Square Warsaw photo|kanonia
museum-of-warsaw|Museum of Warsaw Old Town photograph|museum of warsaw
krasinski-palace|Krasinski Palace Warsaw photograph|krasiński palace
presidential-palace|Presidential Palace Warsaw photo|presidential palace
adam-mickiewicz-monument|Adam Mickiewicz Monument Warsaw photo|mickiewicz
PLACES
