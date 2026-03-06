import { LegalMarkdown } from '@/components/legal-markdown'
import { SimplePageShell } from '@/components/simple-page-shell'
import { getLegalDocument } from '@/lib/legal-documents'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Review AKRIN cookie usage and tracking controls.',
  alternates: {
    canonical: '/cookies',
    languages: {
      en: '/cookies',
      ja: '/ja/cookies',
      'x-default': '/cookies',
    },
  },
}

export default async function CookiesPage() {
  const markdown = await getLegalDocument('cookie-policy.md')

  return (
    <SimplePageShell
      eyebrow="Legal"
      title="Cookie Policy"
      description="This page explains cookie categories, essential usage, and available preference controls."
    >
      <LegalMarkdown markdown={markdown} />
    </SimplePageShell>
  )
}
