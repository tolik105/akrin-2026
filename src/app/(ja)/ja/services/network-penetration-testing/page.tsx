import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import NetworkPenetrationTestingJaClient from './client'

export const metadata: Metadata = {
  title: 'ネットワークペネトレーションテスト',
  description:
    '外部・内部侵入テスト、脆弱性評価、改善支援を日本企業向けに提供します。',
  alternates: {
    canonical: '/ja/services/network-penetration-testing',
    languages: {
      en: '/services/network-penetration-testing',
      ja: '/ja/services/network-penetration-testing',
      'x-default': '/services/network-penetration-testing',
    },
  },
  openGraph: {
    title: 'ネットワークペネトレーションテストサービス：外部・内部侵入テスト | AKRIN K.K.',
    description:
      '外部・内部ネットワーク侵入テスト、脆弱性評価、セキュリティ監査を組み合わせたプロフェッショナルなペネトレーションテストサービス。',
    url: '/ja/services/network-penetration-testing',
    type: 'website',
  },
}

export default function NetworkPenetrationTestingJaPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'ネットワークペネトレーションテストサービス',
      serviceType: 'Network Penetration Testing and Security Assessment Services',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.jp',
      },
      areaServed: {
        '@type': 'Country',
        name: '日本',
      },
      url: 'https://akrin.jp/ja/services/network-penetration-testing',
      description:
        '外部・内部侵入テスト、脆弱性評価、セキュリティ監査を含む日本企業向けプロフェッショナルなネットワークペネトレーションテストサービス。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ネットワークペネトレーションテストとは？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ネットワークペネトレーションテストは、認定されたエシカルハッカーがITインフラストラクチャに対して行う許可されたシミュレーション攻撃です。悪意ある攻撃者がシステムにアクセスする前に、悪用可能なセキュリティ脆弱性を特定し、改善指導を提供します。',
          },
        },
        {
          '@type': 'Question',
          name: 'ペネトレーションテストはどのくらいの頻度で実施すべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ほとんどのコンプライアンスフレームワークでは、最低年1回のペネトレーションテストが必要です。ネットワークの大幅な変更後、主要なデプロイメント前、および最低年1回のテストを推奨します。',
          },
        },
        {
          '@type': 'Question',
          name: '外部と内部のペネトレーションテストの違いは？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '外部ペネトレーションテストはインターネット公開資産を外部者の視点から評価し、内部テストはネットワーク内部に既にいる攻撃者をシミュレートします。包括的なセキュリティ評価には両方が含まれます。',
          },
        },
        {
          '@type': 'Question',
          name: 'ブラックボックステストとグレーボックステストの違いは？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ブラックボックステストではテスターにシステムの事前知識を与えず、実際の外部攻撃者をシミュレートします。グレーボックステストでは認証情報やネットワークマップなどの限定的な情報を提供し、特定領域の深い調査を可能にします。',
          },
        },
        {
          '@type': 'Question',
          name: 'ネットワークペネトレーションテストにはどのくらいの期間がかかりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '典型的なネットワークペネトレーションテストは、範囲、複雑さ、対象システムの数に応じて1〜3週間かかります。',
          },
        },
        {
          '@type': 'Question',
          name: 'どのような成果物が含まれますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'すべてのエンゲージメントには、エグゼクティブサマリー、詳細な技術的発見事項、概念実証エビデンス、リスク評価、優先順位付き改善指導を含む包括的なペネトレーションテストレポートが含まれます。',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <NetworkPenetrationTestingJaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
