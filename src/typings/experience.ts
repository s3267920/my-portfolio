import type { ProjectProp } from './ProjectProp'

export interface Experience {
  companyName: string
  title: string
  time: {
    start: string
    end: string
  }
  description: string[]
  experience: ProjectProp[]
}
