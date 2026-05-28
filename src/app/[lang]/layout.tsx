import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, getDictionary, locales } from '@/lib/dictionary';
import { CartProvider } from '@/context/CartContext';
import PageTransition from '@/components/PageTransition';

// Premium Fonts Configuration
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;
  const activeLang = lang as Locale;
  const dict = await getDictionary(activeLang);

  return (
    <html
      lang={activeLang}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-ocean-black text-slate-100">
        <CartProvider>
          <Header lang={activeLang} dict={dict.nav} cartDict={dict.cart} />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer lang={activeLang} dict={dict.footer} navDict={dict.nav} />
        </CartProvider>
      </body>
    </html>
  );
}
