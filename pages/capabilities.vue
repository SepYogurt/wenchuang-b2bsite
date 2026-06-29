<script setup lang="ts">
useSeoMeta({
  title: 'Manufacturing Capabilities | Metal Cosmetic Packaging Factory',
  description: 'Explore manufacturing capabilities including product development, mold design, metal stamping, die casting, CNC machining, surface treatment, assembly, quality inspection, and export packaging.'
})

const capabilities = [
  ['Product development', 'Support for early-stage structure review, sample planning, and manufacturability feedback.'],
  ['Mold design and development', 'Tooling support for custom metal shells, caps, sleeves, and decorative packaging components.'],
  ['Metal stamping', 'Stable forming process for thin metal parts used in compact cases and decorative cosmetic components.'],
  ['Die casting', 'Production support for zinc alloy parts and components that require shaped volume and premium weight.'],
  ['CNC machining', 'Precision machining for structure details, fit requirements, and small-batch development needs.'],
  ['Surface treatment', 'Finishing process coordination for texture, gloss, color, and logo requirements.'],
  ['Assembly', 'Component assembly checks for cosmetic packaging parts before final packing.'],
  ['Quality inspection', 'Dimensional, visual, surface, and final inspection checkpoints for production consistency.'],
  ['Export packaging', 'Packaging support prepared for overseas shipment and long-distance handling.']
]
</script>

<template>
  <section class="bg-ink py-16 text-white md:py-24">
    <div class="container-shell">
      <p class="eyebrow">Capabilities</p>
      <h1 class="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
        Manufacturing capability for custom cosmetic metal packaging components.
      </h1>
      <p class="mt-6 max-w-3xl text-lg leading-8 text-white/70">
        From product development to export packaging, our process is organized around practical manufacturing support, appearance control, and stable B2B delivery.
      </p>
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CapabilityCard
        v-for="[title, description] in capabilities"
        :key="title"
        :title="title"
        :description="description"
      />
    </div>
  </section>

  <CTASection title="Discuss your component structure and production route" />
</template>
