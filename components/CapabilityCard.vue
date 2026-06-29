<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article class="rounded-lg border border-platinum bg-mist p-6">
    <div class="mb-5 h-1 w-12 rounded-full bg-champagne" />
    <h3 class="text-lg font-semibold text-ink">{{ title }}</h3>
    <p class="mt-3 text-sm leading-6 text-graphite/75">{{ description }}</p>
  </article>
</template>
