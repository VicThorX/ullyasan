import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CatalogGrid from '@/components/CatalogGrid';
import { products } from '@/data/products';
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
          url: 'https://ullyasan.com/images/logo-ull-yasan-color.png',
          width: 800,
          height: 600,
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
    <div className="flex flex-col w-full bg-ocean-black">
      {/* 1. HERO SECTION (Split Layout - Perfect 50/50 Viewport Split) */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-ocean-black pt-24 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left column (Text content centered horizontally within its 50% viewport pane) */}
        <div className="w-full flex flex-col justify-center items-center py-16 lg:py-24 bg-ocean-black relative z-10">
          <div className="max-w-2xl w-full px-4 sm:px-8 md:px-12 xl:px-16 animate-slide-up text-left">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-6">
              {lang === 'es' ? 'Exportación Global' : 'Global Export'}
            </span>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              {lang === 'es' ? (
                <>
                  Distribuidor internacional de <span className="text-primary-400">pescados y mariscos</span>
                </>
              ) : lang === 'en' ? (
                <>
                  International distributor of <span className="text-primary-400">premium seafood</span>
                </>
              ) : lang === 'pt' ? (
                <>
                  Distribuidor internacional de <span className="text-primary-400">peixes e frutos do mar</span>
                </>
              ) : lang === 'de' ? (
                <>
                  Internationaler Händler für <span className="text-primary-400">Fisch & Meeresfrüchte</span>
                </>
              ) : (
                <>
                  Distributeur international de <span className="text-primary-400">poissons et crustacés</span>
                </>
              )}
            </h1>
            
            <p className="mt-6 text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-xl">
              {dict.hero.subtitle}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${lang}/productos`}
                className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl shadow-lg transition-all duration-200 text-white bg-ice-teal hover:bg-ice-teal-dark hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                {dict.hero.ctaCatalog}
              </Link>
              <Link
                href={`/${lang}/contacto`}
                className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl border border-slate-700 hover:border-slate-500 text-white bg-white/5 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                {dict.hero.ctaContact}
              </Link>
            </div>

            {/* Quick access cards (Lower Left Selector) */}
            <div className="mt-12 md:mt-16 border-t border-slate-800/80 pt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {lang === 'es'
                  ? 'Acceso Rápido por Conservación'
                  : lang === 'en'
                  ? 'Quick Access by Preservation'
                  : lang === 'pt'
                  ? 'Acesso Rápido por Conservação'
                  : lang === 'de'
                  ? 'Schnellzugriff nach Konservierung'
                  : 'Accès Rapide par Conservation'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href={`/${lang}/productos?filter=frozen`}
                  className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 text-blue-400 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      {lang === 'es' ? 'Congelados' : lang === 'en' ? 'Frozen Line' : lang === 'pt' ? 'Congelados' : lang === 'de' ? 'Gefroren' : 'Surgelés'}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {lang === 'es' ? 'IQF e Interfoliados' : lang === 'en' ? 'IQF & Interleaved' : lang === 'pt' ? 'IQF e Interfolhados' : lang === 'de' ? 'IQF & Einzelblöcke' : 'IQF & Intercalaires'}
                    </p>
                  </div>
                </Link>

                <Link
                  href={`/${lang}/productos?filter=fresh`}
                  className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 text-emerald-400 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      {lang === 'es' ? 'Línea de Frescos' : lang === 'en' ? 'Fresh Line' : lang === 'pt' ? 'Linha de Frescos' : lang === 'de' ? 'Frische-Linie' : 'Gamme Frais'}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {lang === 'es' ? 'Despachos Aéreos' : lang === 'en' ? 'Direct Air Freight' : lang === 'pt' ? 'Fresco por Via Aérea' : lang === 'de' ? 'Direkte Luftfracht' : 'Fret Aérien Direct'}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right logistics image (Bleeds to the right edge of viewport on desktop, falls back to block card on mobile) */}
        <div className="relative h-[350px] lg:h-auto min-h-[350px] overflow-hidden bg-ocean-black group lg:border-l lg:border-slate-900/50">
          <Image
            src="/images/container-ship.png"
            alt="Global Export Logistics Container Ship"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-85 group-hover:scale-103 transition-transform duration-[6000ms]"
          />
          {/* Visual Overlay Blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-black via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ocean-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ocean-black to-transparent" />
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: "¿Por qué somos tu partner ideal?" */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-ocean-black to-slate-900 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-400">
              {lang === 'es' ? 'Socio Comercial B2B' : 'B2B Strategic Partner'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
              {dict.whyUs.title}
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mt-4 rounded-full" />
            <p className="mt-5 text-base sm:text-lg font-light text-slate-400 leading-relaxed">
              {dict.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Traceability card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-800/40 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.12-1.789L9 2l5.447 2.724A2 2 0 0115 6.618v8.764a2 2 0 01-1.12 1.79L9 20z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2v18" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{dict.whyUs.traceability.title}</h3>
              <p className="text-sm font-light text-slate-400 leading-relaxed">{dict.whyUs.traceability.description}</p>
            </div>

            {/* Quality card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{dict.whyUs.quality.title}</h3>
              <p className="text-sm font-light text-slate-400 leading-relaxed">{dict.whyUs.quality.description}</p>
            </div>

            {/* Logistics card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{dict.whyUs.logistics.title}</h3>
              <p className="text-sm font-light text-slate-400 leading-relaxed">{dict.whyUs.logistics.description}</p>
            </div>

            {/* Experience card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-800/40 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">{dict.whyUs.experience.title}</h3>
              <p className="text-sm font-light text-slate-400 leading-relaxed">{dict.whyUs.experience.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATALOGUE GRID OF ALL 13 PRODUCTS */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-fade-in">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-ice-teal bg-ice-teal/10 border border-ice-teal/20 mb-4">
              {lang === 'es' ? 'Catálogo Premium FAO 41' : 'Premium Catalog FAO 41'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 tracking-tight leading-tight">
              {dict.catalog.title}
            </h2>
            <div className="w-16 h-1 bg-ice-teal mt-4 mx-auto rounded-full" />
            <p className="mt-5 text-base sm:text-lg font-light text-slate-500 leading-relaxed">
              {dict.catalog.subtitle}
            </p>
          </div>

          {/* Catalog interactive grid component */}
          <CatalogGrid
            products={products}
            lang={lang}
            dict={dict.catalog}
          />
        </div>
      </section>

      {/* 4. EXCELLENCE BLOCK ("Excelencia Argentina en Productos del Mar") */}
      <section className="py-24 md:py-32 bg-ocean-black text-white overflow-hidden relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Port Drone Photo Left */}
            <div className="col-span-12 lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group border border-slate-800">
              <Image
                src="/images/port-drone.png"
                alt="Argentina Export Port Dock Drone View"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-102 transition-transform duration-[6000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{lang === 'es' ? 'Infraestructura Portuaria' : 'Port Infrastructure'}</p>
                <p className="text-sm text-slate-300 font-light mt-1">{lang === 'es' ? 'Operaciones de exportación global desde la Patagonia.' : 'Global export operations departing from Patagonia.'}</p>
              </div>
            </div>

            {/* Content Right */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3 block">
                {lang === 'es' ? 'Argentina al Mundo' : 'Argentine Heritage'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {dict.home.excellenceTitle}
              </h2>
              <div className="w-12 h-1 bg-primary-500 my-6 rounded-full" />
              
              <p className="text-base sm:text-lg font-light text-slate-300 leading-relaxed mb-6">
                {dict.home.excellenceDesc1}
              </p>
              <p className="text-base font-light text-slate-400 leading-relaxed mb-8">
                {dict.home.excellenceDesc2}
              </p>

              {/* Quality Badges */}
              <div className="pt-8 border-t border-slate-800/80 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">HACCP Certified</span>
                <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">FDA Compliant</span>
                <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">FAO Zone 41</span>
                <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">Sustainably Wild</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION (CTA) */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary-950 via-ocean-black to-ocean-black border-t border-primary-900/30">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ice-teal/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-6">
            {lang === 'es' ? 'Oportunidad de Negocio' : 'B2B Trade Opportunity'}
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {dict.home.ctaTitle}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {dict.home.ctaSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={`/${lang}/contacto`}
              className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 text-base font-bold rounded-xl text-ocean-900 bg-primary-400 hover:bg-primary-300 shadow-xl shadow-primary-950/30 hover:shadow-primary-950/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              {dict.home.ctaButton}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            <Link
              href={`/${lang}/productos`}
              className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 text-base font-bold rounded-xl text-white border border-slate-700 hover:border-slate-500 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              {lang === 'es' ? 'Explorar Especies' : 'Explore Species'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
