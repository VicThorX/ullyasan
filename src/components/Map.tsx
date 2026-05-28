'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  lang?: string;
}

// Custom DivIcon for the map markers to match our brand (cyan + gold)
const createCustomIcon = (label: string) => {
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div class="relative group cursor-pointer flex flex-col items-center">
        <div class="absolute -top-1 -left-1 w-6 h-6 bg-primary-400 rounded-full animate-ping opacity-60"></div>
        <div class="relative w-4 h-4 bg-primary-500 border-2 border-ocean-950 rounded-full z-10 shadow-[0_0_10px_rgba(12,178,192,0.6)]"></div>
        <div class="mt-2 px-2 py-1 bg-ocean-950/90 backdrop-blur-sm border border-ocean-800 rounded-md text-[10px] font-bold text-slate-200 whitespace-nowrap shadow-lg group-hover:border-primary-500 group-hover:text-white transition-colors">
          ${label}
        </div>
      </div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  });
};

const locations = [
  {
    id: 'bue',
    name: 'Buenos Aires',
    coords: [-34.6037, -58.3816] as [number, number],
    desc: { es: 'Oficinas Comerciales', en: 'Commercial Offices' },
  },
  {
    id: 'mdp',
    name: 'Mar del Plata',
    coords: [-38.0055, -57.5426] as [number, number],
    desc: { es: 'Puerto / Procesamiento', en: 'Port / Processing' },
  },
  {
    id: 'pmd',
    name: 'Puerto Madryn',
    coords: [-42.7692, -65.0385] as [number, number],
    desc: { es: 'Puerto / Patagonia', en: 'Port / Patagonia' },
  },
];

export default function Map({ lang = 'es' }: MapProps) {
  // Center roughly between the 3 points
  const center: [number, number] = [-38.5, -61.0];

  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 relative z-0">
      <MapContainer
        center={center}
        zoom={5}
        scrollWheelZoom={false}
        className="w-full h-full absolute inset-0 bg-ocean-black"
        style={{ background: '#020c1b' }}
      >
        {/* CartoDB Dark Matter Base Map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          subdomains={['a', 'b', 'c', 'd']}
          maxZoom={20}
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.coords}
            icon={createCustomIcon(loc.name)}
          >
            <Popup className="custom-popup">
              <div className="p-1">
                <p className="font-bold text-ocean-950 m-0">{loc.name}</p>
                <p className="text-xs text-ocean-700 m-0 mt-1">
                  {lang === 'es' ? loc.desc.es : loc.desc.en}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
