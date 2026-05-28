'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Locale } from '@/lib/dictionary';
import { CatalogDict } from '@/types/dictionary';
import { useCart } from '@/context/CartContext';

import TiltCard from '@/components/TiltCard';

interface ProductCardProps {
  product: Product;
  lang: Locale;
  dict: CatalogDict;
}

export default function ProductCard({ product, lang, dict }: ProductCardProps) {
  const name = product.name[lang];
  const shortDescription = product.shortDescription[lang];
  const scientificName = product.scientificName;
  const coverImage = product.images[0];
  
  const { cart, addToCart, setIsCartOpen } = useCart();

  // Check if this product is already anywhere in the quote cart
  const isAdded = cart.some((item) => item.product.slug === product.slug);

  // Extract a sensible default presentation option from the tech sheet string
  const getPrimaryPresentation = () => {
    try {
      const presentations = product.techSheet.presentation[lang];
      // Split by / or , and grab the first main element
      const firstOption = presentations.split('/')[0].split('(')[0].trim();
      return firstOption || presentations.substring(0, 20);
    } catch (e) {
      return lang === 'es' ? 'Estándar' : 'Standard';
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Stop redirection since the card might be wrapped or clicked
    e.stopPropagation();
    
    if (isAdded) {
      // If already added, simply slide open the cart drawer for them to inspect
      setIsCartOpen(true);
      return;
    }

    const defaultPresentation = getPrimaryPresentation();
    addToCart(product, 1, 'tons', defaultPresentation, '');
  };

  return (
    <TiltCard className="rounded-2xl">
      <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-ocean-950/40 border border-ocean-800/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-ocean-700/80 hover:bg-ocean-900/40">
      {/* Category Tag */}
      <span
        className={`absolute top-4 left-4 z-10 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${
          product.category === 'frozen'
            ? 'bg-blue-600/90 backdrop-blur-sm'
            : 'bg-emerald-600/90 backdrop-blur-sm'
        }`}
      >
        {product.category === 'frozen' ? dict.filterFrozen : dict.filterFresh}
      </span>

      {/* Product Image */}
      <Link href={`/${lang}/productos/${product.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-ocean-950 block">
        <Image
          src={coverImage}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-103"
          priority={false}
          loading="lazy"
        />
        {/* Soft dark color overlay on hover */}
        <div className="absolute inset-0 bg-ocean-black/20 group-hover:bg-ocean-black/40 transition-colors duration-300" />
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/${lang}/productos/${product.slug}`} className="flex-grow block group/link">
          {/* Scientific Name */}
          <p className="text-xs font-medium italic text-slate-500 mb-1 leading-none">
            {scientificName}
          </p>
          {/* Localized Name */}
          <h3 className="text-lg font-bold text-white group-hover/link:text-primary-300 transition-colors duration-200 line-clamp-1">
            {name}
          </h3>
          {/* Short Description */}
          <p className="mt-2.5 text-sm font-light text-slate-400 leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
        </Link>

        {/* CTA Bar */}
        <div className="mt-6 pt-4 border-t border-ocean-900 flex items-center justify-between gap-4">
          <Link
            href={`/${lang}/productos/${product.slug}`}
            className="inline-flex items-center text-xs font-bold text-ull-gold hover:text-primary-400 transition-colors duration-200"
          >
            <span>{dict.viewDetails}</span>
            <svg
              className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Quick Add B2B Button */}
          <button
            onClick={handleQuickAdd}
            className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              isAdded
                ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 hover:bg-emerald-900/40'
                : 'bg-ocean-900/60 hover:bg-ull-gold hover:text-white text-slate-200 border border-ocean-800'
            }`}
          >
            {isAdded ? (
              <>
                <svg className="w-3.5 h-3.5 animate-scale-up" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>{lang === 'es' ? 'Añadido' : 'Added'}</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
                <span>{lang === 'es' ? 'Cotizar' : 'Quote'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
    </TiltCard>
  );
}
