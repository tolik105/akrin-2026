'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { SectionNav } from '@/components/SectionNav'
import { RevealOnScroll } from '@/components/RevealOnScroll'

/* ─────────────────── data ─────────────────── */

const testingTypes = [
  {
    label: '外部テスト',
    title: '外部ネットワークペネトレーションテスト',
    body: 'インターネット公開資産（Webサーバー、FTPサーバー、メールゲートウェイ、VPNエンドポイント、クラウドサービス）を対象に、事前知識のない外部攻撃者が悪用できる脆弱性を特定します。設定ミス、未パッチソフトウェア、脆弱な認証、露出したサービスを明らかにします。',
    highlights: ['境界セキュリティ評価', 'オープンポート・サービス列挙', '侵入ポイント特定', 'クラウドサービス評価'],
  },
  {
    label: '内部テスト',
    title: '内部ペネトレーションテスト',
    body: '侵害されたデバイス、内部脅威、またはフィッシング攻撃の成功により、企業ネットワーク内部に既に足場を持つ攻撃者をシミュレートします。横展開経路、権限昇格、Active Directoryの弱点を評価します。',
    highlights: ['横展開分析', '権限昇格テスト', 'Active Directory評価', '機密データ露出'],
  },
]

const boxTypes = [
  {
    name: 'ブラックボックステスト',
    desc: '事前知識ゼロ — ペンテスターが独自に攻撃面を発見し、最もリアルな攻撃者シミュレーションを提供します。',
    icon: (
      <svg className="h-6 w-6 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
  {
    name: 'グレーボックステスト',
    desc: '部分的な情報 — テスターに認証情報やネットワークマップを提供し、特定のセキュリティ懸念をより深く調査します。',
    icon: (
      <svg className="h-6 w-6 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    name: 'ホワイトボックステスト',
    desc: 'ソースコード、アーキテクチャ、設定への完全アクセスにより、スタック全体の包括的なセキュリティ評価を行います。',
    icon: (
      <svg className="h-6 w-6 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
]

const methodologySteps = [
  { num: '01', title: '偵察・スキャン', body: 'パッシブおよびアクティブな偵察でターゲット環境をマッピング — ネットワーク発見、ポートスキャン、サービス列挙、潜在的な侵入ポイントの特定を行います。' },
  { num: '02', title: '脆弱性特定', body: '自動脆弱性スキャナーと手動分析を組み合わせ、SQLインジェクション、認証バイパス、設定の弱点を含むセキュリティ脆弱性を特定します。すべての発見事項を手動で検証します。' },
  { num: '03', title: 'エクスプロイト・ポストエクスプロイト', body: '特定された脆弱性の制御された悪用により、実際のビジネスへの影響を実証 — 権限昇格、横展開、攻撃者がデータを盗んだり業務を妨害できるかを判定します。' },
  { num: '04', title: 'レポート・改善指導', body: 'エグゼクティブサマリー、詳細な技術的発見事項、概念実証エビデンス、リスク評価、優先順位付き改善手順を含む詳細なペネトレーションテストレポート。PCI DSSおよびISO 27001コンプライアンスマッピングも含まれます。' },
]

const whyItems = [
  { title: '認定ペンテスター', desc: 'OSCP、CEH、GPEN認定のエシカルハッカーが深いネットワークセキュリティ専門知識を持っています。' },
  { title: '実績ある方法論', desc: 'PTES、OWASP、NIST SP 800-115フレームワークに準拠したテスト。' },
  { title: '内部・外部カバレッジ', desc: '内部・外部ネットワーク環境全体にわたるフルスペクトラムテスト。' },
  { title: '実用的なレポート', desc: 'ビジネスコンテキストのリスク評価を含む詳細なネットワークペンテストレポート。' },
  { title: '改善検証', desc: '脆弱性が解決されたことを確認するための再テストが含まれます。' },
  { title: 'コンプライアンスサポート', desc: 'PCI DSS、ISO 27001、SOC 2コンプライアンス監査のサポート。' },
]

const faqItems = [
  { q: 'ネットワークペネトレーションテストとは？', a: 'ネットワークペネトレーションテストは、認定されたエシカルハッカーがITインフラストラクチャに対して行う許可されたシミュレーション攻撃です。悪用可能なセキュリティ脆弱性を特定し、セキュリティ統制をテストし、実際の攻撃者がシステムにアクセスする前に改善指導を提供します。' },
  { q: 'ペネトレーションテストはどのくらいの頻度で実施すべきですか？', a: 'ほとんどのコンプライアンスフレームワークでは、最低年1回のペネトレーションテストが必要です。ネットワークの大幅な変更後、主要なデプロイメント前、および最低年1回のテストを推奨します。' },
  { q: '外部と内部のペネトレーションテストの違いは？', a: '外部ペネトレーションテストはインターネット公開資産を外部者の視点から評価し、内部テストはネットワーク内部に既にいる攻撃者をシミュレートします。包括的なセキュリティ評価には内部・外部両方のテストが含まれます。' },
  { q: 'ブラックボックステストとグレーボックステストの違いは？', a: 'ブラックボックステストではテスターにシステムの事前知識を与えず、実際の外部攻撃者をシミュレートします。グレーボックステストでは認証情報やネットワークマップなどの限定的な情報を提供し、特定領域の深い調査を可能にします。両方のアプローチが重要な脆弱性を特定します。' },
  { q: 'ネットワークペネトレーションテストにはどのくらいの期間がかかりますか？', a: '典型的なネットワークペネトレーションテストは、範囲、複雑さ、対象システムの数に応じて1〜3週間かかります。スコーピングフェーズで詳細なタイムラインを提供します。' },
  { q: 'どのような成果物が含まれますか？', a: 'すべてのエンゲージメントには、エグゼクティブサマリー、詳細な技術的発見事項、概念実証エビデンス、業界標準に沿ったリスク評価、優先順位付き改善指導を含む包括的なペネトレーションテストレポートが含まれます。レポート後のコンサルテーションも提供します。' },
]

const sectionItems = [
  { id: 'overview', label: '概要', num: '01' },
  { id: 'testing-types', label: 'テスト種別', num: '02' },
  { id: 'box-testing', label: 'アプローチ', num: '03' },
  { id: 'methodology', label: '方法論', num: '04' },
  { id: 'why-akrin', label: 'AKRIN', num: '05' },
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

export default function NetworkPenetrationTestingJaClient() {
  return (
    <main>
      {/* ── Mobile / Tablet Hero ── */}
      <section className="relative min-h-[520px] bg-[#02304F] lg:hidden" aria-labelledby="hero-mobile">
        <Image
          src="/images/banners/penetration-testing/penetation-testing.avif"
          alt="ネットワークペネトレーションテストサービス"
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
            <span className="font-mono text-xs tracking-[0.14em] uppercase">Network Penetration Testing</span>
          </div>
          <h1 id="hero-mobile" className="mt-3 font-serif text-3xl leading-tight font-light tracking-[-0.02em] text-white sm:text-4xl">
            ネットワーク<br />ペネトレーションテスト
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
            認定エシカルハッカーによるプロフェッショナルなペンテストで、ITインフラストラクチャ全体の悪用可能なセキュリティ脆弱性を特定します。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/ja/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              評価を予約
            </a>
            <a href="/ja/services" className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              すべてのサービス
            </a>
          </div>
        </div>
      </section>

      {/* ── Desktop Hero ── */}
      <section className="relative hidden h-[500px] bg-[#02304F] lg:block" aria-labelledby="hero-desktop">
        <Image
          src="/images/banners/penetration-testing/penetation-testing.avif"
          alt="ネットワークペネトレーションテストサービス"
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
            <span className="font-mono text-xs tracking-[0.14em] uppercase">Network Penetration Testing</span>
          </div>
          <h1 id="hero-desktop" className="mt-3 font-serif text-5xl leading-tight font-light tracking-[-0.02em] text-white">
            ネットワーク<br />ペネトレーションテスト
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            認定エシカルハッカーによるプロフェッショナルなペンテストで、ITインフラストラクチャ全体の悪用可能なセキュリティ脆弱性を特定します。
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/ja/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              評価を予約
            </a>
            <a href="/ja/services" className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              すべてのサービス
            </a>
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
              <div className="grid gap-12 lg:grid-cols-[1fr_minmax(320px,420px)]">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                    ネットワークペネトレーションテストサービス
                  </h2>
                  <p className="mt-6 text-base/8 text-gray-700 sm:text-lg/8">
                    AKRINは、ITインフラストラクチャ全体の悪用可能なセキュリティ脆弱性を特定するプロフェッショナルなネットワークペネトレーションテストサービスを提供します。認定ペンテスターが企業ネットワーク、Webアプリケーション、インターネット公開資産に対して実際の攻撃をシミュレートし、悪意のある攻撃者が機密データにアクセスする前にセキュリティ体制を評価します。
                  </p>
                  <p className="mt-4 text-base/8 text-gray-700 sm:text-lg/8">
                    境界防御を評価する外部ネットワークペネトレーションテストから、内部脅威を評価する内部ペネトレーションテストまで、PCI DSS、ISO 27001、SOC 2を含むフレームワークに沿った明確な改善指導を提供します。
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">ネットワークペンテストの対象範囲</h3>
                  <ul className="mt-4 space-y-3">
                    {['ファイアウォール、ルーター、スイッチ', 'オープンポート・サービス列挙', 'Webアプリケーションセキュリティ', '無線ネットワーク評価', 'クラウドサービス・VPNエンドポイント', 'Active Directory環境'].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── External & Internal Testing (unique split-panel design) ── */}
          <section id="testing-types" className="pb-20">
            <RevealOnScroll>
              <div className="grid gap-6 lg:grid-cols-2">
                {testingTypes.map((t) => (
                  <div key={t.label} className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-10">
                    <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">{t.label}</span>
                    <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{t.title}</h3>
                    <p className="mt-4 text-sm/7 text-white/70">{t.body}</p>
                    <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {t.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0066CC]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Box Testing Approaches ── */}
          <section id="box-testing" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                ブラックボックス・グレーボックス・ホワイトボックステスト
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                目的に合わせた3つのペネトレーションテストアプローチを提供し、それぞれがセキュリティ体制の評価に独自の利点を持ちます。
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {boxTypes.map((b) => (
                  <div key={b.name} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#0066CC]/30">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]/10">
                      {b.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-950">{b.name}</h3>
                    <p className="mt-2 text-sm/7 text-gray-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Methodology (numbered steps with accent line) ── */}
          <section id="methodology" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                ネットワークペネトレーションテスト方法論
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                PTES、OWASP、NIST SP 800-115を含む業界標準フレームワークに準拠したネットワークペンテスト方法論。
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {methodologySteps.map((s) => (
                  <div key={s.num} className="relative rounded-2xl border border-gray-200 bg-white p-6 pl-16">
                    <span className="absolute left-6 top-6 font-mono text-2xl font-bold text-[#0066CC]/20">{s.num}</span>
                    <h3 className="text-base font-semibold text-gray-950">{s.title}</h3>
                    <p className="mt-2 text-sm/7 text-gray-600">{s.body}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Why AKRIN ── */}
          <section id="why-akrin" className="pb-20">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  ネットワークペネトレーションテストにAKRINを選ぶ理由
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-white/70">
                  AKRINは深いネットワークセキュリティ専門知識と、日本およびアジア太平洋地域で事業を展開する企業が直面するIT課題への理解を組み合わせます。
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {whyItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-[#0B1F3A]">
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm/6 text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="pb-20">
            <RevealOnScroll>
              <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                    よくある<br />ご質問
                  </h2>
                  <p className="mt-3 text-sm/7 text-gray-600">
                    ネットワークペネトレーションテストサービスに関するよくあるご質問。
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
                ネットワークペネトレーションテスト評価を予約
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                進化するサイバー脅威からAKRINのプロフェッショナルなネットワークペネトレーションテストサービスで組織を保護しましょう。セキュリティチームにご要件をご相談ください。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/ja/contact" className="inline-flex items-center rounded-sm bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052A3]">
                  お問い合わせ
                </a>
                <a href="https://cal.com/akrinsupport/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-sm border border-[#0A0B19]/20 px-6 py-2.5 text-sm font-semibold text-[#0A0B19] transition-colors hover:border-[#0066CC] hover:text-[#0066CC]">
                  相談を予約
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
