import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoveCard } from '../../components/LoveNote'
import { Quiz } from '../../components/Quiz'
import { csLectures, csMcqCount } from '../../data/cs201/lectures'
import type { MCQ } from '../../data/shared'
import { subjectProgress } from '../../lib/progress'

export function CsQuizzes() {
  const [mode, setMode] = useState<'menu' | 'mixed'>('menu')
  const progress = subjectProgress('cs201')
  const mixed = useMemo(() => {
    const bag: MCQ[] = csLectures.flatMap((lecture) => lecture.mcqs)
    return [...bag].sort(() => Math.random() - 0.5).slice(0, 15)
  }, [mode])

  if (mode === 'mixed') {
    return (
      <article>
        <div className="lede">
          <h2>Mixed CS201 quiz</h2>
          <p className="overview">Fifteen questions from lectures 1–18.</p>
          <button className="btn ghost small" onClick={() => setMode('menu')}>Back</button>
        </div>
        <Quiz subjectId="cs201" lectureId="mixed" questions={mixed} />
      </article>
    )
  }

  return (
    <article>
      <div className="lede">
        <h2>Quizzes</h2>
        <p className="overview">{csMcqCount} multiple-choice questions — 10 in every lecture. You have this, meri Zaima 💗</p>
        <button className="btn" onClick={() => setMode('mixed')}>Start mixed quiz</button>
        <div style={{ marginTop: 16 }}><LoveCard seed="cs201-quiz-hub" /></div>
      </div>
      <div className="lecture-grid" style={{ marginTop: 22 }}>
        {csLectures.map((lecture) => {
          const score = progress.quizScores[lecture.id]
          return (
            <Link key={lecture.id} className="lecture-card" to={`/cs201/mids/lecture/${lecture.id}`}>
              <div className="num">Lecture {lecture.number}</div>
              <h3>{lecture.shortTitle}</h3>
              <p>
                {lecture.mcqs.length} questions
                {score ? ` · last score ${score.correct}/${score.total}` : ''}
              </p>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
