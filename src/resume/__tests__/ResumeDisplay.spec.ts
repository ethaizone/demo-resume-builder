import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ResumeDisplay from '../ResumeDisplay.vue'
import resume from '@/candidate/exampleData/example.json'
import { availableTemplates } from '../templates'

describe('ResumeDisplay', () => {
  it('renders properly on every templates', () => {
    for (const template of availableTemplates) {
      const wrapper = mount(ResumeDisplay, { props: { resume, template, } })
      expect(wrapper.text()).toContain('John Doe')
    }
  })
})
