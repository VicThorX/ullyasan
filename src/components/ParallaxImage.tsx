'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;       // parallax multiplier (0.1 = subtle, 0.3 = strong)
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.15,
  className = '',
  sizes = '100vw',
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const updateParallax = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only process if element is in or near viewport
      if (rect.bottom < -100 || rect.top > windowHeight + 100) return;

      // Calculate offset: 0 when centered in viewport, +/- when above/below
      const centerOffset = rect.top + rect.height / 2 - windowHeight / 2;
      const parallaxOffset = centerOffset * speed;

      image.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(1.15)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax(); // Initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative w-full h-full ${className}`}>
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ transition: 'transform 0.1s linear' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
