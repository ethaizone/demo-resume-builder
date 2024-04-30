import type { ResumeType } from './types';

export function createEmptyResume(): ResumeType {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    experiences: [],
    education: [],
    certifications: [],
    description: '',
    linkedin: '',
    skills: [],
  }
}
