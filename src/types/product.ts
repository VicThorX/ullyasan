export interface LocalizedString {
  es: string;
  en: string;
  pt: string;
  de: string;
  fr: string;
}

export interface TechSheet {
  presentation: LocalizedString;
  catchZone: LocalizedString;
  glazing: LocalizedString;
  packaging: LocalizedString;
}

export interface Product {
  slug: string;
  scientificName: string;
  category: 'frozen' | 'fresh';
  images: string[];
  name: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  techSheet: TechSheet;
}
