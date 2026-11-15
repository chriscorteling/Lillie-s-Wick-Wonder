import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'lillies.wicknwonder@gmail.com'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Contact form is not configured' }, { status: 503 })
  }
  const resend = new Resend(apiKey)

  const { name, email, subject, message } = await req.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const safe = {
    name: escapeHtml(String(name)),
    email: escapeHtml(String(email)),
    subject: escapeHtml(String(subject)),
    message: escapeHtml(String(message)),
  }

  const { error } = await resend.emails.send({
    from: 'Lillies Contact Form <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Contact] ${subject} — from ${name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0A0A0A; color: #F5F0E8;">
        <h2 style="color: #C9A96E; margin-bottom: 24px;">New message — Lillies Wick & Wonder</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #9A8F82; width: 100px;">Name</td><td style="padding: 8px 0;">${safe.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #9A8F82;">Email</td><td style="padding: 8px 0;">${safe.email}</td></tr>
          <tr><td style="padding: 8px 0; color: #9A8F82;">Subject</td><td style="padding: 8px 0;">${safe.subject}</td></tr>
        </table>
        <hr style="border-color: #262626; margin: 24px 0;" />
        <p style="color: #9A8F82; line-height: 1.7; white-space: pre-wrap;">${safe.message}</p>
        <hr style="border-color: #262626; margin: 24px 0;" />
        <p style="color: #6B6460; font-size: 12px;">Reply directly to this email to respond to ${safe.name}.</p>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
