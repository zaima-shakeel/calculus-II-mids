import { Link } from 'react-router-dom'
import { LoveCard } from '../../components/LoveNote'
import { lectures, totalMcqs, totalPractice } from '../../data/mth301/lectures'
import { formatMinutes, getStudyPlan, subjectStudyMinutes } from '../../data/studyPlans'
import { subjectProgress } from '../../lib/progress'

export function Home() {
  const progress = subjectProgress('mth301')
  const resume = progress.lastLectureId
    ? lectures.find((lecture) => lecture.id === progress.lastLectureId)
    : lectures[0]
  const allIds = lectures.map((lecture) => lecture.id)
  const totalSit = subjectStudyMinutes('mth301', allIds)
  const leftSit = subjectStudyMinutes(
    'mth301',
    allIds.filter((id) => !progress.completedLectures.includes(id)),
  )

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">MTH301 · for Zaima ∫💗</div>
          <h2>A midterm studio with the equations actually rendered.</h2>
          <p>
            Every lecture from the exported notes is here: formulas in proper math,
            step-by-step methods, MCQ quizzes you can mark, and practice problems
            that reveal one line at a time. Open a lecture from the sidebar and work through it.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link className="btn" to={resume ? `/mth301/mids/lecture/${resume.id}` : '/mth301/mids/lecture/l1-2'}>
              {progress.lastLectureId ? `Resume lecture ${resume?.number}` : 'Start lecture 1'}
            </Link>
            <Link className="btn ghost" to="/mth301/mids/quizzes">Jump to quizzes</Link>
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
            Full sit of every lecture: {formatMinutes(totalSit)}.
            {leftSit && leftSit !== totalSit
              ? ` About ${formatMinutes(leftSit)} still unopened.`
              : ' Green dots in the sidebar mark lectures you have opened.'}
          </p>
        </aside>
      </section>
      <LoveCard seed="mth301-home" />

      <div className="section-head">
        <h3>Lectures</h3>
        <div className="topbar-right">
          <span className="muted">{formatMinutes(totalSit)} full sit</span>
          <Link className="btn ghost small" to="/mth301/mids/cram">5 / 15 / 30 minute cram</Link>
        </div>
      </div>
      <div className="lecture-grid">
        {lectures.map((lecture) => (
          <Link key={lecture.id} className="lecture-card" to={`/mth301/mids/lecture/${lecture.id}`}>
            <div className="num">Lecture {lecture.number} · {getStudyPlan('mth301', lecture.id).minutes} min</div>
            <h3>{lecture.title}</h3>
            <p>{lecture.mcqs.length} quiz questions · {lecture.practice.length} to solve</p>
          </Link>
        ))}
      </div>
    </>
  )
}
