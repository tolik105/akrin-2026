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
  { id: 'overview', label: 'OUTCOMES', num: '01' },
  { id: 'services', label: 'SERVICES', num: '02' },
  { id: 'why', label: 'WHY MSP', num: '03' },
  { id: 'security', label: 'SECURITY', num: '04' },
  { id: 'coverage', label: 'COVERAGE', num: '05' },
  { id: 'process', label: 'PROCESS', num: '06' },
  { id: 'faq', label: 'FAQ', num: '07' },
]

const faqItems = [
  {
    q: "What's included in your managed IT services?",
    a: 'Our managed services cover 24/7 network monitoring, bilingual help desk support with guaranteed SLAs, complete IT infrastructure management, integrated security services, business continuity planning, and strategic IT governance with quarterly reviews.',
  },
  {
    q: 'How fast do you respond to issues?',
    a: 'Critical incidents receive engineer engagement within 30 minutes. Standard support requests are resolved within 4 business hours. Proactive monitoring catches the majority of issues before they affect users.',
  },
  {
    q: 'Is support available in Japanese and English?',
    a: 'Yes. Bilingual IT support services are essential to how we work. Every engineer, ticket, report, and executive review is available in both Japanese and English with native-speaking staff.',
  },
  {
    q: 'Can you work with existing systems?',
    a: 'Absolutely. We support all major platforms including Microsoft 365, Azure, AWS, GCP, and VMware — whether on-premise, cloud, or hybrid infrastructure.',
  },
  {
    q: 'What cost savings can we expect?',
    a: 'Businesses switching to managed services typically see 13–32% reduction in overall IT operational costs. Our subscription model converts unpredictable capital spending into fixed monthly operating expenses.',
  },
  {
    q: 'Do you handle equipment deployment?',
    a: 'Yes. Our kitting team handles hardware configuration, OS imaging, security agent deployment, application installation, asset tagging, and QA testing — devices arrive ready to use.',
  },
]

const overviewItems = [
  {
    title: '24/7 monitoring and rapid incident response',
    desc: 'Continuous monitoring ensures system stability and rapid incident response. Preventive maintenance delivers 3.3x less downtime than reactive approaches.',
  },
  {
    title: 'Bilingual IT support',
    desc: 'Essential for communication between global headquarters and local Japan operations. Native English and Japanese support facilitates project management across international teams.',
  },
  {
    title: 'Complete IT infrastructure management',
    desc: 'Monitoring, maintenance, troubleshooting, and optimization of your entire stack. Access to specialized expertise ensures higher performance and reduced downtime.',
  },
  {
    title: 'Enhanced cybersecurity and compliance',
    desc: "Proactive threat prevention and regulatory compliance including ISO 27001, tailored to Japan's strict data environment.",
  },
  {
    title: 'Strategic IT planning',
    desc: 'Long-term technology roadmaps aligned with business goals, with quarterly reviews and performance monitoring.',
  },
]

const serviceItems = [
  {
    title: 'Network monitoring and operations',
    desc: 'Real-time dashboards tracking CPU, memory, disk, and network metrics. Automated alerts escalate by severity. We resolve 70%+ of alerts before users notice.',
  },
  {
    title: 'Help desk and end-user support',
    desc: 'Immediate assistance via phone, email, chat, or self-service portal. Remote support over secure connections, with same-day on-site service in Tokyo and Kanto.',
  },
  {
    title: 'Server and cloud management',
    desc: 'Proactive maintenance for Windows, Linux, VMware, and cloud workloads across AWS, Azure, and GCP. Includes provisioning, patching, and cost optimization.',
  },
  {
    title: 'Managed security services',
    desc: 'EDR, next-gen firewall configuration, vulnerability assessments, and compliance with APPI, GDPR, and ISO 27001.',
  },
  {
    title: 'Business continuity',
    desc: 'Automated backups with tested recovery procedures, defined RTO/RPO for critical systems, and annual DR drills.',
  },
  {
    title: 'Procurement and project management',
    desc: 'Equipment deployment, vendor coordination, and end-to-end technology project delivery.',
  },
]

const whyItems = [
  { title: 'IT talent shortage', stat: '85%', desc: '85% of Tokyo employers struggle to fill IT roles. Outsourcing eliminates hiring bottlenecks and delivers a full team from day one.' },
  { title: 'Predictable costs', stat: '13–32%', desc: 'Convert CapEx to fixed monthly OpEx. Clients report 13–32% reduction in overall IT operational costs.' },
  { title: 'Compliance expertise', stat: 'ISO 27001', desc: 'Navigate APPI, GDPR, ISMAP, and ISO 27001 with audit-ready documentation.' },
  { title: 'Scalable growth', stat: 'Flex', desc: 'Services flex with your headcount and locations without proportional overhead increase.' },
]

const securityItems = [
  'Proactive threat prevention with EDR and 24/7 monitoring',
  'Regulatory compliance: APPI, GDPR, ISO 27001',
  'Regular vulnerability assessments and penetration testing',
  'Documented incident response procedures',
  'Encrypted backups and secure decommissioning',
]

const coverageRegions = [
  { region: 'Japan (Tokyo Base)', items: ['Same-day on-site support in Kanto, remote nationwide', 'Native bilingual support navigating local vendors and regulations', 'Help with business culture and vendor management'] },
  { region: 'APAC & US', items: ['Coordination with HQ teams across Asia-Pacific and United States', 'Standardized reporting for multi-region IT programs', 'Office setup and procurement for new markets'] },
  { region: 'Europe', items: ['GDPR-compliant services for European companies with Japan operations', 'Cross-border data transfer compliance', 'Timezone-aware support coordination with EU headquarters'] },
]

const processSteps = [
  { num: '01', title: 'Technology assessment', desc: 'Evaluate infrastructure, identify gaps, build cost-benefit analysis.' },
  { num: '02', title: 'Roadmap and onboarding', desc: 'Prioritized plan with budget forecasts and 12–36 month timeline.' },
  { num: '03', title: 'Monitoring and management', desc: '24/7 monitoring, help desk activation, security baseline deployment.' },
  { num: '04', title: 'Ongoing governance', desc: 'Quarterly reviews tracking KPIs and strategic adjustments.' },
  { num: '05', title: 'Scale and optimize', desc: 'Continuous improvement and capacity planning as your business grows.' },
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

export default function ITManagedServicesClient() {
  return (
    <main className="bg-white">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/it-managed-services/banner.avif"
            alt="AKRIN Managed IT Services Tokyo"
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
            <Link href="/services" className="text-white/50 transition-colors hover:text-white/80">Services</Link>
            <span className="text-white/30">&rsaquo;</span>
            <span className="font-medium text-white">Managed IT Services</span>
          </nav>
          <h1 className="font-serif text-[22px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[26px]">
            Managed IT Services Tokyo: 24/7 Infrastructure Management &amp; Bilingual Support
          </h1>
          <p className="mt-3 max-w-md text-[12px] leading-[1.65] text-white/65 sm:text-[13px]">
            End-to-end IT infrastructure management, proactive monitoring, and bilingual help desk — so your team can focus on core operations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact?service=managed-services"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
            >
              View All Services
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
            alt="AKRIN Managed IT Services Tokyo"
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
                <Link href="/services" className="text-white/50 transition-colors hover:text-white/80">Services</Link>
                <span className="text-white/30">&rsaquo;</span>
                <span className="font-medium text-white">Managed IT Services</span>
              </nav>
              <h1 className="font-serif text-[30px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[34px]">
                Managed IT Services Tokyo: 24/7 Infrastructure Management &amp; Bilingual Support
              </h1>
              <p className="mt-4 max-w-lg text-[14px] leading-[1.7] text-white/70">
                End-to-end IT infrastructure management, proactive monitoring, and bilingual help desk for international businesses operating in Japan. AKRIN is your managed service provider (MSP) with 24/7 monitoring by qualified engineers.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact?service=managed-services"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[14px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                >
                  View All Services
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav
        variant="ribbon"
        ariaLabel="Page sections"
        items={managedServicesSectionItems}
      />

      {/* ── 01 OUTCOMES — WWT editorial: label + large heading + text left, image right ── */}
      <section id="overview" className="bg-white">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1200px] px-6 pt-20 lg:px-9 lg:pt-24">
            <SectionLabel label="Managed IT services overview" />

            <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
              {/* Text column — 5 cols */}
              <div className="lg:col-span-5">
                <h2 className="text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                  What you get
                </h2>
                <p className="mt-5 text-[16px] leading-[1.6] text-[#4E4F5F]">
                  Managed IT services handle your technology needs — from continuous monitoring to infrastructure optimization.
                </p>
                <p className="mt-4 text-[16px] leading-[1.6] text-[#4E4F5F]">
                  We provide comprehensive solutions for international businesses operating in Japan, combining 24/7 infrastructure management with native bilingual support.
                </p>
              </div>
              {/* Image column — 7 cols */}
              <div className="mt-8 lg:col-span-7 lg:mt-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/monitoring.avif"
                    alt="24/7 IT infrastructure monitoring dashboard"
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

      {/* ── 02 SERVICES — WWT capabilities style: heading + image, then flat cards ── */}
      <section id="services" className="bg-white">
        <RevealOnScroll>
          <div className="mx-auto max-w-[1200px] px-6 pt-24 lg:px-9 lg:pt-28">
            <SectionLabel label="Managed IT services capabilities" />

            <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
              <div className="lg:col-span-7">
                <h2 className="max-w-xl text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                  Services we provide
                </h2>
                <p className="mt-5 max-w-lg text-[16px] leading-[1.6] text-[#4E4F5F]">
                  Our managed IT services cover every layer of your technology stack — from infrastructure monitoring to end-user support and strategic planning.
                </p>
                <Link
                  href="/contact?service=managed-services"
                  className="mt-5 inline-flex items-center gap-1 text-[14px] font-normal text-[#006DC7] transition-colors hover:text-[#0052A3]"
                >
                  Get a service proposal
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8 lg:col-span-5 lg:mt-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/Infrastructure-Management.avif"
                    alt="IT infrastructure management services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service cards — WWT flat style: image-less, just title + desc + link */}
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

      {/* ── 03 WHY MSP — Light blue section ── */}
      <section id="why" className="mt-20 bg-[#EEF2FF] lg:mt-24">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-9 lg:py-24">
          <SectionLabel label="Why managed services" />

          <h2 className="mt-2 max-w-2xl text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
            Why businesses in Tokyo choose a managed service provider
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-[#4E4F5F]">
            The Tokyo managed IT services market includes both domestic giants and specialized international firms. Here&rsquo;s why leading companies outsource.
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

      {/* ── 04 SECURITY — WWT editorial: heading + image left, checklist right ── */}
      <section id="security" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-9 lg:py-24">
          <SectionLabel label="Security &amp; compliance" />

          <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
            {/* Left column: heading + image */}
            <div className="lg:col-span-5">
              <h2 className="text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                Security and compliance snapshot
              </h2>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/banners/it-managed-services/Help-Desk-Support.avif"
                  alt="IT security and compliance management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Right column: simple text list */}
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

      {/* ── 05 COVERAGE — WWT industries style: heading + image, then region cards ── */}
      <section id="coverage" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 pb-8 lg:px-9">
          <SectionLabel label="Global coverage" />

          <div className="mt-2 lg:grid lg:grid-cols-12 lg:gap-x-16">
            {/* Text column */}
            <div className="lg:col-span-5">
              <h2 className="text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                Bilingual IT support for global operations
              </h2>
              <p className="mt-5 text-[16px] leading-[1.6] text-[#4E4F5F]">
                As your single point of contact, AKRIN simplifies communication and troubleshooting across all technology vendors.
              </p>
              <Link
                href="/contact?service=managed-services"
                className="mt-5 inline-flex items-center gap-1 text-[14px] font-normal text-[#006DC7] transition-colors hover:text-[#0052A3]"
              >
                Learn about our coverage
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
            {/* Image column */}
            <div className="mt-8 lg:col-span-7 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/trusted-partner.avif"
                    alt="Trusted IT partner for global operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src="/images/banners/it-managed-services/board-room.avif"
                    alt="Executive IT consultation boardroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Region cards — WWT industry card style: icon + blue title + desc */}
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

      {/* ── 06 PROCESS — Clean numbered list, minimal ── */}
      <section id="process" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-9 lg:py-24">
          <SectionLabel label="Our process" />

          <h2 className="mt-2 max-w-xl text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
            How we work
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-[#4E4F5F]">
            A structured approach from initial assessment through ongoing optimization — designed to reduce risk and accelerate results.
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
              {/* Heading column */}
              <div className="lg:col-span-4">
                <SectionLabel label="FAQ" />
                <h2 className="mt-2 text-[28px] font-light leading-[1.1] tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-[16px] leading-[1.6] text-[#4E4F5F]">
                  Can&rsquo;t find the answer you&rsquo;re looking for? Reach out to our{' '}
                  <Link href="/contact" className="text-[#006DC7] hover:underline">
                    support team
                  </Link>
                  .
                </p>
              </div>

              {/* FAQ accordion */}
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

      {/* Related Blog */}
      <section className="bg-white pb-4 pt-4">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-9">
          <div className="border-t border-[#E4E4EB] px-0 py-10">
            <p className="text-[13px] font-medium uppercase tracking-widest text-[#4E4F5F]/50">Related Guide</p>
            <h3 className="mt-2 text-[24px] font-light tracking-[-0.01em] text-[#0A0B10]">
              IT Infrastructure Management in Japan: The Complete Guide
            </h3>
            <p className="mt-3 max-w-3xl text-[16px] leading-[1.6] text-[#4E4F5F]">
              Learn how international companies manage IT infrastructure in Japan — from vendor navigation and bilingual support to compliance frameworks and strategic planning.
            </p>
            <Link
              href="/blog/it-infrastructure-management-japan"
              className="mt-4 inline-flex items-center gap-1 text-[14px] font-normal text-[#006DC7] transition-colors hover:text-[#0052A3]"
            >
              Read the full guide
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-white pb-16 pt-4">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-9">
          <div className="border-t border-[#E4E4EB] py-12 text-center">
            <h2 className="text-[28px] font-light tracking-[-0.01em] text-[#0A0B10] sm:text-[32px]">
              Ready to simplify your IT operations?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-[#4E4F5F]">
              Schedule a consultation for a structured plan with scope, SLAs, timeline, and cost estimate.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?service=managed-services"
                className="inline-flex items-center justify-center rounded-md bg-[#0066CC] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0052A3]"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#E4E4EB] px-6 py-3 text-[15px] font-medium text-[#0A0B10] transition-colors hover:border-[#0066CC] hover:text-[#0066CC]"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
