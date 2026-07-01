import { Resend } from 'resend'
import { company as companyInfo } from '~/data/company'

interface RfqPayload {
  name?: string
  company?: string
  email?: string
  country?: string
  productType?: string
  sourceProductSlug?: string
  material?: string
  surfaceFinish?: string
  dimensions?: string
  quantity?: string
  targetMarket?: string
  timeline?: string
  attachmentLink?: string
  message?: string
  website?: string
}

const recentSubmissions = new Map<string, number>()
const submissionWindowMs = 60_000

const normalize = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll('\'', '&#039;')

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#6b7280;width:160px;vertical-align:top">${label}</td>
    <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#111827;vertical-align:top">${value || '-'}</td>
  </tr>
`

export default defineEventHandler(async (event) => {
  const body = await readBody<RfqPayload>(event)

  // Bots commonly fill hidden fields that real visitors never see.
  if (normalize(body.website, 200)) {
    return { success: true }
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  const now = Date.now()
  const lastSubmission = recentSubmissions.get(ip)

  if (lastSubmission && now - lastSubmission < submissionWindowMs) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Please wait a moment before submitting another request.'
    })
  }

  const rfq = {
    name: normalize(body.name, 100),
    company: normalize(body.company, 120),
    email: normalize(body.email, 200).toLowerCase(),
    country: normalize(body.country, 100),
    productType: normalize(body.productType, 120),
    sourceProductSlug: normalize(body.sourceProductSlug, 120),
    material: normalize(body.material, 150),
    surfaceFinish: normalize(body.surfaceFinish, 150),
    dimensions: normalize(body.dimensions, 200),
    quantity: normalize(body.quantity, 100),
    targetMarket: normalize(body.targetMarket, 120),
    timeline: normalize(body.timeline, 160),
    attachmentLink: normalize(body.attachmentLink, 500),
    message: normalize(body.message, 5000)
  }

  if (!rfq.name || !rfq.email || !rfq.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email, and message are required.'
    })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rfq.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please enter a valid email address.'
    })
  }

  if (rfq.attachmentLink && !/^https?:\/\//i.test(rfq.attachmentLink)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid drawing or reference link.'
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RFQ email delivery is unavailable: RESEND_API_KEY is not configured.')
    throw createError({
      statusCode: 503,
      statusMessage: 'Email delivery is temporarily unavailable. Please email us directly.'
    })
  }

  const recipient = process.env.RFQ_TO_EMAIL || companyInfo.email
  const sender = process.env.RFQ_FROM_EMAIL || 'WenChuang Website <onboarding@resend.dev>'
  const resend = new Resend(apiKey)
  const rfqReference = `WC-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  const safe = Object.fromEntries(
    Object.entries(rfq).map(([key, value]) => [key, escapeHtml(value)])
  ) as typeof rfq

  const { data, error } = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: rfq.email,
    subject: `[${rfqReference}] New RFQ: ${rfq.productType || 'Metal Cosmetic Packaging'} - ${rfq.company || rfq.name}`,
    html: `
      <!doctype html>
      <html lang="en">
        <body style="margin:0;background:#f5f6f8;font-family:Arial,sans-serif;color:#111827">
          <div style="max-width:680px;margin:0 auto;padding:32px 16px">
            <div style="background:#10131a;padding:24px;color:#ffffff">
              <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#c7a76a">WenChuang Website</div>
              <h1 style="margin:10px 0 0;font-size:24px">New RFQ Received</h1>
              <p style="margin:10px 0 0;color:#d1d5db;font-size:13px">Reference: ${rfqReference}</p>
            </div>
            <table role="presentation" style="width:100%;border-collapse:collapse;background:#ffffff">
              ${row('RFQ Reference', rfqReference)}
              ${row('Name', safe.name)}
              ${row('Company', safe.company)}
              ${row('Email', `<a href="mailto:${safe.email}" style="color:#111827">${safe.email}</a>`)}
              ${row('Country', safe.country)}
              ${row('Product Type', safe.productType)}
              ${row('Source Product Slug', safe.sourceProductSlug)}
              ${row('Material', safe.material)}
              ${row('Surface Finish', safe.surfaceFinish)}
              ${row('Size / Dimensions', safe.dimensions)}
              ${row('Estimated Quantity', safe.quantity)}
              ${row('Target Market', safe.targetMarket)}
              ${row('Project Timeline', safe.timeline)}
              ${row('Drawing / Reference Link', safe.attachmentLink ? `<a href="${safe.attachmentLink}" style="color:#111827">${safe.attachmentLink}</a>` : '')}
              ${row('Message', safe.message.replaceAll('\n', '<br>'))}
            </table>
            <p style="margin:18px 0 0;color:#6b7280;font-size:12px;line-height:1.6">
              Reply directly to this email to contact the customer at ${safe.email}.
            </p>
          </div>
        </body>
      </html>
    `
  })

  if (error) {
    console.error('Resend failed to deliver RFQ email:', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'We could not send your request. Please email us directly.'
    })
  }

  recentSubmissions.set(ip, now)

  return {
    success: true,
    id: rfqReference,
    emailId: data?.id
  }
})
