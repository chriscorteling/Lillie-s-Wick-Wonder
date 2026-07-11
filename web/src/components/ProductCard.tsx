'use client'

import Image from 'next/image'
import type { Product } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()

  return (
    <div className="group relative bg-[#141414] border border-[#262626] hover:border-[#C9A96E]/40 transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#1C1C1C]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick add overlay — always visible on mobile, hover on desktop */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
          <button
            onClick={() => add(product)}
            className="w-full py-3 bg-[#C9A96E] text-[#0A0A0A] text-xs tracking-widest uppercase hover:bg-[#E8D5B0] transition-colors font-body"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-base text-[#F5F0E8] group-hover:text-[#C9A96E] transition-colors leading-snug">
            {product.name}
          </h3>
          <span className="text-sm text-[#C9A96E] font-body whitespace-nowrap">
            LKR {product.price.toLocaleString()}
          </span>
        </div>
        {product.scent && (
          <p className="text-xs text-[#6B6460] tracking-wide mb-2 font-body">{product.scent}</p>
        )}
        {product.burnTime && (
          <p className="text-xs text-[#6B6460] font-body">{product.burnTime} burn time</p>
        )}
      </div>
    </div>
  )
}
