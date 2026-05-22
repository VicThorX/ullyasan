import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
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

  // Format pre-filled WhatsApp message
  const whatsappTemplate = dict.productDetail.whatsappMessageTemplate.replace(
    '{productName}',
    name
  );
  const encodedText = encodeURIComponent(whatsappTemplate);
  // Mocking corporate sales number for Puerto Madryn Exports
  const whatsappUrl = `https://wa.me/542804451234?text=${encodedText}`;

  return (
    <div className="pt-32 pb-12 sm:pt-40 sm:pb-20 bg-slate-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10 animate-fade-in">
          <Link
            href={`/${lang}/productos`}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-ice-teal transition-colors"
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

          {/* Right Column: Information & Form pre-fill CTA */}
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
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 tracking-tight leading-tight">
                {name}
              </h1>
              <p className="mt-2 text-base font-semibold italic text-slate-400">
                {dict.productDetail.scientificName} {scientificName}
              </p>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-4 text-slate-600 font-light leading-relaxed text-sm sm:text-base">
              <p className="font-medium text-slate-700">{shortDescription}</p>
              <p>{description}</p>
            </div>

            {/* Technical Sheet (Ficha Técnica) */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
              <div className="bg-ocean-950 px-6 py-4 border-b border-ocean-900">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{dict.productDetail.technicalSheet}</span>
                </h2>
              </div>
              <div className="divide-y divide-slate-100 text-sm font-light text-slate-600">
                
                {/* Presentation */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldPresentation}
                  </span>
                  <span className="sm:col-span-2 text-ocean-900 font-medium">
                    {product.techSheet.presentation[lang]}
                  </span>
                </div>

                {/* Catch Zone */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldCatchZone}
                  </span>
                  <span className="sm:col-span-2 text-ocean-900 font-medium">
                    {product.techSheet.catchZone[lang]}
                  </span>
                </div>

                {/* Glazing */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldGlazing}
                  </span>
                  <span className="sm:col-span-2 text-ocean-900 font-medium">
                    {product.techSheet.glazing[lang]}
                  </span>
                </div>

                {/* Packaging */}
                <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] sm:self-start">
                    {dict.productDetail.fieldPackaging}
                  </span>
                  <span className="sm:col-span-2 text-ocean-900 font-medium text-slate-700">
                    {product.techSheet.packaging[lang]}
                  </span>
                </div>

              </div>
            </div>

            {/* B2B Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              
              {/* WhatsApp Quote */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 text-white bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5"
              >
                {/* WhatsApp Logo Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.49 4.887 1.491 5.482 0 9.94-4.461 9.943-9.943.001-2.654-1.03-5.15-2.902-7.025C16.702 1.802 14.208.775 11.554.775c-5.485 0-9.945 4.46-9.948 9.944 0 1.687.452 3.33 1.309 4.793L1.92 20.21l4.727-1.056z" />
                </svg>
                <span>{dict.productDetail.ctaWhatsApp}</span>
              </a>

              {/* Form Email pre-filled link */}
              <Link
                href={`/${lang}/contacto?product=${product.slug}`}
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-base font-bold border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 text-slate-700 bg-white hover:bg-slate-50 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{dict.productDetail.ctaContactForm}</span>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
