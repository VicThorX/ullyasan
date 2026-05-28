'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Map component, disabling SSR
// This is required because Leaflet relies on the `window` object
const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-2xl bg-ocean-950 flex items-center justify-center border border-slate-800/80">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-ocean-800 border-t-primary-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Loading Map...</p>
      </div>
    </div>
  ),
});

export default DynamicMap;
