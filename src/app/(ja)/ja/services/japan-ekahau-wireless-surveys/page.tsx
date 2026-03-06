import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import JapanEkahauWirelessSurveysJAClient from './client'

export const metadata: Metadata = {
  title: 'Ekahau無線サーベイ（日本）',
  description:
    'Ekahauによる無線調査、RF分析、AP配置設計、FLUKE試験を日本の企業向けに提供します。',
  alternates: {
    canonical: '/ja/services/japan-ekahau-wireless-surveys',
    languages: {
      en: '/services/japan-ekahau-wireless-surveys',
      ja: '/ja/services/japan-ekahau-wireless-surveys',
      'x-default': '/services/japan-ekahau-wireless-surveys',
    },
  },
  openGraph: {
    title: 'Ekahau ワイヤレスサイトサーベイサービス — AKRIN Japan',
    description:
      'Ekahau AI Pro & Sidekickを活用したプロフェッショナルWi-Fiサイトサーベイ。予測・アクティブ・パッシブサーベイおよびFLUKEケーブルテストをエンタープライズ無線ネットワーク向けに提供。',
    url: '/ja/services/japan-ekahau-wireless-surveys',
    type: 'website',
  },
}

export default function JapanEkahauWirelessSurveysJAPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ekahau ワイヤレスサイトサーベイサービス',
    serviceType: 'ワイヤレスサイトサーベイ・構造化ケーブリングサービス',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/ja/services/japan-ekahau-wireless-surveys',
    description:
      'Ekahauを使用したプロフェッショナルなワイヤレスサイトサーベイ。予測設計、アクティブネットワーク検証、パッシブRF評価、スペクトラム分析、FLUKE認定構造化ケーブリングサービスを日本のエンタープライズ環境向けに提供。',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ワイヤレスサーベイ・ケーブリングサービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '予測ワイヤレスサイトサーベイ',
            description: 'Ekahau AI Proを使用した導入前Wi-Fiネットワーク設計。フロアプランモデリングとアクセスポイント配置の最適化。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'アクティブワイヤレスサイトサーベイ',
            description: 'Ekahau Sidekickを使用した導入後Wi-Fiネットワーク検証。信号強度、スループット、ローミングテスト。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'パッシブRFサイトサーベイ',
            description: '近隣ネットワーク、不正アクセスポイント、チャネル干渉を検出するRF環境分析。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'スペクトラム分析',
            description: '2.4 GHz、5 GHz、6 GHz帯域における非Wi-Fi干渉源を特定する詳細なRF干渉調査。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FLUKEケーブルテスト・認証',
            description: 'Fluke Networks DSX CableAnalyzerを使用した銅線・光ファイバーのプロフェッショナル構造化ケーブリング認証。',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '構造化ケーブリング設計・施工',
            description: 'Cat6、Cat6A、Cat7、Cat8、光ファイバーインフラの完全な構造化ケーブリング設計、施工、認証。',
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
        name: 'Ekahauワイヤレスサイトサーベイにはどのくらいの時間がかかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1フロアのオフィスサーベイは通常1日で完了できます。複数フロアや複数棟の施設では、範囲、カバレッジエリア、ネットワークの複雑さに応じて、複数日のオンサイトデータ収集が必要になります。',
        },
      },
      {
        '@type': 'Question',
        name: '予測サーベイと導入後サーベイの違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '予測サーベイは、設置前にアクセスポイントの配置とカバレッジを設計するために予測モデリングを使用します。導入後サーベイは、ネットワーク稼働後の実際のWi-Fiネットワークパフォーマンス、信号強度、データレートを検証します。',
        },
      },
      {
        '@type': 'Question',
        name: 'Ekahau Sidekickはサイトサーベイの精度をどのように向上させますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ekahau Sidekickは、デュアルバンドラジオとスペクトラムアナライザーを内蔵した専用Wi-Fiサイトサーベイ測定デバイスです。信号強度、ノイズレベル、RF干渉、チャネル利用率のデータポイントを同時に収集し、標準的なワイヤレスアダプターよりもはるかに正確で包括的な結果を提供します。',
        },
      },
      {
        '@type': 'Question',
        name: 'Wi-Fiサイトサーベイにフロアプランは必要ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。壁材料と部屋のレイアウトを含む正確なフロアプランは、予測サーベイのモデリングとレポートの精度を大幅に向上させます。必要に応じて、既存の図面から使用可能なサーベイレイアウトの準備をサポートします。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのWi-Fi規格とアクセスポイントに対応していますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wi-Fi 6、Wi-Fi 6E、およびレガシー規格に対応しています。当社のEkahauワイヤレスサーベイ手法はベンダーニュートラルで、あらゆるアクセスポイントのブランドやモデルに対応可能です。',
        },
      },
      {
        '@type': 'Question',
        name: 'ワイヤレスサーベイは現在のネットワーク運用に影響しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ。アクティブサーベイはデータ収集のためにライブWi-Fiネットワークに接続しますが、設定を変更することはありません。パッシブサーベイとスペクトラム分析は接続せずにデータを収集します。すべてのサーベイ活動は運用の中断を避けるよう設計されています。',
        },
      },
      {
        '@type': 'Question',
        name: 'FLUKEケーブルテストはワイヤレスサーベイと一緒に提供されますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。ワイヤレスサイトサーベイと併せて、FLUKE認定の構造化ケーブリングテストを提供し、ワイヤレスと有線の両方のインフラがパフォーマンス基準を満たすことを保証します。',
        },
      },
    ],
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <JapanEkahauWirelessSurveysJAClient />
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
