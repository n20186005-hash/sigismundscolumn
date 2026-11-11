import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guideBySlug, guides } from '@/data/guides';

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
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-6 py-3 font-semibold mb-14" style={{background:'var(--accent)',color:'white'}}>View this place on Google Maps ↗</a>
        {imageUrl && <figure className="mb-14">
          <img src={imageUrl} alt={placeSlug ? `${article.title}, Warsaw, Poland` : 'Sigismund’s Column and Castle Square in Warsaw'} className="w-full max-h-[540px] rounded-2xl object-cover" loading="eager"/>
          <figcaption className="text-xs mt-2" style={{color:'var(--text-muted)'}}>
            {placeSlug === 'multimedia-fountain-vistula-boulevards' ? 'Vistula riverfront context photo; the specific fountain is not shown.' : placeSlug ? 'Place-matched photo sourced from Wikimedia Commons.' : article.category === 'Monument history' ? 'Existing Sigismund’s Column site photograph.' : 'Castle Square orientation photograph.'}
          </figcaption>
        </figure>}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12">
          <article className="space-y-12 leading-8">
            <section><h2 className="font-display text-3xl font-bold mb-4">Explore the story</h2><p>{article.background}</p></section>
            <section><h2 className="font-display text-3xl font-bold mb-4">Highlights and what to notice</h2>
              <div className="grid gap-4">{article.highlights.map((item,i) => <div key={item} className="rounded-xl p-5" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}><span className="text-sm font-bold mr-3" style={{color:'var(--accent)'}}>0{i+1}</span>{item}</div>)}</div>
            </section>
            <section><h2 className="font-display text-3xl font-bold mb-4">Planning your visit</h2><p>{article.visit}</p><p className="mt-4">For museums, churches and staffed venues, check the operator's latest notices for opening hours, access and tickets. The outdoor column and neighbouring institutions do not share one admission policy.</p></section>
            <section><h2 className="font-display text-3xl font-bold mb-4">Suggested walking route</h2><p>{article.route}</p><p className="mt-4">Use the place-specific navigation link above to check the precise destination and your walking approach before setting off.</p></section>
            <section><h2 className="font-display text-3xl font-bold mb-4">Photography tips</h2><p>{article.photo}</p></section>
            <section><h2 className="font-display text-3xl font-bold mb-4">Before you go: common questions</h2>
              <div className="space-y-5">
                <div><h3 className="font-semibold">How do I find this location?</h3><p>Open the dedicated Google Maps search above for <strong>{article.mapQuery}</strong>, then check your current transport and walking directions.</p></div>
                <div><h3 className="font-semibold">How should I fit it into an Old Town visit?</h3><p>{article.route}</p></div>
                <div><h3 className="font-semibold">What should I photograph?</h3><p>{article.photo}</p></div>
                <div><h3 className="font-semibold">Should I book or check opening times?</h3><p>Outdoor public spaces and indoor attractions follow different arrangements. Consult the relevant venue directly before planning a timed entry.</p></div>
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
