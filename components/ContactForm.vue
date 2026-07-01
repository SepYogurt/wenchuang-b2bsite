<script setup lang="ts">
import { getProductBySlug, products } from '~/data/products'

const route = useRoute()

const form = reactive({
  name: '',
  company: '',
  email: '',
  country: '',
  productType: '',
  sourceProductSlug: '',
  material: '',
  surfaceFinish: '',
  dimensions: '',
  quantity: '',
  targetMarket: '',
  timeline: '',
  attachmentLink: '',
  message: '',
  website: ''
})

const isSubmitting = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const statusMessage = ref('')

const productTypes = products.map((product) => product.name)

const applyProductFromQuery = () => {
  const productSlug = typeof route.query.product === 'string' ? route.query.product : ''
  const product = getProductBySlug(productSlug)

  if (!product) return

  form.productType = product.name
  form.sourceProductSlug = product.slug
}

const resetForm = () => {
  Object.assign(form, {
    name: '',
    company: '',
    email: '',
    country: '',
    productType: '',
    sourceProductSlug: '',
    material: '',
    surfaceFinish: '',
    dimensions: '',
    quantity: '',
    targetMarket: '',
    timeline: '',
    attachmentLink: '',
    message: '',
    website: ''
  })
  applyProductFromQuery()
}

watch(() => route.query.product, applyProductFromQuery, { immediate: true })

const submitForm = async () => {
  isSubmitting.value = true
  status.value = 'idle'
  statusMessage.value = ''

  try {
    const response = await $fetch<{ success: boolean, id?: string }>('/api/rfq', {
      method: 'POST',
      body: form
    })

    status.value = 'success'
    statusMessage.value = response.id
      ? `Thank you. Your request has been sent. RFQ reference: ${response.id}`
      : 'Thank you. Your request has been sent. We will contact you soon.'
    resetForm()
  } catch (error: any) {
    status.value = 'error'
    statusMessage.value = error?.data?.statusMessage || 'We could not send your request. Please email us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form class="rounded-lg border border-platinum bg-white p-6 shadow-soft md:p-8" @submit.prevent="submitForm">
    <div class="grid gap-5 md:grid-cols-2">
      <label class="grid gap-2 text-sm font-medium text-ink">
        Name
        <input v-model="form.name" required class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Company
        <input v-model="form.company" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Email
        <input v-model="form.email" required class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="email">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Country
        <input v-model="form.country" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Product Type
        <select v-model="form.productType" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne">
          <option value="">Select product type</option>
          <option v-for="type in productTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Material
        <input v-model="form.material" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text" placeholder="Aluminum, zinc alloy, stainless steel...">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Surface Finish
        <input v-model="form.surfaceFinish" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text" placeholder="Anodizing, plating, brushing...">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Size / Dimensions
        <input v-model="form.dimensions" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text" placeholder="Diameter, height, drawing size...">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Estimated Quantity
        <input v-model="form.quantity" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Target Market
        <input v-model="form.targetMarket" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text" placeholder="US, EU, Middle East, Asia...">
      </label>
      <label class="grid gap-2 text-sm font-medium text-ink">
        Project Timeline
        <input v-model="form.timeline" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text" placeholder="Sample needed by..., launch date...">
      </label>
    </div>

    <label class="mt-5 grid gap-2 text-sm font-medium text-ink">
      Drawing / Reference Link
      <input v-model="form.attachmentLink" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="url" placeholder="Paste a shared file link if available">
    </label>

    <label class="mt-5 grid gap-2 text-sm font-medium text-ink">
      Message
      <textarea v-model="form.message" required rows="5" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" placeholder="Tell us about drawings, target finish, application, or sample requirements." />
    </label>

    <label class="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      Website
      <input v-model="form.website" type="text" tabindex="-1" autocomplete="off">
    </label>

    <div class="mt-5 rounded-lg border border-dashed border-platinum bg-mist p-5">
      <p class="text-sm font-semibold text-ink">Drawings and reference files</p>
      <p class="mt-2 text-sm text-graphite/70">
        You can paste a shared file link above. Direct upload can be connected later when a file storage service is added.
      </p>
    </div>

    <button
      class="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white transition hover:bg-champagne hover:text-ink disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      type="submit"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'Sending...' : 'Submit RFQ' }}
    </button>

    <p
      v-if="status !== 'idle'"
      class="mt-4 rounded-md px-4 py-3 text-sm"
      :class="status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'"
      role="status"
      aria-live="polite"
    >
      {{ statusMessage }}
    </p>
  </form>
</template>
