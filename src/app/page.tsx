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
    description:
      'AKRIN provides managed IT services in Tokyo including ITAD, IT asset management, 24/7 support, and IT project management. Bilingual service provider for businesses in Japan.',
    url: 'https://akrin.jp',
    siteName: 'AKRIN K.K.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://akrin.jp/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AKRIN — Managed IT Services in Tokyo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKRIN K.K. | IT Solutions for Businesses in Japan',
    description:
      'Managed IT services, cybersecurity, cloud operations, and strategic IT consulting.',
    images: ['https://akrin.jp/images/og-image.jpg'],
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
