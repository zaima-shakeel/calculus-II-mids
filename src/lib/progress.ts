const KEY = 'vu-studio-progress'
const LEGACY = 'mth301-studio-progress'

export interface SubjectProgress {
  completedLectures: string[]
  quizScores: Record<string, { correct: number; total: number; at: number }>
  lastLectureId?: string
}

export interface Progress {
  subjects: Record<string, SubjectProgress>
}

function emptySubject(): SubjectProgress {
  return { completedLectures: [], quizScores: {} }
}

function empty(): Progress {
  return { subjects: {} }
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...empty(), ...JSON.parse(raw) } as Progress
    const legacy = localStorage.getItem(LEGACY)
    if (legacy) {
      const old = JSON.parse(legacy)
      const migrated: Progress = {
        subjects: {
          mth301: {
            completedLectures: old.completedLectures ?? [],
            quizScores: old.quizScores ?? {},
            lastLectureId: old.lastLectureId,
          },
        },
      }
      saveProgress(migrated)
      return migrated
    }
    return empty()
  } catch {
    return empty()
  }
}

export function subjectProgress(subjectId: string): SubjectProgress {
  return loadProgress().subjects[subjectId] ?? emptySubject()
}

export function saveProgress(next: Progress) {
  localStorage.setItem(KEY, JSON.stringify(next))
  window.dispatchEvent(new Event('vu-progress'))
}

function updateSubject(subjectId: string, fn: (s: SubjectProgress) => SubjectProgress) {
  const all = loadProgress()
  all.subjects[subjectId] = fn(all.subjects[subjectId] ?? emptySubject())
  saveProgress(all)
  return all.subjects[subjectId]
}

export function markLectureRead(subjectId: string, id: string) {
  return updateSubject(subjectId, (s) => ({
    ...s,
    lastLectureId: id,
    completedLectures: s.completedLectures.includes(id)
      ? s.completedLectures
      : [...s.completedLectures, id],
  }))
}

export function saveQuizScore(subjectId: string, id: string, correct: number, total: number) {
  return updateSubject(subjectId, (s) => ({
    ...s,
    quizScores: { ...s.quizScores, [id]: { correct, total, at: Date.now() } },
  }))
}
