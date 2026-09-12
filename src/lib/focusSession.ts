const KEY = 'vu-focus-session'
export const FOCUS_EVENT = 'vu-focus'

export type FocusMode = 'focus' | 'break'

export interface FocusSession {
  running: boolean
  mode: FocusMode
  presetMin: number
  remainingMs: number
  endsAt: number | null
  label: string
  awayCount: number
}

const idle = (): FocusSession => ({
  running: false,
  mode: 'focus',
  presetMin: 25,
  remainingMs: 25 * 60 * 1000,
  endsAt: null,
  label: 'A quiet twenty-five',
  awayCount: 0,
})

function parse(raw: string | null): FocusSession {
  if (!raw) return idle()
  try {
    return { ...idle(), ...JSON.parse(raw) as Partial<FocusSession> }
  } catch {
    return idle()
  }
}

export function readFocus(): FocusSession {
  try {
    return parse(sessionStorage.getItem(KEY))
  } catch {
    return idle()
  }
}

export function writeFocus(next: FocusSession) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // private mode can block sessionStorage
  }
  window.dispatchEvent(new Event(FOCUS_EVENT))
}

export function liveRemaining(session: FocusSession, now = Date.now()) {
  if (session.running && session.endsAt) return Math.max(0, session.endsAt - now)
  return Math.max(0, session.remainingMs)
}

export function startFocus(presetMin: number, label: string, mode: FocusMode = 'focus') {
  const remainingMs = presetMin * 60 * 1000
  writeFocus({
    running: true,
    mode,
    presetMin,
    remainingMs,
    endsAt: Date.now() + remainingMs,
    label,
    awayCount: 0,
  })
}

export function pauseFocus() {
  const session = readFocus()
  writeFocus({
    ...session,
    running: false,
    remainingMs: liveRemaining(session),
    endsAt: null,
  })
}

export function resumeFocus() {
  const session = readFocus()
  const remainingMs = liveRemaining(session)
  if (remainingMs <= 0) return
  writeFocus({
    ...session,
    running: true,
    remainingMs,
    endsAt: Date.now() + remainingMs,
  })
}

export function resetFocus() {
  const session = readFocus()
  writeFocus({
    ...idle(),
    presetMin: session.presetMin,
    remainingMs: session.presetMin * 60 * 1000,
    label: session.label,
  })
}

export function markAway() {
  const session = readFocus()
  if (!session.running || session.mode !== 'focus') return
  writeFocus({ ...session, awayCount: session.awayCount + 1 })
}

export function finishFocus() {
  const session = readFocus()
  writeFocus({
    ...session,
    running: false,
    remainingMs: 0,
    endsAt: null,
  })
}

export function formatClock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000))
  const minutes = Math.floor(total / 60)
  const seconds = total % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function chime() {
  try {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = 528
    gain.gain.value = 0.05
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45)
    osc.stop(ctx.currentTime + 0.5)
  } catch {
    // audio is optional
  }
}
