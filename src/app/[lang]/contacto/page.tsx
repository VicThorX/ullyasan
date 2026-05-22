import React from 'react';
import ContactForm from '@/components/ContactForm';
import { products } from '@/data/products';
import { Locale, getDictionary } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ product?: string }>;
}

// Generate dynamic metadata for the Contact Page
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.seo.contactTitle,
    description: dict.seo.contactDesc,
    alternates: {
      canonical: `https://ullyasan.com/${lang}/contacto`,
      languages: {
        'es-AR': 'https://ullyasan.com/es/contacto',
        'en-US': 'https://ullyasan.com/en/contacto',
        'pt-BR': 'https://ullyasan.com/pt/contacto',
        'de-DE': 'https://ullyasan.com/de/contacto',
        'fr-FR': 'https://ullyasan.com/fr/contacto',
        'x-default': 'https://ullyasan.com/es/contacto',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang,
      url: `https://ullyasan.com/${lang}/contacto`,
      title: dict.seo.contactTitle,
      description: dict.seo.contactDesc,
    },
  };
}

export default async function ContactPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const defaultProduct = resolvedSearchParams.product || '';
  const dict = await getDictionary(lang);

  return (
    <div className="pt-36 pb-16 md:pt-44 md:pb-24 bg-slate-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-ice-teal bg-ice-teal-light mb-4">
            B2B Sales
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-900 tracking-tight leading-tight">
            {dict.contact.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg font-light text-slate-500 leading-relaxed">
            {dict.contact.subtitle}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Contact info & Vector Logistics Graphic */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in">
            
            {/* Info Box */}
            <div className="bg-ocean-black rounded-3xl border border-ocean-900 shadow-xl p-8 text-white space-y-6">
              <h2 className="text-lg font-bold text-white tracking-wide border-b border-ocean-800 pb-4">
                {dict.contact.infoTitle}
              </h2>
              
              <div className="space-y-5 text-sm font-light text-ocean-300">
                {/* Central Location */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-ocean-400 mb-0.5">
                      {lang === 'es' ? 'Dirección' : 'Address'}
                    </p>
                    <p className="text-slate-300">{dict.contact.infoAddress}</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-ocean-400 mb-0.5">
                      {lang === 'es' ? 'Teléfono Comercial' : 'Sales Phone'}
                    </p>
                    <p className="text-slate-300">{dict.contact.infoPhone}</p>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-ocean-400 mb-0.5">
                      {lang === 'es' ? 'Consultas B2B' : 'B2B Exports'}
                    </p>
                    <a href={`mailto:${dict.contact.infoEmail}`} className="text-primary-400 hover:text-primary-300 transition-colors font-medium">
                      {dict.contact.infoEmail}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-ocean-400 mb-0.5">
                      {lang === 'es' ? 'Horario de Atención' : 'Working Hours'}
                    </p>
                    <p className="text-slate-300">{dict.contact.infoHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Vector Graphics: South Atlantic Shipping Lanes */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 flex flex-col space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {lang === 'es' ? 'Rutas de Exportación Global' : 'Global Shipping Corridor'}
              </p>
              
              {/* Graphic container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center p-4">
                <svg className="w-full h-full text-slate-600" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Grid */}
                  <path d="M0 50h400M0 100h400M0 150h400M0 200h400M0 250h400M50 0v300M100 0v300M150 0v300M200 0v300M250 0v300M300 0v300M350 0v300" stroke="#1e293b" strokeWidth="0.5" />
                  
                  {/* South America outline (stylized) */}
                  <path d="M40 80c20-2 30 15 25 35s-20 40-20 60c0 25 15 45 10 70s-20 30-20 40" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* Nodes */}
                  {/* Patagonia Catch Node */}
                  <circle cx="50" cy="220" r="8" fill="#0ea5e9" fillOpacity="0.4" />
                  <circle cx="50" cy="220" r="4" fill="#0ea5e9" />
                  <text x="65" y="224" fill="#0ea5e9" fontSize="10" fontWeight="bold" fontFamily="sans-serif">FAO 41</text>
                  
                  {/* Puerto Madryn Port Node */}
                  <circle cx="45" cy="180" r="5" fill="#38bdf8" />
                  <text x="58" y="184" fill="#fff" fontSize="9" fontWeight="semibold" fontFamily="sans-serif">P. Madryn</text>

                  {/* Shipping Lane lines */}
                  {/* To Europe */}
                  <path d="M45 180C120 120 250 70 320 60" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="animate-[dash_10s_linear_infinite]" />
                  <circle cx="320" cy="60" r="4" fill="#0d9488" />
                  <text x="330" y="64" fill="#0d9488" fontSize="9" fontWeight="semibold" fontFamily="sans-serif">Europe</text>
                  
                  {/* To Americas */}
                  <path d="M45 180C100 130 180 110 240 120" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                  <circle cx="240" cy="120" r="4" fill="#0ea5e9" />
                  <text x="250" y="124" fill="#fff" fontSize="9" fontWeight="semibold" fontFamily="sans-serif">North America</text>
                  
                  {/* Decorative cargo ship icon */}
                  <path d="M160 115l15-5 3 5h-18z" fill="#0d9488" />
                  <rect x="165" y="112" width="6" height="3" fill="#38bdf8" />
                </svg>
                <div className="absolute bottom-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-md text-[10px] text-slate-400 font-mono border border-slate-800">
                  HARVEST TO PORT: IN TRANSIT
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 animate-slide-up">
            <ContactForm
              lang={lang}
              dict={dict.contact}
              products={products}
              defaultProduct={defaultProduct}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
