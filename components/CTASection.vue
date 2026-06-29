<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  buttonLabel?: string
  to?: string
}>(), {
  title: 'Ready to Develop Your Custom Cosmetic Packaging?',
  description: 'Send us drawings, samples, or project requirements. Our team will review the details and support your next packaging development.',
  buttonLabel: 'Send Your Design / Request a Quote',
  to: '/contact'
})
</script>

<template>
  <section class="bg-ink py-16 text-white md:py-20">
    <div class="container-shell">
      <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p class="eyebrow">RFQ Support</p>
          <h2 class="mt-3 text-3xl font-semibold md:text-4xl">{{ title }}</h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-white/70">{{ description }}</p>
        </div>
        <NuxtLink
          :to="to"
          class="inline-flex min-h-12 items-center justify-center rounded-md bg-champagne px-6 text-sm font-semibold text-ink transition hover:bg-white"
        >
          {{ buttonLabel }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
