<template>
  <div class="md:col-span-8">
    <p class="font-medium text-sm">Skills</p>
    <div class="flex gap-4 mb-2" v-for="(skill, index) in resumeForm.skills" :key="index">
      <input
        type="text"
        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        v-model="skill.name"
        required
      />
      <input
        type="number"
        class="h-10 border mt-1 rounded px-4 w-2/6 bg-gray-50"
        v-model="skill.score"
        min="1"
        max="10"
        required
      />
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded w-1/6"
        @click.prevent="resumeForm.skills.splice(index, 1)"
      >
        Remove
      </button>
    </div>

    <div class="flex gap-2 mt-2 min-h-10">
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 rounded"
        @click.prevent="addNewSkill"
      >
        Add new item
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'

const { resumeForm } = useResumeForm()

function addNewSkill() {
  resumeForm.skills.push({ name: '', score: 0 })
}
</script>
