<script setup lang="ts">
import { navigation } from '~/data/site'
import { products } from '~/data/products'
import { company } from '~/data/company'
</script>

<template>
  <footer class="border-t border-platinum bg-mist">
    <div class="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div>
        <h2 class="text-lg font-semibold text-ink">{{ company.name }} Metal Cosmetic Packaging</h2>
        <p class="mt-4 text-sm leading-6 text-graphite/75">
          Manufacturer of perfume sprayers, caps, compact cases, lipstick shells, and custom metal cosmetic packaging components for global beauty packaging clients.
        </p>
      </div>
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Products</h3>
        <ul class="mt-4 space-y-3">
          <li v-for="product in products" :key="product.slug">
            <NuxtLink :to="`/products/${product.slug}`" class="text-sm text-graphite/75 hover:text-champagne">
              {{ product.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Quick Links</h3>
        <ul class="mt-4 space-y-3">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink :to="item.to" class="text-sm text-graphite/75 hover:text-champagne">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Contact</h3>
        <address class="mt-4 text-sm not-italic leading-6 text-graphite/75">
          <a :href="`mailto:${company.email}`" class="break-all hover:text-champagne">
            {{ company.email }}
          </a>
          <span class="mt-2 block">{{ company.address }}</span>
        </address>
      </div>
    </div>
    <div class="border-t border-platinum py-5">
      <div class="container-shell text-sm text-graphite/65">
        Copyright {{ new Date().getFullYear() }} {{ company.name }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
