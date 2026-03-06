import { readFileSync } from 'node:fs'
import path from 'node:path'
import { blogPostsEN, blogPostsJA } from './blog-fallback-data'

export type BlogLocale = 'en' | 'ja'

type LegacyRelatedPost = {
  slug?: string
  title?: string
}

type LegacyBlogPost = {
  slug?: string
  title?: string
  metaTitle?: string
  excerpt?: string
  metaDescription?: string
  content?: string
  author?: string
  image?: string
  date?: string
  category?: string
  tags?: string[]
  relatedPosts?: LegacyRelatedPost[]
}

type FallbackCategory = {
  title: string
  slug: string
}

type FallbackAuthor = {
  name: string
  image: null
}

export type FallbackBlogPost = {
  title: string
  metaTitle?: string
  slug: string
  publishedAt: string
  excerpt: string
  metaDescription?: string
  htmlContent: string
  mainImage: null
  image?: string
  author: FallbackAuthor
  categories: FallbackCategory[]
  isFeatured: boolean
  relatedPosts: LegacyRelatedPost[]
}

type ParsedFallbackMap = {
  en: Record<string, LegacyBlogPost>
  ja: Record<string, LegacyBlogPost>
}

const PRIMARY_BLOG_CONTENT_FILE = 'docs/content/services/AKRIN_SITE_CONTENT_EN_JA.md'
const COMBINED_BLOG_CONTENT_FILE = 'docs/content/blog/AKRIN_Blog_Content_Combined.md'
const ARCHIVE_PRIMARY_BLOG_CONTENT_FILE = 'docs/archive/content/AKRIN_SITE_CONTENT_EN_JA.md.backup'
const ARCHIVE_COMBINED_BLOG_CONTENT_FILE = 'docs/archive/content/AKRIN_Blog_Content_Combined.md.backup'

const categoryPairs: Record<string, string> = {
  'Managed IT Services': 'マネージドITサービス',
  'IT Asset Disposition': 'IT資産処分',
  'IT Asset Management': 'IT資産管理',
  'IT Project Management': 'ITプロジェクト管理',
  'Wireless Network Engineering': '無線ネットワークエンジニアリング',
}

const reverseCategoryPairs = Object.fromEntries(
  Object.entries(categoryPairs).map(([en, ja]) => [ja, en]),
)

function stripWrappingQuotes(value: string) {
  return value.replace(/^['"`](.*)['"`]$/, '$1')
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function inlineMarkdownToHtml(text: string) {
  let html = escapeHtml(text)

  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label, href) => {
    const safeHref = href
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .trim()

    return `<a href="${safeHref}">${label}</a>`
  })

  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')

  return html
}

function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const parts: string[] = []
  let paragraphBuffer: string[] = []
  let listMode: 'ul' | 'ol' | null = null
  let inCodeBlock = false

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return
    const text = paragraphBuffer.join(' ').trim()
    if (text) {
      parts.push(`<p>${inlineMarkdownToHtml(text)}</p>`)
    }
    paragraphBuffer = []
  }

  const closeList = () => {
    if (!listMode) return
    parts.push(listMode === 'ul' ? '</ul>' : '</ol>')
    listMode = null
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line.trim().startsWith('```')) {
      flushParagraph()
      closeList()
      if (!inCodeBlock) {
        parts.push('<pre><code>')
        inCodeBlock = true
      } else {
        parts.push('</code></pre>')
        inCodeBlock = false
      }
      continue
    }

    if (inCodeBlock) {
      parts.push(`${escapeHtml(line)}\n`)
      continue
    }

    if (!line.trim()) {
      flushParagraph()
      closeList()
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/)
    if (heading) {
      flushParagraph()
      closeList()
      const level = heading[1].length
      parts.push(`<h${level}>${inlineMarkdownToHtml(heading[2].trim())}</h${level}>`)
      continue
    }

    const blockquote = line.match(/^>\s+(.+)$/)
    if (blockquote) {
      flushParagraph()
      closeList()
      parts.push(`<blockquote><p>${inlineMarkdownToHtml(blockquote[1].trim())}</p></blockquote>`)
      continue
    }

    const orderedItem = line.match(/^\d+\.\s+(.+)$/)
    if (orderedItem) {
      flushParagraph()
      if (listMode !== 'ol') {
        closeList()
        parts.push('<ol>')
        listMode = 'ol'
      }
      parts.push(`<li>${inlineMarkdownToHtml(orderedItem[1].trim())}</li>`)
      continue
    }

    const unorderedItem = line.match(/^-\s+(.+)$/)
    if (unorderedItem) {
      flushParagraph()
      if (listMode !== 'ul') {
        closeList()
        parts.push('<ul>')
        listMode = 'ul'
      }
      parts.push(`<li>${inlineMarkdownToHtml(unorderedItem[1].trim())}</li>`)
      continue
    }

    closeList()
    paragraphBuffer.push(line.trim())
  }

  flushParagraph()
  closeList()

  return parts.join('\n').trim()
}

function parseField(block: string, field: string) {
  const escapedField = escapeRegExp(field)
  const regex = new RegExp(`^-\\s*${escapedField}:\\s*(.+)$`, 'm')
  const raw = block.match(regex)?.[1] ?? ''
  return stripWrappingQuotes(raw.trim())
}

function parseFrontmatterField(block: string, field: string) {
  const escapedField = escapeRegExp(field)
  const regex = new RegExp(`^${escapedField}:\\s*(.+)$`, 'm')
  const raw = block.match(regex)?.[1] ?? ''
  return stripWrappingQuotes(raw.trim())
}

function parseTags(raw: string) {
  if (!raw) return []

  const normalized = raw
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .trim()

  if (!normalized) return []

  return normalized
    .split(',')
    .map((tag) => stripWrappingQuotes(tag.trim()))
    .filter(Boolean)
}

function parseLocaleBlocks(sectionBody: string) {
  const headingRegex = /^### (English|Japanese)\s*$/gm
  const matches = Array.from(sectionBody.matchAll(headingRegex))
  const blocks: Partial<Record<'English' | 'Japanese', string>> = {}

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]

    const locale = current[1] as 'English' | 'Japanese'
    const start = (current.index ?? 0) + current[0].length
    const end = next?.index ?? sectionBody.length

    blocks[locale] = sectionBody.slice(start, end).trim()
  }

  return blocks
}

function parseFullBody(block: string) {
  const match = block.match(
    /-\s*Full body:\s*\n+```(?:html|md)\s*\n([\s\S]*?)\n```/m,
  )
  return match?.[1]?.trim() ?? ''
}

function parseBlogSections(raw: string) {
  const headingRegex = /^## \/blog\/([a-z0-9-]+)\s*$/gm
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

function buildLegacyPost(slug: string, localeBlock: string | undefined): LegacyBlogPost {
  if (!localeBlock) return { slug }

  return {
    slug,
    title: parseField(localeBlock, 'Title'),
    excerpt: parseField(localeBlock, 'Excerpt'),
    content: parseFullBody(localeBlock),
    author: parseField(localeBlock, 'Author'),
    date: parseField(localeBlock, 'Date'),
    category: parseField(localeBlock, 'Category'),
    tags: parseTags(parseField(localeBlock, 'Tags')),
  }
}

function detectLocale(value: string): BlogLocale {
  return /[ぁ-んァ-ヶ一-龯]/.test(value) ? 'ja' : 'en'
}

function parseCombinedSections(raw: string) {
  const headingRegex = /^# BLOG POST:\s+([^\n]+)\s*$/gm
  const matches = Array.from(raw.matchAll(headingRegex))
  const sections: Array<{ fileName: string; body: string }> = []

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]
    const start = (current.index ?? 0) + current[0].length
    const end = next?.index ?? raw.length

    sections.push({
      fileName: current[1].trim(),
      body: raw.slice(start, end).trim(),
    })
  }

  return sections
}

function deriveSlugFromFileName(fileName: string) {
  return fileName
    .replace(/\.md$/i, '')
    .replace(/^blog-\d+-\d+-/, '')
    .trim()
}

function deriveCategory(fileName: string, locale: BlogLocale) {
  const groupId = fileName.match(/^blog-(\d+)-\d+-/)?.[1] ?? ''

  const byGroup: Record<string, { en: string; ja: string }> = {
    '1': { en: 'Managed IT Services', ja: 'マネージドITサービス' },
    '2': { en: 'IT Asset Disposition', ja: 'IT資産処分' },
    '3': { en: 'IT Asset Management', ja: 'IT資産管理' },
    '4': { en: 'IT Project Management', ja: 'ITプロジェクト管理' },
    '5': { en: 'Wireless Network Engineering', ja: '無線ネットワークエンジニアリング' },
  }

  const mapped = byGroup[groupId]
  if (mapped) return locale === 'ja' ? mapped.ja : mapped.en

  return locale === 'ja' ? 'ブログ' : 'Blog'
}

function localizeCategory(category: string | undefined, locale: BlogLocale) {
  if (!category) {
    return locale === 'ja' ? 'ブログ' : 'Blog'
  }

  if (locale === 'ja') {
    return categoryPairs[category] || category
  }

  return reverseCategoryPairs[category] || category
}

function createLocalizedCounterpart(source: LegacyBlogPost, locale: BlogLocale): LegacyBlogPost {
  const sourceLocale = detectLocale(`${source.title || ''} ${source.excerpt || ''} ${source.content || ''}`)
  const sourceTitle = source.title || (sourceLocale === 'ja' ? '記事' : 'Post')
  const sourceExcerpt = source.excerpt || ''

  if (locale === sourceLocale) {
    return { ...source }
  }

  const title =
    locale === 'ja'
      ? `【日本語版】${sourceTitle}`
      : `English Version: ${sourceTitle}`

  const excerpt =
    locale === 'ja'
      ? sourceExcerpt
        ? `【日本語版】${sourceExcerpt}`
        : '英語版コンテンツの日本語ページ向け版です。'
      : sourceExcerpt
        ? `English version: ${sourceExcerpt}`
        : 'Auto-localized English version of the original Japanese content.'

  const preface =
    locale === 'ja'
      ? '<p>このページは英語版記事を日本語向けに提供する自動ローカライズ版です。</p>'
      : '<p>This page is an auto-localized English version generated from the original Japanese article.</p>'

  return {
    ...source,
    title,
    excerpt,
    content: `${preface}\n${source.content || ''}`,
    author: locale === 'ja' ? 'AKRIN編集チーム' : 'AKRIN Editorial Team',
    category: localizeCategory(source.category, locale),
  }
}

function buildCombinedLegacyPost(section: { fileName: string; body: string }): LegacyBlogPost | null {
  const slug = deriveSlugFromFileName(section.fileName)
  if (!slug) return null
  const imageFileName = section.fileName.replace(/\.md$/i, '.avif')
  const imagePath = `/blog-images/posts/${imageFileName}`

  const publicationDate =
    section.body.match(/\*\*Publication Date:\*\*\s*([^\n]+)/)?.[1]?.trim() || ''

  const frontmatterMatch = section.body.match(/---\s*\n([\s\S]*?)\n---/)
  const frontmatter = frontmatterMatch?.[1] || ''

  const title = parseFrontmatterField(frontmatter, 'title')
  const description = parseFrontmatterField(frontmatter, 'description')
  const keywords = parseTags(parseFrontmatterField(frontmatter, 'keywords'))

  const markdownStart = frontmatterMatch
    ? frontmatterMatch.index! + frontmatterMatch[0].length
    : 0
  const markdownBody = section.body.slice(markdownStart).trim()
  const htmlContent = markdownToHtml(markdownBody)

  const locale = detectLocale(`${title} ${description} ${markdownBody}`)

  return {
    slug,
    title: title || slug,
    excerpt: description,
    content: htmlContent,
    image: imagePath,
    author: locale === 'ja' ? 'AKRIN編集チーム' : 'AKRIN Editorial Team',
    date: publicationDate,
    category: deriveCategory(section.fileName, locale),
    tags: keywords,
  }
}

function parsePrimaryFallbackFile(relativePath: string) {
  try {
    const absolutePath = path.join(process.cwd(), relativePath)
    const raw = readFileSync(absolutePath, 'utf8')
    const en: Record<string, LegacyBlogPost> = {}
    const ja: Record<string, LegacyBlogPost> = {}

    for (const section of parseBlogSections(raw)) {
      const localeBlocks = parseLocaleBlocks(section.body)
      en[section.slug] = buildLegacyPost(section.slug, localeBlocks.English)
      ja[section.slug] = buildLegacyPost(section.slug, localeBlocks.Japanese)
    }

    return { en, ja }
  } catch {
    return null
  }
}

function parseCombinedFallbackFile(relativePath: string) {
  try {
    const absolutePath = path.join(process.cwd(), relativePath)
    const raw = readFileSync(absolutePath, 'utf8')
    const en: Record<string, LegacyBlogPost> = {}
    const ja: Record<string, LegacyBlogPost> = {}

    for (const section of parseCombinedSections(raw)) {
      const post = buildCombinedLegacyPost(section)
      if (!post?.slug) continue

      // The combined markdown source is the English blog archive. Some English
      // posts legitimately mention Japanese terms (for example, 古物商許可),
      // which makes naive character-based locale detection misclassify them as JA.
      en[post.slug] = post
    }

    // Do NOT auto-generate JA counterparts for EN-only posts.
    // Previously this created fake "【日本語版】" entries that showed English content
    // on the JA blog — confusing for users. Only properly translated JA posts
    // (from blogPostsJA or JA-authored markdown) should appear on the JA blog.

    return { en, ja }
  } catch {
    return null
  }
}

function mergeParsedFallbackMaps(
  ...maps: Array<ParsedFallbackMap | null | undefined>
): ParsedFallbackMap | null {
  const en: Record<string, LegacyBlogPost> = {
    ...(maps.find((map) => map)?.en ?? {}),
  }
  const ja: Record<string, LegacyBlogPost> = {
    ...(maps.find((map) => map)?.ja ?? {}),
  }

  const validMaps = maps.filter((map): map is ParsedFallbackMap => Boolean(map))
  if (validMaps.length === 0) return null

  for (const map of validMaps.slice(1)) {
    const slugs = new Set([
      ...Object.keys(map.en),
      ...Object.keys(map.ja),
    ])

    for (const slug of slugs) {
      if (!en[slug] && map.en[slug]) {
        en[slug] = map.en[slug]
      }
      if (!ja[slug] && map.ja[slug]) {
        ja[slug] = map.ja[slug]
      }
    }
  }

  return { en, ja }
}

let primaryParsedFallbackMap: ParsedFallbackMap | null | undefined

function getPrimaryParsedFallbackMap() {
  if (primaryParsedFallbackMap === undefined) {
    primaryParsedFallbackMap = parsePrimaryFallbackFile(PRIMARY_BLOG_CONTENT_FILE)
  }

  return primaryParsedFallbackMap
}

let combinedParsedFallbackMap: ParsedFallbackMap | null | undefined

function getCombinedParsedFallbackMap() {
  if (combinedParsedFallbackMap === undefined) {
    combinedParsedFallbackMap = parseCombinedFallbackFile(COMBINED_BLOG_CONTENT_FILE)
  }

  return combinedParsedFallbackMap
}

let archiveParsedFallbackMap: ParsedFallbackMap | null | undefined

function getArchiveParsedFallbackMap() {
  if (archiveParsedFallbackMap === undefined) {
    archiveParsedFallbackMap = mergeParsedFallbackMaps(
      parsePrimaryFallbackFile(ARCHIVE_PRIMARY_BLOG_CONTENT_FILE),
      parseCombinedFallbackFile(ARCHIVE_COMBINED_BLOG_CONTENT_FILE),
    )
  }

  return archiveParsedFallbackMap
}

let mergedParsedFallbackMap: ParsedFallbackMap | null | undefined

function getMergedParsedFallbackMap() {
  if (mergedParsedFallbackMap === undefined) {
    mergedParsedFallbackMap = mergeParsedFallbackMaps(
      getPrimaryParsedFallbackMap(),
      getCombinedParsedFallbackMap(),
    )
  }

  return mergedParsedFallbackMap
}

function getArchiveRawPost(locale: BlogLocale, slug: string) {
  return getArchiveParsedFallbackMap()?.[locale]?.[slug]
}

function slugifyCategory(value: string) {
  const normalized = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return normalized || 'general'
}

function toISODate(value?: string) {
  if (!value) return new Date().toISOString()

  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toISOString()
  }

  return parsed.toISOString()
}

function getRawMap(locale: BlogLocale) {
  const parsedMap = getMergedParsedFallbackMap()
  const codeMap = (locale === 'ja' ? blogPostsJA : blogPostsEN) as Record<
    string,
    LegacyBlogPost
  >

  if (!parsedMap) {
    return codeMap
  }

  // Merge: parsed files as base, then code-defined posts OVERRIDE.
  // Code-defined posts (blogPostsJA/blogPostsEN) are hand-crafted translations
  // that must take priority over auto-parsed content — parsed English posts can
  // be misclassified as JA by detectLocale() when they contain Japanese terms.
  const merged: Record<string, LegacyBlogPost> = {
    ...parsedMap[locale],
  }

  for (const [slug, post] of Object.entries(codeMap)) {
    // Smart merge: code-defined metadata supplements parsed content rather than
    // replacing it entirely. This lets us add metaTitle/metaDescription in code
    // while preserving full content from the markdown archives.
    if (merged[slug]) {
      merged[slug] = { ...merged[slug], ...post } as LegacyBlogPost
    } else {
      merged[slug] = post as LegacyBlogPost
    }
  }

  return merged
}

export function getFallbackImageBySlug(
  slug: string,
  locale: BlogLocale,
): string | undefined {
  const raw = getRawMap(locale)[slug] || getArchiveRawPost(locale, slug)
  const image = raw?.image
  if (typeof image === 'string' && image.trim().length > 0) {
    return image
  }
  return undefined
}

export function getFallbackImageMap(locale: BlogLocale): Map<string, string> {
  const map = new Map<string, string>()

  for (const raw of Object.values(getRawMap(locale))) {
    if (!raw?.slug || typeof raw.image !== 'string') continue
    const image = raw.image.trim()
    if (!image) continue
    map.set(raw.slug, image)
  }

  return map
}

function getCategorySlugByPostSlug() {
  const map = new Map<string, string>()
  const usedSlugs = new Set<string>()
  const categorySlugByName = new Map<string, string>()

  for (const raw of Object.values(getRawMap('en'))) {
    if (!raw.slug) continue
    const categoryName = (raw.category || 'general').trim()

    const existing = categorySlugByName.get(categoryName)
    if (existing) {
      map.set(raw.slug, existing)
      continue
    }

    const baseSlug = slugifyCategory(categoryName)
    let slug = baseSlug
    let suffix = 1

    while (usedSlugs.has(slug)) {
      suffix += 1
      slug = `${baseSlug}-${suffix}`
    }

    categorySlugByName.set(categoryName, slug)
    map.set(raw.slug, slug)
    usedSlugs.add(slug)
  }

  return map
}

let categorySlugByPostSlug: Map<string, string> | null = null

function getCategorySlugByPostSlugMap() {
  if (!categorySlugByPostSlug) {
    categorySlugByPostSlug = getCategorySlugByPostSlug()
  }

  return categorySlugByPostSlug
}

function toFallbackPost(raw: LegacyBlogPost, locale: BlogLocale): FallbackBlogPost {
  const slug = raw.slug || ''

  const categoryTitle = (raw.category || '').trim() || (locale === 'ja' ? 'ブログ' : 'Blog')
  const categorySlug =
    getCategorySlugByPostSlugMap().get(slug) || slugifyCategory(categoryTitle)

  return {
    title: raw.title || (locale === 'ja' ? '記事' : 'Post'),
    metaTitle: raw.metaTitle || undefined,
    slug,
    publishedAt: toISODate(raw.date),
    excerpt: raw.excerpt || '',
    metaDescription: raw.metaDescription || raw.excerpt || undefined,
    htmlContent: raw.content || '',
    mainImage: null,
    image: raw.image || undefined,
    author: {
      name: locale === 'ja' ? 'AKRIN編集チーム' : 'AKRIN Editorial Team',
      image: null,
    },
    categories: [
      {
        title: categoryTitle,
        slug: categorySlug,
      },
    ],
    isFeatured: false,
    relatedPosts: raw.relatedPosts || [],
  }
}

export function getFallbackPosts(locale: BlogLocale): FallbackBlogPost[] {
  const posts = Object.values(getRawMap(locale))
    .map((raw) => toFallbackPost(raw, locale))
    .filter((post) => post.slug.length > 0)

  posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return posts
}

export function getFallbackPost(
  slug: string,
  locale: BlogLocale,
): FallbackBlogPost | null {
  const raw = getRawMap(locale)[slug] || getArchiveRawPost(locale, slug)
  if (!raw) return null
  return toFallbackPost(raw, locale)
}

export function getFallbackPostSlugs(
  locale: BlogLocale,
  includeArchive = false,
) {
  const slugs = new Set(Object.keys(getRawMap(locale)))

  if (includeArchive) {
    for (const slug of Object.keys(getArchiveParsedFallbackMap()?.[locale] ?? {})) {
      slugs.add(slug)
    }
  }

  return Array.from(slugs)
}

export function getFallbackPostsCount(locale: BlogLocale, category?: string) {
  if (!category) return getFallbackPosts(locale).length

  return getFallbackPosts(locale).filter((post) =>
    post.categories.some((item) => item.slug === category),
  ).length
}

export function getFallbackPostsPaginated(
  locale: BlogLocale,
  startIndex: number,
  endIndex: number,
  category?: string,
) {
  const filtered = getFallbackPosts(locale).filter((post) => {
    if (!category) return true
    return post.categories.some((item) => item.slug === category)
  })

  return filtered.slice(startIndex, endIndex)
}

export function getFallbackFeaturedPosts(locale: BlogLocale, quantity: number) {
  return getFallbackPosts(locale).slice(0, quantity)
}

export function getFallbackCategories(locale: BlogLocale): FallbackCategory[] {
  const categoryMap = new Map<string, string>()

  for (const post of getFallbackPosts(locale)) {
    for (const category of post.categories) {
      if (!categoryMap.has(category.slug)) {
        categoryMap.set(category.slug, category.title)
      }
    }
  }

  return Array.from(categoryMap.entries())
    .map(([slug, title]) => ({ slug, title }))
    .sort((a, b) => a.title.localeCompare(b.title, locale === 'ja' ? 'ja' : 'en'))
}

export function getFallbackPostsForFeed() {
  return getFallbackPosts('en')
}
