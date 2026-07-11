'use client'

const news = [
  'Shopify store coming soon — online ordering on its way!',
  'New arrivals: Daisy & White Rose mould candles now in stock',
  'Gift Packs available — perfect for any occasion',
  'Premium Glass Collection — limited quantities available',
  'Hand-poured in small batches using natural wax & luxury fragrance oils',
]

export default function NewsBanner() {
  const items = [...news, ...news]

  return (
    <div className="bg-[#C9A96E] overflow-hidden py-4 relative border-y-2 border-[#A8834A]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#C9A96E] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#C9A96E] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[#0A0A0A] text-sm tracking-[0.2em] uppercase font-body font-semibold px-14"
          >
            {/* Blinking green dot */}
            <span
              className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400 shrink-0"
              style={{ animation: 'blink 1.2s step-start infinite' }}
            />
            {item}
            <span className="text-[#0A0A0A]/50 ml-10 text-base">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
