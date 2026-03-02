import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITManagedServicesClient from './client'

export const metadata: Metadata = {
  title: 'Managed IT Services Tokyo | 24/7 IT Infrastructure Management — AKRIN',
  description:
    'AKRIN is a managed service provider (MSP) in Tokyo offering 24/7 IT infrastructure management, bilingual help desk, cybersecurity, and strategic IT planning for international businesses in Japan.',
  alternates: {
    canonical: '/services/it-managed-services',
    languages: {
      en: '/services/it-managed-services',
      ja: '/ja/services/it-managed-services',
      'x-default': '/services/it-managed-services',
    },
  },
  openGraph: {
    title: 'Managed IT Services Tokyo | 24/7 IT Infrastructure Management — AKRIN',
    description:
      'AKRIN is a managed service provider (MSP) in Tokyo offering 24/7 IT infrastructure management, bilingual help desk, cybersecurity, and strategic IT planning for international businesses in Japan.',
    url: '/services/it-managed-services',
    type: 'website',
  },
}

export default function ITManagedServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Managed IT Services Tokyo',
    serviceType: 'Managed IT Services',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: [
      { '@type': 'Country', name: 'Japan' },
      { '@type': 'Place', name: 'Asia-Pacific' },
      { '@type': 'Place', name: 'United States' },
      { '@type': 'Place', name: 'Europe' },
    ],
    url: 'https://akrin.jp/services/it-managed-services',
    description:
      'AKRIN is a managed service provider (MSP) in Tokyo offering 24/7 IT infrastructure management, bilingual help desk, cybersecurity, and strategic IT planning for international businesses in Japan.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Managed IT Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Network Monitoring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bilingual Help Desk Support' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Infrastructure Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Security Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Continuity & Disaster Recovery' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic IT Planning & Governance' } },
      ],
    },
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
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
