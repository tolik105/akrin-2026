import { LegalMarkdown } from '@/components/legal-markdown'
import { SimplePageShell } from '@/components/simple-page-shell'
import { getLegalDocument } from '@/lib/legal-documents'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read how AKRIN collects, uses, and protects personal data.',
  alternates: {
    canonical: '/privacy',
    languages: {
      en: '/privacy',
      ja: '/ja/privacy',
      'x-default': '/privacy',
    },
  },
}

export default async function PrivacyPage() {
  const markdown = await getLegalDocument('privacy-policy.md')

  return (
    <SimplePageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="This page describes AKRIN data handling practices, retention principles, and user privacy rights."
    >
      <LegalMarkdown markdown={markdown} />
    </SimplePageShell>
  )
}
