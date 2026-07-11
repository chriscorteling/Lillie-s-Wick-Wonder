'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

const WHATSAPP_NUMBER = '94702789944'
const DELIVERY_FEE = 450

export default function CartDrawer() {
  const { items, remove, updateQty, clear, total, open, setOpen } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' })
  const [step, setStep] = useState<'cart' | 'details'>('cart')
  const [fulfillment, setFulfillment] = useState<'delivery' | 'pickup'>('delivery')

  const appliedFee = fulfillment === 'pickup' ? 0 : DELIVERY_FEE
  const grandTotal = total + appliedFee

  function handleSendOrder() {
    const lines = items.map((i) => `• ${i.name} x${i.qty} — LKR ${(i.price * i.qty).toLocaleString()}`)
    const message = [
      '🕯️ *New Order — Lillies Wick & Wonder*',
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      fulfillment === 'delivery' ? `*Address:* ${form.address}` : `*Fulfillment:* Pickup`,
      form.note ? `*Note:* ${form.note}` : '',
      '',
      '*Order:*',
      ...lines,
      fulfillment === 'delivery' ? `• Delivery Fee — LKR ${appliedFee.toLocaleString()}` : '• Pickup (no delivery fee)',
      '',
      `*Total: LKR ${grandTotal.toLocaleString()}*`,
      '',
      'Thank you! We will confirm your order shortly. 🌹',
    ].filter((l) => l !== null && l !== undefined && !(l === '' && false)).join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    clear()
    setForm({ name: '', phone: '', address: '', note: '' })
    setStep('cart')
    setOpen(false)
  }

  const canProceed = items.length > 0
  const canSend = form.name.trim() && form.phone.trim() && (fulfillment === 'pickup' || form.address.trim())

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0F0F0F] border-l border-[#262626] z-50 flex flex-col transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#262626]">
          <div>
            <h2 className="font-heading text-xl text-[#F5F0E8]">
              {step === 'cart' ? 'Your Cart' : 'Order Details'}
            </h2>
            {step === 'cart' && items.length > 0 && (
              <p className="text-xs text-[#6B6460] mt-0.5 font-body">{items.length} item{items.length > 1 ? 's' : ''}</p>
            )}
          </div>
          <button
            onClick={() => { setOpen(false); setStep('cart') }}
            className="text-[#6B6460] hover:text-[#F5F0E8] transition-colors p-1"
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Cart Step */}
        {step === 'cart' && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <p className="font-heading text-2xl text-[#F5F0E8] mb-2">Your cart is empty</p>
                  <p className="text-sm text-[#6B6460] font-body">Add some candles to get started</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b border-[#1C1C1C]">
                    <div className="relative w-20 h-20 shrink-0 overflow-hidden bg-[#1C1C1C]">
                      <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-sm text-[#F5F0E8] mb-0.5">{item.name}</h3>
                      {item.scent && <p className="text-xs text-[#6B6460] font-body mb-2">{item.scent}</p>}
                      <div className="flex items-center justify-between">
                        {/* Qty controls */}
                        <div className="flex items-center border border-[#262626]">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-7 h-7 text-[#9A8F82] hover:text-[#F5F0E8] transition-colors text-sm"
                          >−</button>
                          <span className="w-7 text-center text-xs text-[#F5F0E8] font-body">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="w-7 h-7 text-[#9A8F82] hover:text-[#F5F0E8] transition-colors text-sm"
                          >+</button>
                        </div>
                        <span className="text-sm text-[#C9A96E] font-body">LKR {(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="text-[#6B6460] hover:text-red-400 transition-colors shrink-0 self-start mt-1"
                      aria-label="Remove item"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#262626] space-y-4">
                {/* Pickup / Delivery toggle */}
                <div className="grid grid-cols-2 gap-2">
                  {(['delivery', 'pickup'] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setFulfillment(opt)}
                      className={`py-2.5 text-xs tracking-widest uppercase font-body border transition-colors ${
                        fulfillment === opt
                          ? 'bg-[#C9A96E] text-[#0A0A0A] border-[#C9A96E]'
                          : 'border-[#262626] text-[#6B6460] hover:border-[#C9A96E]/40 hover:text-[#9A8F82]'
                      }`}
                    >
                      {opt === 'delivery' ? '🚚 Delivery' : '🏪 Pickup'}
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-[#9A8F82] font-body">Subtotal</span>
                    <span className="text-sm text-[#F5F0E8] font-body">LKR {total.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#9A8F82] font-body">Delivery fee</span>
                    {fulfillment === 'pickup'
                      ? <span className="text-sm text-green-400 font-body">Free</span>
                      : <span className="text-sm text-[#F5F0E8] font-body">LKR {DELIVERY_FEE.toLocaleString()}</span>
                    }
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#262626]">
                    <span className="text-sm text-[#9A8F82] font-body uppercase tracking-widest">Total</span>
                    <span className="font-heading text-lg text-[#C9A96E]">LKR {grandTotal.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => setStep('details')}
                  disabled={!canProceed}
                  className="w-full py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[#E8D5B0] transition-colors disabled:opacity-40"
                >
                  Proceed to Order
                </button>
              </div>
            )}
          </>
        )}

        {/* Details Step */}
        {step === 'details' && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
              {/* Order summary */}
              <div className="bg-[#141414] border border-[#262626] p-4 space-y-2">
                <div className="flex justify-between text-xs font-body pb-1">
                  <span className="text-[#C9A96E] uppercase tracking-wider">
                    {fulfillment === 'delivery' ? '🚚 Delivery' : '🏪 Pickup'}
                  </span>
                </div>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm font-body">
                    <span className="text-[#9A8F82]">{item.name} x{item.qty}</span>
                    <span className="text-[#F5F0E8]">LKR {(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm font-body">
                  <span className="text-[#9A8F82]">Delivery fee</span>
                  {fulfillment === 'pickup'
                    ? <span className="text-green-400">Free</span>
                    : <span className="text-[#F5F0E8]">LKR {appliedFee.toLocaleString()}</span>
                  }
                </div>
                <div className="flex justify-between text-sm font-body pt-2 border-t border-[#262626]">
                  <span className="text-[#C9A96E] uppercase tracking-wider">Total</span>
                  <span className="text-[#C9A96E] font-semibold">LKR {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] uppercase text-[#6B6460] font-body">Your Details</p>
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'e.g. Amara Silva', required: true, show: true },
                  { key: 'phone', label: 'Phone Number', placeholder: 'e.g. 0771234567', required: true, show: true },
                  { key: 'address', label: 'Delivery Address', placeholder: 'Street, City', required: true, show: fulfillment === 'delivery' },
                  { key: 'note', label: 'Note (optional)', placeholder: 'Any special requests...', required: false, show: true },
                ].filter((f) => f.show).map(({ key, label, placeholder, required }) => (
                  <div key={key}>
                    <label className="block text-xs text-[#6B6460] mb-1.5 font-body tracking-wider uppercase">
                      {label} {required && <span className="text-[#C9A96E]">*</span>}
                    </label>
                    <input
                      type="text"
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full bg-[#141414] border border-[#262626] focus:border-[#C9A96E]/60 outline-none px-4 py-3 text-sm text-[#F5F0E8] font-body placeholder:text-[#3A3A3A] transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-5 border-t border-[#262626] space-y-3">
              <button
                onClick={handleSendOrder}
                disabled={!canSend}
                className="w-full py-4 bg-[#25D366] text-white text-sm tracking-widest uppercase font-body font-semibold hover:bg-[#20bf5a] transition-colors disabled:opacity-40 flex items-center justify-center gap-3"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Order on WhatsApp
              </button>
              <button
                onClick={() => setStep('cart')}
                className="w-full py-3 border border-[#262626] text-[#6B6460] text-xs tracking-widest uppercase font-body hover:border-[#C9A96E]/40 hover:text-[#9A8F82] transition-colors"
              >
                Back to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
