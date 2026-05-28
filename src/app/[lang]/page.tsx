import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CatalogGrid from '@/components/CatalogGrid';
import OceanParticles from '@/components/OceanParticles';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import TextReveal from '@/components/TextReveal';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import WaveDivider from '@/components/WaveDivider';
import AnimatedGradient from '@/components/AnimatedGradient';
import ParallaxImage from '@/components/ParallaxImage';
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

// Helper function to get localized hero title text
function getHeroTitleText(lang: Locale): string {
  const titles: Record<string, string> = {
    es: 'Distribuidor internacional de pescados y mariscos',
    en: 'International distributor of premium seafood',
    pt: 'Distribuidor internacional de peixes e frutos do mar',
    de: 'Internationaler Händler für Fisch & Meeresfrüchte',
    fr: 'Distributeur international de poissons et crustacés',
  };
  return titles[lang] || titles.es;
}

function getHeroHighlight(lang: Locale): string {
  const highlights: Record<string, string> = {
    es: 'pescados y mariscos',
    en: 'premium seafood',
    pt: 'peixes e frutos do mar',
    de: 'Fisch & Meeresfrüchte',
    fr: 'poissons et crustacés',
  };
  return highlights[lang] || highlights.es;
}

// Marquee items for the infinite ticker
const marqueeItems = [
  { label: 'HACCP Certified' },
  { label: 'FDA Compliant' },
  { label: 'FAO Zone 41' },
  { label: 'Sustainably Wild' },
  { label: 'Langostino' },
  { label: 'Merluza Hubbsi' },
  { label: 'Calamar Illex' },
  { label: 'Vieira Patagónica' },
  { label: 'Abadejo' },
  { label: 'Corvina' },
  { label: 'Centolla' },
  { label: 'IQF Processing' },
  { label: 'Cold Chain -18°C' },
  { label: 'Global Export' },
];

export default async function HomePage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full bg-ocean-black relative overflow-hidden">
      {/* GPU-Accelerated floating deep-sea ocean particles */}
      <OceanParticles />

      {/* ======================================================
          1. HERO SECTION — Video/Image + Text Reveal + Gradient
          ====================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-ocean-black pt-24 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 items-stretch z-10 pb-16 lg:pb-0">
        
        {/* Animated Gradient Background */}
        <AnimatedGradient variant="hero" />

        {/* Left column — Text content with TextReveal */}
        <div className="w-full flex flex-col justify-center items-center py-16 lg:py-24 bg-transparent relative z-10">
          <div className="max-w-2xl w-full px-4 sm:px-8 md:px-12 xl:px-16 text-left">
            <ScrollReveal animation="fade-in" delay={100}>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-6">
                {lang === 'es' ? 'Exportación Global' : 'Global Export'}
              </span>
            </ScrollReveal>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
              <TextReveal
                text={getHeroTitleText(lang)}
                highlightText={getHeroHighlight(lang)}
                highlightClass="text-primary-400"
                staggerDelay={90}
              />
            </h1>
            
            <ScrollReveal animation="slide-up" delay={600}>
              <p className="mt-6 text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed max-w-xl">
                {dict.hero.subtitle}
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={800}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${lang}/productos`}
                  className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl shadow-lg transition-all duration-200 text-white bg-ull-gold hover:bg-ull-gold-dark hover:shadow-xl hover:-translate-y-0.5 text-center"
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
            </ScrollReveal>

            {/* Quick access cards */}
            <ScrollReveal animation="slide-up" delay={1000}>
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
            </ScrollReveal>
          </div>
        </div>

        {/* Right — Hero Video/Image with Parallax */}
        <div className="relative h-[350px] lg:h-auto min-h-[350px] overflow-hidden bg-transparent group">
          {/* Video background (if file exists) with image fallback */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/container-ship.png"
            className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-[6000ms]"
          >
            <source src="/videos/hero-ocean.mp4" type="video/mp4" />
          </video>

          {/* Visual Overlay Blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-black via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ocean-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ocean-black to-transparent" />
        </div>

        {/* Wave divider at bottom of hero */}
        <WaveDivider position="bottom" color="#0b2545" height={70} />
      </section>

      {/* ======================================================
          2. VALUE PROPOSITION & STATS — Asymmetric Layout
          ====================================================== */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-ocean-900 to-slate-900 text-white relative z-10 overflow-hidden">
        <AnimatedGradient variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Impact Stats & Text */}
            <ScrollReveal animation="slide-right">
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-2 border border-slate-700/50 rounded-full px-4 py-1.5 mb-8 bg-ocean-950/40 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-ull-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
                    {lang === 'es' ? 'Nuestra Esencia' : 'Our Essence'}
                  </span>
                </div>

                <div className="flex items-baseline mb-4">
                  <AnimatedCounter
                    value={10}
                    className="text-8xl md:text-[140px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary-200 via-primary-500 to-ull-gold drop-shadow-lg"
                    duration={2000}
                  />
                  <span className="text-6xl md:text-[80px] font-black text-ull-gold ml-2">+</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6 max-w-lg">
                  {lang === 'es' ? 'Años exportando lo mejor del Mar Argentino al mundo.' : 'Years exporting the best of the Argentine Sea to the world.'}
                </h2>
                
                <div className="space-y-4 text-slate-400 font-light text-sm md:text-base leading-relaxed max-w-lg">
                  <p>
                    {dict.whyUs.subtitle}
                  </p>
                  <p>
                    {lang === 'es' ? 'Somos una empresa dedicada a garantizar la excelencia en cada etapa de la cadena productiva, abasteciendo a los mercados más exigentes.' : 'We are a company dedicated to ensuring excellence at every stage of the production chain, supplying the most demanding markets.'}
                  </p>
                </div>
                
                <div className="mt-10 flex items-center space-x-3 text-primary-400 font-bold text-xs uppercase tracking-widest">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>{lang === 'es' ? 'Prestigio desde la Patagonia' : 'Prestige from Patagonia'}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              
              {/* Feature 1 */}
              <ScrollReveal animation="slide-up" delay={100} className="h-full">
                <div className="bg-ocean-950/60 backdrop-blur-md border border-slate-800/50 border-l-4 border-l-orange-500 rounded-2xl p-6 hover:bg-ocean-900/80 transition-colors h-full flex flex-col group">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.12-1.789L9 2l5.447 2.724A2 2 0 0115 6.618v8.764a2 2 0 01-1.12 1.79L9 20z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{dict.whyUs.traceability.title}</h3>
                  <p className="text-xs font-light text-slate-400 leading-relaxed">{dict.whyUs.traceability.description}</p>
                </div>
              </ScrollReveal>

              {/* Feature 2 */}
              <ScrollReveal animation="slide-up" delay={200} className="h-full">
                <div className="bg-ocean-950/60 backdrop-blur-md border border-slate-800/50 border-l-4 border-l-primary-500 rounded-2xl p-6 hover:bg-ocean-900/80 transition-colors h-full flex flex-col group">
                  <div className="w-10 h-10 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{dict.whyUs.quality.title}</h3>
                  <p className="text-xs font-light text-slate-400 leading-relaxed">{dict.whyUs.quality.description}</p>
                </div>
              </ScrollReveal>

              {/* Feature 3 */}
              <ScrollReveal animation="slide-up" delay={300} className="h-full">
                <div className="bg-ocean-950/60 backdrop-blur-md border border-slate-800/50 border-l-4 border-l-blue-500 rounded-2xl p-6 hover:bg-ocean-900/80 transition-colors h-full flex flex-col group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{dict.whyUs.logistics.title}</h3>
                  <p className="text-xs font-light text-slate-400 leading-relaxed">{dict.whyUs.logistics.description}</p>
                </div>
              </ScrollReveal>

              {/* Feature 4 */}
              <ScrollReveal animation="slide-up" delay={400} className="h-full">
                <div className="bg-ocean-950/60 backdrop-blur-md border border-slate-800/50 border-l-4 border-l-ull-gold rounded-2xl p-6 hover:bg-ocean-900/80 transition-colors h-full flex flex-col group">
                  <div className="w-10 h-10 rounded-full bg-ull-gold/10 text-ull-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{dict.whyUs.experience.title}</h3>
                  <p className="text-xs font-light text-slate-400 leading-relaxed">{dict.whyUs.experience.description}</p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          3. CATALOGUE GRID — Staggered Product Cards
          ====================================================== */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-900 to-ocean-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-4">
                {lang === 'es' ? 'Catálogo Premium FAO 41' : 'Premium Catalog FAO 41'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {dict.catalog.title}
              </h2>
              <div className="w-16 h-1 bg-ull-gold mt-4 mx-auto rounded-full" />
              <p className="mt-5 text-base sm:text-lg font-light text-slate-300 leading-relaxed">
                {dict.catalog.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Catalog interactive grid component */}
          <CatalogGrid
            products={products}
            lang={lang}
            dict={dict.catalog}
          />
        </div>
      </section>

      {/* ======================================================
          INFINITE MARQUEE TICKER
          ====================================================== */}
      <section className="py-8 bg-ocean-black relative z-10 border-y border-slate-900/50">
        <InfiniteMarquee items={marqueeItems} speed={40} />
      </section>

      {/* ======================================================
          4. EXCELLENCE BLOCK — Parallax Image + Scroll Reveal
          ====================================================== */}
      <section className="py-24 md:py-32 bg-ocean-black text-white overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Port Drone Photo Left — Parallax */}
            <ScrollReveal animation="slide-right" delay={0} className="col-span-1 lg:col-span-6">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl group border border-slate-800">
                <ParallaxImage
                  src="/images/port-drone.png"
                  alt="Argentina Export Port Dock Drone View"
                  speed={0.12}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold text-primary-400 uppercase tracking-widest">{lang === 'es' ? 'Infraestructura Portuaria' : 'Port Infrastructure'}</p>
                  <p className="text-sm text-slate-300 font-light mt-1">{lang === 'es' ? 'Operaciones de exportación global desde la Patagonia.' : 'Global export operations departing from Patagonia.'}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Right */}
            <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
              <ScrollReveal animation="fade-in" delay={200}>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-3 block">
                  {lang === 'es' ? 'Argentina al Mundo' : 'Argentine Heritage'}
                </span>
              </ScrollReveal>

              <ScrollReveal animation="slide-left" delay={300}>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  {dict.home.excellenceTitle}
                </h2>
                <div className="w-12 h-1 bg-primary-500 my-6 rounded-full" />
              </ScrollReveal>
              
              <ScrollReveal animation="slide-left" delay={400}>
                <p className="text-base sm:text-lg font-light text-slate-300 leading-relaxed mb-6">
                  {dict.home.excellenceDesc1}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="slide-left" delay={500}>
                <p className="text-base font-light text-slate-400 leading-relaxed mb-8">
                  {dict.home.excellenceDesc2}
                </p>
              </ScrollReveal>

              {/* Quality Badges — Staggered */}
              <ScrollReveal animation="slide-up" delay={600}>
                <div className="pt-8 border-t border-slate-800/80 flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">HACCP Certified</span>
                  <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">FDA Compliant</span>
                  <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">FAO Zone 41</span>
                  <span className="px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider bg-white/5 border border-slate-800 text-slate-300 uppercase">Sustainably Wild</span>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

        {/* Wave divider at bottom */}
        <WaveDivider position="bottom" color="#032b45" height={60} />
      </section>

      {/* ======================================================
          5. CALL TO ACTION — Gradient + Glow + Scroll Reveal
          ====================================================== */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-primary-950 via-ocean-black to-ocean-black z-10">
        
        {/* Animated Gradient */}
        <AnimatedGradient variant="cta" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ull-gold/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary-500/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="scale-up">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950/60 border border-primary-800/40 mb-6">
              {lang === 'es' ? 'Oportunidad de Negocio' : 'B2B Trade Opportunity'}
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={200}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {dict.home.ctaTitle}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={400}>
            <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              {dict.home.ctaSubtitle}
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={600}>
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
