import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITADPageClient from './client'

export const metadata: Metadata = {
  title: 'ITAD Japan: Secure IT Asset Disposition Services | AKRIN K.K.',
  description:
    'Certified ITAD services in Japan, APAC & US. NIST 800-88 data erasure, secure logistics, value recovery, compliant recycling. Audit-ready documentation for every asset.',
  alternates: {
    canonical: '/services/itad-japan-apac-us',
    languages: {
      en: '/services/itad-japan-apac-us',
      ja: '/ja/services/itad-japan-apac-us',
      'x-default': '/services/itad-japan-apac-us',
    },
  },
  openGraph: {
    title: 'ITAD Japan: Secure IT Asset Disposition Services | AKRIN K.K.',
    description:
      'End-to-end IT asset retirement — certified data erasure, compliant disposal, and value recovery for businesses in Japan, APAC & US.',
    url: '/services/itad-japan-apac-us',
    type: 'website',
    images: [
      {
        url: '/images/og/itad-service.jpg',
        alt: 'AKRIN ITAD Services — Secure IT Asset Disposition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITAD Japan: Secure IT Asset Disposition Services',
    description:
      'Certified data erasure, compliant disposal & value recovery. NIST 800-88 aligned. Audit-ready documentation.',
    images: ['/images/og/itad-service.jpg'],
  },
}

export default function ITADPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Asset Disposition (ITAD)',
    serviceType: 'IT Asset Disposition (ITAD)',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: ['Japan', 'APAC', 'United States'],
    url: 'https://akrin.jp/services/itad-japan-apac-us',
    description:
      'Secure, end-to-end IT asset retirement — certified data erasure, compliant disposal, and value recovery.',
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <ITADPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
