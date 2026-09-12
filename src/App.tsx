import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CramPage } from './pages/CramPage'
import { Home } from './pages/Home'
import { LecturePage } from './pages/LecturePage'
import { QuizHub } from './pages/QuizHub'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lecture/:id" element={<LecturePage />} />
        <Route path="quizzes" element={<QuizHub />} />
        <Route path="cram" element={<CramPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
