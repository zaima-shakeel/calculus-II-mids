import { Navigate, Route, Routes } from 'react-router-dom'
import { ComingSoon } from './pages/ComingSoon'
import { Landing } from './pages/Landing'
import { CsHome } from './pages/cs201/CsHome'
import { CsLab } from './pages/cs201/CsLab'
import { CsLayout } from './pages/cs201/CsLayout'
import { CsLecturePage } from './pages/cs201/CsLecturePage'
import { CsQuizzes } from './pages/cs201/CsQuizzes'
import { CramPage } from './pages/mth301/CramPage'
import { Home as MathHome } from './pages/mth301/Home'
import { LecturePage as MathLecturePage } from './pages/mth301/LecturePage'
import { MathLayout } from './pages/mth301/MathLayout'
import { QuizHub as MathQuizzes } from './pages/mth301/QuizHub'

export default function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path=":subjectId/finals" element={<ComingSoon />} />

      <Route path="cs201/mids" element={<CsLayout />}>
        <Route index element={<CsHome />} />
        <Route path="lecture/:id" element={<CsLecturePage />} />
        <Route path="lab" element={<CsLab />} />
        <Route path="quizzes" element={<CsQuizzes />} />
      </Route>

      <Route path="mth301/mids" element={<MathLayout />}>
        <Route index element={<MathHome />} />
        <Route path="lecture/:id" element={<MathLecturePage />} />
        <Route path="quizzes" element={<MathQuizzes />} />
        <Route path="cram" element={<CramPage />} />
      </Route>

      <Route path="lecture/:id" element={<Navigate to="/mth301/mids" replace />} />
      <Route path="quizzes" element={<Navigate to="/mth301/mids/quizzes" replace />} />
      <Route path="cram" element={<Navigate to="/mth301/mids/cram" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
