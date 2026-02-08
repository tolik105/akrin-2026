import { SimplePageShell } from '@/components/simple-page-shell'
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

export default function CookiesPage() {
  return (
    <SimplePageShell
      eyebrow="Legal"
      title="Cookie Policy"
      description="This page explains cookie categories, essential usage, and available preference controls."
    />
  )
}
