import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/logo.PNG" alt="Lillies Wick & Wonder" fill sizes="40px" className="object-contain" />
              </div>
              <span className="font-heading text-lg tracking-widest text-[#F5F0E8]">LILLIES</span>
            </div>
            <p className="text-[#6B6460] text-sm leading-relaxed max-w-xs font-body">
              Handcrafted luxury candles born from a love of dark florals, rare resins, and the quiet magic of candlelight.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/lillies.wicknwonder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-[#6B6460] hover:text-[#C9A96E] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/94702789944"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-[#6B6460] hover:text-[#C9A96E] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.tiktok.com/@lillies.wicknwonder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-[#6B6460] hover:text-[#C9A96E] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[#C9A96E] mb-5 font-body">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: 'Rose Candles', href: '/shop?category=rose-candles' },
                { label: 'Premium Glass', href: '/shop?category=premium-glass' },
                { label: 'Gift Packs', href: '/shop?category=gift-packs' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6B6460] hover:text-[#F5F0E8] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[#C9A96E] mb-5 font-body">Info</h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Shipping & Returns', href: '/contact' },
                { label: 'FAQ', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6B6460] hover:text-[#F5F0E8] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#262626] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6460] tracking-wide">
            © {new Date().getFullYear()} Lillies Wick & Wonder. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6460] tracking-wide">
            Handcrafted with love · Small batch · Slow burn
          </p>
        </div>
      </div>
    </footer>
  )
}
