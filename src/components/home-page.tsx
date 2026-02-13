import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { CountUp } from '@/components/CountUp'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SectionNav } from '@/components/SectionNav'

type Locale = 'en' | 'ja'

type HomeCopy = {
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  servicesTitle: string
  services: { title: string; description: string; href: string }[]
  caseStudiesTitle: string
  caseStudies: { title: string; summary: string; href: string }[]
  industryTitle: string
  industryDescription: string
  industries: { label: string; value: number; suffix: string }[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
}

const logoCloud = [
  { name: 'Transistor', src: '/logo-cloud/transistor.svg' },
  { name: 'Laravel', src: '/logo-cloud/laravel.svg' },
  { name: 'Tuple', src: '/logo-cloud/tuple.svg' },
  { name: 'SavvyCal', src: '/logo-cloud/savvycal.svg' },
  { name: 'Statamic', src: '/logo-cloud/statamic.svg' },
]

const content: Record<Locale, HomeCopy> = {
  en: {
    heroTitle: 'Managed IT Services in Tokyo — Built for Business',
    heroSubtitle:
      'Strategic consulting, end-to-end project management, and always-on managed services secured 24/7.',
    heroCta: 'Get started',
    servicesTitle: 'Core Services',
    services: [
      {
        title: 'ITAD Services',
        description:
          'Secure end-of-life asset disposition with verified data destruction and compliance documentation.',
        href: '/services/itad-japan-apac-us',
      },
      {
        title: 'IT Asset Management',
        description:
          'Track and optimize IT assets from procurement to retirement with complete lifecycle visibility.',
        href: '/services/it-asset-management',
      },
      {
        title: 'Managed IT Services',
        description:
          '24/7 operational support and proactive IT management to keep your teams productive and systems stable.',
        href: '/services/it-managed-services',
      },
      {
        title: 'IT Project Management',
        description:
          'Strategic advisory and delivery management for complex IT transformation initiatives.',
        href: '/services/it-consulting-project-management',
      },
    ],
    caseStudiesTitle: 'Case Studies',
    caseStudies: [
      {
        title: 'Managed IT Services for CPG in Tokyo',
        summary:
          'Unified service desk operations and endpoint standardization to improve SLA outcomes.',
        href: '/case-studies/managed-it-services-cpg-tokyo',
      },
      {
        title: 'Cloud Migration for Manufacturing',
        summary:
          'Phased migration strategy with controlled risk and continuity.',
        href: '/case-studies/cloud-migration-manufacturing',
      },
      {
        title: 'Wi-Fi Assessment for Tokyo Retail',
        summary:
          'Coverage and capacity redesign to stabilize high-density sites.',
        href: '/case-studies/wifi-assessment-retail-tokyo',
      },
    ],
    industryTitle: 'Industry expertise that drives measurable results',
    industryDescription:
      'With deep experience across regulated and high-growth sectors, AKRIN aligns execution with business and compliance priorities.',
    industries: [
      { label: 'Financial Services', value: 40, suffix: '%' },
      { label: 'Healthcare & Life Sciences', value: 25, suffix: '%' },
      { label: 'Manufacturing & Retail', value: 20, suffix: '%' },
      { label: 'Technology & Telecom', value: 15, suffix: '%' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What IT services does AKRIN provide in Japan?',
        a: 'AKRIN provides four core services in Tokyo and across Japan: ITAD for secure asset disposition, IT Asset Management for lifecycle tracking, Managed IT Services for 24/7 operational support, and IT Project Management for complex technology initiatives.',
      },
      {
        q: 'Can AKRIN deploy onsite engineers quickly?',
        a: 'Yes. Our bilingual engineers are based in Tokyo and provide same-day response in Kanto with rapid deployment nationwide.',
      },
      {
        q: 'Does AKRIN offer 24×7 monitoring and support?',
        a: 'Yes. We provide round-the-clock monitoring and incident response for all managed services clients, including Japanese holidays.',
      },
      {
        q: 'Can AKRIN support bilingual environments?',
        a: 'Yes. We operate in English and Japanese for all support tickets, reports, documentation, and stakeholder communication.',
      },
      {
        q: 'What industries does AKRIN serve?',
        a: 'We serve clients across financial services, healthcare and life sciences, manufacturing and retail, and technology — with compliance expertise tailored to each sector.',
      },
    ],
    ctaTitle: 'Ready to transform your IT infrastructure?',
    ctaDescription:
      'Get a customized IT service plan tailored to your business goals — starting with a free consultation.',
    ctaButton: 'Schedule Consultation',
  },
  ja: {
    heroTitle: '次に踏み出す大胆なIT戦略は？',
    heroSubtitle:
      '戦略コンサルティング、エンドツーエンドのプロジェクト管理、24時間365日対応のセキュアなマネージドサービス。',
    heroCta: 'はじめる',
    servicesTitle: '主要サービス',
    services: [
      {
        title: 'ITADサービス',
        description:
          '安全なデータ消去と証跡管理により、IT資産の適正処分を実現します。',
        href: '/ja/services/itad-japan-apac-us',
      },
      {
        title: 'IT資産管理',
        description:
          '調達から廃棄まで、IT資産のライフサイクル全体を可視化・最適化します。',
        href: '/ja/services/it-asset-management',
      },
      {
        title: 'マネージドITサービス',
        description:
          '24時間365日の運用支援とプロアクティブな管理により、安定したIT環境を維持します。',
        href: '/ja/services/it-managed-services',
      },
      {
        title: 'ITプロジェクト管理',
        description:
          '複雑なIT変革を成功に導くための戦略支援とプロジェクト推進を提供します。',
        href: '/ja/services/it-consulting-project-management',
      },
    ],
    caseStudiesTitle: '導入事例',
    caseStudies: [
      {
        title: '消費財メーカー向けマネージドIT（東京）',
        summary:
          'サービスデスク統合と端末標準化でSLAと運用品質を改善。',
        href: '/ja/case-studies/managed-it-services-cpg-tokyo',
      },
      {
        title: '製造業向けクラウド移行',
        summary:
          '段階移行と運用設計でリスクを抑えながら移行を実施。',
        href: '/ja/case-studies/cloud-migration-manufacturing',
      },
      {
        title: '東京小売向けWi-Fiアセスメント',
        summary:
          '高密度環境の電波品質を最適化し、接続安定性を向上。',
        href: '/ja/case-studies/wifi-assessment-retail-tokyo',
      },
    ],
    industryTitle: '業界の専門知識が測定可能な結果を生み出します',
    industryDescription:
      '規制対応が求められる領域から成長産業まで、業務要件に合わせたIT実行を支援します。',
    industries: [
      { label: '金融サービス', value: 40, suffix: '%' },
      { label: 'ヘルスケア・ライフサイエンス', value: 25, suffix: '%' },
      { label: '製造・小売', value: 20, suffix: '%' },
      { label: 'テクノロジー・通信', value: 15, suffix: '%' },
    ],
    faqTitle: 'よくある質問',
    faqs: [
      {
        q: 'AKRINは日本でどのようなITサービスを提供していますか？',
        a: 'マネージドIT、セキュリティ、クラウド移行、プロジェクト推進、日英バイリンガル支援を提供しています。',
      },
      {
        q: 'オンサイト対応はどのくらい早く可能ですか？',
        a: '東京拠点チームが関東圏で当日対応、全国でも迅速に対応します。',
      },
      {
        q: '24時間365日の監視・サポートはありますか？',
        a: 'はい。日本の祝日を含め、常時監視とインシデント対応を実施しています。',
      },
      {
        q: '英語と日本語の両方で対応できますか？',
        a: 'はい。チケット、レポート、会議を日英両言語で提供可能です。',
      },
    ],
    ctaTitle: 'ITインフラの変革を始めませんか？',
    ctaDescription:
      '課題に合わせた最適な進め方を、専門チームが具体的にご提案します。',
    ctaButton: '相談を予約',
  },
}

function SectionLabel({
  label,
  tone = 'dark',
}: {
  label: string
  tone?: 'dark' | 'cream'
}) {
  const dotClass = 'bg-[#3462BD]'
  const textClass = tone === 'cream' ? 'text-[#17100E]/40' : 'text-[#17100E]/40'

  return (
    <div className="mb-4 flex items-center gap-2">
      <span
        aria-hidden="true"
        className={`inline-block h-2 w-2 rounded-sm ${dotClass}`}
      />
      <span className={`font-mono text-xs uppercase tracking-[0.15em] ${textClass}`}>
        {label}
      </span>
    </div>
  )
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale]
  const contactHref = locale === 'ja' ? '/ja/contact' : '/contact'
  const caseStudiesHref = locale === 'ja' ? '/ja/case-studies' : '/case-studies'

  return (
    <div className="bg-[#F4F3EC]">
      <Navbar />
      <main>
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#3462BD] via-[#5B8AC4] to-[#83A1AD]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22)_0%,transparent_58%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,72,142,0.2)_0%,transparent_65%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.06)_0%,transparent_36%,rgba(19,44,96,0.12)_100%)]"
          />
          <div className="relative z-10">
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                <div className="relative px-6 py-24 sm:py-32 lg:px-8 lg:py-44 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h1 className="font-serif text-5xl font-normal tracking-tight text-pretty text-gray-100 sm:text-7xl">
                      {copy.heroTitle}
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                      {copy.heroSubtitle}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <Link
                        href={contactHref}
                        className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-base font-medium text-[#17100E] transition-colors hover:bg-gray-100"
                      >
                        {copy.heroCta}
                      </Link>
                      <Link
                        href={caseStudiesHref}
                        className="text-sm/6 font-semibold text-white/80 hover:text-white"
                      >
                        {locale === 'ja' ? '導入事例を見る' : 'View Case Studies'}{' '}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#8EA8BC] to-[#5B8AC4] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <Image
                src="/images/banners/home/banner.avif"
                alt={locale === 'ja' ? 'AKRIN ホームバナー' : 'AKRIN home banner'}
                width={2432}
                height={1442}
                className="aspect-3/2 object-cover lg:aspect-auto lg:h-full lg:w-full"
                priority
              />
            </div>
          </div>
        </section>

        <section id="trust" className="bg-[#F4F3EC] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg/8 font-semibold text-[#17100E]/60">
              {locale === 'ja'
                ? '世界の先進チームに選ばれています'
                : 'Trusted by the world’s most innovative teams'}
            </h2>
            <div className="marquee mt-10">
              <div className="marquee-track">
                {logoCloud.map((logo) => (
                  <img
                    key={`primary-${logo.name}`}
                    src={logo.src}
                    alt={logo.name}
                    width={165}
                    height={32}
                    className="h-8 w-auto grayscale opacity-45 transition-opacity hover:opacity-70"
                  />
                ))}
                {logoCloud.map((logo) => (
                  <img
                    key={`duplicate-${logo.name}`}
                    src={logo.src}
                    alt=""
                    aria-hidden="true"
                    width={165}
                    height={32}
                    className="h-8 w-auto grayscale opacity-45 transition-opacity hover:opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div
          className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
          <div className="overflow-visible lg:flex lg:items-start lg:gap-12">
            <SectionNav />

            <div className="min-w-0 flex-1">
              <section id="services" className="bg-[#F4F3EC]">
                <RevealOnScroll>
                  <div className="py-20 sm:py-28">
                    <SectionLabel label="CORE SERVICES" tone="cream" />
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      {copy.servicesTitle}
                    </h2>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#17100E]/80">
                      From secure asset disposition to 24/7 operational support, AKRIN
                      provides end-to-end IT lifecycle management for businesses in
                      Tokyo and across Japan.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                      {copy.services.map((service) => (
                        <article
                          key={service.href}
                          className="rounded-xl border border-[#17100E]/10 bg-white p-8 transition-shadow duration-300 hover:shadow-md"
                        >
                          <h3 className="text-lg font-semibold text-[#17100E]">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-base leading-relaxed text-[#17100E]/80">
                            {service.description}
                          </p>
                          <div className="mt-5">
                            <Link
                              href={service.href}
                              className="text-sm font-semibold text-[#3462BD] hover:text-[#2A4F99]"
                            >
                              {locale === 'ja' ? '詳細を見る' : 'Learn More'}
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </section>

              <div
                className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent"
                aria-hidden="true"
              />

              <section id="why-akrin" className="bg-[#F4F3EC]">
                <RevealOnScroll>
                  <div className="py-20 sm:py-28">
                    <SectionLabel label="WHY AKRIN" tone="cream" />
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      Why businesses in Japan choose AKRIN
                    </h2>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#17100E]/80">
                      We combine bilingual expertise with global standards to deliver
                      managed IT services that reduce costs, maintain compliance, and
                      let you focus on your core business.
                    </p>

                    <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                          <svg
                            className="h-5 w-5 text-[#3462BD]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-[#17100E]">
                          Bilingual Operations
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/70">
                          Native Japanese and English support for tickets, reports, and
                          stakeholder communication across your organization.
                        </p>
                      </div>

                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                          <svg
                            className="h-5 w-5 text-[#3462BD]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-[#17100E]">
                          24/7 Monitoring &amp; Support
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/70">
                          Round-the-clock proactive monitoring with guaranteed SLA
                          response times, including Japanese holidays.
                        </p>
                      </div>

                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                          <svg
                            className="h-5 w-5 text-[#3462BD]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                            />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-[#17100E]">
                          Compliance &amp; Security
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/70">
                          NIST 800-88 data destruction, ISO 27001 aligned processes,
                          and compliance support for APPI, GDPR, and industry
                          regulations.
                        </p>
                      </div>

                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                          <svg
                            className="h-5 w-5 text-[#3462BD]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                            />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-[#17100E]">
                          Predictable Costs
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/70">
                          Subscription-based pricing that converts unpredictable CapEx
                          into fixed monthly OpEx, with up to 30% cost reduction.
                        </p>
                      </div>

                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                          <svg
                            className="h-5 w-5 text-[#3462BD]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-[#17100E]">
                          On-site &amp; Remote Engineers
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/70">
                          Tokyo-based engineers for hands-on support with same-day
                          response in Kanto, plus remote services for distributed
                          teams.
                        </p>
                      </div>

                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                          <svg
                            className="h-5 w-5 text-[#3462BD]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                            />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-[#17100E]">
                          Full IT Lifecycle
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/70">
                          One partner from procurement and kitting through daily
                          operations to secure asset disposition, covering the entire
                          IT lifecycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </section>

              <div
                className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent"
                aria-hidden="true"
              />

              <section id="case-studies" className="bg-[#F4F3EC]">
                <RevealOnScroll>
                  <div className="py-20 sm:py-28">
                    <SectionLabel label="CASE STUDIES" tone="cream" />
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      {copy.caseStudiesTitle}
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                      {copy.caseStudies.map((study) => (
                        <article
                          key={study.href}
                          className="rounded-xl border border-[#17100E]/10 bg-white p-8 transition-shadow duration-300 hover:shadow-md"
                        >
                          <h3 className="text-lg font-semibold text-[#17100E]">
                            {study.title}
                          </h3>
                          <p className="mt-3 text-base leading-relaxed text-[#17100E]/80">
                            {study.summary}
                          </p>
                          <div className="mt-5">
                            <Link
                              href={study.href}
                              className="text-sm font-semibold text-[#3462BD] hover:text-[#2A4F99]"
                            >
                              {locale === 'ja' ? '事例を見る' : 'View Case Study'}
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </section>

              <div
                className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent"
                aria-hidden="true"
              />

              <section id="expertise" className="bg-[#F4F3EC]">
                <RevealOnScroll>
                  <div className="py-20 sm:py-28">
                    <SectionLabel label="INDUSTRY EXPERTISE" tone="cream" />
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      {copy.industryTitle}
                    </h2>
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#17100E]/80">
                      {copy.industryDescription}
                    </p>
                    <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
                      {copy.industries.map((item) => (
                        <div key={item.label} className="text-center sm:text-left">
                          <p className="text-5xl font-bold text-[#17100E] tabular-nums sm:text-6xl lg:text-7xl xl:text-8xl">
                            <CountUp target={item.value} suffix={item.suffix} />
                          </p>
                          <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-[#17100E]/40">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </section>

              <div
                className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent"
                aria-hidden="true"
              />

              <section id="faq" className="bg-[#F4F3EC]">
                <RevealOnScroll>
                  <div className="py-20 sm:py-28">
                    <div className="max-w-4xl">
                      <SectionLabel label="FAQS" tone="cream" />
                      <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                        {copy.faqTitle}
                      </h2>
                      <dl className="mt-16 divide-y divide-[#17100E]/10">
                        {copy.faqs.map((faq) => (
                          <Disclosure
                            key={faq.q}
                            as="div"
                            className="py-6 first:pt-0 last:pb-0 -mx-4 rounded-lg px-4 transition-colors duration-200 hover:bg-white/40"
                          >
                            <dt>
                              <DisclosureButton className="group flex w-full items-start justify-between text-left text-[#17100E]">
                                <span className="text-base/7 font-semibold">
                                  {faq.q}
                                </span>
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
                              <p className="text-base/7 text-[#17100E]/70">{faq.a}</p>
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

        <div
          className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent"
          aria-hidden="true"
        />

        <section id="cta" className="bg-[#F4F3EC]">
          <div className="px-6 py-20 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-xl border border-[#17100E]/10 bg-white px-6 py-16 text-center sm:px-10">
                <h2 className="font-serif text-3xl font-normal tracking-tight text-[#17100E] sm:text-4xl">
                  {copy.ctaTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base/7 text-[#17100E]/80">
                  {copy.ctaDescription}
                </p>
                <div className="mt-8">
                  <Link
                    href={contactHref}
                    className="inline-flex items-center justify-center rounded-md bg-[#17100E] px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#2A2523]"
                  >
                    {copy.ctaButton}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
