'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
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
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/60 border border-slate-200/30 backdrop-blur-md shadow-inner">
          {filterTabs.map((tab) => (
            <button
              key={tab.type}
              onClick={() => setActiveFilter(tab.type)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === tab.type
                  ? 'bg-white text-ice-teal shadow-md'
                  : 'text-slate-500 hover:text-ocean-900 hover:bg-white/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Product Cards */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-slide-up">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              lang={lang}
              dict={dict}
            />
          ))}
        </div>
      )}
    </div>
  );
}
