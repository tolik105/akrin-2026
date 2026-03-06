'use client'

import {
  ShieldCheckIcon,
  LockClosedIcon,
  ServerStackIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  DocumentMagnifyingGlassIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  EyeIcon,
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
  { id: 'managed-security', label: 'マネージド', num: '02' },
  { id: 'consulting', label: 'コンサルティング', num: '03' },
  { id: 'audit', label: '監査', num: '04' },
  { id: 'endpoint-network', label: '保護', num: '05' },
  { id: 'why-akrin', label: 'AKRIN', num: '06' },
  { id: 'faq', label: 'FAQ', num: '07' },
]

const overviewItems = [
  {
    icon: ShieldCheckIcon,
    title: 'マネージドITセキュリティサービス',
    desc: 'エンドポイント、ネットワーク機器、クラウドシステム全体の24/7監視、早期検知、迅速な対応。',
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: '情報セキュリティコンサルティング',
    desc: 'ISO 27001やPCI DSSに準拠したセキュリティアセスメント、ギャップ分析、ポリシー策定。',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'ITセキュリティ監査サービス',
    desc: 'システム、アクセス制御、データ保護、コンプライアンス体制を検査する包括的な監査。',
  },
  {
    icon: ComputerDesktopIcon,
    title: 'エンドポイント＆ネットワークセキュリティ',
    desc: 'EDR、モバイルデバイス管理、ファイアウォール、ネットワークセグメンテーション、リモートワークセキュリティ。',
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'インシデント対応＆脅威管理',
    desc: '即時封じ込め、フォレンジック分析、復旧、プロアクティブな脅威インテリジェンス監視。',
  },
]

const consultingDeliverables = [
  'セキュリティリスク評価とギャップ分析',
  'ISO 27001およびPCI DSS準拠レビュー',
  'セキュリティポリシー・手順の策定',
  '優先順位付き改善ロードマップ',
  '情報セキュリティプログラム成熟度スコアリング',
  '規制コンプライアンスマッピング（個人情報保護法、GDPR）',
]

const auditAreas = [
  {
    icon: ServerStackIcon,
    title: 'ネットワーク＆インフラ',
    desc: 'ファイアウォールルール、ネットワーク機器、セグメンテーション、全システムのアクセス制御リスト。',
  },
  {
    icon: LockClosedIcon,
    title: 'アクセス＆ID管理',
    desc: 'ユーザー認証、権限管理、情報資産に対するゼロトラストアクセス制御。',
  },
  {
    icon: ShieldCheckIcon,
    title: 'データ保護',
    desc: '暗号化基準、データ分類、バックアップ手順、データ損失防止対策。',
  },
  {
    icon: EyeIcon,
    title: 'コンプライアンス＆基準',
    desc: 'PCI DSS、ISO 27001、SOC 2、日本固有の規制要件に対応した監査結果のマッピング。',
  },
]

const whyItems = [
  {
    icon: ShieldCheckIcon,
    title: 'フルライフサイクルセキュリティ',
    desc: '初期セキュリティアセスメントからマネージドセキュリティ運用、インシデント対応まで。',
  },
  {
    icon: GlobeAltIcon,
    title: '日本のコンプライアンス専門知識',
    desc: '個人情報保護法、ISO 27001、PCI DSS、日本の規制基準に準拠した情報セキュリティプログラム。',
  },
  {
    icon: CpuChipIcon,
    title: 'マネージドセキュリティ運用',
    desc: 'SIEM、EDR、全システムにわたる継続的脅威監視を備えた24/7マネージドセキュリティサービス。',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'セキュリティコンサルティングの深さ',
    desc: 'アセスメントを実行可能な対策と測定可能な改善に変換するセキュリティコンサルティング。',
  },
  {
    icon: ExclamationTriangleIcon,
    title: '迅速なインシデント対応',
    desc: '即時封じ込め、フォレンジック調査、復旧支援を含む定義済みSLA。',
  },
  {
    icon: LockClosedIcon,
    title: '業界固有の経験',
    desc: '金融、ヘルスケア、製造、テクノロジー環境のセキュリティに関する豊富な経験。',
  },
]

const faqItems = [
  {
    q: 'ITセキュリティサービスはどのような脅威から保護しますか？',
    a: '当社のITセキュリティサービスは、マルウェア、ランサムウェア、フィッシング、データ侵害、内部脅威、高度持続的脅威に対して、早期検知と迅速な対応機能を備えた多層マネージドセキュリティアプローチで保護します。',
  },
  {
    q: 'マネージドセキュリティサービスと社内セキュリティの違いは？',
    a: 'マネージドセキュリティサービスは、24/7監視、専門的なセキュリティ知識、高度な脅威検知システムを提供します。当社のマネージドセキュリティサービスモデルは、予測可能なコストでエンタープライズグレードの情報セキュリティを実現します。',
  },
  {
    q: 'セキュリティコンサルティングはどのコンプライアンスフレームワークに対応していますか？',
    a: '当社のセキュリティコンサルティングは、ISO 27001、PCI DSS、SOC 2、GDPR、日本の個人情報保護法、業界固有の基準に対応しています。各情報セキュリティ監査は、関連するコンプライアンス要件に結果をマッピングします。',
  },
  {
    q: 'リモートワーク環境のセキュリティ確保は可能ですか？',
    a: 'はい。VPN設定、エンドポイント保護、ゼロトラストアクセス、クラウドセキュリティ対策、モバイルデバイス管理を含む包括的なリモートワークセキュリティを実装し、分散システムと情報資産を保護します。',
  },
  {
    q: '情報セキュリティ監査には何が含まれますか？',
    a: '情報セキュリティ監査は、ネットワーク機器、アクセス制御、データ保護、インシデント対応手順、コンプライアンス体制を検査します。優先順位付きの調査結果と改善ガイダンスを含む包括的なレポートを提供します。',
  },
  {
    q: 'セキュリティインシデントへの対応速度は？',
    a: '当社のマネージドセキュリティサービスには、迅速な対応能力を備えた定義済みレスポンスSLAが含まれます。即時の脅威封じ込め、フォレンジック調査、復旧支援を提供し、業務への影響を最小限に抑えます。',
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

export default function ITSecurityJaClient() {
  return (
    <main className="bg-[#F7F7FC]">
      {/* ── モバイル / タブレットヒーロー ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/cybersecurity/banner1.avif"
            alt="AKRIN ITセキュリティサービス"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">セキュリティサービス</span>
          </div>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            企業向けITセキュリティサービス
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            マネージドITセキュリティサービス、情報セキュリティコンサルティング、監査サービスで進化するサイバー脅威からシステムを保護します。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/ja/contact?service=it-security"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              セキュリティ相談を開始
            </Link>
            <Link
              href="/ja/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
            >
              すべてのサービス
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── デスクトップヒーロー ── */}
      <section id="hero-desktop" className="relative hidden h-[500px] overflow-hidden bg-[#02304F] lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/cybersecurity/banner1.avif"
            alt="AKRIN ITセキュリティサービス"
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
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">セキュリティサービス</span>
              </div>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                企業向けITセキュリティサービス
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                セキュリティコンサルティング、マネージドセキュリティ運用、継続的監視を組み合わせたマネージドITセキュリティサービスで、リスクを軽減し、進化するサイバー脅威に対するセキュリティ態勢を強化します。
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/ja/contact?service=it-security"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  セキュリティ相談を開始
                </Link>
                <Link
                  href="/ja/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[14px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                >
                  すべてのサービス
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

          {/* ── 01 概要 ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="サービス内容" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  エンタープライズ向けITセキュリティサービス
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  進化するサイバー脅威から情報資産を保護するには、業界のベストプラクティスと適切な管理策に基づいた体系的な情報セキュリティアプローチが必要です。AKRINは、お客様の環境のあらゆる層をカバーするマネージドITセキュリティサービスを提供します。
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

          {/* ── 02 マネージドセキュリティ ── */}
          <section id="managed-security">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="マネージドセキュリティ" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    マネージドITセキュリティサービス
                  </h2>
                  <div className="mt-6 max-w-3xl space-y-4">
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      当社のマネージドセキュリティサービスは、IT環境全体にわたる24/7監視、早期検知、潜在的脅威への迅速な対応を提供します。エンドポイントエージェント、ネットワーク機器、クラウドシステムからのデータを相関分析するマネージドセキュリティサービスプラットフォームを展開し、サイバー脅威が被害を及ぼす前に特定します。
                    </p>
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      マネージドセキュリティには、ファイアウォール管理、侵入検知・防止、脆弱性スキャン、セキュリティ情報・イベント管理（SIEM）、エンドポイント検知・対応が含まれます。各マネージドセキュリティサービス契約は、弱点を特定し、ビジネス目標に沿った保護計画を構築するセキュリティアセスメントから始まります。
                    </p>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'SIEM＆ログ相関分析', sub: 'リアルタイム脅威検知' },
                      { label: 'エンドポイント検知＆対応', sub: '全システムのEDR' },
                      { label: '脆弱性スキャン', sub: '継続的アセスメント' },
                      { label: 'インシデント対応', sub: '迅速な対応SLA' },
                    ].map((card) => (
                      <div
                        key={card.label}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#0B1F3A]"
                      >
                        <h3 className="text-sm font-semibold text-white">{card.label}</h3>
                        <p className="mt-1 text-xs text-white/50">{card.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 03 コンサルティング ── */}
          <section id="consulting" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="コンサルティング" />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      情報セキュリティコンサルティング
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      効果的な情報セキュリティは、リスク状況の理解から始まります。当社のセキュリティコンサルティングサービスには、ISO 27001やPCI DSSなどのフレームワークに対するセキュリティアセスメント、ギャップ分析、セキュリティポリシー・手順の策定が含まれます。
                    </p>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      セキュリティコンサルティングでは、調査結果の包括的なレポート、優先順位付きの改善提案、セキュリティ態勢を向上させるためのロードマップを提供します。保護と運用効率のバランスを取る適切な管理策の実装を支援し、情報セキュリティプログラムが業界のベストプラクティスに準拠することを確認します。
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A0B19]/50">コンサルティング成果物</h3>
                      <ul className="mt-5 space-y-3">
                        {consultingDeliverables.map((item) => (
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

          {/* ── 04 監査 ── */}
          <section id="audit">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="監査" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  ITセキュリティ監査サービス
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  定期的な情報セキュリティ監査は、コンプライアンスの維持と新たなリスクの特定に不可欠です。当社のITセキュリティ監査サービスは、確立されたセキュリティ基準に対して、システム、ネットワーク機器、アクセス制御、データ保護対策、インシデント対応能力を検査します。各監査では、重大度別に分類された調査結果と実行可能な推奨事項を含む包括的なレポートを作成します。
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                  {auditAreas.map((area) => (
                    <div
                      key={area.title}
                      className="relative rounded-xl border border-[#E2E5EF] bg-white p-6 pl-8 transition-all duration-300 hover:border-[#0066CC]/30 hover:shadow-md"
                    >
                      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#0066CC] to-[#0066CC]/20" />
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066CC]/10 ring-1 ring-[#0066CC]/20">
                          <area.icon className="h-4.5 w-4.5 text-[#0066CC]" />
                        </div>
                        <h3 className="text-[15px] font-semibold text-[#0A0B19]">{area.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#2D2E3F]/70">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 05 エンドポイント＆ネットワーク ── */}
          <section id="endpoint-network" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                  <div>
                    <SectionLabel label="保護" />
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      エンドポイント＆ネットワークセキュリティ
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      最新のITセキュリティサービスは、すべてのデバイスと接続ポイントに保護を拡張します。エンドポイント検知・対応（EDR）、モバイルデバイス管理、次世代ファイアウォール、ネットワークセグメンテーション、セキュアなリモートワークソリューションを実装し、分散ワークフォースを保護します。
                    </p>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      当社のセキュリティサービスには、デバイス暗号化、ゼロトラストアクセス制御、VPN設定、継続的なネットワーク監視が含まれます。リモートワーク環境を持つ組織向けに、すべての接続システムにわたって生産性を損なうことなく情報資産を保護するセキュリティアーキテクチャを展開します。
                    </p>
                    <div className="mt-6 space-y-2">
                      {[
                        'エンドポイント検知・対応（EDR）',
                        'モバイルデバイス管理（MDM）',
                        '次世代ファイアウォール展開',
                        'ゼロトラストネットワークセグメンテーション',
                        'セキュアリモートワークアーキテクチャ',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircleIcon className="h-5 w-5 shrink-0 text-[#0066CC]" />
                          <span className="text-sm text-[#2D2E3F]/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <Image
                      src="/images/banners/cybersecurity/detection-response.avif"
                      alt="エンドポイント＆ネットワークセキュリティ保護"
                      width={1024}
                      height={768}
                      className="w-full h-auto rounded-2xl shadow-lg"
                      quality={70}
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 06 なぜAKRIN ── */}
          <section id="why-akrin">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="なぜAKRIN" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  ITセキュリティサービスにAKRINを選ぶ理由
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  AKRINは、深い情報セキュリティの専門知識と実践的なマネージドセキュリティ運用を組み合わせます。当社のセキュリティコンサルティングとマネージドセキュリティサービス能力は、初期セキュリティアセスメントから継続的な監視、インシデント対応、コンプライアンス管理まで、セキュリティライフサイクル全体をカバーします。
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

          {/* ── 07 FAQ ── */}
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
                      ITセキュリティサービスとマネージドセキュリティ運用に関するよくある質問。
                    </p>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <FAQAccordion />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── CTA ── */}
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
                      ビジネスのセキュリティ強化を始めませんか？
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.7] text-white/60">
                      セキュリティ要件をお聞かせください。マネージドセキュリティの範囲、コンプライアンス対応、実行可能な推奨事項を含む体系的なアセスメントをお届けします。
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/ja/contact?service=it-security"
                        className="inline-flex items-center justify-center rounded-full bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0052A3]"
                      >
                        セキュリティ相談を開始
                      </Link>
                      <Link
                        href="/ja/services"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                      >
                        すべてのサービスを見る
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
