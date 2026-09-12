import type { MCQ } from '../shared'

export interface CsConcept {
  name: string
  definition: string
  explanation: string
}

export interface CodeExample {
  title: string
  code: string
  note?: string
}

export interface OutputGuess {
  title: string
  code: string
  options: string[]
  correct: number
  explanation: string
}

export interface CodingChallenge {
  title: string
  prompt: string
  starter: string
  stdin?: string
  expected: string
  hint?: string
}

export interface CsLecture {
  id: string
  number: string
  title: string
  shortTitle: string
  videoId: string
  overview: string
  takeaways: string[]
  concepts: CsConcept[]
  examples: CodeExample[]
  traps: string[]
  memorize: string[]
  mcqs: MCQ[]
  outputGuess: OutputGuess[]
  coding: CodingChallenge[]
}
