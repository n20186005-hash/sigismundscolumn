import Link from 'next/link';
import { guides } from '@/data/guides';

const featured = [
  'nearby/royal-castle-warsaw',
  'nearby/st-annes-church',
  'nearby/old-town-market-square',
  'nearby/magdalena-abakanowicz-footbridge',
  'nearby/multimedia-fountain-vistula-boulevards',
  'routes/old-town-walking-tour',
];

export default function GuidesPreview() {
  return (
    <section id="visitor-guides" className="px-4 sm:px-6 py-14 sm:py-20" style={{background:'var(--bg-secondary)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase mb-2" style={{color:'var(--accent)'}}>Explore beyond the monument</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{color:'var(--text-primary)'}}>Warsaw Old Town & Nearby Attractions</h2>
            <p className="max-w-2xl" style={{color:'var(--text-secondary)'}}>Discover history, nearby landmarks, the Vistula riverfront, walking routes and practical travel tips in {guides.length} detailed guides.</p>
          </div>
          <Link href="/en/guides/" className="shrink-0 inline-flex justify-center items-center rounded-full px-6 py-3 font-semibold" style={{background:'var(--accent)',color:'#fff'}}>See all {guides.length} guides →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(slug=>{
            const item = guides.find(g=>g.slug===slug);
            if (!item) return null;
            return <Link key={slug} href={`/en/guides/${item.slug}/`} className="rounded-xl p-5 hover:shadow-md transition-shadow" style={{background:'var(--bg-primary)',border:'1px solid var(--border-color)'}}>
              <span className="text-xs font-semibold uppercase tracking-wide" style={{color:'var(--accent)'}}>{item.category}</span>
              <h3 className="font-display text-lg font-semibold mt-2 mb-2" style={{color:'var(--text-primary)'}}>{item.title} →</h3>
              <p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>{item.intro}</p>
            </Link>;
          })}
        </div>
      </div>
    </section>
  );
}
