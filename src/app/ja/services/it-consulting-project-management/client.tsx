'use client'

import {
  ClipboardDocumentListIcon,
  BuildingOffice2Icon,
  ServerStackIcon,
  CloudArrowUpIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'
import { Link } from '@/components/link'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SectionNav } from '@/components/SectionNav'

type SectionItem = {
  id: string
  label: string
  num: string
}

const sectionItems: SectionItem[] = [
  { id: 'overview', label: 'OVERVIEW', num: '01' },
  { id: 'services', label: 'SERVICES', num: '02' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '03' },
  { id: 'faq', label: 'FAQ', num: '04' },
]

const serviceCards = [
  {
    icon: ClipboardDocumentListIcon,
    title: 'ITインフラ プロジェクト管理',
    desc: 'ネットワーク導入、サーバー移行、インフラ更新プロジェクトをエンドツーエンドで管理します。各プロジェクトは体系的な方法論に従います。要件定義、ベンダー調整、リスク管理、実装後の検証を実施。',
    highlights: ['ネットワーク導入', 'サーバー移行', 'インフラ更新'],
  },
  {
    icon: BuildingOffice2Icon,
    title: 'オフィス移転とワークスペーステクノロジー',
    desc: 'ネットワーク廃止、新拠点でのケーブリングとアクセスポイント設置、ダウンタイムを最小化したIT完全移行をコーディネートします。',
    highlights: ['ネットワーク廃止', 'ケーブリング・AP設置', 'IT完全移行'],
  },
  {
    icon: ServerStackIcon,
    title: 'データセンター構築と移行',
    desc: 'データセンタープロジェクトは複数ベンダーにわたる正確な計画と調整が必須です。ラック配置、電力分配、冷却、ケーブリング、ネットワーク構成を監督します。',
    highlights: ['ラック配置・電力', '冷却・ケーブリング', 'ネットワーク構成'],
  },
  {
    icon: CloudArrowUpIcon,
    title: 'クラウド移行とデジタル変革',
    desc: 'クラウドへのワークロード移行には慎重なプロジェクト範囲設定、アプリケーション依存関係マッピング、段階的な移行計画が必要です。AWS、Azure、ハイブリッド環境に対応。',
    highlights: ['AWS・Azure', '依存関係マッピング', '段階的移行'],
  },
]

const whyMetrics = [
  {
    icon: UserGroupIcon,
    metric: '専任PM',
    title: '配置されたプロジェクトマネージャー',
    desc: '各プロジェクトに専任のプロジェクトマネージャーを配置し、スケジュール、予算、成果物の品質に直接責任を持たせます。',
  },
  {
    icon: DocumentTextIcon,
    metric: '体系的',
    title: '実証済みの方法論',
    desc: 'スコープ管理、リスクレジスタ、週次ステータスレビューにより、情報技術イニシアチブは軌道上を歩みます。',
  },
  {
    icon: WrenchScrewdriverIcon,
    metric: 'ハンズオン',
    title: '技術的な深さ',
    desc: 'ネットワーク、セキュリティ、クラウド、エンタープライズアプリケーション全域で実践的な専門知識を備えています。',
  },
  {
    icon: ShieldCheckIcon,
    metric: '全国対応',
    title: 'ナショナルカバレッジ',
    desc: '日本全国で対応可能。分散チームや複数拠点のビジネス展開に対して遠隔プロジェクト管理サポートを提供します。',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    metric: '透明性',
    title: 'クライアント優先のレポーティング',
    desc: 'シニアコンサルタントへのダイレクトアクセスを実現。各プロジェクトの開始から、ビジネスコンテキストを踏まえたソリューション設計。',
  },
  {
    icon: ClockIcon,
    metric: '期日内',
    title: '測定可能な成果',
    desc: 'クライアントと協力してビジネス優先事項を理解し、期日内に測定可能な成果を達成するプロジェクト計画を構築します。',
  },
]

const faqItems = [
  {
    q: 'AKRINのITコンサルティングの範囲は？',
    a: 'インフラ構築、オフィス移転、データセンタープロジェクト、クラウド移行、テクノロジーリフレッシュプログラムなど、日本全国の組織向けにエンドツーエンドのプロジェクト管理を提供しています。',
  },
  {
    q: 'プロジェクトマネージャーはどのように配置されますか？',
    a: '技術的背景、プロジェクトの複雑さ、業界経験に基づいてプロジェクトマネージャーを配置します。全てのプロジェクトマネージャーは認定資格を保有し、エンタープライズ規模の情報技術プロジェクトの管理経験があります。',
  },
  {
    q: '東京以外でも対応可能ですか？',
    a: 'はい。コンサルタントは日本全国に出張し、分散チームや複数拠点のビジネス展開に対するリモートプロジェクト管理サポートも提供しています。',
  },
  {
    q: 'プロジェクト管理にはどのツールを使用していますか？',
    a: 'MS Project、Jira、Asanaなどの業界標準ソリューションを使用しています。既存のビジネスワークフローとのシームレスな統合のため、お客様のプラットフォームに合わせて対応します。',
  },
  {
    q: 'どのような規模のプロジェクトに対応していますか？',
    a: '20席規模のオフィス移転から、複数拠点・数百台のエンドポイントにまたがるエンタープライズ規模のインフラ変革まで対応しています。',
  },
]

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-[#0A0B19]" />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0A0B19]/40">{label}</span>
    </div>
  )
}

function DarkSectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-white/80" />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">{label}</span>
    </div>
  )
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqItems.map((item, idx) => (
        <div key={idx} className="rounded-xl border border-[#E2E5EF] bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#0066CC]">{String(idx + 1).padStart(2, '0')}</span>
              <span className="text-[15px] font-semibold text-[#0A0B19]">{item.q}</span>
            </span>
            <ChevronDownIcon
              className={`h-5 w-5 shrink-0 text-[#6B6D7C] transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed text-[#2D2E3F]/70">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ITConsultingProjectManagementJaClient() {
  return (
    <main className="bg-[#F7F7FC]">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/it-consulting-project-management/hero-banner.avif"
            alt="AKRIN ITコンサルティング＆プロジェクト管理"
            fill
            priority
            className="object-cover object-center"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">ITコンサルティング</span>
          </div>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            ITコンサルティングサービス＆エンタープライズ向けプロジェクト管理
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            情報技術戦略をビジネス目標と結びつけるエンドツーエンドのITコンサルティングサービス。インフラ構築からクラウド移行まで対応。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/ja/contact?service=it-consulting"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              コンサルテーション予約
            </Link>
            <Link
              href="/ja/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
            >
              全サービスを見る
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Desktop hero ── */}
      <section id="hero-desktop" className="relative hidden h-[500px] overflow-hidden bg-[#02304F] lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/it-consulting-project-management/hero-banner.avif"
            alt="AKRIN ITコンサルティング＆プロジェクト管理"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 30%, rgba(2,48,79,0.85) 45%, rgba(2,48,79,0.5) 60%, rgba(2,48,79,0.15) 75%, transparent 90%)',
          }}
        />
        <div className="relative flex h-[500px] items-center">
          <div className="mx-auto w-full max-w-[1047px] px-12">
            <div className="max-w-lg xl:max-w-xl">
              <div className="mb-4 flex items-center gap-2">
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-white/60" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">ITコンサルティング</span>
              </div>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                ITコンサルティングサービス＆エンタープライズ向けプロジェクト管理
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                AKRIN は情報技術戦略をビジネス目標に結びつけるITコンサルティングサービスを提供しています。日本全国のエンタープライズ向けに、複雑なIT プロジェクトの計画、実行、管理をお手伝いします。
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/ja/contact?service=it-consulting"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  コンサルテーション予約
                </Link>
                <Link
                  href="/ja/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[14px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                >
                  全サービスを見る
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

          {/* ── 01 OVERVIEW — Two-column with project lifecycle steps ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Overview" />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      情報技術プロジェクト管理ソリューション
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      当社のプロジェクト管理体制は、情報技術イニシアチブのライフサイクル全体をカバーしています。ターゲットを絞った導入に専任のプロジェクトマネージャーが必要な場合も、エンタープライズ全体の変革に複数のコンサルタントが必要な場合も、ビジネス要件に合わせたソリューションを提供します。
                    </p>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      すべてのプロジェクトは明確なスコープ、定義されたマイルストーン、および期日内・予算内での成果物を確保する専任のプロジェクトマネージャーで始まります。スケジュール、リソース割り当て、ステークホルダー通信はチームが対応するため、ビジネスオペレーションは支障なく継続されます。
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A0B19]/50">プロジェクトライフサイクル</h3>
                      <div className="mt-6 space-y-0">
                        {[
                          { num: '01', label: '要件定義とスコープ確定' },
                          { num: '02', label: 'プロジェクト計画とリソース配置' },
                          { num: '03', label: 'ベンダー調整とリスク管理' },
                          { num: '04', label: '実行とステークホルダー通信' },
                          { num: '05', label: '実装後の検証' },
                        ].map((step, idx) => (
                          <div key={step.num} className="relative flex items-start gap-4 py-3">
                            {idx < 4 && (
                              <div className="absolute left-[15px] top-[40px] h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#0066CC]/40 to-[#0066CC]/10" />
                            )}
                            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">
                              {step.num}
                            </span>
                            <span className="pt-1 text-sm leading-relaxed text-[#2D2E3F]/80">{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 02 SERVICES — 2×2 cards with highlight chips ── */}
          <section id="services">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <SectionLabel label="What We Deliver" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  プロジェクトライフサイクル全域のITコンサルティング
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  VoIPとビデオ会議から、セキュリティシステム、クラウド接続に至るまで、すべての情報技術依存関係に対するエンドツーエンドのソリューションを提供します。
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                  {serviceCards.map((card) => (
                    <div
                      key={card.title}
                      className="group relative overflow-hidden rounded-2xl border border-[#E2E5EF] bg-white p-8 transition-all duration-300 hover:border-[#0066CC]/30 hover:shadow-lg hover:shadow-[#0066CC]/5"
                    >
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0066CC]/[0.04] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#0066CC]/[0.06]" />
                      <div className="relative">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066CC]/10 ring-1 ring-[#0066CC]/20">
                          <card.icon className="h-6 w-6 text-[#0066CC]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#0A0B19]">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#0A0B19]/60">{card.desc}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {card.highlights.map((h) => (
                            <span
                              key={h}
                              className="rounded-full border border-[#E2E5EF] bg-[#FAFAFC] px-3 py-1 text-xs text-[#2D2E3F]/70"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 03 WHY AKRIN — Metrics-style cards ── */}
          <section id="why-akrin">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="Why AKRIN" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    企業がAKRINを選ぶ理由
                  </h2>
                  <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-white/60">
                    深い情報技術専門知識と実証済みのプロジェクト管理方法論が結合したアプローチ。
                  </p>

                  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {whyMetrics.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0B1F3A]"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066CC]/20 ring-1 ring-[#0066CC]/30">
                            <item.icon className="h-4 w-4 text-[#0066CC]" />
                          </div>
                          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0066CC]">
                            {item.metric}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 04 FAQ — Two-column accordion ── */}
          <section id="faq">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
                  <div>
                    <SectionLabel label="FAQ" />
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      よくあるご質問
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      ITコンサルティング サービスとプロジェクト管理についてのよくあるご質問。
                    </p>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <FAQAccordion />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── CTA — Dark section compact ── */}
          <section id="cta">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0,102,204,0.3), transparent 50%)',
                    }}
                  />
                  <div className="relative px-8 py-12 text-center sm:px-12 sm:py-14">
                    <h2 className="font-serif text-2xl font-light tracking-[-0.04em] text-white md:text-3xl">
                      次のITプロジェクトを始めましょう
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.7] text-white/60">
                      プロジェクト要件を共有いただければ、スコープ、タイムライン、リソース配置、コスト見積もりを含む体系的な計画をお持ちします。
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/ja/contact?service=it-consulting"
                        className="inline-flex items-center justify-center rounded-full bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0052A3]"
                      >
                        コンサルテーション予約
                      </Link>
                      <Link
                        href="/ja/services"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                      >
                        全サービスを見る
                        <span aria-hidden="true" className="ml-2">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

        </div>
      </div>
    </main>
  )
}
