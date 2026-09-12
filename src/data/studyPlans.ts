export interface StudySlice {
  label: string
  minutes: number
}

export interface StudyPlan {
  minutes: number
  slices: StudySlice[]
  cue: string
}

const csPlans: Record<string, StudyPlan> = {
  'cs-l01': {
    minutes: 20,
    slices: [
      { label: 'Notes', minutes: 10 },
      { label: 'Quiz', minutes: 5 },
      { label: 'Code', minutes: 5 },
    ],
    cue: 'Read the recipe twice. Do not open the lab until you can say what a program is out loud.',
  },
  'cs-l02': {
    minutes: 20,
    slices: [
      { label: 'Notes', minutes: 10 },
      { label: 'Quiz', minutes: 5 },
      { label: 'Code', minutes: 5 },
    ],
    cue: 'Name compiler, linker, and IDE once without looking. Skip the lecture video.',
  },
  'cs-l03': {
    minutes: 30,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 7 },
    ],
    cue: 'Type the first program yourself. Copy-paste teaches nothing today.',
  },
  'cs-l04': {
    minutes: 25,
    slices: [
      { label: 'Notes', minutes: 12 },
      { label: 'Quiz', minutes: 7 },
      { label: 'Code', minutes: 6 },
    ],
    cue: 'Work one expression on paper before you look at the notes again.',
  },
  'cs-l05': {
    minutes: 30,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 7 },
    ],
    cue: 'Draw the two doors. Then write the if. = is not == — say it once.',
  },
  'cs-l06': {
    minutes: 30,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 7 },
    ],
    cue: 'Trace one while-loop by hand. Three rows in a notebook is enough.',
  },
  'cs-l07': {
    minutes: 30,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 7 },
    ],
    cue: 'Write for and while side by side. Then find the deadly extra semicolon.',
  },
  'cs-l08': {
    minutes: 25,
    slices: [
      { label: 'Notes', minutes: 12 },
      { label: 'Quiz', minutes: 7 },
      { label: 'Code', minutes: 6 },
    ],
    cue: 'Hunt the missing break. Fall-through is the exam, not the story.',
  },
  'cs-l09': {
    minutes: 30,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 7 },
    ],
    cue: 'Write the function on paper first. main() only asks; the helper does the work.',
  },
  'cs-l10': {
    minutes: 30,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 7 },
    ],
    cue: 'Trace call-by-value with two boxes. The original n does not change.',
  },
  'cs-l11': {
    minutes: 35,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 10 },
      { label: 'Code', minutes: 10 },
    ],
    cue: 'Indexes start at 0. Say it out loud, then walk one linear search slowly.',
  },
  'cs-l12': {
    minutes: 35,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 10 },
      { label: 'Code', minutes: 10 },
    ],
    cue: 'Draw the 2×2 grid before the nested loop. Row first, then column.',
  },
  'cs-l13': {
    minutes: 35,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 10 },
      { label: 'Code', minutes: 10 },
    ],
    cue: 'Finish one 2D problem fully. Three half-done grids will not hold in an exam.',
  },
  'cs-l14': {
    minutes: 40,
    slices: [
      { label: 'Notes', minutes: 20 },
      { label: 'Quiz', minutes: 10 },
      { label: 'Code', minutes: 10 },
    ],
    cue: 'Draw the house and the slip before you read the pointer notes.',
  },
  'cs-l15': {
    minutes: 40,
    slices: [
      { label: 'Notes', minutes: 20 },
      { label: 'Quiz', minutes: 10 },
      { label: 'Code', minutes: 10 },
    ],
    cue: 'Walk the array with your finger, then with the pointer. Same cells, new name.',
  },
  'cs-l16': {
    minutes: 40,
    slices: [
      { label: 'Notes', minutes: 20 },
      { label: 'Quiz', minutes: 10 },
      { label: 'Code', minutes: 10 },
    ],
    cue: 'Two stars means two hops. Draw x ← p ← q before you read further.',
  },
  'cs-l17': {
    minutes: 30,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 7 },
    ],
    cue: 'strlen, strcpy, strcmp — write one honest use of each, then close the notes.',
  },
  'cs-l18': {
    minutes: 35,
    slices: [
      { label: 'Notes', minutes: 15 },
      { label: 'Quiz', minutes: 8 },
      { label: 'Code', minutes: 12 },
    ],
    cue: 'Learn the idea here. File programs still need a PC later — do not panic about the browser.',
  },
}

const mathPlans: Record<string, StudyPlan> = {
  'l1-2': {
    minutes: 70,
    slices: [
      { label: 'Notes', minutes: 30 },
      { label: 'Examples', minutes: 25 },
      { label: 'Quiz', minutes: 15 },
    ],
    cue: 'One input, one output. Sketch two graphs before you touch a limit.',
  },
  l3: {
    minutes: 55,
    slices: [
      { label: 'Notes', minutes: 25 },
      { label: 'Examples', minutes: 18 },
      { label: 'Quiz', minutes: 12 },
    ],
    cue: 'Label x, y, z on a box. Distance formulas wait until the picture is there.',
  },
  l4: {
    minutes: 60,
    slices: [
      { label: 'Notes', minutes: 25 },
      { label: 'Examples', minutes: 20 },
      { label: 'Quiz', minutes: 15 },
    ],
    cue: 'Convert one point polar → cartesian by hand. Then a second one without notes.',
  },
  l5: {
    minutes: 75,
    slices: [
      { label: 'Notes', minutes: 30 },
      { label: 'Examples', minutes: 30 },
      { label: 'Quiz', minutes: 15 },
    ],
    cue: 'Two paths for every suspicious limit. Do not skip the second path.',
  },
  l6: {
    minutes: 70,
    slices: [
      { label: 'Notes', minutes: 28 },
      { label: 'Examples', minutes: 27 },
      { label: 'Quiz', minutes: 15 },
    ],
    cue: 'Partial means the other variable is a statue. Say that, then differentiate.',
  },
  l7: {
    minutes: 55,
    slices: [
      { label: 'Notes', minutes: 22 },
      { label: 'Examples', minutes: 20 },
      { label: 'Quiz', minutes: 13 },
    ],
    cue: 'Picture the slice of the surface first. The derivative is just that slope.',
  },
  l8: {
    minutes: 70,
    slices: [
      { label: 'Notes', minutes: 25 },
      { label: 'Examples', minutes: 30 },
      { label: 'Quiz', minutes: 15 },
    ],
    cue: 'Chain-rule tree first. Ink the branches, then differentiate.',
  },
  l9: {
    minutes: 75,
    slices: [
      { label: 'Notes', minutes: 28 },
      { label: 'Examples', minutes: 30 },
      { label: 'Quiz', minutes: 17 },
    ],
    cue: 'Same tree, more variables. Slow is faster than restarting the lecture.',
  },
  l10: {
    minutes: 50,
    slices: [
      { label: 'Notes', minutes: 22 },
      { label: 'Examples', minutes: 16 },
      { label: 'Quiz', minutes: 12 },
    ],
    cue: 'Magnitude and direction on paper. One vector, fully, before the next formula.',
  },
  l12: {
    minutes: 65,
    slices: [
      { label: 'Notes', minutes: 25 },
      { label: 'Examples', minutes: 25 },
      { label: 'Quiz', minutes: 15 },
    ],
    cue: 'Point plus normal. Write both before you compute the plane.',
  },
  l13: {
    minutes: 70,
    slices: [
      { label: 'Notes', minutes: 28 },
      { label: 'Examples', minutes: 27 },
      { label: 'Quiz', minutes: 15 },
    ],
    cue: 'A differential is a tiny change. Do not call it a slope until the example asks.',
  },
  l14: {
    minutes: 75,
    slices: [
      { label: 'Notes', minutes: 28 },
      { label: 'Examples', minutes: 30 },
      { label: 'Quiz', minutes: 17 },
    ],
    cue: 'Critical points: both partials zero. Solve the system on paper, not in your head.',
  },
  l15: {
    minutes: 80,
    slices: [
      { label: 'Notes', minutes: 30 },
      { label: 'Examples', minutes: 32 },
      { label: 'Quiz', minutes: 18 },
    ],
    cue: 'Fill the second-derivative test table once. Then a second point without peeking.',
  },
  l16: {
    minutes: 70,
    slices: [
      { label: 'Notes', minutes: 25 },
      { label: 'Examples', minutes: 28 },
      { label: 'Quiz', minutes: 17 },
    ],
    cue: 'Closed region. Check the boundary. Always. Interior extrema are only half the story.',
  },
  'l18-19': {
    minutes: 90,
    slices: [
      { label: 'Notes', minutes: 35 },
      { label: 'Examples', minutes: 35 },
      { label: 'Quiz', minutes: 20 },
    ],
    cue: 'Inner integral first. Write the limits twice before you integrate anything.',
  },
}

const fallback: StudyPlan = {
  minutes: 60,
  slices: [
    { label: 'Notes', minutes: 25 },
    { label: 'Practice', minutes: 20 },
    { label: 'Quiz', minutes: 15 },
  ],
  cue: 'One sitting. Write something before you rewind.',
}

export const focusRituals = [
  'Phone face down. WhatsApp can wait for the chime.',
  'Water first. Then the first takeaway — not the next reel.',
  'If it feels sticky, that is the mark. Stay one more minute.',
]

export const focusLines = [
  'One lecture. Not a scroll. I am already proud that you sat down.',
  'Write before you rewind. The page remembers better than the video.',
  'You do not have to finish pretty. You have to start.',
  'If you wander, come back without guilt. Restart the twenty-five.',
  'This room stays on. You only have to stay with this page.',
]

export function getStudyPlan(subjectId: string, lectureId: string): StudyPlan {
  const map = subjectId === 'cs201' ? csPlans : mathPlans
  return map[lectureId] ?? fallback
}

export function subjectStudyMinutes(subjectId: string, lectureIds: string[]) {
  return lectureIds.reduce((sum, id) => sum + getStudyPlan(subjectId, id).minutes, 0)
}

export function formatMinutes(minutes: number) {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours}h ${rest}m` : `${hours}h`
}
