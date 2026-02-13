import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const CONTENT_FILE = 'AKRIN_SITE_CONTENT_EN_JA.md'
const OUTPUT_DIR = 'sanity-import'
const OUTPUT_FILE = 'blog-case.ndjson'

function safeString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function stripWrappingQuotes(value) {
  return value.replace(/^['"`](.*)['"`]$/, '$1')
}

function extractField(block, fieldName) {
  const escapedField = escapeRegExp(fieldName)
  const regex = new RegExp(`^-\\s*${escapedField}:\\s*(.+)$`, 'm')
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

function buildBlogDocuments(content) {
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
  const sourcePath = path.join(process.cwd(), CONTENT_FILE)
  const source = await readFile(sourcePath, 'utf8')

  const blogDocs = buildBlogDocuments(source)
  const caseDocs = buildCaseStudyDocuments(source)
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
