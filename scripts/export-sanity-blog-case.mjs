import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const PRIMARY_CONTENT_FILE = 'docs/content/services/AKRIN_SITE_CONTENT_EN_JA.md'
const COMBINED_BLOG_CONTENT_FILE = 'docs/content/blog/AKRIN_Blog_Content_Combined.md'
const OUTPUT_DIR = 'sanity-import'
const OUTPUT_FILE = 'blog-case.ndjson'

const categoryPairs = {
  'Managed IT Services': 'マネージドITサービス',
  'IT Asset Disposition': 'IT資産処分',
  'IT Asset Management': 'IT資産管理',
  'IT Project Management': 'ITプロジェクト管理',
  'Wireless Network Engineering': '無線ネットワークエンジニアリング',
}

const reverseCategoryPairs = Object.fromEntries(
  Object.entries(categoryPairs).map(([en, ja]) => [ja, en]),
)

function safeString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function stripWrappingQuotes(value) {
  return value.replace(/^['"`](.*)['"`]$/, '$1')
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function inlineMarkdownToHtml(text) {
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

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const parts = []
  let paragraphBuffer = []
  let listMode = null
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

function extractField(block, fieldName) {
  const escapedField = escapeRegExp(fieldName)
  const regex = new RegExp(`^-\\s*${escapedField}:\\s*(.+)$`, 'm')
  return stripWrappingQuotes(safeString(block.match(regex)?.[1] ?? ''))
}

function extractFrontmatterField(block, fieldName) {
  const escapedField = escapeRegExp(fieldName)
  const regex = new RegExp(`^${escapedField}:\\s*(.+)$`, 'm')
  return stripWrappingQuotes(safeString(block.match(regex)?.[1] ?? ''))
}

function parseTags(raw) {
  if (!raw) return []

  const normalized = raw
    .replace(/^\[/, '')
    .replace(/\]$/, '')

  return normalized
    .split(',')
    .map((tag) => stripWrappingQuotes(tag.trim()))
    .filter(Boolean)
}

function toIsoDate(rawDate) {
  if (!rawDate) return new Date().toISOString()
  const parsed = new Date(rawDate)
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString()
  return parsed.toISOString()
}

function detectLocale(value) {
  return /[ぁ-んァ-ヶ一-龯]/.test(value) ? 'ja' : 'en'
}

function deriveCategory(fileName, locale) {
  const groupId = fileName.match(/^blog-(\d+)-\d+-/)?.[1] ?? ''

  const byGroup = {
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

function localizeCategory(category, locale) {
  if (!category) return locale === 'ja' ? 'ブログ' : 'Blog'

  if (locale === 'ja') {
    return categoryPairs[category] || category
  }

  return reverseCategoryPairs[category] || category
}

function parseRouteSections(content) {
  const headingRegex = /^## \/(blog|case-studies)\/([a-z0-9-]+)\s*$/gm
  const matches = Array.from(content.matchAll(headingRegex))
  const sections = []

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]

    const routeType = current[1]
    const slug = current[2]
    const start = (current.index ?? 0) + current[0].length
    const end = next?.index ?? content.length
    const sectionBody = content.slice(start, end).trim()

    sections.push({ routeType, slug, sectionBody })
  }

  return sections
}

function parseLocaleBlocks(sectionBody) {
  const headingRegex = /^### (English|Japanese)\s*$/gm
  const matches = Array.from(sectionBody.matchAll(headingRegex))
  const blocks = {}

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]

    const locale = current[1]
    const start = (current.index ?? 0) + current[0].length
    const end = next?.index ?? sectionBody.length

    blocks[locale] = sectionBody.slice(start, end).trim()
  }

  return blocks
}

function extractLocaleBlock(sectionBody, localeLabel) {
  const localeBlocks = parseLocaleBlocks(sectionBody)
  const localeBlock = localeBlocks[localeLabel] ?? ''

  const bodyMatch = localeBlock.match(
    /-\s*Full body:\s*\n+```(?:html|md)\s*\n([\s\S]*?)\n```/m,
  )

  return {
    title: extractField(localeBlock, 'Title'),
    date: extractField(localeBlock, 'Date'),
    author: extractField(localeBlock, 'Author'),
    category: extractField(localeBlock, 'Category'),
    excerpt: extractField(localeBlock, 'Excerpt'),
    tags: parseTags(extractField(localeBlock, 'Tags')),
    metrics: parseTags(extractField(localeBlock, 'Metrics')),
    body: safeString(bodyMatch?.[1] ?? ''),
  }
}

function parseBlogSections(content) {
  return parseRouteSections(content).filter((section) => section.routeType === 'blog')
}

function parseCaseStudySections(content) {
  return parseRouteSections(content).filter(
    (section) => section.routeType === 'case-studies',
  )
}

function parseCombinedSections(content) {
  const headingRegex = /^# BLOG POST:\s+([^\n]+)\s*$/gm
  const matches = Array.from(content.matchAll(headingRegex))
  const sections = []

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]
    const start = (current.index ?? 0) + current[0].length
    const end = next?.index ?? content.length

    sections.push({
      fileName: current[1].trim(),
      body: content.slice(start, end).trim(),
    })
  }

  return sections
}

function deriveSlugFromFileName(fileName) {
  return fileName
    .replace(/\.md$/i, '')
    .replace(/^blog-\d+-\d+-/, '')
    .trim()
}

function createLocalizedCounterpart(source, locale) {
  const sourceLocale = detectLocale(`${source.title || ''} ${source.excerpt || ''} ${source.htmlContent || ''}`)
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
    htmlContent: `${preface}\n${source.htmlContent || ''}`,
    locale,
    author: locale === 'ja' ? 'AKRIN編集チーム' : 'AKRIN Editorial Team',
    category: localizeCategory(source.category, locale),
  }
}

function buildBlogDocumentsFromPrimary(content) {
  return parseBlogSections(content).flatMap(({ slug, sectionBody }) => {
    const en = extractLocaleBlock(sectionBody, 'English')
    const ja = extractLocaleBlock(sectionBody, 'Japanese')

    return [
      {
        _id: `post.en.${slug}`,
        _type: 'post',
        title: en.title || slug,
        locale: 'en',
        slug: { _type: 'slug', current: slug },
        publishedAt: toIsoDate(en.date),
        excerpt: en.excerpt,
        htmlContent: en.body,
        tags: en.tags,
        isFeatured: false,
      },
      {
        _id: `post.ja.${slug}`,
        _type: 'post',
        title: ja.title || slug,
        locale: 'ja',
        slug: { _type: 'slug', current: slug },
        publishedAt: toIsoDate(ja.date || en.date),
        excerpt: ja.excerpt,
        htmlContent: ja.body,
        tags: ja.tags.length > 0 ? ja.tags : en.tags,
        isFeatured: false,
      },
    ]
  })
}

function buildBlogDocumentsFromCombined(content) {
  const enBySlug = new Map()
  const jaBySlug = new Map()

  for (const section of parseCombinedSections(content)) {
    const slug = deriveSlugFromFileName(section.fileName)
    if (!slug) continue
    const imageFileName = section.fileName.replace(/\.md$/i, '.avif')
    const imagePath = `/blog-images/posts/${imageFileName}`

    const publicationDate =
      section.body.match(/\*\*Publication Date:\*\*\s*([^\n]+)/)?.[1]?.trim() || ''

    const frontmatterMatch = section.body.match(/---\s*\n([\s\S]*?)\n---/)
    const frontmatter = frontmatterMatch?.[1] || ''

    const title = extractFrontmatterField(frontmatter, 'title')
    const description = extractFrontmatterField(frontmatter, 'description')
    const keywords = parseTags(extractFrontmatterField(frontmatter, 'keywords'))

    const markdownStart = frontmatterMatch
      ? frontmatterMatch.index + frontmatterMatch[0].length
      : 0
    const markdownBody = section.body.slice(markdownStart).trim()
    const htmlContent = markdownToHtml(markdownBody)

    const locale = detectLocale(`${title} ${description} ${markdownBody}`)

    const doc = {
      _id: `post.${locale}.${slug}`,
      _type: 'post',
      title: title || slug,
      locale,
      slug: { _type: 'slug', current: slug },
      publishedAt: toIsoDate(publicationDate),
      excerpt: description,
      htmlContent,
      image: imagePath,
      tags: keywords,
      isFeatured: false,
      author: locale === 'ja' ? 'AKRIN編集チーム' : 'AKRIN Editorial Team',
      category: deriveCategory(section.fileName, locale),
    }

    if (locale === 'ja') {
      jaBySlug.set(slug, doc)
    } else {
      enBySlug.set(slug, doc)
    }
  }

  const slugs = new Set([...enBySlug.keys(), ...jaBySlug.keys()])

  for (const slug of slugs) {
    if (!enBySlug.has(slug) && jaBySlug.has(slug)) {
      const localized = createLocalizedCounterpart(jaBySlug.get(slug), 'en')
      enBySlug.set(slug, {
        ...localized,
        _id: `post.en.${slug}`,
        locale: 'en',
      })
    }

    if (!jaBySlug.has(slug) && enBySlug.has(slug)) {
      const localized = createLocalizedCounterpart(enBySlug.get(slug), 'ja')
      jaBySlug.set(slug, {
        ...localized,
        _id: `post.ja.${slug}`,
        locale: 'ja',
      })
    }
  }

  const docs = []

  for (const slug of slugs) {
    const en = enBySlug.get(slug)
    const ja = jaBySlug.get(slug)

    if (en) {
      docs.push({
        _id: `post.en.${slug}`,
        _type: 'post',
        title: en.title,
        locale: 'en',
        slug: { _type: 'slug', current: slug },
        publishedAt: en.publishedAt,
        excerpt: en.excerpt,
        htmlContent: en.htmlContent,
        image: en.image,
        tags: en.tags,
        isFeatured: false,
      })
    }

    if (ja) {
      docs.push({
        _id: `post.ja.${slug}`,
        _type: 'post',
        title: ja.title,
        locale: 'ja',
        slug: { _type: 'slug', current: slug },
        publishedAt: ja.publishedAt,
        excerpt: ja.excerpt,
        htmlContent: ja.htmlContent,
        image: ja.image,
        tags: ja.tags,
        isFeatured: false,
      })
    }
  }

  return docs
}

function mergeBlogDocuments(primaryDocs, combinedDocs) {
  const seen = new Set(
    primaryDocs.map((doc) => `${doc.locale}:${doc.slug.current}`),
  )

  const merged = [...primaryDocs]

  for (const doc of combinedDocs) {
    const key = `${doc.locale}:${doc.slug.current}`
    if (seen.has(key)) continue
    merged.push(doc)
    seen.add(key)
  }

  return merged
}

function buildCaseStudyDocuments(content) {
  return parseCaseStudySections(content).map(({ slug, sectionBody }, index) => {
    const en = extractLocaleBlock(sectionBody, 'English')
    const ja = extractLocaleBlock(sectionBody, 'Japanese')

    const sharedMetrics = parseTags(extractField(sectionBody, 'Metrics'))
    const metrics = Array.from(new Set([...sharedMetrics, ...en.metrics, ...ja.metrics]))

    const combinedTags = Array.from(new Set([...en.tags, ...ja.tags]))

    return {
      _id: `caseStudy.${slug}`,
      _type: 'caseStudy',
      slug: { _type: 'slug', current: slug },
      titleEN: en.title || slug,
      titleJA: ja.title || en.title || slug,
      categoryEN: en.category || 'Case Study',
      categoryJA: ja.category || '導入事例',
      excerptEN: en.excerpt,
      excerptJA: ja.excerpt || en.excerpt,
      metaDescriptionEN: en.excerpt,
      metaDescriptionJA: ja.excerpt || en.excerpt,
      htmlContentEN: en.body,
      htmlContentJA: ja.body,
      metrics,
      tags: combinedTags,
      publishedAt: toIsoDate(en.date || ja.date),
      order: index + 1,
      featured: index < 3,
      imageUrl: '',
    }
  })
}

async function loadEnvFromDotenv() {
  const envPath = path.join(process.cwd(), '.env.local')
  try {
    const raw = await readFile(envPath, 'utf8')
    const parsed = {}
    for (const line of raw.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      const value = trimmed.slice(eq + 1).trim()
      parsed[key] = value
    }
    return parsed
  } catch {
    return {}
  }
}

async function pushDocuments(documents) {
  const dotenv = await loadEnvFromDotenv()
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || dotenv.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || dotenv.NEXT_PUBLIC_SANITY_DATASET || 'production'
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || dotenv.NEXT_PUBLIC_SANITY_API_VERSION || '2025-07-10'
  const token =
    process.env.SANITY_API_WRITE_TOKEN ||
    process.env.SANITY_API_READ_TOKEN ||
    dotenv.SANITY_API_WRITE_TOKEN ||
    dotenv.SANITY_API_READ_TOKEN

  if (!projectId || !token) {
    throw new Error(
      'Missing Sanity credentials. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN (or SANITY_API_READ_TOKEN).',
    )
  }

  const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`
  const chunkSize = 20

  for (let i = 0; i < documents.length; i += chunkSize) {
    const chunk = documents.slice(i, i + chunkSize)
    const payload = {
      mutations: chunk.map((doc) => ({ createOrReplace: doc })),
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const details = await response.text()
      throw new Error(`Sanity mutation failed (${response.status}): ${details}`)
    }
  }
}

async function main() {
  const primarySourcePath = path.join(process.cwd(), PRIMARY_CONTENT_FILE)
  const primarySource = await readFile(primarySourcePath, 'utf8')

  let combinedSource = ''
  try {
    const combinedSourcePath = path.join(process.cwd(), COMBINED_BLOG_CONTENT_FILE)
    combinedSource = await readFile(combinedSourcePath, 'utf8')
  } catch {
    combinedSource = ''
  }

  const primaryBlogDocs = buildBlogDocumentsFromPrimary(primarySource)
  const combinedBlogDocs = combinedSource
    ? buildBlogDocumentsFromCombined(combinedSource)
    : []
  const blogDocs = mergeBlogDocuments(primaryBlogDocs, combinedBlogDocs)

  const caseDocs = buildCaseStudyDocuments(primarySource)
  const documents = [...blogDocs, ...caseDocs]

  await mkdir(path.join(process.cwd(), OUTPUT_DIR), { recursive: true })
  const ndjsonPath = path.join(process.cwd(), OUTPUT_DIR, OUTPUT_FILE)
  const ndjson = documents.map((doc) => JSON.stringify(doc)).join('\n')
  await writeFile(ndjsonPath, ndjson, 'utf8')

  console.log(
    `Exported ${documents.length} docs (${blogDocs.length} blog + ${caseDocs.length} case studies) to ${path.join(
      OUTPUT_DIR,
      OUTPUT_FILE,
    )}`,
  )

  if (process.argv.includes('--push')) {
    await pushDocuments(documents)
    console.log('Pushed documents to Sanity successfully.')
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
