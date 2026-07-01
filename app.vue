<script setup lang="ts">
import { company } from '~/data/company'
import { site } from '~/data/site'

useHead({
  titleTemplate: (title) => title || site.title,
  meta: [
    { property: 'og:site_name', content: site.name },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${site.url}${site.ogImage}` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.name,
        url: site.url,
        email: company.email,
        address: company.address,
        description: site.description
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white text-ink antialiased">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
