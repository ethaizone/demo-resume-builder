<template>
  <div class="md:col-span-8">
    <p class="font-medium text-sm">Educations</p>
    <div class="flex gap-2 mt-2 min-h-10">
      <select
        class="px-4 outline-none text-gray-800 h-10 bg-gray-50 border border-gray-200 rounded"
        v-model="selectedIndex.education"
        v-if="candidate.education[selectedIndex.education]"
      >
        <option v-for="(edu, index) in candidate.education" :key="index" :value="index">
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
        v-if="candidate.education[selectedIndex.education]"
      >
        Remove
      </button>
    </div>

    <fieldset
      class="border border-gray-300 rounded p-2 mt-3"
      v-if="candidate.education[selectedIndex.education]"
    >
      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8">
        <div class="md:col-span-4">
          <label for="edu-degree">Degree</label>
          <input
            type="text"
            name="edu-degree"
            id="edu-degree"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="candidate.education[selectedIndex.education].degree"
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
            v-model="candidate.education[selectedIndex.education].major"
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
              name="edu-university"
              id="edu-university"
              class="h-10 border rounded px-4 bg-gray-50 flex-auto"
              v-model="candidate.education[selectedIndex.education].university"
              placeholder="Univertity Name"
              v-if="instituteType === 'university'"
            />

            <input
              type="text"
              name="edu-school"
              id="edu-school"
              class="h-10 border rounded px-4 bg-gray-50 flex-auto"
              v-model="candidate.education[selectedIndex.education].school"
              placeholder="School Name"
              v-if="instituteType === 'school'"
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
            v-model="candidate.education[selectedIndex.education].location"
          />
        </div>
        <div class="md:col-span-8">
          <label for="edu-description">Description</label>
          <input
            type="text"
            name="edu-description"
            id="edu-description"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="candidate.education[selectedIndex.education].description"
          />
        </div>
        <div class="md:col-span-4">
          <label for="edu-startDate">Start Date</label>
          <input
            type="date"
            name="edu-startDate"
            id="edu-startDate"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="candidate.education[selectedIndex.education].startDate"
          />
        </div>
        <div class="md:col-span-4">
          <label for="edu-endDate">End Date</label>
          <input
            type="date"
            name="edu-endDate"
            id="edu-endDate"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            v-model="candidate.education[selectedIndex.education].endDate"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'
import { ref, watch } from 'vue'

const { candidate, selectedIndex, addNewEducation, removeEducation, $subscribe } = useResumeForm()

const instituteType = ref<'school' | 'university' | undefined>()

watch(instituteType, () => {
  if (instituteType.value === 'school') {
    candidate.education[selectedIndex.education].university = ''
  } else if (instituteType.value === 'university') {
    candidate.education[selectedIndex.education].school = ''
  }
})

$subscribe((mutation, state) => {
  if (state.candidate.education[state.selectedIndex.education].school) {
    instituteType.value = 'school'
  } else {
    instituteType.value = 'university'
  }
})
</script>
