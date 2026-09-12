import { CppEditor } from '../../components/CppEditor'
import { LoveCard } from '../../components/LoveNote'

export function CsLab() {
  return (
    <article>
      <div className="lede">
        <h2>C++ lab 💻💗</h2>
        <p className="overview">
          Compile and run C++ here with g++ 13 (C++17). Prefer <code>iostream</code>,
          <code>using namespace std;</code>, and <code>int main()</code>. The VU handout’s older
          <code>iostream.h</code> style will not compile here.
        </p>
      </div>
      <section className="practice">
        <h4>Scratch pad</h4>
        <p className="muted">Use Standard input for anything you would type after cin.</p>
        <CppEditor />
      </section>
      <LoveCard seed="cs201-lab" />
    </article>
  )
}
