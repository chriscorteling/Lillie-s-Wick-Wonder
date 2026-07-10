'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'

export default function ShopPage() {
  const [active, setActive] = useState<string>('all')

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">Browse</p>
        <h1 className="font-heading text-5xl md:text-6xl text-[#F5F0E8] mb-6">The Collection</h1>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E] to-transparent mx-auto" />
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-16">
        <button
          onClick={() => setActive('all')}
          className={`px-5 py-2 text-xs tracking-widest uppercase transition-colors font-body border ${
            active === 'all'
              ? 'bg-[#C9A96E] text-[#0A0A0A] border-[#C9A96E]'
              : 'border-[#262626] text-[#6B6460] hover:border-[#C9A96E]/40 hover:text-[#C9A96E]'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 text-xs tracking-widest uppercase transition-colors font-body border ${
              active === cat.id
                ? 'bg-[#C9A96E] text-[#0A0A0A] border-[#C9A96E]'
                : 'border-[#262626] text-[#6B6460] hover:border-[#C9A96E]/40 hover:text-[#C9A96E]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#6B6460] py-24 font-body">No products found.</p>
      )}
    </div>
  )
}
