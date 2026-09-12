const COMPILER = 'g132'
const SAME_ORIGIN = '/api/cpp'
const GODBOLT = `https://godbolt.org/api/compiler/${COMPILER}/compile`

type TextLine = { text?: string }

function joinLines(lines?: TextLine[]) {
  return (lines ?? []).map((line) => line.text ?? '').join('\n')
}

function payload(code: string, stdin: string) {
  return {
    source: code,
    options: {
      userArguments: '-std=c++17 -O2',
      executeParameters: { args: [], stdin },
      compilerOptions: { executorRequest: true },
      filters: { execute: true },
    },
  }
}

async function postCompile(url: string, code: string, stdin: string) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload(code, stdin)),
    signal: AbortSignal.timeout(25000),
  })

  const text = await res.text()
  if (!res.ok) {
    throw new Error(`Runner HTTP ${res.status}`)
  }
  if (!text || text.trimStart().startsWith('<')) {
    throw new Error('Runner returned a page instead of a compile result')
  }

  try {
    return JSON.parse(text)
  } catch {
    throw new Error('Runner returned an unreadable response')
  }
}

export interface RunResult {
  stdout: string
  stderr: string
  compile: string
  ok: boolean
}

export async function runCpp(code: string, stdin = ''): Promise<RunResult> {
  let data
  try {
    data = await postCompile(SAME_ORIGIN, code, stdin)
  } catch {
    data = await postCompile(GODBOLT, code, stdin)
  }

  const compile = joinLines(data.buildResult?.stderr)
  const built = data.buildResult?.code === 0 || (data.didExecute && data.code === 0)
  const ran = Boolean(data.didExecute) && built
  const stderr = ran ? joinLines(data.stderr) : ''
  const stdout = ran ? joinLines(data.stdout) : ''

  if (!ran && !compile) {
    return {
      stdout: '',
      stderr: '',
      compile: joinLines(data.stderr) || 'The program did not compile. Check missing braces, includes, or main().',
      ok: false,
    }
  }

  return {
    stdout,
    stderr,
    compile: ran ? '' : compile,
    ok: ran && !stderr,
  }
}

export function normalizeOutput(value: string) {
  return value.replace(/\r\n/g, '\n').trim()
}
