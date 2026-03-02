'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import {
  ShieldCheckIcon,
  FingerPrintIcon,
  ArrowPathIcon,
  DocumentCheckIcon,
  TruckIcon,
  ServerStackIcon,
  CpuChipIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  DeviceTabletIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { Link } from '@/components/link'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SectionNav } from '@/components/SectionNav'

type SectionItem = {
  id: string
  label: string
  num: string
}

const itadSectionItems: SectionItem[] = [
  { id: 'overview', label: '提供価値', num: '01' },
  { id: 'services', label: 'サービス', num: '02' },
  { id: 'compliance', label: 'コンプライアンス', num: '03' },
  { id: 'coverage', label: '対応地域', num: '04' },
  { id: 'process', label: '標準フロー', num: '05' },
  { id: 'equipment', label: '対応機器', num: '06' },
  { id: 'assurance', label: '安心', num: '07' },
  { id: 'faq', label: 'FAQ', num: '08' },
]

const outcomes = [
  {
    icon: ShieldCheckIcon,
    title: 'チェーン・オブ・カストディ',
    desc: 'ラベル管理・封緘・受け渡し記録の整備',
  },
  {
    icon: FingerPrintIcon,
    title: '証明できるデータ破壊/消去',
    desc: 'NIST SP 800-88 Rev.1の考え方に沿った検証済みデータ消去および／または物理破壊。シリアル単位のログと証明書（CoD等）— PC、ノートPC、サーバーに対応。',
  },
  {
    icon: ArrowTrendingUpIcon,
    title: '価値回収',
    desc: '再利用可能な資産のグレーディング、修理評価、リファビッシュ、再販レポート',
  },
  {
    icon: ArrowPathIcon,
    title: '適正リサイクル',
    desc: '循環型経済の目標を支える環境配慮型処理',
  },
  {
    icon: DocumentCheckIcon,
    title: '監査対応パッケージ',
    desc: 'シリアル付きインベントリ、データ消去証明書、処分サマリー（監査・規制対応用）',
  },
]

const services = [
  {
    icon: TruckIcon,
    shortTitle: '物流',
    title: '退役作業・回収/物流',
    desc: '現地回収（単一拠点/複数拠点）、資産ラベル付与・シリアル取得、セキュア梱包（必要に応じて改ざん防止封緘）、入退館/搬出ルール対応（立会い、時間制限、写真証跡オプション等）',
    hasLogos: false,
  },
  {
    icon: ServerStackIcon,
    shortTitle: 'データ消去',
    title: 'データ消去/破壊',
    desc: 'NIST SP 800-88 Rev.1の考え方（Clear / Purge / Destroy）に沿ったソフトウェア消去/暗号化消去。高リスク媒体には物理破壊（破砕/圧壊等）。成果物：データ消去/破壊証明書（CoD）＋媒体シリアル・処理ログ。適切なデータ消去サービスがデータ漏洩リスクを低減します — 顧客情報が消去されていない場合、企業の防御手段は限られます。近年、規制業界全体で認定データ消去への需要が高まっています。',
    hasLogos: true,
  },
  {
    icon: CpuChipIcon,
    shortTitle: '再利用',
    title: '監査向けインベントリ・再利用/再販',
    desc: 'PC、サーバー、周辺機器の動作確認・グレーディング。リファビッシュ（外装修理含む）、価値回収レポート。モバイルデバイスからストレージアレイまで、電子廃棄物を責任を持って処理しながら収益を最大化する資産管理アプローチ。',
    hasLogos: false,
  },
  {
    icon: ArrowPathIcon,
    shortTitle: 'リサイクル',
    title: '適正リサイクル（E-waste）',
    desc: '材料分別・適正な下流処理。パートナーはR2v3等の厳格な基準に準拠し、責任ある処理を保証。適正な処分慣行の実証でブランドを将来にわたって守ります。',
    hasLogos: false,
  },
  {
    icon: ClipboardDocumentListIcon,
    shortTitle: 'レポート',
    title: 'レポート・証明書',
    desc: 'シリアル付きインベントリ（CSV/PDF）、受け渡し記録（チェーン・オブ・カストディ）、証明書（データ消去/破壊、リサイクル、処分等）、最終サマリーレポート（数量、結果、例外、推奨対応）',
    hasLogos: false,
  },
]

const complianceItems = [
  { title: '適正処理と証跡', desc: '案件要件に応じた処理フローと文書化' },
  { title: '産業廃棄物の追跡管理', desc: 'マニフェスト相当の考え方を含む追跡可能な運用' },
  { title: '下流パートナーの選定/確認', desc: '許認可・処理工程・最終処理の説明可能性' },
  { title: '情報保護', desc: '露出期間の最小化、シリアル単位のエビデンス' },
  { title: '例外管理', desc: 'ロック/故障/消去不可媒体は例外として記録し推奨処置を提示' },
]

const processSteps = [
  { step: '1', title: '要件整理', desc: '資産リスト、データ要件、現場制約、期限の確認' },
  { step: '2', title: '回収設計', desc: 'ラベル/梱包/搬出ルール、受け渡し記録の設計' },
  { step: '3', title: '処理', desc: '消去/破壊、再利用可否判定、再利用不可はリサイクルへ' },
  { step: '4', title: '報告', desc: '台帳突合、例外一覧、証明書、サマリー' },
  { step: '5', title: 'クローズ', desc: '最終監査パック提出、価値回収の結果報告（該当時）' },
]

const equipmentItems = [
  { icon: ComputerDesktopIcon, label: 'ノートPC、デスクトップ、ワークステーション' },
  { icon: ServerStackIcon, label: 'サーバー、ストレージアレイ、NAS、SAN' },
  { icon: CircleStackIcon, label: 'HDD、SSD、リムーバブル媒体' },
  { icon: SignalIcon, label: 'スイッチ、ルーター、ファイアウォール等のネットワーク機器' },
  { icon: DeviceTabletIcon, label: 'モニター、周辺機器、ドック、アクセサリ' },
]

const assuranceItems = [
  { title: 'NIST SP 800-88 Rev.1の考え方に沿った方式整理', desc: '方式選定＋検証' },
  { title: '監査前提のチェーン・オブ・カストディ', desc: '監査・セキュリティレビュー対応の設計' },
  { title: '例外の明確化', desc: '消去失敗/ロック/破損等と推奨対応' },
  { title: '認定ツール', desc: 'BlanccoおよびBitRaserによる検証済みデータ消去、R2v3認証パートナーによる下流処理' },
]

const faqItems = [
  {
    q: '回収はどれくらい早く手配できますか？',
    a: '東京圏では、現場アクセスと梱包要件が整えば数営業日で手配できるケースが多いです。大規模/セキュア施設の場合は、変更管理（Change Calendar）に合わせて計画します。',
  },
  {
    q: 'オンサイト（現地）でデータ破壊できますか？',
    a: 'はい。即時にリスク除去が必要な案件では、オンサイト破壊や立会い処理に対応します。オンサイト必須でない場合は、セキュア施設での処理の方がコスト効率が良い場合があります。',
  },
  {
    q: '価値回収（買取/再販）もできますか？',
    a: '消去・検証後に、再利用可能な資産はグレーディングし、再販/再利用の選択肢を提示します。再利用/再販とリサイクルの内訳、精算モデルに基づく結果をレポートします。',
  },
  {
    q: '複数国・複数拠点の案件に対応できますか？',
    a: 'はい。プロジェクトマネージャーを一本化し、テンプレートを統一した上で、Japan / APAC / US を集約レポートにまとめます。',
  },
  {
    q: 'セキュア施設（入退館が厳しい現場）でも作業できますか？',
    a: 'はい。エスコート、時間制限、梱包ルール、署名/確認手順など現場ルールに従い、監査で説明できる受け渡し設計にします。',
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

export default function ITADJaClient() {
  return (
    <main className="bg-[#F7F7FC]">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/itad/itad.avif"
            alt="AKRIN ITAD施設"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">ITAD サービス</span>
          </div>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            東京・日本のITAD（IT資産処分）: 安全・適正・監査対応（Japan / APAC / US）
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            セキュアなデータ消去から監査対応レポート、サステナブルな機器回収まで — IT資産処分をワンストップで完結。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/ja/contact?service=itad"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              ITADプロジェクトを開始
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
        <div className="absolute inset-0">
          <Image
            src="/images/banners/itad/itad.avif"
            alt="AKRIN ITAD施設"
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
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">ITAD サービス</span>
              </div>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                東京・日本のITAD（IT資産処分）: 安全・適正・監査対応（Japan / APAC / US）
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                セキュアなデータ消去から監査対応レポート、サステナブルな機器回収まで — IT資産処分をワンストップで完結。日本子会社のリスク管理、情報セキュリティマネジメントシステムを含む厳格な基準へのコンプライアンス維持、退役機器の価値回収をサポートします。技術リフレッシュサイクルの短期化に伴い、情報漏洩を防ぐための信頼性の高いデータ消去サービスへの需要が増加しています。
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/ja/contact?service=itad"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  ITADプロジェクトを開始
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
        items={itadSectionItems}
      />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── 01 提供価値 — Light section with icon feature list ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="提供価値" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">提供価値（アウトカム）</h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  すべてのITAD Japanプロジェクトで、セキュア回収から認定データ消去、最終資産処分レポートまで完全なチェーン・オブ・カストディを提供します。
                </p>

                <div className="mt-14 lg:grid lg:grid-cols-5 lg:gap-12">
                  <div className="lg:col-span-3">
                    <dl className="space-y-8">
                      {outcomes.map((item) => (
                        <div key={item.title} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0066CC]/10 ring-1 ring-[#0066CC]/25">
                            <item.icon className="h-5 w-5 text-[#0066CC]" />
                          </div>
                          <div>
                            <dt className="text-base font-semibold text-[#0A0B19]">{item.title}</dt>
                            <dd className="mt-1 text-sm leading-relaxed text-[#0A0B19]/60">{item.desc}</dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-10 lg:col-span-2 lg:mt-0">
                    <div className="relative min-h-[380px] overflow-hidden rounded-2xl">
                      <Image
                        src="/images/banners/itad/Hard-Drive-Punch.avif"
                        alt="物理破壊後のハードドライブ"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 02 サービス — Tabbed interface ── */}
          <section id="services" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="ITADサービス" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  ITADサービス内容
                </h2>

                <TabGroup className="mt-12">
                  <TabList className="flex gap-1 overflow-x-auto rounded-xl bg-[#E2E5EF]/60 p-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
                    {services.map((svc) => (
                      <Tab
                        key={svc.shortTitle}
                        className={({ selected }) =>
                          clsx(
                            'flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-lg px-3 py-3 text-sm font-medium whitespace-nowrap transition-all focus:outline-none',
                            selected
                              ? 'bg-white text-[#0A0B19] shadow-sm'
                              : 'text-[#6B6D7C] hover:text-[#0A0B19]'
                          )
                        }
                      >
                        <svc.icon className="h-5 w-5 shrink-0" />
                        <span className="hidden sm:inline">{svc.shortTitle}</span>
                      </Tab>
                    ))}
                  </TabList>

                  <TabPanels className="mt-8">
                    {services.map((svc) => (
                      <TabPanel key={svc.shortTitle}>
                        <div className="items-start lg:grid lg:grid-cols-2 lg:gap-12">
                          <div>
                            <h3 className="text-xl font-semibold text-[#0A0B19]">{svc.title}</h3>
                            <p className="mt-4 text-base leading-relaxed text-[#0A0B19]/70">{svc.desc}</p>
                          </div>
                          {svc.hasLogos && (
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:mt-0 lg:justify-start sm:gap-8">
                              <Image
                                src="/images/banners/itad/nist-logo.webp"
                                alt="NIST 800-88 準拠"
                                width={80}
                                height={80}
                                className="h-14 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                              />
                              <Image
                                src="/images/banners/itad/r2-logo.webp"
                                alt="R2v3 認証"
                                width={80}
                                height={80}
                                className="h-14 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                              />
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="/images/banners/itad/blancco-logo.svg"
                                alt="Blancco 認証"
                                className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                              />
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="/images/banners/itad/bitraser-logo.svg"
                                alt="BitRaser 認証"
                                className="h-8 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                              />
                            </div>
                          )}
                        </div>
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent" />

          {/* ── なぜITADか — Compact stats callout ── */}
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
              <div className="text-center">
                <SectionLabel label="なぜITADか" />
                <h2 className="mx-auto font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  なぜ今ITADが重要か
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base/7 text-[#0A0B19]/70">
                  規制市場の企業にとって、IT資産処分の重要性は高まっています。情報技術資産には専門的な処分が必要な機密データが含まれています。
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
                {[
                  { keyword: 'APPI', title: 'コンプライアンスリスクの低減', desc: 'データ破壊の証跡と監査対応可能なChain-of-Custodyが、規制上のリスクを最小化します。日本の事業者はAPPIの要求に従い、情報漏洩を防止しなければなりません。' },
                  { keyword: 'ROI', title: '隠れた価値の回収', desc: '再利用可能な資産を査定・リファビッシュ・リマーケティングし、IT退役から収益を生み出します。' },
                  { keyword: 'ESG', title: 'ESG目標の達成', desc: '適正なE-waste処理と下流パートナーの文書化が、サステナビリティ報告を支えます。' },
                  { keyword: '1 PM', title: 'IT退役の簡素化', desc: '回収・データ消去サービス・リサイクル・報告をワンストップで管理 — チームは本来の業務に集中できます。' },
                ].map((item) => (
                  <div key={item.keyword} className="text-center">
                    <span className="text-3xl font-bold tracking-tight text-[#0066CC] sm:text-4xl">{item.keyword}</span>
                    <h3 className="mt-3 text-sm font-semibold text-[#0A0B19]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#0A0B19]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 03 コンプライアンス — Timeline with blue accent line ── */}
          <section id="compliance" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <SectionLabel label="コンプライアンス" />
                    <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      日本向けコンプライアンス観点
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      日本でのITADプロジェクトは、廃棄物管理、データ保護、環境コンプライアンスにまたがる規制要件に対応する必要があります。
                    </p>
                  </div>

                  <div className="mt-10 lg:col-span-8 lg:mt-0">
                    <div className="relative space-y-8 border-l-2 border-[#0066CC]/20 pl-8">
                      {complianceItems.map((item) => (
                        <div key={item.title} className="relative">
                          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[#0066CC] ring-4 ring-[#0066CC]/10" />
                          <h3 className="text-base font-semibold text-[#0A0B19]">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#0A0B19]/65">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent" />

          {/* ── 04 対応地域 — Cards with colored top borders + badges ── */}
          <section id="coverage" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="text-center">
                  <SectionLabel label="対応地域" />
                  <h2 className="mx-auto font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                    対応地域：日本 / APAC / 米国
                  </h2>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                  <article className="relative overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-white p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0066CC]" />
                    <span className="inline-flex items-center rounded-full bg-[#0066CC]/10 px-3 py-1 text-xs font-semibold text-[#0066CC]">
                      プライマリー
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A0B19]">日本（東京・全国）</h3>
                    <ul className="mt-4 space-y-2 text-sm/7 text-[#0A0B19]/80">
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />東京圏から全国のITAD Japanプロジェクトを管理</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />オフィス移転、倉庫整理、データセンター更改に対応</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />日英バイリンガル対応</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />データ消去が必要な日本子会社向けサービス</li>
                    </ul>
                  </article>

                  <article className="relative overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-white p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0A0B19]/20" />
                    <span className="inline-flex items-center rounded-full bg-[#0A0B19]/5 px-3 py-1 text-xs font-semibold text-[#0A0B19]/60">
                      リージョナル
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A0B19]">APAC</h3>
                    <ul className="mt-4 space-y-2 text-sm/7 text-[#0A0B19]/80">
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />シンガポール等の主要市場で認定パートナーと連携</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />テンプレート統一、HQ調達向け集約レポート</li>
                    </ul>
                  </article>

                  <article className="relative overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-white p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0A0B19]/20" />
                    <span className="inline-flex items-center rounded-full bg-[#0A0B19]/5 px-3 py-1 text-xs font-semibold text-[#0A0B19]/60">
                      コーディネーション
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A0B19]">米国</h3>
                    <ul className="mt-4 space-y-2 text-sm/7 text-[#0A0B19]/80">
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />米国内の退役/回収プログラム支援</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />監査で求められやすい文書を整理</li>
                    </ul>
                  </article>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 05 標準フロー — Horizontal step flow with connected dots ── */}
          <section id="process" className="bg-gradient-to-b from-[#F7F7FC] to-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="text-center">
                  <SectionLabel label="標準フロー" />
                  <h2 className="mx-auto font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">進め方（標準フロー）</h2>
                </div>

                <ol className="relative mt-16">
                  {/* Connecting dashed line (desktop) */}
                  <div className="absolute left-0 right-0 top-6 hidden h-px border-t-2 border-dashed border-[#E2E5EF] lg:block" aria-hidden="true" />

                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    {processSteps.map((item) => (
                      <li key={item.step} className="relative text-center">
                        <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0066CC] text-sm font-bold text-white shadow-lg shadow-[#0066CC]/20">
                          {item.step}
                        </div>
                        <h3 className="mt-5 text-base font-semibold text-[#0A0B19]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#0A0B19]/60">{item.desc}</p>
                      </li>
                    ))}
                  </div>
                </ol>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 06 対応機器 — Icon card grid with hover ── */}
          <section id="equipment" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="対応機器" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">対応機器例</h2>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {equipmentItems.map((item) => (
                    <div
                      key={item.label}
                      className="group flex flex-col items-center rounded-xl border border-[#E2E5EF] bg-[#FAFAFC] p-6 text-center transition-colors hover:border-[#0066CC]/30 hover:bg-white"
                    >
                      <item.icon className="h-8 w-8 text-[#6B6D7C] transition-colors group-hover:text-[#0066CC]" />
                      <span className="mt-3 text-sm font-medium text-[#0A0B19]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent" />

          {/* ── 07 安心 — Split card with divider + logo grid ── */}
          <section id="assurance" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="安心" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">安心のための考え方（Assurance）</h2>

                <div className="mt-10 overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-white">
                  <div className="lg:grid lg:grid-cols-2 lg:divide-x lg:divide-[#E2E5EF]">
                    <div className="p-6 sm:p-8">
                      <ul className="space-y-5">
                        {assuranceItems.map((item) => (
                          <li key={item.title} className="flex gap-3">
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#0066CC]" />
                            <div>
                              <span className="text-sm font-semibold text-[#0A0B19]">{item.title}</span>
                              <span className="text-sm text-[#0A0B19]/65"> — {item.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 border-t border-[#E2E5EF] pt-4 text-sm text-[#0A0B19]/65">
                        調達要件で特定の認証やISO規格が必須の場合は、案件ごとに可否を確認します。
                      </p>
                    </div>

                    <div className="flex items-center justify-center bg-[#FAFAFC] p-8 lg:p-12">
                      <div className="grid grid-cols-2 gap-8">
                        <Image
                          src="/images/banners/itad/nist-logo.webp"
                          alt="NIST 800-88 準拠"
                          width={100}
                          height={100}
                          className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                        <Image
                          src="/images/banners/itad/r2-logo.webp"
                          alt="R2v3 認証"
                          width={100}
                          height={100}
                          className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/banners/itad/blancco-logo.svg"
                          alt="Blancco 認証"
                          className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/banners/itad/bitraser-logo.svg"
                          alt="BitRaser 認証"
                          className="h-9 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent" />

          {/* ── 08 FAQ — Always-visible card grid ── */}
          <section id="faq" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="FAQ" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">よくある質問（FAQ）</h2>
                <p className="mt-4 max-w-2xl text-base/7 text-[#0A0B19]/70">
                  ITADサービスに関するよくある質問です。{' '}
                  <Link href="/ja/contact" className="text-[#0066CC] underline decoration-[#0066CC]/30 underline-offset-4 hover:decoration-[#0066CC]">
                    お問い合わせ
                  </Link>{' '}
                  もお気軽にどうぞ。
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {faqItems.map((faq, i) => (
                    <article key={faq.q} className="rounded-2xl border border-[#E2E5EF] bg-white p-6">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-[#0066CC]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-2 text-base font-semibold text-[#0A0B19]">{faq.q}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#0A0B19]/65">{faq.a}</p>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

        </div>
      </div>

      {/* Related Blog */}
      <section className="bg-[#F7F7FC] pb-4 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#0A0B19]/10 bg-white px-6 py-10 sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0A0B19]/50">関連ガイド</p>
            <h3 className="mt-2 font-serif text-2xl font-light tracking-[-0.04em] text-[#0A0B19]">
              データ消去基準：完全ガイド
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#0A0B19]/70">
              NIST 800-88、DoD 5220.22-M、暗号化消去を理解し、組織のコンプライアンスを維持するデータ破壊ポリシーの構築方法を解説します。
            </p>
            <Link
              href="/ja/blog/data-erasure-standards"
              className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-[#0A0B19] underline decoration-[#0A0B19]/30 underline-offset-4 transition-colors hover:decoration-[#0A0B19]"
            >
              ガイドを読む →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — Dark gradient with side-by-side layout ── */}
      <section id="cta" className="bg-[#F7F7FC] pb-12 pt-4 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19]">
            <Image
              src="/images/banners/itad/itad.avif"
              alt=""
              fill
              className="object-cover opacity-10"
              aria-hidden="true"
            />
            <div className="relative px-8 py-12 sm:px-12 lg:flex lg:items-center lg:gap-12 lg:px-16">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-light tracking-[-0.04em] text-white md:text-3xl">
                  まずは資産リストをお送りください
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                  資産リストを共有いただければ、推奨するデータ消去/破壊方式、回収/物流の進め方、成果物（証明書・レポート）の構成、目安のスケジュールと費用内訳をご提案します。
                </p>
              </div>
              <div className="mt-8 flex shrink-0 flex-wrap gap-4 lg:mt-0">
                <Link
                  href="/ja/contact?service=itad"
                  className="inline-flex items-center justify-center rounded-md bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052A3]"
                >
                  相談を予約
                </Link>
                <Link
                  href="/ja/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
