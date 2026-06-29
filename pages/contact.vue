<script setup lang="ts">
import { company } from '~/data/company'

useSeoMeta({
  title: 'Contact WenChuang | Custom Cosmetic Metal Packaging Manufacturer',
  description: 'Submit an RFQ for perfume sprayers, perfume caps, compact cases, lipstick shells, and custom metal cosmetic packaging components.'
})
</script>

<template>
  <section class="bg-mist py-16 md:py-24">
    <div class="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p class="eyebrow">Contact / RFQ</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Send your design or request a quote.
        </h1>
        <p class="mt-6 text-lg leading-8 text-graphite/75">
          Share your product type, material, finish, estimated quantity, and project details. Your RFQ will be sent directly to our team by email.
        </p>
        <div class="mt-8 rounded-lg border border-platinum bg-white p-6">
          <h2 class="text-lg font-semibold text-ink">{{ company.name }}</h2>
          <dl class="mt-4 grid gap-4 text-sm leading-6">
            <div>
              <dt class="font-semibold text-ink">Email</dt>
              <dd>
                <a :href="`mailto:${company.email}`" class="break-all text-graphite/75 hover:text-champagne">
                  {{ company.email }}
                </a>
              </dd>
            </div>
            <div>
              <dt class="font-semibold text-ink">Address</dt>
              <dd class="text-graphite/75">{{ company.address }}</dd>
            </div>
          </dl>
        </div>
        <div class="mt-8 rounded-lg border border-platinum bg-white p-6">
          <h2 class="text-lg font-semibold text-ink">Helpful RFQ details</h2>
          <ul class="mt-4 space-y-3 text-sm leading-6 text-graphite/75">
            <li>Product drawings or reference samples</li>
            <li>Target material and surface finish</li>
            <li>Application and assembly requirements</li>
            <li>Expected project timeline or sample needs</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
