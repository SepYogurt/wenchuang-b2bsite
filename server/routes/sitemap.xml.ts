import { products } from '~/data/products'
import { site } from '~/data/site'

const staticRoutes = [
  '/',
  '/about',
  '/products',
  '/capabilities',
  '/surface-finishing',
  '/quality-control',
  '/contact'
]

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll('\'', '&apos;')

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const productRoutes = products.map((product) => `/products/${product.slug}`)
  const routes = [...staticRoutes, ...productRoutes]
  const lastmod = new Date().toISOString().slice(0, 10)

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${escapeXml(`${site.url}${route}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/products/') ? '0.8' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>`
})
