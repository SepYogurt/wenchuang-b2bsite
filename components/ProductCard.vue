<script setup lang="ts">
import type { Product } from '~/data/products'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article class="group overflow-hidden rounded-lg border border-platinum bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
    <VisualPlaceholder :label="product.name" :image="product.image" :tone="product.imageTone" concept />
    <div class="p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
        {{ product.category }}
      </p>
      <h3 class="mt-3 text-xl font-semibold text-ink">{{ product.name }}</h3>
      <p class="mt-3 text-sm leading-6 text-graphite/75">{{ product.shortDescription }}</p>
      <NuxtLink
        :to="`/products/${product.slug}`"
        class="mt-5 inline-flex items-center text-sm font-semibold text-ink transition group-hover:text-champagne"
      >
        View Details
        <span aria-hidden="true" class="ml-2">-&gt;</span>
      </NuxtLink>
    </div>
  </article>
</template>
