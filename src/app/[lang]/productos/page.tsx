import React from 'react';
import CatalogGrid from '@/components/CatalogGrid';
import { products } from '@/data/products';
import { Locale, getDictionary } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

// Generate dynamic metadata for the Catalog Page
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.seo.catalogTitle,
    description: dict.seo.catalogDesc,
    alternates: {
      canonical: `https://ullyasan.com/${lang}/productos`,
      languages: {
        'es-AR': 'https://ullyasan.com/es/productos',
        'en-US': 'https://ullyasan.com/en/productos',
        'pt-BR': 'https://ullyasan.com/pt/productos',
        'de-DE': 'https://ullyasan.com/de/productos',
        'fr-FR': 'https://ullyasan.com/fr/productos',
        'x-default': 'https://ullyasan.com/es/productos',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang,
      url: `https://ullyasan.com/${lang}/productos`,
      title: dict.seo.catalogTitle,
      description: dict.seo.catalogDesc,
    },
  };
}

export default async function CatalogPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <div className="pt-36 pb-16 md:pt-44 md:pb-24 bg-ocean-black min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-4">
            Ull Yasan Stock
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {dict.catalog.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg font-light text-slate-300 leading-relaxed">
            {dict.catalog.subtitle}
          </p>
        </div>

        {/* Localized Grid Component */}
        <CatalogGrid
          products={products}
          lang={lang}
          dict={dict.catalog}
        />
        
      </div>
    </div>
  );
}
