import { useMemo, useState } from 'react'
import type { MCQ } from '../data/types'
import { saveQuizScore } from '../lib/progress'
import { MathText } from './MathText'

export function Quiz({ lectureId, questions }: { lectureId: string; questions: MCQ[] }) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[index]
  const letters = useMemo(() => ['A', 'B', 'C', 'D', 'E'], [])

  if (!q) return null

  function choose(i: number) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.correct) setCorrect((c) => c + 1)
  }

  function next() {
    if (index + 1 >= questions.length) {
      const totalCorrect = correct
      saveQuizScore(lectureId, totalCorrect, questions.length)
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setPicked(null)
  }

  function restart() {
    setIndex(0)
    setPicked(null)
    setCorrect(0)
    setDone(false)
  }

  if (done) {
    return (
      <section className="quiz">
        <h3>Quiz result</h3>
        <p className="muted">
          You scored <strong>{correct}</strong> out of <strong>{questions.length}</strong>.
        </p>
        <p>
          {correct === questions.length
            ? 'Perfect. This lecture is sitting well.'
            : correct >= Math.ceil(questions.length * 0.7)
              ? 'Solid. Revisit the misses once, then move on.'
              : 'Worth another pass. Open the formulas above and try again.'}
        </p>
        <button className="btn" onClick={restart}>Try again</button>
      </section>
    )
  }

  return (
    <section className="quiz">
      <div className="quiz-meta">
        <span>Question {index + 1} of {questions.length}</span>
        <span>Score {correct}</span>
      </div>
      <h3><MathText text={q.question} /></h3>
      <div className="options">
        {q.options.map((option, i) => {
          const shown = picked !== null
          const cls = shown
            ? i === q.correct
              ? 'correct'
              : i === picked
                ? 'wrong'
                : ''
            : ''
          return (
            <button
              key={option}
              className={`option ${cls}`}
              disabled={picked !== null}
              onClick={() => choose(i)}
            >
              <strong>{letters[i]}.</strong> <MathText text={option} />
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className="explain">
          <MathText text={q.explanation} />
        </div>
      )}
      <div style={{ marginTop: 14 }}>
        <button className="btn" disabled={picked === null} onClick={next}>
          {index + 1 === questions.length ? 'Finish quiz' : 'Next question'}
        </button>
      </div>
    </section>
  )
}
