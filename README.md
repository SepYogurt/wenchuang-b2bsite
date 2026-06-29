# WenChuang B2B Website

Nuxt 3 website for WenChuang, a B2B cosmetic metal packaging manufacturer.

## Tech Stack

- Nuxt 3
- Vue 3
- TypeScript
- Tailwind CSS
- Resend email API
- Vercel deployment

## Local Development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```powershell
npm run lint
npm run build
```

## Product Data

Product categories are maintained in:

```text
data/products.ts
```

To replace concept images with real product photos, add images under `public/images/` and update each product's `image` field.

## Company Information

Company name, email, and address are maintained in:

```text
data/company.ts
```

## RFQ Email

The contact form posts to:

```text
server/api/rfq.post.ts
```

Required environment variables:

```text
RESEND_API_KEY
RFQ_TO_EMAIL
RFQ_FROM_EMAIL
```

`RESEND_API_KEY` must be configured in Vercel and should never be committed.
