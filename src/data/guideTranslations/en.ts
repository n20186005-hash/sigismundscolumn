import { guideBySlug } from '@/data/guides';
import { guideDetails } from '@/data/guideDetails';
import { guideStewardship } from '@/data/guideStewardship';
import { nearbyVisitorFacts } from '@/data/nearbyVisitorFacts';
import type { GuideTranslationsBySlug, GuideTranslation } from './types';

// Builds the English translation directly from the existing canonical data so the
// English pages keep their current (verified) copy without duplication.
function buildEnglish(): GuideTranslationsBySlug {
  const out: GuideTranslationsBySlug = {};
  for (const [slug] of guideBySlug) {
    const g = guideBySlug.get(slug)!;
    const d = guideDetails[slug];
    const s = guideStewardship(slug, g.title);
    const f = nearbyVisitorFacts[slug];
    const t: GuideTranslation = {
      title: g.title,
      intro: g.intro,
      background: g.background,
      highlights: g.highlights,
      visit: g.visit,
      route: g.route,
      photo: g.photo,
      story: d?.story ?? '',
      design: d?.design ?? '',
      observations: d?.observations ?? [],
      steps: d?.steps ?? [],
      questions: d?.questions ?? [],
      manager: s.manager,
      context: s.context,
      source: s.source,
    };
    if (f) {
      t.facts = {
        kind: f.kind,
        setting: f.setting,
        visitLength: f.visitLength,
        hours: f.hours,
        admission: f.admission,
        arrival: f.arrival,
        access: f.access,
        stay: f.stay,
        reviews: f.reviews,
      };
    }
    out[slug] = t;
  }
  return out;
}

export const enTranslations: GuideTranslationsBySlug = buildEnglish();
