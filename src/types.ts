export type Category = 
  | "Fresh Veggies"
  | "Greens & Herbs"
  | "Rice, Grain & Pulses"
  | "Essentials & Staples"
  | "Spices & Condiments"
  | "Flours, Instant Food & Pickles"
  | "Nutrition"
  | "Sweets & Savories"
  | "Snacks, Tea & Noodles"
  | "Pooja & Festive"
  | "Frozen Delights"
  | "Households"
  | "Deals"
  | "Meal Kits";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  customerDetails: CustomerDetails;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}
