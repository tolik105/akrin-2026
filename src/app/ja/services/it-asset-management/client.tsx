'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { SectionNav } from '@/components/SectionNav'
import { RevealOnScroll } from '@/components/RevealOnScroll'

/* ─────────────────── data ─────────────────── */

const services = [
  {
    num: '01',
    title: '資産ディスカバリーと詳細インベントリ',
    body: '全拠点・部門を対象に包括的な資産ディスカバリーを実施し、検証済みベースラインインベントリを構築。物理資産、クラウド資産、未管理のIT資産を特定し、完全な所有者マッピングを行います。',
  },
  {
    num: '02',
    title: 'ソフトウェア資産管理',
    body: 'ソフトウェアライセンスの最適化、冗長なライセンス契約の排除、過剰プロビジョニングによるコスト削減。ソフトウェアシステムの監査、未使用ライセンスの特定、効果的な管理統制を実装します。',
  },
  {
    num: '03',
    title: '資産ライフサイクル管理',
    body: 'IT資産ライフサイクルの各段階を統制 — 資産取得・配備からメンテナンス、更新計画、廃棄まで、構造化された統制と役割ベースのアカウンタビリティを実現します。',
  },
  {
    num: '04',
    title: 'ITAMプラットフォーム構築',
    body: 'ITAMソフトウェアプラットフォームを運用ワークフローに合わせて構成。チケット管理、調達、ITサービス管理システムとの連携、CMDB構築、ライフサイクルワークフロー設計を含みます。',
  },
  {
    num: '05',
    title: 'クラウド資産管理',
    body: '仮想インフラ、SaaSサブスクリプション、クラウドベースのIT資産をオンプレミスのインベントリと併せて管理。ハイブリッド環境全体の完全な可視化を実現します。',
  },
  {
    num: '06',
    title: 'コンプライアンスとリスク低減',
    body: '監査対応を支えるガバナンス統制で、セキュリティ脆弱性、非準拠ソフトウェア、不完全な記録によるリスクを低減。エビデンスベースのレポーティングを提供します。',
  },
]

const processSteps = [
  {
    phase: 'Phase 1',
    timeline: '1〜2週目',
    title: 'ディスカバリーとベースライン',
    description:
      '自動化された資産ディスカバリーとエンドポイント照合により、検証済みベースラインを確立。データセンター機器、物理資産、オフラインデバイスの手動検証も実施します。',
    deliverable: '所有者マップ付きの検証済みベースラインインベントリ',
  },
  {
    phase: 'Phase 2',
    timeline: '2〜3週目',
    title: 'プラットフォーム構成',
    description:
      'ライフサイクルワークフロー、役割ベースの権限、既存ITサービス・調達システムとの連携を含むITAMプラットフォームを構成します。',
    deliverable: 'コアワークフロー連携済みの構成済みプラットフォーム',
  },
  {
    phase: 'Phase 3',
    timeline: '継続的',
    title: '継続的最適化',
    description:
      '月次ガバナンスレビュー、四半期の最適化提案、年次更新計画によりライフサイクルの健全性を監視し、支出を管理します。',
    deliverable: 'エグゼクティブレポーティング付きの継続的最適化',
  },
]

const whyItems = [
  {
    title: 'バイリンガル運用',
    body: '全IT資産管理サービス、レポーティング、ガバナンスにおいて日英両言語で対応。',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
  },
  {
    title: 'ライフサイクル + ITAD連携',
    body: '資産ライフサイクル管理とセキュアなIT資産廃棄を、一つの責任モデルで接続。',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
      </svg>
    ),
  },
  {
    title: 'エンタープライズITAMプロセス',
    body: '分散環境に対応した統制設計で、固定資産管理、インベントリ管理、包括的な資産追跡を支援。',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: '意思決定直結のレポーティング',
    body: '予算、リスク、更新計画に関する意思決定に直結する資産データと指標を提供。',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
]

const faqItems = [
  {
    q: 'IT資産管理とは何ですか？なぜ重要ですか？',
    a: 'IT資産管理は、ITライフサイクル全体を通じてIT資産を追跡・管理・最適化するプロセスです。コスト削減、コンプライアンス確保、運用効率向上、テクノロジー投資に関する適切な意思決定を可能にします。',
  },
  {
    q: 'AKRINはどのような種類のIT資産を管理しますか？',
    a: 'エンドポイント、サーバー、ネットワーク機器、モバイルデバイス、周辺機器、ソフトウェアライセンス、クラウド資産など、あらゆるカテゴリのIT資産をライフサイクル全体で管理します。',
  },
  {
    q: 'ITAMソフトウェアは既存システムとどのように連携しますか？',
    a: 'ITAMソフトウェアはITサービス管理プラットフォーム、チケットシステム、調達ツール、ディレクトリサービスと連携します。構成管理データベース（CMDB）がすべての資産情報を接続する中央リポジトリとなります。',
  },
  {
    q: '日本国内の複数拠点運用に対応できますか？',
    a: 'はい。IT資産管理プロセスは、日本全国の分散オフィス、リモートユーザー、一元管理のレポーティング要件に対応します。日英バイリンガルのサービス提供により、シームレスな運用管理を実現します。',
  },
  {
    q: '資産ライフサイクル管理はITADとどう連携しますか？',
    a: '資産ライフサイクル管理は、資産がEOLに達した時点でIT資産廃棄に自然に移行します。AKRINはこれらのワークフローを接続し、廃棄、セキュアなデータ破壊、コンプライアンス証跡を一連のプロセスで管理します。',
  },
  {
    q: 'どのようなレポーティングと資産追跡が提供されますか？',
    a: 'ライフサイクル、利用率、コンプライアンス、最適化に関するレポーティングをIT経営層およびビジネスステークホルダー向けに提供します。資産追跡システムにより、管理対象IT資産の最新情報を常に把握できます。',
  },
]

const sectionItems = [
  { id: 'overview', label: '概要', num: '01' },
  { id: 'what-is-itam', label: 'ITAMとは', num: '02' },
  { id: 'services', label: 'サービス', num: '03' },
  { id: 'process', label: 'プロセス', num: '04' },
  { id: 'why-akrin', label: 'AKRIN', num: '05' },
  { id: 'faq', label: 'FAQ', num: '06' },
]

/* ─────────────────── FAQ accordion ─────────────────── */

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <dl className="divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i} className="py-5 first:pt-0 last:pb-0">
          <dt>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-start justify-between text-left"
            >
              <span className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-sm text-[#0066CC]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-semibold text-white">
                  {item.q}
                </span>
              </span>
              <span className="ml-4 mt-1 flex-shrink-0">
                <svg
                  className={`h-5 w-5 text-white/60 transition-transform ${openIndex === i ? 'rotate-45' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
          </dt>
          {openIndex === i && (
            <dd className="mt-3 pl-10 text-sm/7 text-white/70">{item.a}</dd>
          )}
        </div>
      ))}
    </dl>
  )
}

/* ─────────────────── main component ─────────────────── */

export function ItAssetManagementJaClient() {
  return (
    <main className="overflow-x-clip">
      {/* ── MOBILE HERO ── */}
      <section className="relative lg:hidden">
        <div className="relative min-h-[520px] bg-[#02304F]">
          <Image
            src="/images/banners/it-asset-management/it-asset-management.avif"
            alt="AKRINのIT資産管理サービス"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 20%, rgba(2,48,79,0.4) 40%, rgb(2,48,79) 58%)',
            }}
          />
          <div className="relative flex min-h-[520px] flex-col justify-end px-6 pb-10">
            <div className="flex items-center gap-2 text-xs tracking-widest text-white/60">
              <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
              <span className="font-mono uppercase">IT Asset Management</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              IT資産管理サービス — ライフサイクル全体の完全統制
            </h1>
            <p className="mt-4 text-base/7 text-white/80">
              調達から廃棄まで、すべてのIT資産を可視化し、ライフサイクル全体を統制します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/ja/contact"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F] shadow-sm hover:bg-white/90"
              >
                相談を予約
              </a>
              <a
                href="/ja/services"
                className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10"
              >
                全サービス
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESKTOP HERO ── */}
      <section className="relative hidden lg:block">
        <div className="relative h-[500px]">
          <Image
            src="/images/banners/it-asset-management/it-asset-management.avif"
            alt="AKRINのIT資産管理サービス"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 35%, rgba(2,48,79,0.85) 55%, rgba(2,48,79,0.4) 75%, transparent 90%)',
            }}
          />
          <div className="relative mx-auto flex h-full max-w-[1047px] items-center px-6 lg:px-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs tracking-widest text-white/60">
                <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
                <span className="font-mono uppercase">IT Asset Management</span>
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                IT資産管理サービス — ライフサイクル全体の完全統制
              </h1>
              <p className="mt-5 text-lg/8 text-white/80">
                調達から廃棄まで、すべてのIT資産を可視化し、ライフサイクル全体を統制します。
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="/ja/contact"
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F] shadow-sm hover:bg-white/90"
                >
                  相談を予約
                </a>
                <a
                  href="/ja/services"
                  className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10"
                >
                  全サービス
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION NAV RIBBON ── */}
      <SectionNav items={sectionItems} variant="ribbon" />

      {/* ── BODY ── */}
      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── OVERVIEW ── */}
          <section id="overview" className="py-20 sm:py-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-5">
                  <div className="lg:col-span-3">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                      資産の可視化と統制
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                      全IT資産の意思決定を、運用可能な形でコントロール
                    </h2>
                    <div className="mt-8 space-y-5 text-base/7 text-[#2D2E3F]">
                      <p>
                        AKRINは、エンタープライズIT資産管理サービスを提供し、調達からライフサイクル全体、セキュアな廃棄まで、すべてのIT資産を完全に可視化します。ITAMプロセスは、資産追跡、ライフサイクル管理、コンプライアンスガバナンスを統合し、日本全国の複数拠点運用に対応するサービス管理プラットフォームとして構築されています。
                      </p>
                      <p>
                        分散オフィス全体での資産管理、ソフトウェアライセンスの最適化、ITサービス管理ワークフローの効率化など、AKRINはITチームがコスト削減、リスク軽減、テクノロジー投資に関する適切な意思決定を行うための資産管理ソリューションを提供します。
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-6">
                      <h3 className="text-lg font-semibold text-[#0A0B19]">主な成果</h3>
                      <div className="mt-6 space-y-6">
                        <div>
                          <p className="text-4xl font-bold text-[#0066CC]">20–35%</p>
                          <p className="mt-1 text-sm text-[#6B6D7C]">ライフサイクル最適化によるコスト削減</p>
                        </div>
                        <div className="border-t border-[#E2E5EF] pt-6">
                          <p className="text-4xl font-bold text-[#0066CC]">100%</p>
                          <p className="mt-1 text-sm text-[#6B6D7C]">運用環境全体の資産可視化</p>
                        </div>
                        <div className="border-t border-[#E2E5EF] pt-6">
                          <p className="text-4xl font-bold text-[#0066CC]">24時間</p>
                          <p className="mt-1 text-sm text-[#6B6D7C]">初期インベントリ立ち上げの標準期間</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── WHAT IS ITAM ── */}
          <section id="what-is-itam" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                  <div className="flex items-center gap-2 text-xs tracking-widest text-white/60">
                    <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
                    <span className="font-mono uppercase">ITAMを理解する</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    IT資産管理（ITAM）とは？
                  </h2>
                  <div className="mt-6 grid gap-8 lg:grid-cols-2">
                    <div className="space-y-4 text-sm/7 text-white/80">
                      <p>
                        IT資産管理（ITAM）は、組織内のIT資産のライフサイクル全体を追跡・管理・最適化する実践です。サーバー、ノートPC、モバイルデバイス、ネットワーク機器などのハードウェア資産、およびアプリケーション、ソフトウェアライセンス、ライセンス契約のソフトウェア資産管理を含みます。
                      </p>
                      <p>
                        効果的な資産管理により、IT部門はインベントリ内のすべての資産に関する最新情報を維持し、運用管理と資産ライフサイクル管理の意思決定を改善できます。
                      </p>
                    </div>
                    <div className="space-y-4 text-sm/7 text-white/80">
                      <p>
                        適切に実装されたIT資産管理プロセスは、ITIL（Information Technology Infrastructure Library）フレームワークと統合し、資産管理と構成管理を構成管理データベース（CMDB）で接続して、単一の真実の情報源を提供します。
                      </p>
                      <p>
                        ITAMソフトウェアは、資産取得から配備、メンテナンス、最終的な廃棄まで — 各IT資産のライフサイクル全体にわたって資産データを追跡します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── SERVICES ── */}
          <section id="services" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                  提供サービス
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                  IT資産管理サービスの内容
                </h2>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <article
                      key={s.num}
                      className="group relative rounded-2xl border border-[#E2E5EF] bg-white p-6 transition-all hover:border-[#0066CC]/30 hover:shadow-lg"
                    >
                      <span className="font-mono text-3xl font-bold text-[#0066CC]/15 transition-colors group-hover:text-[#0066CC]/30">
                        {s.num}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-[#0A0B19]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm/7 text-[#6B6D7C]">{s.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── PROCESS ── */}
          <section id="process" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl bg-[#FAFAFC] border border-[#E2E5EF] p-8 sm:p-12">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                    導入プロセス
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                    IT資産管理の導入ステップ
                  </h2>
                  <div className="mt-10 grid gap-8 lg:grid-cols-3">
                    {processSteps.map((step, i) => (
                      <div key={i} className="relative">
                        {i < processSteps.length - 1 && (
                          <div className="absolute right-0 top-8 hidden h-0.5 w-8 translate-x-full bg-[#0066CC]/20 lg:block" />
                        )}
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-sm font-bold text-white">
                            {i + 1}
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6D7C]">
                              {step.phase} · {step.timeline}
                            </p>
                          </div>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#0A0B19]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm/7 text-[#6B6D7C]">
                          {step.description}
                        </p>
                        <p className="mt-4 rounded-lg bg-white border border-[#E2E5EF] px-4 py-2 text-xs font-medium text-[#0A0B19]">
                          ✓ {step.deliverable}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── WHY AKRIN ── */}
          <section id="why-akrin" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                    AKRINの強み
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                    AKRINが選ばれる理由
                  </h2>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {whyItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-5 rounded-2xl border border-[#E2E5EF] bg-white p-6 transition-all hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0066CC]/10 text-[#0066CC]">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A0B19]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm/7 text-[#6B6D7C]">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── INDUSTRIES (compact) ── */}
          <section className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <h2 className="text-2xl font-bold tracking-tight text-[#0A0B19] sm:text-3xl">
                  対応業界
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#6B6D7C]">
                  AKRINは、金融サービス（規制対応のライフサイクル統制）、医療・ライフサイエンス（資産トレーサビリティ）、製造業（複数拠点のインベントリ管理）、小売（店舗・バックオフィスの資産標準化）、テクノロジー・通信（変化の速い環境でのライフサイクル制御）など、幅広い業界にIT資産管理サービスを提供しています。
                </p>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── FAQ (dark) ── */}
          <section id="faq" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                  <div className="grid gap-10 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                      <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                        FAQ
                      </p>
                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        よくある質問
                      </h2>
                      <p className="mt-4 text-sm/7 text-white/60">
                        IT資産管理サービス、ITAMプロセス、ライフサイクルガバナンスに関するよくある質問。
                      </p>
                    </div>
                    <div className="lg:col-span-3">
                      <FAQAccordion items={faqItems} />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── CTA ── */}
          <section className="pb-20 sm:pb-24">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-3xl bg-[#02304F] px-8 py-12 text-center sm:px-12">
                <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  IT資産のライフサイクル管理を始めませんか？
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base/7 text-white/70">
                  AKRINが、調達から廃棄まで資産ライフサイクル全体をカバーするIT資産管理プログラムの設計と実装を支援します。
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <a
                    href="/ja/contact"
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F] shadow-sm hover:bg-white/90"
                  >
                    相談を予約
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
