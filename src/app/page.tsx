import { HomePage } from '@/components/home-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AKRIN - Leading IT Solutions Provider in Japan',
  description:
    'Transform your business with AKRIN managed services, cybersecurity, cloud migration, and bilingual IT support in Japan.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ja: '/ja',
      'x-default': '/',
    },
  },
}

export default function Page() {
  return <HomePage locale="en" />
}
