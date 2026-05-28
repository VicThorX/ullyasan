'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/3] w-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
        No images available
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-md">
        <Image
          src={images[activeIdx]}
          alt={`${name} - View ${activeIdx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover transition-all duration-300"
          priority
        />
      </div>

      {/* Thumbnails Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border-2 transition-all duration-200 ${
                activeIdx === idx
                  ? 'border-ull-gold ring-2 ring-ull-gold/20 scale-95 shadow-sm'
                  : 'border-transparent hover:border-slate-300 hover:scale-98 opacity-75 hover:opacity-100'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                sizes="15vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
