'use client'

import Image from 'next/image'
import { useState } from 'react'
import sidekickImage from '@/assets/images/services/japan-ekahau-wireless-surveys/sidekick-2.avif'
import spectrumAnalyzerImage from '@/assets/images/services/japan-ekahau-wireless-surveys/spectrum-analyzer.avif'
import wifiHeatMapImage from '@/assets/images/services/japan-ekahau-wireless-surveys/wifi-coverage-heat-map.avif'
import wirelessSignalMapImage from '@/assets/images/services/japan-ekahau-wireless-surveys/wireless-signal-heat-map.avif'
import flukeReportImage from '@/assets/images/services/japan-ekahau-wireless-surveys/fluke-report.avif'
import { Link } from '@/components/link'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SectionNav } from '@/components/SectionNav'

type SectionItem = {
  id: string
  label: string
  num: string
}

const sectionItems: SectionItem[] = [
  { id: 'overview', label: '概要', num: '01' },
  { id: 'what-is', label: '定義', num: '02' },
  { id: 'survey-types', label: 'サーベイ', num: '03' },
  { id: 'cabling', label: 'ケーブリング', num: '04' },
  { id: 'why-akrin', label: 'AKRINの強み', num: '05' },
  { id: 'process', label: 'プロセス', num: '06' },
  { id: 'industries', label: '対応業界', num: '07' },
  { id: 'faq', label: 'FAQ', num: '08' },
]

const surveyTypes = [
  {
    title: '予測サーベイ',
    subtitle: '導入前Wi-Fi設計',
    description:
      'Ekahau AI Proの予測モデリングにより、設置前にアクセスポイントの配置とカバレッジを設計。フロアプランの取り込み、壁材マッピング、信号シミュレーションを実施します。',
    outputs: [
      '最適化されたアクセスポイント配置の推奨',
      'カバレッジと信号強度のヒートマップ',
      'AP数量を含む部品表',
      'チャネルと出力の構成プラン',
    ],
  },
  {
    title: 'アクティブサイトサーベイ',
    subtitle: '導入後パフォーマンス検証',
    description:
      'Ekahau Sidekickによるオンサイトデータ収集で、ライブWi-Fiネットワークのスループット、信号強度、ノイズレベル、レイテンシ、ローミングを検証します。',
    outputs: [
      '実環境の信号強度とSNRヒートマップ',
      'スループットとレイテンシの測定',
      'ローミング分析とハンドオフ検証',
      'デッドゾーンの特定と改善優先順位',
    ],
  },
  {
    title: 'パッシブサイトサーベイ',
    subtitle: 'RF環境分析',
    description:
      'ネットワーク接続なしで近隣のすべてのWi-Fiネットワークとrf信号からデータを収集。不正アクセスポイント、チャネル輻輳、RF干渉パターンを明らかにします。',
    outputs: [
      '無線周波数環境の完全な可視化',
      '不正アクセスポイントの検出',
      'チャネル利用率とrf干渉のマッピング',
      'チャネルプランニングの推奨',
    ],
  },
  {
    title: 'スペクトラム分析',
    subtitle: '詳細RF干渉調査',
    description:
      'Ekahau Sidekickのスペクトラム機能で2.4 GHz、5 GHz、6 GHz帯域の非Wi-Fi干渉源を特定 — 電子レンジ、Bluetooth、産業機器など。',
    outputs: [
      '非Wi-Fi RF干渉源の特定',
      '帯域利用分析（2.4/5/6 GHz）',
      '干渉重大度の評価',
      '実行可能な緩和策の推奨',
    ],
  },
]

const cablingServices = [
  {
    title: 'FLUKEケーブルテスト・認証',
    subtitle: 'プロフェッショナルグレード検証',
    description:
      'Fluke Networks DSX CableAnalyzerによる銅線（Cat5e〜Cat8）・光ファイバーの認証。TIA・ISO要件に基づく合否判定文書を提供。',
  },
  {
    title: 'ケーブリング設計・施工',
    subtitle: '最初から正しく構築',
    description:
      'Cat6、Cat6A、Cat7、Cat8、光ファイバーの構造化ケーブリング設計・施工・認証。パスウェイ計画、ラック構築、ラベリングを含みます。',
  },
  {
    title: 'アップグレード・交換',
    subtitle: 'ネットワーク基盤の近代化',
    description:
      'Cat5/Cat5eからCat6Aまたは光ファイバーへの段階的アップグレード、レガシー撤去、FLUKE再認証で高スループットのデータレートをサポート。',
  },
]

const processSteps = [
  {
    title: 'ヒアリング・要件定義',
    description: 'Wi-Fiカバレッジ目標、デバイス密度、フロアプラン、既存ネットワーク文書の収集。',
  },
  {
    title: 'サーベイ計画',
    description: 'サーベイタイプの選定、Ekahau Sidekickの準備、オンサイトデータ収集のカバレッジパスマッピング。',
  },
  {
    title: 'オンサイト実施',
    description: 'エンジニアがEkahau SidekickとEkahau Surveyソフトウェアで施設全体のデータを収集。',
  },
  {
    title: '分析・レポート',
    description: 'ヒートマップ可視化、問題マップ、Wi-Fiネットワークに対するデータ駆動型の推奨。',
  },
  {
    title: '検証',
    description: '導入後サイトサーベイでワイヤレスネットワークが設計目標とパフォーマンス要件を満たすことを確認。',
  },
]

const faqItems = [
  {
    q: 'Ekahauワイヤレスサイトサーベイにはどのくらいの時間がかかりますか？',
    a: '1フロアのオフィスは通常1日で完了。複数フロアや複数棟の施設では、範囲とネットワークの複雑さに応じて複数日のデータ収集が必要です。',
  },
  {
    q: '導入前サーベイと導入後サーベイの違いは何ですか？',
    a: '導入前は予測モデリングで設置前にアクセスポイント配置を設計。導入後は実環境のWi-Fiネットワークパフォーマンスとデータレートを検証します。',
  },
  {
    q: 'Ekahau Sidekickはサーベイ精度をどのように向上させますか？',
    a: 'Ekahau Sidekickはデュアルバンドラジオとスペクトラムアナライザーを内蔵した専用デバイス。信号強度、ノイズレベル、rf干渉、チャネル利用率を同時収集します。',
  },
  {
    q: 'Wi-Fiサイトサーベイにフロアプランは必要ですか？',
    a: 'はい。壁材料を含む正確なフロアプランは予測サーベイの精度を大幅に向上させます。既存図面からのレイアウト準備もサポートします。',
  },
  {
    q: 'どのWi-Fi規格に対応していますか？',
    a: 'Wi-Fi 6、Wi-Fi 6E、レガシー規格に対応。Ekahauワイヤレスサーベイ手法はベンダーニュートラルで、あらゆるアクセスポイントに対応可能です。',
  },
  {
    q: 'ワイヤレスサーベイは現在のネットワーク運用に影響しますか？',
    a: 'いいえ。アクティブサーベイはライブWi-Fiネットワークに接続してデータ収集しますが、設定変更は行いません。パッシブサーベイとスペクトラム分析は接続せずにデータを収集します。すべてのサーベイ活動は運用に影響を与えない設計です。',
  },
  {
    q: 'FLUKEケーブルテストはワイヤレスサーベイと一緒に提供されますか？',
    a: 'はい。ワイヤレスサイトサーベイと併せてFLUKE認定の構造化ケーブリングテスト・認証を提供し、有線・無線両方のインフラ品質を保証します。',
  },
]

/* ── Helper Components ── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-[#0A0B19]" />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0A0B19]/40">{label}</span>
    </div>
  )
}

function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#F0F1F5] to-[#E8EAF0] ring-1 ring-[#E2E5EF] ${className || ''}`}
    >
      <div className="px-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm">
          <svg
            className="h-5 w-5 text-[#6B6D7C]/40"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 19.5V4.5a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
        <span className="mt-2 block text-[11px] font-medium uppercase tracking-wider text-[#6B6D7C]/40">
          {label}
        </span>
      </div>
    </div>
  )
}

/* ── Main Component ── */

export default function JapanEkahauWirelessSurveysJAClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-[#F7F7FC]">
      <h1 className="sr-only">Ekahauワイヤレスサイトサーベイサービス — 日本</h1>
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src={sidekickImage}
            alt="Ekahau Sidekickワイヤレスサイトサーベイ測定デバイス"
            fill
            priority
            className="object-contain object-top p-4 sm:p-6"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 20%, rgba(2,48,79,0.4) 40%, rgb(2,48,79) 58%)',
          }}
        />
        <div className="relative z-10 flex min-h-[520px] flex-col justify-end px-5 pb-7 sm:min-h-[560px] sm:px-8 sm:pb-9">
          <div className="mb-4 flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-white/60" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Ekahauワイヤレスサーベイ</span>
          </div>
          <p className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            Ekahauワイヤレスサイトサーベイサービス — 日本
          </p>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            弱いカバレッジを特定し、アクセスポイント配置を最適化し、実環境のWi-Fiネットワークパフォーマンスを検証するデータ駆動型ワイヤレスサイトサーベイ。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/ja/contact?service=japan-ekahau-wireless-surveys"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              サイトサーベイを依頼
            </Link>
            <Link
              href="/ja/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
            >
              サービス一覧
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Desktop hero (full-bleed) ── */}
      <section id="hero-desktop" className="relative hidden h-[500px] overflow-hidden bg-[#02304F] lg:block">
        <div className="absolute inset-y-0 right-0 w-[55%]">
          <Image
            src={sidekickImage}
            alt="Ekahau Sidekickワイヤレスサイトサーベイ測定デバイス"
            fill
            priority
            className="object-contain object-right p-8"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 35%, rgba(2,48,79,0.95) 45%, rgba(2,48,79,0.7) 60%, rgba(2,48,79,0.3) 75%, rgba(2,48,79,0.1) 90%)',
          }}
        />
        <div className="relative flex h-[500px] items-center">
          <div className="mx-auto w-full max-w-[1047px] px-12">
            <div className="max-w-lg xl:max-w-xl">
              <div className="mb-4 flex items-center gap-2">
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-white/60" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Ekahauワイヤレスサーベイ</span>
              </div>
              <p className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                Ekahauワイヤレスサイトサーベイサービス — 日本
              </p>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                Ekahau AI ProとEkahau Sidekickを活用したプロフェッショナルWi-Fiサイトサーベイ。弱いカバレッジを特定し、アクセスポイント配置を最適化し、実環境のWi-Fiネットワークパフォーマンスを検証します。
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/ja/contact?service=japan-ekahau-wireless-surveys"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  サイトサーベイを依頼
                </Link>
                <Link
                  href="/ja/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[14px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                >
                  サービス一覧
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav
        variant="ribbon"
        ariaLabel="ページセクション"
        items={sectionItems}
      />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ═══ 1. OVERVIEW ═══ */}
          <section id="overview" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  {/* Text — 7 columns */}
                  <div className="lg:col-span-7">
                    <SectionLabel label="概要" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      すべてのWi-Fiネットワークにプロフェッショナルサイトサーベイが必要な理由
                    </h2>
                    <div className="mt-6 max-w-3xl text-base/7 text-[#0A0B19]/70">
                      <p>
                        Wi-Fiパフォーマンスの低下は、業務を中断し、生産性を低下させ、ネットワーク全体の重大なリスクにつながります。新規ワイヤレス導入の計画、既存Wi-Fiネットワークの拡張、持続的なカバレッジ問題のトラブルシューティングのいずれにおいても、プロフェッショナルなEkahauワイヤレスサーベイは、確信を持った根拠に基づく意思決定に必要なデータを提供します。
                      </p>
                      <p className="mt-4">
                        AKRINでは、ワイヤレスサイトサーベイの計画・評価における業界標準プラットフォームとしてEkahauを使用しています。当社のエンジニアは、実践的なオンサイトフィールド実行と詳細なデータ分析を組み合わせ、Wi-Fiネットワークインフラが初期計画から導入後の検証まで意図通りに機能するようサポートします。
                      </p>
                    </div>
                  </div>

                  {/* Image — 5 columns */}
                  <div className="mt-10 lg:col-span-5 lg:mt-0">
                    <div className="overflow-hidden rounded-2xl ring-1 ring-[#E2E5EF] lg:sticky lg:top-32">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={wifiHeatMapImage}
                          alt="Wi-Fiカバレッジヒートマップ — 信号強度分布"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checklist grid — bento cell pattern */}
                <div className="mt-16 border-t border-[#0A0B19]/[0.06] pt-10">
                  <h3 className="text-lg font-semibold text-[#0A0B19]">ワイヤレスサイトサーベイで特定できること</h3>
                  <div className="mt-8 rounded-3xl bg-[#0A0B19]/[0.03] p-1">
                    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        'フロア・ゾーン間の信号強度とカバレッジギャップ',
                        '近隣Wi-Fiネットワークおよび非Wi-Fi源からのRF干渉',
                        'アクセスポイントのキャパシティとデバイス密度に対する最適数',
                        'Wi-Fiネットワークのデータレートに影響するノイズレベルの問題',
                        '移行エリアにおけるローミング問題と弱いカバレッジ',
                        '無線周波数伝搬に影響する壁材料',
                      ].map((item, idx) => (
                        <div key={item} className="relative overflow-hidden rounded-2xl">
                          <div className="absolute inset-0 rounded-2xl bg-white" />
                          <div className="relative flex items-start gap-4 p-6">
                            <span className="mt-0.5 font-mono text-[11px] font-medium tracking-wider text-[#0066CC]">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm leading-relaxed text-[#0A0B19]/70">{item}</span>
                          </div>
                          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-sm outline outline-1 -outline-offset-1 outline-black/5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 2. WHAT IS ═══ */}
          <section id="what-is" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  {/* Text — 7 columns */}
                  <div className="lg:col-span-7">
                    <SectionLabel label="定義" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      Ekahauワイヤレスサイトサーベイとは？
                    </h2>
                    <div className="mt-6 space-y-4 text-base/7 text-[#0A0B19]/70">
                      <p>
                        Ekahauワイヤレスサイトサーベイは、Ekahau AI Pro、Ekahau Surveyソフトウェア、Ekahau Sidekick測定デバイスを使用したプロフェッショナルなRFおよびWi-Fiパフォーマンス評価です。これらは世界中のネットワーク専門家がデータ収集、カバレッジ問題の特定、高性能Wi-Fiネットワーク設計に使用する主要ツールです。
                      </p>
                      <p>
                        Ekahau Sidekickは、内蔵のデュアルバンドラジオと専用スペクトラムアナライザーを使用して、信号強度、RF干渉、ノイズレベル、チャネル利用率、カバレッジ分布のデータポイントを同時に取得します — 標準的なワイヤレスアダプターよりもはるかに正確です。
                      </p>
                    </div>

                    <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-[#0A0B19]">主なWi-Fiサイトサーベイ機能</h3>
                    <ul className="mt-4 space-y-2">
                      {[
                        '信号強度マッピングとヒートマップ可視化',
                        'RF干渉検出と無線周波数分析',
                        'アクセスポイントあたりのWi-Fiデバイス密度に対するキャパシティプランニング',
                        '最適なアクセスポイント数と配置の推奨',
                        '導入前・導入後のネットワークパフォーマンス検証',
                        'コンプライアンス、監査、最適化のためのデータ収集',
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[#0A0B19]/65">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image column — 5 columns */}
                  <div className="mt-10 space-y-6 lg:col-span-5 lg:mt-0">
                    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#E2E5EF] lg:sticky lg:top-32">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={sidekickImage}
                          alt="Ekahau Sidekickワイヤレスサーベイデバイス"
                          fill
                          className="object-contain p-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 3. SURVEY TYPES ═══ */}
          <section id="survey-types" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <SectionLabel label="サービス範囲" />
                <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  Ekahauワイヤレスサーベイサービス
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  予測、アクティブ、パッシブ、スペクトラム分析 — Wi-Fiネットワークのライフサイクル全体をカバーするワイヤレスサイトサーベイサービス。導入前の計画から導入後の検証まで。
                </p>

                {/* Full-width heat map image */}
                <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-[#E2E5EF]">
                  <div className="relative aspect-[21/9]">
                    <Image
                      src={wirelessSignalMapImage}
                      alt="ワイヤレス信号ヒートマップ — カバレッジパターンの可視化"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  {surveyTypes.map((item, idx) => (
                    <article
                      key={item.title}
                      className="relative overflow-hidden rounded-2xl bg-white p-8 ring-1 ring-black/5"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-3 right-6 select-none font-mono text-[80px] font-bold leading-none text-[#0066CC]/[0.04]"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#0066CC]">
                          {item.subtitle}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0A0B19]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#0A0B19]/65">{item.description}</p>
                        <div className="mt-6 border-t border-[#E2E5EF] pt-5">
                          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-[#0A0B19]/40">提供内容</p>
                          <ul className="space-y-2">
                            {item.outputs.map((output) => (
                              <li key={output} className="flex items-start gap-3 text-[13px] leading-relaxed text-[#0A0B19]/60">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#0066CC]" />
                                <span>{output}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 4. CABLING ═══ */}
          <section id="cabling" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  {/* Text — 7 columns */}
                  <div className="lg:col-span-7">
                    <SectionLabel label="構造化ケーブリング" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      構造化ケーブリング＆FLUKEケーブルテスト
                    </h2>
                    <p className="mt-4 max-w-2xl text-base/7 text-[#0A0B19]/70">
                      すべてのアクセスポイントは、パフォーマンス基準を満たす構造化ケーブリングに接続されます。AKRINは、FLUKE認定テストから設計・施工・再認証まで、エンドツーエンドの構造化ケーブリングサービスを提供します。
                    </p>
                  </div>

                  {/* Image — 5 columns */}
                  <div className="mt-10 lg:col-span-5 lg:mt-0">
                    <div className="overflow-hidden rounded-2xl ring-1 ring-[#E2E5EF]">
                      <div className="relative aspect-[741/960]">
                        <Image
                          src={flukeReportImage}
                          alt="FLUKEケーブル認証テストレポート — 合否判定結果"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                  {cablingServices.map((service) => (
                    <article
                      key={service.title}
                      className="group rounded-2xl bg-[#FAFAFC] p-7 ring-1 ring-[#E2E5EF] transition-all duration-300 hover:bg-white hover:shadow-lg hover:ring-[#0066CC]/20"
                    >
                      <h3 className="text-base font-semibold text-[#0A0B19]">{service.title}</h3>
                      <p className="mt-1 text-[12px] font-medium uppercase tracking-wide text-[#6B6D7C]">
                        {service.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#0A0B19]/65">{service.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 5. WHY AKRIN ═══ */}
          <section id="why-akrin" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  <div className="lg:col-span-5">
                    <SectionLabel label="AKRINの強み" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      AKRINのEkahauワイヤレスサーベイが選ばれる理由
                    </h2>
                  </div>
                </div>

                <dl className="mt-14 grid gap-x-12 gap-y-0 lg:grid-cols-2">
                  {[
                    { title: 'Ekahau装備の専門性', desc: 'Ekahau AI Pro、Ekahau Survey、Ekahau Sidekickを使用する認定エンジニアによる精確なワイヤレスサイトサーベイ。' },
                    { title: 'ベンダーニュートラルな推奨', desc: 'カバレッジ要件とパフォーマンス目標に基づくアクセスポイント推奨 — 特定のAPベンダーに依存しません。' },
                    { title: '詳細で実行可能なレポート', desc: 'ビジュアルヒートマップデータ、信号強度分析、明確なデータポイントに基づく優先アクションステップ。' },
                    { title: 'エンドツーエンドのサーベイサポート', desc: '導入前計画から導入後検証まで — ワイヤレスサイトサーベイの全プロセスをカバー。' },
                    { title: '迅速な対応', desc: 'データ収集品質やWi-Fiサイトサーベイの精度を損なうことなく、迅速なオンサイト対応を実現。' },
                    { title: 'あらゆる環境に対応', desc: '1フロアのオフィスから複数棟のキャンパス、倉庫、医療施設まで対応可能。' },
                  ].map((feature, idx) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-5 border-b border-[#0A0B19]/[0.06] py-8 first:pt-0 last:border-b-0"
                    >
                      <span className="font-mono text-[28px] font-light leading-none text-[#0066CC]/20">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <dt className="text-[15px] font-semibold text-[#0A0B19]">{feature.title}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-[#0A0B19]/60">{feature.desc}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 6. PROCESS ═══ */}
          <section id="process" className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:py-32">
              <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="lg:col-span-5">
                  <SectionLabel label="手法" />
                  <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                    ワイヤレスサイトサーベイのプロセス
                  </h2>
                </div>
                <div className="mt-6 lg:col-span-7 lg:mt-0">
                  <ImagePlaceholder
                    label="オンサイトサーベイ実施"
                    className="aspect-[16/9]"
                  />
                </div>
              </div>

              {/* Desktop: Horizontal steps */}
              <div className="mt-16 hidden lg:block">
                <div className="grid grid-cols-5 gap-0">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="relative">
                      {index < processSteps.length - 1 && (
                        <div className="absolute left-[calc(50%+20px)] right-0 top-5 h-px bg-[#E2E5EF]" />
                      )}
                      <div className="relative flex flex-col items-center px-4 text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066CC] text-sm font-bold text-white shadow-md shadow-[#0066CC]/20">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-[#0A0B19]">{step.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-[#0A0B19]/55">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: Vertical steps */}
              <div className="mt-12 lg:hidden">
                <div className="space-y-0">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-sm font-bold text-white shadow-md shadow-[#0066CC]/20">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="mt-1.5 w-px flex-1 bg-[#E2E5EF]" />
                        )}
                      </div>
                      <div className="pt-1 pb-2">
                        <h3 className="text-sm font-semibold text-[#0A0B19]">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#0A0B19]/60">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 7. INDUSTRIES ═══ */}
          <section id="industries" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <SectionLabel label="対応業界" />
                <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  Wi-Fiサイトサーベイを活用する業界
                </h2>

                <div className="mt-14 overflow-hidden rounded-2xl bg-[#0A0B19]/[0.06]">
                  <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { title: 'オフィス', desc: '高密度の会議室やオープンプランエリアで安定したローミングと信頼性の高いWi-Fiネットワーク容量が求められます。' },
                      { title: '倉庫・物流', desc: '在庫管理システムや自動化ワークフローで広いカバレッジエリア全体の途切れないWi-Fiカバレッジが必要。' },
                      { title: '医療施設', desc: 'ミッションクリティカルな医療機器接続とコンプライアンスが求められるWi-Fiネットワーク。' },
                      { title: '教育・キャンパス', desc: '講義室、研究室、共有施設で広範で安定したワイヤレスネットワークカバレッジが必要。' },
                      { title: '小売・ホスピタリティ', desc: 'ゲストWi-Fi、POSシステム、カバレッジが売上に直結する高密度環境。' },
                      { title: '製造・産業', desc: '干渉の多いRF環境でのIoTデバイス。スペクトラム分析でカバレッジギャップを特定。' },
                    ].map((industry) => (
                      <article key={industry.title} className="bg-[#F7F7FC] p-7">
                        <h3 className="text-[15px] font-semibold text-[#0A0B19]">{industry.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#0A0B19]/60">{industry.desc}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ═══ CTA Section ═══ */}
          <section className="relative my-8 overflow-hidden rounded-2xl bg-[#0B1F3A]">
            <Image
              src={spectrumAnalyzerImage}
              alt="Wi-Fiサイトサーベイ用スペクトラムアナライザー"
              fill
              className="object-cover object-center opacity-60"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#071528]/90 via-[#0B1F3A]/70 to-[#0B1F3A]/40" />

            <div className="relative px-8 py-14 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-14">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl font-light tracking-[-0.03em] text-white md:text-3xl">
                  Wi-Fiネットワークパフォーマンスの最適化を始めませんか？
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                  AKRINのプロフェッショナルEkahauワイヤレスサイトサーベイで、信頼性の高い高性能Wi-Fi接続のためのデータ駆動型ネットワーク意思決定を実現します。
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:ml-12 lg:shrink-0">
                <Link
                  href="/ja/contact?service=japan-ekahau-wireless-surveys"
                  className="inline-flex items-center justify-center rounded-md bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052A3]"
                >
                  ワイヤレスサイトサーベイを依頼
                </Link>
                <Link
                  href="/ja/contact?service=japan-ekahau-wireless-surveys&intent=sample-report"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  サンプルレポートをダウンロード
                </Link>
              </div>
            </div>
          </section>

          {/* ═══ 8. FAQ ═══ */}
          <section id="faq" className="bg-[#F7F7FC] pb-24 sm:pb-32">
            <div className="mx-auto max-w-7xl pt-12 sm:pt-16">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                {/* Left column: heading */}
                <div className="lg:col-span-4">
                  <SectionLabel label="FAQ" />
                  <h2 className="font-serif text-[36px] font-light leading-[1.05] tracking-[-0.04em] text-[#0A0B19] sm:text-[44px]">
                    Ekahauワイヤレスサーベイ FAQ
                  </h2>
                  <p className="mt-4 text-base/7 text-[#0A0B19]/65">
                    Wi-Fiサイトサーベイサービス、Ekahau Sidekick、サーベイプロセスに関するよくあるご質問。その他のご質問は
                    <Link href="/ja/contact" className="font-semibold text-[#0066CC] hover:text-[#0052A3]">
                      お問い合わせ
                    </Link>
                    ください。
                  </p>
                </div>

                {/* Right column: accordion */}
                <div className="mt-10 lg:col-span-8 lg:mt-0">
                  <dl className="divide-y divide-[#0A0B19]/[0.06]">
                    {faqItems.map((item, faqIdx) => (
                      <div key={item.q} className="py-6 first:pt-0">
                        <dt>
                          <button
                            className="flex w-full items-start gap-4 text-left"
                            onClick={() => setOpenFaq(openFaq === faqIdx ? null : faqIdx)}
                          >
                            <span className={`mt-1 font-mono text-[11px] tracking-[0.15em] transition-colors ${
                              openFaq === faqIdx ? 'text-[#0066CC]' : 'text-[#0A0B19]/25'
                            }`}>
                              {String(faqIdx + 1).padStart(2, '0')}
                            </span>
                            <span className="flex-1 text-[15px] font-medium leading-[1.4] text-[#0A0B19]">
                              {item.q}
                            </span>
                            <span className={`mt-0.5 shrink-0 transition-transform duration-200 ${openFaq === faqIdx ? 'rotate-45' : ''}`}>
                              <svg className="h-4 w-4 text-[#0A0B19]/30" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                            </span>
                          </button>
                        </dt>
                        {openFaq === faqIdx && (
                          <dd className="mt-3 pl-10 text-sm leading-[1.7] text-[#0A0B19]/55">{item.a}</dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
