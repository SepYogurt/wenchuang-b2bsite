<script setup lang="ts">
useSeoMeta({
  title: 'About WenChuang | Cosmetic Metal Packaging Manufacturer',
  description: 'Learn about our OEM and ODM manufacturing support for perfume sprayers, caps, compact cases, lipstick shells, and custom metal cosmetic packaging components.'
})

const sections = [
  {
    title: 'Company Overview',
    description: 'We are a manufacturer focused on metal packaging components for cosmetic and beauty packaging projects, serving overseas clients with project-based development and production support.'
  },
  {
    title: 'What We Manufacture',
    description: 'Our products include perfume sprayers, perfume caps, compact cases, lipstick shells, and custom metal cosmetic components for fragrance and color cosmetic packaging.'
  },
  {
    title: 'Who We Serve',
    description: 'We work with beauty brands, packaging companies, trading companies, and procurement teams that need dependable metal component manufacturing.'
  },
  {
    title: 'Why Choose Us',
    description: 'We support OEM and ODM projects from sample development and tooling to batch production, surface treatment, assembly, inspection, and export packaging.'
  },
  {
    title: 'Export Experience',
    description: 'Our service model is built for international B2B communication, stable delivery, consistent appearance requirements, and long-term cooperation.'
  }
]
</script>

<template>
  <section class="bg-mist py-16 md:py-24">
    <div class="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p class="eyebrow">About Us</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Manufacturing refined metal components for cosmetic packaging.
        </h1>
        <p class="mt-6 text-lg leading-8 text-graphite/75">
          We help global beauty packaging clients develop premium metal parts with reliable production, surface finishing, quality inspection, and export packaging support.
        </p>
      </div>
      <VisualPlaceholder label="Factory capability photo placeholder" tone="from-ink via-zinc-300 to-champagne" />
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-6 md:grid-cols-2">
      <CapabilityCard v-for="section in sections" :key="section.title" :title="section.title" :description="section.description" />
    </div>
  </section>

  <CTASection
    title="Looking for an OEM or ODM metal packaging partner?"
    description="Share your product drawings, samples, or packaging concept, and we will help review the production and finishing possibilities."
  />
</template>
