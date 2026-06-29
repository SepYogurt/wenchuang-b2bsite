<script setup lang="ts">
import { products } from '~/data/products'

useSeoMeta({
  title: 'Products | Perfume Sprayers, Caps, Compact Cases, Lipstick Shells',
  description: 'Browse metal cosmetic packaging product categories including perfume sprayers, perfume caps, compact cases, lipstick shells, and custom metal components.'
})
</script>

<template>
  <section class="bg-mist py-16 md:py-24">
    <div class="container-shell">
      <SectionTitle
        eyebrow="Products"
        title="Metal components for fragrance and color cosmetics"
        description="Explore our current manufacturing scope for perfume, compact, lipstick, and custom beauty packaging projects."
        align="center"
      />
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProductCard v-for="product in products" :key="product.slug" :product="product" />
    </div>
  </section>
</template>
