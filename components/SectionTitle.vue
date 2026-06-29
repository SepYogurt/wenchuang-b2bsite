<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}>()
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 :class="['mt-3 text-3xl font-semibold tracking-normal md:text-4xl', theme === 'dark' ? 'text-white' : 'text-ink']">
      {{ title }}
    </h2>
    <p
      v-if="description"
      :class="['mt-4 text-base leading-7 md:text-lg', theme === 'dark' ? 'text-white/70' : 'text-graphite/75']"
    >
      {{ description }}
    </p>
  </div>
</template>
