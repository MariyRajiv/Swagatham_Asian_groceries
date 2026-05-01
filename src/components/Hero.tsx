import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onCtaClick: () => void;
  onDealsClick: () => void;
}

export function Hero({ onCtaClick, onDealsClick }: HeroProps) {
  return (
    <section className="relative w-full py-10 md:py-10 overflow-hidden bg-[#FDFCF7]">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-80 -z-10" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Free Delivery on orders above €25
          </div>
          
          <h1 className="text-4xl md:text-8xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900">
            Real Taste of <br />
            <span className="text-green-700 italic">Authentic Asia</span> <br />
            At Your Door.
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            From farm-fresh drumsticks to the most aromatic saffron Basmati rice. 
            Experience the premium collection of spices, staples, and fresh produce.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8 h-12 shadow-lg shadow-green-200"
              onClick={onCtaClick}
            >
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 h-12 border-slate-200 hover:bg-slate-50"
              onClick={onDealsClick}
            >
              View Deals
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { icon: Leaf, label: "Eco Friendly" },
              { icon: Truck, label: "Fast Delivery" },
              { icon: ShieldCheck, label: "Safe Payment" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                  <item.icon className="h-5 w-5 text-green-700" />
                </div>
                <span className="text-xs font-medium text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-140 aspect-square rounded-3xl overflow-hidden shadow-xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?q=80&w=1200&auto=format&fit=crop" 
              alt="Authentic Asian spices and premium fresh ingredients" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Product Card (Visual Decoration) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:flex items-center gap-4 border border-slate-100"
          >
            <div className="w-12 h-12 bg-amber-50 rounded-xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&w=100&auto=format&fit=crop" alt="Basmati" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="text-xs font-bold">Royal Basmati Rice</p>
              <p className="text-[10px] text-green-600 font-semibold">Premium Ageing</p>
            </div>
          </motion.div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-600 rounded-full -z-10 flex items-center justify-center p-8 text-white">
             <div className="text-center font-bold">
                <span className="text-2xl block leading-none">20%</span>
                <span className="text-[10px] uppercase tracking-tighter">Off Spices</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
