'use client'

import {
  CloudArrowUpIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  LockClosedIcon,
  ChevronDownIcon,
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
  { id: 'overview', label: '概要', num: '01' },
  { id: 'what-is', label: 'サービスとは', num: '02' },
  { id: 'assessment', label: 'アセスメント', num: '03' },
  { id: 'migration', label: '移行', num: '04' },
  { id: 'operations', label: '運用', num: '05' },
  { id: 'why-akrin', label: 'AKRINの強み', num: '06' },
  { id: 'faq', label: 'FAQ', num: '07' },
]

const overviewItems = [
  {
    icon: ChartBarIcon,
    title: 'クラウド準備状況アセスメント',
    desc: 'TCO分析、ワークロードマッピング、クラウドインフラの移行戦略策定。',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'セキュアなクラウド移行',
    desc: 'パブリッククラウド、プライベートクラウド、ハイブリッドクラウド環境へのアプリケーション別移行。',
  },
  {
    icon: CogIcon,
    title: '24時間365日マネージドクラウド運用',
    desc: 'クラウドサービス全体の継続的な監視、インシデント対応、パッチ適用、パフォーマンス最適化。',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'クラウドコスト最適化',
    desc: 'リザーブドインスタンス計画、ライトサイジング、自動スケーリングによるクラウドコンピューティングコストの管理。',
  },
  {
    icon: ShieldCheckIcon,
    title: 'セキュリティとコンプライアンス',
    desc: 'ID管理、暗号化、ISO 27001、SOC 2、データレジデンシー要件への準拠。',
  },
]

const migrationSteps = [
  {
    num: '01',
    title: 'アプリケーション発見と依存関係マッピング',
    desc: 'ITインフラ全体のワークロード、データフロー、システム間依存関係の完全なインベントリ。',
  },
  {
    num: '02',
    title: 'ワークロード別移行戦略',
    desc: 'リホスト、リプラットフォーム、リファクタ、またはリタイア — 各アプリケーションに最適なクラウド移行アプローチを適用。',
  },
  {
    num: '03',
    title: 'フェーズ別移行実行',
    desc: '検証チェックポイント、ロールバック手順、最小限のダウンタイムによる制御された移行ウェーブ。',
  },
  {
    num: '04',
    title: '移行後の検証と最適化',
    desc: '新しいクラウド環境でのパフォーマンステスト、セキュリティ強化、コストベースラインの確立。',
  },
]

const operationsServices = [
  {
    icon: ClockIcon,
    title: '24時間365日監視とインシデント対応',
    desc: 'すべてのクラウド環境における自動アラートと迅速なインシデント解決を伴うクラウドインフラサービスのリアルタイム監視。',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'クラウドコスト最適化',
    desc: 'リザーブドインスタンス計画、ライトサイジング、未使用リソースのクリーンアップ、ストレージ階層化。多くの企業がクラウド費用を20〜35%削減。',
  },
  {
    icon: LockClosedIcon,
    title: 'クラウドセキュリティとコンプライアンス',
    desc: 'ID・アクセス管理、ネットワークセグメンテーション、暗号化、ISO 27001およびSOC 2に準拠した継続的コンプライアンス監視。',
  },
  {
    icon: GlobeAltIcon,
    title: 'マルチクラウド管理',
    desc: 'AWS、Microsoft Azure、Google Cloud、オンプレミスデータセンターの統合管理 — ハイブリッドクラウド運用の一元管理。',
  },
]

const whyItems = [
  {
    icon: ServerStackIcon,
    title: 'エンドツーエンドのクラウドインフラ管理',
    desc: 'アセスメントから移行、継続的なマネージドクラウド運用まで — クラウドライフサイクル全体を一つのパートナーで。',
  },
  {
    icon: GlobeAltIcon,
    title: 'マルチクラウド・ハイブリッドの専門知識',
    desc: 'AWS、Azure、Google Cloud、プライベートクラウドインフラにわたるベンダー中立のクラウドサービス。',
  },
  {
    icon: ShieldCheckIcon,
    title: '日本のコンプライアンス対応',
    desc: '日本のデータレジデンシー、APPI、エンタープライズセキュリティ要件に準拠したクラウド環境構築。',
  },
  {
    icon: CurrencyDollarIcon,
    title: '実証済みのコスト削減',
    desc: 'ライトサイジング、リザーブドインスタンス、自動スケーリングにより20〜35%のクラウドコスト最適化を実現。',
  },
  {
    icon: CpuChipIcon,
    title: 'Infrastructure as Code',
    desc: 'Terraform、CloudFormation、Ansibleを使用した再現性のあるバージョン管理されたクラウドインフラデプロイメント。',
  },
  {
    icon: ArrowPathIcon,
    title: 'マネージドサービスモデル',
    desc: '24時間365日の監視、パッチ適用、バックアップ、災害復旧をマネージドサービスとして提供 — お客様はビジネス成果に集中。',
  },
]

const faqItems = [
  {
    q: '対応しているクラウドプラットフォームは？',
    a: 'AWS、Microsoft Azure、Google Cloud、プライベートクラウドインフラに対応しています。ワークロードとコンプライアンス要件に合わせたハイブリッドクラウドおよびマルチクラウドアーキテクチャを設計します。',
  },
  {
    q: 'クラウド移行にはどのくらいの期間がかかりますか？',
    a: '単一アプリケーションの移行は数週間で完了する場合があります。企業全体の移行プロジェクトは、データ量、アプリケーションの依存関係、コンプライアンス要件に応じて3～12ヶ月が一般的です。',
  },
  {
    q: '既存のクラウドインフラの管理も可能ですか？',
    a: 'はい。既存のクラウド環境に対するマネージドクラウドサービスを提供しています。クラウド準備状況アセスメントを実施し、最適化の機会を特定し、24時間365日の継続的な監視・管理に移行します。',
  },
  {
    q: 'クラウドセキュリティとコンプライアンスはどのように対応していますか？',
    a: 'クラウドセキュリティはすべての層に組み込まれています — ID・アクセス管理、ネットワークセグメンテーション、暗号化、継続的監視。ISO 27001、SOC 2、日本固有のデータレジデンシー要件に沿ったクラウド環境を構築します。',
  },
  {
    q: 'クラウドコスト最適化には何が含まれますか？',
    a: 'リザーブドインスタンスの計画、ライトサイジング、未使用リソースのクリーンアップ、ストレージ階層化、自動スケーリングポリシーが含まれます。構造化された最適化レビュー後、多くの企業がクラウド費用を20〜35%削減しています。',
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

export default function CloudInfrastructureJaClient() {
  return (
    <main className="bg-[#F7F7FC]">
      <h1 className="sr-only">クラウドインフラサービス：移行・管理・最適化</h1>
      {/* ── モバイル / タブレット ヒーロー ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/cloud/cloud-infrastructure.avif"
            alt="AKRINクラウドインフラサービス"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">クラウドサービス</span>
          </div>
          <p className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            クラウドインフラサービス：移行・管理・最適化
          </p>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            エンドツーエンドのクラウドインフラサービス — クラウド準備状況アセスメントからセキュアな移行、24時間365日のマネージドクラウド運用まで。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/ja/contact?service=cloud-infrastructure"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              クラウドアセスメントを予約
            </Link>
            <Link
              href="/ja/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
            >
              全サービス一覧
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── デスクトップヒーロー（フルブリード） ── */}
      <section id="hero-desktop" className="relative hidden h-[500px] overflow-hidden bg-[#02304F] lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/cloud/cloud-infrastructure.avif"
            alt="AKRINクラウドインフラサービス"
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
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">クラウドサービス</span>
              </div>
              <p className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                クラウドインフラサービス：移行・管理・最適化
              </p>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                エンドツーエンドのクラウドインフラサービス — クラウド準備状況アセスメントからセキュアな移行、24時間365日のマネージドクラウド運用まで。パブリッククラウド、プライベートクラウド、ハイブリッドクラウドアーキテクチャにわたるクラウド環境の設計・移行・管理を支援します。
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/ja/contact?service=cloud-infrastructure"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  クラウドアセスメントを予約
                </Link>
                <Link
                  href="/ja/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[14px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                >
                  全サービス一覧
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

          {/* ── 01 概要 — グラデーション左ボーダー付きカード ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="提供内容" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  エンタープライズ向けクラウドインフラサービス
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  すべてのクラウドインフラプロジェクトで測定可能な成果を提供 — コスト削減、パフォーマンス向上、クラウド環境全体のエンタープライズグレードのセキュリティ。
                </p>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {overviewItems.map((item) => (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-xl border border-[#E2E5EF] bg-[#FAFAFC] p-6 transition-all duration-300 hover:border-[#0066CC]/30 hover:shadow-lg hover:shadow-[#0066CC]/5"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0066CC] to-[#0066CC]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]/10 ring-1 ring-[#0066CC]/20">
                        <item.icon className="h-5 w-5 text-[#0066CC]" />
                      </div>
                      <h3 className="text-[15px] font-semibold text-[#0A0B19]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#0A0B19]/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 02 サービスとは — ダークグラデーションカード ── */}
          <section id="what-is">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="概要" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    クラウドインフラサービスとは？
                  </h2>
                  <div className="mt-6 max-w-3xl space-y-4">
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      クラウドインフラサービスとは、現代のビジネスオペレーションを支えるクラウドコンピューティングリソースの企画、展開、管理を包括するサービスです。コンピュート、ストレージ、ネットワーキング、セキュリティコンポーネントを、AWSやMicrosoft Azureなどのパブリッククラウド、プライベートクラウド環境、またはオンプレミスデータセンターとクラウドサービスを組み合わせたハイブリッドクラウドアーキテクチャを通じて提供します。
                    </p>
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      効果的なクラウドインフラ管理は初期導入だけにとどまりません。クラウド環境が一貫した価値を提供するために、継続的なクラウドコスト最適化、パフォーマンスチューニング、セキュリティ強化、キャパシティプランニングが必要です。ビジネス目標に沿いながら、運用が求める信頼性とコンプライアンス基準を維持するクラウドインフラサービスが求められています。
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 03 アセスメント — 2カラム＋チェックリストカード ── */}
          <section id="assessment" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="アセスメント" />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      クラウド準備状況アセスメント＆TCO分析
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      クラウド移行を開始する前に、既存のITインフラ、アプリケーションポートフォリオ、運用要件を評価します。クラウド準備状況アセスメントにより、クラウドコンピューティングに対応可能なワークロード、リファクタリングが必要なもの、オンプレミスインフラに残すべきものを特定します。
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A0B19]/50">アセスメント成果物</h3>
                      <ul className="mt-5 space-y-3">
                        {[
                          '総所有コスト（TCO）比較 — オンプレミス vs. クラウド',
                          'アプリケーションポートフォリオ分析と移行優先順位付け',
                          'クラウドプラットフォーム推奨（AWS、Azure、ハイブリッド）',
                          'セキュリティとコンプライアンスのギャップ分析',
                          'ネットワークアーキテクチャとデータ転送計画',
                          'リスク評価とロールバック戦略',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#0066CC]" />
                            <span className="text-sm leading-relaxed text-[#2D2E3F]/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 04 移行 — 番号付きステップ＋アクセントライン ── */}
          <section id="migration">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="移行" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  クラウド移行サービス
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  クラウド移行は、アプリケーション、データ、ワークロードをオンプレミスデータセンターやレガシーインフラからクラウド環境に移します。当社のクラウド移行サービスは、リスクを最小化しビジネス継続性を維持する構造化されたフェーズ別アプローチに従います。
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                  {migrationSteps.map((step) => (
                    <div
                      key={step.num}
                      className="relative rounded-xl border border-[#E2E5EF] bg-white p-6 pl-8"
                    >
                      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#0066CC] to-[#0066CC]/20" />
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">
                          {step.num}
                        </span>
                        <h3 className="text-[15px] font-semibold text-[#0A0B19]">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#2D2E3F]/70">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 05 運用 — ダークグラデーション＋2×2グリッド ── */}
          <section id="operations">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="運用" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    24時間365日マネージドクラウド運用
                  </h2>
                  <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-white/60">
                    マネージドクラウド運用は、クラウドインフラの継続的な監視 — セキュリティ、コスト管理、マルチクラウド連携をマネージドサービスとして提供します。
                  </p>

                  <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {operationsServices.map((svc) => (
                      <div
                        key={svc.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0B1F3A]"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]/20 ring-1 ring-[#0066CC]/30">
                          <svc.icon className="h-5 w-5 text-[#0066CC]" />
                        </div>
                        <h3 className="text-base font-semibold text-white">{svc.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 06 AKRINの強み — アイコングリッド ── */}
          <section id="why-akrin" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="AKRINの強み" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  AKRINのクラウドインフラ管理を選ぶ理由
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  AKRINは、深い技術的専門知識と日本市場での運用経験を組み合わせたクラウドインフラ管理サービスを提供します。
                </p>

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {whyItems.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0066CC]/10 ring-1 ring-[#0066CC]/25">
                        <item.icon className="h-5 w-5 text-[#0066CC]" />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#0A0B19]">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#0A0B19]/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 07 FAQ — 2カラム＋アコーディオン ── */}
          <section id="faq">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
                  <div>
                    <SectionLabel label="FAQ" />
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      よくある質問
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      クラウドインフラサービスとマネージドクラウド運用に関するよくある質問。
                    </p>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <FAQAccordion />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── CTA — ダークセクション（コンパクト） ── */}
          <section id="cta">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(0,102,204,0.3), transparent 50%)',
                    }}
                  />
                  <div className="relative px-8 py-12 text-center sm:px-12 sm:py-14">
                    <h2 className="font-serif text-2xl font-light tracking-[-0.04em] text-white md:text-3xl">
                      クラウド変革を始めましょう
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.7] text-white/60">
                      クラウドインフラの目標をお聞かせください。構造化されたアセスメント — 移行アプローチ、マネージドサービス範囲、タイムライン、コスト見積もりをお届けします。
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/ja/contact?service=cloud-infrastructure"
                        className="inline-flex items-center justify-center rounded-full bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0052A3]"
                      >
                        クラウドアセスメントを予約
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
