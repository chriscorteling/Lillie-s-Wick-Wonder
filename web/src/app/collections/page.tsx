import Link from 'next/link'
import Image from 'next/image'

const collections = [
  {
    id: 'candles',
    title: 'Candles',
    subtitle: 'The heart of the brand',
    description: 'Hand-poured in small batches using natural coconut-soy wax and rare fragrance oils. Each candle is a slow-burn ritual.',
    image: '/IMG_7330.JPG',
    count: '6 scents',
  },
  {
    id: 'gift-sets',
    title: 'Gift Sets',
    subtitle: 'For those who deserve wonder',
    description: 'Beautifully curated sets, gift-wrapped and ready. The perfect luxury gift for any occasion.',
    image: '/45b06e3c-b678-4442-b094-2bc3f0edb1b9.JPG',
    count: '3 sets',
  },
  {
    id: 'wax-melts',
    title: 'Wax Melts',
    subtitle: 'Flameless luxury',
    description: 'All the scent, none of the flame. Our wax melts fill any room with the same signature Lillies fragrance.',
    image: '/A2F0AE2C-1A6A-4152-A2F9-CF6E0F5997C2.PNG',
    count: '4 scents',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    subtitle: 'Complete the ritual',
    description: 'Snuffers, wick trimmers, and match cloches — everything you need to care for your candles beautifully.',
    image: '/181D9B0A-D2D8-439B-97B3-10AC949B627A.PNG',
    count: '5 pieces',
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">Browse</p>
        <h1 className="font-heading text-5xl md:text-6xl text-[#F5F0E8]">Collections</h1>
      </div>

      <div className="space-y-32">
        {collections.map((col, i) => (
          <div key={col.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            {/* Image */}
            <div className={`relative aspect-square overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <Image src={col.image} alt={col.title} fill className="object-cover" />
            </div>

            {/* Text */}
            <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">{col.count}</p>
              <h2 className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-3">{col.title}</h2>
              <p className="text-[#9A8F82] text-sm italic mb-6 font-body">{col.subtitle}</p>
              <p className="text-[#9A8F82] text-base leading-relaxed mb-8 font-body">{col.description}</p>
              <Link
                href={`/shop?category=${col.id}`}
                className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#C9A96E] hover:text-[#E8D5B0] transition-colors font-body group"
              >
                Shop {col.title}
                <span className="w-8 h-px bg-[#C9A96E] group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
