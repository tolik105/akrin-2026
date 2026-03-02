import { HomePage } from '@/components/home-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AKRIN - 日本向けITソリューション',
  description:
    'AKRINは日本企業向けに、マネージドIT、セキュリティ、クラウド運用、ITコンサルティングを提供します。',
  alternates: {
    canonical: '/ja',
    languages: {
      en: '/',
      ja: '/ja',
      'x-default': '/',
    },
  },
}

export default function JapanesePage() {
  return <HomePage locale="ja" />
}
