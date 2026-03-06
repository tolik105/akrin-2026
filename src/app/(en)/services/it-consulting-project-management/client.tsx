'use client'

import {
  ClipboardDocumentListIcon,
  BuildingOffice2Icon,
  ServerStackIcon,
  CloudArrowUpIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
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
  { id: 'services', label: 'SERVICES', num: '02' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '03' },
  { id: 'faq', label: 'FAQ', num: '04' },
]

const serviceCards = [
  {
    icon: ClipboardDocumentListIcon,
    title: 'IT Infrastructure Project Management',
    desc: 'We manage network rollouts, server migrations, and infrastructure refresh projects end to end. Each project follows structured methodology: requirements gathering, vendor coordination, risk management, and post-implementation validation.',
    highlights: ['Network rollouts', 'Server migrations', 'Infrastructure refresh'],
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Office Relocation & Workspace Technology',
    desc: 'Our consultants coordinate network decommissioning, cabling and access point installation at the new location, and full IT system cutover with minimal downtime.',
    highlights: ['Network decommissioning', 'Cabling & AP installation', 'IT system cutover'],
  },
  {
    icon: ServerStackIcon,
    title: 'Data Center Builds & Migrations',
    desc: 'Data center projects demand precise planning and coordination across multiple vendors. Our project managers oversee rack layout, power distribution, cooling, cabling, and network configuration.',
    highlights: ['Rack layout & power', 'Cooling & cabling', 'Network configuration'],
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud Migration & Digital Transformation',
    desc: 'Moving workloads to the cloud requires careful project scoping, application dependency mapping, and phased migration planning. Our expertise covers AWS, Azure, and hybrid environments.',
    highlights: ['AWS & Azure', 'Dependency mapping', 'Phased migration'],
  },
]

const whyMetrics = [
  {
    icon: UserGroupIcon,
    metric: 'Dedicated PM',
    title: 'Assigned project manager',
    desc: 'Every engagement includes a dedicated project manager with direct accountability for timelines, budget, and delivery quality.',
  },
  {
    icon: DocumentTextIcon,
    metric: 'Structured',
    title: 'Proven methodology',
    desc: 'Scope control, risk registers, and weekly status reviews keep information technology initiatives on track.',
  },
  {
    icon: WrenchScrewdriverIcon,
    metric: 'Hands-on',
    title: 'Technical depth',
    desc: 'Our team brings hands-on expertise across networking, security, cloud, and enterprise applications.',
  },
  {
    icon: ShieldCheckIcon,
    metric: 'Japan-wide',
    title: 'National coverage',
    desc: 'Our consultants work across Japan with remote project management support for distributed teams and multi-site deployments.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    metric: 'Transparent',
    title: 'Client-first reporting',
    desc: 'Direct access to senior consultants and solutions designed around your business context from the beginning of every engagement.',
  },
  {
    icon: ClockIcon,
    metric: 'On-time',
    title: 'Measurable outcomes',
    desc: 'We work closely with clients to understand business priorities and build project plans that achieve measurable outcomes on time.',
  },
]

const faqItems = [
  {
    q: "What does AKRIN's IT consulting cover?",
    a: 'We provide end-to-end project management for infrastructure builds, office relocations, data center projects, cloud migrations, and technology refresh programs for organizations across Japan.',
  },
  {
    q: 'How do you assign project managers?',
    a: 'We match project managers based on technical background, project complexity, and industry experience. Every project manager holds recognized certifications and has managed enterprise-scale information technology projects.',
  },
  {
    q: 'Do you work outside Tokyo?',
    a: 'Yes. Our consultants travel across Japan, and we offer remote project management support for distributed teams and multi-site business deployments.',
  },
  {
    q: 'What tools do you use for project tracking?',
    a: 'We use industry-standard solutions including MS Project, Jira, and Asana. We adapt to your preferred platform to ensure seamless integration with existing business workflows.',
  },
  {
    q: 'What size projects do you handle?',
    a: 'We support projects ranging from 20-seat office moves to enterprise-wide infrastructure transformations spanning multiple sites and hundreds of endpoints.',
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

export default function ITConsultingProjectManagementClient() {
  return (
    <main className="bg-[#F7F7FC]">
      <h1 className="sr-only">IT Consulting Services & Project Management for Enterprise Operations</h1>
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/it-consulting-project-management/hero-banner.avif"
            alt="AKRIN IT Consulting & Project Management"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">IT Consulting</span>
          </div>
          <p className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            IT Consulting Services &amp; Project Management for Enterprise Operations
          </p>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            End-to-end IT consulting services that align information technology strategy with business goals — from infrastructure builds to cloud migrations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact?service=it-consulting"
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

      {/* ── Desktop hero ── */}
      <section id="hero-desktop" className="relative hidden h-[500px] overflow-hidden bg-[#02304F] lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/it-consulting-project-management/hero-banner.avif"
            alt="AKRIN IT Consulting & Project Management"
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
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">IT Consulting</span>
              </div>
              <p className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                IT Consulting Services &amp; Project Management for Enterprise Operations
              </p>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                AKRIN delivers IT consulting services that align information technology strategy with business goals. Our consultants and project managers work with enterprises across Japan to plan, execute, and manage complex IT projects.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact?service=it-consulting"
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
        items={sectionItems}
      />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── 01 OVERVIEW — Two-column with project lifecycle steps ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Overview" />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      Information technology project management solutions
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Our project management practice covers the full lifecycle of information technology initiatives. Whether you need a dedicated project manager for a targeted rollout or a team of consultants for enterprise-wide transformation, we provide solutions tailored to your business requirements.
                    </p>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Every engagement starts with a clear scope, defined milestones, and a dedicated project manager who ensures on-time, on-budget delivery. Our team handles scheduling, resource allocation, and stakeholder communication so your business operations continue without disruption.
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A0B19]/50">Project Lifecycle</h3>
                      <div className="mt-6 space-y-0">
                        {[
                          { num: '01', label: 'Requirements gathering & scope definition' },
                          { num: '02', label: 'Project planning & resource allocation' },
                          { num: '03', label: 'Vendor coordination & risk management' },
                          { num: '04', label: 'Execution & stakeholder communication' },
                          { num: '05', label: 'Post-implementation validation' },
                        ].map((step, idx) => (
                          <div key={step.num} className="relative flex items-start gap-4 py-3">
                            {idx < 4 && (
                              <div className="absolute left-[15px] top-[40px] h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#0066CC]/40 to-[#0066CC]/10" />
                            )}
                            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-xs font-bold text-white">
                              {step.num}
                            </span>
                            <span className="pt-1 text-sm leading-relaxed text-[#2D2E3F]/80">{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 02 SERVICES — 2×2 cards with highlight chips ── */}
          <section id="services">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <SectionLabel label="What We Deliver" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  IT consulting services across the project lifecycle
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  We deliver end-to-end solutions for every information technology dependency — from VoIP and video conferencing to security systems and cloud connectivity.
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                  {serviceCards.map((card) => (
                    <div
                      key={card.title}
                      className="group relative overflow-hidden rounded-2xl border border-[#E2E5EF] bg-white p-8 transition-all duration-300 hover:border-[#0066CC]/30 hover:shadow-lg hover:shadow-[#0066CC]/5"
                    >
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0066CC]/[0.04] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#0066CC]/[0.06]" />
                      <div className="relative">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066CC]/10 ring-1 ring-[#0066CC]/20">
                          <card.icon className="h-6 w-6 text-[#0066CC]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#0A0B19]">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#0A0B19]/60">{card.desc}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {card.highlights.map((h) => (
                            <span
                              key={h}
                              className="rounded-full border border-[#E2E5EF] bg-[#FAFAFC] px-3 py-1 text-xs text-[#2D2E3F]/70"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 03 WHY AKRIN — Metrics-style cards ── */}
          <section id="why-akrin">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="Why AKRIN" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    Why organizations choose AKRIN
                  </h2>
                  <p className="mt-4 max-w-3xl text-[15px] leading-[1.75] text-white/60">
                    Our approach combines deep information technology expertise with proven project management methodology.
                  </p>

                  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {whyMetrics.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0B1F3A]"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066CC]/20 ring-1 ring-[#0066CC]/30">
                            <item.icon className="h-4 w-4 text-[#0066CC]" />
                          </div>
                          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0066CC]">
                            {item.metric}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 04 FAQ — Two-column accordion ── */}
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
                      Common questions about our IT consulting services and project management.
                    </p>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <FAQAccordion />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Related Blog ── */}
          <section className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="border-t border-[#E2E5EF] py-10">
              <p className="text-[13px] font-medium uppercase tracking-widest text-[#6B6D7C]/60">Related Guide</p>
              <h3 className="mt-2 text-[22px] font-light tracking-[-0.01em] text-[#0A0B19]">
                Office Move IT Support Japan: How to Minimize Downtime
              </h3>
              <p className="mt-3 max-w-3xl text-[15px] leading-[1.6] text-[#6B6D7C]">
                A practical guide to IT relocation planning in Japan — covering network migration, vendor coordination, and business continuity during office moves.
              </p>
              <Link
                href="/blog/office-move-it-support-japan"
                className="mt-4 inline-flex items-center gap-1 text-[14px] font-normal text-[#0066CC] transition-colors hover:text-[#0052A3]"
              >
                Read the full guide
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
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
                      backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0,102,204,0.3), transparent 50%)',
                    }}
                  />
                  <div className="relative px-8 py-12 text-center sm:px-12 sm:py-14">
                    <h2 className="font-serif text-2xl font-light tracking-[-0.04em] text-white md:text-3xl">
                      Start your next IT project
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.7] text-white/60">
                      Share your project requirements and we will deliver a structured plan — scope, timeline, resource allocation, and cost estimate.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/contact?service=it-consulting"
                        className="inline-flex items-center justify-center rounded-full bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0052A3]"
                      >
                        Schedule Consultation
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
