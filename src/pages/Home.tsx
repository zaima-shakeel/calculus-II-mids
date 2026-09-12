import { Link } from 'react-router-dom'
import { lectures, totalMcqs, totalPractice } from '../data/lectures'
import { loadProgress } from '../lib/progress'

export function Home() {
  const progress = loadProgress()
  const resume = progress.lastLectureId
    ? lectures.find((lecture) => lecture.id === progress.lastLectureId)
    : lectures[0]

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">For Zainab · VU MTH301</div>
          <h2>A midterm studio with the equations actually rendered.</h2>
          <p>
            Every lecture from the exported notes is here: formulas in proper math,
            step-by-step methods, MCQ quizzes you can mark, and practice problems
            that reveal one line at a time. Open a lecture from the sidebar and work through it.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link className="btn" to={resume ? `/lecture/${resume.id}` : '/lecture/l1-2'}>
              {progress.lastLectureId ? `Resume lecture ${resume?.number}` : 'Start lecture 1'}
            </Link>
            <Link className="btn ghost" to="/quizzes">Jump to quizzes</Link>
          </div>
        </div>
        <aside className="hero-card">
          <h3>In this studio</h3>
          <div className="stat-row">
            <div className="stat"><b>{lectures.length}</b><span>lectures</span></div>
            <div className="stat"><b>{totalMcqs}</b><span>MCQs</span></div>
            <div className="stat"><b>{totalPractice}</b><span>practice problems</span></div>
          </div>
          <p className="muted" style={{ marginTop: 16 }}>
            Progress is saved in this browser only. Green dots in the sidebar mark lectures you have opened.
          </p>
        </aside>
      </section>

      <div className="section-head">
        <h3>Lectures</h3>
        <Link className="btn ghost small" to="/cram">5 / 15 / 30 minute cram</Link>
      </div>
      <div className="lecture-grid">
        {lectures.map((lecture) => (
          <Link key={lecture.id} className="lecture-card" to={`/lecture/${lecture.id}`}>
            <div className="num">Lecture {lecture.number}</div>
            <h3>{lecture.title}</h3>
            <p>{lecture.mcqs.length} quiz questions · {lecture.practice.length} to solve</p>
          </Link>
        ))}
      </div>
    </>
  )
}
