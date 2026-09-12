# VU Study Studio

A two-subject midterm site for Zainab:

- **CS201** Introduction to Programming — lectures 1–18 from the [VU playlist](https://www.youtube.com/playlist?list=PLKyB9RYzaFRiuBRJQyTTnl4d4UGYS2rR4) and the official handout, plus a browser C++ lab
- **MTH301** Calculus 2 — rendered notes, quizzes, and worked problems

Finals rooms are stubbed for later.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

Import the GitHub repo. Framework **Vite**, build `npm run build`, output `dist`.

## Folder map

```
src/data/cs201      CS201 lecture notes and quizzes
src/data/mth301     MTH301 lecture notes and quizzes
src/pages/cs201     CS201 screens + C++ lab
src/pages/mth301    Calculus screens
```
