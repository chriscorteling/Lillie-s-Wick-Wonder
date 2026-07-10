'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = "w-full bg-[#141414] border border-[#262626] px-5 py-4 text-sm text-[#F5F0E8] placeholder-[#6B6460] outline-none focus:border-[#C9A96E]/50 transition-colors font-body"

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4 font-body">Get in Touch</p>
          <h1 className="font-heading text-5xl text-[#F5F0E8] mb-8">Contact Us</h1>
          <p className="text-[#9A8F82] text-base leading-relaxed mb-12 font-body">
            Questions about an order, wholesale inquiries, or just want to say hello? We&apos;d love to hear from you.
          </p>

          <div className="space-y-8">
            {[
              { label: 'Email', value: 'hello@lillieswickandwonder.com' },
              { label: 'Hours', value: 'Mon–Fri · 9am–5pm' },
              { label: 'Returns', value: '14-day return window' },
            ].map((item) => (
              <div key={item.label} className="border-b border-[#262626] pb-6">
                <p className="text-xs tracking-widest uppercase text-[#C9A96E] mb-2 font-body">{item.label}</p>
                <p className="text-[#9A8F82] text-sm font-body">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center">
                <div className="w-12 h-12 border border-[#C9A96E] flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#C9A96E] text-xl">✦</span>
                </div>
                <h2 className="font-heading text-2xl text-[#F5F0E8] mb-4">Message Received</h2>
                <p className="text-[#6B6460] text-sm font-body">We&apos;ll get back to you within 1–2 business days.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={inputClass}
                />
              </div>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>Subject</option>
                <option value="order">Order Inquiry</option>
                <option value="wholesale">Wholesale</option>
                <option value="general">General Question</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={6}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm tracking-widest uppercase hover:bg-[#E8D5B0] transition-colors font-body"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
