'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale, locales, Locale } from '@/lib/dictionary';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // 1. Check if there's a stored preference
    const storedLang = localStorage.getItem('preferred-lang') as Locale | null;
    if (storedLang && locales.includes(storedLang)) {
      router.replace(`/${storedLang}`);
      return;
    }

    // 2. Detect browser language
    const browserLangs = navigator.languages || [navigator.language];
    let detectedLang: Locale = defaultLocale;

    for (const lang of browserLangs) {
      const shortLang = lang.split('-')[0].toLowerCase() as Locale;
      if (locales.includes(shortLang)) {
        detectedLang = shortLang;
        break;
      }
    }

    // Save detected language as preference and redirect
    localStorage.setItem('preferred-lang', detectedLang);
    router.replace(`/${detectedLang}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-ocean-black flex items-center justify-center text-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Sleek, premium loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-ull-gold/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-ull-gold rounded-full animate-spin" />
        </div>
        <p className="text-slate-400 text-xs font-light uppercase tracking-widest animate-pulse">
          Ull Yasan Premium Seafood
        </p>
      </div>
    </div>
  );
}
