# MTH301 Midterm Studio

Interactive Calculus 2 notes for Zainab — lectures, rendered equations, quizzes, and step-by-step practice. Built from the exported VU LMS cheat sheets.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Deploy on Vercel

1. Push this folder to a GitHub repository (or import the folder in the Vercel dashboard).
2. In [vercel.com](https://vercel.com), click **Add New → Project** and select that repo.
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
4. Deploy, then share the URL.

`vercel.json` already rewrites all routes to `index.html` so lecture links work on refresh.
