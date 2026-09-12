import { StudioLayout } from '../../components/StudioLayout'
import { csLectures } from '../../data/cs201/lectures'

export function CsLayout() {
  return (
    <StudioLayout
      subjectId="cs201"
      code="CS201"
      title="Programming"
      blurb="Lectures 1–18 from the VU playlist, with quizzes and a C++ lab."
      homeTo="/cs201/mids"
      items={csLectures.map((lecture) => ({
        id: lecture.id,
        number: lecture.number,
        title: lecture.shortTitle,
      }))}
      extra={[
        { to: '/cs201/mids/lab', num: 'C++', title: 'C++ lab' },
        { to: '/cs201/mids/quizzes', num: 'Q', title: 'All quizzes' },
      ]}
    />
  )
}
