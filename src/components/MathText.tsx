import { useMemo } from 'react'
import katex from 'katex'

function renderLatex(tex: string, display: boolean) {
  try {
    return katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: 'ignore',
      trust: false,
    })
  } catch {
    return tex
  }
}

function tokenize(input: string) {
  const tokens: Array<{ type: 'text' | 'inline' | 'block'; value: string }> = []
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g
  let last = 0
  let match: RegExpExecArray | null
  while ((match = re.exec(input)) !== null) {
    if (match.index > last) {
      tokens.push({ type: 'text', value: input.slice(last, match.index) })
    }
    if (match[1] != null) tokens.push({ type: 'block', value: match[1] })
    else tokens.push({ type: 'inline', value: match[2] })
    last = match.index + match[0].length
  }
  if (last < input.length) tokens.push({ type: 'text', value: input.slice(last) })
  return tokens
}

export function MathText({ text, className }: { text: string; className?: string }) {
  const html = useMemo(() => {
    return tokenize(text)
      .map((token) => {
        if (token.type === 'text') return escapeHtml(token.value).replace(/\n/g, '<br />')
        return renderLatex(token.value, token.type === 'block')
      })
      .join('')
  }, [text])

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
