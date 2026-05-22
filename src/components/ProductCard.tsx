import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Locale } from '@/lib/dictionary';
import { CatalogDict } from '@/types/dictionary';

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

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Category Tag */}
      <span
        className={`absolute top-4 left-4 z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-md ${
          product.category === 'frozen'
            ? 'bg-blue-600/90 backdrop-blur-sm'
            : 'bg-emerald-600/90 backdrop-blur-sm'
        }`}
      >
        {product.category === 'frozen' ? dict.filterFrozen : dict.filterFresh}
      </span>

      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={coverImage}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
          loading="lazy"
        />
        {/* Deep blue color overlay on hover */}
        <div className="absolute inset-0 bg-ocean-black/10 group-hover:bg-ocean-black/30 transition-colors duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          {/* Scientific Name */}
          <p className="text-xs font-medium italic text-slate-400 mb-1">
            {scientificName}
          </p>
          {/* Localized Name */}
          <h3 className="text-lg font-bold text-ocean-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-1">
            {name}
          </h3>
          {/* Short Description */}
          <p className="mt-2.5 text-sm font-light text-slate-500 leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
        </div>

        {/* CTA link to localized detail page */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <Link
            href={`/${lang}/productos/${product.slug}`}
            className="inline-flex items-center justify-between w-full text-sm font-bold text-ice-teal group-hover:text-ice-teal-dark transition-colors duration-200"
          >
            <span>{dict.viewDetails}</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
