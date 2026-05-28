'use client';

import React, { useState } from 'react';
import { Locale } from '@/lib/dictionary';
import { ContactDict } from '@/types/dictionary';
import { Product } from '@/types/product';

interface ContactFormProps {
  lang: Locale;
  dict: ContactDict;
  products: Product[];
  defaultProduct?: string;
}

export default function ContactForm({
  lang,
  dict,
  products,
  defaultProduct = '',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    productOfInterest: defaultProduct || 'general',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call for B2B submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        productOfInterest: 'general',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-ocean-950/40 border border-ocean-800 shadow-2xl rounded-3xl p-6 sm:p-10 transition-all duration-300">
      {status === 'success' ? (
        <div className="flex flex-col items-center text-center py-8 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-950/50 border border-emerald-800/40 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-950/20">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            {dict.submitButton === 'Enviar Solicitud de Cotización' ? 'Solicitud Enviada' : 'Inquiry Submitted'}
          </h3>
          <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
            {dict.successMessage}
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-8 px-6 py-2.5 rounded-xl border border-ocean-800 bg-ocean-950/40 hover:bg-ocean-900/40 text-xs font-semibold text-slate-300 transition-all duration-200 cursor-pointer"
          >
            {lang === 'es' ? 'Enviar otro mensaje' : 'Send another inquiry'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {dict.fieldName}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl border border-ocean-800 bg-ocean-900/30 text-white placeholder-slate-650 text-sm focus:border-ull-gold focus:bg-ocean-900/50 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {dict.fieldCompany}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-xl border border-ocean-800 bg-ocean-900/30 text-white placeholder-slate-650 text-sm focus:border-ull-gold focus:bg-ocean-900/50 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {dict.fieldEmail}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 rounded-xl border border-ocean-800 bg-ocean-900/30 text-white placeholder-slate-650 text-sm focus:border-ull-gold focus:bg-ocean-900/50 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Product of Interest */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="productOfInterest" className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {lang === 'es' ? 'Producto de Interés' : 'Product of Interest'}
            </label>
            <select
              id="productOfInterest"
              name="productOfInterest"
              value={formData.productOfInterest}
              onChange={handleChange}
              disabled={status === 'sending'}
              className="w-full px-4 py-3 rounded-xl border border-ocean-800 bg-ocean-900/30 text-white text-sm focus:border-ull-gold focus:bg-ocean-900/50 focus:outline-none appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2338bdf8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.25rem',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <option value="general" className="bg-ocean-950 text-white">
                {lang === 'es' ? 'Consulta General de Importación' : 'General Import Inquiry'}
              </option>
              {products.map((p) => (
                <option key={p.slug} value={p.slug} className="bg-ocean-950 text-white">
                  {p.name[lang]} ({p.scientificName})
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {dict.fieldMessage}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'sending'}
              placeholder={dict.formPlaceholderMessage}
              className="w-full px-4 py-3 rounded-xl border border-ocean-800 bg-ocean-900/30 text-white placeholder-slate-600 text-sm focus:border-ull-gold focus:bg-ocean-900/50 focus:outline-none transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center px-6 py-4 rounded-xl text-base font-semibold shadow-lg shadow-ull-gold-dark/10 transition-all duration-200 text-white bg-ull-gold hover:bg-ull-gold-dark hover:shadow-xl focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed hover:-translate-y-0.5 cursor-pointer"
          >
            {status === 'sending' ? (
              <span className="flex items-center space-x-2">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {dict.sending}
              </span>
            ) : (
              <span>{dict.submitButton}</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
