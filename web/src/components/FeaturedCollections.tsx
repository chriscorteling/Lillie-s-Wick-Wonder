import Link from 'next/link'
import Image from 'next/image'
import ProductCard from './ProductCard'
import { products } from '@/data/products'

const featured = products.filter((p) => p.featured)

const collections = [
  {
    title: 'Candles',
    description: 'Hand-poured luxury candles in dark, intoxicating scents.',
    image: '/IMG_7332.JPG',
    href: '/shop',
  },
  {
    title: 'Gift Sets',
    description: 'Beautifully curated sets for those who deserve something special.',
    image: '/45b06e3c-b678-4442-b094-2bc3f0edb1b9.JPG',
    href: '/shop',
  },
  {
    title: 'Wax Melts',
    description: 'All the ambiance, no flame. Luxury scent without limits.',
    image: '/A2F0AE2C-1A6A-4152-A2F9-CF6E0F5997C2.PNG',
    href: '/shop',
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
