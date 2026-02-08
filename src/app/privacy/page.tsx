import { SimplePageShell } from '@/components/simple-page-shell'
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

export default function PrivacyPage() {
  return (
    <SimplePageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="This page describes AKRIN data handling practices, retention principles, and user privacy rights."
    />
  )
}
