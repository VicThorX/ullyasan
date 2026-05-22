export interface NavigationDict {
  home: string;
  products: string;
  contact: string;
  requestQuote: string;
}

export interface HeroDict {
  title: string;
  subtitle: string;
  ctaCatalog: string;
  ctaContact: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface WhyUsDict {
  title: string;
  subtitle: string;
  traceability: FeatureItem;
  quality: FeatureItem;
  logistics: FeatureItem;
  experience: FeatureItem;
}

export interface CategoriesDict {
  title: string;
  subtitle: string;
  frozenTitle: string;
  frozenDesc: string;
  freshTitle: string;
  freshDesc: string;
}

export interface CatalogDict {
  title: string;
  subtitle: string;
  filterAll: string;
  filterFrozen: string;
  filterFresh: string;
  viewDetails: string;
  noProducts: string;
}

export interface ProductDetailDict {
  scientificName: string;
  technicalSheet: string;
  fieldPresentation: string;
  fieldCatchZone: string;
  fieldGlazing: string;
  fieldPackaging: string;
  ctaWhatsApp: string;
  ctaContactForm: string;
  backToCatalog: string;
  whatsappMessageTemplate: string;
  formQuoteSubject: string;
}

export interface ContactDict {
  title: string;
  subtitle: string;
  fieldName: string;
  fieldCompany: string;
  fieldEmail: string;
  fieldMessage: string;
  submitButton: string;
  sending: string;
  successMessage: string;
  errorMessage: string;
  infoTitle: string;
  infoAddress: string;
  infoPhone: string;
  infoEmail: string;
  infoHours: string;
  formPlaceholderMessage: string;
}

export interface FooterDict {
  tagline: string;
  rights: string;
  companyName: string;
}

export interface SEODict {
  homeTitle: string;
  homeDesc: string;
  catalogTitle: string;
  catalogDesc: string;
  contactTitle: string;
  contactDesc: string;
}

export interface HomeDict {
  excellenceTitle: string;
  excellenceDesc1: string;
  excellenceDesc2: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}

export interface Dictionary {
  nav: NavigationDict;
  hero: HeroDict;
  whyUs: WhyUsDict;
  categories: CategoriesDict;
  catalog: CatalogDict;
  productDetail: ProductDetailDict;
  contact: ContactDict;
  home: HomeDict;
  footer: FooterDict;
  seo: SEODict;
}
