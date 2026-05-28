'use client';

import React from 'react';

interface MarqueeItem {
  label: string;
  icon?: React.ReactNode;
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[];
  speed?: number;          // seconds for one full cycle
  direction?: 'left' | 'right';
  className?: string;
  separator?: string;
}

export default function InfiniteMarquee({
  items,
  speed = 35,
  direction = 'left',
  className = '',
  separator = '·',
}: InfiniteMarqueeProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`overflow-hidden relative ${className}`}>
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ocean-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ocean-black to-transparent z-10 pointer-events-none" />

      <div
        className="marquee-track flex items-center whitespace-nowrap"
        style={{
          '--marquee-speed': `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        } as React.CSSProperties}
      >
        {duplicatedItems.map((item, i) => (
          <React.Fragment key={i}>
            <span className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
              {item.icon && <span className="text-primary-400">{item.icon}</span>}
              {item.label}
            </span>
            <span className="text-slate-700 text-lg mx-2">{separator}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
