import { motion } from 'motion/react';
import { Package, Truck, CheckCircle2, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Order } from '../types';

interface TrackingViewProps {
  order?: Order | null;
  onNavigate: (page: string) => void;
}

export function TrackingView({ order, onNavigate }: TrackingViewProps) {
  const displayOrderId = order?.id || "SWG-" + Math.random().toString(36).toUpperCase().substring(2, 10);
  const city = order?.customerDetails.city || "Ulm, Germany";
  
  const steps = [
    { title: "Order Placed", desc: "Your order has been received", time: "10:30 AM", status: "complete" },
    { title: "Processing", desc: "Our team is handpicking your items", time: "10:45 AM", status: "complete" },
    { title: "Quality Check", desc: "Ensuring your veggies and staples meet our standards", time: "11:00 AM", status: "current" },
    { title: "Out for Delivery", desc: "Our driver is on the way to your location", time: "Pending", status: "upcoming" },
    { title: "Delivered", desc: "Enjoy your authentic Asian groceries!", time: "Pending", status: "upcoming" },
  ];

  const handleContactSupport = () => {
    toast.success("Support Request Sent", {
      description: "A support agent will be with you shortly via chat.",
    });
  };

  const handleCancelRequest = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Processing cancellation...',
        success: () => {
          onNavigate('home');
          return 'Request cancelled successfully';
        },
        error: 'Failed to cancel request',
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div 
        className="flex items-center gap-2 mb-10 text-slate-500 hover:text-green-700 cursor-pointer transition-colors group" 
        onClick={() => onNavigate('home')}
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">Live Status</p>
            <h1 className="text-3xl font-display font-bold text-slate-900">Order Tracking</h1>
          </div>
          <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Order ID</p>
             <p className="font-mono font-bold text-slate-700">{displayOrderId}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-4">
           <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                 <Clock className="h-5 w-5" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Est. Delivery</p>
                 <p className="font-bold text-sm">45 - 60 Mins</p>
              </div>
           </div>
           <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                 <MapPin className="h-5 w-5" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Destination</p>
                 <p className="font-bold text-sm truncate max-w-[120px]">{city}</p>
              </div>
           </div>
        </div>

        <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 flex gap-4"
            >
              <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-sm border ${
                step.status === 'complete' ? 'bg-green-600 text-white border-green-600' : 
                step.status === 'current' ? 'bg-white text-green-600 border-green-600 animate-pulse' : 
                'bg-white text-slate-300 border-slate-100'
              }`}>
                {step.status === 'complete' ? <CheckCircle2 className="h-5 w-5" /> : 
                 step.status === 'current' ? <Package className="h-5 w-5" /> : 
                 <Truck className="h-5 w-5" />}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`font-bold ${step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{step.time}</span>
                </div>
                <p className={`text-sm mt-1 leading-relaxed ${step.status === 'upcoming' ? 'text-slate-300' : 'text-slate-500'}`}>
                   {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Separator />

        <div className="p-6 bg-green-50 rounded-3xl space-y-4">
           <p className="text-sm font-semibold text-green-800">Need help with your delivery?</p>
           <div className="flex gap-4">
              <Button 
                size="sm" 
                className="bg-green-700 hover:bg-green-800 rounded-xl"
                onClick={handleContactSupport}
              >
                Contact Support
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-green-700 hover:bg-green-100 rounded-xl"
                onClick={handleCancelRequest}
              >
                Cancel Request
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
