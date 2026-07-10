'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_7337.JPG"
          alt="Lillies Wick & Wonder luxury candle"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-6 font-body">
          Luxury Handcrafted Candles
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-tight mb-8">
          Light the{' '}
          <span className="italic text-[#C9A96E]">Darkness</span>
        </h1>
        <p className="text-[#9A8F82] text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12 font-body">
          Small-batch luxury candles crafted for those who appreciate the beauty found in shadows, rare scents, and slow moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm tracking-widest uppercase hover:bg-[#E8D5B0] transition-colors duration-300 font-body"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C9A96E]/40 text-[#C9A96E] text-sm tracking-widest uppercase hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-colors duration-300 font-body"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase text-[#6B6460] font-body">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#6B6460] to-transparent" />
      </div>
    </section>
  )
}
