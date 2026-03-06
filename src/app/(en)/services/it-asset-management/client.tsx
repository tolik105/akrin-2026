'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionNav } from '@/components/SectionNav'
import { RevealOnScroll } from '@/components/RevealOnScroll'

/* ─────────────────── data ─────────────────── */

const services = [
  {
    num: '01',
    title: 'Asset Discovery & Detailed Inventory',
    body: 'Comprehensive asset discovery across all sites and operating units to build a validated baseline inventory. Identifies existing assets including physical assets, cloud assets, and untracked IT assets with full ownership mapping.',
  },
  {
    num: '02',
    title: 'Software Asset Management',
    body: 'Optimize software licenses, eliminate redundant licensing agreements, and reduce costs from over-provisioning. Audit software systems, identify unused licenses, and implement controls to manage software assets effectively.',
  },
  {
    num: '03',
    title: 'Asset Lifecycle Management',
    body: 'Govern each stage of the IT asset lifecycle — from asset acquisition and deployment through maintenance, refresh planning, and retirement with structured controls and role-based accountability.',
  },
  {
    num: '04',
    title: 'ITAM Platform Configuration',
    body: 'Configure ITAM software platforms to match your operational workflows, integrating with ticketing, procurement, and IT service management systems including CMDB setup and lifecycle workflow design.',
  },
  {
    num: '05',
    title: 'Cloud Asset Management',
    body: 'Track virtual infrastructure, SaaS subscriptions, and cloud-based IT assets alongside on-premises inventory for complete visibility across hybrid environments.',
  },
  {
    num: '06',
    title: 'Compliance & Risk Reduction',
    body: 'Governance controls supporting audit readiness to reduce risk from security vulnerabilities, non-compliant software, and incomplete records with evidence-friendly reporting.',
  },
]

const processSteps = [
  {
    phase: 'Phase 1',
    timeline: 'Week 1–2',
    title: 'Discovery & Baseline',
    description:
      'Establish a validated baseline through automated asset discovery and endpoint reconciliation. Manual verification covers data center equipment, physical assets, and offline devices.',
    deliverable: 'Validated baseline inventory with ownership map',
  },
  {
    phase: 'Phase 2',
    timeline: 'Week 2–3',
    title: 'Platform Configuration',
    description:
      'Configure ITAM platform with lifecycle workflows, role-based permissions, and integrations with existing IT services and procurement systems.',
    deliverable: 'Configured platform with connected core workflows',
  },
  {
    phase: 'Phase 3',
    timeline: 'Continuous',
    title: 'Ongoing Optimization',
    description:
      'Monitor lifecycle health with monthly governance reviews, quarterly optimization recommendations, and annual refresh planning to control spending.',
    deliverable: 'Continuous optimization with executive reporting',
  },
]

const whyItems = [
  {
    title: 'Bilingual Operations',
    body: 'English and Japanese execution across all IT asset management services, reporting, and governance.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
  },
  {
    title: 'Lifecycle + ITAD Integration',
    body: 'Asset lifecycle management and secure IT asset disposition connected in one accountable operating model.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
      </svg>
    ),
  },
  {
    title: 'Enterprise ITAM Processes',
    body: 'Controls designed for distributed environments supporting fixed asset management, inventory management, and comprehensive asset tracking.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Actionable Reporting',
    body: 'Asset data and metrics tied to decisions around budget, risk, and refresh planning for informed decisions.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
]

const faqItems = [
  {
    q: 'What is IT asset management and why is it important?',
    a: 'IT asset management is the process of tracking, managing, and optimizing IT assets throughout their entire lifecycle. It helps organizations reduce costs, ensure compliance, improve operational efficiency, and make informed decisions about technology investments.',
  },
  {
    q: 'What types of IT assets does AKRIN manage?',
    a: 'AKRIN manages all categories of IT assets including endpoints, servers, network equipment, mobile devices, peripherals, software licenses, cloud assets, and other IT assets across the entire asset lifecycle.',
  },
  {
    q: 'How does ITAM software integrate with existing systems?',
    a: 'ITAM software integrates with core IT service management platforms, ticketing systems, procurement tools, and directory services. The configuration management database serves as the central repository connecting all asset information.',
  },
  {
    q: 'Can AKRIN support multi-location operations in Japan?',
    a: 'Yes. Our IT asset management process supports distributed offices, remote users, and centralized reporting across Japan. Bilingual service delivery ensures seamless operations management for both Japanese and international stakeholders.',
  },
  {
    q: 'How does asset lifecycle management connect to ITAD?',
    a: 'Asset lifecycle management naturally transitions into IT asset disposition when assets reach end-of-life. AKRIN connects these workflows so retirement, secure data destruction, and compliance evidence are managed in sequence.',
  },
  {
    q: 'What reporting and asset tracking is provided?',
    a: 'We provide lifecycle, utilization, compliance, and optimization reporting tailored for IT leadership and business stakeholders. Our asset tracking systems deliver up-to-date information on every managed IT asset.',
  },
]

const sectionItems = [
  { id: 'overview', label: 'OVERVIEW', num: '01' },
  { id: 'what-is-itam', label: 'WHAT IS ITAM', num: '02' },
  { id: 'services', label: 'SERVICES', num: '03' },
  { id: 'process', label: 'PROCESS', num: '04' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '05' },
  { id: 'faq', label: 'FAQ', num: '06' },
]

/* ─────────────────── FAQ accordion ─────────────────── */

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <dl className="divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i} className="py-5 first:pt-0 last:pb-0">
          <dt>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-start justify-between text-left"
            >
              <span className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-sm text-[#0066CC]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-semibold text-white">
                  {item.q}
                </span>
              </span>
              <span className="ml-4 mt-1 flex-shrink-0">
                <svg
                  className={`h-5 w-5 text-white/60 transition-transform ${openIndex === i ? 'rotate-45' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
          </dt>
          {openIndex === i && (
            <dd className="mt-3 pl-10 text-sm/7 text-white/70">{item.a}</dd>
          )}
        </div>
      ))}
    </dl>
  )
}

/* ─────────────────── main component ─────────────────── */

export function ItAssetManagementClient() {
  return (
    <main className="overflow-x-clip">
      <h1 className="sr-only">IT Asset Management Services for Complete Lifecycle Control</h1>
      {/* ── MOBILE HERO ── */}
      <section className="relative lg:hidden">
        <div className="relative min-h-[520px] bg-[#02304F]">
          <Image
            src="/images/banners/it-asset-management/it-asset-management.avif"
            alt="IT Asset Management services by AKRIN"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 20%, rgba(2,48,79,0.4) 40%, rgb(2,48,79) 58%)',
            }}
          />
          <div className="relative flex min-h-[520px] flex-col justify-end px-6 pb-10">
            <div className="flex items-center gap-2 text-xs tracking-widest text-white/60">
              <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
              <span className="font-mono uppercase">IT Asset Management</span>
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              IT Asset Management Services for Complete Lifecycle Control
            </p>
            <p className="mt-4 text-base/7 text-white/80">
              Full visibility over every IT asset — from procurement through the entire asset lifecycle to secure retirement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F] shadow-sm hover:bg-white/90"
              >
                Schedule Consultation
              </a>
              <Link
                href="/services"
                className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESKTOP HERO ── */}
      <section className="relative hidden lg:block">
        <div className="relative h-[500px]">
          <Image
            src="/images/banners/it-asset-management/it-asset-management.avif"
            alt="IT Asset Management services by AKRIN"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 35%, rgba(2,48,79,0.85) 55%, rgba(2,48,79,0.4) 75%, transparent 90%)',
            }}
          />
          <div className="relative mx-auto flex h-full max-w-[1047px] items-center px-6 lg:px-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs tracking-widest text-white/60">
                <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
                <span className="font-mono uppercase">IT Asset Management</span>
              </div>
              <p className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                IT Asset Management Services for Complete Lifecycle Control
              </p>
              <p className="mt-5 text-lg/8 text-white/80">
                Full visibility over every IT asset — from procurement through the entire asset lifecycle to secure retirement.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F] shadow-sm hover:bg-white/90"
                >
                  Schedule Consultation
                </a>
                <Link
                  href="/services"
                  className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION NAV RIBBON ── */}
      <SectionNav items={sectionItems} variant="ribbon" />

      {/* ── BODY ── */}
      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── OVERVIEW ── */}
          <section id="overview" className="py-20 sm:py-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-5">
                  {/* left text col — 3/5 */}
                  <div className="lg:col-span-3">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                      Asset Visibility &amp; Control
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                      Manage every IT asset decision with clear operational control
                    </h2>
                    <div className="mt-8 space-y-5 text-base/7 text-[#2D2E3F]">
                      <p>
                        AKRIN delivers enterprise IT asset management services that give organizations full visibility over every IT asset — from procurement through the entire asset lifecycle to secure retirement. Our ITAM processes combine asset tracking, lifecycle management, and compliance governance into a unified service management platform built for multi-site operations across Japan.
                      </p>
                      <p>
                        Whether you need to manage assets across distributed offices, optimize software licenses, or streamline IT service management workflows, AKRIN provides the asset management solutions your IT team needs to reduce costs, mitigate risks, and make informed decisions about your technology investments.
                      </p>
                    </div>
                  </div>
                  {/* right stats card — 2/5 */}
                  <div className="lg:col-span-2">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-6">
                      <h3 className="text-lg font-semibold text-[#0A0B19]">Key Outcomes</h3>
                      <div className="mt-6 space-y-6">
                        <div>
                          <p className="text-4xl font-bold text-[#0066CC]">20–35%</p>
                          <p className="mt-1 text-sm text-[#6B6D7C]">Cost reduction through lifecycle control</p>
                        </div>
                        <div className="border-t border-[#E2E5EF] pt-6">
                          <p className="text-4xl font-bold text-[#0066CC]">100%</p>
                          <p className="mt-1 text-sm text-[#6B6D7C]">Asset visibility across managed environments</p>
                        </div>
                        <div className="border-t border-[#E2E5EF] pt-6">
                          <p className="text-4xl font-bold text-[#0066CC]">24 hr</p>
                          <p className="mt-1 text-sm text-[#6B6D7C]">Standard onboarding for initial inventory</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── WHAT IS ITAM ── */}
          <section id="what-is-itam" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                  <div className="flex items-center gap-2 text-xs tracking-widest text-white/60">
                    <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
                    <span className="font-mono uppercase">Understanding ITAM</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    What Is IT Asset Management?
                  </h2>
                  <div className="mt-6 grid gap-8 lg:grid-cols-2">
                    <div className="space-y-4 text-sm/7 text-white/80">
                      <p>
                        IT asset management (ITAM) is the practice of tracking, managing, and optimizing the entire lifecycle of IT assets within an organization. This includes hardware assets such as servers, laptops, mobile devices, and network equipment, as well as software asset management for applications, software licenses, and licensing agreements.
                      </p>
                      <p>
                        Effective asset management ensures that IT departments maintain up-to-date information about every asset in their inventory, enabling better operations management and asset lifecycle management decisions.
                      </p>
                    </div>
                    <div className="space-y-4 text-sm/7 text-white/80">
                      <p>
                        A well-implemented IT asset management process integrates with the Information Technology Infrastructure Library (ITIL) framework, connecting asset and configuration management with a configuration management database (CMDB) to provide a single source of truth.
                      </p>
                      <p>
                        ITAM software helps organizations track asset data from asset acquisition through deployment, maintenance, and eventual disposition — covering the entire lifecycle of each IT asset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── SERVICES ── */}
          <section id="services" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                  What We Deliver
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                  IT Asset Management Services We Provide
                </h2>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <article
                      key={s.num}
                      className="group relative rounded-2xl border border-[#E2E5EF] bg-white p-6 transition-all hover:border-[#0066CC]/30 hover:shadow-lg"
                    >
                      <span className="font-mono text-3xl font-bold text-[#0066CC]/15 transition-colors group-hover:text-[#0066CC]/30">
                        {s.num}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-[#0A0B19]">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm/7 text-[#6B6D7C]">{s.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── PROCESS ── */}
          <section id="process" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl bg-[#FAFAFC] border border-[#E2E5EF] p-8 sm:p-12">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                    How It Works
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                    The IT Asset Management Process
                  </h2>
                  <div className="mt-10 grid gap-8 lg:grid-cols-3">
                    {processSteps.map((step, i) => (
                      <div key={i} className="relative">
                        {/* connector line */}
                        {i < processSteps.length - 1 && (
                          <div className="absolute right-0 top-8 hidden h-0.5 w-8 translate-x-full bg-[#0066CC]/20 lg:block" />
                        )}
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-sm font-bold text-white">
                            {i + 1}
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6D7C]">
                              {step.phase} · {step.timeline}
                            </p>
                          </div>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#0A0B19]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm/7 text-[#6B6D7C]">
                          {step.description}
                        </p>
                        <p className="mt-4 rounded-lg bg-white border border-[#E2E5EF] px-4 py-2 text-xs font-medium text-[#0A0B19]">
                          ✓ {step.deliverable}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── WHY AKRIN ── */}
          <section id="why-akrin" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                    Why AKRIN
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A0B19] sm:text-4xl">
                    Why Choose AKRIN for IT Asset Management
                  </h2>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {whyItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-5 rounded-2xl border border-[#E2E5EF] bg-white p-6 transition-all hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0066CC]/10 text-[#0066CC]">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#0A0B19]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm/7 text-[#6B6D7C]">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── INDUSTRIES (compact) ── */}
          <section className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <h2 className="text-2xl font-bold tracking-tight text-[#0A0B19] sm:text-3xl">
                  Industries We Support
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#6B6D7C]">
                  AKRIN provides IT asset management services across financial services with governed lifecycle controls, healthcare and life sciences with asset traceability, manufacturing with multi-site inventory management, retail with store and back-office standardization, and technology and telecom with rapid lifecycle control for high-change environments.
                </p>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── FAQ (dark) ── */}
          <section id="faq" className="pb-20 sm:pb-24">
            <RevealOnScroll>
              <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                  <div className="grid gap-10 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                      <p className="text-sm font-semibold uppercase tracking-widest text-[#0066CC]">
                        FAQ
                      </p>
                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Frequently Asked Questions
                      </h2>
                      <p className="mt-4 text-sm/7 text-white/60">
                        Common questions about IT asset management services, ITAM processes, and lifecycle governance.
                      </p>
                    </div>
                    <div className="lg:col-span-3">
                      <FAQAccordion items={faqItems} />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Related Blog ── */}
          <section className="mx-auto max-w-6xl">
            <div className="border-t border-[#E2E5EF] py-10">
              <p className="text-[13px] font-medium uppercase tracking-widest text-[#6B6D7C]/60">Related Guide</p>
              <h3 className="mt-2 text-[22px] font-light tracking-[-0.01em] text-[#0A0B19]">
                Hardware Asset Management in Tokyo: Lifecycle Best Practices
              </h3>
              <p className="mt-3 max-w-3xl text-[15px] leading-[1.6] text-[#6B6D7C]">
                Learn how to manage hardware assets throughout their lifecycle in Japan — from procurement and tracking to secure disposal and compliance.
              </p>
              <Link
                href="/blog/hardware-asset-management-tokyo"
                className="mt-4 inline-flex items-center gap-1 text-[14px] font-normal text-[#0066CC] transition-colors hover:text-[#0052A3]"
              >
                Read the full guide
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="pb-20 sm:pb-24">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-3xl bg-[#02304F] px-8 py-12 text-center sm:px-12">
                <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Start Managing Your IT Assets with Confidence
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base/7 text-white/70">
                  Speak with AKRIN to build a practical IT asset management program that covers your entire asset lifecycle — aligned to your business operations in Japan.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <a
                    href="/contact"
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F] shadow-sm hover:bg-white/90"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
