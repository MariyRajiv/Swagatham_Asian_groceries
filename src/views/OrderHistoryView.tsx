import React from 'react';
import { motion } from 'motion/react';
import { Package, ChevronRight, Clock, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Order } from '../types';

interface OrderHistoryViewProps {
  orders: Order[];
  onNavigate: (page: string, params?: any) => void;
}

export function OrderHistoryView({ orders, onNavigate }: OrderHistoryViewProps) {
  const allOrders = [...orders];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold font-display text-slate-900">Order History</h1>
          <p className="text-slate-500 mt-1">Review and track your previous purchases</p>
        </div>
        <Button 
          variant="outline" 
          className="rounded-xl border-slate-200"
          onClick={() => onNavigate('shop')}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>
      </div>

      <div className="space-y-6">
        {allOrders.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
            <Package className="h-12 w-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">No orders found yet.</p>
          </div>
        ) : (
          allOrders.map((order, idx) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden rounded-3xl">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-slate-50 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-50 p-3 rounded-2xl">
                        <Package className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{order.id}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Clock className="h-3 w-3 text-slate-400" />
                          <p className="text-sm font-medium text-slate-600">
                            {new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">Total Amount</p>
                        <p className="text-lg font-bold text-slate-900">€{order.total.toFixed(2)}</p>
                      </div>
                      <Badge className={`
                        rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-tight
                        ${order.status === 'delivered' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' : 
                          'bg-amber-100 text-amber-700 hover:bg-amber-100'}
                      `}>
                        {order.status}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="rounded-full text-slate-400 hover:text-green-700 hover:bg-green-50"
                        onClick={() => onNavigate('tracking')}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex-shrink-0 flex items-center gap-3 bg-slate-50 p-2 pr-4 rounded-2xl border border-slate-100">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-10 h-10 rounded-xl object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-800 line-clamp-1">{item.name}</p>
                            <p className="text-[10px] text-slate-500">{item.quantity} x €{item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
