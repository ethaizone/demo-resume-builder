import merge from 'lodash.merge'
import { defineStore } from 'pinia'
import type { ResumeType } from '@/resume/types'
import { createEmptyResume } from '@/resume/utils'


export const useResumeForm = defineStore('resumeForm', {
  state: () => ({
    resumeForm: createEmptyResume(),
    selectedIndex: {
      expeience: 0,
      education: 0,
    }
  }),
  actions: {
    loadResume(resume: ResumeType) {
      merge(this.resumeForm, resume)

      this.selectedIndex.expeience = 0
      this.selectedIndex.education = 0
    },

    addNewExperience() {
      this.resumeForm.experiences.push({ ...createEmptyResume().experiences[0] })
      this.selectedIndex.expeience = this.resumeForm.experiences.length - 1
    },
    removeExperience() {
      this.resumeForm.experiences.splice(this.selectedIndex.expeience, 1)
      this.selectedIndex.expeience = 0
    },
    addNewEducation() {
      this.resumeForm.education.push({ ...createEmptyResume().education[0] })
      this.selectedIndex.education = this.resumeForm.education.length - 1
    },
    removeEducation() {
      this.resumeForm.education.splice(this.selectedIndex.education, 1)
      this.selectedIndex.education = 0
    }
  }
})
