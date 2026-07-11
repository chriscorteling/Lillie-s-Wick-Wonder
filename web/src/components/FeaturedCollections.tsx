import Link from 'next/link'
import Image from 'next/image'
import ProductCard from './ProductCard'
import { products } from '@/data/products'

const featured = products.filter((p) => p.featured)

const collections = [
  {
    title: 'Rose Candles',
    description: 'Sculpted floral candles, hand-poured in natural wax with luxury fragrance oils.',
    image: '/collections/rose-collection.png',
    href: '/shop?category=rose-candles',
  },
  {
    title: 'Premium Glass',
    description: 'Elevated glass vessels filled with our finest wax blends. Minimal and luxurious.',
    image: '/collections/glass-collection.png',
    href: '/shop?category=premium-glass',
  },
  {
    title: 'Gift Packs',
    description: 'Beautifully curated sets, wrapped and ready for any occasion.',
    image: '/collections/gift-collection.png',
    href: '/shop?category=gift-packs',
  },
]

export default function FeaturedCollections() {
  return (
    <>
      {/* Collections Banner */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">Explore</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#F5F0E8]">Our Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link key={col.title} href={col.href} className="group relative overflow-hidden aspect-[3/4] block">
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl text-[#F5F0E8] mb-2">{col.title}</h3>
                <p className="text-sm text-[#9A8F82] mb-4 font-body">{col.description}</p>
                <span className="text-xs tracking-widest uppercase text-[#C9A96E] border-b border-[#C9A96E]/40 pb-0.5 font-body group-hover:border-[#C9A96E] transition-colors">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">Bestsellers</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#F5F0E8]">Favourites</h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex text-sm tracking-widest uppercase text-[#C9A96E] hover:text-[#E8D5B0] transition-colors font-body"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
