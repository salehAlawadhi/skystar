import { NextResponse } from 'next/server'

// Server runtime (not static) so this can actually send mail.
export const runtime = 'nodejs'

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request) {
  try {
    const data = await request.json()

    // Required fields (matches form: name, phone, city, fuelType, frequency)
    const missing = ['name', 'phone', 'city', 'fuelType'].filter((k) => !data[k] || !String(data[k]).trim())
    if (missing.length) {
      return NextResponse.json({ error: 'Missing required fields', fields: missing }, { status: 400 })
    }

    // Cheap honeypot — block bots that fill every field including the hidden one.
    if (data.website && String(data.website).trim() !== '') {
      return NextResponse.json({ message: 'ok' }, { status: 200 })
    }

    const subject = `New Supply Request — ${data.name} / ${data.city}`
    const html = `
      <h2>New supply request — Sky Star</h2>
      <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
        <tr><td><b>Name</b></td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td><b>Company</b></td><td>${escapeHtml(data.company)}</td></tr>
        <tr><td><b>Phone</b></td><td>${escapeHtml(data.phone)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td><b>City</b></td><td>${escapeHtml(data.city)}</td></tr>
        <tr><td><b>Fuel type</b></td><td>${escapeHtml(data.fuelType)}</td></tr>
        <tr><td><b>Quantity (L)</b></td><td>${escapeHtml(data.quantity)}</td></tr>
        <tr><td><b>Frequency</b></td><td>${escapeHtml(data.frequency)}</td></tr>
        <tr><td valign="top"><b>Message</b></td><td>${escapeHtml(data.message).replace(/\n/g, '<br>')}</td></tr>
      </table>
    `

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.QUOTE_RECIPIENT_EMAIL
    const from = process.env.QUOTE_FROM_EMAIL || 'onboarding@resend.dev'

    if (apiKey && to) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: to.split(',').map((s) => s.trim()),
          reply_to: data.email || undefined,
          subject,
          html,
        }),
      })

      if (!res.ok) {
        const body = await res.text().catch(() => '')
        console.error('Resend failed:', res.status, body)
        return NextResponse.json({ error: 'Email delivery failed' }, { status: 502 })
      }
    } else {
      // No email backend configured yet — log so the request is at least
      // captured in server logs, and surface a warning to the developer.
      // The frontend should ALSO provide a WhatsApp fallback CTA on success.
      console.warn('[quote] RESEND_API_KEY or QUOTE_RECIPIENT_EMAIL not set — request only logged, not emailed.')
      console.log('[quote] request:', JSON.stringify(data))
    }

    return NextResponse.json({ message: 'Quote request submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
