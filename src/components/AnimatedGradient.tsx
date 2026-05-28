'use client';

import React from 'react';

interface AnimatedGradientProps {
  className?: string;
  variant?: 'hero' | 'cta' | 'section';
}

export default function AnimatedGradient({
  className = '',
  variant = 'hero',
}: AnimatedGradientProps) {
  const configs = {
    hero: [
      { color: 'rgba(14, 165, 233, 0.12)', size: 500, top: '10%', left: '60%', animation: 'gradient-blob-1' },
      { color: 'rgba(13, 148, 136, 0.10)', size: 400, top: '50%', left: '20%', animation: 'gradient-blob-2' },
      { color: 'rgba(56, 189, 248, 0.06)', size: 600, top: '70%', left: '70%', animation: 'gradient-blob-3' },
    ],
    cta: [
      { color: 'rgba(14, 165, 233, 0.15)', size: 450, top: '20%', left: '30%', animation: 'gradient-blob-2' },
      { color: 'rgba(13, 148, 136, 0.12)', size: 350, top: '60%', left: '70%', animation: 'gradient-blob-1' },
    ],
    section: [
      { color: 'rgba(14, 165, 233, 0.06)', size: 400, top: '30%', left: '50%', animation: 'gradient-blob-3' },
      { color: 'rgba(13, 148, 136, 0.05)', size: 300, top: '70%', left: '30%', animation: 'gradient-blob-1' },
    ],
  };

  const blobs = configs[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`gradient-blob ${blob.animation}`}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            top: blob.top,
            left: blob.left,
          }}
        />
      ))}
    </div>
  );
}
