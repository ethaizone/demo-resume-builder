
export interface ResumeType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  description: string;
  linkedin: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface Education {
  degree: string;
  major: string;
  university?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  school?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  score: number;
}
