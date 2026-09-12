import { focusRituals, formatMinutes, type StudyPlan } from '../data/studyPlans'
import { startFocus } from '../lib/focusSession'

export function StudyPlanCard({
  plan,
  label,
}: {
  plan: StudyPlan
  label: string
}) {
  return (
    <section className="study-plan">
      <div className="study-plan-top">
        <div>
          <div className="eyebrow">Time for this sitting</div>
          <h3>{formatMinutes(plan.minutes)}</h3>
          <p className="muted">Notes, quiz, and practice only — no video time in this number.</p>
        </div>
        <button className="btn" type="button" onClick={() => startFocus(25, label)}>
          Start 25-min sit
        </button>
      </div>
      <div className="study-slices">
        {plan.slices.map((slice) => (
          <div key={slice.label} className="study-slice">
            <b>{slice.minutes}m</b>
            <span>{slice.label}</span>
          </div>
        ))}
      </div>
      <div className="focus-list">
        <h4>Keep her here</h4>
        <ol>
          {focusRituals.map((item) => <li key={item}>{item}</li>)}
          <li>{plan.cue}</li>
        </ol>
      </div>
    </section>
  )
}

export function TimeChip({ minutes }: { minutes: number }) {
  return <span className="chip time">{formatMinutes(minutes)}</span>
}
