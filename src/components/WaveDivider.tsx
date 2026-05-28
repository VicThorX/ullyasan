'use client';

import React from 'react';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  flip?: boolean;
  color?: string;           // CSS color for the wave fill
  bgColor?: string;         // CSS color for the transparent background
  height?: number;          // px height of the wave container
  className?: string;
}

export default function WaveDivider({
  position = 'bottom',
  flip = false,
  color = '#020c1b',        // ocean-black
  height = 80,
  className = '',
}: WaveDividerProps) {
  const isTop = position === 'top';

  return (
    <div
      className={`absolute left-0 right-0 overflow-hidden pointer-events-none z-20 ${
        isTop ? 'top-0' : 'bottom-0'
      } ${className}`}
      style={{
        height: `${height}px`,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    >
      {/* Wave Layer 1 — Fastest, most opaque */}
      <svg
        className="wave-layer absolute bottom-0 w-[200%] h-full"
        style={{ '--wave-speed': '8s' } as React.CSSProperties}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,120 L0,120 Z"
          fill={color}
          fillOpacity="0.6"
        />
      </svg>

      {/* Wave Layer 2 — Medium */}
      <svg
        className="wave-layer absolute bottom-0 w-[200%] h-full"
        style={{ '--wave-speed': '12s' } as React.CSSProperties}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C160,20 320,100 480,60 C640,20 800,100 960,60 C1120,20 1280,100 1440,60 L1440,120 L0,120 Z"
          fill={color}
          fillOpacity="0.35"
        />
      </svg>

      {/* Wave Layer 3 — Slowest, faintest */}
      <svg
        className="wave-layer absolute bottom-0 w-[200%] h-full"
        style={{ '--wave-speed': '18s' } as React.CSSProperties}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,40 C1300,20 1400,60 1440,80 L1440,120 L0,120 Z"
          fill={color}
          fillOpacity="0.2"
        />
      </svg>
    </div>
  );
}
