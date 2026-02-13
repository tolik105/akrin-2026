import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

type Locale = 'en' | 'ja'
type LocaleLabel = 'English' | 'Japanese'

type CaseStudyFallbackEntry = {
  en: string | null
  ja: string | null
}

function getRouteSections(raw: string, prefix: '/case-studies/') {
  const headingRegex = new RegExp(`^## ${prefix}([a-z0-9-]+)\\s*$`, 'gm')
  const matches = Array.from(raw.matchAll(headingRegex))
  const sections: Array<{ slug: string; body: string }> = []

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]

    const slug = current[1]
    const start = (current.index ?? 0) + current[0].length
    const end = next?.index ?? raw.length
    const body = raw.slice(start, end).trim()

    sections.push({ slug, body })
  }

  return sections
}

function getLocaleBlocks(sectionBody: string) {
  const headingRegex = /^### (English|Japanese)\s*$/gm
  const matches = Array.from(sectionBody.matchAll(headingRegex))
  const blocks: Partial<Record<LocaleLabel, string>> = {}

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]

    const locale = current[1] as LocaleLabel
    const start = (current.index ?? 0) + current[0].length
    const end = next?.index ?? sectionBody.length
    blocks[locale] = sectionBody.slice(start, end).trim()
  }

  return blocks
}

function extractMarkdownBody(localeBlock: string | undefined) {
  if (!localeBlock) return null

  const match = localeBlock.match(
    /-\s*Full body:\s*\n+```(?:md|html)\s*\n([\s\S]*?)\n```/m,
  )
  return match?.[1]?.trim() ?? null
}

const getCaseStudyFallbackMap = cache(async () => {
  const absolutePath = path.join(process.cwd(), 'AKRIN_SITE_CONTENT_EN_JA.md')
  const raw = await readFile(absolutePath, 'utf8')

  const map = new Map<string, CaseStudyFallbackEntry>()
  const sections = getRouteSections(raw, '/case-studies/')

  for (const section of sections) {
    const localeBlocks = getLocaleBlocks(section.body)

    map.set(section.slug, {
      en: extractMarkdownBody(localeBlocks.English),
      ja: extractMarkdownBody(localeBlocks.Japanese),
    })
  }

  return map
})

export const getCaseStudyFallbackMarkdown = cache(
  async (slug: string, locale: Locale) => {
    const map = await getCaseStudyFallbackMap()
    const entry = map.get(slug)
    if (!entry) return null
    return locale === 'ja' ? entry.ja : entry.en
  },
)
