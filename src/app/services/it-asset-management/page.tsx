import { Footer } from '@/components/footer'
import { ItAssetManagementPage } from '@/components/it-asset-management-page'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Asset Management & Lifecycle Tracking | Services',
  description:
    'Track and optimize IT assets from procurement to retirement with complete lifecycle visibility.',
  alternates: {
    canonical: '/services/it-asset-management',
    languages: {
      en: '/services/it-asset-management',
      ja: '/ja/services/it-asset-management',
      'x-default': '/services/it-asset-management',
    },
  },
  openGraph: {
    title: 'IT Asset Management & Lifecycle Tracking | Services',
    description:
      'Track and optimize IT assets from procurement to retirement with complete lifecycle visibility.',
    url: '/services/it-asset-management',
    type: 'website',
  },
}

export default function ItAssetManagementServicePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Asset Management & Lifecycle Tracking',
    serviceType: 'IT Asset Management & Lifecycle Tracking',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/services/it-asset-management',
    description:
      'Track and optimize IT assets from procurement to retirement with complete lifecycle visibility.',
  }

  return (
    <div className="overflow-x-clip bg-white">
      <Navbar />
      <ItAssetManagementPage locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
