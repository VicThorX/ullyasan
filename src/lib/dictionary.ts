import type { Dictionary } from '@/types/dictionary';

const dictionaries = {
  es: () => import('@/messages/es.json').then((module) => module.default),
  en: () => import('@/messages/en.json').then((module) => module.default),
  pt: () => import('@/messages/pt.json').then((module) => module.default),
  de: () => import('@/messages/de.json').then((module) => module.default),
  fr: () => import('@/messages/fr.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]?.() || dictionaries.es();
};

export const locales: Locale[] = ['es', 'en', 'pt', 'de', 'fr'];
export const defaultLocale: Locale = 'es';
