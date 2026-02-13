import { HomePage } from '@/components/home-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Managed IT Services Tokyo | ITAD, Asset Management & IT Support — AKRIN',
  description:
    'AKRIN provides managed IT services in Tokyo including ITAD, IT asset management, 24/7 support, and IT project management. Bilingual service provider for businesses in Japan.',
  openGraph: {
    title:
      'Managed IT Services Tokyo | AKRIN — Bilingual IT Solutions for Japan',
  },
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
