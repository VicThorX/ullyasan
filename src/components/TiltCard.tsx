'use client';

import React, { useRef, useCallback, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;     // degrees
  perspective?: number; // px
  scale?: number;       // hover scale multiplier
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  perspective = 1000,
  scale = 1.02,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (-mouseY / (rect.height / 2)) * maxTilt;
      const rotateY = (mouseX / (rect.width / 2)) * maxTilt;

      // Calculate mouse position percentages for shine
      const percentX = ((e.clientX - rect.left) / rect.width) * 100;
      const percentY = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      card.style.setProperty('--mouse-x', `${percentX}%`);
      card.style.setProperty('--mouse-y', `${percentY}%`);
    },
    [maxTilt, perspective, scale]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective]);

  // Mobile Gyroscope / Device Orientation Effect
  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (!isTouch) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return;
      const card = cardRef.current;
      if (!card) return;

      let normGamma = e.gamma; // -90 to 90
      if (normGamma > 45) normGamma = 45;
      if (normGamma < -45) normGamma = -45;

      let normBeta = e.beta - 45; // Assume holding phone at 45deg
      if (normBeta > 45) normBeta = 45;
      if (normBeta < -45) normBeta = -45;

      // Make the tilt slightly stronger on mobile for better tactile feel
      const mobileMaxTilt = maxTilt * 1.5;
      const rotateX = (normBeta / 45) * -mobileMaxTilt;
      const rotateY = (normGamma / 45) * mobileMaxTilt;

      const percentX = 50 + (normGamma / 45) * 50;
      const percentY = 50 + (normBeta / 45) * 50;

      card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
      card.style.setProperty('--mouse-x', `${percentX}%`);
      card.style.setProperty('--mouse-y', `${percentY}%`);
      
      const shine = card.querySelector('.tilt-shine') as HTMLElement;
      if (shine) {
        shine.style.opacity = '0.8'; // Keep shine visible on mobile as phone moves
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [maxTilt, perspective]);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
      <div className="tilt-shine" />
    </div>
  );
}
