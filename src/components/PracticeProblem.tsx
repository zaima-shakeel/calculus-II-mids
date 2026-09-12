import { useState } from 'react'
import type { Practice } from '../data/types'
import { MathText } from './MathText'

export function PracticeProblem({ problem, index }: { problem: Practice; index: number }) {
  const [visible, setVisible] = useState(0)

  return (
    <article className="practice">
      <h4>Practice {index + 1}</h4>
      <p><MathText text={problem.question} /></p>
      {visible === 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button className="btn ghost small" onClick={() => setVisible(1)}>
            Reveal one step
          </button>
          <button className="btn small" onClick={() => setVisible(problem.steps.length)}>
            Show full solution
          </button>
        </div>
      )}
      {visible > 0 && (
        <>
          <ol className="steps">
            {problem.steps.slice(0, visible).map((step) => (
              <li key={step}><MathText text={step} /></li>
            ))}
          </ol>
          {visible < problem.steps.length && (
            <button className="btn ghost small" onClick={() => setVisible((n) => n + 1)}>
              Next step
            </button>
          )}
          {visible >= problem.steps.length && (
            <div className="answer-box">
              Final answer: <MathText text={problem.answer} />
            </div>
          )}
        </>
      )}
    </article>
  )
}
