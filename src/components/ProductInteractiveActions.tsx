'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { Locale } from '@/lib/dictionary';
import { Dictionary } from '@/types/dictionary';
import { useCart } from '@/context/CartContext';

interface ProductInteractiveActionsProps {
  product: Product;
  lang: Locale;
  dict: Dictionary;
}

export default function ProductInteractiveActions({
  product,
  lang,
  dict,
}: ProductInteractiveActionsProps) {
  const { cart, addToCart, setIsCartOpen } = useCart();
  const [mounted, setMounted] = useState(false);

  // Parse presentations from techSheet
  const presentationsList = product.techSheet.presentation[lang]
    .split('/')
    .map((p) => p.trim())
    .filter(Boolean);

  const [selectedPresentation, setSelectedPresentation] = useState(
    presentationsList[0] || (lang === 'es' ? 'Estándar' : 'Standard')
  );
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState<'kg' | 'tons' | 'boxes' | 'pallets'>('tons');
  const [itemNotes, setItemNotes] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Elegant skeleton loader while mounting client-side state
    return (
      <div className="animate-pulse space-y-4 pt-4">
        <div className="h-10 bg-ocean-900/60 rounded-xl" />
        <div className="h-10 bg-ocean-900/60 rounded-xl" />
      </div>
    );
  }

  // Check if this specific presentation of the product is already in the quote cart
  const isAdded = cart.some(
    (item) => item.product.slug === product.slug && item.presentation === selectedPresentation
  );

  const handleAddToCart = () => {
    if (isAdded) {
      setIsCartOpen(true);
      return;
    }
    addToCart(product, quantity, unit, selectedPresentation, itemNotes);
    // Reset specific item notes after adding
    setItemNotes('');
  };

  // Pre-fill quick direct WhatsApp url for this specific presentation and amount
  const handleQuickWhatsApp = () => {
    const unitText = dict.cart.units[unit];
    const message = dict.productDetail.whatsappMessageTemplate
      .replace('{productName}', `${product.name[lang]} (${selectedPresentation} - ${quantity} ${unitText})`);
    
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/542804451234?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6 pt-4 border-t border-ocean-900">
      {/* Selection Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Presentation Dropdown */}
        <div className="flex flex-col space-y-2 col-span-1 sm:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {dict.cart.presentation}
          </label>
          <select
            value={selectedPresentation}
            onChange={(e) => setSelectedPresentation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-ocean-800 bg-ocean-900/50 text-sm font-semibold text-white focus:border-ull-gold focus:outline-none appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2338bdf8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {presentationsList.map((p, idx) => (
              <option key={idx} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity Input */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {dict.cart.quantity}
          </label>
          <div className="flex items-center bg-ocean-900/50 border border-ocean-800 rounded-xl p-1 h-12">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-ocean-850 transition-colors flex items-center justify-center text-base font-bold cursor-pointer"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="flex-grow w-12 text-center bg-transparent text-sm font-bold text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-ocean-850 transition-colors flex items-center justify-center text-base font-bold cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        {/* B2B Unit Selection */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {dict.cart.unit}
          </label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as 'kg' | 'tons' | 'boxes' | 'pallets')}
            className="w-full h-12 px-4 rounded-xl border border-ocean-800 bg-ocean-900/50 text-sm font-semibold text-white focus:border-ull-gold focus:outline-none appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2338bdf8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <option value="kg">{dict.cart.units.kg}</option>
            <option value="tons">{dict.cart.units.tons}</option>
            <option value="boxes">{dict.cart.units.boxes}</option>
            <option value="pallets">{dict.cart.units.pallets}</option>
          </select>
        </div>
      </div>

      {/* Item-specific Notes field */}
      <div className="flex flex-col space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {lang === 'es' ? 'Notas de empaque / destino para esta especie' : 'Custom packing/destination notes for this species'}
        </label>
        <input
          type="text"
          value={itemNotes}
          onChange={(e) => setItemNotes(e.target.value)}
          placeholder={lang === 'es' ? 'Ej. requerimiento IQF, puerto de destino, etc.' : 'E.g. IQF requirements, discharge port, etc.'}
          className="w-full px-4 py-3 text-sm rounded-xl border border-ocean-800 bg-ocean-900/30 text-white placeholder-slate-600 focus:border-ull-gold focus:bg-ocean-900/50 focus:outline-none transition-all duration-200"
        />
      </div>

      {/* Add To Cart & WhatsApp CTA Area */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        {/* Main interactive add quote button */}
        <button
          onClick={handleAddToCart}
          className={`flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-sm font-bold shadow-lg transition-all duration-200 cursor-pointer ${
            isAdded
              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 hover:bg-emerald-900/40 hover:-translate-y-0.5'
              : 'bg-ull-gold hover:bg-ull-gold-dark text-white hover:shadow-xl hover:-translate-y-0.5'
          }`}
        >
          {isAdded ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>{dict.cart.addedToQuote}</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>{dict.cart.addToQuote}</span>
            </>
          )}
        </button>

        {/* Secondary: Quick WhatsApp direct quote */}
        <button
          onClick={handleQuickWhatsApp}
          className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-sm font-bold border border-ocean-800 hover:border-ocean-700 shadow-sm hover:shadow-md transition-all duration-200 text-slate-300 bg-ocean-950/40 hover:bg-ocean-900/40 hover:-translate-y-0.5 cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.49 4.887 1.491 5.482 0 9.94-4.461 9.943-9.943.001-2.654-1.03-5.15-2.902-7.025C16.702 1.802 14.208.775 11.554.775c-5.485 0-9.945 4.46-9.948 9.944 0 1.687.452 3.33 1.309 4.793L1.92 20.21l4.727-1.056z" />
          </svg>
          <span>{dict.productDetail.ctaWhatsApp}</span>
        </button>
      </div>
    </div>
  );
}
