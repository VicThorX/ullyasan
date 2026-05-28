import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import ProductInteractiveActions from '@/components/ProductInteractiveActions';
import { products } from '@/data/products';
import { Locale, getDictionary, locales } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

// SSG: Pre-render all combinations of lang and slug at build time
export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];

  locales.forEach((lang) => {
    products.forEach((product) => {
      paths.push({
        lang,
        slug: product.slug,
      });
    });
  });

  return paths;
}

// Generate dynamic metadata for each localized product detail page
export async function generateMetadata({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const product = products.find((p) => p.slug === slug);
  const dict = await getDictionary(lang);

  if (!product) return {};

  const name = product.name[lang];
  const desc = product.shortDescription[lang];

  return {
    title: `${name} | ${dict.seo.homeTitle.split('|')[0].trim()}`,
    description: desc,
    alternates: {
      canonical: `https://ullyasan.com/${lang}/productos/${slug}`,
      languages: {
        'es-AR': `https://ullyasan.com/es/productos/${slug}`,
        'en-US': `https://ullyasan.com/en/productos/${slug}`,
        'pt-BR': `https://ullyasan.com/pt/productos/${slug}`,
        'de-DE': `https://ullyasan.com/de/productos/${slug}`,
        'fr-FR': `https://ullyasan.com/fr/productos/${slug}`,
        'x-default': `https://ullyasan.com/es/productos/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: lang,
      url: `https://ullyasan.com/${lang}/productos/${slug}`,
      title: `${name} | Ull Yasan Seafood`,
      description: desc,
      images: [
        {
          url: `https://ullyasan.com${product.images[0]}`,
          width: 800,
          height: 600,
          alt: name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const product = products.find((p) => p.slug === slug);
  const dict = await getDictionary(lang);

  if (!product) {
    notFound();
  }

  const name = product.name[lang];
  const shortDescription = product.shortDescription[lang];
  const description = product.description[lang];
  const scientificName = product.scientificName;

  return (
    <div className="pt-32 pb-12 sm:pt-40 sm:pb-20 bg-ocean-black min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10 animate-fade-in">
          <Link
            href={`/${lang}/productos`}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-400 hover:text-ull-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            <span>{dict.productDetail.backToCatalog}</span>
          </Link>
        </div>

        {/* Product Shell Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 animate-fade-in">
            <ProductGallery images={product.images} name={name} />
          </div>

          {/* Right Column: Information & Interactive Quotation Panel */}
          <div className="lg:col-span-6 flex flex-col space-y-8 animate-slide-up">
            
            {/* Header info */}
            <div>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm mb-4 ${
                  product.category === 'frozen' ? 'bg-blue-600/90' : 'bg-emerald-600/90'
                }`}
              >
                {product.category === 'frozen'
                  ? dict.catalog.filterFrozen
                  : dict.catalog.filterFresh}
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {name}
              </h1>
              <p className="mt-2 text-base font-semibold italic text-slate-400">
                {dict.productDetail.scientificName} {scientificName}
              </p>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-4 text-slate-300 font-light leading-relaxed text-sm sm:text-base">
              <p className="font-medium text-slate-200">{shortDescription}</p>
              <p>{description}</p>
            </div>

            {/* Technical Sheet (Ficha Técnica) */}
            <div className="bg-ocean-950/70 rounded-3xl border border-ocean-800 shadow-xl overflow-hidden">
              <div className="bg-ocean-black/40 px-6 py-4 border-b border-ocean-800/80">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{dict.productDetail.technicalSheet}</span>
                </h2>
              </div>
              <div className="divide-y divide-ocean-800/40 text-sm font-light text-slate-300">
                
                {/* Presentation */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldPresentation}
                  </span>
                  <span className="sm:col-span-2 text-white font-semibold">
                    {product.techSheet.presentation[lang]}
                  </span>
                </div>

                {/* Catch Zone */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldCatchZone}
                  </span>
                  <span className="sm:col-span-2 text-white font-medium">
                    {product.techSheet.catchZone[lang]}
                  </span>
                </div>

                {/* Glazing */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldGlazing}
                  </span>
                  <span className="sm:col-span-2 text-white font-medium">
                    {product.techSheet.glazing[lang]}
                  </span>
                </div>

                {/* Packaging */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldPackaging}
                  </span>
                  <span className="sm:col-span-2 text-slate-300">
                    {product.techSheet.packaging[lang]}
                  </span>
                </div>

              </div>
            </div>

            {/* Client-side B2B Interactive Quote Selectors & Cart actions */}
            <ProductInteractiveActions product={product} lang={lang} dict={dict} />

          </div>

        </div>

      </div>
    </div>
  );
}
