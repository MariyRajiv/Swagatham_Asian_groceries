import { motion } from 'motion/react';
import { Star, ShieldCheck, Truck, ShoppingCart, ArrowLeft, Minus, Plus, Heart } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigate: (page: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ProductDetailView({ product, onAddToCart, onNavigate, isFavorite, onToggleFavorite }: ProductDetailViewProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
      <div 
        className="flex items-center gap-2 mb-10 text-slate-500 hover:text-green-700 cursor-pointer transition-colors group" 
        onClick={() => onNavigate('shop')}
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Products</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left: Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="aspect-square bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm relative group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {product.featured && (
              <Badge className="absolute top-6 left-6 bg-amber-500/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border-none">
                Best Seller
              </Badge>
            )}
            <button 
              onClick={() => onToggleFavorite(product.id)}
              className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-md ${
                isFavorite 
                ? 'bg-red-50 text-red-500' 
                : 'bg-white/80 text-slate-400 hover:text-red-500'
              }`}
            >
                <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
             {[1, 2, 3, 4].map(idx => (
               <div key={idx} className="aspect-square bg-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-500 transition-all opacity-60 hover:opacity-100">
                  <img src={product.image} className="w-full h-full object-cover" alt="Detail" referrerPolicy="no-referrer" />
               </div>
             ))}
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none font-bold uppercase px-3">
                {product.category}
              </Badge>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className={`h-4 w-4 ${star <= Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-900">{product.rating}</span>
                <span className="text-xs text-slate-400 font-medium">({product.reviews} customer reviews)</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-2">
               <span className="text-4xl font-bold text-green-700">€{product.price.toFixed(2)}</span>
               <span className="text-lg text-slate-400 font-medium italic">/ {product.unit}</span>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            {product.description} This authentic product is sourced directly for unmatched quality and freshness. 
            Perfect for traditional cooking and bringing home-style flavors to your table.
          </p>

          <Separator />

          <div className="space-y-6">
            <div className="flex items-center gap-6">
               <div className="flex items-center bg-slate-100 rounded-2xl p-1.5 border border-slate-200">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 text-slate-600 hover:bg-white rounded-xl"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-5 w-5" />
                  </Button>
                  <span className="w-12 text-center text-lg font-bold font-display">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 text-slate-600 hover:bg-white rounded-xl"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
               </div>
               
               <div className="flex-1">
                  <Button 
                    className="w-full bg-green-700 hover:bg-green-800 text-white rounded-2xl h-14 shadow-lg shadow-green-100 font-bold text-lg"
                    onClick={() => onAddToCart(product, quantity)}
                  >
                    <ShoppingCart className="mr-3 h-5 w-5" />
                    Add to Cart
                  </Button>
               </div>
            </div>

            <Button variant="outline" className="w-full h-14 rounded-2xl border-slate-200 font-bold">
               Buy Now
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                   <Truck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                   <p className="text-sm font-bold">Free Shipping</p>
                   <p className="text-[10px] uppercase text-slate-400 font-bold">Orders over €25</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                   <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                   <p className="text-sm font-bold">Safe Payments</p>
                   <p className="text-[10px] uppercase text-slate-400 font-bold">Secured by Stripe</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
