import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CppEditor } from '../../components/CppEditor'
import { Diagram, Story, TermGrid, TopicTags, Walkthrough } from '../../components/cs201/CsLesson'
import { LoveCard } from '../../components/LoveNote'
import { Quiz } from '../../components/Quiz'
import { getGuide } from '../../data/cs201/guides'
import { csLectures, getCsLecture, getCsLectureIndex } from '../../data/cs201/lectures'
import type { OutputGuess } from '../../data/cs201/types'
import { markLectureRead } from '../../lib/progress'

function OutputCard({ item }: { item: OutputGuess }) {
  const [picked, setPicked] = useState<number | null>(null)
  return (
    <article className="practice">
      <h4>{item.title}</h4>
      <pre className="code-block">{item.code}</pre>
      <div className="options">
        {item.options.map((option, i) => {
          const shown = picked !== null
          const cls = shown ? (i === item.correct ? 'correct' : i === picked ? 'wrong' : '') : ''
          return (
            <button key={`${i}-${option}`} className={`option ${cls}`} disabled={picked !== null} onClick={() => setPicked(i)}>
              <strong>{String.fromCharCode(65 + i)}.</strong> {option}
            </button>
          )
        })}
      </div>
      {picked !== null && <div className="explain">{item.explanation}</div>}
    </article>
  )
}

export function CsLecturePage() {
  const { id = '' } = useParams()
  const lecture = getCsLecture(id)
  const index = getCsLectureIndex(id)
  const guide = getGuide(id)

  useEffect(() => {
    if (lecture) markLectureRead('cs201', lecture.id)
  }, [lecture])

  if (!lecture) return <Navigate to="/cs201/mids" replace />

  const prev = index > 0 ? csLectures[index - 1] : null
  const next = index < csLectures.length - 1 ? csLectures[index + 1] : null

  return (
    <article>
      <div className="lede">
        <div className="eyebrow" style={{ color: 'var(--brick)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 12 }}>
          Lecture {lecture.number}
        </div>
        <h2>{lecture.title}</h2>
        <div className="meta">
          <span className="chip">{lecture.mcqs.length} MCQs</span>
          <span className="chip">{lecture.outputGuess.length} output</span>
          <span className="chip">{lecture.coding.length} coding</span>
        </div>
        <p className="overview">{lecture.overview}</p>
        {guide && <TopicTags tags={guide.tags} />}
        <ul className="takeaways">
          {lecture.takeaways.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>

      {guide && <LoveCard note={guide.love} />}

      {guide && (
        <>
          <div className="section-head"><h3>Learn it from zero</h3></div>
          <Story paragraphs={guide.story} />

          <div className="section-head"><h3>Picture this</h3></div>
          <div className="stack">
            {guide.diagrams.map((diagram) => (
              <Diagram key={diagram.title} diagram={diagram} />
            ))}
          </div>

          <div className="section-head"><h3>Important terms</h3></div>
          <p className="muted" style={{ marginTop: -8 }}>
            Each term has a tag. Open one to get the everyday picture and the exam reason.
          </p>
          <TermGrid terms={guide.terms} />

          <div className="section-head"><h3>Walk it with me</h3></div>
          <Walkthrough key={lecture.id} steps={guide.walkthrough} />
        </>
      )}

      <div className="video-wrap">
        <iframe
          title={lecture.title}
          src={`https://www.youtube.com/embed/${lecture.videoId}?rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {!guide && (
        <>
          <div className="section-head"><h3>Must-know</h3></div>
          <div className="stack">
            {lecture.concepts.map((concept) => (
              <section key={concept.name} className="concept">
                <h4>{concept.name}</h4>
                <p><strong>Definition.</strong> {concept.definition}</p>
                <p className="muted">{concept.explanation}</p>
              </section>
            ))}
          </div>
        </>
      )}

      <div className="section-head"><h3>Code from the lecture</h3></div>
      <div className="stack">
        {lecture.examples.map((example) => (
          <section key={example.title} className="example">
            <h4>{example.title}</h4>
            <pre className="code-block">{example.code}</pre>
            {example.note && <p className="muted">{example.note}</p>}
          </section>
        ))}
      </div>

      <div className="section-head"><h3>Exam traps</h3></div>
      <ul className="trap-list">
        {lecture.traps.map((trap) => <li key={trap}>{trap}</li>)}
      </ul>

      <div className="section-head"><h3>Memorize</h3></div>
      <ul className="takeaways">
        {lecture.memorize.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <div className="section-head"><h3>10 MCQs</h3></div>
      <Quiz subjectId="cs201" lectureId={lecture.id} questions={lecture.mcqs} />

      <div className="section-head"><h3>10 output-guessing questions</h3></div>
      <div className="stack">
        {lecture.outputGuess.map((item, i) => (
          <OutputCard key={`${item.title}-${i}`} item={item} />
        ))}
      </div>

      <div className="section-head"><h3>3 practice questions</h3></div>
      <div className="stack">
        {lecture.coding.map((task) => (
          <section key={task.title} className="practice">
            <h4>{task.title}</h4>
            <p>{task.prompt}</p>
            {task.hint && <p className="muted">Hint: {task.hint}</p>}
            <CppEditor initial={task.starter} stdin={task.stdin} expected={task.expected} />
          </section>
        ))}
      </div>

      <div className="pager">
        {prev ? (
          <Link className="btn ghost" to={`/cs201/mids/lecture/${prev.id}`}>← Lecture {prev.number}</Link>
        ) : <span />}
        {next ? (
          <Link className="btn" to={`/cs201/mids/lecture/${next.id}`}>Lecture {next.number} →</Link>
        ) : <span />}
      </div>
    </article>
  )
}
