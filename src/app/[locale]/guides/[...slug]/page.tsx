import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guideBySlug, guides } from '@/data/guides';
import { getGuideTranslation } from '@/data/guideTranslations';
import { uiT } from '@/data/guideUi';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string; slug: string[] }> };
const root = 'https://sigismundscolumn.com';
const locales = routing.locales as readonly Locale[];

const verifiedNearbyPhotos = new Set([
  'castle-square','royal-castle-warsaw','st-annes-church','old-town-market-square',
  'warsaw-mermaid-statue','warsaw-barbican','st-johns-archcathedral',
  'kanonia-square','museum-of-warsaw','krasinski-palace',
  'presidential-palace','adam-mickiewicz-monument',
  'magdalena-abakanowicz-footbridge',
]);
const columnPhotos = [
  '/gallery/images%20(1).jpg','/gallery/images%20(2).jpg',
  '/gallery/images%20(3).jpg','/gallery/images%20(4).jpg',
];
const castleSquarePhoto = '/gallery/images%20(1).jpg';

export function generateStaticParams() {
  const out: { locale: string; slug: string[] }[] = [];
  for (const locale of locales) {
    for (const g of guides) {
      out.push({ locale, slug: g.slug.split('/') });
    }
  }
  return out;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const article = guideBySlug.get(slug.join('/'));
  if (!article || !(locales as readonly string[]).includes(locale)) return {};
  const tr = getGuideTranslation(locale, article.slug);
  if (!tr) return {};
  const url = `${root}/${locale}/guides/${article.slug}/`;
  const languages: Record<string,string> = {};
  for (const l of locales) languages[l] = `${root}/${l}/guides/${article.slug}/`;
  languages['x-default'] = `${root}/en/guides/${article.slug}/`;
  return {
    title: `${tr.title} | Sigismund's Column Warsaw Guide`,
    description: tr.intro,
    alternates: { canonical: url, languages },
    openGraph: { title: tr.title, description: tr.intro, url, type: 'article', locale },
  };
}

export default async function GuidePage({params}: Props) {
  const {locale, slug} = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  setRequestLocale(locale);
  const article = guideBySlug.get(slug.join('/'));
  if (!article) notFound();
  const tr = getGuideTranslation(locale, article.slug);
  if (!tr) notFound();
  const t = uiT(locale);

  const detail = tr;
  const facts = tr.facts;
  const encodedMap = encodeURIComponent(article.mapQuery);
  const mapsUrl = article.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodedMap}`;
  const placeSlug = article.slug.startsWith('nearby/') ? article.slug.slice('nearby/'.length) : '';
  const imageUrl = placeSlug
    ? (placeSlug === 'castle-square' ? castleSquarePhoto : verifiedNearbyPhotos.has(placeSlug) ? `/guide-photos/${placeSlug}.jpg` : null)
    : article.category === 'Monument history'
      ? columnPhotos[guides.indexOf(article) % columnPhotos.length]
      : castleSquarePhoto;
  const related = guides.filter(g => g.category === article.category && g.slug !== article.slug).slice(0, 4);
  const nearby = guides.filter(g => g.category === 'Nearby attractions' && g.slug !== article.slug);
  const canonical = `${root}/${locale}/guides/${article.slug}/`;
  const categoryLabel = t(`cat${article.category.split(' ').join('')}`);
  const languages: Record<string,string> = {};
  for (const l of locales) languages[l] = `${root}/${l}/guides/${article.slug}/`;
  languages['x-default'] = `${root}/en/guides/${article.slug}/`;
  const ld = {
    '@context':'https://schema.org', '@type':'Article', headline:tr.title,
    description:tr.intro, inLanguage: locale, mainEntityOfPage:canonical,
    author:{'@type':'Organization', name:"Sigismund's Column Visitor Guide"},
    about:{'@type':'Place', name:article.mapQuery},
  };
  return <>
    <Header />
    <main className="min-h-screen" style={{background:'var(--bg-primary)',color:'var(--text-primary)'}}>
      <div className="max-w-5xl mx-auto px-5 pt-28 pb-12 md:pt-32 md:pb-20">
        <nav className="text-sm mb-6" aria-label="Breadcrumb" style={{color:'var(--text-muted)'}}>
          <Link href={`/${locale}`} className="hover:underline">{t('breadcrumbHome')}</Link> / <Link href={`/${locale}/guides`} className="hover:underline">{t('breadcrumbGuides')}</Link> / {tr.title}
        </nav>
        <p className="uppercase tracking-widest text-xs font-semibold mb-4" style={{color:'var(--accent)'}}>{categoryLabel}</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">{tr.title}</h1>
        <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mb-8" style={{color:'var(--text-secondary)'}}>{tr.intro}</p>
        {facts && <div className="flex flex-wrap gap-3 mb-6 text-sm font-semibold">
          <span className="rounded-full px-4 py-2" style={{background:'var(--bg-secondary)'}}>{facts.kind}</span>
          <span className="rounded-full px-4 py-2" style={{background:'var(--bg-secondary)'}}>{t('suggestedVisit')} {facts.visitLength}</span>
          <span className="rounded-full px-4 py-2" style={{background:'var(--bg-secondary)'}}>{t('checkAccess')}</span>
        </div>}
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-6 py-3 font-semibold mb-14" style={{background:'var(--accent)',color:'white'}}>{t('mapsButton')} ↗</a>
        {imageUrl && <figure className="mb-14">
          <img src={imageUrl} alt={placeSlug ? `${tr.title}, Warsaw, Poland` : 'Sigismund’s Column and Castle Square in Warsaw'} className="w-full max-h-[540px] rounded-2xl object-cover" loading="eager" width="960" height="720"/>
          <figcaption className="text-xs mt-2" style={{color:'var(--text-muted)'}}>
            {placeSlug ? t('figcaptionNearby') : article.category === 'Monument history' ? t('figcaptionMonument') : t('figcaptionCastle')}
          </figcaption>
        </figure>}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12">
          <article className="space-y-12 leading-8">
            <section>
              <h2 className="font-display text-3xl font-bold mb-4">{t('discover', {title: tr.title})}</h2>
              <p>{tr.intro} {tr.background}</p>
              <div className="grid md:grid-cols-2 gap-5 mt-6">
                <div className="rounded-2xl p-5" style={{background:'var(--bg-secondary)'}}><h3 className="font-semibold mb-2">{t('visitTips')}</h3><p>{tr.visit}</p></div>
                <div className="rounded-2xl p-5" style={{background:'var(--bg-secondary)'}}><h3 className="font-semibold mb-2">{t('whyStandsOut')}</h3><ul className="list-disc pl-5">{tr.highlights.map(h=><li key={h}>{h}</li>)}</ul></div>
              </div>
            </section>
            <section className="rounded-2xl p-6 md:p-8" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{color:'var(--accent)'}}>{t('aboutHeading')}</p>
              <h2 className="font-display text-3xl font-bold mb-4">{t('aboutTitle', {title: tr.title})}</h2>
              <p className="font-semibold mb-3">{t('managedBy')} {tr.manager}</p>
              <p>{tr.context}</p>
              <p className="mt-4">{tr.background}</p>
              {tr.source && <a className="inline-block mt-4 text-sm underline" href={tr.source} target="_blank" rel="noopener noreferrer">{t('institutionLink')} ↗</a>}
            </section>
            <section>
              <h2 className="font-display text-3xl font-bold mb-4">{t('historySignificance')}</h2>
              {detail && <p className="mt-4">{detail.story}</p>}
            </section>
            <section className="rounded-2xl p-6" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
              <h2 className="font-display text-3xl font-bold mb-4">{t('atAGlance')}</h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtDestination')}</dt><dd>{tr.title}</dd></div>
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtArea')}</dt><dd>{t('warsawPoland')}</dd></div>
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtGuideType')}</dt><dd>{categoryLabel}</dd></div>
                <div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtNavigation')}</dt><dd><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="underline">{t('googleMapsLocation')} ↗</a></dd></div>
                {facts && <><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtTypeAttraction')}</dt><dd>{facts.kind}</dd></div><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtLocation')}</dt><dd>{facts.setting}</dd></div><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtDuration')}</dt><dd>{facts.visitLength}</dd></div><div><dt className="text-sm font-semibold" style={{color:'var(--text-muted)'}}>{t('dtManagement')}</dt><dd>{tr.manager}</dd></div></>}
              </dl>
            </section>
            {facts && <>
              <section><h2 className="font-display text-3xl font-bold mb-4">{t('openingHours')}</h2><p>{facts.hours}</p></section>
              <section><h2 className="font-display text-3xl font-bold mb-4">{t('tickets')}</h2><p>{facts.admission}</p></section>
              <section><h2 className="font-display text-3xl font-bold mb-4">{t('gettingHere')}</h2><p>{facts.arrival}</p><p className="mt-4">{t('gettingHereTail')} <a className="underline" href={mapsUrl} target="_blank" rel="noopener noreferrer">{t('ownMapsLocation')} ↗</a>.</p></section>
            </>}
            {!facts && <>
              <section><h2 className="font-display text-3xl font-bold mb-4">{t('themedWhenToGo')}</h2><p>{t('themedWhenToGoText')}</p></section>
              <section><h2 className="font-display text-3xl font-bold mb-4">{t('themedTransport')}</h2><p>{tr.route} {t('themedTransportTail')}</p></section>
            </>}
            {detail && <section><h2 className="font-display text-3xl font-bold mb-4">{t('historyDesign')}</h2><p>{detail.design}</p></section>}
            <section><h2 className="font-display text-3xl font-bold mb-4">{t('highlights')}</h2>
              <div className="grid gap-4">{tr.highlights.map((item,i) => <div key={item} className="rounded-xl p-5" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}><span className="text-sm font-bold mr-3" style={{color:'var(--accent)'}}>0{i+1}</span>{item}</div>)}</div>
              {detail && <ul className="mt-5 list-disc pl-6 space-y-2">{detail.observations.map(point=><li key={point}>{point}</li>)}</ul>}
            </section>
            <section><h2 className="font-display text-3xl font-bold mb-4">{t('planningVisit')}</h2><p>{tr.visit}</p><p className="mt-4">{t('planningVisitText')}</p></section>
            {facts && <section><h2 className="font-display text-3xl font-bold mb-4">{t('visitorEssentials')}</h2><p>{facts.access}</p><p className="mt-4">{t('visitorEssentialsNearbyText')}</p></section>}
            {!facts && <section><h2 className="font-display text-3xl font-bold mb-4">{t('visitorEssentials')}</h2><p>{t('visitorEssentialsThemedText')}</p></section>}
            <section><h2 className="font-display text-3xl font-bold mb-4">{t('walkingRoute')}</h2><p className="mb-5">{tr.route}</p>
              {detail && <ol className="space-y-4">{detail.steps.map((step,i)=><li key={step} className="flex gap-4"><span className="rounded-full shrink-0 w-9 h-9 flex items-center justify-center font-bold" style={{background:'var(--bg-secondary)',color:'var(--accent)'}}>{i+1}</span><span>{step}</span></li>)}</ol>}
              <p className="mt-5">{t('walkingRouteTail')} <a href={mapsUrl} className="underline" target="_blank" rel="noopener noreferrer">{t('destMapsLink')}</a>.</p>
            </section>
            <section><h2 className="font-display text-3xl font-bold mb-4">{t('photoViewpoints')}</h2><p>{tr.photo}</p><p className="mt-4">{t('photoViewpointsText')}</p></section>
            {facts && <>
              <section><h2 className="font-display text-3xl font-bold mb-4">{t('whereToStayNearby')}</h2><p>{facts.stay}</p><p className="mt-4">{t('whereToStayText')}</p></section>
              <section><h2 className="font-display text-3xl font-bold mb-4">{t('visitorImpressions')}</h2><p>{facts.reviews}</p></section>
              <section className="rounded-2xl p-6" style={{background:'var(--bg-secondary)'}}><h2 className="font-display text-3xl font-bold mb-4">{t('locationDirections')}</h2><p className="mb-3">{facts.setting}</p><a className="underline font-semibold" href={mapsUrl} target="_blank" rel="noopener noreferrer">{t('exactDestMaps')} ↗</a></section>
            </>}
            {!facts && <section><h2 className="font-display text-3xl font-bold mb-4">{t('whereToStayArea')}</h2><p>{t('whereToStayAreaText')}</p><p className="mt-4"><a className="underline" href={mapsUrl} target="_blank" rel="noopener noreferrer">{t('guideStartMaps')} ↗</a>.</p></section>}
            <section><h2 className="font-display text-3xl font-bold mb-4">{t('faqTitle')}</h2>
              <div className="space-y-5">
                {detail?.questions.map(([question,answer])=><div key={question}><h3 className="font-semibold">{question}</h3><p>{answer}</p></div>)}
                <div><h3 className="font-semibold">{t('faqNavigateQ')}</h3><p>{t('faqNavigateA', {mapQuery: article.mapQuery})}</p></div>
                <div><h3 className="font-semibold">{t('faqFitsQ')}</h3><p>{tr.route}</p></div>
              </div>
            </section>
            <section>
              <h2 className="font-display text-3xl font-bold mb-4">{t('exploreMore')}</h2>
              <p className="mb-5">{t('exploreMoreText')}</p>
              <ul className="grid sm:grid-cols-2 gap-3">{nearby.map(g => {
                const nt = getGuideTranslation(locale, g.slug);
                return <li key={g.slug}><Link href={`/${locale}/guides/${g.slug}/`} className="block rounded-xl p-4 hover:underline" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>{(nt?.title ?? g.title)} →</Link></li>;
              })}</ul>
            </section>
            {article.source && <p className="text-sm">{t('furtherReading')} <a className="underline" href={article.source} target="_blank" rel="noopener noreferrer">{t('officialInstitution')} ↗</a></p>}
          </article>
          <aside>
            <div className="rounded-2xl p-6 sticky top-8" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
              <h2 className="font-display text-xl font-semibold mb-4">{t('relatedTitle')}</h2>
              <ul className="space-y-4">{related.map(g => {
                const nt = getGuideTranslation(locale, g.slug);
                return <li key={g.slug}><Link className="hover:underline" style={{color:'var(--accent)'}} href={`/${locale}/guides/${g.slug}/`}>{(nt?.title ?? g.title)} →</Link></li>;
              })}</ul>
              <Link className="block mt-6 underline text-sm" href={`/${locale}/guides/`}>{t('browseAll', {count: guides.length})}</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}}/>
  </>;
}
