import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HomeViewProps {
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function HomeView({ onNavigate, onAddToCart, favorites, onToggleFavorite }: HomeViewProps) {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      <Hero 
        onCtaClick={() => onNavigate('shop')} 
        onDealsClick={() => onNavigate('shop', { category: 'Deals' })}
      />

      {/* Category Selection */}
      <section id="categories" className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-display font-bold">Shop by Category</h2>
            <p className="text-slate-500">Find everything you need for your kitchen</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => onNavigate('shop')} 
              className="rounded-full px-6 border-slate-200"
            >
              Grocery List
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('shop')} 
              className="flex items-center gap-2 font-bold text-green-700 hover:text-green-800 hover:bg-green-50"
            >
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CATEGORIES.slice(0, 12).map((cat, idx) => (
            <motion.div 
              key={cat}
              whileHover={{ y: -5 }}
              onClick={() => onNavigate('shop', { category: cat })}
              className="group cursor-pointer bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-4 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                {/* Simplified Icon Replacement */}
                <span className="text-green-700 font-bold group-hover:text-white">{cat[0]}</span>
              </div>
              <span className="text-sm font-bold text-slate-700">{cat}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-display font-bold">Featured Selection</h2>
            <p className="text-slate-500">Premium quality items handpicked for you</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 -mb-2 no-scrollbar">
            {["Premium", "Essentials", "Seasonal", "Special Offers", "New Arrivals", "Best Sellers"].map((tag) => (
              <Button 
                key={tag}
                variant="ghost" 
                size="sm"
                className="rounded-full px-4 py-1.5 h-auto text-xs font-bold whitespace-nowrap bg-slate-50 text-slate-600 hover:bg-green-50 hover:text-green-700 border border-slate-100"
                onClick={() => onNavigate('shop', { search: tag })}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard 
                product={product} 
                onAddToCart={onAddToCart}
                onClick={(p) => onNavigate('product-detail', { product: p })}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Banner / Trust Section */}
      <section className="container mx-auto px-4">
        <div className="relative rounded-[2.5rem] bg-green-700 overflow-hidden px-8 py-16 md:px-20 md:py-24">
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-800 rounded-full blur-3xl -ml-48 -mb-48 opacity-50" />

           <div className="relative z-10 grid md:grid-cols-2 items-center gap-12 text-white">
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                    Celebrating <span className="text-amber-400 italic">Tradition</span> In Every Household.
                 </h2>
                 <p className="text-green-50 text-lg leading-relaxed opacity-90">
                    We source directly from farms and trusted suppliers to ensure the authentic aroma 
                    and flavor reaches your home kitchen just like it used to.
                 </p>
                 <div className="flex items-center gap-10">
                    <div>
                       <p className="text-3xl font-bold">5k+</p>
                       <p className="text-xs uppercase tracking-widest text-green-200">Products</p>
                    </div>
                    <div>
                       <p className="text-3xl font-bold">10k+</p>
                       <p className="text-xs uppercase tracking-widest text-green-200">Happy Families</p>
                    </div>
                    <div>
                       <p className="text-3xl font-bold">1hr</p>
                       <p className="text-xs uppercase tracking-widest text-green-200">Ulm Delivery</p>
                    </div>
                 </div>
              </div>
              <div className="flex justify-center overflow-hidden">
                 <div className="w-80 h-80 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800&auto=format&fit=crop" 
                      className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-3"
                      alt="Asian Spices"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-400/30 rounded-3xl -z-10 rotate-[-2deg]" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Best Value Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 text-white">
           <div className="bg-slate-900 rounded-3xl p-10 flex flex-col justify-between items-start gap-12 overflow-hidden relative group">
              <div className="space-y-4">
                <Badge className="bg-amber-500 hover:bg-amber-500 border-none">Weekly Deals</Badge>
                <h3 className="text-4xl font-display font-bold max-w-xs leading-tight">Up to 40% Off Bulk Rice Purchases</h3>
              </div>
              <Button 
                className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8"
                onClick={() => onNavigate('shop', { category: 'Deals' })}
              > 
                Shop Deals 
              </Button>
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop" 
                className="absolute -right-20 -bottom-10 w-64 h-64 object-cover rounded-full opacity-40 group-hover:scale-110 transition-transform duration-700" 
                alt="Rice"
                referrerPolicy="no-referrer"
              />
           </div>

           <div className="bg-orange-500 rounded-3xl p-10 flex flex-col justify-between items-start gap-12 overflow-hidden relative group">
              <div className="space-y-4">
                <Badge className="bg-white text-orange-500 hover:bg-white border-none">Quick Recipes</Badge>
                <h3 className="text-4xl font-display font-bold max-w-xs leading-tight">Authentic Curry Kits Now Available</h3>
              </div>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500 rounded-full px-8"
                onClick={() => onNavigate('shop', { category: 'Meal Kits' })}
              > 
                Order Kits 
              </Button>
              <img 
                src="https://images.unsplash.com/photo-1589301973594-845610d32247?q=80&w=400&auto=format&fit=crop" 
                className="absolute -right-20 -bottom-10 w-64 h-64 object-cover rounded-full opacity-40 group-hover:scale-110 transition-transform duration-700" 
                alt="Curry"
                referrerPolicy="no-referrer"
              />
           </div>
        </div>
      </section>
    </div>
  );
}
