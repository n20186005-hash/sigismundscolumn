import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guideBySlug, guides } from '@/data/guides';
import { guideDetails } from '@/data/guideDetails';
import { guideStewardship } from '@/data/guideStewardship';
import { nearbyVisitorFacts } from '@/data/nearbyVisitorFacts';

type Props = { params: Promise<{ locale: string; slug: string[] }> };
const root = 'https://sigismundscolumn.com';
const verifiedNearbyPhotos = new Set([
  'castle-square','royal-castle-warsaw','st-annes-church','old-town-market-square',
  'warsaw-mermaid-statue','warsaw-barbican','st-johns-archcathedral',
  'kanonia-square','museum-of-warsaw','krasinski-palace',
  'presidential-palace','adam-mickiewicz-monument',
  'magdalena-abakanowicz-footbridge','multimedia-fountain-vistula-boulevards',
]);
const columnPhotos = [
  '/gallery/images%20(1).jpg','/gallery/images%20(2).jpg',
  '/gallery/images%20(3).jpg','/gallery/images%20(4).jpg',
];

export function generateStaticParams() {
  return guides.map(g => ({locale:'en', slug: g.slug.split('/')}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const article = guideBySlug.get(slug.join('/'));
  if (!article || locale !== 'en') return {};
  const url = `${root}/en/guides/${article.slug}/`;
  return {
    title: `${article.title} | Sigismund's Column Warsaw Guide`,
    description: article.intro,
    alternates: {canonical: url},
    openGraph: {title: article.title, description: article.intro, url, type: 'article'}
  };
}

export default async function GuidePage({params}: Props) {
  const {locale, slug} = await params;
  const article = guideBySlug.get(slug.join('/'));
  if (!article || locale !== 'en') notFound();
  const detail = guideDetails[article.slug];
  const stewardship = guideStewardship(article.slug, article.title);
  const facts = nearbyVisitorFacts[article.slug];
  const encodedMap = encodeURIComponent(article.mapQuery);
  const mapsUrl = article.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodedMap}`;
  const placeSlug = article.slug.startsWith('nearby/') ? article.slug.slice('nearby/'.length) : '';
  const imageUrl = placeSlug
    ? (verifiedNearbyPhotos.has(placeSlug) ? `/guide-photos/${placeSlug}.jpg` : null)
    : article.category === 'Monument history'
      ? columnPhotos[guides.indexOf(article) % columnPhotos.length]
      : '/guide-photos/castle-square.jpg';
  const related = guides.filter(g => g.category === article.category && g.slug !== article.slug).slice(0, 4);
  const canonical = `${root}/${locale}/guides/${article.slug}/`;
  const ld = {
    '@context':'https://schema.org', '@type':'Article', headline:article.title,
    description:article.intro, mainEntityOfPage:canonical,
    author:{'@type':'Organization', name:'Sigismund’s Column Visitor Guide'},
    about:{'@type':'Place', name:article.mapQuery},
  };
  return <>
    <Header />
    <main className="min-h-screen" style={{background:'var(--bg-primary)',color:'var(--text-primary)'}}>
      <div className="max-w-5xl mx-auto px-5 py-12 md:py-20">
        <nav className="text-sm mb-6" aria-label="Breadcrumb" style={{color:'var(--text-muted)'}}>
          <Link href={`/${locale}`} className="hover:underline">Sigismund's Column</Link> / <Link href={`/${locale}/guides`} className="hover:underline">Visitor guides</Link> / {article.title}
        </nav>
        <p className="uppercase tracking-widest text-xs font-semibold mb-4" style={{color:'var(--accent)'}}>{article.category}</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">{article.title}</h1>
        <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mb-8" style={{color:'var(--text-secondary)'}}>{article.intro}</p>
        {facts && <div className="flex flex-wrap gap-3 mb-6 text-sm font-semibold">
          <span className="rounded-full px-4 py-2" style={{background:'var(--bg-secondary)'}}>{facts.kind}</span>
          <span className="rounded-full px-4 py-2" style={{background:'var(--bg-secondary)'}}>Suggested visit: {facts.visitLength}</span>
          <span className="rounded-full px-4 py-2" style={{background:'var(--bg-secondary)'}}>Check current access details</span>
        </div>}
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-6 py-3 font-semibold mb-14" style={{background:'var(--accent)',color:'white'}}>View this place on Google Maps ↗</a>
        {imageUrl && <figure className="mb-14">
          <img src={imageUrl} alt={placeSlug === 'multimedia-fountain-vistula-boulevards' ? 'Vistula River waterfront in Warsaw, near the mapped fountain area' : placeSlug ? `${article.title}, Warsaw, Poland` : 'Sigismund’s Column and Castle Square in Warsaw'} className="w-full max-h-[540px] rounded-2xl object-cover" loading="eager"/>
          <figcaption className="text-xs mt-2" style={{color:'var(--text-muted)'}}>
            {placeSlug === 'multimedia-fountain-vistula-boulevards' ? 'Vistula riverfront context photo; the specific fountain is not shown.' : placeSlug ? 'Place-matched photo sourced from Wikimedia Commons.' : article.category === 'Monument history' ? 'Existing Sigismund’s Column site photograph.' : 'Castle Square orientation photograph.'}
          </figcaption>
        </figure>}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12">
          <article className="space-y-12 leading-8">
            {facts && <section>
              <h2 className="font-display text-3xl font-bold mb-4">Discover {article.title}</h2>
              <p>{article.intro} Use this page to plan the location, understand its historical setting and build a comfortable walk around neighbouring Warsaw landmarks.</p>
              <div className="grid md:grid-cols-2 gap-5 mt-6">
                <div className="rounded-2xl p-5" style={{background:'var(--bg-secondary)'}}><h3 className="font-semibold mb-2">Visit tips</h3><p>{article.visit}</p></div>
                <div className="rounded-2xl p-5" style={{background:'var(--bg-secondary)'}}><h3 className="font-semibold mb-2">Why it stands out</h3><ul className="list-disc pl-5">{article.highlights.map(h=><li key={h}>{h}</li>)}</ul></div>
              </div>
            </section>}
            <section className="rounded-2xl p-6 md:p-8" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{color:'var(--accent)'}}>About the place · Management and care</p>
              <h2 className="font-display text-3xl font-bold mb-4">About {article.title}</h2>
              <p className="font-semibold mb-3">Managed or overseen by: {stewardship.manager}</p>
              <p>{stewardship.context}</p>
              <p className="mt-4">{article.background}</p>
              {stewardship.source && <a className="inline-block mt-4 text-sm underline" href={stewardship.source} target="_blank" rel="noopener noreferrer">Institution or city information ↗</a>}
            </section>
            <section>
              <h2 className="font-display text-3xl font-bold mb-4">History and local significance</h2>
              {detail && <p className="mt-4">{detail.story}</p>}
            </section>
            <section className="rounded-2xl p-6" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
              <h2 className="font-display text-2xl font-bold mb-4">At a glance</h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Destination</dt><dd>{article.title}</dd></div>
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Area</dt><dd>Warsaw, Poland</dd></div>
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Guide type</dt><dd>{article.category}</dd></div>
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Navigation</dt><dd><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="underline">Google Maps for this location ↗</a></dd></div>
                {facts && <><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Type of attraction</dt><dd>{facts.kind}</dd></div><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Location</dt><dd>{facts.setting}</dd></div><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Suggested duration</dt><dd>{facts.visitLength}</dd></div><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>Management</dt><dd>{stewardship.manager}</dd></div></>}
              </dl>
            </section>
            {facts && <>
              <section><h2 className="font-display text-3xl font-bold mb-4">Opening hours and access</h2><p>{facts.hours}</p></section>
              <section><h2 className="font-display text-3xl font-bold mb-4">Tickets and admission</h2><p>{facts.admission}</p></section>
              <section><h2 className="font-display text-3xl font-bold mb-4">Getting here</h2><p>{facts.arrival}</p><p className="mt-4">For the final approach, open <a className="underline" href={mapsUrl} target="_blank" rel="noopener noreferrer">this attraction’s own Google Maps location ↗</a>.</p></section>
            </>}
            {detail && <section><h2 className="font-display text-3xl font-bold mb-4">History, design and setting</h2><p>{detail.design}</p></section>}
            <section><h2 className="font-display text-3xl font-bold mb-4">Highlights and what to notice</h2>
              <div className="grid gap-4">{article.highlights.map((item,i) => <div key={item} className="rounded-xl p-5" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}><span className="text-sm font-bold mr-3" style={{color:'var(--accent)'}}>0{i+1}</span>{item}</div>)}</div>
              {detail && <ul className="mt-5 list-disc pl-6 space-y-2">{detail.observations.map(point=><li key={point}>{point}</li>)}</ul>}
            </section>
            <section><h2 className="font-display text-3xl font-bold mb-4">Planning your visit</h2><p>{article.visit}</p><p className="mt-4">Check any venue's current opening information, ticket requirements and temporary access notices before setting off. Outdoor public spaces and staffed attractions may follow different rules.</p></section>
            {facts && <section><h2 className="font-display text-3xl font-bold mb-4">Visitor essentials</h2><p>{facts.access}</p><p className="mt-4">Plan your walking sequence around the surrounding landmarks rather than visiting only one photo spot. Nearby cafés and indoor venues can make useful weather breaks, provided their own hours and access arrangements suit your day.</p></section>}
            <section><h2 className="font-display text-3xl font-bold mb-4">Walking route: step by step</h2><p className="mb-5">{article.route}</p>
              {detail && <ol className="space-y-4">{detail.steps.map((step,i)=><li key={step} className="flex gap-4"><span className="rounded-full shrink-0 w-9 h-9 flex items-center justify-center font-bold" style={{background:'var(--bg-secondary)',color:'var(--accent)'}}>{i+1}</span><span>{step}</span></li>)}</ol>}
              <p className="mt-5">Use <a href={mapsUrl} className="underline" target="_blank" rel="noopener noreferrer">this destination’s Google Maps link</a> to check the final pedestrian approach.</p>
            </section>
            <section><h2 className="font-display text-3xl font-bold mb-4">Photography viewpoints</h2><p>{article.photo}</p><p className="mt-4">Keep paths and entrances clear while framing your shot, and follow posted restrictions for museums and places of worship.</p></section>
            {facts && <>
              <section><h2 className="font-display text-3xl font-bold mb-4">Where to stay nearby</h2><p>{facts.stay}</p><p className="mt-4">Check each property’s actual address, accessibility and arrival arrangements before booking, particularly in historic streets with limited vehicle access.</p></section>
              <section><h2 className="font-display text-3xl font-bold mb-4">Visitor impressions</h2><p>{facts.reviews}</p></section>
              <section className="rounded-2xl p-6" style={{background:'var(--bg-secondary)'}}><h2 className="font-display text-2xl font-bold mb-4">Location and directions</h2><p className="mb-3">{facts.setting}</p><a className="underline font-semibold" href={mapsUrl} target="_blank" rel="noopener noreferrer">Open the exact destination in Google Maps ↗</a></section>
            </>}
            <section><h2 className="font-display text-3xl font-bold mb-4">Before you go: common questions</h2>
              <div className="space-y-5">
                {detail?.questions.map(([question,answer])=><div key={question}><h3 className="font-semibold">{question}</h3><p>{answer}</p></div>)}
                <div><h3 className="font-semibold">Where should I navigate?</h3><p>Use the destination-specific map link for <strong>{article.mapQuery}</strong>, rather than the map pin for Sigismund’s Column or a different Warsaw attraction.</p></div>
                <div><h3 className="font-semibold">What else fits into the same visit?</h3><p>{article.route}</p></div>
              </div>
            </section>
            {article.source && <p className="text-sm">Further reading: <a className="underline" href={article.source} target="_blank" rel="noopener noreferrer">Official institution information ↗</a></p>}
          </article>
          <aside>
            <div className="rounded-2xl p-6 sticky top-8" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
              <h2 className="font-display text-xl font-semibold mb-4">Nearby and related guides</h2>
              <ul className="space-y-4">{related.map(g => <li key={g.slug}><Link className="hover:underline" style={{color:'var(--accent)'}} href={`/${locale}/guides/${g.slug}/`}>{g.title} →</Link></li>)}</ul>
              <Link className="block mt-6 underline text-sm" href={`/${locale}/guides/`}>Browse all {guides.length} guides</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}}/>
  </>;
}
