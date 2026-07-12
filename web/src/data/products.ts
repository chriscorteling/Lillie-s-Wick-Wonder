export type Product = {
  id: string
  name: string
  price: number
  category: 'rose-candles' | 'premium-glass' | 'gift-packs'
  description: string
  image: string
  featured?: boolean
  scent?: string
  burnTime?: string
}

export const products: Product[] = [
  // Rose Candles
  {
    id: '1',
    name: 'Red Rose',
    price: 650,
    category: 'rose-candles',
    description: 'A sculpted red rose candle poured in natural wax with notes of rose, amber, and sandalwood.',
    image: '/moulds/red-rose.jpeg',
    featured: true,
    scent: 'Rose · Amber · Sandalwood',
    burnTime: '30 hours',
  },
  {
    id: '2',
    name: 'White & Red',
    price: 750,
    category: 'rose-candles',
    description: 'A bold red and white mould candle with a rich floral and musk fragrance.',
    image: '/moulds/white-red.png',
    featured: true,
    scent: 'Rose · Vanilla · Apple',
    burnTime: '30 hours',
  },
  {
    id: '3',
    name: 'Blue & White',
    price: 750,
    category: 'rose-candles',
    description: 'Cool blue and white tones in a sculpted mould candle, scented with fresh linen and white tea.',
    image: '/moulds/blue-white.png',
    scent: 'Vanilla · Rose · Jasmine',
    burnTime: '30 hours',
  },
  {
    id: '4',
    name: 'Daisy',
    price: 450,
    category: 'rose-candles',
    description: 'A delicate daisy-shaped candle with notes of chamomile, soft petals, and vanilla.',
    image: '/moulds/daisy.png',
    scent: 'Jasmine · Vanilla',
    burnTime: '25 hours',
  },
  {
    id: '5',
    name: 'White Rose',
    price: 650,
    category: 'rose-candles',
    description: 'A pure white rose sculpted in wax serene, elegant, and softly scented.',
    image: '/moulds/white-rose.png',
    featured: true,
    scent: 'Rose · Jasmine · Vanilla',
    burnTime: '30 hours',
  },

  // Premium Glass Collection
  {
    id: '6',
    name: 'Blue Waves',
    price: 1200,
    category: 'premium-glass',
    description: 'A striking blue glass vessel filled with our ocean-inspired wax blend. Deeply calming.',
    image: '/glass/blue-waves.png',
    featured: true,
    scent: 'Vanilla · Rose · Apple',
    burnTime: '60 hours',
  },
  {
    id: '7',
    name: 'White Wax',
    price: 1100,
    category: 'premium-glass',
    description: 'A clean white glass candle with a warm, minimalist presence. Sophisticated and timeless.',
    image: '/glass/white.png',
    scent: 'Vanilla · Jasmine · Rose · Apple',
    burnTime: '60 hours',
  },

  {
    id: '9',
    name: 'Bubblegum',
    price: 1300,
    category: 'premium-glass',
    description: 'A playful yet refined glass candle in a soft blush tone, filled with a sweet and creamy wax blend.',
    image: '/glass/bubblegum.png',
    scent: 'Bubblegum · Vanilla · Coconut',
    burnTime: '60 hours',
  },

  // Gift Packs
  {
    id: '8',
    name: 'The Wonder Set',
    price: 2250,
    category: 'gift-packs',
    description: 'Five of our signature pieces beautifully boxed — the ultimate luxury gift for any occasion.',
    image: '/gift-packs/five-items-giftpack.png',
    featured: true,
  },
]

export const categories = [
  { id: 'rose-candles', label: 'Rose Candles' },
  { id: 'premium-glass', label: 'Premium Glass' },
  { id: 'gift-packs', label: 'Gift Packs' },
]
