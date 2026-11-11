'use client';

import { useTranslations, useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const nearbyLabel = locale === 'zh' ? '周边景点' : locale === 'pl' ? 'Atrakcje w pobliżu' : locale === 'ja' ? '周辺観光スポット' : locale === 'ko' ? '주변 명소' : 'Nearby Attractions';
  const [scrolled, setScrolled] = useState(false);
  const solidHeader = scrolled || !isHome;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solidHeader ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: solidHeader ? '1px solid var(--border-color)' : 'none',
        backdropFilter: solidHeader ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={`/${locale}`} className="font-display text-lg font-semibold tracking-tight" style={{ color: solidHeader ? 'var(--text-primary)' : '#fff' }}>
          Sigismund&apos;s Column
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/en/guides/#nearby-attractions" className="text-sm font-semibold transition-colors" style={{ color: solidHeader ? 'var(--accent)' : '#fff' }}>{nearbyLabel}</a>
          {(['gallery', 'reviews', 'map'] as const).map((section) => (
            <a
              key={section}
              href={`/${locale}/#${section}`}
              className="text-sm font-medium transition-colors"
              style={{ color: solidHeader ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {t(section)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/en/guides/#nearby-attractions" className="md:hidden text-xs font-semibold rounded-full px-3 py-2 border" style={{borderColor:'var(--border-color)',color:solidHeader ? 'var(--accent)' : '#fff'}}>{nearbyLabel}</a>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
