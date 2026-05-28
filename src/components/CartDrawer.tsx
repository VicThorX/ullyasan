'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Locale } from '@/lib/dictionary';
import { CartDict } from '@/types/dictionary';

interface CartDrawerProps {
  lang: Locale;
  dict: CartDict;
}

export default function CartDrawer({ lang, dict }: CartDrawerProps) {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    updateUnit,
    updateNotes,
    removeFromCart,
    clearCart,
    getWhatsAppUrl,
  } = useCart();

  const [globalNotes, setGlobalNotes] = useState('');
  const [mounted, setMounted] = useState(false);

  // Sync component mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    const url = getWhatsAppUrl(lang, dict, globalNotes);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[480px] max-w-full bg-ocean-950 border-l border-ocean-800 shadow-2xl flex flex-col transition-transform duration-300 transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-ocean-800/80 flex items-center justify-between bg-ocean-black/40">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-ull-gold/15 text-ull-gold flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">{dict.title}</h2>
              {cart.length > 0 && (
                <p className="text-[10px] text-slate-400 font-light mt-0.5">
                  {cart.length} {cart.length === 1 ? 'especie' : 'especies'} · {totalItems} unidades
                </p>
              )}
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-ocean-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-20 h-20 bg-ocean-900/50 rounded-full flex items-center justify-center text-ocean-500 border border-ocean-800/40">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{dict.empty}</h3>
                <p className="text-xs text-slate-400 font-light mt-1.5 max-w-xs mx-auto leading-relaxed">
                  {dict.emptySub}
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-ull-gold hover:bg-ull-gold-dark text-white shadow-md transition-colors"
              >
                {lang === 'es' ? 'Explorar Productos' : 'Browse Products'}
              </button>
            </div>
          ) : (
            cart.map((item, index) => {
              const name = item.product.name[lang];
              const scientificName = item.product.scientificName;
              return (
                <div
                  key={`${item.product.slug}-${item.presentation}`}
                  className="bg-ocean-900/35 border border-ocean-800/60 rounded-2xl p-4 space-y-4 hover:border-ocean-700/60 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start space-x-3.5">
                    {/* Thumbnail */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-ocean-900 flex-shrink-0 border border-ocean-800">
                      <Image
                        src={item.product.images[0]}
                        alt={name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    {/* Names & Details */}
                    <div className="flex-grow min-w-0">
                      <h4 className="text-sm font-bold text-white truncate leading-snug">{name}</h4>
                      <p className="text-[11px] font-medium text-slate-500 italic mt-0.5">{scientificName}</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-light leading-normal">
                        <span className="font-semibold text-slate-500">{dict.presentation}:</span>{' '}
                        <span className="text-primary-400 font-medium">{item.presentation}</span>
                      </p>
                    </div>
                    {/* Delete item */}
                    <button
                      onClick={() => removeFromCart(item.product.slug, item.presentation)}
                      className="p-1 text-slate-400 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                      title={dict.remove}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  {/* Quantity & Unit Controls */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-ocean-800/40">
                    {/* Quantity Selector */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {dict.quantity}
                      </label>
                      <div className="flex items-center bg-ocean-950/70 border border-ocean-800 rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.product.slug, item.presentation, item.quantity - 1)}
                          className="w-7 h-7 rounded-lg text-slate-400 hover:text-white hover:bg-ocean-900 transition-colors flex items-center justify-center text-sm font-bold"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.product.slug,
                              item.presentation,
                              parseInt(e.target.value) || 1
                            )
                          }
                          min="1"
                          className="flex-grow w-10 text-center bg-transparent text-sm font-bold text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button
                          onClick={() => updateQuantity(item.product.slug, item.presentation, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg text-slate-400 hover:text-white hover:bg-ocean-900 transition-colors flex items-center justify-center text-sm font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Unit Selector */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {dict.unit}
                      </label>
                      <select
                        value={item.unit}
                        onChange={(e) =>
                          updateUnit(
                            item.product.slug,
                            item.presentation,
                            e.target.value as 'kg' | 'tons' | 'boxes' | 'pallets'
                          )
                        }
                        className="w-full h-9 px-3 rounded-xl border border-ocean-800 bg-ocean-950/70 text-xs font-semibold text-white focus:border-ull-gold focus:outline-none appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1rem',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <option value="kg">{dict.units.kg}</option>
                        <option value="tons">{dict.units.tons}</option>
                        <option value="boxes">{dict.units.boxes}</option>
                        <option value="pallets">{dict.units.pallets}</option>
                      </select>
                    </div>
                  </div>

                  {/* Item-specific Notes */}
                  <div className="flex flex-col space-y-1.5">
                    <input
                      type="text"
                      placeholder={lang === 'es' ? 'Notas para este ítem...' : 'Notes for this item...'}
                      value={item.notes}
                      onChange={(e) => updateNotes(item.product.slug, item.presentation, e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-ocean-800 bg-ocean-950/40 text-slate-300 placeholder-slate-600 focus:border-ull-gold focus:bg-ocean-950/70 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-ocean-800/80 space-y-5 bg-ocean-black/40">
            {/* Global Notes Area */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {dict.notes}
              </label>
              <textarea
                rows={3}
                placeholder={dict.notesPlaceholder}
                value={globalNotes}
                onChange={(e) => setGlobalNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-ocean-800 bg-ocean-950/70 text-white placeholder-slate-600 focus:border-ull-gold focus:outline-none resize-none transition-all duration-200"
              />
            </div>

            {/* Checkouts & Utility CTAs */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-sm font-bold shadow-lg shadow-emerald-950/30 hover:shadow-emerald-950/50 transition-all duration-200 text-white bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5 focus:outline-none"
              >
                {/* WhatsApp Logo Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.49 4.887 1.491 5.482 0 9.94-4.461 9.943-9.943.001-2.654-1.03-5.15-2.902-7.025C16.702 1.802 14.208.775 11.554.775c-5.485 0-9.945 4.46-9.948 9.944 0 1.687.452 3.33 1.309 4.793L1.92 20.21l4.727-1.056z" />
                </svg>
                <span>{dict.checkoutWhatsApp}</span>
              </button>

              <div className="flex items-center justify-between pt-2 px-1 text-xs">
                <button
                  onClick={clearCart}
                  className="text-slate-400 hover:text-red-400 transition-colors font-light"
                >
                  {dict.clear}
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-ull-gold hover:text-primary-400 transition-colors font-semibold"
                >
                  {lang === 'es' ? 'Seguir Agregando' : 'Add More Species'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
