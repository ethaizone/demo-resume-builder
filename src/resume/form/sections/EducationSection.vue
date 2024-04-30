<template>
  <div class="md:col-span-8">
    <p class="font-medium text-sm">Educations</p>
    <div class="flex gap-2 mt-2 min-h-10">
      <select
        class="px-4 outline-none text-gray-800 h-10 bg-gray-50 border border-gray-200 rounded"
        v-model="selectedIndex.education"
        v-if="resumeForm.education[selectedIndex.education]"
      >
        <option v-for="(edu, index) in resumeForm.education" :key="index" :value="index">
          {{ index + 1 }}. {{ edu.degree }} / {{ edu.major }}
        </option>
      </select>
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded"
        @click.prevent="addNewEducation"
      >
        Add
      </button>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded"
        @click.prevent="removeEducation"
        v-if="resumeForm.education[selectedIndex.education]"
      >
        Remove
      </button>
    </div>

    <fieldset
      class="border border-gray-300 rounded p-2 mt-3"
      v-if="resumeForm.education[selectedIndex.education]"
    >
      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8">
        <div class="md:col-span-4">
          <label for="edu-degree">Degree</label>
          <input
            type="text"
            name="edu-degree"
            id="edu-degree"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.education[selectedIndex.education].degree"
            required
          />
        </div>
        <div class="md:col-span-4">
          <label for="edu-major">Major</label>
          <input
            type="text"
            name="edu-major"
            id="edu-major"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.education[selectedIndex.education].major"
          />
        </div>
        <div class="md:col-span-4">
          <label for="edu-location">Institute</label>
          <div class="w-full mt-1 flex gap-2">
            <select
              class="px-4 outline-none text-gray-800 h-10 bg-gray-50 border border-gray-200 rounded"
              v-model="instituteType"
            >
              <option value="university">University</option>
              <option value="school">School</option>
            </select>
            <input
              type="text"
              name="edu-institute"
              id="edu-institute"
              class="h-10 border rounded px-4 bg-gray-50 flex-auto"
              v-model="institute"
            />
          </div>
        </div>
        <div class="md:col-span-4">
          <label for="edu-location">Location</label>
          <input
            type="text"
            name="edu-location"
            id="edu-location"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.education[selectedIndex.education].location"
          />
        </div>
        <div class="md:col-span-8">
          <label for="edu-description">Description</label>
          <input
            type="text"
            name="edu-description"
            id="edu-description"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.education[selectedIndex.education].description"
          />
        </div>
        <div class="md:col-span-4">
          <label for="edu-startDate">Start Date</label>
          <input
            type="date"
            name="edu-startDate"
            id="edu-startDate"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.education[selectedIndex.education].startDate"
          />
        </div>
        <div class="md:col-span-4">
          <label for="edu-endDate">End Date</label>
          <input
            type="date"
            name="edu-endDate"
            id="edu-endDate"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="resumeForm.education[selectedIndex.education].endDate"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'
import { ref, watch } from 'vue'

const store = useResumeForm()
const { resumeForm, selectedIndex, addNewEducation, removeEducation, $subscribe } = store

function getCurrentInstituteType() {
  if (resumeForm.education[selectedIndex.education]?.school) {
    return 'school'
  }
  if (resumeForm.education[selectedIndex.education]?.university) {
    return 'university'
  }
}

function getCurrentInstitute() {
  return (
    resumeForm.education[selectedIndex.education]?.university ??
    resumeForm.education[selectedIndex.education]?.school ??
    ''
  )
}

const instituteType = ref<'school' | 'university' | undefined>(getCurrentInstituteType())
const institute = ref<string>(getCurrentInstitute())

$subscribe(() => {
  instituteType.value = getCurrentInstituteType()
  institute.value = getCurrentInstitute()
})

watch(institute, () => {
  if (instituteType.value === 'university') {
    resumeForm.education[selectedIndex.education].university = institute.value
    resumeForm.education[selectedIndex.education].school = undefined
  }
  if (instituteType.value === 'school') {
    resumeForm.education[selectedIndex.education].school = institute.value
    resumeForm.education[selectedIndex.education].university = undefined
  }
})
</script>
