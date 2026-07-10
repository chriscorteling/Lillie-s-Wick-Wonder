import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <div className="relative h-[50vh] mb-24 overflow-hidden">
        <Image
          src="/IMG_7334.JPG"
          alt="About Lillies Wick & Wonder"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 to-[#0A0A0A]" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">About Us</p>
            <h1 className="font-heading text-5xl md:text-7xl text-[#F5F0E8]">Our Story</h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="space-y-10">
          <div>
            <h2 className="font-heading text-3xl text-[#F5F0E8] mb-6">
              Where darkness meets <span className="italic text-[#C9A96E]">wonder</span>
            </h2>
            <p className="text-[#9A8F82] text-base leading-relaxed font-body">
              Lillies Wick & Wonder was born from a single evening ritual — a candle lit at dusk, a room filled with the scent of dark florals and aged wood, and the world finally going quiet. That moment became an obsession.
            </p>
          </div>

          <div className="relative aspect-video overflow-hidden">
            <Image src="/IMG_7332.JPG" alt="Our candles" fill className="object-cover" />
          </div>

          <p className="text-[#9A8F82] text-base leading-relaxed font-body">
            We hand-pour every single candle in small batches, using natural waxes and fragrance oils sourced from trusted suppliers around the world. Our scents are inspired by the duality of beauty and darkness — black orchids, midnight jasmine, oud and smoke, velvet rose.
          </p>

          <p className="text-[#9A8F82] text-base leading-relaxed font-body">
            We believe the best candles aren't just pretty objects — they transform a space. They slow time. They create ceremony out of the ordinary. That's the wonder in Lillies Wick & Wonder.
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[#262626]">
            {[
              { title: 'Small Batch', desc: 'Every candle is poured by hand in limited quantities.' },
              { title: 'Natural Wax', desc: 'We use clean-burning coconut-soy blend wax.' },
              { title: 'Slow Craft', desc: 'No shortcuts. Each pour is intentional and cared for.' },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="font-heading text-lg text-[#C9A96E] mb-3">{v.title}</h3>
                <p className="text-sm text-[#6B6460] leading-relaxed font-body">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm tracking-widest uppercase hover:bg-[#E8D5B0] transition-colors font-body"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
