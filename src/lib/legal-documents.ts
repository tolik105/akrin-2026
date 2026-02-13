import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

export type LegalDocumentName =
  | 'terms-of-service.md'
  | 'terms-of-service-ja.md'
  | 'privacy-policy.md'
  | 'privacy-policy-ja.md'
  | 'cookie-policy.md'
  | 'cookie-policy-ja.md'

export const getLegalDocument = cache(async (filename: LegalDocumentName) => {
  const absolutePath = path.join(process.cwd(), 'legal', filename)
  return readFile(absolutePath, 'utf8')
})
