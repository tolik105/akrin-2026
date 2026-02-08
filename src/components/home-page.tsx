import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'

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
  industries: { label: string; value: string }[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
}

const logoCloud = [
  { name: 'Transistor', src: '/logo-cloud/transistor.svg' },
  { name: 'Reform', src: '/logo-cloud/laravel.svg' },
  { name: 'Tuple', src: '/logo-cloud/tuple.svg' },
  { name: 'SavvyCal', src: '/logo-cloud/savvycal.svg' },
  { name: 'Statamic', src: '/logo-cloud/statamic.svg' },
]

const content: Record<Locale, HomeCopy> = {
  en: {
    heroTitle: "What's the next bold step for your IT?",
    heroSubtitle:
      'Strategic consulting, end-to-end project management, and always-on managed services secured 24/7.',
    heroCta: 'Get started',
    servicesTitle: 'Core Services',
    services: [
      {
        title: 'Managed IT Support',
        description:
          '24/7 support, operations, and governance for stable day-to-day IT.',
        href: '/services/it-managed-services',
      },
      {
        title: 'Cybersecurity & IT Security',
        description:
          'Security assessments, defense controls, and compliance support.',
        href: '/services/cybersecurity',
      },
      {
        title: 'IT Consulting & Project Management',
        description:
          'Planning and delivery for critical transformation initiatives.',
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
      { label: 'Financial Services', value: '40%' },
      { label: 'Healthcare & Life Sciences', value: '25%' },
      { label: 'Manufacturing & Retail', value: '20%' },
      { label: 'Technology & Telecom', value: '15%' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What IT services does AKRIN provide in Japan?',
        a: 'AKRIN provides managed IT services, cybersecurity, cloud migration, project delivery, and bilingual support across Japan.',
      },
      {
        q: 'Can AKRIN deploy onsite engineers quickly?',
        a: 'Yes. Our Tokyo-based team supports same-day response in Kanto and rapid deployment nationwide.',
      },
      {
        q: 'Does AKRIN offer 24x7 monitoring and support?',
        a: 'Yes. We provide round-the-clock monitoring and incident response, including Japanese holidays.',
      },
      {
        q: 'Can AKRIN support bilingual environments?',
        a: 'Yes. We operate in English and Japanese for tickets, reports, and stakeholder communication.',
      },
    ],
    ctaTitle: 'Ready to transform your IT infrastructure?',
    ctaDescription:
      'Get expert consultation and a delivery plan tailored to your business goals.',
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
        title: 'マネージドITサービス',
        description:
          '24時間365日の運用支援とガバナンスで安定したIT環境を維持します。',
        href: '/ja/services/it-managed-services',
      },
      {
        title: 'サイバーセキュリティ・ITセキュリティ',
        description:
          '診断、防御、運用、コンプライアンスまで一貫したセキュリティ支援。',
        href: '/ja/services/cybersecurity',
      },
      {
        title: 'ITコンサルティング・プロジェクト管理',
        description:
          '重要プロジェクトの計画策定と実行管理を支援します。',
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
      { label: '金融サービス', value: '40%' },
      { label: 'ヘルスケア・ライフサイエンス', value: '25%' },
      { label: '製造・小売', value: '20%' },
      { label: 'テクノロジー・通信', value: '15%' },
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

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale]
  const contactHref = locale === 'ja' ? '/ja/contact' : '/contact'
  const caseStudiesHref = locale === 'ja' ? '/ja/case-studies' : '/case-studies'

  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <section className="bg-white">
          <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
            <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
              <div className="px-6 lg:px-0">
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                      {copy.heroTitle}
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                      {copy.heroSubtitle}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <Button href={contactHref}>{copy.heroCta}</Button>
                      <Link href={caseStudiesHref} className="text-sm/6 font-semibold text-gray-900">
                        {locale === 'ja' ? '導入事例を見る' : 'View Case Studies'} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36"
                />
                <div className="shadow-lg md:rounded-3xl">
                  <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 inset-ring inset-ring-white md:ml-20 lg:ml-36"
                    />
                    <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                              <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                AssetOverview.tsx
                              </div>
                              <div className="border-r border-gray-600/10 px-4 py-2">
                                Dashboard.tsx
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pt-6 pb-14">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="rounded-lg bg-white/10 p-4">
                                <p className="text-xs text-gray-300">
                                  {locale === 'ja' ? '稼働中資産' : 'Active Assets'}
                                </p>
                                <p className="mt-2 text-2xl font-semibold text-white">847</p>
                              </div>
                              <div className="rounded-lg bg-white/10 p-4">
                                <p className="text-xs text-gray-300">
                                  {locale === 'ja' ? '管理対象' : 'Tracked'}
                                </p>
                                <p className="mt-2 text-2xl font-semibold text-white">1243</p>
                              </div>
                              <div className="rounded-lg bg-white/10 p-4">
                                <p className="text-xs text-gray-300">
                                  {locale === 'ja' ? '最適化率' : 'Optimized'}
                                </p>
                                <p className="mt-2 text-2xl font-semibold text-white">91%</p>
                              </div>
                            </div>
                            <div className="mt-6 space-y-3">
                              <div className="h-2 rounded-full bg-white/20">
                                <div className="h-2 w-4/5 rounded-full bg-teal-300" />
                              </div>
                              <div className="h-2 rounded-full bg-white/20">
                                <div className="h-2 w-2/3 rounded-full bg-cyan-300" />
                              </div>
                              <div className="h-2 rounded-full bg-white/20">
                                <div className="h-2 w-11/12 rounded-full bg-blue-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
          </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg/8 font-semibold text-gray-900">
              {locale === 'ja'
                ? '世界の先進チームに選ばれています'
                : 'Trusted by the world’s most innovative teams'}
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              {logoCloud.map((logo, idx) => (
                <img
                  key={logo.name}
                  alt={logo.name}
                  src={logo.src}
                  className={`col-span-2 max-h-12 w-full object-contain lg:col-span-1 ${
                    idx === 3 ? 'sm:col-start-2' : ''
                  } ${idx === 4 ? 'col-start-2 sm:col-start-auto' : ''}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <Container className="py-16 sm:py-20">
            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
              {copy.servicesTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {copy.services.map((service) => (
                <article
                  key={service.href}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm/7 text-gray-700">
                    {service.description}
                  </p>
                  <div className="mt-5">
                    <Button href={service.href} variant="outline">
                      {locale === 'ja' ? '詳細を見る' : 'Learn More'}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-gray-50">
          <Container className="py-16 sm:py-20">
            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
              {copy.caseStudiesTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {copy.caseStudies.map((study) => (
                <article
                  key={study.href}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-950">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm/7 text-gray-700">{study.summary}</p>
                  <div className="mt-5">
                    <Button href={study.href} variant="outline">
                      {locale === 'ja' ? '事例を見る' : 'View Case Study'}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container className="py-16 sm:py-20">
            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
              {copy.industryTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
              {copy.industryDescription}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {copy.industries.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <p className="text-3xl font-semibold text-gray-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {copy.faqTitle}
              </h2>
              <dl className="mt-16 divide-y divide-gray-900/10">
                {copy.faqs.map((faq) => (
                  <Disclosure key={faq.q} as="div" className="py-6 first:pt-0 last:pb-0">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base/7 font-semibold">{faq.q}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                          <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base/7 text-gray-600">{faq.a}</p>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section>
          <Container className="py-16 sm:py-20">
            <div className="rounded-3xl border border-gray-200 bg-gray-950 px-6 py-12 text-center text-white sm:px-10">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {copy.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base/7 text-gray-300">
                {copy.ctaDescription}
              </p>
              <div className="mt-8">
                <Button
                  href={contactHref}
                  className="!border-white !bg-white !text-gray-950 hover:!bg-gray-100"
                >
                  {copy.ctaButton}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
