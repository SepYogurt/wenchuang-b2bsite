<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description?: string
}>()
</script>

<template>
  <li class="relative flex gap-4">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-champagne bg-white text-sm font-semibold text-ink">
      {{ number }}
    </div>
    <div>
      <h3 class="text-base font-semibold text-ink">{{ title }}</h3>
      <p v-if="description" class="mt-2 text-sm leading-6 text-graphite/75">{{ description }}</p>
    </div>
  </li>
</template>
