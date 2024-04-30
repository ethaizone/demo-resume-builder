<template>
  <main>
    <ResumeDisplay :resume="resume" :template="template" />
  </main>
</template>

<script setup lang="ts">
import ResumeDisplay from '@/resume/render/ResumeDisplay.vue'
import example from '@/resume/exampleData/example.json'

import { parseQuery } from 'vue-router'
import { parseTemplateName } from '@/resume/render/templates'
import { useResumeForm } from '@/stores/resumeForm'
import type { ResumeType } from '@/resume/types'
import { onMounted } from 'vue'

const parsedQuery = parseQuery(location.search)

const store = useResumeForm()

const resumeKey = parsedQuery.resumeKey ? String(parsedQuery.resumeKey) : undefined

let resume: ResumeType = example

if (resumeKey) {
  const exists = store.getResumeByPersistKey(resumeKey)
  if (exists) {
    resume = exists
  }
}

const template = parseTemplateName(parsedQuery.template as string) ?? 'standard'
const isPrint = parsedQuery.print as string
if (isPrint) {
  onMounted(() => {
    window.print()
  })
}
</script>
