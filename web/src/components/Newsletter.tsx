'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-32 px-6 bg-[#141414] border-y border-[#262626]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">Join the Circle</p>
        <h2 className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-6">
          The Inner Flame
        </h2>
        <p className="text-[#6B6460] text-base leading-relaxed mb-10 font-body">
          Subscribe for early access to new scents, exclusive rituals, and the art of slow living — delivered to your inbox.
        </p>

        {submitted ? (
          <div className="py-6">
            <p className="text-[#C9A96E] tracking-widest uppercase text-sm font-body">
              Welcome to the circle ✦
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-[#0A0A0A] border border-[#262626] border-r-0 px-5 py-4 text-sm text-[#F5F0E8] placeholder-[#6B6460] outline-none focus:border-[#C9A96E]/50 transition-colors font-body"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-[#C9A96E] text-[#0A0A0A] text-xs tracking-widest uppercase hover:bg-[#E8D5B0] transition-colors font-body whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
