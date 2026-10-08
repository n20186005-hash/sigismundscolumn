import { useTranslations, useMessages } from 'next-intl';

export default function InfoSection() {
  const t = useTranslations('knowledge');
  const messages = useMessages() as any;
  const sections = (messages?.knowledge?.sections || []) as Array<{ id: string; title: string; content: string }>;
  const timeline = (messages?.knowledge?.timeline || []) as Array<{ year: string; title: string; text: string }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: 'var(--accent)', color: 'white' }}>
                    {index + 1}
                  </div>
                  <h3
                    className="font-display text-2xl font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {section.title}
                  </h3>
                </div>
                <p
                  className="text-lg leading-relaxed ml-14"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        {timeline.length > 0 && (
          <div className="mt-14">
            <h3
              className="font-display text-2xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('timelineTitle')}
            </h3>
            <ol className="relative border-l-2 pl-6 space-y-6" style={{ borderColor: 'var(--accent)' }}>
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span
                    className="absolute -left-[31px] top-1 w-4 h-4 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {item.year} · {item.title}
                  </div>
                  <p className="text-base leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
