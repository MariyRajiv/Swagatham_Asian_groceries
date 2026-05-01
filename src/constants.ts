import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Fresh Veggies",
  "Greens & Herbs",
  "Rice, Grain & Pulses",
  "Essentials & Staples",
  "Spices & Condiments",
  "Flours, Instant Food & Pickles",
  "Nutrition",
  "Sweets & Savories",
  "Snacks, Tea & Noodles",
  "Pooja & Festive",
  "Frozen Delights",
  "Households",
  "Deals",
  "Meal Kits"
];

const placeholderImage = (text: string) => `https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&q=80&w=800&h=600`;

export const PRODUCTS: Product[] = [
  // Fresh Veggies
  {
    id: "v1",
    name: "Drumsticks (Moringa)",
    category: "Fresh Veggies",
    price: 1.20,
    unit: "bundle",
    image: "https://static.wixstatic.com/media/5a432c_fe16a36aa6794a5f9aaaa99d160edda0~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5a432c_fe16a36aa6794a5f9aaaa99d160edda0~mv2.jpg",
    description: "Fresh and tender green drumsticks, perfect for Sambar and curries.",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: "v2",
    name: "Ladies Finger (Okra)",
    category: "Fresh Veggies",
    price: 2.50,
    unit: "500g",
    image: "https://m.media-amazon.com/images/I/51yvxGKCiYL._AC_UL480_FMwebp_QL65_.jpg",
    description: "Young and crispy okra, rich in fiber and great for frying.",
    rating: 4.5,
    reviews: 89,
    inStock: true
  },
  {
    id: "v3",
    name: "Small Onions (Shallots)",
    category: "Fresh Veggies",
    price: 3.00,
    unit: "500g",
    image: "https://drive.google.com/thumbnail?id=1T30W2JKgs_WvQEyfmuiC8CtcxRaWRj1u",
    description: "Premium quality small onions, essential for authentic South Indian dishes.",
    rating: 4.9,
    reviews: 210,
    inStock: true,
    featured: true
  },
  {
    id: "v4",
    name: "Raw Banana",
    category: "Fresh Veggies",
    price: 0.80,
    unit: "piece",
    image: "https://drive.google.com/thumbnail?id=1E7sAV9EjGGeKWXu2H6Vq6FOE6ynA_FkW&usp",
    description: "Unripe green bananas, ideal for chips and stir-fries.",
    rating: 4.2,
    reviews: 45,
    inStock: true
  },
  {
    id: "v5",
    name: "Bitter Gourd",
    category: "Fresh Veggies",
    price: 1.80,
    unit: "500g",
    image: "https://drive.google.com/thumbnail?id=1sFfQsfb35PfX3Q_25KkezMVgCj57-eWF",
    description: "Fresh bitter gourd with nutritional benefits. Perfect for frying.",
    rating: 4.0,
    reviews: 32,
    inStock: true
  },
  {
    id: "v6",
    name: "Tomatoes (Hybrid)",
    category: "Fresh Veggies",
    price: 1.00,
    unit: "kg",
    image: "https://assets.hyperpure.com/data/images/products/d6eb3f265daffb72dcad29c7c4ba928f.png",
    description: "Farm fresh red tomatoes, perfect for base of every Indian gravy.",
    rating: 4.6,
    reviews: 142,
    inStock: true
  },
  {
    id: "v7",
    name: "Potatoes (Agra)",
    category: "Fresh Veggies",
    price: 0.80,
    unit: "kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/CG/CO/EF/37754423/natural-agra-potato-500x500.jpg",
    description: "Starchy potatoes from Agra, great for curries and snacks.",
    rating: 4.8,
    reviews: 231,
    inStock: true
  },

  // Greens & Herbs
  {
    id: "g1",
    name: "Curry Leaves",
    category: "Greens & Herbs",
    price: 0.99,
    unit: "packet",
    image: "https://m.media-amazon.com/images/I/71KHkFkPO+L._SX679_.jpg",
    description: "Aromatic curry leaves for tempering and flavoring.",
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: "g2",
    name: "Fresh Coriander",
    category: "Greens & Herbs",
    price: 0.80,
    unit: "bunch",
    image: "https://drive.google.com/thumbnail?id=1t71ZFqPAaS77g7iIvw4ngLuIA4wxdGUB",
    description: "Freshly picked cilantro leaves for garnishing and chutneys.",
    rating: 4.7,
    reviews: 98,
    inStock: true
  },
  {
    id: "g3",
    name: "Mint Leaves",
    category: "Greens & Herbs",
    price: 0.85,
    unit: "bunch",
    image: "https://seedlefarms.com/wp-content/uploads/2021/04/Fresh-Mint.jpeg",
    description: "Refreshing mint leaves for tea, biryani, or dips.",
    rating: 4.8,
    reviews: 76,
    inStock: true
  },
  {
    id: "g4",
    name: "Palak (Spinach)",
    category: "Greens & Herbs",
    price: 1.50,
    unit: "bundle",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=800&auto=format&fit=crop",
    description: "Tender and nutrient-rich spinach leaves.",
    rating: 4.6,
    reviews: 54,
    inStock: true
  },
  {
    id: "g5",
    name: "Ginger",
    category: "Greens & Herbs",
    price: 1.20,
    unit: "200g",
    image: "https://m.media-amazon.com/images/I/61IH7cXUytL._SX679_.jpg",
    description: "Fresh aromatic ginger root for cooking and tea.",
    rating: 4.9,
    reviews: 112,
    inStock: true
  },
  {
    id: "g6",
    name: "Garlic",
    category: "Greens & Herbs",
    price: 1.50,
    unit: "200g",
    image: "https://organicmandya.com/cdn/shop/files/Garlic.jpg?v=1757079802&width=1000",
    description: "Premium large garlic cloves with strong flavor.",
    rating: 4.8,
    reviews: 125,
    inStock: true
  },

  // Rice, Grain & Pulses
  {
    id: "r1",
    name: "Sona Masoori Rice",
    category: "Rice, Grain & Pulses",
    price: 12.99,
    unit: "5kg",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=800&auto=format&fit=crop",
    description: "Premium aromatic medium-grain rice, aged for perfection.",
    rating: 4.8,
    reviews: 320,
    inStock: true,
    featured: true
  },
  {
    id: "r2",
    name: "Basmati Rice Royal",
    category: "Rice, Grain & Pulses",
    price: 14.50,
    unit: "5kg",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTEHhSBR2f4Ux63tXDYoz_d3vdp-ww9fI9rWR2eOVvU5PqBgA0Uh2FpJLrejsMeO4P0RMhuBn6Y3nF4t1O8eA5axnMr4W1YkoOHkqjdLfWXmwfRcpNp4MA_bKPKfgUHeJ1ReIOCQ_4&usqp=CAc",
    description: "Extra long grain basmati rice with exquisite aroma.",
    rating: 4.9,
    reviews: 412,
    inStock: true
  },
  {
    id: "r3",
    name: "Toor Dal (Pigeon Peas)",
    category: "Rice, Grain & Pulses",
    price: 3.50,
    unit: "1kg",
    image: "https://m.media-amazon.com/images/I/71kKYkpE1IL._AC_SX416_CB1169409_QL70_.jpg",
    description: "Polished and sorted Toor Dal, high in protein.",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: "r4",
    name: "Moong Dal (Yellow)",
    category: "Rice, Grain & Pulses",
    price: 3.20,
    unit: "1kg",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/11/468057375/WZ/PC/BB/71824723/yellow-split-moong-dal-500x500.jpg",
    description: "Split yellow lentils, gentle on digestion.",
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: "r5",
    name: "Black Chickpeas (Kala Chana)",
    category: "Rice, Grain & Pulses",
    price: 2.80,
    unit: "1kg",
    image: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=800&auto=format&fit=crop",
    description: "Organic black chickpeas, excellent for curries and snacks.",
    rating: 4.5,
    reviews: 92,
    inStock: true
  },

  // Essentials & Staples
  {
    id: "e1",
    name: "Atta (Whole Wheat Flour)",
    category: "Essentials & Staples",
    price: 6.50,
    unit: "5kg",
    image: "https://www.bbassets.com/media/uploads/p/l/126903_12-aashirvaad-atta-whole-wheat.jpg",
    description: "Premium whole wheat flour for soft and nutritious rotis.",
    rating: 4.9,
    reviews: 512,
    inStock: true,
    featured: true
  },
  {
    id: "e2",
    name: "Iodized Salt",
    category: "Essentials & Staples",
    price: 0.50,
    unit: "1kg",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqmt-FxTbCitYmahiIgqu7DJms_6vbapIaWGvVEC9fwKC6k20aycycy9AVEuXdo-3DqTlAKQtMAXcfGwq1GTKM1lr0sBYw7g",
    description: "Vacuum evaporated iodized salt for daily cooking.",
    rating: 4.8,
    reviews: 245,
    inStock: true
  },
  {
    id: "e3",
    name: "Fortune Sunflower Oil",
    category: "Essentials & Staples",
    price: 2.80,
    unit: "1L",
    image: "https://m.media-amazon.com/images/I/711JQozA+sL._SY879_.jpg",
    description: "Refined sunflower oil, healthy and light for cooking.",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: "e4",
    name: "Amul Taaza Toned Milk",
    category: "Essentials & Staples",
    price: 0.90,
    unit: "1L",
    image: "https://www.bbassets.com/media/uploads/p/l/306926_4-amul-homogenised-toned-milk.jpg",
    description: "Freshly processed toned milk, healthy and nutritious.",
    rating: 4.9,
    reviews: 876,
    inStock: true
  },
  {
    id: "e5",
    name: "Taj Mahal Tea",
    category: "Essentials & Staples",
    price: 5.20,
    unit: "500g",
    image: "https://m.media-amazon.com/images/I/61FLI9S2jsL.jpg",
    description: "Exquisite tea blend for a rich and aromatic experience.",
    rating: 4.8,
    reviews: 342,
    inStock: true
  },

  // Spices & Condiments
  {
    id: "s1",
    name: "Turmeric Powder",
    category: "Spices & Condiments",
    price: 2.50,
    unit: "200g",
    image: "https://drive.google.com/thumbnail?id=1Bi-45J8ZXj0EewTzNHeL-qIKaeT40O_V",
    description: "Pure and high-curcumin turmeric powder.",
    rating: 4.9,
    reviews: 245,
    inStock: true,
    featured: true
  },
  {
    id: "s2",
    name: "Garam Masala",
    category: "Spices & Condiments",
    price: 3.00,
    unit: "100g",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800&auto=format&fit=crop",
    description: "Artisanal blend of whole spices, toasted and ground.",
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: "s3",
    name: "Red Chilli Powder",
    category: "Spices & Condiments",
    price: 2.20,
    unit: "200g",
    image: "https://drive.google.com/thumbnail?id=1jQmMXo1Tkn5uwIpFA8oBI6FMojm3c-kX",
    description: "Authentic spicy red chilli powder for that perfect kick.",
    rating: 4.7,
    reviews: 132,
    inStock: true
  },
  {
    id: "s4",
    name: "Cumin Seeds (Jeera)",
    category: "Spices & Condiments",
    price: 2.80,
    unit: "200g",
    image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?q=80&w=800&auto=format&fit=crop",
    description: "Selected aromatic cumin seeds for tempering.",
    rating: 4.8,
    reviews: 89,
    inStock: true
  },
  {
    id: "s5",
    name: "Mustard Seeds",
    category: "Spices & Condiments",
    price: 1.50,
    unit: "100g",
    image: "https://www.kushaspices.com/wp-content/uploads/2021/01/Mustard-e1616057582117-600x609.png",
    description: "Small black mustard seeds, essential for Indian cooking.",
    rating: 4.6,
    reviews: 67,
    inStock: true
  },

  // Flours, Instant Food & Pickles
  {
    id: "f1",
    name: "Fortune Besan (500g)",
    category: "Flours, Instant Food & Pickles",
    price: 1.20,
    unit: "500g",
    image: "https://m.media-amazon.com/images/I/81JmTiQA68L._SX679_.jpg",
    description: "Superior quality gram flour made from 100% chana dal.",
    rating: 4.8,
    reviews: 145,
    inStock: true
  },
  {
    id: "f2",
    name: "Maggi Noodles",
    category: "Flours, Instant Food & Pickles",
    price: 0.25,
    unit: "packet",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQtjUJLbNC189YmAGZlzlnyoXdNRBzNl-9dh9O7y0VkaHBU0W6IdgS4Fg915pdxbL1mgs3JE1T9DmYyU03NHP6S7nPjx3LvW6MbkJV8aueGQuUBa41Zw_O9vN74_4acEtBz-bwZbo&usqp=CAc",
    description: "The classic instant noodles with a unique masala flavor.",
    rating: 4.9,
    reviews: 1250,
    inStock: true
  },
  {
    id: "f3",
    name: "Priya Mango Pickle",
    category: "Flours, Instant Food & Pickles",
    price: 2.50,
    unit: "300g",
    image: "https://m.media-amazon.com/images/I/71JrQ0forhL._SX679_.jpg",
    description: "Authentic and spicy mango pickle made with traditional recipe.",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: "f4",
    name: "MTR Rava Upma",
    category: "Flours, Instant Food & Pickles",
    price: 1.50,
    unit: "160g",
    image: "https://m.media-amazon.com/images/I/614otkQvnRL._SX679_.jpg",
    description: "Instant breakfast mix for a quick and delicious Rava Upma.",
    rating: 4.6,
    reviews: 112,
    inStock: true
  },
  {
    id: "f5",
    name: "Lime and lemon",
    category: "Flours, Instant Food & Pickles",
    price: 0.50,
    unit: "300g",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Q1AisNS8HLTUjEDIykmlQ-t9iQs0TAnZg&s",
    description: "Tangy and refreshing lime and lemon pickle.",
    rating: 4.5,
    reviews: 64,
    inStock: true
  },

  // Sweets & Savories
  {
    id: "sw1",
    name: "Gulab Jamun (Canned)",
    category: "Sweets & Savories",
    price: 4.50,
    unit: "1kg",
    image: "https://m.media-amazon.com/images/I/619aI66USFL._SX679_.jpg",
    description: "Soft and spongy milk dumplings in saffron syrup.",
    rating: 4.9,
    reviews: 232,
    inStock: true,
    featured: true
  },
  {
    id: "sw2",
    name: "Soan Papdi",
    category: "Sweets & Savories",
    price: 3.20,
    unit: "500g",
    image: "https://cdn.shopify.com/s/files/1/0574/9342/2274/files/soanpapdiboximage-Photoroom_6640809b-5d64-4dc8-9450-36b31481c685.webp?v=1741781863",
    description: "Traditional flaky dessert that melts in your mouth.",
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: "sw3",
    name: "Madras Mixture",
    category: "Sweets & Savories",
    price: 2.99,
    unit: "200g",
    image: "https://www.bbassets.com/media/uploads/p/l/40280430_1-a2b-madras-mixture-south-indian-snack-cereal-pulses-based-savoury-crunchy.jpg",
    description: "Crunchy and spicy savory mix with peanuts and curry leaves.",
    rating: 4.8,
    reviews: 178,
    inStock: true
  },
  {
    id: "sw4",
    name: "Banana Chips",
    category: "Sweets & Savories",
    price: 2.50,
    unit: "200g",
    image: "https://m.media-amazon.com/images/I/71XVM-lV9DL._SX679_.jpg",
    description: "Crispy Kerala-style banana chips fried in coconut oil.",
    rating: 4.9,
    reviews: 312,
    inStock: true
  },
  {
    id: "sw5",
    name: "Murukku",
    category: "Sweets & Savories",
    price: 3.50,
    unit: "250g",
    image: "https://www.shreemithai.com/cdn/shop/products/andhra-murukku-515684.jpg?v=1707819745&width=1200",
    description: "Traditional crunchy rice flour snack.",
    rating: 4.6,
    reviews: 87,
    inStock: true
  },
  // Nutrition
  {
    id: "n1",
    name: "True Elements Quinoa",
    category: "Nutrition",
    price: 7.50,
    unit: "1kg",
    image: "https://www.bbassets.com/media/uploads/p/l/40114975-6_9-true-elements-quinoa-gluten-free-premium-quinoa-grain-healthy-breakfast-diet-food.jpg",
    description: "Gluten-free premium quinoa grain, perfect for a healthy breakfast.",
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: "n2",
    name: "Happilo California Almonds",
    category: "Nutrition",
    price: 4.20,
    unit: "200g",
    image: "https://m.media-amazon.com/images/I/71LP2imqeoL._SX679_.jpg",
    description: "Premium quality California almonds, rich in nutrients.",
    rating: 4.9,
    reviews: 245,
    inStock: true
  },
  {
    id: "n3",
    name: "Pintola Natural Peanut Butter",
    category: "Nutrition",
    price: 9.99,
    unit: "1kg",
    image: "https://pintola.in/cdn/shop/files/All_Natural_Creamy_350gm_600x600_9d3cc337-ace9-4fed-bc7f-1cbfd070ecfe_1200x.jpg?v=1742190418",
    description: "All natural creamy peanut butter with no added sugar.",
    rating: 4.9,
    reviews: 876,
    inStock: true
  },
  {
    id: "n4",
    name: "Saffola Rolled Oats",
    category: "Nutrition",
    price: 5.50,
    unit: "1kg",
    image: "https://images.marico.in/800x0/uploads/spo-300g-01-6765.jpg",
    description: "100% natural rolled oats for a heart-healthy meal.",
    rating: 4.7,
    reviews: 312,
    inStock: true
  },
  {
    id: "n5",
    name: "W320 Cashew Nuts",
    category: "Nutrition",
    price: 11.50,
    unit: "500g",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxolXIkI5yo6rKAx1Gn02Eoopn7Bx9pmdSKA&s",
    description: "Large, creamy whole cashews. Perfect for snacking.",
    rating: 4.8,
    reviews: 142,
    inStock: true
  },
  // Snacks, Tea & Noodles
  {
    id: "sn1",
    name: "Tata Tea Gold",
    category: "Snacks, Tea & Noodles",
    price: 4.50,
    unit: "500g",
    image: "https://www.bbassets.com/media/uploads/p/l/240065-3_15-tata-tea-gold-tea.jpg",
    description: "Exquisite tea blend for a rich and aromatic experience.",
    rating: 4.8,
    reviews: 312,
    inStock: true
  },
  {
    id: "sn2",
    name: "Maggi Masala Noodles",
    category: "Snacks, Tea & Noodles",
    price: 0.50,
    unit: "packet",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQtjUJLbNC189YmAGZlzlnyoXdNRBzNl-9dh9O7y0VkaHBU0W6IdgS4Fg915pdxbL1mgs3JE1T9DmYyU03NHP6S7nPjx3LvW6MbkJV8aueGQuUBa41Zw_O9vN74_4acEtBz-bwZbo&usqp=CAc",
    description: "Instant masala noodles with a blend of Indian spices.",
    rating: 4.9,
    reviews: 1250,
    inStock: true
  },
  {
    id: "sn3",
    name: "Britannia Bourbon Creme Biscuit",
    category: "Snacks, Tea & Noodles",
    price: 1.20,
    unit: "500g",
    image: "https://www.bbassets.com/media/uploads/p/l/280474-2_13-britannia-bourbon-chocolate-cream-biscuits.jpg",
    description: "The original chocolate cream biscuits for your tea time.",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: "sn4",
    name: "Haldiram's Bhujia Sev",
    category: "Snacks, Tea & Noodles",
    price: 0.80,
    unit: "150g",
    image: "https://m.media-amazon.com/images/I/91eK6v5vjSL._SL1500_.jpg",
    description: "Authentic Nagpur Bhujia Sev, a spicy and crunchy snack.",
    rating: 4.8,
    reviews: 245,
    inStock: true
  },
  {
    id: "sn5",
    name: "Kurkure Naughty Tomato",
    category: "Snacks, Tea & Noodles",
    price: 0.40,
    unit: "packet",
    image: "https://www.bbassets.com/media/uploads/p/m/247759_15-kurkure-namkeen-naughty-tomatoes.jpg?tr=w-154,q-80",
    description: "Crunchy snacks with a tangy tomato twist.",
    rating: 4.6,
    reviews: 312,
    inStock: true
  },
  // Pooja & Festive
  {
    id: "p1",
    name: "Brass Golden Color Pooja",
    category: "Pooja & Festive",
    price: 15.50,
    unit: "piece",
    image: "https://m.media-amazon.com/images/I/811MbxuF4BL._SX679_.jpg",
    description: "Elegant brass pooja items for your home temple.",
    rating: 4.8,
    reviews: 86,
    inStock: true
  },
  {
    id: "p2",
    name: "Indian-Shelf 3 Pieces Brass Oil Lamp",
    category: "Pooja & Festive",
    price: 12.99,
    unit: "set",
    image: "https://m.media-amazon.com/images/I/71yfbcfzlrL._SX679_.jpg",
    description: "Set of 3 traditional brass oil lamps for auspicious occasions.",
    rating: 4.9,
    reviews: 42,
    inStock: true
  },
  {
    id: "p3",
    name: "Cycle Pure Agarbatti",
    category: "Pooja & Festive",
    price: 1.50,
    unit: "packet",
    image: "https://m.media-amazon.com/images/I/81JR1TWM9vL._SX679_.jpg",
    description: "Premium incense sticks with a divine fragrance.",
    rating: 4.7,
    reviews: 215,
    inStock: true
  },
  {
    id: "p4",
    name: "Denique Brass Haldi Kumkum Pooja",
    category: "Pooja & Festive",
    price: 8.50,
    unit: "piece",
    image: "https://m.media-amazon.com/images/I/610vVLRGXSL._SX679_.jpg",
    description: "Compact brass haldi kumkum holder for rituals.",
    rating: 4.6,
    reviews: 54,
    inStock: true
  },
  {
    id: "p5",
    name: "Mango Leaves",
    category: "Pooja & Festive",
    price: 0.99,
    unit: "bundle",
    image: "https://drive.google.com/thumbnail?id=1_CaHTtgvSWYwv5amNZC9gUeOLERWjtDU",
    description: "Fresh green mango leaves for festive decorations and rituals.",
    rating: 4.5,
    reviews: 38,
    inStock: true
  },
  // Frozen Delights
  {
    id: "fd1",
    name: "Daily Delight Avial Mix",
    category: "Frozen Delights",
    price: 3.50,
    unit: "400g",
    image: "https://drive.google.com/thumbnail?id=1bz-WVMFP1fBfEz7DO4Cs92mXTRs51uFv",
    description: "Traditional mix of cut vegetables for authentic Kerala Avial.",
    rating: 4.8,
    reviews: 64,
    inStock: true
  },
  {
    id: "fd2",
    name: "Daily Delight Cocktail Samosa",
    category: "Frozen Delights",
    price: 4.20,
    unit: "300g",
    image: "https://drive.google.com/thumbnail?id=1h0xt4uHhZoXBo5WpuYzbYnTi6Nwc7LpB",
    description: "Bite-sized crispy samosas, perfect for evening snacks.",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: "fd3",
    name: "Haldirams Tandoor Garlic Naan",
    category: "Frozen Delights",
    price: 3.99,
    unit: "400g",
    image: "https://drive.google.com/thumbnail?id=14tHxrZsebeQ-iZVBxgx6MFhzRyiDRfia",
    description: "Soft and aromatic garlic naan, ready to heat and serve.",
    rating: 4.9,
    reviews: 112,
    inStock: true
  },
  {
    id: "fd4",
    name: "Haldirams Lachcha Paratha",
    category: "Frozen Delights",
    price: 3.80,
    unit: "360g",
    image: "https://drive.google.com/thumbnail?id=1sdOJLwseUGBY6L5638IV6UZvFImJ5Hmn",
    description: "Layered and flaky whole wheat parathas.",
    rating: 4.8,
    reviews: 76,
    inStock: true
  },
  {
    id: "fd5",
    name: "Daily Delight Sliced Coconut",
    category: "Frozen Delights",
    price: 2.50,
    unit: "400g",
    image: "https://drive.google.com/thumbnail?id=1ZieyzBkm7PsJswaJsBVvoWJxZUvWKozS",
    description: "Freshly sliced frozen coconut for cooking and desserts.",
    rating: 4.6,
    reviews: 45,
    inStock: true
  },
  // Households
  {
    id: "h1",
    name: "Dabur Meswak ToothPaste 200g",
    category: "Households",
    price: 3.50,
    unit: "200g",
    image: "https://drive.google.com/thumbnail?id=1cYe9BkuEvc-6K4rp6-5vMcFn1EAcC7B4",
    description: "Rare herbs-based toothpaste with the pure extract of Miswak plant.",
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: "h2",
    name: "Nupur Hair Henna Powder 150g",
    category: "Households",
    price: 1.80,
    unit: "150g",
    image: "https://drive.google.com/thumbnail?id=1HnCS_r7VujhLyAT84FTdam02hobUyGxo",
    description: "100% natural henna powder for healthy and shiny hair.",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: "h3",
    name: "Surf Excel Easy Wash Detergent Powder",
    category: "Households",
    price: 4.50,
    unit: "1.5kg",
    image: "https://m.media-amazon.com/images/I/619HRPW3elL._SX679_.jpg",
    description: "Easy wash detergent powder for spotless cleaning.",
    rating: 4.8,
    reviews: 245,
    inStock: true
  },
  {
    id: "h4",
    name: "Vim Dishwash Liquid Gel Lemon",
    category: "Households",
    price: 2.20,
    unit: "500ml",
    image: "https://m.media-amazon.com/images/I/51rhw--KcDL._SX679_.jpg",
    description: "Powerful grease-cutting dishwash gel with lemon fragrance.",
    rating: 4.7,
    reviews: 312,
    inStock: true
  },
  {
    id: "h5",
    name: "Lizol Disinfectant Surface Cleaner",
    category: "Households",
    price: 1.99,
    unit: "500ml",
    image: "https://m.media-amazon.com/images/I/61OS+YdyYRL._SX679_.jpg",
    description: "Disinfectant floor cleaner that kills 99.9% of germs.",
    rating: 4.6,
    reviews: 178,
    inStock: true
  },
  // Deals
  {
    id: "d1",
    name: "Mccain Smiles Party Pack",
    category: "Deals",
    price: 4.50,
    unit: "1.25kg",
    image: "https://m.media-amazon.com/images/I/81ZHjNC6f3L._SX679_.jpg",
    description: "Fun and crispy potato smiles, perfect for parties and kids.",
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: "d2",
    name: "Haldiram's Aloo Bhujia",
    category: "Deals",
    price: 1.20,
    unit: "200g",
    image: "https://imgwlns.gumlet.io/images/products/248638-1.jpg",
    description: "Classic spicy potato noodles, a favorite Indian tea-time snack.",
    rating: 4.9,
    reviews: 342,
    inStock: true
  },
  {
    id: "d3",
    name: "Kellogg's Chocos Fills",
    category: "Deals",
    price: 3.80,
    unit: "250g",
    image: "https://m.media-amazon.com/images/I/814ZAj52LSL._SY879_.jpg",
    description: "Crunchy cereal with a delicious chocolaty center.",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: "d4",
    name: "Sunfeast Dark Fantasy",
    category: "Deals",
    price: 1.50,
    unit: "150g",
    image: "https://m.media-amazon.com/images/I/81C2NKTF5BL._SX679_.jpg",
    description: "Indulgent chocolate filled cookies for a premium dessert experience.",
    rating: 4.8,
    reviews: 215,
    inStock: true
  },
  {
    id: "d5",
    name: "PrettyNutty Healthy Nutmix",
    category: "Deals",
    price: 8.99,
    unit: "500g",
    image: "https://m.media-amazon.com/images/I/8116WQQe6bL._SX679_.jpg",
    description: "Nutritious mix of dried almonds and healthy nuts for daily energy.",
    rating: 4.9,
    reviews: 112,
    inStock: true
  },
  // Meal Kits
  {
    id: "mk1",
    name: "Paneer Butter Masala Kit",
    category: "Meal Kits",
    price: 8.99,
    unit: "kit",
    image: "https://m.media-amazon.com/images/I/61rLmsatWRL._AC_UL480_FMwebp_QL65_.jpg",
    description: "Complete kit with paneer, spices, and gravy base to cook in 15 mins.",
    rating: 4.9,
    reviews: 56,
    inStock: true,
    featured: true
  },
  {
    id: "mk2",
    name: "Authentic Vegetable Biryani Kit",
    category: "Meal Kits",
    price: 10.50,
    unit: "kit",
    image: "https://www.bbassets.com/media/uploads/p/xl/40214035_1-aachi-chettinadu-basmati-biryani-kit.jpg",
    description: "Includes Basmati rice, biryani masala, and whole spices.",
    rating: 4.8,
    reviews: 42,
    inStock: true,
    featured: true
  }
];

// Dynamically generate missing items for each category to reach 5 minimum
const CATEGORY_IMAGES: Record<string, string> = {
  "Fresh Veggies": "https://images.unsplash.com/photo-1597362868123-a5563b014a02?q=80&w=800&auto=format&fit=crop",
  "Greens & Herbs": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
  "Rice, Grain & Pulses": "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
  "Essentials & Staples": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=800&auto=format&fit=crop",
  "Spices & Condiments": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
  "Flours, Instant Food & Pickles": "https://images.unsplash.com/photo-1505253304418-ee3b625979d3?q=80&w=800&auto=format&fit=crop",
  "Nutrition": "https://images.unsplash.com/photo-1536627217140-5e045431668e?q=80&w=800&auto=format&fit=crop",
  "Sweets & Savories": "https://images.unsplash.com/photo-1596797038530-2c39bb9ed9da?q=80&w=800&auto=format&fit=crop",
  "Snacks, Tea & Noodles": "https://images.unsplash.com/photo-1599490659223-930b447ff71f?q=80&w=800&auto=format&fit=crop",
  "Pooja & Festive": "https://images.unsplash.com/photo-1560965389-9a7444c185a9?q=80&w=800&auto=format&fit=crop",
  "Frozen Delights": "https://images.unsplash.com/photo-1502447477382-7489da1f46f3?q=80&w=800&auto=format&fit=crop",
  "Households": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  "Deals": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
  "Meal Kits": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop"
};

CATEGORIES.forEach(cat => {
  const existingCount = PRODUCTS.filter(p => p.category === cat).length;
  for (let i = existingCount + 1; i <= 5; i++) {
    PRODUCTS.push({
      id: `${cat.slice(0, 2).toLowerCase()}${i}`,
      name: `${cat} Item ${i}`,
      category: cat,
      price: Math.floor(Math.random() * 10) + 2,
      unit: "unit",
      image: CATEGORY_IMAGES[cat] || "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      description: `Delicious and high-quality ${cat} item for your kitchen.`,
      rating: 4.0 + (Math.random() * 0.9),
      reviews: Math.floor(Math.random() * 50) + 10,
      inStock: true
    });
  }
});
