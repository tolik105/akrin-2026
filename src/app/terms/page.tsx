import { LegalMarkdown } from '@/components/legal-markdown'
import { SimplePageShell } from '@/components/simple-page-shell'
import { getLegalDocument } from '@/lib/legal-documents'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review AKRIN terms of service and usage conditions.',
  alternates: {
    canonical: '/terms',
    languages: {
      en: '/terms',
      ja: '/ja/terms',
      'x-default': '/terms',
    },
  },
}

export default async function TermsPage() {
  const markdown = await getLegalDocument('terms-of-service.md')

  return (
    <SimplePageShell
      eyebrow="Legal"
      title="Terms of Service"
      description="These terms govern use of AKRIN services and website content. The full policy text can be published here during legal finalization."
    >
      <LegalMarkdown markdown={markdown} />
    </SimplePageShell>
  )
}
