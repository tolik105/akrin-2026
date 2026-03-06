import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const SOURCE_ROOT = 'src'
const EXTENSIONS = new Set(['.ts', '.tsx'])
const IMAGE_REF_REGEX = /["'`]\/(?:[^"'`\n]+?)\.(?:avif|webp|png|jpe?g|svg)["'`]/g

async function listSourceFiles(dirPath, output = []) {
  const entries = await readdir(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      await listSourceFiles(fullPath, output)
      continue
    }

    if (entry.isFile() && EXTENSIONS.has(path.extname(entry.name))) {
      output.push(fullPath)
    }
  }

  return output
}

async function fileExists(filePath) {
  try {
    const result = await stat(filePath)
    return result.isFile()
  } catch {
    return false
  }
}

async function main() {
  const root = process.cwd()
  const srcRoot = path.join(root, SOURCE_ROOT)
  const files = await listSourceFiles(srcRoot)

  const refs = new Map()

  for (const filePath of files) {
    const content = await readFile(filePath, 'utf8')
    const relFilePath = path.relative(root, filePath).split(path.sep).join('/')

    let match
    while ((match = IMAGE_REF_REGEX.exec(content)) !== null) {
      const imagePath = match[0].slice(1, -1)
      if (!refs.has(imagePath)) {
        refs.set(imagePath, new Set())
      }
      refs.get(imagePath).add(relFilePath)
    }
  }

  const uniqueRefs = Array.from(refs.keys()).sort((a, b) => a.localeCompare(b))
  const missing = []

  for (const imagePath of uniqueRefs) {
    const publicPath = path.join(root, 'public', imagePath.slice(1))
    const exists = await fileExists(publicPath)
    if (!exists) {
      missing.push({ imagePath, usedBy: Array.from(refs.get(imagePath)).sort() })
    }
  }

  console.log(`Scanned files: ${files.length}`)
  console.log(`Unique image references: ${uniqueRefs.length}`)

  if (missing.length > 0) {
    console.error(`Missing image references: ${missing.length}`)
    for (const item of missing) {
      console.error(`- ${item.imagePath}`)
      for (const file of item.usedBy) {
        console.error(`  used by: ${file}`)
      }
    }
    process.exit(1)
  }

  console.log('Image path audit passed: no missing local image references found.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
