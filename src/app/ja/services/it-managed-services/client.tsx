'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  BanknotesIcon,
  BellAlertIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  LifebuoyIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { Link } from '@/components/link'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SectionNav } from '@/components/SectionNav'

type SectionItem = {
  id: string
  label: string
  num: string
}

const managedServicesSectionItems: SectionItem[] = [
  { id: 'overview', label: '概要', num: '01' },
  { id: 'monitoring', label: '監視', num: '02' },
  { id: 'help-desk', label: 'ヘルプデスク', num: '03' },
  { id: 'infrastructure', label: 'インフラ', num: '04' },
  { id: 'security', label: 'セキュリティ', num: '05' },
  { id: 'continuity', label: '事業継続', num: '06' },
  { id: 'planning', label: 'IT戦略', num: '07' },
  { id: 'partnership', label: 'パートナー', num: '08' },
  { id: 'faq', label: 'FAQ', num: '09' },
]

const monitoringFeatures = [
  {
    title: 'リアルタイム監視',
    description:
      'CPU、メモリ、ディスク、ネットワークの各メトリクスをインフラ全体にわたってダッシュボードで可視化します。',
    icon: ChartBarIcon,
  },
  {
    title: '自動アラート',
    description:
      '重要度と業務影響に基づいてエスカレーションする、インテリジェントな通知システムを提供します。',
    icon: BellAlertIcon,
  },
  {
    title: '予防的対応',
    description:
      'アラートの70%以上をユーザーが気づく前に解決し、脆弱性の修正やボトルネックの解消、障害連鎖の防止を行います。',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: '脅威検知',
    description:
      '不審なアクティビティ、不正アクセス、マルウェアを検出する統合セキュリティ監視を実施します。',
    icon: ShieldCheckIcon,
  },
  {
    title: 'キャパシティ計画',
    description:
      'トレンド分析と予測により、パフォーマンス低下が起きる前にインフラ拡張を計画します。',
    icon: ServerStackIcon,
  },
]

const helpDeskFeatures = [
  {
    title: '重大障害30分対応',
    description:
      'システム停止、セキュリティインシデント、本番影響のある障害には30分以内にエンジニアが対応を開始します。',
    icon: ClockIcon,
  },
  {
    title: '標準リクエスト4時間解決',
    description:
      'ソフトウェア不具合、アクセス設定、構成変更などの一般的な依頼を4営業時間以内に処理します。',
    icon: LifebuoyIcon,
  },
  {
    title: 'マルチチャネル対応',
    description:
      '電話、メール、チャット、セルフサービスポータルから、チームに最適な方法で問い合わせできます。',
    icon: DocumentTextIcon,
  },
  {
    title: 'リモート＆オンサイト対応',
    description:
      '東京拠点のエンジニアが関東圏で当日のオンサイト対応を提供し、分散拠点には即時リモート対応します。',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'バイリンガル標準対応',
    description:
      'チケット、通話、レポート、エスカレーションまで、日本語・英語のネイティブエンジニアが対応します。',
    icon: GlobeAltIcon,
  },
]

const continuityCards = [
  {
    title: 'バックアップ＆リカバリ',
    description:
      'テスト済みの復旧手順を備えた自動日次バックアップを提供します。必要時だけでなく、定期的に整合性を検証し、重要システムごとにRTOとRPOを定義・文書化します。',
    icon: ArchiveBoxIcon,
  },
  {
    title: '冗長化アーキテクチャ',
    description:
      'フェイルオーバー構成、冗長ネットワーク経路、高可用性デプロイにより、単一障害点を排除します。',
    icon: ServerStackIcon,
  },
  {
    title: '迅速なインシデント対応',
    description:
      '重大障害が発生した際は数分で動員し、影響封じ込め、関係者連携、復旧手順の実行までを迅速に進めます。',
    icon: ExclamationTriangleIcon,
  },
  {
    title: 'DRテスト＆検証',
    description:
      '年次災害復旧訓練で実運用を想定した復旧手順を検証し、本番障害の前にギャップを特定します。',
    icon: ShieldCheckIcon,
  },
  {
    title: 'ドキュメント＆ランブック',
    description:
      'ネットワーク図、エスカレーション手順、ベンダー連絡先、復旧ランブックを含む運用文書を四半期ごとに更新します。',
    icon: DocumentTextIcon,
  },
]

const partnershipValues = [
  '問題発生後ではなく、発生前に対処するプロアクティブ運用',
  '予算計画を容易にし、想定外のIT費用を抑える予測可能な月額コスト',
  'エンタープライズ水準の知見とツールを、過大な固定費なしで活用可能',
  '人員、拠点、事業拡大に合わせて柔軟にスケールするサービス',
]

const faqItems = [
  {
    question: 'AKRINのマネージドITサービスには何が含まれますか？',
    answer:
      '24時間365日のネットワーク監視、SLA保証付きの無制限ヘルプデスク、サーバー・ネットワーク・クラウドの包括的インフラ管理、統合セキュリティ、事業継続・災害復旧、四半期ガバナンスレビュー付きのIT戦略策定が含まれます。新規機器展開のキッティング、オフィスITセットアップ、技術プロジェクト管理などの専門サービスも提供しています。',
  },
  {
    question: 'IT障害への対応はどのくらい速いですか？',
    answer:
      'システム停止、セキュリティ侵害、本番環境に影響する障害などの重大インシデントには30分以内にエンジニアが対応を開始します。標準的なサポートリクエストは4時間以内に解決します。プロアクティブ監視により、ユーザー影響前に解決できるケースが大半です。',
  },
  {
    question: '日本語と英語の両方でサポートを受けられますか？',
    answer:
      'はい。バイリンガル対応はAKRINの基本運用です。すべてのエンジニア、チケット、レポート、エグゼクティブレビューを日本語・英語で提供します。単なる翻訳ではなく、正確な技術コミュニケーションを行えるネイティブ体制です。',
  },
  {
    question: '既存のITシステムと連携できますか？',
    answer:
      'もちろんです。Microsoft 365、Azure、AWS、GCP、VMwareなど主要プラットフォームに対応し、オンプレミス、クラウド、ハイブリッドのいずれでも統合可能です。現行環境を最適化しながら、事業目標に沿った改善計画を策定します。',
  },
  {
    question: 'どの程度のコスト削減が期待できますか？',
    answer:
      'マネージドサービスへの移行企業では、完全内製体制と比べてIT運用コストを13〜32%削減するケースが一般的です。東京では包括的サービスの費用はユーザーあたり月額¥20,000〜¥30,000程度で、同等内製の人件費より大幅に効率的です。',
  },
  {
    question: 'データ消去・ITADはどのように対応していますか？',
    answer:
      'NIST 800-88準拠の認定データ消去方式を採用し、ソフトウェア上書き消去と必要に応じた物理破壊を実施します。全資産にデータ消去証明書を発行し、完全なチェーン・オブ・カストディを保持します。ISO 27001、APPI、GDPR要件にも対応します。',
  },
  {
    question: '機器展開のキッティングサービスはありますか？',
    answer:
      'はい。ハードウェア設定、OSイメージング、セキュリティエージェント展開、アプリ導入、資産タグ付け、周辺機器バンドリング、QA検証までを出荷前に実施します。開梱後すぐ利用できる状態で納品し、展開時間短縮と品質の均一化を実現します。',
  },
  {
    question: '料金体系はどうなっていますか？',
    answer:
      'ユーザー単位またはデバイス単位のサブスクリプションモデルです。サービス範囲、管理対象数、SLAティア、コンプライアンス対応、オンサイト頻度などに応じて最適化します。隠れ費用のない、予測可能な月次コストをご提供します。',
  },
]

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-[#3462BD]" />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#17100E]/40">{label}</span>
    </div>
  )
}

function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex min-h-[260px] items-center justify-center rounded-xl border border-[#17100E]/10 bg-white/60 ${className}`}
    >
      {/* IMAGE PLACEHOLDER */}
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#17100E]/40">
        IMAGE PLACEHOLDER
      </p>
    </div>
  )
}

export default function JapaneseITManagedServicesClient() {
  return (
    <main className="bg-[#F4F3EC]">
      <section className="relative overflow-hidden bg-[#17100E] pt-28 sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,138,196,0.32)_0%,transparent_52%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(131,161,173,0.22)_0%,transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">
          <nav className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
            <Link href="/ja/services" className="transition-colors hover:text-white">
              サービス
            </Link>{' '}
            <span className="px-1 text-white/45">&gt;</span>{' '}
            <span className="text-white">ITマネージドサービス</span>
          </nav>

          <div className="mt-8 max-w-4xl">
            <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
              東京のマネージドサービス：ビジネスを支えるIT運用
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-100 sm:text-xl/8">
              インフラ、セキュリティ、日常のIT運用をAKRINが担当。お客様のチームは本業に集中できます。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-base font-medium text-[#17100E] transition-colors hover:bg-gray-100"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                全サービスを見る
              </Link>
            </div>
          </div>

          <div className="mt-14 max-w-4xl">
            <ImagePlaceholder className="min-h-[220px] border-white/20 bg-white/[0.04]" />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="overflow-visible lg:flex lg:items-start lg:gap-12">
          <SectionNav items={managedServicesSectionItems} ariaLabel="ページセクション" />

          <div className="min-w-0 flex-1">
            <section id="overview" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="概要" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    マネージドITサービスとは？
                  </h2>
                  <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-[#17100E]/80">
                    <p>
                      マネージドITサービスとは、自社のIT基盤の維持管理を社内チームから専門の外部パートナーに委託する仕組みです。ネットワーク、セキュリティ、クラウド、ヘルプデスクといった分野ごとに専門人材を採用・育成・維持する代わりに、一つのマネージドサービスプロバイダー（MSP）が包括的にカバーします。
                    </p>
                    <div className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
                      <p>
                        従来のITサポートは、問題が発生してから対応する事後対応型です。AKRINのマネージドサービスは、継続的な監視、予防保全、戦略的な計画により、問題がユーザーに影響を与える前に解決する事前対応型のアプローチを採用しています。
                      </p>
                    </div>
                    <p>
                      AKRINは日本市場に根ざしたバイリンガルMSPです。すべてのプロジェクトは、現在のインフラ、業務要件、コンプライアンス義務の包括的な評価から開始します。その上で、200名規模オフィスの24時間監視から複数拠点のインフラ全面刷新まで、運用目標に合致したサービスプランを設計します。
                    </p>
                  </div>

                  <div className="mt-14 rounded-2xl border border-[#17100E]/10 bg-white p-8 sm:p-10">
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-[#17100E] sm:text-3xl">
                      東京の企業がマネージドサービスを選ぶ理由
                    </h3>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <UserGroupIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">IT人材不足</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          東京の85%の企業がIT人材採用に苦戦しています。MSPに委託することで採用ボトルネックを解消し、初日からフルチームで運用を開始できます。
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <ShieldCheckIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">規制対応の負担</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          APPI、GDPR、金融庁規制、ISMAPなどへの対応には高度な専門知識が必要です。社内だけで賄いづらい要件をMSPが継続的にサポートします。
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <GlobeAltIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">バイリンガル対応</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          国際企業では、日本語と英語でのチケット対応、レポート、ステークホルダー連携が不可欠です。単なる翻訳でなく、技術文脈まで踏まえた両言語対応を提供します。
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <BanknotesIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">コスト最適化</h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          予測困難なCapExを固定月額のOpExへ転換できます。導入企業ではIT運用コスト13〜32%削減の実績があり、東京ではユーザーあたり月額¥20,000〜¥30,000が一般的です。
                        </p>
                      </article>
                    </div>

                    <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                      2026年には、先進MSPがAI自動化と予測分析を導入し、ダウンタイムを最大40%削減しています。これを内製で実現するには数億円規模の投資が必要です。
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="monitoring" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="監視" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    24時間365日のネットワーク監視
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                    <div>
                      <p className="text-base leading-relaxed text-[#17100E]/80">
                        AKRINのマネージドサービスは継続監視から始まります。オペレーションセンターがサーバー、ネットワーク、エンドポイント、クラウド環境を24時間体制で監視し、異常を検知して業務影響前に解決します。
                      </p>

                      <div className="mt-8 space-y-4">
                        {monitoringFeatures.map((feature) => {
                          const Icon = feature.icon
                          return (
                            <article
                              key={feature.title}
                              className="rounded-xl border border-[#17100E]/10 bg-white p-5"
                            >
                              <div className="flex items-start gap-4">
                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#3462BD]/10">
                                  <Icon className="h-5 w-5 text-[#3462BD]" />
                                </span>
                                <div>
                                  <h3 className="text-base font-semibold text-[#17100E]">
                                    {feature.title}
                                  </h3>
                                  <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </article>
                          )
                        })}
                      </div>

                      <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                        プロアクティブ監視は、従来の障害発生後対応と本質的に異なります。障害発生を待って復旧するのではなく、早期警告を捉えてメンテナンス時間内に対処し、高可用性を維持します。
                      </p>
                    </div>

                    <div>
                      <ImagePlaceholder className="min-h-[520px]" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="help-desk" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="ヘルプデスク" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    無制限ヘルプデスクサポート
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                    <div className="order-2 lg:order-1">
                      <ImagePlaceholder className="min-h-[520px]" />
                    </div>

                    <div className="order-1 lg:order-2">
                      <p className="text-base leading-relaxed text-[#17100E]/80">
                        従業員の生産性を支えるには、迅速で信頼性の高いサポートが不可欠です。AKRINのマネージドヘルプデスクは、保証されたレスポンスタイムで無制限リクエストに対応し、IT課題による業務停滞を防ぎます。
                      </p>

                      <div className="mt-8 space-y-4">
                        {helpDeskFeatures.map((feature) => {
                          const Icon = feature.icon
                          return (
                            <article
                              key={feature.title}
                              className="rounded-xl border border-[#17100E]/10 bg-white p-5"
                            >
                              <div className="flex items-start gap-4">
                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#3462BD]/10">
                                  <Icon className="h-5 w-5 text-[#3462BD]" />
                                </span>
                                <div>
                                  <h3 className="text-base font-semibold text-[#17100E]">
                                    {feature.title}
                                  </h3>
                                  <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </article>
                          )
                        })}
                      </div>

                      <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                        ヘルプデスクは単なる外部窓口ではなく、お客様チームの延長として機能します。依頼の追跡、解決時間の計測、月次レポートを通じて、ITサポート品質を可視化し継続改善します。
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="infrastructure" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="インフラ" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    包括的インフラストラクチャ管理
                  </h2>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    AKRINは、オフィスの物理サーバーからAWS、Azure、GCPで稼働するクラウドワークロードまで、テクノロジースタック全体を管理します。マルチプラットフォーム環境の複雑さをAKRINが引き受け、社内チームを本業へ集中させます。
                  </p>

                  <div className="mt-10">
                    <ImagePlaceholder className="min-h-[260px]" />
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">サーバー管理</h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- Windows・Linuxサーバー管理</li>
                        <li>- VMware・Hyper-V仮想化環境</li>
                        <li>- パフォーマンスチューニング</li>
                        <li>- セキュリティパッチ・更新管理</li>
                      </ul>
                    </article>

                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">ネットワーク管理</h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- WAN/LAN設計・最適化</li>
                        <li>- エンタープライズWiFi設計・管理</li>
                        <li>- 次世代ファイアウォール設定</li>
                        <li>- VPN構築・保守</li>
                      </ul>
                    </article>

                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">クラウドオペレーション</h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- Microsoft 365管理</li>
                        <li>- AWS、Azure、GCP運用管理</li>
                        <li>- バックアップ・災害復旧</li>
                        <li>- クラウドコスト最適化</li>
                      </ul>
                    </article>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">エンドポイントセキュリティ</h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- デバイス保護・EDR</li>
                        <li>- リアルタイム脅威監視</li>
                        <li>- モバイルデバイス管理（MDM）</li>
                      </ul>
                    </article>

                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">コンプライアンス管理</h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- APPI、GDPR、ISMAP準拠支援</li>
                        <li>- 脆弱性スキャン・アセスメント</li>
                        <li>- 監査対応ドキュメント・レポート</li>
                      </ul>
                    </article>
                  </div>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    オンプレミスとクラウドのハイブリッド構成でも、クラウドネイティブ構成でも、お客様のアーキテクチャに合わせて運用を最適化します。プロビジョニングから保守・最適化まで、すべてを単一パートナーで一貫対応します。
                  </p>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="security" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="セキュリティ" />
                  <div className="rounded-2xl border border-[#3462BD]/20 bg-[#3462BD]/[0.06] p-8 sm:p-10">
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      セキュリティサービス
                    </h2>

                    <div className="mt-8 space-y-6 text-base leading-relaxed text-[#17100E]/80">
                      <p>
                        サイバーセキュリティはオプションではなく、AKRINのマネージドサービス全体に組み込まれています。継続監視、予防的防御、迅速なインシデント対応を通じて、進化する脅威からビジネスを保護します。
                      </p>
                      <p>
                        次世代ファイアウォールによる境界防御、全管理端末へのEDR、定期的な脆弱性診断・ペネトレーションテスト、APPI・GDPR・業界規制への準拠監視まで包括対応します。業種特性やリスクプロファイルに合わせたセキュリティ態勢を構築します。
                      </p>
                      <p>
                        インシデント発生時は即時に封じ込め、証拠保全、復旧を実施し、事後レビューを通じて防御を継続改善します。機密データを扱う企業に必要な保護水準とコンプライアンス保証を提供します。
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="continuity" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="事業継続" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    事業継続と災害復旧
                  </h2>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    ダウンタイムは直接的な損失です。停止中は従業員の業務、生産性、顧客対応、売上に影響します。AKRINの事業継続サービスは、ハードウェア障害や災害、予期せぬトラブル時にも運用継続を支えます。
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {continuityCards.map((card) => {
                      const Icon = card.icon
                      return (
                        <article
                          key={card.title}
                          className="rounded-xl border border-[#17100E]/10 bg-white p-6"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                            <Icon className="h-5 w-5 text-[#3462BD]" />
                          </span>
                          <h3 className="mt-4 text-lg font-semibold text-[#17100E]">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                            {card.description}
                          </p>
                        </article>
                      )
                    })}
                  </div>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    事業継続には、技術だけでなく適切な手順・文書・実行体制が必要です。AKRINは全契約にレジリエンスを組み込み、障害をビジネス危機ではなく管理可能なイベントへ変えます。
                  </p>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="planning" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="IT戦略" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    IT戦略策定とガバナンス
                  </h2>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    テクノロジー投資は単なる維持ではなく、事業成果に結びつくべきです。AKRINは体系的な評価、ロードマップ策定、継続ガバナンスで、IT投資を成長目標に整合させます。
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
                    <div className="space-y-4 lg:col-span-3">
                      <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3462BD]">
                          Step 1
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[#17100E]">
                          テクノロジーアセスメント
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                          現行インフラ評価、業務要件の整理、技術ギャップ特定、費用対効果分析を実施し、現状と改善優先度を明確化します。
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3462BD]">
                          Step 2
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[#17100E]">
                          ロードマップ策定
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                          予算見通し、ベンダー選定、実施スケジュール、リスク低減策を含む優先順位付きロードマップを作成します。期間は通常12〜36か月です。
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3462BD]">
                          Step 3
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[#17100E]">
                          継続的ガバナンス
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                          四半期レビューで進捗とKPIを追跡し、サービス品質、投資効果、改善提案を継続的に提示します。事業成長に合わせて戦略を更新します。
                        </p>
                      </article>
                    </div>

                    <div className="lg:col-span-2">
                      <ImagePlaceholder className="min-h-[100%]" />
                    </div>
                  </div>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    ITガバナンスにより、技術支出を運用維持だけでなく測定可能な価値へ転換できます。四半期レビューで、経営層はパフォーマンス、支出傾向、今後の投資を明確に把握できます。
                  </p>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="partnership" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="パートナー" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    東京の信頼できるITパートナー
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                    <div>
                      <p className="text-base leading-relaxed text-[#17100E]/80">
                        最適なMSPは単なる外注先ではなく、事業を理解し、ニーズを先読みし、共に成長する戦略パートナーです。AKRINは、エンタープライズ水準の技術力と専任チームの機動力を両立し、日本全国で長期的な信頼関係を築いてきました。
                      </p>

                      <div className="mt-8 space-y-4">
                        {partnershipValues.map((value) => (
                          <div key={value} className="flex items-start gap-3">
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#3462BD]" />
                            <p className="text-sm leading-relaxed text-[#17100E]/80">{value}</p>
                          </div>
                        ))}
                      </div>

                      <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                        従来サポートに留まらず、新拠点のITセットアップ、オフィス移転時の技術対応、キッティング、複雑な技術プロジェクト管理まで一貫提供します。必要な機能を一つの窓口で、日英両言語で利用できます。
                      </p>

                      <p className="mt-6 text-base leading-relaxed text-[#17100E]/80">
                        MSP選定では、業界実績、透明な料金体系、参照可能な導入実績、測定可能なSLA、将来拡張性を確認してください。チーム資格、セキュリティ認証、災害復旧体制も重要です。優れたプロバイダーは、チケット対応に留まらず運用基盤の一部になります。
                      </p>

                      <p className="mt-6 text-base leading-relaxed text-[#17100E]/80">
                        東京で最初の拠点を立ち上げるスタートアップから、日本全国で多数エンドポイントを管理する大企業まで、AKRINはスピードと安定性を両立するIT基盤を提供します。
                      </p>
                    </div>

                    <div>
                      <ImagePlaceholder className="min-h-[520px]" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="faq" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <div className="max-w-4xl">
                    <SectionLabel label="FAQ" />
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      よくある質問
                    </h2>

                    <dl className="mt-16 divide-y divide-[#17100E]/10">
                      {faqItems.map((item) => (
                        <Disclosure
                          key={item.question}
                          as="div"
                          className="-mx-4 rounded-lg px-4 py-6 first:pt-0 last:pb-0 transition-colors duration-200 hover:bg-white/40"
                        >
                          <dt>
                            <DisclosureButton className="group flex w-full items-start justify-between text-left text-[#17100E]">
                              <span className="text-base/7 font-semibold">{item.question}</span>
                              <span className="ml-6 flex h-7 items-center">
                                <PlusSmallIcon
                                  aria-hidden="true"
                                  className="size-6 text-[#17100E]/40 group-data-open:hidden"
                                />
                                <MinusSmallIcon
                                  aria-hidden="true"
                                  className="size-6 text-[#17100E]/40 group-not-data-open:hidden"
                                />
                              </span>
                            </DisclosureButton>
                          </dt>
                          <DisclosurePanel as="dd" className="mt-2 pr-12">
                            <p className="text-base/7 text-[#17100E]/70">{item.answer}</p>
                          </DisclosurePanel>
                        </Disclosure>
                      ))}
                    </dl>
                  </div>
                </div>
              </RevealOnScroll>
            </section>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

      <section className="bg-[#F4F3EC]" id="cta">
        <div className="px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-xl border border-[#17100E]/10 bg-white px-6 py-16 text-center sm:px-10">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-[#17100E] sm:text-4xl">
                IT運用の変革を始めませんか？
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base/7 text-[#17100E]/80">
                お客様のインフラ、コンプライアンス要件、ビジネス目標に合わせたマネージドサービスプランをご提案します。まずは無料アセスメントからお気軽にどうぞ。
              </p>
              <div className="mt-8">
                <Link
                  href="/ja/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#17100E] px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#2A2523]"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
