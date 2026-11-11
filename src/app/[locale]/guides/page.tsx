import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {guides} from '@/data/guides';
import {getGuideTranslation} from '@/data/guideTranslations';
import {uiT} from '@/data/guideUi';
import {setRequestLocale} from 'next-intl/server';
import {routing, type Locale} from '@/i18n/routing';

const root = 'https://sigismundscolumn.com';
const locales = routing.locales as readonly Locale[];

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata> {
  const {locale} = await params;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const t = await getTranslations({locale, namespace:'guides'});
  const url = `${root}/${locale}/guides/`;
  const languages: Record<string,string> = {};
  for (const l of locales) languages[l] = `${root}/${l}/guides/`;
  languages['x-default'] = `${root}/en/guides/`;
  return {
    title: t('indexTitle'),
    description: t('indexDescription'),
    alternates: {canonical: url, languages},
    openGraph: {title: t('indexTitle'), description: t('indexDescription'), url, type:'website', locale},
  };
}

export default async function Guides({params}:{params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if (!(locales as readonly string[]).includes(locale)) { const {notFound}=await import('next/navigation'); notFound(); }
  setRequestLocale(locale);
  const t = uiT(locale);
  const categories = [...new Set(guides.map(g=>g.category))];
  return <><Header/><main className="max-w-6xl mx-auto px-5 py-14" style={{color:'var(--text-primary)'}}>
    <Link className="text-sm underline" href={`/${locale}`}>{t('backToHome')}</Link>
    <h1 className="font-display text-4xl md:text-6xl font-bold mt-7 mb-5">{t('indexHeading')}</h1>
    <p className="text-xl mb-12" style={{color:'var(--text-secondary)'}}>{guides.length} {t('indexSub')}</p>
    {categories.map(category=>{
      const catLabel = t(`cat${category.split(' ').join('')}`);
      return <section key={category} className="mb-12"><h2 className="font-display text-3xl font-bold mb-5">{catLabel}</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{guides.filter(g=>g.category===category).map(g=>{
        const tr = getGuideTranslation(locale, g.slug);
        return <Link key={g.slug} href={`/${locale}/guides/${g.slug}/`} className="rounded-xl p-5 hover:underline" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}><h3 className="font-semibold text-lg mb-2">{(tr?.title ?? g.title)} →</h3><p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>{tr?.intro ?? g.intro}</p></Link>;
      })}</div></section>;
    })}
  </main><Footer/></>;
}
