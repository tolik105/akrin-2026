'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
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
  { id: 'services', label: 'サービス', num: '02' },
  { id: 'why', label: '選ばれる理由', num: '03' },
  { id: 'security', label: 'セキュリティ', num: '04' },
  { id: 'coverage', label: '対応エリア', num: '05' },
  { id: 'process', label: 'プロセス', num: '06' },
  { id: 'faq', label: 'FAQ', num: '07' },
]

const faqItems = [
  {
    q: 'サービスには何が含まれますか？',
    a: '監視、ヘルプデスク、インフラ管理、セキュリティ、事業継続、IT戦略支援までを包括的に提供します。',
  },
  {
    q: '対応速度はどのくらいですか？',
    a: '重大障害は30分対応、標準リクエストは4時間解決を基本に運用します。',
  },
  {
    q: '日本語・英語両方で対応できますか？',
    a: 'はい。チケット、レポート、ステークホルダー連携まで日英ネイティブ対応します。',
  },
  {
    q: '既存システムと連携できますか？',
    a: 'はい。既存のオンプレミス、クラウド、ハイブリッド環境を活かして統合運用します。',
  },
  {
    q: 'コスト削減効果は？',
    a: '導入企業ではIT運用コスト13〜32%削減の実績があります。',
  },
  {
    q: 'キッティングサービスはありますか？',
    a: 'はい。機器展開、設定、キッティングまで一貫対応します。',
  },
]

const overviewItems = [
  {
    title: '24時間365日監視と迅速対応',
    desc: '継続的な監視でシステム安定性を確保。予防保全により、リアクティブ対応の3.3倍のダウンタイム削減を実現します。',
  },
  {
    title: 'バイリンガルITサポート',
    desc: 'グローバル本社と日本拠点の円滑なコミュニケーション。日英ネイティブ対応で国際チーム間のプロジェクト管理を促進します。',
  },
  {
    title: 'ITインフラ包括管理',
    desc: '監視、保守、トラブルシューティング、最適化まで。専門エンジニアのアクセスでパフォーマンス向上とダウンタイム削減を実現。',
  },
  {
    title: 'サイバーセキュリティとコンプライアンス',
    desc: 'ISO 27001準拠の脅威予防と規制対応。日本の厳格なデータ環境に合わせたセキュリティを提供します。',
  },
  {
    title: 'IT戦略策定',
    desc: '事業目標に整合した長期テクノロジーロードマップ。四半期レビューとパフォーマンス監視で継続的に改善。',
  },
]

const serviceItems = [
  {
    title: 'ネットワーク監視・運用',
    desc: 'CPU、メモリ、ディスク、ネットワークのリアルタイム監視。重要度に応じた自動アラートでエスカレーション。アラートの70%以上をユーザーが気づく前に解決します。',
  },
  {
    title: 'ヘルプデスク・エンドユーザーサポート',
    desc: '電話、メール、チャット、セルフサービスポータルから即時対応。東京拠点エンジニアが関東圏で当日オンサイト対応します。',
  },
  {
    title: 'サーバー・クラウド管理',
    desc: 'Windows、Linux、VMware、AWS、Azure、GCPの包括管理。プロビジョニング、パッチ適用、コスト最適化を含みます。',
  },
  {
    title: 'マネージドセキュリティ',
    desc: 'EDR、次世代ファイアウォール設定、脆弱性診断、APPI・GDPR・ISO 27001準拠対応。',
  },
  {
    title: '事業継続・災害復旧',
    desc: 'テスト済み復旧手順を備えた自動バックアップ。重要システムごとのRTO/RPO定義と年次DR訓練。',
  },
  {
    title: 'キッティング・調達・プロジェクト管理',
    desc: '機器展開、ベンダー調整、テクノロジープロジェクトのエンドツーエンド対応。',
  },
]

const whyItems = [
  { title: 'IT人材不足', stat: '85%', desc: '東京の85%の企業がIT採用に苦戦。MSP委託で初日からフルチーム運用を開始できます。' },
  { title: 'コスト最適化', stat: '13–32%', desc: 'CapExを固定月額OpExへ。導入企業ではIT運用コスト13〜32%削減の実績。' },
  { title: '規制対応', stat: 'ISO 27001', desc: 'APPI、GDPR、ISMAP、ISO 27001の監査対応ドキュメントを含む包括サポート。' },
  { title: 'スケーラブル', stat: 'Flex', desc: '人員増減や拠点追加に応じてサービスを柔軟にスケール。固定費の急増を防ぎます。' },
]

const securityItems = [
  'EDRと24時間365日監視による予防的脅威対策',
  'APPI、GDPR、ISO 27001準拠の規制対応',
  '定期的な脆弱性診断とペネトレーションテスト',
  '文書化されたインシデント対応手順',
  '暗号化バックアップと安全なデータ消去',
]

const coverageRegions = [
  { region: '日本（東京拠点）', items: ['関東圏当日オンサイト、全国リモート対応', '現地ベンダー調整と規制ナビゲーション', 'ビジネス文化とベンダー管理の支援'] },
  { region: 'APAC・米国', items: ['アジア太平洋・米国の本社チームとの連携', '多拠点ITプログラムの標準化レポーティング', '新規市場のオフィス構築・調達支援'] },
  { region: '欧州', items: ['日本拠点を持つ欧州企業向けGDPR準拠サービス', '越境データ移転のコンプライアンス文書化', 'EU本社とのタイムゾーン対応サポート'] },
]

const processSteps = [
  { num: '01', title: 'テクノロジーアセスメント', desc: '現行インフラ評価、業務要件の整理、技術ギャップ特定、費用対効果分析。' },
  { num: '02', title: 'ロードマップ策定', desc: '予算見通し、ベンダー選定、12〜36か月の優先順位付き実施スケジュール。' },
  { num: '03', title: '監視・運用開始', desc: '24/7監視、ヘルプデスク開設、セキュリティベースライン導入。' },
  { num: '04', title: '継続的ガバナンス', desc: '四半期レビューでKPI追跡と戦略的調整を実施。' },
  { num: '05', title: 'スケール・最適化', desc: '事業成長に合わせた継続的改善とキャパシティプランニング。' },
]

/* ── Inline label: small blue icon + section name (WWT pattern) ── */
function SectionLabel({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <svg className={`h-4 w-4 ${dark ? 'text-[#4B9CFF]' : 'text-[#0066CC]'}`} viewBox="0 0 16 16" fill="currentColor">
        <rect x="2" y="2" width="5" height="5" rx="1" />
        <rect x="9" y="2" width="5" height="5" rx="1" />
        <rect x="2" y="9" width="5" height="5" rx="1" />
        <rect x="9" y="9" width="5" height="5" rx="1" />
      </svg>
      <span className={`text-[15px] ${dark ? 'text-white/60' : 'text-[#4E4F5F]'}`}>
        {label}
      </span>
    </div>
  )
}

export default function JapaneseITManagedServicesClient() {
  return (
    <main className="bg-white">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/it-managed-services/banner.avif"
            alt="AKRIN マネージドITサービス 東京"
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
          <nav className="mb-4 flex items-center gap-2 text-[13px] sm:text-[14px]">
            <Link href="/ja/services" className="text-white/50 transition-colors hover:text-white/80">サービス</Link>
            <span className="text-white/30">&rsaquo;</span>
            <span className="font-medium text-white">マネージドITサービス</span>
          </nav>
          <h1 className="font-serif text-[22px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[26px]">
            東京のマネージドサービス：ビジネスを支えるIT運用
          </h1>
          <p className="mt-3 max-w-md text-[12px] leading-[1.65] text-white/65 sm:text-[13px]">
            インフラ、セキュリティ、日常のIT運用をAKRINが担当。お客様のチームは本業に集中できます。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              お問い合わせ
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
            >
              全サービスを見る
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Desktop hero (full-bleed) ── */}
      <section id="hero-desktop" className="relative hidden h-[500px] overflow-hidden bg-[#02304F] lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/it-managed-services/banner.avif"
            alt="AKRIN マネージドITサービス 東京"
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
              <nav className="mb-4 flex items-center gap-2 text-[15px]">
                <Link href="/ja/services" className="text-white/50 transition-colors hover:text-white/80">サービス</Link>
                <span className="text-white/30">&rsaquo;</span>
                <span className="font-medium text-white">マネージドITサービス</span>
              </nav>
              <h1 className="font-serif text-[30px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[34px]">
                東京のマネージドサービス：ビジネスを支えるIT運用
              </h1>
              <p className="mt-4 max-w-lg text-[14px] leading-[1.7] text-white/70">
                インフラ、セキュリティ、日常のIT運用をAKRINが担当。お客様のチームは本業に集中できます。
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  お問い合わせ
                </Link>
                <Link
                  href="/services"
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
        items={managedServicesSectionItems}
      />

      {/* ── 01 概要 — WWT editorial: label + heading + text left, image right ── */}
      <section id="overview" className="bg-white">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1200px] px-6 pt-20 lg:px-9 lg:pt-24">
            <SectionLabel label="マネージドITサービスの概要" />

            <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
              <div className="lg:col-span-5">
                <h2 className="text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                  マネージドITサービスとは
                </h2>
                <p className="mt-5 text-[16px] leading-[1.6] text-[#4E4F5F]">
                  IT基盤の維持管理を専門パートナーに委託する仕組みです。ネットワーク、セキュリティ、クラウド、ヘルプデスクを一つのMSPが包括的にカバーします。
                </p>
                <p className="mt-4 text-[16px] leading-[1.6] text-[#4E4F5F]">
                  日本で事業を展開する国際企業向けに、24時間365日のインフラ管理とネイティブバイリンガルサポートを提供します。
                </p>
              </div>
              <div className="mt-8 lg:col-span-7 lg:mt-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/monitoring.avif"
                    alt="24時間365日ネットワーク監視"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stat-style outcome cards with left gray border (WWT pattern) */}
            <div className="mt-16 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
              {overviewItems.map((item) => (
                <div key={item.title} className="border-l border-[#E4E4EB] pl-4">
                  <h3 className="text-[20px] font-normal leading-snug text-[#0066CC]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#4E4F5F]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── 02 サービス — WWT capabilities style ── */}
      <section id="services" className="bg-white">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1200px] px-6 pt-24 lg:px-9 lg:pt-28">
            <SectionLabel label="マネージドITサービスの内容" />

            <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
              <div className="lg:col-span-7">
                <h2 className="max-w-xl text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                  提供サービス
                </h2>
                <p className="mt-5 max-w-lg text-[16px] leading-[1.6] text-[#4E4F5F]">
                  インフラ監視からエンドユーザーサポート、戦略策定まで、テクノロジースタック全体をカバーするマネージドITサービスを提供します。
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-[14px] font-normal text-[#006DC7] transition-colors hover:text-[#0052A3]"
                >
                  サービス提案を依頼する
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8 lg:col-span-5 lg:mt-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/Infrastructure-Management.avif"
                    alt="ITインフラストラクチャ管理"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service cards — WWT flat style */}
            <div className="mt-16 grid gap-x-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
              {serviceItems.map((item) => (
                <div key={item.title} className="py-6">
                  <h3 className="text-[24px] font-light leading-snug text-[#0A0B10]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-[#4E4F5F]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── 03 選ばれる理由 — Light blue section ── */}
      <section id="why" className="mt-20 bg-[#EEF2FF] lg:mt-24">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-9 lg:py-24">
          <SectionLabel label="選ばれる理由" />

          <h2 className="mt-2 max-w-2xl text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
            東京の企業がMSPを選ぶ理由
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-[#4E4F5F]">
            AKRINは事前対応型アプローチを採用。問題がユーザーに影響を与える前に解決します。日本市場に根ざしたバイリンガルMSPとして包括サポートを提供。
          </p>

          {/* Stat cards — left border accent */}
          <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div key={item.title} className="border-l border-[#E4E4EB] pl-4">
                <p className="text-[28px] font-light leading-tight text-[#162FB4]">{item.stat}</p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#4E4F5F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 セキュリティ — WWT editorial: heading + image left, checklist right ── */}
      <section id="security" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-9 lg:py-24">
          <SectionLabel label="セキュリティとコンプライアンス" />

          <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                セキュリティとコンプライアンス
              </h2>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/banners/it-managed-services/Help-Desk-Support.avif"
                  alt="ITセキュリティとコンプライアンス管理"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0 lg:flex lg:items-center">
              <div className="space-y-5">
                {securityItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#0066CC]" />
                    <p className="text-[16px] leading-[1.6] text-[#4E4F5F]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 対応エリア — WWT industries style ── */}
      <section id="coverage" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 pb-8 lg:px-9">
          <SectionLabel label="対応エリア" />

          <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                グローバル対応のバイリンガルITサポート
              </h2>
              <p className="mt-5 text-[16px] leading-[1.6] text-[#4E4F5F]">
                AKRINは単一窓口として、全てのテクノロジーベンダーとのコミュニケーションとトラブルシューティングを簡素化します。
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1 text-[14px] font-normal text-[#006DC7] transition-colors hover:text-[#0052A3]"
              >
                対応エリアの詳細
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            <div className="mt-8 lg:col-span-7 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/trusted-partner.avif"
                    alt="信頼できるITパートナー"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/board-room.avif"
                    alt="IT戦略会議"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Region cards — WWT industry card style */}
          <div className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-16">
            {coverageRegions.map((region) => (
              <div key={region.region}>
                <h3 className="text-[24px] font-light text-[#0066CC]">{region.region}</h3>
                <ul className="mt-3 space-y-2">
                  {region.items.map((item) => (
                    <li key={item} className="text-[14px] leading-[1.6] text-[#4E4F5F]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 プロセス — Clean numbered list, minimal ── */}
      <section id="process" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-9 lg:py-24">
          <SectionLabel label="導入プロセス" />

          <h2 className="mt-2 max-w-xl text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
            導入プロセス
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-[#4E4F5F]">
            初期アセスメントから継続的な最適化まで、リスクを軽減し成果を加速する体系的なアプローチ。
          </p>

          {/* Steps — left border stat style (WWT pattern) */}
          <div className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.num} className="border-l border-[#E4E4EB] pl-4">
                <p className="text-[28px] font-light text-[#162FB4]">{step.num}</p>
                <h3 className="mt-2 text-[16px] font-medium text-[#0A0B10]">{step.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#4E4F5F]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 FAQ — WWT clean: heading left, accordion right ── */}
      <section id="faq" className="bg-white">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-9 lg:py-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
              <div className="lg:col-span-4">
                <SectionLabel label="FAQ" />
                <h2 className="mt-2 text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                  よくある質問
                </h2>
                <p className="mt-4 text-[16px] leading-[1.6] text-[#4E4F5F]">
                  ご不明な点がございましたら、{' '}
                  <Link href="/ja/contact" className="text-[#006DC7] hover:underline">
                    お問い合わせ
                  </Link>
                  ください。
                </p>
              </div>

              <div className="mt-10 lg:col-span-8 lg:mt-0">
                <div className="divide-y divide-[#E4E4EB]">
                  {faqItems.map((faq) => (
                    <Disclosure key={faq.q} as="div">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="text-[16px] font-medium text-[#0A0B10] transition-colors group-hover:text-[#0066CC]">
                          {faq.q}
                        </span>
                        <ChevronDownIcon className="ml-6 h-5 w-5 shrink-0 text-[#4E4F5F]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 text-[15px] leading-[1.6] text-[#4E4F5F]">
                        {faq.a}
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-white pb-16 pt-4">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-9">
          <div className="border-t border-[#E4E4EB] py-12 text-center">
            <h2 className="text-[28px] font-light tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
              IT運用の変革を始めませんか？
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-[#4E4F5F]">
              お客様のインフラ、コンプライアンス要件、ビジネス目標に合わせたマネージドサービスプランをご提案します。まずは無料アセスメントから。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ja/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#0066CC] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0052A3]"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
