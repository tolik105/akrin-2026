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
  slug: string
  publishedAt: string
  excerpt: string
  htmlContent: string
  mainImage: null
  author: FallbackAuthor
  categories: FallbackCategory[]
  isFeatured: boolean
  relatedPosts: LegacyRelatedPost[]
}

function stripWrappingQuotes(value: string) {
  return value.replace(/^['"`](.*)['"`]$/, '$1')
}

function parseField(block: string, field: string) {
  const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`^-\\s*${escapedField}:\\s*(.+)$`, 'm')
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

type ParsedFallbackMap = {
  en: Record<string, LegacyBlogPost>
  ja: Record<string, LegacyBlogPost>
}

let parsedFallbackMap: ParsedFallbackMap | null | undefined

function getParsedFallbackMap() {
  if (parsedFallbackMap !== undefined) {
    return parsedFallbackMap
  }

  try {
    const absolutePath = path.join(process.cwd(), 'AKRIN_SITE_CONTENT_EN_JA.md')
    const raw = readFileSync(absolutePath, 'utf8')
    const en: Record<string, LegacyBlogPost> = {}
    const ja: Record<string, LegacyBlogPost> = {}

    for (const section of parseBlogSections(raw)) {
      const localeBlocks = parseLocaleBlocks(section.body)
      en[section.slug] = buildLegacyPost(section.slug, localeBlocks.English)
      ja[section.slug] = buildLegacyPost(section.slug, localeBlocks.Japanese)
    }

    parsedFallbackMap = { en, ja }
    return parsedFallbackMap
  } catch {
    parsedFallbackMap = null
    return parsedFallbackMap
  }
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
  const parsedMap = getParsedFallbackMap()
  if (parsedMap) {
    return parsedMap[locale] as Record<string, LegacyBlogPost>
  }

  return (locale === 'ja' ? blogPostsJA : blogPostsEN) as Record<
    string,
    LegacyBlogPost
  >
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
    slug,
    publishedAt: toISODate(raw.date),
    excerpt: raw.excerpt || '',
    htmlContent: raw.content || '',
    mainImage: null,
    author: {
      name: raw.author || (locale === 'ja' ? 'AKRINチーム' : 'AKRIN Team'),
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
  const raw = getRawMap(locale)[slug]
  if (!raw) return null
  return toFallbackPost(raw, locale)
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
