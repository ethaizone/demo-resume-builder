import redbar from './RedBarTemplate.vue';
import standard from './StandardTemplate.vue';

// Register new template at here!
export const templates = {
  standard,
  redbar,
}

export const availableTemplates = Object.keys(templates) as (keyof typeof templates)[]

export type TemplateName = (typeof availableTemplates)[number]

export function parseTemplateName(name: string): TemplateName | undefined {
  if ((availableTemplates as string[]).includes(name)) {
    return name as TemplateName
  }

  return undefined
}
