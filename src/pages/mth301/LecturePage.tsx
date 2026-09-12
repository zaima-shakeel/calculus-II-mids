import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { LoveCard } from '../../components/LoveNote'
import { PracticeProblem } from '../../components/PracticeProblem'
import { Quiz } from '../../components/Quiz'
import { MathText } from '../../components/MathText'
import { StudyPlanCard, TimeChip } from '../../components/StudyPlan'
import { getLecture, getLectureIndex, lectures } from '../../data/mth301/lectures'
import { getStudyPlan } from '../../data/studyPlans'
import { markLectureRead } from '../../lib/progress'

export function LecturePage() {
  const { id = '' } = useParams()
  const lecture = getLecture(id)
  const index = getLectureIndex(id)

  useEffect(() => {
    if (lecture) markLectureRead('mth301', lecture.id)
  }, [lecture])

  if (!lecture) return <Navigate to="/mth301/mids" replace />

  const prev = index > 0 ? lectures[index - 1] : null
  const next = index < lectures.length - 1 ? lectures[index + 1] : null
  const plan = getStudyPlan('mth301', lecture.id)

  return (
    <article>
      <div className="lede">
        <div className="eyebrow" style={{ color: 'var(--brick)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 12 }}>
          Lecture {lecture.number}
        </div>
        <h2>{lecture.title}</h2>
        <div className="meta">
          <TimeChip minutes={plan.minutes} />
          <span className="chip">{lecture.mcqs.length} MCQs</span>
          <span className="chip">{lecture.practice.length} practice</span>
          <span className="chip">{lecture.formulas.length} formulas</span>
        </div>
        <p className="overview"><MathText text={lecture.overview} /></p>
        <ul className="takeaways">
          {lecture.takeaways.map((item) => (
            <li key={item}><MathText text={item} /></li>
          ))}
        </ul>
      </div>

      <StudyPlanCard plan={plan} label={`Lecture ${lecture.number}`} />

      <div className="section-head"><h3>Must-know concepts</h3></div>
      <div className="stack">
        {lecture.concepts.map((concept) => (
          <section key={concept.name} className="concept">
            <div className="meta" style={{ marginBottom: 8 }}>
              <span className={`chip ${concept.priority}`}>{concept.priority} priority</span>
            </div>
            <h4>{concept.name}</h4>
            <p><strong>Definition.</strong> <MathText text={concept.definition} /></p>
            <p className="muted"><strong>In plain language.</strong> <MathText text={concept.explanation} /></p>
            <p><strong>Why it matters.</strong> <MathText text={concept.why} /></p>
          </section>
        ))}
      </div>

      <div className="section-head"><h3>Important formulas</h3></div>
      <div className="stack">
        {lecture.formulas.map((formula) => (
          <section key={formula.name} className="formula">
            <h4>{formula.name}</h4>
            <MathText text={`$$${formula.latex}$$`} />
            <p><MathText text={formula.meaning} /></p>
            <p className="muted"><MathText text={`When to use: ${formula.when}`} /></p>
          </section>
        ))}
      </div>

      <div className="section-head"><h3>How to solve the standard questions</h3></div>
      <div className="stack">
        {lecture.methods.map((method) => (
          <section key={method.type} className="method">
            <h4>{method.type}</h4>
            {method.recognize && (
              <p className="muted"><MathText text={`How to recognize: ${method.recognize}`} /></p>
            )}
            <ol className="steps">
              {method.steps.map((step) => (
                <li key={step}><MathText text={step} /></li>
              ))}
            </ol>
            {method.example && (
              <div className="explain">
                <p><strong>Worked example.</strong> <MathText text={method.example.question} /></p>
                <p><MathText text={method.example.solution} /></p>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="section-head"><h3>Solved examples</h3></div>
      <div className="stack">
        {lecture.examples.map((example) => (
          <section key={example.question} className="example">
            <h4>Example</h4>
            {example.concept && <p className="muted">{example.concept}</p>}
            <p><MathText text={example.question} /></p>
            <ol className="steps">
              {example.steps.map((step) => (
                <li key={step}><MathText text={step} /></li>
              ))}
            </ol>
            <div className="answer-box">Final answer: <MathText text={example.answer} /></div>
          </section>
        ))}
      </div>

      <div className="section-head"><h3>Exam traps</h3></div>
      <ul className="trap-list">
        {lecture.traps.map((trap) => (
          <li key={trap}><MathText text={trap} /></li>
        ))}
      </ul>

      <div className="section-head"><h3>Memorize</h3></div>
      <ul className="takeaways">
        {lecture.memorize.map((item) => (
          <li key={item}><MathText text={item} /></li>
        ))}
      </ul>

      <div className="section-head"><h3>Quiz</h3></div>
      <Quiz subjectId="mth301" lectureId={lecture.id} questions={lecture.mcqs} />

      <div className="section-head"><h3>Questions for you to solve</h3></div>
      <div className="stack">
        {lecture.practice.map((problem, i) => (
          <PracticeProblem key={problem.question} problem={problem} index={i} />
        ))}
      </div>

      <div className="section-head"><h3>If the exam is soon</h3></div>
      <section className="cram">
        <p><strong>Top things from this lecture</strong></p>
        <ol className="steps">
          {lecture.cram.top.map((item) => (
            <li key={item}><MathText text={item} /></li>
          ))}
        </ol>
        <div className="cram-grid" style={{ marginTop: 12 }}>
          <article>
            <h5>30 minutes</h5>
            <p><MathText text={lecture.cram.min30} /></p>
          </article>
          <article>
            <h5>15 minutes</h5>
            <p><MathText text={lecture.cram.min15} /></p>
          </article>
          <article>
            <h5>5 minutes</h5>
            <p><MathText text={lecture.cram.min5} /></p>
          </article>
        </div>
      </section>

      <LoveCard seed={lecture.id} />

      <div className="pager">
        {prev ? (
          <Link className="btn ghost" to={`/mth301/mids/lecture/${prev.id}`}>← Lecture {prev.number}</Link>
        ) : <span />}
        {next ? (
          <Link className="btn" to={`/mth301/mids/lecture/${next.id}`}>Lecture {next.number} →</Link>
        ) : <span />}
      </div>
    </article>
  )
}
