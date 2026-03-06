import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITConsultingProjectManagementJaClient from './client'

export const metadata: Metadata = {
  title: 'ITコンサルティングサービス＆プロジェクト管理 | AKRIN K.K.',
  description:
    '日本企業向けのITコンサルティングサービスとプロジェクト管理。インフラ構築、オフィス移転、データセンタープロジェクト、クラウド移行をエンドツーエンドで支援します。',
  alternates: {
    canonical: '/ja/services/it-consulting-project-management',
    languages: {
      en: '/services/it-consulting-project-management',
      ja: '/ja/services/it-consulting-project-management',
      'x-default': '/services/it-consulting-project-management',
    },
  },
  openGraph: {
    title: 'ITコンサルティングサービス＆プロジェクト管理 | AKRIN K.K.',
    description:
      'ITコンサルティングとプロジェクト管理 — インフラ構築、オフィス移転、データセンター移行、クラウド変革を日本全国で提供。',
    url: '/ja/services/it-consulting-project-management',
    type: 'website',
  },
}

export default function ITConsultingProjectManagementJaPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'ITコンサルティング＆プロジェクト管理サービス',
      serviceType: 'IT Consulting and Project Management',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.ai',
      },
      areaServed: {
        '@type': 'Country',
        name: '日本',
      },
      url: 'https://akrin.ai/ja/services/it-consulting-project-management',
      description:
        'ITコンサルティングサービスとプロジェクト管理 — インフラ構築、オフィス移転、データセンタープロジェクト、クラウド移行をエンドツーエンドで支援。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'AKRINのITコンサルティングの範囲は？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'インフラ構築、オフィス移転、データセンタープロジェクト、クラウド移行、テクノロジーリフレッシュプログラムなど、日本全国の組織向けにエンドツーエンドのプロジェクト管理を提供しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'プロジェクトマネージャーはどのように配置されますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '技術的背景、プロジェクトの複雑さ、業界経験に基づいてプロジェクトマネージャーを配置します。全てのプロジェクトマネージャーは認定資格を保有し、エンタープライズ規模の情報技術プロジェクトの管理経験があります。',
          },
        },
        {
          '@type': 'Question',
          name: '東京以外でも対応可能ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。コンサルタントは日本全国に出張し、分散チームや複数拠点のビジネス展開に対するリモートプロジェクト管理サポートも提供しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'プロジェクト管理にはどのツールを使用していますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MS Project、Jira、Asanaなどの業界標準ソリューションを使用しています。既存のビジネスワークフローとのシームレスな統合のため、お客様のプラットフォームに合わせて対応します。',
          },
        },
        {
          '@type': 'Question',
          name: 'どのような規模のプロジェクトに対応していますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '20席規模のオフィス移転から、複数拠点・数百台のエンドポイントにまたがるエンタープライズ規模のインフラ変革まで対応しています。',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <ITConsultingProjectManagementJaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
