import type {Metadata} from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {guides} from '@/data/guides';
import { permanentRedirect } from 'next/navigation';
export const metadata:Metadata = {title:'Warsaw Old Town Visitor Guides | Sigismund’s Column',description:'Explore practical guides to Sigismund’s Column, Castle Square, Warsaw Old Town, the Vistula riverfront, transport, food and walking routes.',alternates:{canonical:'https://sigismundscolumn.com/en/guides'}};
export default async function Guides({params}:{params:Promise<{locale:string}>}) {
 const {locale}=await params;
 if (locale !== 'en') permanentRedirect('/en/guides/');
 const categories = [...new Set(guides.map(g=>g.category))];
 return <><Header/><main className="max-w-6xl mx-auto px-5 py-14" style={{color:'var(--text-primary)'}}>
  <Link className="text-sm underline" href={`/${locale}`}>← Return to Sigismund’s Column</Link>
  <h1 className="font-display text-4xl md:text-6xl font-bold mt-7 mb-5">Explore Warsaw from Castle Square</h1>
  <p className="text-xl mb-12" style={{color:'var(--text-secondary)'}}>{guides.length} destination-specific guides covering the monument’s history, nearby landmarks, walks, transport and travel planning.</p>
  {categories.map(category=><section key={category} className="mb-12"><h2 className="font-display text-3xl font-bold mb-5">{category}</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{guides.filter(g=>g.category===category).map(g=><Link key={g.slug} href={`/${locale}/guides/${g.slug}/`} className="rounded-xl p-5 hover:underline" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}><h3 className="font-semibold text-lg mb-2">{g.title} →</h3><p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>{g.intro}</p></Link>)}</div></section>)}
 </main><Footer/></>;
}
