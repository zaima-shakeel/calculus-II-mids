const KEY = 'mth301-studio-progress'

export interface Progress {
  completedLectures: string[]
  quizScores: Record<string, { correct: number; total: number; at: number }>
  lastLectureId?: string
}

function empty(): Progress {
  return { completedLectures: [], quizScores: {} }
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    return { ...empty(), ...JSON.parse(raw) } as Progress
  } catch {
    return empty()
  }
}

export function saveProgress(next: Progress) {
  localStorage.setItem(KEY, JSON.stringify(next))
  window.dispatchEvent(new Event('mth301-progress'))
}

export function markLectureRead(id: string) {
  const p = loadProgress()
  if (!p.completedLectures.includes(id)) p.completedLectures.push(id)
  p.lastLectureId = id
  saveProgress(p)
  return p
}

export function saveQuizScore(id: string, correct: number, total: number) {
  const p = loadProgress()
  p.quizScores[id] = { correct, total, at: Date.now() }
  saveProgress(p)
  return p
}
