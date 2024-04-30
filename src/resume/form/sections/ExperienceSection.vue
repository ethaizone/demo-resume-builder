<template>
  <div class="md:col-span-8">
    <p class="font-medium text-sm">Experiences</p>
    <div class="flex gap-2 mt-2 min-h-10">
      <select
        class="px-4 outline-none text-gray-800 h-10 bg-gray-50 border border-gray-200 rounded"
        v-model="selectedIndex.expeience"
        v-if="resumeForm.experiences[selectedIndex.expeience]"
      >
        <option v-for="(exp, index) in resumeForm.experiences" :key="index" :value="index">
          {{ index + 1 }}. {{ exp.title }}
        </option>
      </select>
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded"
        @click.prevent="addNewExperience"
      >
        Add
      </button>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded"
        @click.prevent="removeExperience"
        v-if="resumeForm.experiences[selectedIndex.expeience]"
      >
        Remove
      </button>
    </div>

    <fieldset
      class="border border-gray-300 rounded p-2 mt-3"
      v-if="resumeForm.experiences[selectedIndex.expeience]"
    >
      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8">
        <div class="md:col-span-4">
          <label for="exp-title">Title</label>
          <input
            type="text"
            name="exp-title"
            id="exp-title"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.experiences[selectedIndex.expeience].title"
            required
          />
        </div>
        <div class="md:col-span-4">
          <label for="exp-company">Company</label>
          <input
            type="text"
            name="exp-company"
            id="exp-company"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.experiences[selectedIndex.expeience].company"
          />
        </div>
        <div class="md:col-span-4">
          <label for="exp-location">Location</label>
          <input
            type="text"
            name="exp-location"
            id="exp-location"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.experiences[selectedIndex.expeience].location"
          />
        </div>
        <div class="md:col-span-8">
          <label for="exp-description">Description</label>
          <input
            type="text"
            name="exp-description"
            id="exp-description"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.experiences[selectedIndex.expeience].description"
          />
        </div>
        <div class="md:col-span-4">
          <label for="exp-startDate">Start Date</label>
          <input
            type="date"
            name="exp-startDate"
            id="exp-startDate"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.experiences[selectedIndex.expeience].startDate"
          />
        </div>
        <div class="md:col-span-4">
          <label for="exp-endDate">End Date</label>
          <input
            type="date"
            name="exp-endDate"
            id="exp-endDate"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.experiences[selectedIndex.expeience].endDate"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'

const { resumeForm, selectedIndex, addNewExperience, removeExperience } = useResumeForm()
</script>
