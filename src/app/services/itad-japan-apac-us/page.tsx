import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITADPageClient from './client'

export const metadata: Metadata = {
  title: 'ITAD Tokyo & Japan | IT Asset Disposition (Japan / APAC / US)',
  description:
    'Secure, compliant IT Asset Disposition (ITAD) in Tokyo and across Japan, APAC, and the United States. Data destruction (NIST 800-88 aligned), value recovery, certified recycling, and audit-ready reporting.',
  alternates: {
    canonical: '/services/itad-japan-apac-us',
    languages: {
      en: '/services/itad-japan-apac-us',
      ja: '/ja/services/itad-japan-apac-us',
      'x-default': '/services/itad-japan-apac-us',
    },
  },
  openGraph: {
    title: 'ITAD Tokyo & Japan | IT Asset Disposition (Japan / APAC / US)',
    description:
      'Secure, compliant IT Asset Disposition (ITAD) in Tokyo and across Japan, APAC, and the United States. Data destruction (NIST 800-88 aligned), value recovery, certified recycling, and audit-ready reporting.',
    url: '/services/itad-japan-apac-us',
    type: 'website',
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
      'Secure, compliant IT Asset Disposition (ITAD) in Tokyo and across Japan, APAC, and the United States. Data destruction (NIST 800-88 aligned), value recovery, certified recycling, and audit-ready reporting.',
  }

  return (
    <div className="overflow-x-clip bg-[#F4F3EC]">
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
