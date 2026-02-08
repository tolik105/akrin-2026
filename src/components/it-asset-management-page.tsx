'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/button'
import { Container } from '@/components/container'

type Locale = 'en' | 'ja'

type SectionCopy = {
  heroBody: string
  scheduleCta: string
  introEyebrow: string
  introTitle: string
  introParagraphs: string[]
  challengeTitle: string
  challenges: string[]
  stats: { label: string; value: string }[]
  benefitsTitle: string
  benefits: { title: string; description: string }[]
  servicesTitle: string
  services: { title: string; description: string; highlight: string }[]
  processTitle: string
  process: {
    phase: string
    timeline: string
    title: string
    description: string
    steps: string[]
    deliverable: string
  }[]
  whyTitle: string
  whyItems: { title: string; description: string }[]
  industriesTitle: string
  industries: { title: string; description: string }[]
  faqTitle: string
  faqs: { question: string; answer: string }[]
  finalCtaTitle: string
  finalCtaBody: string
}

const copy: Record<Locale, SectionCopy> = {
  en: {
    heroBody:
      "AKRIN's IT asset management solutions provide complete visibility, reduce costs, and ensure compliance with seamless integration to our ITAD services when assets reach end-of-life.",
    scheduleCta: 'Schedule Consultation',
    introEyebrow: 'Asset Visibility',
    introTitle: 'Manage every asset decision with clear operational control.',
    introParagraphs: [
      'IT Asset Management at AKRIN tracks your full estate from procurement to retirement, with governance built for multi-site operations across Japan.',
      'Our team aligns asset data, operational workflows, and lifecycle planning so finance, IT, and compliance teams share one source of truth.',
      'When assets reach end-of-life, transitions into secure ITAD workflows are handled with policy-driven controls and audit-ready documentation.',
    ],
    challengeTitle: 'Common operational challenges we solve',
    challenges: [
      'Fragmented inventories across offices, warehouses, and remote users',
      'Unknown utilization and warranty status that drive avoidable costs',
      'Limited lifecycle planning visibility for refresh and retirement decisions',
      'Audit pressure from incomplete records and inconsistent controls',
    ],
    stats: [
      { label: 'Potential cost reduction through lifecycle control', value: '20-35%' },
      { label: 'Asset visibility across managed environments', value: '100%' },
      { label: 'Standard onboarding timeline for initial inventory', value: '24hr' },
    ],
    benefitsTitle: 'Key Benefits',
    benefits: [
      {
        title: 'Complete Asset Visibility',
        description:
          'Unified tracking across endpoints, network hardware, peripherals, and data center equipment.',
      },
      {
        title: 'Cost Optimization',
        description:
          'Lifecycle-aware utilization planning reduces over-purchasing and idle inventory.',
      },
      {
        title: 'Compliance Readiness',
        description:
          'Governed records support audits, policy alignment, and controlled retirement workflows.',
      },
      {
        title: 'Lifecycle Governance',
        description:
          'Structured stages from procurement to retirement with role-based accountability.',
      },
      {
        title: 'ITAD Integration',
        description:
          'Seamless handoff to certified disposition processes when assets reach end-of-life.',
      },
      {
        title: 'Decision-Ready Insights',
        description:
          'Reporting designed for IT, finance, and leadership planning cycles.',
      },
    ],
    servicesTitle: 'Our Services',
    services: [
      {
        title: 'Discovery & Initial Inventory',
        description:
          'Comprehensive discovery of existing IT assets across sites and operating units.',
        highlight: 'Baseline inventory and ownership mapping',
      },
      {
        title: 'Platform Configuration & Integration',
        description:
          'Implementation tuned to location structures, categories, and operational workflows.',
        highlight: 'Policy-driven configuration with integration readiness',
      },
      {
        title: 'Lifecycle Tracking & Governance',
        description:
          'State management from deployed to retired with clear transitions and approvals.',
        highlight: 'Standardized lifecycle controls and audit trail',
      },
      {
        title: 'Compliance & Audit Readiness',
        description:
          'Evidence-friendly reporting and control checks aligned to policy requirements.',
        highlight: 'Traceable records for internal and external reviews',
      },
      {
        title: 'ITAD Workflow Coordination',
        description:
          'Secure retirement execution with chain-of-custody aligned to disposition standards.',
        highlight: 'Controlled end-of-life handoff and documentation',
      },
      {
        title: 'Continuous Optimization & Reporting',
        description:
          'Regular reviews to improve utilization, forecast refresh cycles, and control spend.',
        highlight: 'Actionable reporting for quarterly and annual planning',
      },
    ],
    processTitle: 'How It Works',
    process: [
      {
        phase: 'Phase 1',
        timeline: 'Week 1-2',
        title: 'Discovery & Initial Inventory',
        description:
          'We establish a validated baseline of your current environment and ownership structure.',
        steps: [
          'Automated discovery and endpoint reconciliation',
          'Manual verification for data center and offline assets',
          'Data normalization and taxonomy alignment',
        ],
        deliverable: 'Validated baseline inventory with ownership map',
      },
      {
        phase: 'Phase 2',
        timeline: 'Week 2-3',
        title: 'Platform Configuration & Integration',
        description:
          'The platform is configured to match operational and reporting requirements.',
        steps: [
          'Lifecycle workflow and approval model setup',
          'Role and permission controls for teams',
          'Integration with ticketing and procurement systems',
        ],
        deliverable: 'Configured platform with connected core workflows',
      },
      {
        phase: 'Phase 3',
        timeline: 'Continuous',
        title: 'Ongoing Management & Optimization',
        description:
          'AKRIN monitors lifecycle health and drives measurable improvement over time.',
        steps: [
          'Monthly governance and utilization reporting',
          'Quarterly optimization recommendations',
          'Annual refresh and retirement planning support',
        ],
        deliverable: 'Continuous optimization cadence with executive reporting',
      },
    ],
    whyTitle: 'Why AKRIN',
    whyItems: [
      {
        title: 'Bilingual Operational Delivery',
        description: 'English and Japanese execution across service, reporting, and governance.',
      },
      {
        title: 'Lifecycle + ITAD Alignment',
        description: 'Planning and disposition are connected in one accountable operating model.',
      },
      {
        title: 'Enterprise Governance Depth',
        description: 'Controls designed for distributed environments and regulated operations.',
      },
      {
        title: 'Data Quality Focus',
        description: 'Inventory confidence is maintained through structured validation practices.',
      },
      {
        title: 'Actionable Reporting',
        description: 'Metrics are tied to decisions around budget, risk, and refresh planning.',
      },
      {
        title: 'Execution in Japan',
        description: 'Local delivery capabilities for rapid support and site-level coordination.',
      },
    ],
    industriesTitle: 'Industries We Support',
    industries: [
      {
        title: 'Financial Services',
        description: 'Governed lifecycle controls for highly regulated asset estates.',
      },
      {
        title: 'Healthcare & Life Sciences',
        description: 'Asset traceability and refresh planning for critical clinical operations.',
      },
      {
        title: 'Manufacturing',
        description: 'Multi-site inventory governance across plants, warehouses, and offices.',
      },
      {
        title: 'Retail',
        description: 'Store and back-office asset standardization for stable customer operations.',
      },
      {
        title: 'Technology & Telecom',
        description: 'Rapid lifecycle control for high-change environments and distributed teams.',
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What does AKRIN track in IT Asset Management?',
        answer:
          'AKRIN tracks devices, network equipment, peripherals, and other managed IT assets across the full lifecycle from procurement to retirement.',
      },
      {
        question: 'Can AKRIN integrate with existing IT systems?',
        answer:
          'Yes. We support integration with core ticketing, procurement, and directory systems to keep operational data aligned.',
      },
      {
        question: 'How is this connected to ITAD services?',
        answer:
          'End-of-life states are linked to secure ITAD workflows so retirement, disposition, and compliance evidence are managed in sequence.',
      },
      {
        question: 'Can this support multi-location operations in Japan?',
        answer:
          'Yes. The operating model supports distributed offices, remote users, and centralized reporting requirements.',
      },
      {
        question: 'How quickly can implementation start?',
        answer:
          'Initial discovery and baseline inventory can start quickly, with phased rollout based on your operational priorities.',
      },
      {
        question: 'What reporting is provided?',
        answer:
          'We provide lifecycle, utilization, compliance, and optimization reporting tailored for IT leadership and business stakeholders.',
      },
      {
        question: 'Does AKRIN provide ongoing support after rollout?',
        answer:
          'Yes. Ongoing management includes governance reviews, optimization recommendations, and continuous operational support.',
      },
    ],
    finalCtaTitle: 'Ready to optimize your IT asset lifecycle?',
    finalCtaBody:
      'Speak with AKRIN to build a practical asset management program aligned to your operations in Japan.',
  },
  ja: {
    heroBody:
      'AKRINのIT資産管理ソリューションは、資産の調達から廃棄までを一元可視化し、コスト最適化とコンプライアンス強化を実現します。EOL時にはITAD運用へシームレスに連携します。',
    scheduleCta: '相談を予約',
    introEyebrow: '資産可視化',
    introTitle: '全資産の意思決定を、運用可能な形でコントロール。',
    introParagraphs: [
      'AKRINのIT Asset Managementは、調達から廃棄までの全ライフサイクルを対象に、拠点横断で資産を管理します。',
      '資産データ、運用フロー、ライフサイクル計画を統合し、IT・経理・監査の共通基盤を整備します。',
      'EOL資産はITAD運用へ安全に接続し、証跡管理と統制を維持したまま処理できます。',
    ],
    challengeTitle: '解決する主な課題',
    challenges: [
      '拠点・部門ごとに分断された資産台帳',
      '利用状況や保証期限の不透明さによるコスト増',
      '更新・廃棄判断に必要なライフサイクル可視性不足',
      '監査対応における記録不備と統制のばらつき',
    ],
    stats: [
      { label: 'ライフサイクル最適化による想定コスト削減', value: '20-35%' },
      { label: '運用対象環境での資産可視化', value: '100%' },
      { label: '初期インベントリ立ち上げの標準期間', value: '24hr' },
    ],
    benefitsTitle: '主なメリット',
    benefits: [
      {
        title: '資産の一元可視化',
        description: '端末、ネットワーク機器、周辺機器、データセンター資産を統合管理。',
      },
      {
        title: 'コスト最適化',
        description: '利用実態に基づく計画で過剰調達と遊休資産を抑制。',
      },
      {
        title: '監査・準拠対応',
        description: '統制された記録管理で監査対応を効率化。',
      },
      {
        title: 'ライフサイクル統制',
        description: '調達から廃棄までの状態遷移を標準化。',
      },
      {
        title: 'ITAD連携',
        description: 'EOL時の廃棄運用を安全なプロセスで接続。',
      },
      {
        title: '意思決定レポーティング',
        description: 'IT・経営双方の計画判断に使える指標を提供。',
      },
    ],
    servicesTitle: '提供サービス',
    services: [
      {
        title: 'Discovery & Initial Inventory',
        description: '現行環境を調査し、拠点横断の資産ベースラインを整備。',
        highlight: '初期台帳と責任範囲を可視化',
      },
      {
        title: 'Platform Configuration & Integration',
        description: '組織構造・運用要件に合わせてプラットフォームを実装。',
        highlight: '運用連携を前提にした設定設計',
      },
      {
        title: 'Lifecycle Tracking & Governance',
        description: '配備から廃棄までの状態管理と承認フローを標準化。',
        highlight: '監査対応可能なライフサイクル統制',
      },
      {
        title: 'Compliance & Audit Readiness',
        description: '監査に必要な記録、証跡、統制チェックを整備。',
        highlight: '内部・外部監査に備えた可視化',
      },
      {
        title: 'ITAD Workflow Coordination',
        description: 'EOL資産の廃棄処理をセキュアな運用で実行。',
        highlight: '証跡付きの安全な廃棄連携',
      },
      {
        title: 'Continuous Optimization & Reporting',
        description: '定期レビューで利用率、更新計画、コストを継続改善。',
        highlight: '四半期・年次計画に使える運用指標',
      },
    ],
    processTitle: '導入プロセス',
    process: [
      {
        phase: 'Phase 1',
        timeline: 'Week 1-2',
        title: 'Discovery & Initial Inventory',
        description: '現状把握と資産ベースラインの確立を行います。',
        steps: [
          '自動検出と端末情報の照合',
          'オフライン資産・設備資産の手動確認',
          '分類ルールの標準化',
        ],
        deliverable: 'ベースライン台帳と責任範囲マップ',
      },
      {
        phase: 'Phase 2',
        timeline: 'Week 2-3',
        title: 'Platform Configuration & Integration',
        description: '運用・権限・連携を実運用に合わせて実装します。',
        steps: [
          'ライフサイクルフローと承認設定',
          'ロール・権限設計',
          'チケット/調達システム連携',
        ],
        deliverable: '運用可能な設定済みプラットフォーム',
      },
      {
        phase: 'Phase 3',
        timeline: 'Continuous',
        title: 'Ongoing Management & Optimization',
        description: '継続運用と改善サイクルを定着させます。',
        steps: [
          '月次レポートとガバナンスレビュー',
          '四半期の最適化提案',
          '年次更新・廃棄計画支援',
        ],
        deliverable: '継続改善の運用体制と経営向けレポート',
      },
    ],
    whyTitle: 'AKRINが選ばれる理由',
    whyItems: [
      {
        title: '日英バイリンガル運用',
        description: '日本語・英語の両方で実務運用と報告に対応。',
      },
      {
        title: 'ライフサイクルとITADの一体運用',
        description: '更新・廃棄までを一つの責任モデルで管理。',
      },
      {
        title: 'エンタープライズ統制設計',
        description: '拠点分散・規制対応を前提にした運用統制。',
      },
      {
        title: 'データ品質重視',
        description: '継続的な検証で資産台帳の信頼性を維持。',
      },
      {
        title: '意思決定直結の指標設計',
        description: '予算、リスク、更新計画に直結するレポート。',
      },
      {
        title: '日本国内での実行力',
        description: '現場対応を含むローカル実行体制。',
      },
    ],
    industriesTitle: '対応業界',
    industries: [
      {
        title: '金融',
        description: '規制要件に対応した資産統制と監査対応。',
      },
      {
        title: '医療・ライフサイエンス',
        description: '重要機器のライフサイクル管理と可用性確保。',
      },
      {
        title: '製造',
        description: '工場・拠点横断の資産標準化と運用最適化。',
      },
      {
        title: '小売',
        description: '店舗運用を止めないための資産整備と更新管理。',
      },
      {
        title: 'テクノロジー・通信',
        description: '変化の速い環境での継続的な資産最適化。',
      },
    ],
    faqTitle: 'よくある質問',
    faqs: [
      {
        question: 'どのような資産を管理対象にできますか？',
        answer:
          '端末、ネットワーク機器、周辺機器、その他IT資産を調達から廃棄まで一貫して管理できます。',
      },
      {
        question: '既存システムとの連携は可能ですか？',
        answer:
          'はい。チケット管理、調達、ディレクトリなどの主要システムとの連携を前提に設計できます。',
      },
      {
        question: 'ITADとの連携はどのように行いますか？',
        answer:
          'EOL状態から廃棄処理までをワークフローで連携し、証跡管理を維持します。',
      },
      {
        question: '複数拠点運用にも対応できますか？',
        answer:
          'はい。全国拠点、リモート環境、集中管理の要件に対応可能です。',
      },
      {
        question: '導入開始までの期間はどの程度ですか？',
        answer:
          '初期ディスカバリーと台帳整備は短期間で開始でき、段階的な展開に対応します。',
      },
      {
        question: 'どのようなレポートが提供されますか？',
        answer:
          'ライフサイクル、利用率、コンプライアンス、最適化に関する定期レポートを提供します。',
      },
      {
        question: '導入後の運用支援もありますか？',
        answer:
          'はい。継続的な運用支援、最適化提案、定例レビューを提供します。',
      },
    ],
    finalCtaTitle: 'IT資産ライフサイクル最適化を始めませんか？',
    finalCtaBody:
      'AKRINが、現場運用に定着するIT Asset Management体制の設計と実装を支援します。',
  },
}

export function ItAssetManagementPage({ locale }: { locale: Locale }) {
  const content = copy[locale]
  const contactHref = locale === 'ja' ? '/ja/contact' : '/contact'

  return (
    <main className="overflow-hidden bg-white">
      <section className="bg-[#061433] text-white">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pt-40">
          <div className="max-w-2xl">
            <p className="text-lg/8 text-slate-200 sm:text-xl/8">{content.heroBody}</p>
            <div className="mt-10">
              <Button href={contactHref} className="!bg-white !text-gray-950 hover:!bg-gray-100">
                {content.scheduleCta}
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="rounded-3xl border border-white/15 bg-[#0b1b42] p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-300">Active</p>
                  <p className="mt-2 text-3xl font-semibold">847</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-300">Tracked</p>
                  <p className="mt-2 text-3xl font-semibold">1243</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-300">Savings</p>
                  <p className="mt-2 text-3xl font-semibold">32%</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="h-2 rounded-full bg-white/15">
                  <div className="h-2 w-11/12 rounded-full bg-teal-400" />
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <div className="h-2 w-4/5 rounded-full bg-cyan-400" />
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <div className="h-2 w-3/4 rounded-full bg-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <p className="text-sm/6 font-semibold tracking-wide text-gray-500 uppercase">
              {content.introEyebrow}
            </p>
            <h1 className="mt-2 max-w-4xl text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              {content.introTitle}
            </h1>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 text-base/8 text-gray-700">
                {content.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-xl font-semibold text-gray-950">{content.challengeTitle}</h2>
                <ul className="mt-4 space-y-3 text-sm/7 text-gray-700">
                  {content.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {content.stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <dt className="text-sm/6 text-gray-600">{item.label}</dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-950">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              {content.benefitsTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.benefits.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-gray-950">{item.title}</h3>
                  <p className="mt-3 text-sm/7 text-gray-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              {content.servicesTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.services.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="text-xs/6 font-semibold tracking-wide text-gray-500 uppercase">Service</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-950">{item.title}</h3>
                  <p className="mt-3 text-sm/7 text-gray-700">{item.description}</p>
                  <p className="mt-4 text-sm/7 font-medium text-gray-900">{item.highlight}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              {content.processTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {content.process.map((phase) => (
                <article key={phase.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-xs/6 font-semibold tracking-wide text-gray-500 uppercase">{phase.phase}</p>
                  <p className="mt-1 text-xs/6 font-semibold tracking-wide text-gray-500 uppercase">{phase.timeline}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">{phase.title}</h3>
                  <p className="mt-3 text-sm/7 text-gray-700">{phase.description}</p>
                  <ul className="mt-4 space-y-2 text-sm/7 text-gray-700">
                    {phase.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-gray-200 pt-4 text-sm/7 font-medium text-gray-900">
                    {phase.deliverable}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              {content.whyTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.whyItems.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-950">{item.title}</h3>
                  <p className="mt-3 text-sm/7 text-gray-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              {content.industriesTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              {content.industries.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-gray-950">{item.title}</h3>
                  <p className="mt-3 text-sm/7 text-gray-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {content.faqTitle}
            </h2>
            <dl className="mt-12 divide-y divide-gray-900/10">
              {content.faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="rounded-3xl bg-linear-to-r from-gray-950 to-[#0f2f6a] px-6 py-14 text-center sm:px-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {content.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base/8 text-slate-200">{content.finalCtaBody}</p>
            <div className="mt-8">
              <Button href={contactHref} className="!bg-white !text-gray-950 hover:!bg-gray-100">
                {content.scheduleCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
