import { Link } from 'react-router-dom'
import { HeartsBackdrop, LoveBanner, LoveStrip } from '../components/LoveNote'
import { subjects } from '../data/catalog'
import { subjectProgress } from '../lib/progress'
import { csLectures } from '../data/cs201/lectures'
import { lectures as mathLectures } from '../data/mth301/lectures'
import { formatMinutes, subjectStudyMinutes } from '../data/studyPlans'

const counts = {
  cs201: csLectures.length,
  mth301: mathLectures.length,
}

const hours = {
  cs201: subjectStudyMinutes('cs201', csLectures.map((lecture) => lecture.id)),
  mth301: subjectStudyMinutes('mth301', mathLectures.map((lecture) => lecture.id)),
}

export function Landing() {
  return (
    <div className="landing">
      <HeartsBackdrop />
      <LoveStrip />
      <header className="landing-top">
        <div className="brand-kicker">For Zaima · from Marsad 💍</div>
        <h1>My love, I made you a study home.</h1>
        <p>
          Zaima — this is not just notes. This is me sitting next to you for CS201 and MTH301.
          Pick a subject, open Mids, and remember I am already proud of you 🤍
        </p>
        <LoveBanner />
      </header>
      <div className="subject-grid">
        {subjects.map((subject) => {
          const progress = subjectProgress(subject.id)
          const total = counts[subject.id]
          return (
            <article key={subject.id} className={`subject-card ${subject.accent}`}>
              <div className="num">{subject.accent === 'code' ? '💻 CS201' : '∫ MTH301'}</div>
              <h2>{subject.title}</h2>
              <p>{subject.blurb}</p>
              <ul className="subject-extras">
                {subject.extras.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="muted">
                {progress.completedLectures.length}/{total} midterm lectures opened
                · {formatMinutes(hours[subject.id])} if she sits with all of them
              </p>
              <div className="term-actions">
                <Link className="btn" to={`/${subject.id}/mids`}>Open Mids</Link>
                {subject.finalsReady ? (
                  <Link className="btn ghost" to={`/${subject.id}/finals`}>Open Finals</Link>
                ) : (
                  <Link className="btn ghost" to={`/${subject.id}/finals`}>Finals — soon</Link>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
