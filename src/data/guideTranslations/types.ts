// Per-language, per-guide translation content.
// Shared fields (slug, mapQuery, mapUrl, source, photo path) are NOT translated
// and stay in the canonical guide records (guides.ts).
export type GuideTranslationFacts = {
  kind: string;
  setting: string;
  visitLength: string;
  hours: string;
  admission: string;
  arrival: string;
  access: string;
  stay: string;
  reviews: string;
};

export type GuideTranslation = {
  title: string;
  intro: string;
  background: string;
  highlights: [string, string, string];
  visit: string;
  route: string;
  photo: string;
  story: string;
  design: string;
  observations: string[];
  steps: string[];
  questions: [string, string][];
  manager: string;
  context: string;
  source?: string;
  facts?: GuideTranslationFacts;
};

export type Locale = 'pl' | 'en' | 'zh' | 'ru' | 'de';

export type GuideTranslationsBySlug = Record<string, GuideTranslation>;
