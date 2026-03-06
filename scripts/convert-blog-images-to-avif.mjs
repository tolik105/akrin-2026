import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = 'assets/images/blog/posts'
const OUTPUT_DIR = 'public/blog-images/posts'
const MANIFEST_FILE = 'manifest.json'
const COMBINED_CONTENT_FILE = 'docs/content/blog/AKRIN_Blog_Content_Combined.md'
const EXISTING_EXPORT_FILE = 'sanity-import/blog-case.ndjson'

const SETTINGS = {
  format: 'avif',
  quality: 82,
  effort: 9,
  chromaSubsampling: '4:4:4',
  keepMetadata: true,
}

function toPosix(value) {
  return value.split(path.sep).join('/')
}

function parseCombinedOutputNameByKey(raw) {
  const map = new Map()
  const matches = raw.matchAll(/^# BLOG POST:\s+([^\n]+)\s*$/gm)

  for (const match of matches) {
    const fileName = match[1].trim()
    const key = fileName.match(/^blog-(\d+-\d+)-/)?.[1]
    if (!key) continue
    map.set(key, fileName.replace(/\.md$/i, '.avif'))
  }

  return map
}

function parseExistingOutputNameByKey(raw) {
  const map = new Map()
  const matches = raw.matchAll(/\/blog-images\/posts\/([^"\s]+\.avif)/g)

  for (const match of matches) {
    const fileName = match[1].trim()
    const key = fileName.match(/^blog-(\d+-\d+)-/)?.[1]
    if (!key || map.has(key)) continue
    map.set(key, fileName)
  }

  return map
}

function deriveOutputName(fileName, outputNameByKey) {
  const key = fileName.match(/^blog-(\d+-\d+)-/)?.[1]
  if (key && outputNameByKey.has(key)) {
    return outputNameByKey.get(key)
  }
  return fileName.replace(/\.(jpe?g)$/i, '.avif')
}

async function getSourceFiles(sourceDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const absolutePath = path.join(sourceDir, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await getSourceFiles(absolutePath)))
      continue
    }

    if (!entry.isFile() || !/^hero\.(jpe?g)$/i.test(entry.name)) {
      continue
    }

    files.push(absolutePath)
  }

  return files.sort((a, b) => a.localeCompare(b))
}

async function convertOne(relativeSourcePath, outputNameByKey) {
  const sourcePath = path.join(process.cwd(), relativeSourcePath)
  const sourceKey = `${path.basename(path.dirname(relativeSourcePath))}.jpg`
  const outputName = deriveOutputName(sourceKey, outputNameByKey)
  const outputPath = path.join(process.cwd(), OUTPUT_DIR, outputName)

  const sourceStats = await stat(sourcePath)
  const sourceMeta = await sharp(sourcePath).metadata()

  if (!sourceMeta.width || !sourceMeta.height) {
    throw new Error(`Missing dimensions for source image: ${relativeSourcePath}`)
  }

  let pipeline = sharp(sourcePath)
  if (SETTINGS.keepMetadata) {
    pipeline = pipeline.withMetadata()
  }

  await pipeline
    .avif({
      quality: SETTINGS.quality,
      effort: SETTINGS.effort,
      chromaSubsampling: SETTINGS.chromaSubsampling,
    })
    .toFile(outputPath)

  const outputStats = await stat(outputPath)
  const outputMeta = await sharp(outputPath).metadata()

  if (!outputMeta.width || !outputMeta.height) {
    throw new Error(`Missing dimensions for output image: ${outputName}`)
  }

  if (
    outputMeta.width !== sourceMeta.width ||
    outputMeta.height !== sourceMeta.height
  ) {
    throw new Error(
      `Dimension mismatch for ${relativeSourcePath}: ${sourceMeta.width}x${sourceMeta.height} -> ${outputMeta.width}x${outputMeta.height}`,
    )
  }

  return {
    source: toPosix(relativeSourcePath),
    output: `/blog-images/posts/${outputName}`,
    width: sourceMeta.width,
    height: sourceMeta.height,
    sourceBytes: sourceStats.size,
    outputBytes: outputStats.size,
    ratio: Number((outputStats.size / sourceStats.size).toFixed(4)),
  }
}

async function main() {
  const sourceDir = path.join(process.cwd(), SOURCE_DIR)
  const outputDir = path.join(process.cwd(), OUTPUT_DIR)
  const combinedContentPath = path.join(process.cwd(), COMBINED_CONTENT_FILE)
  const existingExportPath = path.join(process.cwd(), EXISTING_EXPORT_FILE)

  await mkdir(outputDir, { recursive: true })
  const combinedRaw = await readFile(combinedContentPath, 'utf8')
  const existingExportRaw = await readFile(existingExportPath, 'utf8')
  const outputNameByKey = parseCombinedOutputNameByKey(combinedRaw)
  const existingOutputNameByKey = parseExistingOutputNameByKey(existingExportRaw)

  for (const [key, fileName] of existingOutputNameByKey.entries()) {
    outputNameByKey.set(key, fileName)
  }

  const files = (await getSourceFiles(sourceDir)).map((absolutePath) =>
    path.relative(process.cwd(), absolutePath),
  )

  if (files.length === 0) {
    throw new Error(`No hero JPG files found in ${SOURCE_DIR}`)
  }

  const manifestEntries = []

  for (const relativeSourcePath of files) {
    const row = await convertOne(relativeSourcePath, outputNameByKey)
    manifestEntries.push(row)
    console.log(`Converted ${row.source} -> ${row.output}`)
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    sourceDir: SOURCE_DIR,
    outputDir: '/blog-images/posts',
    settings: SETTINGS,
    count: manifestEntries.length,
    files: manifestEntries,
  }

  const manifestPath = path.join(outputDir, MANIFEST_FILE)
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

  console.log(`Wrote manifest: ${toPosix(path.join(OUTPUT_DIR, MANIFEST_FILE))}`)
  console.log(`Total converted: ${manifestEntries.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
