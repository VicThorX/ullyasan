import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/dictionary';
import { FooterDict, NavigationDict } from '@/types/dictionary';
import DynamicMap from '@/components/DynamicMap';

interface FooterProps {
  lang: Locale;
  dict: FooterDict;
  navDict: NavigationDict;
}

export default function Footer({ lang, dict, navDict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-black border-t border-ocean-900 text-ocean-300 py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand block */}
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-4">
            <Link href={`/${lang}`} className="flex items-center group">
              <Image
                src="/logo-ull-yasan-color.png"
                alt="Ull Yasan Premium Seafood"
                width={150}
                height={45}
                className="h-9 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]"
              />
            </Link>
            <p className="text-sm max-w-sm text-ocean-400 font-light leading-relaxed">
              {dict.tagline}
            </p>
          </div>

          {/* Quick links block */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              {navDict.products}
            </h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href={`/${lang}/productos`} className="hover:text-primary-400 transition-colors">
                  {navDict.products}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/quienes-somos`} className="hover:text-primary-400 transition-colors">
                  {navDict.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contacto`} className="hover:text-primary-400 transition-colors">
                  {navDict.requestQuote}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}`} className="hover:text-primary-400 transition-colors">
                  {navDict.home}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact shortcuts block */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              B2B Exports
            </h3>
            <ul className="space-y-2 text-sm font-light">
              <li className="flex items-center space-x-2 text-ocean-400">
                <svg className="w-4 h-4 text-ocean-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Puerto Madryn, Argentina</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-ocean-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:exports@ullyasan.com" className="hover:text-primary-400 transition-colors">
                  exports@ullyasan.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Map Section */}
        <div className="mt-16 mb-8 w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-400">
              {lang === 'es' ? 'Presencia Operativa' : 'Operational Presence'}
            </h3>
            <span className="px-3 py-1 bg-ocean-900 border border-ocean-800 rounded-full text-[10px] text-ocean-400 uppercase tracking-widest font-bold">
              Argentina
            </span>
          </div>
          <div className="w-full h-[300px] sm:h-[400px]">
            <DynamicMap lang={lang} />
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="mt-12 pt-8 border-t border-ocean-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ocean-500 font-light text-center md:text-left">
          <div>
            &copy; {currentYear} {dict.companyName}. {dict.rights}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span>Patagonian Cold Water Harvest</span>
            <span className="hidden sm:inline">·</span>
            <span>HACCP & FDA Standard Quality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
