<script setup lang="ts">
import { getProductBySlug } from '~/data/products'
import { company } from '~/data/company'

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
  description: product.shortDescription,
  ogTitle: `${product.name} | WenChuang`,
  ogDescription: product.description,
  ogImage: product.image
})

const specificationRows = [
  ['MOQ', product.moq],
  ['Production Lead Time', product.leadTime],
  ['Sample Lead Time', product.sampleLeadTime],
  ['Size / Structure Range', product.sizeRange],
  ['Optional Materials', product.materials.join(', ')],
  ['Surface Finishes', product.surfaceFinishes.join(', ')]
]

const quoteLink = `/contact?product=${encodeURIComponent(product.slug)}`

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: company.name
        },
        manufacturer: {
          '@type': 'Organization',
          name: company.name,
          email: company.email,
          address: company.address
        }
      })
    }
  ]
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
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink
            :to="quoteLink"
            class="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white transition hover:bg-champagne hover:text-ink"
          >
            Request Quote
          </NuxtLink>
          <NuxtLink
            to="/surface-finishing"
            class="inline-flex min-h-12 items-center justify-center rounded-md border border-platinum bg-white px-6 text-sm font-semibold text-ink transition hover:border-champagne hover:text-champagne"
          >
            View Finishes
          </NuxtLink>
        </div>
      </div>
      <VisualPlaceholder :label="product.name" :image="product.image" :tone="product.imageTone" concept />
    </div>
  </section>

  <section class="py-16 md:py-24">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <SectionTitle
          eyebrow="Specifications"
          title="RFQ-ready product information"
          description="Use these details as a starting point. Final dimensions, tooling, material, and finish are confirmed after reviewing your drawing, sample, or target packaging."
        />
        <div class="mt-8 overflow-hidden rounded-lg border border-platinum bg-white">
          <dl>
            <div
              v-for="[label, value] in specificationRows"
              :key="label"
              class="grid gap-2 border-b border-platinum px-5 py-4 last:border-b-0 sm:grid-cols-[180px_1fr]"
            >
              <dt class="text-sm font-semibold text-ink">{{ label }}</dt>
              <dd class="text-sm leading-6 text-graphite/75">{{ value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="grid gap-6">
        <CapabilityCard title="Applications" :description="product.applications.join(', ')" />
        <CapabilityCard title="Compatible Components" :description="product.compatibleComponents.join(', ')" />
        <CapabilityCard title="Customization Options" :description="product.customizationOptions.join(', ')" />
        <CapabilityCard title="Best For" :description="product.buyerTypes.join(', ')" />
        <CapabilityCard title="Production Capabilities" :description="product.capabilities.join(', ')" />
        <CapabilityCard title="Project Support" description="We can review drawings, samples, surface expectations, assembly structure, and export packaging requirements during the RFQ stage." />
      </div>
    </div>
  </section>

  <CTASection :title="`Request a quote for ${product.name}`" :to="quoteLink" />
</template>
