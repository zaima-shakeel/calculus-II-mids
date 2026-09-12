import { useEffect, useState } from 'react'
import { loveNotes, noteForIndex, noteForSeed, type LoveNote as LoveNoteData } from '../data/loveNotes'

export function HeartsBackdrop() {
  const marks = ['💗', '✨', '🤍', '🌸', '💍', '💫', '🌹']
  return (
    <div className="hearts-bg" aria-hidden="true">
      {marks.map((mark, i) => (
        <span key={mark + i} className={`float-heart h${i}`}>{mark}</span>
      ))}
    </div>
  )
}

export function LoveBanner({ note, compact }: { note?: LoveNoteData; compact?: boolean }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setI((n) => n + 1), 9000)
    return () => window.clearInterval(id)
  }, [])
  const shown = note ?? noteForIndex(i)
  return (
    <aside className={`love-banner ${compact ? 'compact' : ''}`}>
      <span className="love-emoji">{shown.emoji}</span>
      <div>
        <p>{shown.text}</p>
        <cite>— Marsad, yours</cite>
      </div>
    </aside>
  )
}

export function LoveCard({
  seed,
  note,
  className = '',
}: {
  seed?: string
  note?: LoveNoteData
  className?: string
}) {
  const shown = note ?? noteForSeed(seed ?? 'love')
  return (
    <aside className={`love-card ${className}`}>
      <span className="love-emoji">{shown.emoji}</span>
      <p>{shown.text}</p>
      <cite>with all my chest, Marsad</cite>
    </aside>
  )
}

export function LoveChip() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setI((n) => n + 1), 7000)
    return () => window.clearInterval(id)
  }, [])
  const note = loveNotes[i % loveNotes.length]
  return (
    <div className="love-chip" title={note.text}>
      <span>{note.emoji}</span>
      <em>for Zaima</em>
    </div>
  )
}

export function LoveStrip() {
  const line = loveNotes.map((n) => `${n.emoji}  ${n.text}`).join('   ·   ')
  return (
    <div className="love-strip" aria-hidden="true">
      <div className="love-strip-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}
