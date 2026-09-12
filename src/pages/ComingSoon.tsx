import { Link, useParams } from 'react-router-dom'
import { HeartsBackdrop, LoveBanner } from '../components/LoveNote'
import { subjects } from '../data/catalog'

export function ComingSoon() {
  const { subjectId = '' } = useParams()
  const subject = subjects.find((item) => item.id === subjectId)

  return (
    <div className="landing">
      <HeartsBackdrop />
      <header className="landing-top">
        <div className="brand-kicker">{subject?.code ?? subjectId} · Finals 💌</div>
        <h1>Finals can wait. I already saved you a seat.</h1>
        <p>
          Zaima, midterm lectures are live. When finals come, I will fill this room the
          same way — because I am not letting you walk into any exam alone 🤍
        </p>
        <LoveBanner />
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link className="btn" to={`/${subjectId}/mids`}>Back to mids</Link>
          <Link className="btn ghost" to="/">All subjects</Link>
        </div>
      </header>
    </div>
  )
}
