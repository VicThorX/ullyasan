'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Locale, locales } from '@/lib/dictionary';
import { NavigationDict } from '@/types/dictionary';

interface HeaderProps {
  lang: Locale;
  dict: NavigationDict;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();


  // Listen to scroll to update background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to switch language in route
  const getLanguagePath = (targetLang: Locale) => {
    const segments = pathname.split('/');
    segments[1] = targetLang; // index 1 because paths start with leading slash, e.g., ["", "es", "productos"]
    return segments.join('/');
  };

  // Close menus on change path
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: dict.home, href: `/${lang}` },
    { name: dict.products, href: `/${lang}/productos` },
    { name: dict.contact, href: `/${lang}/contacto` },
  ];

  const languageNames: Record<Locale, { name: string; flag: string }> = {
    es: { name: 'Español', flag: '🇪🇸' },
    en: { name: 'English', flag: '🇬🇧' },
    pt: { name: 'Português', flag: '🇵🇹' },
    de: { name: 'Deutsch', flag: '🇩🇪' },
    fr: { name: 'Français', flag: '🇫🇷' },
  };

  const isHomepage = pathname === `/${lang}` || pathname === `/${lang}/` || pathname === '/';
  const showSolidHeader = !isHomepage || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidHeader
          ? 'bg-ocean-black/95 backdrop-blur-md border-b border-ocean-800 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center group">
            <Image
              src="/logo-ull-yasan-color.png"
              alt="Ull Yasan Premium Seafood"
              width={160}
              height={48}
              className="h-10 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-400 border-b-2 border-primary-500 pb-1'
                      : 'text-ocean-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Controls (Language dropdown & Contact button) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-ocean-700 bg-ocean-900/50 hover:bg-ocean-800 text-sm font-medium text-white transition-colors duration-200 focus:outline-none"
              >
                <span>{languageNames[lang].flag}</span>
                <span>{languageNames[lang].name}</span>
                <svg
                  className={`w-4 h-4 text-ocean-300 transition-transform duration-200 ${
                    langDropdownOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-ocean-950 border border-ocean-800 shadow-xl py-1 z-50 animate-scale-up">
                    {locales.map((l) => (
                      <Link
                        key={l}
                        href={getLanguagePath(l)}
                        className={`flex items-center space-x-3 px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-ocean-900 ${
                          l === lang
                            ? 'text-primary-400 font-semibold bg-ocean-900/50'
                            : 'text-ocean-200 hover:text-white'
                        }`}
                      >
                        <span className="text-base">{languageNames[l].flag}</span>
                        <span>{languageNames[l].name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={`/${lang}/contacto`}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-ice-teal hover:bg-ice-teal-dark text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              {dict.requestQuote}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Language Selection icon for mobile directly */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="p-2 rounded-lg border border-ocean-800 bg-ocean-900/40 text-white hover:bg-ocean-800"
              >
                <span className="text-lg">{languageNames[lang].flag}</span>
              </button>
              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-40 rounded-xl bg-ocean-950 border border-ocean-800 shadow-2xl py-1 z-50">
                    {locales.map((l) => (
                      <Link
                        key={l}
                        href={getLanguagePath(l)}
                        className={`flex items-center space-x-2.5 px-3 py-2 text-xs transition-colors duration-200 hover:bg-ocean-900 ${
                          l === lang ? 'text-primary-400 font-bold' : 'text-ocean-200'
                        }`}
                      >
                        <span>{languageNames[l].flag}</span>
                        <span>{languageNames[l].name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ocean-200 hover:text-white hover:bg-ocean-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-ocean-black/95 backdrop-blur-lg z-40 animate-fade-in flex flex-col justify-between p-6">
          <nav className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-medium tracking-wide ${
                    isActive ? 'text-primary-400 border-l-4 border-primary-500 pl-3' : 'text-ocean-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pb-10">
            <Link
              href={`/${lang}/contacto`}
              className="flex items-center justify-center w-full py-4 text-base font-bold rounded-xl bg-ice-teal hover:bg-ice-teal-dark text-white shadow-lg transition-all duration-200"
            >
              {dict.requestQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
