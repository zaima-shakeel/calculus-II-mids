export type Priority = 'high' | 'medium' | 'low'

export interface Concept {
  name: string
  definition: string
  explanation: string
  why: string
  priority: Priority
}

export interface Formula {
  name: string
  latex: string
  meaning: string
  when: string
}

export interface Method {
  type: string
  recognize?: string
  steps: string[]
  example?: { question: string; solution: string }
}

export interface Example {
  question: string
  concept?: string
  steps: string[]
  answer: string
}

export interface MCQ {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface Practice {
  question: string
  steps: string[]
  answer: string
}

export interface CramPlan {
  top: string[]
  min30: string
  min15: string
  min5: string
}

export interface Lecture {
  id: string
  number: string
  title: string
  shortTitle: string
  overview: string
  takeaways: string[]
  concepts: Concept[]
  formulas: Formula[]
  methods: Method[]
  examples: Example[]
  traps: string[]
  memorize: string[]
  revision: string[]
  mcqs: MCQ[]
  practice: Practice[]
  cram: CramPlan
}
