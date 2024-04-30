import cloneDeep from 'lodash.clonedeep'
import { defineStore } from 'pinia'
import type { ResumeType } from '@/resume/types'
import { createEmptyResume } from '@/resume/utils'
import exampleData from '@/resume/exampleData/example.json'
import { mergeDeepButReplaceArray } from './utils'

type PersistStoreType = { key: string, form: ResumeType }[]

// Load from localStorage
const persistStore: PersistStoreType = JSON.parse(localStorage.getItem('resumeForm') || '[]')
if (persistStore.length === 0) {
  const firstData = cloneDeep(exampleData)
  firstData.firstName = ['Mark', 'Jack', 'Jane'][Math.floor(Math.random() * 3)]
  firstData.lastName = ['Smith', 'Doe', 'Johnson'][Math.floor(Math.random() * 3)]
  persistStore.push({ key: 'example', form: firstData })
}

function getUniqueResumeKey() {
  return String(Math.floor(Date.now() / 1000))
}

export const useResumeForm = defineStore('resumeForm', {
  state: () => ({
    persistStore,
    resumeKey: '',
    resumeForm: {} as ResumeType,
    selectedIndex: {
      expeience: 0,
      education: 0,
    }
  }),
  getters: {
    getResumeByPersistKey: (state) => (key: string) => state.persistStore.find(x => x.key === key)?.form,
  },
  actions: {
    createNewForm() {
      this.resumeKey = getUniqueResumeKey()
      mergeDeepButReplaceArray(this.resumeForm, createEmptyResume())
      this.selectedIndex = {
        expeience: 0,
        education: 0,
      }
    },
    saveToStore() {
      localStorage.setItem('resumeForm', JSON.stringify(this.persistStore))
    },
    loadResumeFromData(resume: ResumeType) {
      mergeDeepButReplaceArray(this.resumeForm, resume)

      this.selectedIndex.expeience = 0
      this.selectedIndex.education = 0
    },
    loadResumeByKey(key: string) {
      const exists = this.persistStore.find(x => x.key === key)
      if (exists) {
        this.resumeKey = exists.key
        mergeDeepButReplaceArray(this.resumeForm, cloneDeep(exists.form))
      }
    },
    saveResume() {
      if (!this.resumeKey) this.resumeKey = getUniqueResumeKey()

      const exists = this.persistStore.find(x => x.key === this.resumeKey)
      if (exists) {
        exists.form = cloneDeep(this.resumeForm)
      } else {
        this.persistStore.push({ key: this.resumeKey, form: cloneDeep(this.resumeForm) })
      }

      this.saveToStore()

      alert('Saved')
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
