<template>
  <main>
    <form class="max-w mx-auto">
      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Resume Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-8">
              <GeneralSection />

              <ExperienceSection />

              <EducationSection />

              <CertificationSection />

              <SkillSection />

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>

                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                    @click.prevent="loadExampleData"
                  >
                    Load Example
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import exampleData from '@/resume/exampleData/example.json'
import { useResumeForm } from '@/stores/resumeForm'
import ExperienceSection from '@/resume/form/sections/ExperienceSection.vue'
import GeneralSection from '@/resume/form/sections/GeneralSection.vue'
import EducationSection from '@/resume/form/sections/EducationSection.vue'
import CertificationSection from '@/resume/form/sections/CertificationSection.vue'
import SkillSection from '@/resume/form/sections/SkillSection.vue'

const { loadResume } = useResumeForm()

function loadExampleData() {
  loadResume(exampleData)
}
</script>
