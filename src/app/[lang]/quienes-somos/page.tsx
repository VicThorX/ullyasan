import React from 'react';
import Image from 'next/image';
import { Locale, getDictionary, locales } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

// SSG pre-render locales at build time
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Generate dynamic metadata for the Who We Are Page
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.seo.aboutUsTitle,
    description: dict.seo.aboutUsDesc,
    alternates: {
      canonical: `https://ullyasan.com/${lang}/quienes-somos`,
      languages: {
        'es-AR': `https://ullyasan.com/es/quienes-somos`,
        'en-US': `https://ullyasan.com/en/quienes-somos`,
        'pt-BR': `https://ullyasan.com/pt/quienes-somos`,
        'de-DE': `https://ullyasan.com/de/quienes-somos`,
        'fr-FR': `https://ullyasan.com/fr/quienes-somos`,
        'x-default': `https://ullyasan.com/es/quienes-somos`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang,
      url: `https://ullyasan.com/${lang}/quienes-somos`,
      title: dict.seo.aboutUsTitle,
      description: dict.seo.aboutUsDesc,
    },
  };
}

export default async function WhoWeArePage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);
  const pageDict = dict.aboutUsPage;

  return (
    <div className="pt-32 pb-16 md:pt-44 md:pb-24 bg-ocean-black min-h-screen text-slate-100 relative overflow-hidden">
      {/* Decorative Glow Effects */}
      <div className="absolute top-1/4 right-0 w-[80vw] max-w-[400px] h-[400px] rounded-full bg-ull-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[90vw] max-w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 md:space-y-32">
        
        {/* 1. Page Header */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-6">
            {lang === 'es' ? 'Patrimonio y Excelencia' : 'Heritage & Excellence'}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {pageDict.title}
          </h1>
          <div className="w-16 h-1 bg-ull-gold mt-4 mx-auto rounded-full" />
          <p className="mt-5 text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed">
            {pageDict.subtitle}
          </p>
        </div>

        {/* 2. Story Grid (Split layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* History Description */}
          <div className="col-span-12 lg:col-span-6 space-y-6 animate-slide-up">
            <span className="text-xs font-bold uppercase tracking-widest text-ull-gold">
              {lang === 'es' ? 'Nuestras Raíces' : 'Our Roots'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {pageDict.historyTitle}
            </h2>
            <div className="w-12 h-0.5 bg-ull-gold rounded-full" />
            
            <div className="space-y-4 text-sm sm:text-base font-light text-slate-300 leading-relaxed">
              <p>{pageDict.historyText1}</p>
              <p>{pageDict.historyText2}</p>
            </div>
            
            {/* Core Stats Box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-ocean-900">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary-400 leading-none">FAO 41</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
                  {lang === 'es' ? 'Zona de Captura' : 'Harvest Zone'}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary-400 leading-none">HACCP</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
                  {lang === 'es' ? 'Garantía Inocua' : 'Food Safety Standard'}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary-400 leading-none">100%</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
                  {lang === 'es' ? 'Salvaje y Trazable' : 'Wild & Traceable'}
                </p>
              </div>
            </div>
          </div>

          {/* Port graphic / Drone view on the right */}
          <div className="col-span-12 lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-ocean-800 animate-fade-in group">
            <Image
              src="/images/port-drone.png"
              alt="Ull Yasan Patagonian Harbor Operations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-102 transition-transform duration-[6000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{lang === 'es' ? 'Operaciones Portuarias' : 'Harbor Operations'}</p>
              <p className="text-xs text-slate-300 font-light mt-1">{lang === 'es' ? 'Infraestructura de almacenamiento y embarque en Puerto Madryn.' : 'Cold-storage and loading infrastructure at Puerto Madryn.'}</p>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission card */}
          <div className="bg-ocean-950/40 border border-ocean-850 rounded-3xl p-8 hover:border-ocean-700/60 hover:bg-ocean-900/20 transition-all duration-300 flex flex-col space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-800/40 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">{pageDict.missionTitle}</h3>
            <p className="text-sm font-light text-slate-400 leading-relaxed">{pageDict.missionText}</p>
          </div>

          {/* Vision card */}
          <div className="bg-ocean-950/40 border border-ocean-850 rounded-3xl p-8 hover:border-ocean-700/60 hover:bg-ocean-900/20 transition-all duration-300 flex flex-col space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">{pageDict.visionTitle}</h3>
            <p className="text-sm font-light text-slate-400 leading-relaxed">{pageDict.visionText}</p>
          </div>
        </section>

        {/* 4. Core Pillars / Values Section */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-400">
              {lang === 'es' ? 'Nuestra Filosofía B2B' : 'Our B2B Philosophy'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {pageDict.valuesTitle}
            </h2>
            <div className="w-12 h-0.5 bg-ull-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sustainability value */}
            <div className="bg-ocean-950/40 border border-ocean-800 rounded-2xl p-6 flex flex-col space-y-3 group hover:border-ocean-700 hover:bg-ocean-900/20 transition-all duration-300">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest leading-none">01</span>
              <h3 className="text-base font-bold text-white transition-colors group-hover:text-primary-300">
                {pageDict.valueSustainabilityTitle}
              </h3>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                {pageDict.valueSustainabilityDesc}
              </p>
            </div>

            {/* Quality value */}
            <div className="bg-ocean-950/40 border border-ocean-800 rounded-2xl p-6 flex flex-col space-y-3 group hover:border-ocean-700 hover:bg-ocean-900/20 transition-all duration-300">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest leading-none">02</span>
              <h3 className="text-base font-bold text-white transition-colors group-hover:text-primary-300">
                {pageDict.valueQualityTitle}
              </h3>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                {pageDict.valueQualityDesc}
              </p>
            </div>

            {/* Traceability value */}
            <div className="bg-ocean-950/40 border border-ocean-800 rounded-2xl p-6 flex flex-col space-y-3 group hover:border-ocean-700 hover:bg-ocean-900/20 transition-all duration-300">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest leading-none">03</span>
              <h3 className="text-base font-bold text-white transition-colors group-hover:text-primary-300">
                {pageDict.valueTraceabilityTitle}
              </h3>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                {pageDict.valueTraceabilityDesc}
              </p>
            </div>

            {/* Partnership value */}
            <div className="bg-ocean-950/40 border border-ocean-800 rounded-2xl p-6 flex flex-col space-y-3 group hover:border-ocean-700 hover:bg-ocean-900/20 transition-all duration-300">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest leading-none">04</span>
              <h3 className="text-base font-bold text-white transition-colors group-hover:text-primary-300">
                {pageDict.valuePartnershipTitle}
              </h3>
              <p className="text-xs font-light text-slate-400 leading-relaxed">
                {pageDict.valuePartnershipDesc}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Infrastructure Banner */}
        <section className="bg-gradient-to-br from-ocean-950 to-ocean-900 border border-ocean-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden group shadow-2xl">
          {/* Faint container ship graphic overlay */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 pointer-events-none transition-transform duration-[8000ms] group-hover:scale-105">
            <Image
              src="/images/container-ship.png"
              alt="Global Freight Shipping Lanes"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-400">
              {lang === 'es' ? 'Puerto Madryn, Chubut' : 'Puerto Madryn Base'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {pageDict.infrastructureTitle}
            </h2>
            <div className="w-12 h-0.5 bg-ull-gold rounded-full" />
            <p className="text-sm sm:text-base font-light text-slate-300 leading-relaxed pt-2">
              {pageDict.infrastructureText}
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold bg-ocean-black/60 text-slate-300 uppercase tracking-wider border border-ocean-800">
                {lang === 'es' ? 'Flota Propia' : 'Selective Fleet'}
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold bg-ocean-black/60 text-slate-300 uppercase tracking-wider border border-ocean-800">
                {lang === 'es' ? 'Exportación Marítima Directa' : 'Direct Ocean Freight'}
              </span>
              <span className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold bg-ocean-black/60 text-slate-300 uppercase tracking-wider border border-ocean-800">
                {lang === 'es' ? 'Cadena de Frío Controlada' : 'Continuous Cold Chain'}
              </span>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
