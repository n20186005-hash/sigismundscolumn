import type { MetadataRoute } from 'next';
import {guides} from '@/data/guides';

const baseUrl = 'https://sigismundscolumn.com';
const locales = ['pl', 'en', 'zh', 'ru', 'de'] as const;

function langAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[l] = `${baseUrl}/${l}${path}`;
  out['x-default'] = `${baseUrl}/en${path}`;
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Home pages (and other simple locale-prefixed routes are covered by the guide loop below)
  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date('2026-09-04'),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: langAlternates('') },
    });
  }

  // Guides index page per locale
  for (const locale of locales) {
    const path = `/guides`;
    entries.push({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date('2026-11-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: langAlternates(path) },
    });
  }

  // Each guide detail page per locale
  for (const g of guides) {
    const path = `/guides/${g.slug}/`;
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date('2026-11-11'),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: langAlternates(path) },
      });
    }
  }

  return entries;
}
