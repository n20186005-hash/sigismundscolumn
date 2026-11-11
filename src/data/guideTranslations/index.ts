import { enTranslations } from './en';
import { plTranslations } from './pl';
import { zhTranslations } from './zh';
import { ruTranslations } from './ru';
import { deTranslations } from './de';
import type { GuideTranslation, Locale, GuideTranslationsBySlug } from './types';

const map: Record<Locale, GuideTranslationsBySlug> = {
  en: enTranslations,
  pl: plTranslations,
  zh: zhTranslations,
  ru: ruTranslations,
  de: deTranslations,
};

const supported: Locale[] = ['pl', 'en', 'zh', 'ru', 'de'];

export function getGuideTranslation(locale: string, slug: string): GuideTranslation | undefined {
  const key = (supported as string[]).includes(locale) ? (locale as Locale) : 'en';
  return map[key][slug] || enTranslations[slug];
}

export type { GuideTranslation, GuideTranslationFacts, Locale, GuideTranslationsBySlug };
