<template>
  <section class="relative isolate overflow-hidden bg-ink text-white">
    <img
      src="/images/concepts/hero-metal-packaging.jpg"
      alt="Concept visualization of unbranded metal cosmetic packaging components"
      class="absolute inset-0 h-full w-full object-cover object-[62%_center]"
      fetchpriority="high"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/8" />
    <div class="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/20" />
    <div class="container-shell relative flex min-h-[72vh] items-center py-20 md:py-24">
      <div class="max-w-2xl">
        <p class="eyebrow">Luxury Cosmetic Packaging Manufacturing</p>
        <h1 class="mt-5 text-4xl font-semibold leading-tight tracking-normal md:text-5xl lg:text-6xl">
          Premium Metal Packaging Solutions for Global Cosmetic Brands
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/72">
          Manufacturer of perfume sprayers, compact cases, caps, and custom metal components for beauty packaging.
        </p>
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex min-h-12 items-center justify-center rounded-md bg-champagne px-6 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Request a Quote
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 px-6 text-sm font-semibold text-white transition hover:border-champagne hover:text-champagne"
          >
            View Products
          </NuxtLink>
        </div>
      </div>
      <span class="absolute bottom-5 right-0 rounded-full border border-white/25 bg-ink/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur">
        Concept Visualization
      </span>
    </div>
  </section>
</template>
