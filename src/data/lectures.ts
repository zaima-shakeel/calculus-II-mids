import { lecturesA } from './lectures-a'
import { lecturesB } from './lectures-b'
import { lecturesC } from './lectures-c'
import type { Lecture } from './types'

export const lectures: Lecture[] = [...lecturesA, ...lecturesB, ...lecturesC]

export function getLecture(id: string) {
  return lectures.find((lecture) => lecture.id === id)
}

export function getLectureIndex(id: string) {
  return lectures.findIndex((lecture) => lecture.id === id)
}

export const totalMcqs = lectures.reduce((sum, lecture) => sum + lecture.mcqs.length, 0)
export const totalPractice = lectures.reduce((sum, lecture) => sum + lecture.practice.length, 0)
