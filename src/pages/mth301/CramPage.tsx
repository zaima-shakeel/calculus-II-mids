import { Link } from 'react-router-dom'
import { LoveCard } from '../../components/LoveNote'
import { MathText } from '../../components/MathText'
import { lectures } from '../../data/mth301/lectures'

export function CramPage() {
  return (
    <article>
      <div className="lede">
        <h2>Cram cards</h2>
        <p className="overview">
          If time is short, use these 5 / 15 / 30 minute plans. They come straight from the
          “midterm priority” section of each lecture. Five minutes with these cards still counts, my love 🌙
        </p>
        <LoveCard seed="mth301-cram" />
      </div>
      <div className="stack">
        {lectures.map((lecture) => (
          <section key={lecture.id} className="cram">
            <div className="meta" style={{ marginBottom: 8 }}>
              <span className="chip">Lecture {lecture.number}</span>
            </div>
            <h4 style={{ fontFamily: 'var(--serif)', margin: '0 0 8px', fontSize: 22 }}>{lecture.title}</h4>
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
            <div style={{ marginTop: 12 }}>
              <Link className="btn ghost small" to={`/mth301/mids/lecture/${lecture.id}`}>Open lecture</Link>
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
