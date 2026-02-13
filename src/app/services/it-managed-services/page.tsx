import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITManagedServicesClient from './client'

export const metadata: Metadata = {
  title: 'Managed Services Tokyo | 24/7 IT Support & Infrastructure — AKRIN',
  description:
    'AKRIN delivers managed IT services in Tokyo — 24/7 monitoring, bilingual help desk, infrastructure management, security, and strategic IT planning for businesses across Japan.',
  alternates: {
    canonical: '/services/it-managed-services',
    languages: {
      en: '/services/it-managed-services',
      ja: '/ja/services/it-managed-services',
      'x-default': '/services/it-managed-services',
    },
  },
  openGraph: {
    title: 'Managed Services Tokyo | 24/7 IT Support & Infrastructure — AKRIN',
    description:
      'AKRIN delivers managed IT services in Tokyo — 24/7 monitoring, bilingual help desk, infrastructure management, security, and strategic IT planning for businesses across Japan.',
    url: '/services/it-managed-services',
    type: 'website',
  },
}

export default function ITManagedServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Managed Services Tokyo',
    serviceType: 'Managed IT Services',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/services/it-managed-services',
    description:
      'AKRIN delivers managed IT services in Tokyo — 24/7 monitoring, bilingual help desk, infrastructure management, security, and strategic IT planning for businesses across Japan.',
  }

  return (
    <div className="overflow-x-clip bg-[#F4F3EC]">
      <Navbar />
      <ITManagedServicesClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
