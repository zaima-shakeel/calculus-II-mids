import { lectures16 } from './lectures-1-6'
import { lectures712 } from './lectures-7-12'
import { lectures1318 } from './lectures-13-18'
import { exercisesA } from './exercises-a'
import { exercisesB } from './exercises-b'
import { exercisesC } from './exercises-c'
import type { CsLecture } from './types'

const extra = { ...exercisesA, ...exercisesB, ...exercisesC }

export const csLectures: CsLecture[] = [...lectures16, ...lectures712, ...lectures1318].map((lecture) => {
  const pack = extra[lecture.id]
  if (!pack) return lecture
  return {
    ...lecture,
    outputGuess: pack.outputGuess,
    coding: pack.coding,
  }
})

export function getCsLecture(id: string) {
  return csLectures.find((lecture) => lecture.id === id)
}

export function getCsLectureIndex(id: string) {
  return csLectures.findIndex((lecture) => lecture.id === id)
}

export const csMcqCount = csLectures.reduce((sum, lecture) => sum + lecture.mcqs.length, 0)
export const csCodingCount = csLectures.reduce((sum, lecture) => sum + lecture.coding.length, 0)
export const csOutputCount = csLectures.reduce((sum, lecture) => sum + lecture.outputGuess.length, 0)
