import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, Search, Grid, List as ListIcon, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface ShopViewProps {
  initialCategory?: Category;
  onNavigate: (page: string, params?: any) => void;
  onAddToCart: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  searchQuery?: string;
}

export function ShopView({ initialCategory, onNavigate, onAddToCart, favorites, onToggleFavorite, searchQuery: initialSearch }: ShopViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState(initialSearch || '');
  const [sortOrder, setSortOrder] = useState<'featured' | 'low' | 'high'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const mainContentRef = useRef<HTMLElement>(null);

  const handleCategoryChange = (category: Category | 'All') => {
    setSelectedCategory(category);
    // Smooth scroll to results on mobile after a short delay to allow state update
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        mainContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  useEffect(() => {
    if (initialSearch !== undefined) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="container mx-auto px-6 sm:px-8 py-12 flex flex-col lg:flex-row gap-12">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 space-y-8 shrink-0">
        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl flex items-center gap-2">
            <Filter className="h-4 w-4 text-green-700" />
            Categories
          </h3>
          <Separator />
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-1">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'All' ? 'bg-green-50 text-green-700' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                All Products
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat ? 'bg-green-50 text-green-700' : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="bg-amber-50 rounded-2xl p-6 space-y-4">
           <h4 className="font-bold text-amber-900 text-sm italic">Limited Offer!</h4>
           <p className="text-xs text-amber-800 leading-relaxed">
             Get extra 10% off on all organic grains. Use code <b>GRAIN10</b> at checkout.
           </p>
           <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-white border-none rounded-xl">View Items</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main ref={mainContentRef} className="flex-1 space-y-8">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-display font-bold">
              {selectedCategory === 'All' ? 'Our Entire Store' : selectedCategory}
            </h1>
            <p className="text-sm text-slate-500">{filteredProducts.length} items found</p>
          </div>

          <div className="flex items-center gap-3">
             <div className="hidden md:flex items-center bg-white border border-slate-200 rounded-lg p-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-8 w-8 ${viewMode === 'grid' ? 'bg-slate-100 text-green-700' : 'text-slate-400'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-8 w-8 ${viewMode === 'list' ? 'bg-slate-100 text-green-700' : 'text-slate-400'}`}
                  onClick={() => setViewMode('list')}
                >
                  <ListIcon className="h-4 w-4" />
                </Button>
             </div>
             
             <select 
              className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-green-500/20"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
             >
                <option value="featured">Featured First</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
             </select>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2">
             {selectedCategory !== 'All' && (
               <Badge className="bg-green-50 text-green-700 hover:bg-green-100 border-none py-1.5 px-3 flex items-center gap-2">
                 {selectedCategory}
                 <button onClick={() => setSelectedCategory('All')}>×</button>
               </Badge>
             )}
             {searchQuery && (
               <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none py-1.5 px-3 flex items-center gap-2">
                 Search: {searchQuery}
                 <button onClick={() => setSearchQuery('')}>×</button>
               </Badge>
             )}
             <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-green-700 underline"
             >
               Clear All
             </button>
          </div>
        )}

        {/* Search Bar - Mobile/Tablet redundant but useful */}
        <div className="relative md:hidden">
           <Input 
            placeholder="Search products..." 
            className="rounded-xl border-slate-200 focus:ring-green-500" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
           />
           <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "flex flex-col gap-4"
            }
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                  onClick={(p) => onNavigate('product-detail', { product: p })}
                  layout={viewMode}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 space-y-4">
             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-slate-400" />
             </div>
             <p className="font-bold text-xl">No products found</p>
             <p className="text-slate-500">Try adjusting your filters or search query</p>
             <Button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} variant="outline">
                Clear Filters
             </Button>
          </div>
        )}
      </main>
    </div>
  );
}
