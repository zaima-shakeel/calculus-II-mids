import { useEffect, useRef, useState } from 'react'
import { focusLines } from '../data/studyPlans'
import {
  FOCUS_EVENT,
  chime,
  finishFocus,
  formatClock,
  liveRemaining,
  markAway,
  pauseFocus,
  readFocus,
  resetFocus,
  resumeFocus,
  startFocus,
  type FocusSession,
} from '../lib/focusSession'

const presets = [
  { min: 15, label: '15' },
  { min: 25, label: '25' },
  { min: 50, label: '50' },
]

export function FocusTimer({
  suggestedMin,
  lectureLabel,
  lectureCue,
}: {
  suggestedMin?: number
  lectureLabel?: string
  lectureCue?: string
}) {
  const [session, setSession] = useState<FocusSession>(() => readFocus())
  const [now, setNow] = useState(() => Date.now())
  const [open, setOpen] = useState(false)
  const [line, setLine] = useState(0)
  const [returned, setReturned] = useState(false)
  const [ready, setReady] = useState({ phone: false, water: false, page: false })
  const chimed = useRef(false)

  useEffect(() => {
    const sync = () => setSession(readFocus())
    window.addEventListener(FOCUS_EVENT, sync)
    return () => window.removeEventListener(FOCUS_EVENT, sync)
  }, [])

  useEffect(() => {
    if (!session.running) return
    const id = window.setInterval(() => setNow(Date.now()), 250)
    return () => window.clearInterval(id)
  }, [session.running])

  const remaining = liveRemaining(session, now)

  useEffect(() => {
    if (remaining > 0) chimed.current = false
    if (!session.running || remaining > 0 || chimed.current) return
    chimed.current = true
    finishFocus()
    chime()
    setOpen(true)
  }, [session.running, remaining])

  useEffect(() => {
    if (!session.running) return
    const id = window.setInterval(() => setLine((n) => n + 1), 20000)
    return () => window.clearInterval(id)
  }, [session.running])

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        markAway()
        return
      }
      const current = readFocus()
      if (current.awayCount > 0 && current.running) setReturned(true)
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useEffect(() => {
    const idleTitle = 'For Zaima · VU Study Studio'
    if (!session.running) {
      document.title = idleTitle
      return
    }
    document.title = `${formatClock(remaining)} · ${session.label}`
    return () => {
      document.title = idleTitle
    }
  }, [remaining, session.label, session.running])

  const done = !session.running && remaining === 0 && session.endsAt === null && session.presetMin > 0
    && session.remainingMs === 0

  const cue = lectureCue ?? focusLines[line % focusLines.length]
  const sitLabel = lectureLabel ?? 'This sitting'

  return (
    <div className="focus-wrap">
      <button
        type="button"
        className={`focus-chip ${session.running ? 'running' : ''} ${done ? 'done' : ''}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="focus-clock">{formatClock(remaining)}</span>
        <em>{session.running ? (session.mode === 'break' ? 'rest' : 'focus') : 'timer'}</em>
      </button>
      {open && (
        <aside className="focus-panel">
          <div className="focus-panel-head">
            <h4>{session.mode === 'break' ? 'Air, then back' : 'Stay in the room'}</h4>
            <button type="button" className="focus-close" onClick={() => setOpen(false)}>Close</button>
          </div>
          <p className="focus-label">{session.running ? session.label : sitLabel}</p>
          <div className="focus-big">{formatClock(remaining)}</div>
          {returned && session.awayCount > 0 && (
            <p className="focus-nudge">
              Welcome back. You wandered {session.awayCount === 1 ? 'once' : `${session.awayCount} times`}.
              The chair stayed warm.
            </p>
          )}
          {done && (
            <p className="focus-nudge done">
              {session.mode === 'break'
                ? 'Rest is over. One more sitting whenever you are ready.'
                : 'That sitting is done. Five minutes of air, then come back to me.'}
            </p>
          )}
          <p className="focus-cue">{session.running || done ? cue : 'Pick a length. Phone down. Then begin.'}</p>
          <div className="focus-presets">
            {presets.map((preset) => (
              <button
                key={preset.min}
                type="button"
                className={`btn ghost small ${session.presetMin === preset.min && session.mode === 'focus' ? 'on' : ''}`}
                onClick={() => startFocus(preset.min, sitLabel)}
              >
                {preset.label} min
              </button>
            ))}
            {suggestedMin ? (
              <button
                type="button"
                className="btn ghost small"
                onClick={() => startFocus(suggestedMin, sitLabel)}
              >
                Full {suggestedMin}m
              </button>
            ) : null}
            <button
              type="button"
              className="btn ghost small"
              onClick={() => startFocus(5, 'Five minutes of air', 'break')}
            >
              5 rest
            </button>
          </div>
          <div className="focus-actions">
            {session.running ? (
              <button type="button" className="btn" onClick={pauseFocus}>Pause</button>
            ) : remaining > 0 ? (
              <button type="button" className="btn" onClick={resumeFocus}>
                {session.remainingMs === session.presetMin * 60 * 1000 ? 'Start' : 'Resume'}
              </button>
            ) : (
              <button type="button" className="btn" onClick={() => startFocus(25, sitLabel)}>
                Another 25
              </button>
            )}
            <button type="button" className="btn ghost" onClick={() => { resetFocus(); setReturned(false) }}>
              Reset
            </button>
          </div>
          <ul className="focus-ready">
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={ready.phone}
                  onChange={(event) => setReady((value) => ({ ...value, phone: event.target.checked }))}
                />
                Phone face down
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={ready.water}
                  onChange={(event) => setReady((value) => ({ ...value, water: event.target.checked }))}
                />
                Water beside you
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={ready.page}
                  onChange={(event) => setReady((value) => ({ ...value, page: event.target.checked }))}
                />
                Only this lecture
              </label>
            </li>
          </ul>
        </aside>
      )}
    </div>
  )
}
