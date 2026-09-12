import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoveCard } from '../../components/LoveNote'
import { Quiz } from '../../components/Quiz'
import { lectures, totalMcqs } from '../../data/mth301/lectures'
import type { MCQ } from '../../data/shared'
import { subjectProgress } from '../../lib/progress'

export function QuizHub() {
  const [mode, setMode] = useState<'menu' | 'mixed'>('menu')
  const progress = subjectProgress('mth301')

  const mixed = useMemo(() => {
    const bag: MCQ[] = lectures.flatMap((lecture) => lecture.mcqs)
    return [...bag].sort(() => Math.random() - 0.5).slice(0, 12)
  }, [mode])

  if (mode === 'mixed') {
    return (
      <article>
        <div className="lede">
          <h2>Mixed midterm quiz</h2>
          <p className="overview">Twelve questions drawn from every lecture. Treat it like a short grand quiz.</p>
          <button className="btn ghost small" onClick={() => setMode('menu')}>Back to quiz list</button>
        </div>
        <Quiz subjectId="mth301" lectureId="mixed" questions={mixed} />
      </article>
    )
  }

  return (
    <article>
      <div className="lede">
        <h2>Quizzes</h2>
        <p className="overview">
          There are {totalMcqs} multiple-choice questions across the notes. Take a lecture quiz,
          or sit a mixed set of twelve.
        </p>
        <button className="btn" onClick={() => setMode('mixed')}>Start mixed quiz</button>
        <div style={{ marginTop: 16 }}><LoveCard seed="mth301-quiz-hub" /></div>
      </div>
      <div className="lecture-grid" style={{ marginTop: 22 }}>
        {lectures.map((lecture) => {
          const score = progress.quizScores[lecture.id]
          return (
            <Link key={lecture.id} className="lecture-card" to={`/mth301/mids/lecture/${lecture.id}`}>
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
