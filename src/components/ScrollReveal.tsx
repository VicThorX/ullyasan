'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-up' | 'blur-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;       // ms
  duration?: number;    // ms
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  animation = 'slide-up',
  delay = 0,
  duration = 800,
  threshold = 0.05,
  rootMargin = '0px 0px 50px 0px',
  className = '',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin });

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-animation={animation}
      className={`${isVisible ? 'scroll-visible' : 'scroll-hidden'} ${className}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
