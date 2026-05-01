import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface FavoritesViewProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function FavoritesView({ onNavigate, onAddToCart, favorites, onToggleFavorite }: FavoritesViewProps) {
  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Button 
                variant="ghost" 
                size="sm" 
                className="p-0 h-auto hover:bg-transparent text-slate-400 hover:text-green-700 transition-colors"
                onClick={() => onNavigate('shop')}
            >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Shop
            </Button>
          </div>
          <h1 className="text-3xl font-bold font-display text-slate-900 flex items-center gap-3">
            Your Favorites
            <Heart className="h-6 w-6 text-red-500 fill-current" />
          </h1>
          <p className="text-slate-500 mt-1">
            {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
        
        {favoriteProducts.length > 0 && (
            <Button 
                variant="outline" 
                className="rounded-xl border-slate-200"
                onClick={() => onNavigate('shop')}
            >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add More Items
            </Button>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        {favoriteProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {favoriteProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                  onClick={(p) => onNavigate('product-detail', { product: p })}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200"
          >
            <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Heart className="h-10 w-10 text-slate-200" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">No favorites yet</h2>
            <p className="text-slate-500 mt-2 max-w-xs mx-auto">
              Start adding your favorite organic items to your list!
            </p>
            <Button 
              className="mt-8 bg-green-700 hover:bg-green-800 rounded-2xl px-8 py-6 h-auto text-lg"
              onClick={() => onNavigate('shop')}
            >
              Start Shopping
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
