/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { CartView } from './views/CartView';
import { CheckoutView } from './views/CheckoutView';
import { ProductDetailView } from './views/ProductDetailView';
import { TrackingView } from './views/TrackingView';
import { OrderHistoryView } from './views/OrderHistoryView';
import { FavoritesView } from './views/FavoritesView';
import { Product, CartItem, Category, Order, CustomerDetails } from './types';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Page = 'home' | 'shop' | 'product-detail' | 'cart' | 'checkout' | 'success' | 'tracking' | 'order-history' | 'favorites';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [params, setParams] = useState<any>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  // Reset scroll to top on page or parameter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, params]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const isFav = prev.includes(productId);
      if (isFav) {
        toast.info('Removed from favorites');
        return prev.filter(id => id !== productId);
      } else {
        toast.success('Added to favorites');
        return [...prev, productId];
      }
    });
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });

    toast(`Added ${product.name} to cart`, {
      description: `Qty: ${quantity}`,
      icon: <ShoppingBag className="h-4 w-4 text-green-600" />
    });
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const navigate = (page: string, pageParams: any = {}) => {
    setCurrentPage(page as Page);
    setParams(pageParams);
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
  };

  const handlePlaceOrder = (customerDetails: CustomerDetails) => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 25 ? 0 : 4.99;
    
    const newOrder: Order = {
      id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      date: new Date().toISOString(),
      items: [...cart],
      total: subtotal + shipping,
      customerDetails,
      status: 'pending'
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastOrder(newOrder);
    setCart([]);
    setCurrentPage('success');
    toast.success('Order placed successfully!');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView 
            onNavigate={navigate} 
            onAddToCart={(p) => addToCart(p)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        );
      case 'shop':
        return (
          <ShopView 
            initialCategory={params.category} 
            searchQuery={params.search}
            onNavigate={navigate} 
            onAddToCart={(p) => addToCart(p)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        );
      case 'product-detail':
        return (
          <ProductDetailView 
            product={params.product} 
            onAddToCart={addToCart} 
            onNavigate={navigate}
            isFavorite={favorites.includes(params.product?.id)}
            onToggleFavorite={toggleFavorite}
          />
        );
      case 'cart':
        return (
          <CartView 
            items={cart} 
            onUpdateQuantity={updateCartQuantity} 
            onRemove={removeFromCart} 
            onNavigate={navigate} 
            onCheckout={handleCheckout}
          />
        );
      case 'checkout':
        return (
          <CheckoutView 
            items={cart} 
            onNavigate={navigate} 
            onPlaceOrder={handlePlaceOrder} 
          />
        );
      case 'tracking':
        return <TrackingView order={lastOrder} onNavigate={navigate} />;
      case 'order-history':
        return <OrderHistoryView orders={orders} onNavigate={navigate} />;
      case 'favorites':
        return (
          <FavoritesView 
            onNavigate={navigate} 
            onAddToCart={(p) => addToCart(p)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        );
      case 'success':
        return (
          <div className="container mx-auto px-4 py-32 text-center space-y-8 animate-in fade-in zoom-in duration-500">
             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <CheckCircle2 className="h-12 w-12" />
             </div>
             <div className="space-y-4">
                <h1 className="text-5xl font-display font-bold">Order Confirmed!</h1>
                <p className="text-slate-500 text-lg max-w-md mx-auto">
                   Thank you for shopping at Swagatham, <span className="font-bold text-slate-900">{lastOrder?.customerDetails.fullName}</span>. 
                   Our team is handpicking your items for delivery to <span className="font-bold text-slate-900">{lastOrder?.customerDetails.city}</span>.
                </p>
                <div className="pt-4">
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Order ID</p>
                   <p className="text-xl font-mono font-bold text-slate-900">{lastOrder?.id}</p>
                </div>
             </div>
             <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-700 hover:bg-green-800 rounded-full px-12"
                  onClick={() => navigate('home')}
                >
                  Return to Home
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-12 border-slate-200"
                  onClick={() => navigate('tracking')}
                >
                   Track Order
                </Button>
             </div>
          </div>
        );
      default:
        return (
          <HomeView 
            onNavigate={navigate} 
            onAddToCart={(p) => addToCart(p)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-100 selection:text-green-800">
      <Navbar 
        currentPage={currentPage}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onNavigate={navigate}
        onSearch={(q) => navigate('shop', { search: q })}
      />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
