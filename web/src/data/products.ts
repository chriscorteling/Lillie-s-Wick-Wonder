export type Product = {
  id: string
  name: string
  price: number
  category: 'candles' | 'gift-sets' | 'wax-melts' | 'accessories'
  description: string
  image: string
  featured?: boolean
  scent?: string
  burnTime?: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Jasmine',
    price: 38,
    category: 'candles',
    description: 'A dark floral bloom with notes of night jasmine, amber, and sandalwood. Hand-poured in small batches.',
    image: '/IMG_7330.JPG',
    featured: true,
    scent: 'Jasmine · Amber · Sandalwood',
    burnTime: '50 hours',
  },
  {
    id: '2',
    name: 'Black Orchid & Smoke',
    price: 42,
    category: 'candles',
    description: 'Intoxicating black orchid layered with vetiver and a whisper of charred wood.',
    image: '/IMG_7331.JPG',
    featured: true,
    scent: 'Orchid · Vetiver · Char',
    burnTime: '55 hours',
  },
  {
    id: '3',
    name: 'Velvet Rouge',
    price: 36,
    category: 'candles',
    description: 'Rich red rose petals melting into dark musk and crushed black pepper.',
    image: '/IMG_7332.JPG',
    featured: true,
    scent: 'Rose · Musk · Black Pepper',
    burnTime: '48 hours',
  },
  {
    id: '4',
    name: 'Cedar & Dusk',
    price: 34,
    category: 'candles',
    description: 'Grounding cedarwood anchored with tobacco leaf and a breath of evening air.',
    image: '/IMG_7334.JPG',
    scent: 'Cedar · Tobacco · Air',
    burnTime: '45 hours',
  },
  {
    id: '5',
    name: 'Obsidian Oud',
    price: 48,
    category: 'candles',
    description: 'Our most luxurious scent. Rare oud blended with dark resins and Arabian spices.',
    image: '/IMG_7337.JPG',
    featured: true,
    scent: 'Oud · Resin · Spice',
    burnTime: '60 hours',
  },
  {
    id: '6',
    name: 'Shadow & Bloom',
    price: 40,
    category: 'candles',
    description: 'A paradox of florals and darkness — tuberose meets charcoal and earthy patchouli.',
    image: '/IMG_7330b.JPG',
    scent: 'Tuberose · Charcoal · Patchouli',
    burnTime: '50 hours',
  },
  {
    id: '7',
    name: 'The Dark Ritual Set',
    price: 98,
    category: 'gift-sets',
    description: 'Three of our signature candles beautifully boxed — the perfect luxury gift.',
    image: '/45b06e3c-b678-4442-b094-2bc3f0edb1b9.JPG',
    featured: true,
  },
  {
    id: '8',
    name: 'Midnight Wax Melts',
    price: 18,
    category: 'wax-melts',
    description: 'All the ambiance, no flame required. Set of 6 luxury wax melts.',
    image: '/A2F0AE2C-1A6A-4152-A2F9-CF6E0F5997C2.PNG',
    scent: 'Various',
  },
  {
    id: '9',
    name: 'Matte Black Snuffer',
    price: 24,
    category: 'accessories',
    description: 'A sleek matte black candle snuffer. Extinguish beautifully.',
    image: '/181D9B0A-D2D8-439B-97B3-10AC949B627A.PNG',
  },
]

export const categories = [
  { id: 'candles', label: 'Candles' },
  { id: 'gift-sets', label: 'Gift Sets' },
  { id: 'wax-melts', label: 'Wax Melts' },
  { id: 'accessories', label: 'Accessories' },
]
