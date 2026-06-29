<script setup lang="ts">
useSeoMeta({
  title: 'Quality Control | Reliable Cosmetic Metal Packaging Supplier',
  description: 'Quality control flow for metal cosmetic packaging components, from incoming material inspection to final inspection and export packaging check.'
})

const steps = [
  ['Incoming material inspection', 'Review material condition and basic requirements before production starts.'],
  ['Dimensional inspection', 'Check dimensions and fitting points against drawings or approved samples.'],
  ['In-process production inspection', 'Monitor production stability during stamping, casting, machining, and forming.'],
  ['Surface finish inspection', 'Review color, gloss, texture, logo details, and visible appearance consistency.'],
  ['Assembly inspection', 'Check component fit, structure, and practical assembly requirements.'],
  ['Final inspection before shipment', 'Confirm finished goods before packing and shipment preparation.'],
  ['Export packaging check', 'Review packing method for overseas transportation and handling conditions.']
]
</script>

<template>
  <section class="bg-ink py-16 text-white md:py-24">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div>
        <p class="eyebrow">Quality Control</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Reliable inspection flow for stable long-term overseas cooperation.
        </h1>
        <p class="mt-6 text-lg leading-8 text-white/70">
          Cosmetic packaging requires consistent appearance and practical reliability. Our quality workflow supports repeatable production and export-ready delivery.
        </p>
      </div>
      <figure class="relative overflow-hidden rounded-lg border border-white/15">
        <img
          src="/images/concepts/quality-inspection.jpg"
          alt="Concept visualization of dimensional inspection for metal cosmetic packaging"
          class="aspect-[16/10] w-full object-cover"
        >
        <figcaption class="absolute bottom-4 right-4 rounded-full border border-white/25 bg-ink/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur">
          Concept Visualization
        </figcaption>
      </figure>
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionTitle
        eyebrow="Inspection Process"
        title="From material to final export packaging"
        description="Clear inspection checkpoints help align appearance, dimensions, assembly, and export packaging requirements throughout production."
      />
      <ol class="grid gap-6">
        <ProcessStep
          v-for="([title, description], index) in steps"
          :key="title"
          :number="String(index + 1).padStart(2, '0')"
          :title="title"
          :description="description"
        />
      </ol>
    </div>
  </section>

  <CTASection title="Build a stable supply plan for your next beauty packaging project" />
</template>
