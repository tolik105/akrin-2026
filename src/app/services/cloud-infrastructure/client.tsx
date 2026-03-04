'use client'

import {
  CloudArrowUpIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  LockClosedIcon,
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
  { id: 'overview', label: 'OVERVIEW', num: '01' },
  { id: 'what-is', label: 'WHAT IS', num: '02' },
  { id: 'assessment', label: 'ASSESSMENT', num: '03' },
  { id: 'migration', label: 'MIGRATION', num: '04' },
  { id: 'operations', label: 'OPERATIONS', num: '05' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '06' },
  { id: 'faq', label: 'FAQ', num: '07' },
]

const overviewItems = [
  {
    icon: ChartBarIcon,
    title: 'Cloud readiness assessment',
    desc: 'TCO analysis, workload mapping, and migration strategy for your cloud infrastructure.',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Secure cloud migration',
    desc: 'Application-by-application migration to public clouds, private clouds, or hybrid cloud environments.',
  },
  {
    icon: CogIcon,
    title: '24/7 managed cloud operations',
    desc: 'Continuous monitoring, incident response, patching, and performance optimization across cloud services.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cloud cost optimization',
    desc: 'Reserved instance planning, rightsizing, and automated scaling to control cloud computing costs.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security and compliance',
    desc: 'Identity management, encryption, and alignment with ISO 27001, SOC 2, and data residency requirements.',
  },
]

const migrationSteps = [
  {
    num: '01',
    title: 'Application discovery & dependency mapping',
    desc: 'Complete inventory of workloads, data flows, and inter-system dependencies across your IT infrastructure.',
  },
  {
    num: '02',
    title: 'Migration strategy per workload',
    desc: 'Rehost, replatform, refactor, or retire — each application gets the right cloud migration approach.',
  },
  {
    num: '03',
    title: 'Phased migration execution',
    desc: 'Controlled migration waves with validation checkpoints, rollback procedures, and minimal disruption.',
  },
  {
    num: '04',
    title: 'Post-migration validation & optimization',
    desc: 'Performance testing, security hardening, and cost baseline establishment in the new cloud environment.',
  },
]

const operationsServices = [
  {
    icon: ClockIcon,
    title: '24/7 Monitoring & Incident Response',
    desc: 'Real-time monitoring of cloud infrastructure services with automated alerting and rapid incident resolution across all cloud environments.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cloud Cost Optimization',
    desc: 'Reserved instance planning, rightsizing, unused resource cleanup, and storage tiering. Most organizations reduce cloud spend by 20–35%.',
  },
  {
    icon: LockClosedIcon,
    title: 'Cloud Security & Compliance',
    desc: 'Identity and access management, network segmentation, encryption, and continuous compliance monitoring aligned to ISO 27001 and SOC 2.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Multi-Cloud Management',
    desc: 'Unified management across AWS, Microsoft Azure, Google Cloud, and on-premises data centers — single pane of glass for hybrid cloud operations.',
  },
]

const whyItems = [
  {
    icon: ServerStackIcon,
    title: 'End-to-end cloud infrastructure management',
    desc: 'From assessment through migration to ongoing managed cloud operations — one partner for the entire cloud lifecycle.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Multi-cloud & hybrid expertise',
    desc: 'Vendor-neutral cloud services across AWS, Azure, Google Cloud, and private cloud infrastructure.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Japan compliance alignment',
    desc: 'Cloud environments configured for Japanese data residency, APPI, and enterprise security requirements.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Proven cost reduction',
    desc: 'Cloud cost optimization delivering 20–35% savings through rightsizing, reserved instances, and automated scaling.',
  },
  {
    icon: CpuChipIcon,
    title: 'Infrastructure as code',
    desc: 'Repeatable, version-controlled cloud infrastructure deployments using Terraform, CloudFormation, and Ansible.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Managed services model',
    desc: '24/7 monitoring, patching, backup, and disaster recovery as managed services — so your team focuses on business outcomes.',
  },
]

const faqItems = [
  {
    q: 'What cloud platforms do you support?',
    a: 'We manage cloud environments across AWS, Microsoft Azure, Google Cloud, and private cloud infrastructure. Our team designs hybrid cloud and multi-cloud architectures tailored to your workload and compliance needs.',
  },
  {
    q: 'How long does a typical cloud migration take?',
    a: 'Cloud migration timelines vary by scope. A single-application migration may complete in weeks, while enterprise-wide migration projects typically span 3 to 12 months depending on data volume, application dependencies, and compliance requirements.',
  },
  {
    q: 'Can you manage cloud infrastructure we already have in place?',
    a: 'Yes. Our managed cloud services cover existing cloud environments. We perform a cloud readiness assessment, identify optimization opportunities, and transition into ongoing 24/7 monitoring and management.',
  },
  {
    q: 'How do you handle cloud security and compliance?',
    a: 'Cloud security is built into every layer — identity and access management, network segmentation, encryption, and continuous monitoring. We align cloud environments with frameworks including ISO 27001, SOC 2, and Japan-specific data residency requirements.',
  },
  {
    q: 'What does cloud cost optimization include?',
    a: 'Cloud cost optimization covers reserved instance planning, rightsizing, unused resource cleanup, storage tiering, and automated scaling policies. Most organizations reduce cloud spend by 20–35% after a structured optimization review.',
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

export default function CloudInfrastructureClient() {
  return (
    <main className="bg-[#F7F7FC]">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/cloud/cloud-infrastructure.avif"
            alt="AKRIN Cloud Infrastructure Services"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Cloud Services</span>
          </div>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            Cloud Infrastructure Services: Migration, Management &amp; Optimization
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            End-to-end cloud infrastructure services — from cloud readiness assessment through secure migration to 24/7 managed cloud operations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact?service=cloud-infrastructure"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              Schedule Cloud Assessment
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
            src="/images/banners/cloud/cloud-infrastructure.avif"
            alt="AKRIN Cloud Infrastructure Services"
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
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Cloud Services</span>
              </div>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                Cloud Infrastructure Services: Migration, Management &amp; Optimization
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                End-to-end cloud infrastructure services — from cloud readiness assessment through secure migration to 24/7 managed cloud operations. We help businesses design, migrate, and manage cloud environments across public clouds, private clouds, and hybrid cloud architectures.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact?service=cloud-infrastructure"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  Schedule Cloud Assessment
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
        items={sectionItems}
      />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── 01 OVERVIEW — Horizontal cards with gradient left border ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="What You Get" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  Cloud infrastructure services built for enterprise
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  Every cloud infrastructure project delivers measurable outcomes — reduced costs, improved performance, and enterprise-grade security across your cloud environments.
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

          {/* ── 02 WHAT IS — Dark gradient rounded card ── */}
          <section id="what-is">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="About" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    What are cloud infrastructure services?
                  </h2>
                  <div className="mt-6 max-w-3xl space-y-4">
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      Cloud infrastructure services encompass the planning, deployment, and management of cloud computing resources that power modern business operations. This includes compute, storage, networking, and security components delivered through public clouds like AWS and Microsoft Azure, private cloud environments, or hybrid cloud architectures that combine on-premises data centers with cloud services.
                    </p>
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      Effective cloud infrastructure management goes beyond initial deployment. It requires ongoing cloud cost optimization, performance tuning, security hardening, and capacity planning to ensure cloud environments deliver consistent value. Organizations need cloud infrastructure services that align with business objectives while maintaining the reliability and compliance standards their operations demand.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 03 ASSESSMENT — Two-column with checklist card ── */}
          <section id="assessment" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Assessment" />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      Cloud readiness assessment &amp; TCO analysis
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Before any cloud migration begins, we evaluate your existing IT infrastructure, application portfolio, and operational requirements. The cloud readiness assessment identifies which workloads are ready for cloud computing, which need refactoring, and where on-premises infrastructure should remain.
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A0B19]/50">Assessment Deliverables</h3>
                      <ul className="mt-5 space-y-3">
                        {[
                          'Total cost of ownership (TCO) comparison — on-premises vs. cloud',
                          'Application portfolio analysis and migration priority ranking',
                          'Cloud platform recommendation (AWS, Azure, hybrid)',
                          'Security and compliance gap analysis',
                          'Network architecture and data transfer planning',
                          'Risk assessment and rollback strategy',
                        ].map((item) => (
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

          {/* ── 04 MIGRATION — Numbered steps with accent line ── */}
          <section id="migration">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Migration" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  Cloud migration services
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  Cloud migration moves applications, data, and workloads from on-premises data centers or legacy infrastructure to cloud environments. Our cloud migration services follow a structured, phased approach to minimize risk and maintain business continuity.
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                  {migrationSteps.map((step) => (
                    <div
                      key={step.num}
                      className="relative rounded-xl border border-[#E2E5EF] bg-white p-6 pl-8"
                    >
                      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#0066CC] to-[#0066CC]/20" />
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">
                          {step.num}
                        </span>
                        <h3 className="text-[15px] font-semibold text-[#0A0B19]">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#2D2E3F]/70">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 05 OPERATIONS — Dark gradient section with 2×2 grid ── */}
          <section id="operations">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="Operations" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    Managed cloud operations 24/7
                  </h2>
                  <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-white/60">
                    Managed cloud operations deliver continuous oversight of your cloud infrastructure — monitoring, security, cost management, and multi-cloud coordination as managed services.
                  </p>

                  <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {operationsServices.map((svc) => (
                      <div
                        key={svc.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0B1F3A]"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]/20 ring-1 ring-[#0066CC]/30">
                          <svc.icon className="h-5 w-5 text-[#0066CC]" />
                        </div>
                        <h3 className="text-base font-semibold text-white">{svc.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 06 WHY AKRIN — Light section with icon grid ── */}
          <section id="why-akrin" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Why AKRIN" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  Why choose AKRIN for cloud infrastructure management
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  AKRIN delivers cloud infrastructure management services that combine deep technical expertise with Japan-market operational experience.
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

          {/* ── 07 FAQ — Two-column with accordion ── */}
          <section id="faq">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
                  <div>
                    <SectionLabel label="FAQ" />
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Common questions about our cloud infrastructure services and managed cloud operations.
                    </p>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <FAQAccordion />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── CTA — Dark section compact ── */}
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
                      Start your cloud transformation
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.7] text-white/60">
                      Share your cloud infrastructure goals and we will deliver a structured assessment — migration approach, managed services scope, timeline, and cost estimate.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/contact?service=cloud-infrastructure"
                        className="inline-flex items-center justify-center rounded-full bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0052A3]"
                      >
                        Schedule Cloud Assessment
                      </Link>
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                      >
                        Explore All Services
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
