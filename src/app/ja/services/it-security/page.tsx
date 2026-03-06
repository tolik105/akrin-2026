import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITSecurityJaClient from './client'

export const metadata: Metadata = {
  title: 'ITセキュリティサービス：マネージドセキュリティ・コンサルティング・監査 | AKRIN K.K.',
  description:
    '企業向けマネージドITセキュリティサービス、情報セキュリティコンサルティング、監査サービス。24/7監視、ISO 27001準拠、迅速なインシデント対応を日本で提供。',
  alternates: {
    canonical: '/ja/services/it-security',
    languages: {
      en: '/services/it-security',
      ja: '/ja/services/it-security',
      'x-default': '/services/it-security',
    },
  },
  openGraph: {
    title: 'ITセキュリティサービス：マネージドセキュリティ・コンサルティング・監査 | AKRIN K.K.',
    description:
      'セキュリティコンサルティング、マネージドセキュリティ運用、継続的監視を組み合わせたマネージドITセキュリティサービス。',
    url: '/ja/services/it-security',
    type: 'website',
  },
}

export default function ITSecurityJaPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'ITセキュリティサービス',
      serviceType: 'IT Security and Information Security Services',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.jp',
      },
      areaServed: {
        '@type': 'Country',
        name: '日本',
      },
      url: 'https://akrin.jp/ja/services/it-security',
      description:
        '企業向けマネージドITセキュリティサービス、情報セキュリティコンサルティング、ITセキュリティ監査サービス。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ITセキュリティサービスはどのような脅威から保護しますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '当社のITセキュリティサービスは、マルウェア、ランサムウェア、フィッシング、データ侵害、内部脅威、高度持続的脅威に対して、早期検知と迅速な対応機能を備えた多層マネージドセキュリティアプローチで保護します。',
          },
        },
        {
          '@type': 'Question',
          name: 'マネージドセキュリティサービスと社内セキュリティの違いは？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'マネージドセキュリティサービスは、24/7監視、専門的なセキュリティ知識、高度な脅威検知システムを提供します。予測可能なコストでエンタープライズグレードの情報セキュリティを実現します。',
          },
        },
        {
          '@type': 'Question',
          name: 'セキュリティコンサルティングはどのコンプライアンスフレームワークに対応していますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ISO 27001、PCI DSS、SOC 2、GDPR、日本の個人情報保護法、業界固有の基準に対応しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'リモートワーク環境のセキュリティ確保は可能ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。VPN設定、エンドポイント保護、ゼロトラストアクセス、クラウドセキュリティ対策、モバイルデバイス管理を含む包括的なリモートワークセキュリティを実装します。',
          },
        },
        {
          '@type': 'Question',
          name: '情報セキュリティ監査には何が含まれますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ネットワーク機器、アクセス制御、データ保護、インシデント対応手順、コンプライアンス体制を検査し、優先順位付きの調査結果と改善ガイダンスを含む包括的なレポートを提供します。',
          },
        },
        {
          '@type': 'Question',
          name: 'セキュリティインシデントへの対応速度は？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '迅速な対応能力を備えた定義済みレスポンスSLAが含まれます。即時の脅威封じ込め、フォレンジック調査、復旧支援を提供します。',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <ITSecurityJaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
