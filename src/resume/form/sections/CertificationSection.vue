<template>
  <div class="md:col-span-8">
    <p class="font-medium text-sm">Certifications</p>
    <div
      class="flex gap-4 mb-2"
      v-for="(certification, index) in resumeForm.certifications"
      :key="index"
    >
      <input
        type="text"
        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        v-model="certification.name"
        required
      />
      <input
        type="date"
        class="h-10 border mt-1 rounded px-4 w-2/6 bg-gray-50"
        v-model="certification.date"
        required
      />
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded w-1/6"
        @click.prevent="resumeForm.certifications.splice(index, 1)"
      >
        Remove
      </button>
    </div>

    <div class="flex gap-2 mt-2 min-h-10">
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded"
        @click.prevent="addNewCertification"
      >
        Add new item
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'

const { resumeForm } = useResumeForm()

function addNewCertification() {
  resumeForm.certifications.push({ name: '', date: '' })
}
</script>
