import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Search, ShoppingCart, Menu, User, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CATEGORIES } from '../constants';



interface NavbarProps {
  currentPage: string;
  cartCount: number;
  onNavigate: (page: string, params?: any) => void;
  onSearch: (query: string) => void;
}

export function Navbar({ currentPage, cartCount, onNavigate, onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Clear search on navigation to other pages
  useEffect(() => {
    if (currentPage !== 'shop') {
      setSearchQuery('');
    }
  }, [currentPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    if (currentPage !== 'shop') {
      onNavigate('shop', { search: searchQuery });
    }
  };

  const handleProfileClick = () => {
    onNavigate('order-history');
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (page: string, params?: any, sectionId?: string) => {
    closeMenu();
    if (sectionId) {
      if (currentPage === 'home') {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('home');
        // We might need a small delay or a state check on HomeView mount to scroll, 
        // but for now, simple navigate is standard. 
        // If we really want scroll after navigation, we'd need more complex state.
      }
    } else {
      onNavigate(page, params);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
             <div className="flex flex-col gap-6 mt-8">
               <div>
                 <h2 className="text-xl font-bold font-display mb-4">Navigations</h2>
                 <div className="flex flex-col gap-1">
                   <button 
                    onClick={() => handleNavClick('home')}
                    className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-50"
                   >
                     Home
                   </button>
                   <button 
                    onClick={() => handleNavClick('shop')}
                    className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-50"
                   >
                     Shop All
                   </button>
                   <button 
                    onClick={() => handleNavClick('home', undefined, 'categories')}
                    className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-50"
                   >
                     View Categories
                   </button>
                   <button 
                    onClick={() => handleNavClick('home', undefined, 'featured')}
                    className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-50"
                   >
                     Featured Selection
                   </button>
                   <button 
                    onClick={() => handleNavClick('shop', { category: 'Deals' })}
                    className="flex items-center justify-between w-full py-3 text-sm font-bold uppercase tracking-wider text-green-700 border-b border-slate-50"
                   >
                     Hot Deals
                   </button>
                 </div>
               </div>

               <div>
                 <h2 className="text-xl font-bold font-display mb-4">Account</h2>
                 <div className="flex flex-col gap-1">
                   <button 
                    onClick={() => handleNavClick('order-history')}
                    className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-green-700 transition-colors"
                   >
                     Order History
                     <ChevronRight className="h-4 w-4 opacity-50" />
                   </button>
                   <button 
                    onClick={() => handleNavClick('favorites')}
                    className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-green-700 transition-colors"
                   >
                     My Favorites
                     <ChevronRight className="h-4 w-4 opacity-50" />
                   </button>
                 </div>
               </div>

               <div>
                 <h2 className="text-xl font-bold font-display mb-4">Quick Categories</h2>
                 <div className="flex flex-col gap-1 max-h-[30vh] overflow-y-auto pr-2">
                   {CATEGORIES.map(cat => (
                     <button 
                      key={cat} 
                      onClick={() => handleNavClick('shop', { category: cat })}
                      className="flex items-center justify-between py-2 text-sm font-medium hover:text-green-700 transition-colors border-b border-slate-50 last:border-0"
                     >
                       {cat}
                       <ChevronRight className="h-4 w-4 opacity-50" />
                     </button>
                   ))}
                 </div>
               </div>
             </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer h-full py-2" 
          onClick={() => onNavigate('home')}
        >
          <img 
            src="https://drive.google.com/thumbnail?id=1ZWmTR6hDrQLMrf4NSNmWa-m9QLi2nVhi" 
            alt="Swagatham Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-lg hidden sm:block">
            Swagatham <span className="text-green-700">Asian Groceries</span>
          </span>
        </div>

        {/* Search - Desktop */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-lg relative group">
          <Input 
            placeholder="Search for spices, rice, veggies..." 
            className="w-full bg-slate-100 border-none focus-visible:ring-1 focus-visible:ring-green-600 rounded-full pl-10"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-green-600 transition-colors" />
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex"
            onClick={() => onNavigate('favorites')}
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex"
            onClick={handleProfileClick}
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => onNavigate('cart')}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-green-700 hover:bg-green-800">
                {cartCount}
              </Badge>
            )}
          </Button>

          <Button 
            className="hidden sm:flex bg-green-700 hover:bg-green-800 rounded-full px-6"
            onClick={() => onNavigate('shop')}
          >
            Shop Now
          </Button>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-2">
        <form onSubmit={handleSearchSubmit} className="relative">
          <Input 
            placeholder="Search products..." 
            className="w-full bg-slate-100 border-none rounded-full pl-10 h-9"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        </form>
      </div>

      {/* Quick Navigation / Categories Bar */}
      <div className="border-t bg-slate-50/50 hidden sm:block overflow-hidden">
        <div className="container mx-auto px-6 h-10 flex items-center justify-between gap-8">
          <div className="flex items-center gap-6 h-full">
            {['Home', 'Shop', 'Categories', 'Featured', 'Deals'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Home') onNavigate('home');
                  else if (item === 'Shop') onNavigate('shop');
                  else if (item === 'Categories') {
                    if (currentPage === 'home') document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                    else onNavigate('home');
                  }
                  else if (item === 'Featured') {
                    if (currentPage === 'home') document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
                    else onNavigate('home');
                  }
                  else if (item === 'Deals') onNavigate('shop', { category: 'Deals' });
                }}
                className={`text-[11px] uppercase tracking-widest font-bold h-full border-b-2 transition-all ${
                  (item === 'Home' && currentPage === 'home') || (item === 'Shop' && currentPage === 'shop')
                    ? 'border-green-700 text-green-700' 
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Ulm Delivery: 60 Mins</span>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
           <span>Support: +49 731 123 4567</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
