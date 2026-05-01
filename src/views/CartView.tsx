import { motion } from 'motion/react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

interface CartViewProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onNavigate: (page: string) => void;
  onCheckout: () => void;
}

export function CartView({ items, onUpdateQuantity, onRemove, onNavigate, onCheckout }: CartViewProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 25 ? 0 : 4.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-8">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="h-10 w-10 text-slate-300" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-display font-bold">Your cart is empty</h1>
          <p className="text-slate-500 max-w-sm mx-auto shadow-sm">
            Looks like you haven't added any authentic Asian delights to your cart yet.
          </p>
        </div>
        <Button 
          size="lg" 
          className="bg-green-700 hover:bg-green-800 rounded-full px-10"
          onClick={() => onNavigate('shop')}
        >
          Browse Shop
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-10 text-slate-500 hover:text-green-700 cursor-pointer transition-colors" onClick={() => onNavigate('shop')}>
        <ArrowLeft className="h-4 w-4" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Shopping</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-display font-bold mb-8">Shopping Cart ({items.length})</h1>
          
          <div className="space-y-4">
            {items.map((item) => (
              <motion.div 
                layout
                key={item.id}
                className="flex items-center gap-6 p-4 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-50 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{item.category}</p>
                  <h3 className="font-bold text-slate-900 truncate">{item.name}</h3>
                  <p className="text-xs text-slate-500 mb-2">€{item.price.toFixed(2)} / {item.unit}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-slate-50 rounded-full p-1 border">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 rounded-full text-slate-600"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 rounded-full text-slate-600"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <button 
                      className="text-slate-400 hover:text-red-500 transition-colors"
                      onClick={() => onRemove(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-bold text-lg">€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[380px] shrink-0">
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6 sticky top-24">
            <h2 className="text-xl font-display font-bold">Order Summary</h2>
            
            <div className="space-y-4 pt-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Direct Delivery</span>
                <span className={shipping === 0 ? "text-green-600 font-bold" : "font-bold text-slate-900"}>
                  {shipping === 0 ? "FREE" : `€${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-[10px] bg-green-50 text-green-700 p-3 rounded-xl font-medium">
                  Add €{(25 - subtotal).toFixed(2)} more for <b>FREE Delivery</b>
                </p>
              )}
            </div>

            <Separator />

            <div className="flex justify-between items-baseline py-2">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold text-green-700">€{total.toFixed(2)}</span>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <Input placeholder="Discount Code" className="rounded-xl" />
                <Button variant="outline" className="rounded-xl">Apply</Button>
              </div>

              <Button 
                className="w-full bg-green-700 hover:bg-green-800 text-white rounded-2xl h-14 font-bold text-lg shadow-lg shadow-green-200"
                onClick={onCheckout}
              >
                Go to Checkout
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 grayscale opacity-40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            </div>

            <div className="flex items-center gap-2 justify-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <ShieldCheck className="h-3 w-3" />
              Secure Encrypted Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
