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
  return (locale === 'ja' ? blogPostsJA : blogPostsEN) as Record<
    string,
    LegacyBlogPost
  >
}

function getCategorySlugByPostSlug() {
  const map = new Map<string, string>()
  const usedSlugs = new Set<string>()
  const categorySlugByName = new Map<string, string>()

  for (const raw of Object.values(blogPostsEN as Record<string, LegacyBlogPost>)) {
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

const categorySlugByPostSlug = getCategorySlugByPostSlug()

function toFallbackPost(raw: LegacyBlogPost, locale: BlogLocale): FallbackBlogPost {
  const slug = raw.slug || ''

  const categoryTitle = (raw.category || '').trim() || (locale === 'ja' ? 'ブログ' : 'Blog')
  const categorySlug = categorySlugByPostSlug.get(slug) || slugifyCategory(categoryTitle)

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
