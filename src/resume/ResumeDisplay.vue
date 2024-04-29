<template>
  <component :is="selectedTemplate" :resume="preparedResume" />
</template>

<script setup lang="ts">
import type { ResumeType } from '@/candidate/types'
import { templates, type TemplateName } from './templates'

const { resume, template } = defineProps<{
  resume: ResumeType
  template: TemplateName
}>()

// Pick standard template
const selectedTemplate = templates[template]

function convertStringDateToStringYear(data: ResumeType): ResumeType {
  const convertToYear = (data: { startDate: string; endDate: string }) => {
    // TODO: This is dirty but leave it as it's POC
    data.startDate = new Date(data.startDate).getFullYear().toString()
    data.endDate = new Date(data.endDate).getFullYear().toString()
  }
  data.experiences.forEach(convertToYear)
  data.education.forEach(convertToYear)

  return data
}

const preparedResume = convertStringDateToStringYear(resume)

// Sort resume skills by score
preparedResume.skills.sort((a, b) => b.score - a.score)

// Change page title. It will be PDF filename as well when user print it.
document.title = 'Resume - ' + resume.firstName + ' ' + resume.lastName
</script>

<style>
@page {
  /* A4 Paper */
  size: A4;
  /* Remove header and footer from browser printer */
  margin: 0;
}

@media print {
  html,
  body {
    /* A4 Paper size */
    width: 210mm;
    height: 297mm;

    /* Always print with color */
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Disable it as I found on local development */
  #__vue-devtools-container__ {
    display: none;
  }
}
</style>
