import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'hello@lillieswickandwonder.com'

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
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
          <tr><td style="padding: 8px 0; color: #9A8F82; width: 100px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #9A8F82;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #9A8F82;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>
        </table>
        <hr style="border-color: #262626; margin: 24px 0;" />
        <p style="color: #9A8F82; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        <hr style="border-color: #262626; margin: 24px 0;" />
        <p style="color: #6B6460; font-size: 12px;">Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
