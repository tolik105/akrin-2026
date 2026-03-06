'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionNav } from '@/components/SectionNav'
import { RevealOnScroll } from '@/components/RevealOnScroll'

/* ─────────────────── data ─────────────────── */

const managedServices = [
  {
    id: 'soc',
    label: 'SOC',
    title: 'セキュリティオペレーションセンター',
    body: 'セキュリティオペレーションセンター（SOC）が24時間365日の脅威監視を提供し、専門のセキュリティアナリストがお客様の環境を常時監視します。継続的なモニタリング、アラートのトリアージ、エスカレーションにより、高度な持続的脅威、ランサムウェア、不正アクセスから組織を保護します。',
    highlights: ['24/7脅威監視', 'アラートトリアージ＆エスカレーション', 'セキュリティログ管理', '脅威インテリジェンスフィード'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    id: 'mdr',
    label: 'MDR',
    title: 'マネージド検知・対応',
    body: 'マネージド検知・対応（MDR）は、自動化された脅威検知と人的調査を組み合わせ、セキュリティインシデントがエスカレートする前に特定・封じ込めます。マネージドセキュリティサービスプロバイダーとして、迅速なインシデント対応、フォレンジック分析、修復ガイダンスを提供します。',
    highlights: ['自動脅威検知', '人的調査', '迅速なインシデント対応', 'フォレンジック分析'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: 'endpoint',
    label: 'エンドポイント＆ネットワーク',
    title: 'エンドポイント・ネットワークセキュリティ',
    body: 'エンドポイント、サーバー、ネットワークインフラをマルウェア、ランサムウェア、高度なサイバー攻撃から保護します。次世代ファイアウォール、エンドポイント検知・対応、ネットワークセグメンテーションによる多層防御戦略を展開します。',
    highlights: ['エンドポイント検知＆対応', '次世代ファイアウォール管理', 'ネットワークセグメンテーション', 'マルウェア対策'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
]

const assessmentServices = [
  {
    title: '脆弱性評価とペネトレーションテスト',
    body: '定期的な脆弱性スキャンとペネトレーションテストにより、攻撃者に悪用される前にインフラ全体のセキュリティ脆弱性を特定します。リスク評価によりサイバーセキュリティ態勢を評価し、ビジネスインパクトに基づいて修復の優先順位を決定します。',
    items: ['脆弱性スキャン', 'ペネトレーションテスト', 'リスク評価＆スコアリング', '修復優先順位付け'],
  },
  {
    title: 'コンプライアンスとガバナンス',
    body: 'ISO 27001、SOC 2、PCI DSS、および国内規制フレームワークに対応する包括的なセキュリティサービス。ガバナンスプログラムがサイバーセキュリティサービスをビジネス目標と規制要件に整合させます。',
    items: ['ISO 27001コンプライアンス', 'SOC 2準備', 'PCI DSS評価', 'セキュリティポリシー策定'],
  },
]

const orgSolutions = [
  {
    label: '中小企業・中堅企業',
    title: '中小・中堅企業向けセキュリティ',
    body: 'エンタープライズレベルの保護を複雑さなく実現するコスト効果の高いサイバーセキュリティソリューション。マネージドセキュリティサービスはビジネスの成長に合わせてスケールし、予測可能な月額コストでSOCとMDRへのアクセスを提供します。',
    accent: '#0066CC',
  },
  {
    label: 'エンタープライズ',
    title: 'エンタープライズ向けサイバーセキュリティサービス',
    body: '複雑なハイブリッド環境、複数拠点運用、厳格なコンプライアンス要件を持つ大規模組織向けの高度なセキュリティプログラム。専任セキュリティアナリスト、カスタム検知ルール、経営層向けレポーティングと戦略的セキュリティコンサルティングを提供します。',
    accent: '#0B1F3A',
  },
]

const whyItems = [
  {
    title: '専門セキュリティチーム',
    body: '脅威検知、インシデント対応、脆弱性管理、コンプライアンスフレームワークに深い専門知識を持つ認定セキュリティプロフェッショナル。セキュリティアナリストがお客様チームの延長として機能します。',
  },
  {
    title: 'バイリンガルサービス提供',
    body: 'セキュリティ監視ダッシュボード、インシデントレポート、経営ブリーフィング、コンプライアンス文書まで、英語・日本語の完全バイリンガルでサイバーセキュリティサービスを提供し、日本で事業を展開する国際企業をサポートします。',
  },
  {
    title: '実証済みのサイバーセキュリティプロセス',
    body: 'NIST、MITRE ATT&CK、業界標準フレームワークに準拠した構造化された方法論により、透明性のあるレポーティングと説明責任のもと、一貫した測定可能なセキュリティ態勢の改善を実現します。',
  },
]

const faqItems = [
  { q: 'AKRINが提供するサイバーセキュリティサービスは？', a: 'AKRINは、24/7セキュリティオペレーションセンター監視、マネージド検知・対応、エンドポイント・ネットワークセキュリティ、脆弱性評価、ペネトレーションテスト、コンプライアンスコンサルティング、インシデント対応など、日本で事業を展開する組織向けのマネージドセキュリティサービスを提供しています。' },
  { q: 'SOCとMDRの違いは何ですか？', a: 'セキュリティオペレーションセンター（SOC）は継続的な監視とアラート管理を提供し、マネージド検知・対応（MDR）はさらに積極的な脅威ハンティング、自動封じ込め、ハンズオンのインシデント対応を行います。多くの組織が多層セキュリティ戦略の一環として両方を活用しています。' },
  { q: '中小企業向けのサイバーセキュリティサービスはありますか？', a: 'はい。マネージドサイバーセキュリティサービスは、中小企業から大企業まで対応できるよう設計されています。中小企業のお客様は、共有SOCリソースとパッケージ化されたセキュリティサービスを予測可能な月額コストでご利用いただけます。' },
  { q: 'セキュリティインシデント発生時の対応は？', a: '確立されたフレームワークに基づくインシデント対応プロセス：SOCによる検知・トリアージ、MDRチームによる調査・封じ込め、根絶・復旧、そして防御強化のための事後レビューと推奨事項の提供を行います。' },
  { q: 'どのコンプライアンスフレームワークに対応していますか？', a: 'ISO 27001、SOC 2、PCI DSS、GDPR、および日本固有の規制要件に対応しています。ギャップ評価、ポリシー策定、監査準備、コンプライアンス態勢を維持するための継続的な監視を含むコンプライアンスサービスを提供しています。' },
  { q: 'バイリンガルでのサイバーセキュリティサービス提供は可能ですか？', a: 'はい。すべてのサイバーセキュリティサービスを英語・日本語の両方で提供しています。セキュリティダッシュボード、インシデントアラートから経営レポート、コンプライアンス文書まで対応し、日本で事業を展開する多国籍企業をサポートします。' },
]

const sectionItems = [
  { id: 'overview', label: '概要', num: '01' },
  { id: 'managed-security', label: 'マネージドセキュリティ', num: '02' },
  { id: 'assessment', label: '評価', num: '03' },
  { id: 'solutions', label: 'ソリューション', num: '04' },
  { id: 'why-akrin', label: 'AKRINの強み', num: '05' },
  { id: 'faq', label: 'FAQ', num: '06' },
]

/* ─────────────────── FAQ accordion ─────────────────── */

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#0066CC]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-gray-950 sm:text-base">
                {item.q}
              </span>
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {open === i && (
            <p className="pb-5 pl-8 text-sm/7 text-gray-600">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─────────────────── component ─────────────────── */

export default function CybersecurityJaClient() {
  return (
    <main>
      {/* ── Mobile / Tablet Hero ── */}
      <section className="relative min-h-[520px] bg-[#02304F] lg:hidden" aria-labelledby="hero-mobile">
        <Image
          src="/images/banners/cybersecurity/banner1.avif"
          alt="日本の組織向けサイバーセキュリティサービス"
          fill
          className="object-cover"
          priority
          quality={70}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(2,48,79,0.4) 40%, rgb(2,48,79) 58%)' }}
        />
        <div className="relative flex min-h-[520px] flex-col justify-end px-6 pb-10">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
            <span className="font-mono text-xs tracking-[0.14em] uppercase">サイバーセキュリティサービス</span>
          </div>
          <h1 id="hero-mobile" className="mt-3 font-serif text-3xl leading-tight font-light tracking-[-0.02em] text-white sm:text-4xl">
            サイバーセキュリティサービス
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
            24/7監視、脅威検知、インシデント対応で日本の組織を守るマネージドセキュリティソリューション。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/ja/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              セキュリティ相談
            </a>
            <Link href="/ja/services" className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              全サービス一覧
            </Link>
          </div>
        </div>
      </section>

      {/* ── Desktop Hero ── */}
      <section className="relative hidden h-[500px] bg-[#02304F] lg:block" aria-labelledby="hero-desktop">
        <Image
          src="/images/banners/cybersecurity/banner1.avif"
          alt="日本の組織向けサイバーセキュリティサービス"
          fill
          className="object-cover"
          priority
          quality={70}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 35%, rgba(2,48,79,0.8) 55%, rgba(2,48,79,0.45) 75%, transparent 90%)' }}
        />
        <div className="relative mx-auto flex h-full max-w-[1047px] flex-col justify-center px-8">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
            <span className="font-mono text-xs tracking-[0.14em] uppercase">サイバーセキュリティサービス</span>
          </div>
          <h1 id="hero-desktop" className="mt-3 font-serif text-5xl leading-tight font-light tracking-[-0.02em] text-white">
            サイバーセキュリティサービス
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            24/7監視、脅威検知、インシデント対応で日本の組織を守るマネージドセキュリティソリューション。
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/ja/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              セキュリティ相談
            </a>
            <Link href="/ja/services" className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              全サービス一覧
            </Link>
          </div>
        </div>
      </section>

      {/* ── SectionNav Ribbon ── */}
      <SectionNav variant="ribbon" items={sectionItems} ariaLabel="ページセクション" />

      {/* ── Body wrapper ── */}
      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── Overview ── */}
          <section id="overview" className="py-16 sm:py-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                組織にサイバーセキュリティサービスが必要な理由
              </h2>
              <p className="mt-6 max-w-4xl text-base/8 text-gray-700 sm:text-lg/8">
                日本の組織を標的とするサイバー脅威は、量・巧妙さともに増加し続けています。ランサムウェア攻撃、フィッシング攻撃から内部脅威、サプライチェーン侵害まで、クラウドインフラ、リモートワーク、デジタルオペレーションの導入に伴い攻撃対象が拡大しています。専門のサイバーセキュリティサービスなしでは、データ侵害、規制上のペナルティ、業務中断、そして長期的な評判の損害に直面するリスクがあります。
              </p>
              <p className="mt-4 max-w-4xl text-base/8 text-gray-700 sm:text-lg/8">
                マネージドセキュリティサービスプロバイダーは、社内チームだけでは維持が困難な専門知識、ツール、継続的な監視を提供し、予測可能なコストでエンタープライズグレードのセキュリティサービスを実現します。
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { stat: '24/7', label: '継続的セキュリティ監視' },
                  { stat: '< 15分', label: '平均インシデント対応時間' },
                  { stat: '100%', label: 'バイリンガルEN/JA対応' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4 rounded-xl border border-[#0066CC]/15 bg-[#0066CC]/[0.03] px-5 py-4">
                    <span className="text-2xl font-bold text-[#0066CC]">{s.stat}</span>
                    <span className="text-sm text-gray-600">{s.label}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Managed Security Services ── */}
          <section id="managed-security" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                マネージドセキュリティサービス
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                24時間体制の監視、高度な脅威検知、エキスパート主導のインシデント対応を組み合わせたマネージドサイバーセキュリティサービスで、進化するサイバー脅威から組織を保護します。
              </p>
              <div className="mt-10 space-y-5">
                {managedServices.map((svc) => (
                  <div key={svc.id} className="group flex gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#0066CC]/30 hover:shadow-sm sm:p-8">
                    <div className="hidden w-1 shrink-0 rounded-full bg-[#0066CC] sm:block" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066CC]/10 text-[#0066CC]">
                          {svc.icon}
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.14em] text-gray-400 uppercase">{svc.label}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-gray-950">{svc.title}</h3>
                      <p className="mt-2 text-sm/7 text-gray-600">{svc.body}</p>
                      <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                        {svc.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="h-4 w-4 shrink-0 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Security Assessment & Compliance ── */}
          <section id="assessment" className="pb-20">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  セキュリティ評価・コンプライアンスサービス
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-white/70">
                  リスクを特定し、サイバーセキュリティ態勢を強化し、業界標準へのコンプライアンスを維持するプロアクティブなセキュリティ評価とガバナンスプログラム。
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {assessmentServices.map((svc) => (
                    <div key={svc.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-[#0B1F3A]">
                      <h3 className="text-base font-semibold text-white">{svc.title}</h3>
                      <p className="mt-3 text-sm/6 text-white/60">{svc.body}</p>
                      <ul className="mt-4 space-y-2">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0066CC]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Solutions by Org Size ── */}
          <section id="solutions" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                あらゆる組織向けサイバーセキュリティソリューション
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                成長企業から大規模エンタープライズまで、セキュリティ要件と予算に合わせてスケールするサイバーセキュリティソリューションを提供します。
              </p>
              <div className="mt-10 space-y-4">
                {orgSolutions.map((sol) => (
                  <div
                    key={sol.label}
                    className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-1"
                      style={{ backgroundColor: sol.accent }}
                    />
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: sol.accent }}>
                      {sol.label}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-950">{sol.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm/7 text-gray-600">{sol.body}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Why AKRIN ── */}
          <section id="why-akrin" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                AKRINをサイバーセキュリティプロバイダーに選ぶ理由
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                AKRINは、深い技術的専門知識と日本で事業を展開する組織固有の運用要件への理解を兼ね備えたサイバーセキュリティサービスを提供します。
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {whyItems.map((item, i) => (
                  <div key={item.title} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
                    <div className="absolute left-0 right-0 top-0 h-1 bg-[#0066CC]" />
                    <span className="font-mono text-3xl font-bold text-[#0066CC]/15">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-gray-950">{item.title}</h3>
                    <p className="mt-2 text-sm/7 text-gray-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="pb-20">
            <RevealOnScroll>
              <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                    サイバーセキュリティ<br />サービスFAQ
                  </h2>
                  <p className="mt-3 text-sm/7 text-gray-600">
                    マネージドサイバーセキュリティサービスに関するよくある質問。
                  </p>
                </div>
                <FAQAccordion items={faqItems} />
              </div>
            </RevealOnScroll>
          </section>

          {/* ── CTA ── */}
          <section className="pb-24">
            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFC] p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                AKRINのサイバーセキュリティサービスで組織を保護
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                AKRINのマネージドサイバーセキュリティサービスでセキュリティ態勢を強化しましょう。セキュリティ要件についてご相談いただき、日本全国の組織を保護するサイバーセキュリティソリューションをご確認ください。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/ja/contact" className="inline-flex items-center rounded-sm bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052A3]">
                  お問い合わせ
                </a>
                <a href="https://cal.com/akrinsupport/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-sm border border-[#0A0B19]/20 px-6 py-2.5 text-sm font-semibold text-[#0A0B19] transition-colors hover:border-[#0066CC] hover:text-[#0066CC]">
                  無料相談予約
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
