import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import CybersecurityJaClient from './client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'サイバーセキュリティサービス',
  description:
    '監視、脅威対応、リスク評価、コンプライアンス支援を含むセキュリティ運用を提供します。',
  alternates: {
    canonical: '/ja/services/cybersecurity',
    languages: {
      en: '/services/cybersecurity',
      ja: '/ja/services/cybersecurity',
      'x-default': '/services/cybersecurity',
    },
  },
  openGraph: {
    title: 'サイバーセキュリティサービス | マネージドセキュリティソリューション | AKRIN',
    description:
      '24/7 SOC監視、マネージド検知・対応、脆弱性評価、コンプライアンスコンサルティングを含む、日本の組織向けエンタープライズサイバーセキュリティサービス。',
    url: '/ja/services/cybersecurity',
    type: 'website',
  },
}

export default function JapaneseCybersecurityServicePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'サイバーセキュリティサービス',
    serviceType: 'Cybersecurity',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/ja/services/cybersecurity',
    description:
      '24/7 SOC監視、マネージド検知・対応、脆弱性評価、コンプライアンスコンサルティングを含むエンタープライズサイバーセキュリティサービス。',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'サイバーセキュリティサービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'セキュリティオペレーションセンター（SOC）',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'マネージド検知・対応',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'エンドポイント・ネットワークセキュリティ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '脆弱性評価とペネトレーションテスト',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'コンプライアンスとガバナンス',
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
        name: 'AKRINが提供するサイバーセキュリティサービスは？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AKRINは、24/7セキュリティオペレーションセンター監視、マネージド検知・対応、エンドポイント・ネットワークセキュリティ、脆弱性評価、ペネトレーションテスト、コンプライアンスコンサルティング、インシデント対応など、日本で事業を展開する組織向けのマネージドセキュリティサービスを提供しています。',
        },
      },
      {
        '@type': 'Question',
        name: 'SOCとMDRの違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'セキュリティオペレーションセンター（SOC）は継続的な監視とアラート管理を提供し、マネージド検知・対応（MDR）はさらに積極的な脅威ハンティング、自動封じ込め、ハンズオンのインシデント対応を行います。',
        },
      },
      {
        '@type': 'Question',
        name: '中小企業向けのサイバーセキュリティサービスはありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。マネージドサイバーセキュリティサービスは、中小企業から大企業まで対応できるよう設計されています。中小企業のお客様は、共有SOCリソースとパッケージ化されたセキュリティサービスを予測可能な月額コストでご利用いただけます。',
        },
      },
      {
        '@type': 'Question',
        name: 'セキュリティインシデント発生時の対応は？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '確立されたフレームワークに基づくインシデント対応プロセス：SOCによる検知・トリアージ、MDRチームによる調査・封じ込め、根絶・復旧、そして防御強化のための事後レビューと推奨事項の提供を行います。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのコンプライアンスフレームワークに対応していますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 27001、SOC 2、PCI DSS、GDPR、および日本固有の規制要件に対応しています。ギャップ評価、ポリシー策定、監査準備、コンプライアンス態勢を維持するための継続的な監視を含むコンプライアンスサービスを提供しています。',
        },
      },
      {
        '@type': 'Question',
        name: 'バイリンガルでのサイバーセキュリティサービス提供は可能ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。すべてのサイバーセキュリティサービスを英語・日本語の両方で提供しています。セキュリティダッシュボード、インシデントアラートから経営レポート、コンプライアンス文書まで対応します。',
        },
      },
    ],
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <CybersecurityJaClient />
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
