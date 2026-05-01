import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (product: Product) => void;
  layout?: 'grid' | 'list';
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  onClick, 
  layout = 'grid',
  isFavorite = false,
  onToggleFavorite
}: ProductCardProps) {
  if (layout === 'list') {
    return (
      <Card className="group relative flex flex-col sm:flex-row border-none shadow-none hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden bg-white">
        <div 
          className="w-full sm:w-48 aspect-video sm:aspect-square shrink-0 overflow-hidden cursor-pointer bg-slate-50 relative"
          onClick={() => onClick(product)}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600 border-none">
              Featured
            </Badge>
          )}
          <button 
            className={`absolute top-2 right-2 p-2 rounded-full transition-all shadow-sm z-10 ${
              isFavorite ? 'bg-white text-red-500' : 'bg-white/40 text-white hover:bg-white hover:text-red-500'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(product.id);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        <CardContent className="flex-1 p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-xs font-semibold">{product.rating}</span>
              </div>
            </div>
            
            <h3 
              className="font-bold text-lg text-slate-900 group-hover:text-green-700 transition-colors cursor-pointer"
              onClick={() => onClick(product)}
            >
              {product.name}
            </h3>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-slate-900">€{product.price.toFixed(2)}</span>
              <span className="text-xs text-slate-400 font-medium">/ {product.unit}</span>
            </div>
            <Button 
              size="sm"
              className="bg-slate-900 hover:bg-green-700 text-white rounded-xl px-6"
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group relative border-none shadow-none hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden bg-white">
      <div 
        className="aspect-[4/3] overflow-hidden cursor-pointer bg-slate-50 relative"
        onClick={() => onClick(product)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-600 border-none">
            Featured
          </Badge>
        )}
        <button 
          className={`absolute top-2 right-2 p-2 rounded-full transition-all shadow-sm z-10 ${
            isFavorite ? 'bg-white text-red-500' : 'bg-white/40 text-white hover:bg-white hover:text-red-500'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite?.(product.id);
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold">{product.rating}</span>
          </div>
        </div>
        
        <h3 
          className="font-bold text-slate-900 group-hover:text-green-700 transition-colors cursor-pointer line-clamp-1"
          onClick={() => onClick(product)}
        >
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 line-clamp-1">
          {product.description}
        </p>

        <div className="flex items-baseline gap-1 pt-1">
          <span className="text-lg font-bold text-slate-900">€{product.price.toFixed(2)}</span>
          <span className="text-xs text-slate-400 font-medium">/ {product.unit}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-slate-50 hover:bg-green-700 text-slate-900 hover:text-white border-none shadow-none transition-all duration-300 rounded-xl"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
