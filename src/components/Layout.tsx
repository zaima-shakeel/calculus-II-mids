import { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { lectures } from '../data/lectures'
import { loadProgress } from '../lib/progress'

export function Layout() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    setOpen(false)
    setProgress(loadProgress())
  }, [location.pathname])

  useEffect(() => {
    const refresh = () => setProgress(loadProgress())
    window.addEventListener('mth301-progress', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('mth301-progress', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  const done = progress.completedLectures.length
  const percent = useMemo(
    () => Math.round((done / lectures.length) * 100),
    [done],
  )

  return (
    <div className="app">
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-kicker">MTH301 · Calculus 2</div>
          <h1>Midterm Studio</h1>
          <p>Notes, quizzes, and worked problems for Zainab.</p>
        </div>

        <div className="nav-group">
          <div className="nav-label">Studio</div>
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-num">00</span>
            <span className="nav-title">Home</span>
          </NavLink>
          <NavLink to="/quizzes" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-num">Q</span>
            <span className="nav-title">All quizzes</span>
          </NavLink>
          <NavLink to="/cram" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-num">5</span>
            <span className="nav-title">Cram cards</span>
          </NavLink>
        </div>

        <div className="nav-group">
          <div className="nav-label">Lectures</div>
          {lectures.map((lecture) => {
            const read = progress.completedLectures.includes(lecture.id)
            return (
              <NavLink
                key={lecture.id}
                to={`/lecture/${lecture.id}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-num">{lecture.number}</span>
                <span className="nav-title">{lecture.shortTitle}</span>
                <span className={`nav-dot ${read ? 'done' : ''}`} />
              </NavLink>
            )
          })}
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <button className="menu-btn" onClick={() => setOpen(true)}>Lectures</button>
          <div className="progress-chip">
            <div className="progress-bar"><span style={{ width: `${percent}%` }} /></div>
            {done}/{lectures.length} lectures visited
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  )
}
