import Link from 'next/link'
import Image from 'next/image'

const collections = [
  {
    id: 'rose-candles',
    title: 'Rose Candles',
    subtitle: 'Hand-poured in small batches',
    description: 'Our signature mould candles — sculpted into roses and florals, each poured by hand with natural wax and luxury fragrance oils. A centrepiece as much as a candle.',
    image: '/collections/rose-collection.png',
    count: '5 candles',
  },
  {
    id: 'premium-glass',
    title: 'Premium Glass Collection',
    subtitle: 'Luxury in its purest form',
    description: 'Hand-finished glass vessels filled with our finest wax blends. Minimal, elevated, and designed to live beautifully in any space long after the last burn.',
    image: '/collections/glass-collection.png',
    count: '2 candles',
  },
  {
    id: 'gift-packs',
    title: 'Gift Packs',
    subtitle: 'For those who deserve wonder',
    description: 'Beautifully curated gift sets, wrapped and ready. The perfect luxury gift — whether for someone special or yourself.',
    image: '/collections/gift-collection.png',
    count: '1 set',
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
