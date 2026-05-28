'use client';

import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface TextRevealProps {
  text: string;
  highlightText?: string;      // text to highlight with accent color
  highlightClass?: string;     // class for highlighted text
  staggerDelay?: number;       // ms between each word
  className?: string;
}

export default function TextReveal({
  text,
  highlightText,
  highlightClass = 'text-primary-400',
  staggerDelay = 80,
  className = '',
}: TextRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldAnimate(true);
    }
  }, [isVisible]);

  const words = text.split(' ');

  return (
    <span ref={ref} className={className} style={{ perspective: '600px' }}>
      {words.map((word, i) => {
        const isHighlight = highlightText && highlightText.includes(word);
        const wordDelay = shouldAnimate ? `${i * staggerDelay}ms` : '0ms';

        return (
          <span
            key={`${word}-${i}`}
            className={`text-reveal-word ${isHighlight ? highlightClass : ''}`}
            style={{
              animationDelay: wordDelay,
              animationPlayState: shouldAnimate ? 'running' : 'paused',
              marginRight: '0.3em',
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
