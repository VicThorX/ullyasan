import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale, getDictionary } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

// Dynamic SEO Metadata Generation for SSG
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.seo.homeTitle,
    description: dict.seo.homeDesc,
    alternates: {
      canonical: `https://ullyasan.com/${lang}`,
      languages: {
        'es-AR': 'https://ullyasan.com/es',
        'en-US': 'https://ullyasan.com/en',
        'pt-BR': 'https://ullyasan.com/pt',
        'de-DE': 'https://ullyasan.com/de',
        'fr-FR': 'https://ullyasan.com/fr',
        'x-default': 'https://ullyasan.com/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang,
      url: `https://ullyasan.com/${lang}`,
      title: dict.seo.homeTitle,
      description: dict.seo.homeDesc,
      images: [
        {
          url: 'https://ullyasan.com/images/og-main.jpg',
          width: 1200,
          height: 630,
          alt: 'Ull Yasan Premium Seafood Export',
        },
      ],
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-ocean-black">
        {/* Background Image */}
        <Image
          src="/images/hero-sea.jpg"
          alt="Argentine South Atlantic Ocean Cold Waters"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        {/* Dynamic Dark Gradients for typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-black via-ocean-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-black/90 via-ocean-black/40 to-transparent" />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full animate-slide-up">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-6">
              {lang === 'es' ? 'Exportación Global' : 'Global Export'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              {dict.hero.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-2xl">
              {dict.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${lang}/productos`}
                className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl shadow-lg transition-all duration-200 text-white bg-ice-teal hover:bg-ice-teal-dark hover:shadow-xl hover:-translate-y-0.5"
              >
                {dict.hero.ctaCatalog}
              </Link>
              <Link
                href={`/${lang}/contacto`}
                className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl border border-slate-400 hover:border-white text-white bg-white/5 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                {dict.hero.ctaContact}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
      </section>

      {/* 2. WHY US SECTION */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ocean-900 tracking-tight">
              {dict.whyUs.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg font-light text-slate-500 leading-relaxed">
              {dict.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Traceability card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.12-1.789L9 2l5.447 2.724A2 2 0 0115 6.618v8.764a2 2 0 01-1.12 1.79L9 20z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2v18" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ocean-900 mb-3">{dict.whyUs.traceability.title}</h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">{dict.whyUs.traceability.description}</p>
            </div>

            {/* Quality card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ocean-900 mb-3">{dict.whyUs.quality.title}</h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">{dict.whyUs.quality.description}</p>
            </div>

            {/* Logistics card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ocean-900 mb-3">{dict.whyUs.logistics.title}</h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">{dict.whyUs.logistics.description}</p>
            </div>

            {/* Experience card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-ocean-900 mb-3">{dict.whyUs.experience.title}</h3>
              <p className="text-sm font-light text-slate-500 leading-relaxed">{dict.whyUs.experience.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ocean-900 tracking-tight">
              {dict.categories.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg font-light text-slate-500 leading-relaxed">
              {dict.categories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frozen Category Box */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg aspect-[16/10] bg-ocean-black flex items-end p-8 sm:p-12">
              <Image
                src="/images/products/langostino-1.jpg"
                alt="Frozen-at-sea premium catch"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-black via-ocean-black/40 to-transparent" />
              <div className="relative z-10 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2">
                  {lang === 'es' ? 'Tecnología de Congelamiento' : 'Freezing Tech'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  {dict.categories.frozenTitle}
                </h3>
                <p className="text-sm font-light text-slate-300 leading-relaxed mb-6 max-w-md">
                  {dict.categories.frozenDesc}
                </p>
                <Link
                  href={`/${lang}/productos?filter=frozen`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-primary-300 transition-colors"
                >
                  <span>{lang === 'es' ? 'Ver Productos Congelados' : 'Explore Frozen Line'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Fresh Category Box */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg aspect-[16/10] bg-ocean-black flex items-end p-8 sm:p-12">
              <Image
                src="/images/products/merluza-1.jpg"
                alt="Fresh aviation wholesale fish"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-black via-ocean-black/40 to-transparent" />
              <div className="relative z-10 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                  {lang === 'es' ? 'Frescura Aérea Inmediata' : 'Direct Air Freight'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  {dict.categories.freshTitle}
                </h3>
                <p className="text-sm font-light text-slate-300 leading-relaxed mb-6 max-w-md">
                  {dict.categories.freshDesc}
                </p>
                <Link
                  href={`/${lang}/productos?filter=fresh`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-emerald-300 transition-colors"
                >
                  <span>{lang === 'es' ? 'Ver Productos Frescos' : 'Explore Fresh Line'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
