import { Footer } from '@/components/footer'
import { ItAssetManagementPage } from '@/components/it-asset-management-page'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT資産管理・ライフサイクルトラッキング | サービス',
  description:
    '調達から廃棄まで、IT資産のライフサイクル全体を可視化・最適化します。',
  alternates: {
    canonical: '/ja/services/it-asset-management',
    languages: {
      en: '/services/it-asset-management',
      ja: '/ja/services/it-asset-management',
      'x-default': '/services/it-asset-management',
    },
  },
  openGraph: {
    title: 'IT資産管理・ライフサイクルトラッキング | サービス',
    description:
      '調達から廃棄まで、IT資産のライフサイクル全体を可視化・最適化します。',
    url: '/ja/services/it-asset-management',
    type: 'website',
  },
}

export default function JapaneseItAssetManagementServicePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT資産管理・ライフサイクルトラッキング',
    serviceType: 'IT資産管理・ライフサイクルトラッキング',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/ja/services/it-asset-management',
    description:
      '調達から廃棄まで、IT資産のライフサイクル全体を可視化・最適化します。',
  }

  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <ItAssetManagementPage locale="ja" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
