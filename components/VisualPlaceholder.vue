<script setup lang="ts">
defineProps<{
  label: string
  image?: string
  tone?: string
  concept?: boolean
}>()
</script>

<template>
  <div class="relative overflow-hidden rounded-lg border border-white/20 bg-ink shadow-soft">
    <img
      v-if="image"
      :src="image"
      :alt="label"
      class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
    >
    <template v-else>
      <div :class="['metal-surface absolute inset-0 bg-gradient-to-br opacity-90', tone]" />
      <div class="absolute inset-0 fine-grid opacity-40" />
      <div class="absolute inset-x-8 top-8 h-px bg-white/55" />
    </template>
    <div class="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
    <div class="relative flex aspect-[4/3] items-end justify-between gap-4 p-5">
      <p class="max-w-[220px] text-sm font-semibold uppercase tracking-[0.16em] text-white drop-shadow">
        {{ label }}
      </p>
      <span
        v-if="concept"
        class="shrink-0 rounded-full border border-white/30 bg-ink/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur"
      >
        Concept
      </span>
    </div>
  </div>
</template>
