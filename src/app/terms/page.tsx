import { SimplePageShell } from '@/components/simple-page-shell'
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

export default function TermsPage() {
  return (
    <SimplePageShell
      eyebrow="Legal"
      title="Terms of Service"
      description="These terms govern use of AKRIN services and website content. The full policy text can be published here during legal finalization."
    />
  )
}
