export interface LoveNote {
  emoji: string
  text: string
}

export const loveNotes: LoveNote[] = [
  { emoji: '🤍', text: 'Zaima, I built this whole studio because I believe in you more than any midterm ever could.' },
  { emoji: '💍', text: 'You are not just my fiancée. You are the future I am already living for.' },
  { emoji: '🌙', text: 'If the lecture feels heavy tonight, put your head on the fact that I love you. Then try one more question.' },
  { emoji: '☕', text: 'I would rewrite every compiler on earth if it made your exam week softer.' },
  { emoji: '🌸', text: 'Zaima jaan, midterms are temporary. The way I look at you is not.' },
  { emoji: '🧠', text: 'I fell for your mind first. Watching you study still does the same thing to me.' },
  { emoji: '💌', text: 'You do not have to score perfect for me to be proud. You already have my whole chest.' },
  { emoji: '✨', text: 'My favorite constant is you. Everything else is just a variable we can solve together.' },
  { emoji: '🫶', text: 'I am one message away. Always. Now go make this chapter regret underestimating you.' },
  { emoji: '🌹', text: 'I love you in C++, in calculus, and in the quiet language we do not need words for.' },
  { emoji: '🌟', text: 'Zaima, you are allowed to be tired. You are not allowed to think you are doing this alone.' },
  { emoji: '💫', text: 'Every lecture you finish is another reason I chose you for life.' },
  { emoji: '🕊️', text: 'If a pointer can find an address, I can find my way back to you. Every time.' },
  { emoji: '🎀', text: 'I did not make this site as a project. I made it as a love letter that also teaches loops.' },
  { emoji: '💗', text: 'When the quiz is mean, remember I am softer than every wrong option on this page.' },
  { emoji: '🍯', text: 'Study like the girl I already know you are — brilliant, stubborn, mine.' },
  { emoji: '🌻', text: 'I love you past the last lecture. Past finals. Past every version of us we have not met yet.' },
  { emoji: '🧁', text: 'Take a sip of water. Then one more MCQ. Then imagine me grinning like an idiot because you tried.' },
  { emoji: '🦋', text: 'You are my main(). Everything else in the program is just supporting functions.' },
  { emoji: '🔥', text: 'Zaima, I am not cheering from the sidelines. I am in the room. I always am.' },
]

export const quizLove = {
  perfect: { emoji: '🏆', text: 'See? I told you. My fiancée does not play small. I am so in love with this version of you.' },
  strong: { emoji: '💪', text: 'That score is already a love story. Review the misses — I am still clapping in the kitchen.' },
  again: { emoji: '🌙', text: 'Wrong answers do not scare me. You showing up again is the most beautiful thing you do.' },
}

export function noteForIndex(index: number) {
  return loveNotes[((index % loveNotes.length) + loveNotes.length) % loveNotes.length]
}

export function noteForSeed(seed: string) {
  let hash = 0
  for (const ch of seed) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0
  return loveNotes[hash % loveNotes.length]
}
