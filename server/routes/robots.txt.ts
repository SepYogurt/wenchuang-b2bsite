import { site } from '~/data/site'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${site.url}/sitemap.xml`
  ].join('\n')
})
