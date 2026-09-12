export interface MCQ {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export type TermId = 'mids' | 'finals'
export type SubjectId = 'cs201' | 'mth301'

export interface SubjectInfo {
  id: SubjectId
  code: string
  title: string
  blurb: string
  accent: string
  midsReady: boolean
  finalsReady: boolean
  extras: string[]
}
