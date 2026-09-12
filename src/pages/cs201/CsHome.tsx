import { Link } from 'react-router-dom'
import { LoveCard } from '../../components/LoveNote'
import { csCodingCount, csLectures, csMcqCount, csOutputCount } from '../../data/cs201/lectures'
import { formatMinutes, getStudyPlan, subjectStudyMinutes } from '../../data/studyPlans'
import { subjectProgress } from '../../lib/progress'

export function CsHome() {
  const progress = subjectProgress('cs201')
  const resume = progress.lastLectureId
    ? csLectures.find((lecture) => lecture.id === progress.lastLectureId)
    : csLectures[0]
  const allIds = csLectures.map((lecture) => lecture.id)
  const totalSit = subjectStudyMinutes('cs201', allIds)
  const leftSit = subjectStudyMinutes(
    'cs201',
    allIds.filter((id) => !progress.completedLectures.includes(id)),
  )

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">CS201 · for Zaima 💻💗</div>
          <h2>Programming fundamentals, pulled from the VU playlist.</h2>
          <p>
            Notes follow Dr. Naveed Malik’s official handout and the
            {' '}<a href="https://www.youtube.com/playlist?list=PLKyB9RYzaFRiuBRJQyTTnl4d4UGYS2rR4" target="_blank" rel="noreferrer">YouTube playlist</a>.
            Each lecture has 10 MCQs, 10 output-guessing quizzes, 3 coding tasks, and the original video.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link className="btn" to={`/cs201/mids/lecture/${resume?.id ?? 'cs-l01'}`}>
              {progress.lastLectureId ? `Resume lecture ${resume?.number}` : 'Start lecture 1'}
            </Link>
            <Link className="btn ghost" to="/cs201/mids/lab">Open C++ lab</Link>
          </div>
        </div>
        <aside className="hero-card">
          <h3>Midterm kit</h3>
          <div className="stat-row four">
            <div className="stat"><b>{csLectures.length}</b><span>lectures</span></div>
            <div className="stat"><b>{csMcqCount}</b><span>MCQs</span></div>
            <div className="stat"><b>{csOutputCount}</b><span>output quizzes</span></div>
            <div className="stat"><b>{csCodingCount}</b><span>code tasks</span></div>
          </div>
          <p className="muted" style={{ marginTop: 16 }}>
            Full sit of every lecture: {formatMinutes(totalSit)}.
            {leftSit && leftSit !== totalSit
              ? ` About ${formatMinutes(leftSit)} still unopened.`
              : ' The lab compiles real C++ in the browser.'}
          </p>
        </aside>
      </section>
      <LoveCard seed="cs201-home" />
      <div className="section-head">
        <h3>Lectures</h3>
        <span className="muted">{formatMinutes(totalSit)} if she sits with all of them</span>
      </div>
      <div className="lecture-grid">
        {csLectures.map((lecture) => (
          <Link key={lecture.id} className="lecture-card" to={`/cs201/mids/lecture/${lecture.id}`}>
            <div className="num">Lecture {lecture.number} · {getStudyPlan('cs201', lecture.id).minutes} min</div>
            <h3>{lecture.title}</h3>
            <p>{lecture.mcqs.length} MCQs · {lecture.outputGuess.length} output · {lecture.coding.length} to code</p>
          </Link>
        ))}
      </div>
    </>
  )
}
