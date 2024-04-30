<template>
  <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
    <div class="grid gap-4 gap-y-2 text-sm">
      <div class="text-gray-600">
        <p class="font-medium text-lg">Select resume that you want to edit or create new one.</p>

        <div class="inline-flex items-end mt-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="createNewForm"
          >
            Create New Resume
          </button>
          <p class="p-2">or</p>

          <select
            class="px-4 outline-none text-gray-800 h-10 bg-gray-50 border border-gray-200 rounded"
            v-model="selectedResume"
          >
            <option v-for="(resume, index) in persistStore" :key="index" :value="resume.key">
              {{ index + 1 }}. {{ resume.form.firstName }} {{ resume.form.lastName }}
            </option>
          </select>

          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            @click="loadResumeByKey(selectedResume)"
            v-if="selectedResume"
          >
            Load Resume
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'
import { ref } from 'vue'

const { createNewForm, persistStore, loadResumeByKey } = useResumeForm()
const selectedResume = ref()
</script>
