import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return { isSideBarOpen: false }
  },
  actions: {
    setIsSideBarOpen(open: boolean) {
      this.isSideBarOpen = open
    },
  },
})
