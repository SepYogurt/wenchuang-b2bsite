<script setup lang="ts">
import { manufacturingCapabilities, qualitySteps, surfaceFinishes } from '~/data/site'
import { products } from '~/data/products'

useSeoMeta({
  title: 'WenChuang | Premium Cosmetic Metal Packaging Manufacturer',
  description: 'Manufacturer of perfume sprayers, compact cases, caps, lipstick shells, and custom metal components for global cosmetic packaging brands.',
  keywords: 'cosmetic metal packaging manufacturer, perfume sprayer manufacturer, perfume cap supplier, compact case manufacturer, metal cosmetic packaging, custom beauty packaging components, luxury cosmetic packaging supplier'
})

const advantages = [
  {
    title: 'Luxury Packaging Project Experience',
    description: 'Support for premium cosmetic packaging projects with refined appearance expectations and export communication needs.'
  },
  {
    title: 'Custom Metal Component Manufacturing',
    description: 'OEM and ODM support from sample development to tooling, batch production, assembly, and export packaging.'
  },
  {
    title: 'Advanced Surface Finishing',
    description: 'Multiple finishing options for color, gloss, texture, logo details, and consistent visual quality.'
  },
  {
    title: 'Reliable Export Supply',
    description: 'A manufacturing workflow built for stable delivery, practical quality control, and long-term overseas cooperation.'
  }
]
</script>

<template>
  <HeroSection />

  <section class="py-16 md:py-24">
    <div class="container-shell">
      <SectionTitle
        eyebrow="Core Advantages"
        title="Built for premium beauty packaging projects"
        description="We combine metal manufacturing, appearance finishing, and export packaging support for global cosmetic brands and packaging partners."
      />
      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <AdvantageCard
          v-for="(advantage, index) in advantages"
          :key="advantage.title"
          :index="String(index + 1).padStart(2, '0')"
          :title="advantage.title"
          :description="advantage.description"
        />
      </div>
    </div>
  </section>

  <section class="bg-mist py-16 md:py-24">
    <div class="container-shell">
      <SectionTitle
        eyebrow="Product Categories"
        title="Metal packaging components for fragrance and color cosmetics"
        description="Explore our current product scope through original concept visualizations. Final specifications, structures, and finishes are developed around each project."
      />
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard v-for="product in products" :key="product.slug" :product="product" />
      </div>
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionTitle
        eyebrow="Manufacturing Capabilities"
        title="From tooling to export packaging"
        description="Our workflow supports custom metal cosmetic components across development, production, finishing, assembly, and inspection."
      />
      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="capability in manufacturingCapabilities"
          :key="capability"
          class="rounded-md border border-platinum px-4 py-3 text-sm font-medium text-graphite"
        >
          {{ capability }}
        </div>
      </div>
    </div>
  </section>

  <section class="bg-ink py-16 text-white md:py-24">
    <div class="container-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div>
        <SectionTitle
          eyebrow="Surface Finishing"
          title="Premium appearance, color consistency, and brand-ready details"
          description="We help beauty brands achieve refined metal texture through practical finishing options and repeatable inspection standards."
          theme="dark"
        />
      </div>
      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="finish in surfaceFinishes"
          :key="finish"
          class="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/82"
        >
          {{ finish }}
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell">
      <SectionTitle
        eyebrow="Quality Control"
        title="Inspection flow for stable overseas cooperation"
        description="Each project can be reviewed through practical checkpoints from incoming material to export packaging."
        align="center"
      />
      <ol class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProcessStep
          v-for="(step, index) in qualitySteps"
          :key="step"
          :number="String(index + 1).padStart(2, '0')"
          :title="step"
        />
      </ol>
    </div>
  </section>

  <CTASection />
</template>
