<script setup lang="ts">
import { getProductBySlug } from '~/data/products'

const route = useRoute()
const slug = String(route.params.slug)
const product = getProductBySlug(slug)

if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

useSeoMeta({
  title: `${product.name} | Custom Metal Cosmetic Packaging Components`,
  description: product.shortDescription
})
</script>

<template>
  <section class="bg-mist py-16 md:py-24">
    <div class="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p class="eyebrow">{{ product.category }}</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">{{ product.name }}</h1>
        <p class="mt-6 text-lg leading-8 text-graphite/75">{{ product.description }}</p>
        <p class="mt-5 rounded-lg border border-platinum bg-white p-4 text-sm leading-6 text-graphite/75">
          For MOQ, lead time, and sample details, please contact us with your design or project requirements.
        </p>
      </div>
      <VisualPlaceholder :label="product.name" :image="product.image" :tone="product.imageTone" concept />
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-6 lg:grid-cols-2">
      <CapabilityCard title="Applications" :description="product.applications.join(', ')" />
      <CapabilityCard title="Optional Materials" :description="product.materials.join(', ')" />
      <CapabilityCard title="Surface Finishes" :description="product.surfaceFinishes.join(', ')" />
      <CapabilityCard title="Customization Options" :description="product.customizationOptions.join(', ')" />
      <CapabilityCard title="Production Capabilities" :description="product.capabilities.join(', ')" />
      <CapabilityCard title="Project Support" description="We can review drawings, samples, surface expectations, assembly structure, and export packaging requirements during the RFQ stage." />
    </div>
  </section>

  <CTASection :title="`Request a quote for ${product.name}`" />
</template>
