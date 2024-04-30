<template>
  <div class="max-w mx-auto" v-if="formStore.resumeKey">
    <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
      <div class="grid gap-4 gap-y-2 text-sm">
        <div class="text-gray-600">
          <p class="font-medium text-lg">Resume Details</p>
          <p>Please fill out all the fields. Save and Print button is below the form.</p>
        </div>

        <div class="col-span-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8">
            <GeneralSection />

            <ExperienceSection />

            <EducationSection />

            <CertificationSection />

            <SkillSection />
          </div>
        </div>
        <hr class="col-span-8 mt-4 mb-4" />

        <div class="col-span-8">
          <div class="grid grid-cols-2 w-full">
            <div class="text-left gap-2">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="saveResume()"
              >
                Save Resume
              </button>
            </div>

            <div class="text-right">
              <span class="font-bold mr-2">Template: </span>

              <select
                class="px-4 outline-none text-gray-800 h-10 bg-gray-50 border border-gray-200 rounded mr-2"
                v-model="selectedTemplate"
              >
                <option
                  v-for="(template, index) in availableTemplates"
                  :key="index"
                  :value="template"
                >
                  {{ template }}
                </option>
              </select>

              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="saveAndPrint()"
              >
                Print
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-8 text-center"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'
import ExperienceSection from '@/resume/form/sections/ExperienceSection.vue'
import GeneralSection from '@/resume/form/sections/GeneralSection.vue'
import EducationSection from '@/resume/form/sections/EducationSection.vue'
import CertificationSection from '@/resume/form/sections/CertificationSection.vue'
import SkillSection from '@/resume/form/sections/SkillSection.vue'
import router from '@/router'
import { ref } from 'vue'
import { availableTemplates } from '../render/templates'

const formStore = useResumeForm()
const { saveResume } = formStore

const selectedTemplate = ref('standard')

function saveAndPrint() {
  saveResume()
  router.push(
    `/print/preview?resumeKey=${formStore.resumeKey}&print=1&template=${selectedTemplate.value}`
  )
}
</script>
