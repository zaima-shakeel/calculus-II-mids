import { StudioLayout } from '../../components/StudioLayout'
import { lectures } from '../../data/mth301/lectures'
import { getStudyPlan } from '../../data/studyPlans'

export function MathLayout() {
  return (
    <StudioLayout
      subjectId="mth301"
      code="MTH301"
      title="Calculus 2"
      blurb="Midterm notes with rendered equations, quizzes, and worked problems."
      homeTo="/mth301/mids"
      items={lectures.map((lecture) => ({
        id: lecture.id,
        number: lecture.number,
        title: lecture.shortTitle,
        minutes: getStudyPlan('mth301', lecture.id).minutes,
      }))}
      extra={[
        { to: '/mth301/mids/quizzes', num: 'Q', title: 'All quizzes' },
        { to: '/mth301/mids/cram', num: '5', title: 'Cram cards' },
      ]}
    />
  )
}
