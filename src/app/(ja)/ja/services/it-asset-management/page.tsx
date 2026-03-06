import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ItAssetManagementJaClient } from './client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT資産管理サービス',
  description:
    '調達、棚卸し、ライセンス管理、ライフサイクル統制、廃棄まで一貫して支援します。',
  alternates: {
    canonical: '/ja/services/it-asset-management',
    languages: {
      en: '/services/it-asset-management',
      ja: '/ja/services/it-asset-management',
      'x-default': '/services/it-asset-management',
    },
  },
  openGraph: {
    title: 'IT資産管理サービス | ITAMライフサイクルソリューション | AKRIN',
    description:
      '調達からソフトウェア資産管理、ITAD廃棄まで、IT資産ライフサイクル全体をカバーするエンタープライズIT資産管理サービス。',
    url: '/ja/services/it-asset-management',
    type: 'website',
  },
}

export default function JapaneseItAssetManagementServicePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT資産管理サービス',
    serviceType: 'IT Asset Management',
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
      '調達からソフトウェア資産管理、ITAD廃棄まで、IT資産ライフサイクル全体をカバーするエンタープライズIT資産管理サービス。',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT資産管理サービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '資産ディスカバリーとインベントリ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ソフトウェア資産管理',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '資産ライフサイクル管理',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ITAMプラットフォーム構築',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'クラウド資産管理',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'コンプライアンスとリスク低減',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'IT資産管理とは何ですか？なぜ重要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IT資産管理は、ITライフサイクル全体を通じてIT資産を追跡・管理・最適化するプロセスです。コスト削減、コンプライアンス確保、運用効率向上、テクノロジー投資に関する適切な意思決定を可能にします。',
        },
      },
      {
        '@type': 'Question',
        name: 'AKRINはどのような種類のIT資産を管理しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'エンドポイント、サーバー、ネットワーク機器、モバイルデバイス、周辺機器、ソフトウェアライセンス、クラウド資産など、あらゆるカテゴリのIT資産をライフサイクル全体で管理します。',
        },
      },
      {
        '@type': 'Question',
        name: 'ITAMソフトウェアは既存システムとどのように連携しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ITAMソフトウェアはITサービス管理プラットフォーム、チケットシステム、調達ツール、ディレクトリサービスと連携します。構成管理データベース（CMDB）がすべての資産情報を接続する中央リポジトリとなります。',
        },
      },
      {
        '@type': 'Question',
        name: '日本国内の複数拠点運用に対応できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。IT資産管理プロセスは、日本全国の分散オフィス、リモートユーザー、一元管理のレポーティング要件に対応します。日英バイリンガルのサービス提供により、シームレスな運用管理を実現します。',
        },
      },
      {
        '@type': 'Question',
        name: '資産ライフサイクル管理はITADとどう連携しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '資産ライフサイクル管理は、資産がEOLに達した時点でIT資産廃棄に自然に移行します。AKRINはこれらのワークフローを接続し、廃棄、セキュアなデータ破壊、コンプライアンス証跡を一連のプロセスで管理します。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのようなレポーティングと資産追跡が提供されますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ライフサイクル、利用率、コンプライアンス、最適化に関するレポーティングをIT経営層およびビジネスステークホルダー向けに提供します。資産追跡システムにより、管理対象IT資産の最新情報を常に把握できます。',
        },
      },
    ],
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <ItAssetManagementJaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </div>
  )
}
