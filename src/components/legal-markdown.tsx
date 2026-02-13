import type { ReactNode } from 'react'

type HeadingLevel = 2 | 3 | 4

type HeadingBlock = {
  type: 'heading'
  level: HeadingLevel
  text: string
}

type ParagraphBlock = {
  type: 'paragraph'
  text: string
}

type ListBlock = {
  type: 'list'
  ordered: boolean
  items: string[]
}

type HorizontalRuleBlock = {
  type: 'hr'
}

type TableBlock = {
  type: 'table'
  header: string[]
  rows: string[][]
}

type BlockquoteBlock = {
  type: 'blockquote'
  text: string
}

type MarkdownBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | HorizontalRuleBlock
  | TableBlock
  | BlockquoteBlock

function splitTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim())
}

function isTableSeparator(line: string) {
  const cells = splitTableRow(line)
  if (cells.length === 0) {
    return false
  }
  return cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

function parseMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks: MarkdownBlock[] = []
  let index = 0
  let skippedFirstH1 = false

  while (index < lines.length) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (line === '') {
      index += 1
      continue
    }

    const h1Match = line.match(/^#\s+(.+)$/)
    if (h1Match && !skippedFirstH1) {
      skippedFirstH1 = true
      index += 1
      continue
    }

    if (/^---+$/.test(line)) {
      blocks.push({ type: 'hr' })
      index += 1
      continue
    }

    if (/^!\[.*\]\(.*\)$/.test(line)) {
      index += 1
      continue
    }

    const h2Match = line.match(/^##\s+(.+)$/)
    if (h2Match) {
      blocks.push({ type: 'heading', level: 2, text: h2Match[1] })
      index += 1
      continue
    }

    const h3Match = line.match(/^###\s+(.+)$/)
    if (h3Match) {
      blocks.push({ type: 'heading', level: 3, text: h3Match[1] })
      index += 1
      continue
    }

    const h4Match = line.match(/^####\s+(.+)$/)
    if (h4Match) {
      blocks.push({ type: 'heading', level: 4, text: h4Match[1] })
      index += 1
      continue
    }

    if (line.startsWith('|')) {
      const tableLines: string[] = []
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        tableLines.push(lines[index].trim())
        index += 1
      }

      if (tableLines.length >= 2 && isTableSeparator(tableLines[1])) {
        const header = splitTableRow(tableLines[0])
        const rows = tableLines.slice(2).map(splitTableRow)
        blocks.push({ type: 'table', header, rows })
      }
      continue
    }

    if (line.startsWith('>')) {
      const quoteLines: string[] = []
      while (index < lines.length) {
        const rawQuoteLine = lines[index].trim()
        if (!rawQuoteLine.startsWith('>')) {
          break
        }
        quoteLines.push(rawQuoteLine.replace(/^>\s?/, '').trim())
        index += 1
      }

      if (quoteLines.length > 0) {
        blocks.push({ type: 'blockquote', text: quoteLines.join(' ') })
      }
      continue
    }

    const unorderedMatch = line.match(/^-\s+(.+)$/)
    if (unorderedMatch) {
      const items: string[] = []
      while (index < lines.length) {
        const match = lines[index].trim().match(/^-\s+(.+)$/)
        if (!match) {
          break
        }
        items.push(match[1])
        index += 1
      }
      blocks.push({ type: 'list', ordered: false, items })
      continue
    }

    const orderedMatch = line.match(/^\d+\.\s+(.+)$/)
    if (orderedMatch) {
      const items: string[] = []
      while (index < lines.length) {
        const match = lines[index].trim().match(/^\d+\.\s+(.+)$/)
        if (!match) {
          break
        }
        items.push(match[1])
        index += 1
      }
      blocks.push({ type: 'list', ordered: true, items })
      continue
    }

    const paragraphLines: string[] = []
    while (index < lines.length) {
      const nextLine = lines[index].trim()
      if (
        nextLine === '' ||
        /^---+$/.test(nextLine) ||
        /^#{1,4}\s+/.test(nextLine) ||
        /^-\s+/.test(nextLine) ||
        /^\d+\.\s+/.test(nextLine) ||
        nextLine.startsWith('|')
      ) {
        break
      }
      paragraphLines.push(nextLine)
      index += 1
    }

    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') })
    } else {
      index += 1
    }
  }

  return blocks
}

function splitTrailingUrlPunctuation(url: string) {
  const match = url.match(/[),.;:!?]+$/)
  if (!match) {
    return { clean: url, trailing: '' }
  }
  const trailing = match[0]
  return {
    clean: url.slice(0, -trailing.length),
    trailing,
  }
}

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const tokenRegex =
    /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|(https?:\/\/[^\s]+)/g

  let lastIndex = 0
  let key = 0

  for (const match of text.matchAll(tokenRegex)) {
    const matchIndex = match.index ?? 0
    if (matchIndex > lastIndex) {
      nodes.push(text.slice(lastIndex, matchIndex))
    }

    if (match[1] && match[2]) {
      const isExternalLink = /^https?:\/\//.test(match[2])
      nodes.push(
        <a
          key={`token-${key}`}
          href={match[2]}
          target={isExternalLink ? '_blank' : undefined}
          rel={isExternalLink ? 'noreferrer noopener' : undefined}
          className="text-[#3462BD] underline underline-offset-4 transition-colors hover:text-[#2A4F99]"
        >
          {match[1]}
        </a>,
      )
      key += 1
      lastIndex = matchIndex + match[0].length
      continue
    }

    if (match[3]) {
      nodes.push(
        <strong key={`token-${key}`} className="font-semibold text-[#17100E]">
          {match[3]}
        </strong>,
      )
      key += 1
      lastIndex = matchIndex + match[0].length
      continue
    }

    if (match[4]) {
      nodes.push(
        <em key={`token-${key}`} className="italic">
          {match[4]}
        </em>,
      )
      key += 1
      lastIndex = matchIndex + match[0].length
      continue
    }

    if (match[5]) {
      const { clean, trailing } = splitTrailingUrlPunctuation(match[5])
      nodes.push(
        <a
          key={`token-${key}`}
          href={clean}
          target="_blank"
          rel="noreferrer noopener"
          className="break-all text-[#3462BD] underline underline-offset-4 transition-colors hover:text-[#2A4F99]"
        >
          {clean}
        </a>,
      )
      if (trailing) {
        nodes.push(trailing)
      }
      key += 1
      lastIndex = matchIndex + match[0].length
    }
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export function LegalMarkdown({ markdown }: { markdown: string }) {
  const blocks = parseMarkdown(markdown)

  return (
    <div className="space-y-8">
      {blocks.map((block, blockIndex) => {
        if (block.type === 'heading') {
          if (block.level === 2) {
            return (
              <h2
                key={`block-${blockIndex}`}
                className="font-serif text-2xl font-normal tracking-tight text-[#17100E] sm:text-3xl"
              >
                {block.text}
              </h2>
            )
          }

          if (block.level === 3) {
            return (
              <h3
                key={`block-${blockIndex}`}
                className="font-serif text-xl font-normal tracking-tight text-[#17100E] sm:text-2xl"
              >
                {block.text}
              </h3>
            )
          }

          return (
            <h4
              key={`block-${blockIndex}`}
              className="text-base font-semibold tracking-tight text-[#17100E] sm:text-lg"
            >
              {block.text}
            </h4>
          )
        }

        if (block.type === 'paragraph') {
          return (
            <p key={`block-${blockIndex}`} className="text-base leading-relaxed text-[#17100E]/80">
              {parseInline(block.text)}
            </p>
          )
        }

        if (block.type === 'list') {
          const ListTag = block.ordered ? 'ol' : 'ul'
          return (
            <ListTag
              key={`block-${blockIndex}`}
              className={`space-y-2 pl-6 text-base leading-relaxed text-[#17100E]/80 ${
                block.ordered ? 'list-decimal' : 'list-disc'
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <li key={`item-${blockIndex}-${itemIndex}`}>{parseInline(item)}</li>
              ))}
            </ListTag>
          )
        }

        if (block.type === 'hr') {
          return <hr key={`block-${blockIndex}`} className="border-t border-[#17100E]/10" />
        }

        if (block.type === 'blockquote') {
          return (
            <blockquote
              key={`block-${blockIndex}`}
              className="border-l-2 border-[#17100E]/20 pl-4 text-base leading-relaxed text-[#17100E]/80 italic"
            >
              {parseInline(block.text)}
            </blockquote>
          )
        }

        return (
          <div
            key={`block-${blockIndex}`}
            className="overflow-x-auto rounded-2xl border border-[#17100E]/10 bg-white"
          >
            <table className="min-w-full border-collapse text-left text-sm leading-relaxed text-[#17100E]/80">
              <thead className="bg-[#F4F3EC]">
                <tr>
                  {block.header.map((cell, headerIndex) => (
                    <th
                      key={`header-${blockIndex}-${headerIndex}`}
                      className="border-b border-[#17100E]/10 px-4 py-3 font-semibold text-[#17100E]"
                    >
                      {parseInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={`row-${blockIndex}-${rowIndex}`} className="align-top">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`cell-${blockIndex}-${rowIndex}-${cellIndex}`}
                        className="border-t border-[#17100E]/10 px-4 py-3"
                      >
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}
