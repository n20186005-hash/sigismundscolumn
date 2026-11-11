import type { MetadataRoute } from 'next';
import {guides} from '@/data/guides';

const baseUrl = 'https://sigismundscolumn.com';
const locales = ['pl', 'en', 'zh', 'ru', 'de'] as const;
const pagePaths = [''];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of pagePaths) {
      const urlPath = path === '' ? `/${locale}` : `/${locale}${path}`;
      const languages: Record<string, string> = {
        pl: `${baseUrl}/pl${path}`,
        en: `${baseUrl}/en${path}`,
        zh: `${baseUrl}/zh${path}`,
        ru: `${baseUrl}/ru${path}`,
        de: `${baseUrl}/de${path}`,
        'x-default': `${baseUrl}/pl${path}`,
      };

      entries.push({
        url: `${baseUrl}${urlPath}`,
        lastModified: path === '' ? new Date('2026-09-04') : new Date('2026-11-11'),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : 0.6,
        alternates: {
          languages,
        },
      });
    }
  }
  for (const path of ['/guides', ...guides.map(g => `/guides/${g.slug}`)]) {
    entries.push({
      url: `${baseUrl}/en${path}`,
      lastModified: new Date('2026-11-11'),
      changeFrequency: 'monthly',
      priority: path === '/guides' ? 0.8 : 0.7,
    });
  }

  return entries;
}
