import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import JapaneseITManagedServicesClient from './client'

export const metadata: Metadata = {
  title: 'マネージドサービス東京 | 24時間IT運用・インフラ管理 — AKRIN',
  description:
    'AKRINは東京を拠点にマネージドITサービスを提供。24時間監視、バイリンガルヘルプデスク、インフラ管理、セキュリティ対策、IT戦略立案まで、日本で事業展開する企業のIT運用を包括的にサポートします。',
  alternates: {
    canonical: '/ja/services/it-managed-services',
    languages: {
      en: '/services/it-managed-services',
      ja: '/ja/services/it-managed-services',
      'x-default': '/services/it-managed-services',
    },
  },
  openGraph: {
    title: 'マネージドサービス東京 | 24時間IT運用・インフラ管理 — AKRIN',
    description:
      'AKRINは東京を拠点にマネージドITサービスを提供。24時間監視、バイリンガルヘルプデスク、インフラ管理、セキュリティ対策、IT戦略立案まで、日本で事業展開する企業のIT運用を包括的にサポートします。',
    url: '/ja/services/it-managed-services',
    type: 'website',
  },
}

export default function JapaneseITManagedServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'マネージドサービス東京',
    serviceType: 'ITマネージドサービス',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/ja/services/it-managed-services',
    description:
      'AKRINは東京を拠点にマネージドITサービスを提供。24時間監視、バイリンガルヘルプデスク、インフラ管理、セキュリティ対策、IT戦略立案まで、日本で事業展開する企業のIT運用を包括的にサポートします。',
  }

  return (
    <div className="overflow-x-clip bg-[#F4F3EC]">
      <Navbar />
      <JapaneseITManagedServicesClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
