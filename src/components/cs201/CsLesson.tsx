import { useState } from 'react'
import type { LessonDiagram, LessonStep, LessonTag, LessonTerm, TagKind } from '../../data/cs201/guide-types'

const TAG_LABEL: Record<TagKind, string> = {
  exam: 'Exam',
  trap: 'Trap',
  remember: 'Remember',
  new: 'New',
  vu: 'VU favourite',
  core: 'Core',
}

export function TopicTags({ tags }: { tags: LessonTag[] }) {
  return (
    <div className="meta lesson-tags">
      {tags.map((tag) => (
        <span key={tag.label} className={`chip tag-${tag.kind}`}>
          {tag.label}
        </span>
      ))}
    </div>
  )
}

export function Story({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="stack">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 48)} className="lesson-story">{p}</p>
      ))}
    </div>
  )
}

function TermCard({ term }: { term: LessonTerm }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`term-card ${open ? 'open' : ''}`}>
      <button type="button" className="term-head" onClick={() => setOpen((v) => !v)}>
        <span className={`chip tag-${term.tag}`}>{TAG_LABEL[term.tag]}</span>
        <h4>{term.name}</h4>
        <span className="term-toggle">{open ? 'Hide' : 'Explain this'}</span>
      </button>
      <p className="term-def"><strong>Meaning.</strong> {term.definition}</p>
      {open && (
        <div className="term-more">
          <p><strong>Like this.</strong> {term.likeThis}</p>
          <p><strong>Why it matters.</strong> {term.why}</p>
          {term.watch && <p className="term-watch"><strong>Watch.</strong> {term.watch}</p>}
        </div>
      )}
    </article>
  )
}

export function TermGrid({ terms }: { terms: LessonTerm[] }) {
  return (
    <div className="term-grid">
      {terms.map((term) => (
        <TermCard key={term.name} term={term} />
      ))}
    </div>
  )
}

function FlowDiagram({ steps, title, caption }: Extract<LessonDiagram, { kind: 'flow' }>) {
  return (
    <figure className="diagram">
      <figcaption>
        <h4>{title}</h4>
        <p>{caption}</p>
      </figcaption>
      <ol className="flow-steps">
        {steps.map((step, i) => (
          <li key={step.title}>
            <b>{step.title}</b>
            <span>{step.body}</span>
            {i < steps.length - 1 && <i aria-hidden="true">→</i>}
          </li>
        ))}
      </ol>
    </figure>
  )
}

function MemoryDiagram({ rows, title, caption }: Extract<LessonDiagram, { kind: 'memory' }>) {
  return (
    <figure className="diagram">
      <figcaption>
        <h4>{title}</h4>
        <p>{caption}</p>
      </figcaption>
      <div className="memory-wrap" aria-hidden="true">
        <svg viewBox="0 0 120 36" className="ram-chip">
          <rect x="2" y="6" width="116" height="24" rx="4" fill="#2a2118" />
          <rect x="8" y="11" width="104" height="14" rx="2" fill="#3d3226" />
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <rect key={n} x={14 + n * 16} y="14" width="10" height="8" rx="1" fill="#c9a227" opacity={0.35 + n * 0.08} />
          ))}
        </svg>
        <span>RAM — each row is one named box</span>
      </div>
      <table className="memory-table">
        <thead>
          <tr><th>Name</th><th>Address</th><th>Value</th></tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className={row.mark ? 'mark' : ''}>
              <td>{row.name}</td>
              <td><code>{row.address}</code></td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

function CompareDiagram({ title, caption, left, right }: Extract<LessonDiagram, { kind: 'compare' }>) {
  return (
    <figure className="diagram">
      <figcaption>
        <h4>{title}</h4>
        <p>{caption}</p>
      </figcaption>
      <div className="compare-grid">
        <div>
          <h5>{left.heading}</h5>
          <ul>{left.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h5>{right.heading}</h5>
          <ul>{right.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </figure>
  )
}

function BoxesDiagram({ title, caption, items }: Extract<LessonDiagram, { kind: 'boxes' }>) {
  return (
    <figure className="diagram">
      <figcaption>
        <h4>{title}</h4>
        <p>{caption}</p>
      </figcaption>
      <div className="locker-row">
        {items.map((item) => (
          <div key={item.label} className="locker">
            <span className="locker-label">{item.label}</span>
            <strong>{item.value}</strong>
            {item.note && <em>{item.note}</em>}
          </div>
        ))}
      </div>
    </figure>
  )
}

function CallDiagram({ title, caption, caller, callee, passing, returning }: Extract<LessonDiagram, { kind: 'call' }>) {
  return (
    <figure className="diagram">
      <figcaption>
        <h4>{title}</h4>
        <p>{caption}</p>
      </figcaption>
      <div className="call-row">
        <div className="call-box">{caller}</div>
        <div className="call-arrow">
          <span>{passing}</span>
          <b>↓ then ↑</b>
          <span>{returning}</span>
        </div>
        <div className="call-box accent">{callee}</div>
      </div>
    </figure>
  )
}

function PointerDiagram({ title, caption, boxName, boxValue, boxAddr, pointerName }: Extract<LessonDiagram, { kind: 'pointer' }>) {
  return (
    <figure className="diagram">
      <figcaption>
        <h4>{title}</h4>
        <p>{caption}</p>
      </figcaption>
      <div className="pointer-scene">
        <div className="house">
          <span className="addr">{boxAddr}</span>
          <strong>{boxName} = {boxValue}</strong>
          <em>the living value</em>
        </div>
        <div className="pointer-arrow" aria-hidden="true">
          <span>{pointerName} holds {boxAddr}</span>
          <svg viewBox="0 0 160 36" width="160" height="36">
            <defs>
              <marker id={`arrow-${pointerName}`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#8c3b55" />
              </marker>
            </defs>
            <line x1="8" y1="18" x2="148" y2="18" stroke="#8c3b55" strokeWidth="3" markerEnd={`url(#arrow-${pointerName})`} />
          </svg>
        </div>
        <div className="slip">
          <strong>{pointerName}</strong>
          <span>slip of paper</span>
          <em>*{pointerName} knocks on the house</em>
        </div>
      </div>
    </figure>
  )
}

export function Diagram({ diagram }: { diagram: LessonDiagram }) {
  switch (diagram.kind) {
    case 'flow':
      return <FlowDiagram {...diagram} />
    case 'memory':
      return <MemoryDiagram {...diagram} />
    case 'compare':
      return <CompareDiagram {...diagram} />
    case 'boxes':
      return <BoxesDiagram {...diagram} />
    case 'call':
      return <CallDiagram {...diagram} />
    case 'pointer':
      return <PointerDiagram {...diagram} />
  }
}

export function Walkthrough({ steps }: { steps: LessonStep[] }) {
  const [i, setI] = useState(0)
  const step = steps[i]
  return (
    <section className="walkthrough">
      <div className="walk-meta">
        <span>Step {i + 1} of {steps.length}</span>
        <div className="walk-dots" aria-hidden="true">
          {steps.map((_, n) => (
            <button key={n} type="button" className={n === i ? 'on' : n < i ? 'done' : ''} onClick={() => setI(n)} />
          ))}
        </div>
      </div>
      <h4>{step.title}</h4>
      <p>{step.body}</p>
      {step.code && <pre className="code-block">{step.code}</pre>}
      <div className="walk-nav">
        <button type="button" className="btn ghost small" disabled={i === 0} onClick={() => setI((n) => n - 1)}>
          Back
        </button>
        <button type="button" className="btn small" disabled={i === steps.length - 1} onClick={() => setI((n) => n + 1)}>
          {i === steps.length - 1 ? 'Done' : 'I get it — next'}
        </button>
      </div>
    </section>
  )
}
