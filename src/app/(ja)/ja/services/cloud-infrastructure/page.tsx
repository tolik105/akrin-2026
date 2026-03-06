import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import CloudInfrastructureJaClient from './client'

export const metadata: Metadata = {
  title: 'クラウドインフラサービス',
  description:
    'クラウド移行、運用監視、コスト最適化、ハイブリッド環境支援を日本の企業向けに提供します。',
  alternates: {
    canonical: '/ja/services/cloud-infrastructure',
    languages: {
      en: '/services/cloud-infrastructure',
      ja: '/ja/services/cloud-infrastructure',
      'x-default': '/services/cloud-infrastructure',
    },
  },
  openGraph: {
    title: 'クラウドインフラサービス：移行・管理・最適化 | AKRIN K.K.',
    description:
      'クラウド移行アセスメント、セキュアな移行、24時間365日のマネージドクラウド運用、コスト最適化。',
    url: '/ja/services/cloud-infrastructure',
    type: 'website',
  },
}

export default function CloudInfrastructureJaPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'クラウドインフラサービス',
      serviceType: 'Cloud Infrastructure Services',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.ai',
      },
      areaServed: {
        '@type': 'Country',
        name: '日本',
      },
      url: 'https://akrin.ai/ja/services/cloud-infrastructure',
      description:
        'エンドツーエンドのクラウドインフラサービス — クラウド移行、マネージドクラウド運用、コスト最適化、マルチクラウド管理。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '対応しているクラウドプラットフォームは？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AWS、Microsoft Azure、Google Cloud、プライベートクラウドインフラに対応しています。ワークロードとコンプライアンス要件に合わせたハイブリッドクラウドおよびマルチクラウドアーキテクチャを設計します。',
          },
        },
        {
          '@type': 'Question',
          name: 'クラウド移行にはどのくらいの期間がかかりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '単一アプリケーションの移行は数週間で完了する場合があります。企業全体の移行プロジェクトは、データ量、アプリケーションの依存関係、コンプライアンス要件に応じて3～12ヶ月が一般的です。',
          },
        },
        {
          '@type': 'Question',
          name: '既存のクラウドインフラの管理も可能ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。既存のクラウド環境に対するマネージドクラウドサービスを提供しています。クラウド準備状況アセスメントを実施し、最適化の機会を特定し、24時間365日の継続的な監視・管理に移行します。',
          },
        },
        {
          '@type': 'Question',
          name: 'クラウドセキュリティとコンプライアンスはどのように対応していますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'クラウドセキュリティはすべての層に組み込まれています — ID・アクセス管理、ネットワークセグメンテーション、暗号化、継続的監視。ISO 27001、SOC 2、日本固有のデータレジデンシー要件に沿ったクラウド環境を構築します。',
          },
        },
        {
          '@type': 'Question',
          name: 'クラウドコスト最適化には何が含まれますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'リザーブドインスタンスの計画、ライトサイジング、未使用リソースのクリーンアップ、ストレージ階層化、自動スケーリングポリシーが含まれます。構造化された最適化レビュー後、多くの企業がクラウド費用を20〜35%削減しています。',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <CloudInfrastructureJaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
