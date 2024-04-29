<template>
  <main>
    <ResumeDisplay :resume="resume" :template="template" />
  </main>
</template>

<script setup lang="ts">
import ResumeDisplay from '@/resume/ResumeDisplay.vue'
import resume from '@/candidate/exampleData/example.json'

import { parseQuery } from 'vue-router'
import { parseTemplateName } from '@/resume/templates'

const parsedQuery = parseQuery(location.search)

const template = parseTemplateName(parsedQuery.template as string) ?? 'standard'
</script>
