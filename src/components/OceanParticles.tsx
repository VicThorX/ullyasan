'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

export default function OceanParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 18 particles with randomized parameters on client-side mount
    const newParticles: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 150 + 20}px`,
      delay: `${Math.random() * -25}s`, // Start immediately at random timeline points
      duration: `${Math.random() * 25 + 20}s`, // Float slowly (between 20s and 45s)
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="ocean-particle"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size,
              '--delay': p.delay,
              '--duration': p.duration,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
