<script setup lang="ts">
import { navigation } from '~/data/site'
import { company } from '~/data/company'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-platinum/80 bg-white/92 backdrop-blur">
    <div class="container-shell flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3" aria-label="Go to homepage" @click="closeMenu">
        <span class="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-bold text-champagne">WC</span>
        <span class="leading-tight">
          <span class="block text-sm font-semibold uppercase tracking-[0.16em] text-ink">{{ company.name }}</span>
          <span class="block text-xs text-graphite/65">Metal Cosmetic Packaging</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-graphite transition hover:text-champagne"
          active-class="text-champagne"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-platinum text-ink lg:hidden"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span class="text-xl leading-none">{{ isOpen ? 'x' : '+' }}</span>
      </button>
    </div>

    <nav v-if="isOpen" class="border-t border-platinum bg-white lg:hidden" aria-label="Mobile navigation">
      <div class="container-shell grid py-4">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="py-3 text-sm font-medium text-graphite"
          active-class="text-champagne"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
