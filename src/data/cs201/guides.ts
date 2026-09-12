import type { CsGuide } from './guide-types'
import { guides16 } from './guides-1-6'
import { guides712 } from './guides-7-12'
import { guides1318 } from './guides-13-18'

export const csGuides: Record<string, CsGuide> = {
  ...guides16,
  ...guides712,
  ...guides1318,
}

export function getGuide(id: string) {
  return csGuides[id]
}

export type { CsGuide, LessonTag, LessonTerm, LessonDiagram, LessonStep, TagKind } from './guide-types'
