import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Mail, Phone, User, MapPin, Building, Hash } from 'lucide-react';
import { CartItem, CustomerDetails } from '../types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

interface CheckoutViewProps {
  items: CartItem[];
  onNavigate: (page: string) => void;
  onPlaceOrder: (details: CustomerDetails) => void;
}

export function CheckoutView({ items, onNavigate, onPlaceOrder }: CheckoutViewProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 25 ? 0 : 4.99;
  const total = subtotal + shipping;

  const [formData, setFormData] = useState<CustomerDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder(formData);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-10 text-slate-500 hover:text-green-700 cursor-pointer transition-colors" onClick={() => onNavigate('cart')}>
        <ArrowLeft className="h-4 w-4" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Cart</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Checkout Form */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl font-display font-bold">Checkout</h1>
          
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-10">
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-xl font-bold">Contact Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="pl-11 h-12 rounded-xl border-slate-200 focus:border-green-500 focus:ring-green-500" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="pl-11 h-12 rounded-xl border-slate-200 focus:border-green-500 focus:ring-green-500" 
                    />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 123 456 7890" 
                      className="pl-11 h-12 rounded-xl border-slate-200 focus:border-green-500 focus:ring-green-500" 
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">2</div>
                <h2 className="text-xl font-bold">Delivery Address</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Street Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Main Street 123" 
                      className="pl-11 h-12 rounded-xl border-slate-200 focus:border-green-500 focus:ring-green-500" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">City</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Berlin" 
                      className="pl-11 h-12 rounded-xl border-slate-200 focus:border-green-500 focus:ring-green-500" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">ZIP / Postal Code</label>
                  <div className="relative">
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      required
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="10115" 
                      className="pl-11 h-12 rounded-xl border-slate-200 focus:border-green-500 focus:ring-green-500" 
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6 pt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">3</div>
                <h2 className="text-xl font-bold">Payment Method</h2>
              </div>
              <div className="p-6 border-2 border-green-600 bg-green-50/50 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="font-bold text-green-800">Cash on Delivery</p>
                  <p className="text-sm text-green-600/80">Pay when your items arrive</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-green-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-600" />
                </div>
              </div>
              <p className="text-xs text-slate-400 text-center italic">Digital payment methods coming soon!</p>
            </section>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden sticky top-24">
            <div className="p-8 space-y-6">
              <h2 className="text-xl font-display font-bold">Order Review</h2>
              
              <div className="max-h-[240px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-50 shrink-0 border border-slate-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold truncate">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.quantity} × €{item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-sm font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-bold" : "font-bold text-slate-900"}>
                    {shipping === 0 ? "FREE" : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-green-700">€{total.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                type="submit"
                form="checkout-form"
                className="w-full bg-green-700 hover:bg-green-800 text-white rounded-2xl h-16 font-bold text-lg shadow-lg shadow-green-200 transition-all active:scale-95"
              >
                Place Order €{total.toFixed(2)}
              </Button>

              <div className="flex items-center gap-2 justify-center text-[10px] font-bold uppercase tracking-widest text-slate-400 pt-2">
                <ShieldCheck className="h-3 w-3" />
                Secure Order Processing
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 border-t border-slate-100">
               <p className="text-[11px] text-slate-500 leading-relaxed text-center">
                 By placing an order, you agree to Swagatham's Terms of Service and Privacy Policy.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
