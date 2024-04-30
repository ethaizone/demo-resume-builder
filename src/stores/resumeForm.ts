import merge from 'lodash.merge'
import { defineStore } from 'pinia'
import type { ResumeType } from '@/candidate/types'
import { createEmptyResume } from '@/candidate/utils'


export const useResumeForm = defineStore('resumeForm', {
  state: () => ({
    candidate: createEmptyResume(),
    selectedIndex: {
      expeience: 0,
      education: 0,
    }
  }),
  actions: {
    loadResume(resume: ResumeType) {
      merge(this.candidate, resume)

      this.selectedIndex.expeience = 0
      this.selectedIndex.education = 0
    },

    addNewExperience() {
      this.candidate.experiences.push({ ...createEmptyResume().experiences[0] })
      this.selectedIndex.expeience = this.candidate.experiences.length - 1
    },
    removeExperience() {
      this.candidate.experiences.splice(this.selectedIndex.expeience, 1)
      this.selectedIndex.expeience = 0
    },
    addNewEducation() {
      this.candidate.education.push({ ...createEmptyResume().education[0] })
      this.selectedIndex.education = this.candidate.education.length - 1
    },
    removeEducation() {
      this.candidate.education.splice(this.selectedIndex.education, 1)
      this.selectedIndex.education = 0
    }
  }
})
