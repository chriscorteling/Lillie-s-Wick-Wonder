import Image from 'next/image'
import Link from 'next/link'

export default function BrandStory() {
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/moulds/red-rose.jpeg" alt="Lillies candle" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden mt-8">
            <Image src="/moulds/white-rose.png" alt="Lillies candle" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-6 font-body">Our Story</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-8">
            Born from the love of{' '}
            <span className="italic text-[#C9A96E]">darkness & bloom</span>
          </h2>
          <p className="text-[#9A8F82] text-base leading-relaxed mb-6 font-body">
            Lillies Wick & Wonder began with a simple ritual — lighting a candle at dusk and letting the world slow down. What started as a personal obsession with rare florals and dark resins became a craft, and eventually, a brand.
          </p>
          <p className="text-[#9A8F82] text-base leading-relaxed mb-10 font-body">
            Every candle is hand-poured in small batches using natural waxes and fragrance oils sourced from around the world. We believe in slow beauty, intentional living, and the magic that happens when a flame meets the right scent.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#C9A96E] hover:text-[#E8D5B0] transition-colors font-body group"
          >
            Read More
            <span className="w-8 h-px bg-[#C9A96E] group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
