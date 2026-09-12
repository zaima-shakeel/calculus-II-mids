import type { SubjectInfo } from './shared'

export const subjects: SubjectInfo[] = [
  {
    id: 'cs201',
    code: 'CS201',
    title: 'Introduction to Programming',
    blurb: 'C++ fundamentals from the VU playlist and official handout: programs, decisions, loops, functions, arrays, pointers, strings, and files.',
    accent: 'code',
    midsReady: true,
    finalsReady: false,
    extras: ['18 lectures', 'C++ lab', 'Output quizzes'],
  },
  {
    id: 'mth301',
    code: 'MTH301',
    title: 'Calculus 2',
    blurb: 'Multivariable calculus notes with rendered equations, MCQs, and step-by-step practice from the midterm export.',
    accent: 'math',
    midsReady: true,
    finalsReady: false,
    extras: ['Rendered math', 'Cram cards', 'Worked examples'],
  },
]
