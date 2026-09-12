export type TagKind = 'exam' | 'trap' | 'remember' | 'new' | 'vu' | 'core'

export interface LessonTag {
  kind: TagKind
  label: string
}

export interface LessonTerm {
  name: string
  tag: TagKind
  definition: string
  likeThis: string
  why: string
  watch?: string
}

export interface MemoryRow {
  name: string
  address: string
  value: string
  mark?: boolean
}

export type LessonDiagram =
  | {
      kind: 'flow'
      title: string
      caption: string
      steps: { title: string; body: string }[]
    }
  | {
      kind: 'memory'
      title: string
      caption: string
      rows: MemoryRow[]
    }
  | {
      kind: 'compare'
      title: string
      caption: string
      left: { heading: string; items: string[] }
      right: { heading: string; items: string[] }
    }
  | {
      kind: 'boxes'
      title: string
      caption: string
      items: { label: string; value: string; note?: string }[]
    }
  | {
      kind: 'call'
      title: string
      caption: string
      caller: string
      callee: string
      passing: string
      returning: string
    }
  | {
      kind: 'pointer'
      title: string
      caption: string
      boxName: string
      boxValue: string
      boxAddr: string
      pointerName: string
    }

export interface LessonStep {
  title: string
  body: string
  code?: string
}

export interface CsGuide {
  love: { emoji: string; text: string }
  tags: LessonTag[]
  story: string[]
  terms: LessonTerm[]
  diagrams: LessonDiagram[]
  walkthrough: LessonStep[]
}
