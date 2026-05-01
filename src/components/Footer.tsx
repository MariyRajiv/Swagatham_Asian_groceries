import { motion } from 'motion/react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
            src="https://drive.google.com/thumbnail?id=1ZWmTR6hDrQLMrf4NSNmWa-m9QLi2nVhi" 
            alt="Swagatham Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
              <span className="font-display font-bold text-2xl text-white">
                Swagatham <span className="text-green-500">Asian Groceries</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your neighborhood premium Asian grocery store. Bringing authentic flavors, 
              fresh produce, and tradition-rich staples to your doorstep.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="hover:text-green-500 transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">About Our Store</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Shop All Products</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Exclusive Deals</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Weekly Flyers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('tracking')}
                  className="hover:text-green-500 transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Track Your Order
                </button>
              </li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6">Visit Us</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-green-500 shrink-0" />
              <p>123 Spice Route, Asian Quarter, <br />Dublin, Ireland</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-5 w-5 text-green-500 shrink-0" />
              <p>+353 1 234 5678</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 text-green-500 shrink-0" />
              <p>hello@swagatham.com</p>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© 2026 Swagatham Asian Groceries. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
