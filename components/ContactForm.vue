<script setup lang="ts">
const form = reactive({
  name: '',
  company: '',
  email: '',
  country: '',
  productType: '',
  material: '',
  surfaceFinish: '',
  quantity: '',
  message: '',
  website: ''
})

const isSubmitting = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const statusMessage = ref('')

const productTypes = [
  'Perfume Sprayers',
  'Perfume Caps',
  'Compact Cases',
  'Lipstick Shells',
  'Custom Metal Cosmetic Components'
]

const resetForm = () => {
  Object.assign(form, {
    name: '',
    company: '',
    email: '',
    country: '',
    productType: '',
    material: '',
    surfaceFinish: '',
    quantity: '',
    message: '',
    website: ''
  })
}

const submitForm = async () => {
  isSubmitting.value = true
  status.value = 'idle'
  statusMessage.value = ''

  try {
    await $fetch('/api/rfq', {
      method: 'POST',
      body: form
    })

    status.value = 'success'
    statusMessage.value = 'Thank you. Your request has been sent. We will contact you soon.'
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
        Estimated Quantity
        <input v-model="form.quantity" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" type="text">
      </label>
    </div>

    <label class="mt-5 grid gap-2 text-sm font-medium text-ink">
      Message
      <textarea v-model="form.message" required rows="5" class="rounded-md border border-platinum px-4 py-3 outline-none transition focus:border-champagne" placeholder="Tell us about drawings, target finish, application, or sample requirements." />
    </label>

    <label class="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      Website
      <input v-model="form.website" type="text" tabindex="-1" autocomplete="off">
    </label>

    <div class="mt-5 rounded-lg border border-dashed border-platinum bg-mist p-5">
      <p class="text-sm font-semibold text-ink">File upload placeholder</p>
      <p class="mt-2 text-sm text-graphite/70">
        UI placeholder for drawings, photos, or reference files. Real upload can be connected later.
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
