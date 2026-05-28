'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { Locale } from '@/lib/dictionary';
import { CartDict } from '@/types/dictionary';

export interface CartItem {
  product: Product;
  quantity: number;
  unit: 'kg' | 'tons' | 'boxes' | 'pallets';
  presentation: string;
  notes: string;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (
    product: Product,
    quantity: number,
    unit: 'kg' | 'tons' | 'boxes' | 'pallets',
    presentation: string,
    notes: string
  ) => void;
  removeFromCart: (slug: string, presentation: string) => void;
  updateQuantity: (slug: string, presentation: string, quantity: number) => void;
  updateUnit: (slug: string, presentation: string, unit: 'kg' | 'tons' | 'boxes' | 'pallets') => void;
  updateNotes: (slug: string, presentation: string, notes: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsCartOpen: (isOpen: boolean) => void;
  getWhatsAppUrl: (lang: Locale, dict: CartDict, globalNotes: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('ullyasan-quote-cart');
      if (storedCart) {
        try {
          setCart(JSON.parse(storedCart));
        } catch (e) {
          console.error('Failed to parse cart from localStorage:', e);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem('ullyasan-quote-cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (
    product: Product,
    quantity: number,
    unit: 'kg' | 'tons' | 'boxes' | 'pallets',
    presentation: string,
    notes: string
  ) => {
    setCart((prev) => {
      // Find if item with same slug AND presentation already exists
      const existingIndex = prev.findIndex(
        (item) => item.product.slug === product.slug && item.presentation === presentation
      );

      if (existingIndex > -1) {
        // Increment quantity and update notes/unit if provided
        const newCart = [...prev];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + quantity,
          unit: unit,
          notes: notes || newCart[existingIndex].notes,
        };
        return newCart;
      }

      // Add as new item
      return [...prev, { product, quantity, unit, presentation, notes }];
    });
    
    // Automatically slide cart drawer open
    setIsCartOpen(true);
  };

  const removeFromCart = (slug: string, presentation: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.slug === slug && item.presentation === presentation))
    );
  };

  const updateQuantity = (slug: string, presentation: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug, presentation);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.slug === slug && item.presentation === presentation
          ? { ...item, quantity }
          : item
      )
    );
  };

  const updateUnit = (
    slug: string,
    presentation: string,
    unit: 'kg' | 'tons' | 'boxes' | 'pallets'
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.slug === slug && item.presentation === presentation
          ? { ...item, unit }
          : item
      )
    );
  };

  const updateNotes = (slug: string, presentation: string, notes: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.slug === slug && item.presentation === presentation
          ? { ...item, notes }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const getWhatsAppUrl = (lang: Locale, dict: CartDict, globalNotes: string) => {
    const formattedItems = cart
      .map((item, idx) => {
        const name = item.product.name[lang];
        const unitName = dict.units[item.unit] || item.unit;
        let itemStr = `${idx + 1}. *${name}* (${item.product.scientificName})\n` +
          `   - ${dict.presentation}: ${item.presentation}\n` +
          `   - ${dict.quantity}: ${item.quantity} ${unitName}`;
        if (item.notes.trim()) {
          itemStr += `\n   - Note: _${item.notes.trim()}_`;
        }
        return itemStr;
      })
      .join('\n\n');

    let template = dict.whatsappTemplate;
    template = template.replace('{items}', formattedItems);
    template = template.replace('{notes}', globalNotes.trim() ? `_${globalNotes.trim()}_` : '-');

    const encodedText = encodeURIComponent(template);
    // Standard corporate export contact sales line for Puerto Madryn base
    return `https://wa.me/542804451234?text=${encodedText}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateUnit,
        updateNotes,
        clearCart,
        toggleCart,
        setIsCartOpen,
        getWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
