'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ScrollReveal from './ScrollReveal';
import { Product } from '@/types/product';
import { Locale } from '@/lib/dictionary';
import { CatalogDict } from '@/types/dictionary';

interface CatalogGridProps {
  products: Product[];
  lang: Locale;
  dict: CatalogDict;
}

type FilterType = 'all' | 'frozen' | 'fresh';

export default function CatalogGrid({ products, lang, dict }: CatalogGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [animationKey, setAnimationKey] = useState(0);

  // Synchronize with URL search parameter on client-side mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get('filter');
      if (filterParam === 'frozen' || filterParam === 'fresh') {
        setActiveFilter(filterParam);
      }
    }
  }, []);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    // Increment key to reset scroll reveal animations on filter change
    setAnimationKey((prev) => prev + 1);
  };

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') return true;
    return product.category === activeFilter;
  });

  const filterTabs: { type: FilterType; label: string }[] = [
    { type: 'all', label: dict.filterAll },
    { type: 'frozen', label: dict.filterFrozen },
    { type: 'fresh', label: dict.filterFresh },
  ];

  return (
    <div className="flex flex-col space-y-12">
      {/* Filters buttons bar */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-ocean-950/80 border border-ocean-800/60 backdrop-blur-md shadow-lg">
          {filterTabs.map((tab) => (
            <button
              key={tab.type}
              onClick={() => handleFilterChange(tab.type)}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tab.type
                  ? 'bg-ull-gold text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-ocean-900/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Product Cards with staggered entrance */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 animate-fade-in">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-slate-500 font-light">{dict.noProducts}</p>
        </div>
      ) : (
        <div key={animationKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product, index) => (
            <ScrollReveal
              key={product.slug}
              animation="slide-up"
              delay={index * 100}
              threshold={0.05}
            >
              <ProductCard
                product={product}
                lang={lang}
                dict={dict}
              />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
