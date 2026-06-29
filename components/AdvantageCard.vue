<script setup lang="ts">
defineProps<{
  index: string
  title: string
  description: string
}>()
</script>

<template>
  <article class="rounded-lg border border-platinum bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
    <span class="text-sm font-semibold text-champagne">{{ index }}</span>
    <h3 class="mt-4 text-xl font-semibold text-ink">{{ title }}</h3>
    <p class="mt-3 text-sm leading-6 text-graphite/75">{{ description }}</p>
  </article>
</template>
