import { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { getGuide } from '../data/cs201/guides'
import { getStudyPlan } from '../data/studyPlans'
import { subjectProgress } from '../lib/progress'
import { FocusTimer } from './FocusTimer'
import { LoveBanner, LoveChip } from './LoveNote'

export interface NavItem {
  id: string
  number: string
  title: string
  minutes?: number
}

export function StudioLayout({
  subjectId,
  code,
  title,
  blurb,
  homeTo,
  items,
  extra,
}: {
  subjectId: string
  code: string
  title: string
  blurb: string
  homeTo: string
  items: NavItem[]
  extra?: { to: string; num: string; title: string }[]
}) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(() => subjectProgress(subjectId))

  useEffect(() => {
    setOpen(false)
    setProgress(subjectProgress(subjectId))
  }, [location.pathname, subjectId])

  useEffect(() => {
    const refresh = () => setProgress(subjectProgress(subjectId))
    window.addEventListener('vu-progress', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('vu-progress', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [subjectId])

  const lectureId = location.pathname.match(/\/lecture\/([^/?]+)/)?.[1]
  const current = items.find((item) => item.id === lectureId)
  const plan = lectureId ? getStudyPlan(subjectId, lectureId) : undefined
  const topicLove = subjectId === 'cs201' && lectureId ? getGuide(lectureId)?.love : undefined

  const done = progress.completedLectures.length
  const percent = useMemo(
    () => (items.length ? Math.round((done / items.length) * 100) : 0),
    [done, items.length],
  )

  return (
    <div className="app studio-right">
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
      <main className="main">
        <div className="topbar">
          <button className="menu-btn" onClick={() => setOpen(true)}>Lectures</button>
          <NavLink className="btn ghost small" to="/">All subjects</NavLink>
          <div className="topbar-right">
            <LoveChip />
            <FocusTimer
              suggestedMin={plan?.minutes}
              lectureLabel={current ? `Lecture ${current.number}` : `${code} studio`}
              lectureCue={plan?.cue}
            />
            <div className="progress-chip">
              <div className="progress-bar"><span style={{ width: `${percent}%` }} /></div>
              {done}/{items.length} lectures visited
            </div>
          </div>
        </div>
        <Outlet />
      </main>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-kicker">{code} · Midterm</div>
          <h1>{title}</h1>
          <p>{blurb}</p>
          <LoveBanner compact note={topicLove} />
        </div>
        <div className="nav-group">
          <div className="nav-label">Studio</div>
          <NavLink to={homeTo} end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-num">00</span>
            <span className="nav-title">Overview</span>
          </NavLink>
          {(extra ?? []).map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <span className="nav-num">{item.num}</span>
              <span className="nav-title">{item.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="nav-group">
          <div className="nav-label">Lectures</div>
          {items.map((item) => {
            const read = progress.completedLectures.includes(item.id)
            return (
              <NavLink
                key={item.id}
                to={`${homeTo}/lecture/${item.id}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-num">{item.number}</span>
                <span className="nav-title">
                  {item.title}
                  {item.minutes ? <em className="nav-time">{item.minutes} min</em> : null}
                </span>
                <span className={`nav-dot ${read ? 'done' : ''}`} />
              </NavLink>
            )
          })}
        </div>
      </aside>
    </div>
  )
}
