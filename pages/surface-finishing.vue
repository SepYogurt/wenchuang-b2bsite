<script setup lang="ts">
useSeoMeta({
  title: 'Surface Finishing | Premium Metal Cosmetic Packaging',
  description: 'Surface finishing capabilities for cosmetic metal packaging including anodizing, electroplating, polishing, brushing, sandblasting, laser engraving, logo printing, and color matching.'
})

const finishes = [
  ['Anodizing', 'Stable color and protective finish options for aluminum cosmetic packaging components.'],
  ['Electroplating', 'Metallic appearance options for premium caps, collars, shells, and decorative parts.'],
  ['Polishing', 'Gloss control and refined shine for luxury packaging appearance.'],
  ['Brushing', 'Linear texture for a clean, premium, and tactile metal surface.'],
  ['Sandblasting', 'Soft matte texture suitable for understated cosmetic packaging designs.'],
  ['Laser engraving', 'Durable marking and precise logo details for brand-ready components.'],
  ['Logo printing', 'Visual branding support for caps, shells, and decorative metal parts.'],
  ['Color matching', 'Finish sample review for consistent color direction across batches.']
]
</script>

<template>
  <section class="bg-mist py-16 md:py-24">
    <div class="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p class="eyebrow">Surface Finishing</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Premium visual appearance for metal beauty packaging.
        </h1>
        <p class="mt-6 text-lg leading-8 text-graphite/75">
          We help beauty brands achieve premium visual appearance, precise color matching, and consistent surface quality for metal packaging components.
        </p>
      </div>
      <VisualPlaceholder label="Surface finish sample placeholder" tone="from-zinc-100 via-champagne to-graphite" />
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <CapabilityCard
        v-for="[title, description] in finishes"
        :key="title"
        :title="title"
        :description="description"
      />
    </div>
  </section>

  <CTASection title="Need a specific color, texture, or logo finish?" />
</template>
