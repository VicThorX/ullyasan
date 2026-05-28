'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayKey, setDisplayKey] = useState(pathname);

  useEffect(() => {
    // On route change, trigger transition
    setIsTransitioning(true);
    setDisplayKey(pathname);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 50); // Small delay to ensure the class is applied before animation starts

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      key={displayKey}
      className={isTransitioning ? '' : 'page-transition-enter'}
    >
      {children}
    </div>
  );
}
