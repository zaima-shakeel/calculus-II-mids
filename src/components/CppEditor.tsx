import { useEffect, useState } from 'react'
import { normalizeOutput, runCpp } from '../lib/piston'

const DEFAULT = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Zaima";
    return 0;
}
`

export function CppEditor({
  initial = DEFAULT,
  stdin: initialStdin = '',
  expected,
  onPassed,
}: {
  initial?: string
  stdin?: string
  expected?: string
  onPassed?: () => void
}) {
  const [code, setCode] = useState(initial)
  const [stdin, setStdin] = useState(initialStdin)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<string>('')
  const [kind, setKind] = useState<'idle' | 'ok' | 'bad'>('idle')

  useEffect(() => {
    setCode(initial)
    setStdin(initialStdin)
    setResult('')
    setKind('idle')
  }, [initial, initialStdin])

  async function run() {
    setBusy(true)
    setKind('idle')
    setResult('Running…')
    try {
      const out = await runCpp(code, stdin)
      if (out.compile) {
        setKind('bad')
        setResult(out.compile)
        return
      }
      if (out.stderr) {
        setKind('bad')
        setResult(out.stderr)
        return
      }
      const got = normalizeOutput(out.stdout)
      if (expected != null) {
        const want = normalizeOutput(expected)
        if (got === want) {
          setKind('ok')
          setResult(got || '(no output, but tests passed)')
          onPassed?.()
        } else {
          setKind('bad')
          setResult(`Your output:\n${got || '(empty)'}\n\nExpected:\n${want}`)
        }
      } else {
        setKind('ok')
        setResult(got || '(no output)')
      }
    } catch (error) {
      setKind('bad')
      setResult(error instanceof Error ? error.message : 'Could not run the program.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="editor">
      <textarea
        className="code-input"
        spellCheck={false}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="editor-side">
        <label>
          Standard input
          <textarea
            className="stdin"
            spellCheck={false}
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            placeholder="Values for cin, one per line or separated by spaces"
          />
        </label>
        <button className="btn" disabled={busy} onClick={run}>
          {busy ? 'Running…' : expected ? 'Run tests' : 'Run C++'}
        </button>
        {result && (
          <pre className={`run-out ${kind}`}>{result}</pre>
        )}
      </div>
    </div>
  )
}
