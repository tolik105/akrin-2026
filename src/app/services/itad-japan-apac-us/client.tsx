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
  { id: 'overview', label: 'OUTCOMES', num: '01' },
  { id: 'services', label: 'SERVICES', num: '02' },
  { id: 'compliance', label: 'COMPLIANCE', num: '03' },
  { id: 'coverage', label: 'COVERAGE', num: '04' },
  { id: 'process', label: 'PROCESS', num: '05' },
  { id: 'equipment', label: 'EQUIPMENT', num: '06' },
  { id: 'assurance', label: 'ASSURANCE', num: '07' },
  { id: 'faq', label: 'FAQ', num: '08' },
]

const outcomes = [
  {
    icon: ShieldCheckIcon,
    title: 'Secure chain-of-custody',
    desc: 'Labeled handling, sealed packaging, and documented hand-offs.',
  },
  {
    icon: FingerPrintIcon,
    title: 'Data erasure service you can prove',
    desc: 'Verified erasure and/or physical destruction with serial-level evidence aligned to NIST SP 800-88 Rev.1 — covering PCs, laptops, and servers.',
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Value recovery',
    desc: 'Grading, repair assessment, refurbishment, and resale reporting for eligible devices.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Compliant recycling and disposal',
    desc: 'Environmentally sound processing supporting circular economy goals.',
  },
  {
    icon: DocumentCheckIcon,
    title: 'Audit-ready documentation',
    desc: 'Serialized inventory, certificates of data erasure, and disposition summary for audits and regulatory requests.',
  },
]

const services = [
  {
    icon: TruckIcon,
    shortTitle: 'Logistics',
    title: 'Secure decommissioning and logistics',
    desc: 'We arrange on-site pickup and collection, asset labeling with serial capture, secure packaging (tamper-evident where expected), and controlled transportation from your office or in-house data center.',
    hasLogos: false,
  },
  {
    icon: ServerStackIcon,
    shortTitle: 'Data Erasure',
    title: 'Data erasure and destruction',
    desc: 'Software-based data erasure aligned to NIST SP 800-88 Rev.1 (Clear, Purge, Destroy). Physical destruction — shredding or crushing — for high-risk media. You receive a Certificate of Data Destruction (CODD) or Certificate of Data Erasure with media serials and logs. Proper data erasure service mitigates data leakage risk — companies face limited defenses if customer information is not erased. In recent years, demand for certified data erasure has grown across regulated industries.',
    hasLogos: true,
  },
  {
    icon: CpuChipIcon,
    shortTitle: 'Remarketing',
    title: 'Asset management, refurbishment and remarketing',
    desc: 'Function testing and grading of PCs, servers, and peripherals. Refurbishment pathways including cosmetic repair, and value recovery reporting. This asset management approach processes electronic waste responsibly while maximizing returns — from mobile devices to storage arrays.',
    hasLogos: false,
  },
  {
    icon: ArrowPathIcon,
    shortTitle: 'Recycling',
    title: 'Compliant recycling and disposal',
    desc: 'Material separation and responsible downstream disposal. Partners adhere to strict standards like R2v3 to ensure responsible processing. Future-proof your brand by demonstrating compliant disposal practices.',
    hasLogos: false,
  },
  {
    icon: ClipboardDocumentListIcon,
    shortTitle: 'Reporting',
    title: 'Reporting and certificates',
    desc: 'Serialized inventory (CSV/PDF), chain-of-custody log, certificates for data erasure or recycling, and final summary report covering quantities, outcomes, and exceptions.',
    hasLogos: false,
  },
]

const complianceItems = [
  { title: 'Waste treatment', desc: "Aligned with Japan's waste management framework." },
  { title: 'Industrial waste tracking', desc: 'Including manifest-style workflows.' },
  { title: 'Downstream partner vetting', desc: 'Covering licenses and outcomes.' },
  { title: 'Data protection alignment', desc: 'With information security management systems to minimize exposure.' },
  { title: 'Exception handling', desc: 'For locked devices and damaged media.' },
]

const processSteps = [
  { step: '1', title: 'Scope and risk alignment', desc: 'Asset list review, data erasure requirements, site constraints, timeline.' },
  { step: '2', title: 'Pickup and custody setup', desc: 'Labeling, packaging, access rules, handoff documentation.' },
  { step: '3', title: 'Processing', desc: 'Data erasure and/or physical destruction, remarketing testing, recycling.' },
  { step: '4', title: 'Reporting', desc: 'Inventory reconciliation, exceptions, certificates of data erasure, summary report.' },
  { step: '5', title: 'Closeout', desc: 'Final audit pack delivered; value recovery results reported if applicable.' },
]

const equipmentItems = [
  { icon: ComputerDesktopIcon, label: 'PCs, laptops, desktops, and workstations' },
  { icon: ServerStackIcon, label: 'Servers, storage arrays, NAS, and SAN' },
  { icon: CircleStackIcon, label: 'HDD, SSD, and removable media' },
  { icon: SignalIcon, label: 'Network gear including switches, routers, and firewalls' },
  { icon: DeviceTabletIcon, label: 'Monitors, peripherals, docks, and accessories' },
]

const assuranceItems = [
  { title: 'NIST SP 800-88 Rev.1-aligned data erasure', desc: 'Covering method selection and verification.' },
  { title: 'Chain-of-custody', desc: 'Designed for audits and security reviews.' },
  { title: 'Documented exceptions', desc: 'For failed erasure, locked, or damaged media.' },
  { title: 'Certified tools', desc: 'Including Blancco and BitRaser for verified data erasure, with R2v3-certified partners for downstream processing.' },
]

const faqItems = [
  {
    q: 'How fast can you arrange a pickup?',
    a: 'Tokyo metro pickups within a few business days. For secure facilities, we align to your change calendar and access rules.',
  },
  {
    q: 'Can you destroy data on-site?',
    a: 'Yes. On-site data erasure and destruction is available for immediate risk removal. Secure facility processing with certificates is typically more cost-effective.',
  },
  {
    q: 'What about value recovery?',
    a: 'Eligible devices are graded for refurbishment and remarketing after verified data erasure, with clear reporting on reuse versus recycling outcomes.',
  },
  {
    q: 'Do you handle multi-country projects?',
    a: 'Yes. One project manager, consistent templates, and consolidated reporting across Japan, APAC, and the US.',
  },
  {
    q: 'Can you work in secure facilities?',
    a: 'Yes. We follow your security rules and design the chain-of-custody steps to support audits.',
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

export default function ITADPageClient() {
  return (
    <main className="bg-[#F7F7FC]">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/itad/itad.avif"
            alt="AKRIN ITAD Services"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">ITAD Services</span>
          </div>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            ITAD Japan: Secure IT Asset Disposition Services (Japan / APAC / US)
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            Secure, end-to-end IT asset retirement — from certified data erasure to compliant disposal and sustainable device recovery.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact?service=itad"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              Start Your ITAD Project
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
            src="/images/banners/itad/itad.avif"
            alt="AKRIN ITAD Services"
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
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">ITAD Services</span>
              </div>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                ITAD Japan: Secure IT Asset Disposition Services (Japan / APAC / US)
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                Secure, end-to-end IT asset retirement — from certified data erasure to compliant disposal and sustainable device recovery. Our ITAD services help businesses and Japanese subsidiaries manage risk, maintain compliance with strict standards including information security management systems, and recover value from retired equipment. As technology refresh cycles shorten, an increasing number of companies demand reliable data erasure service to protect against information leaks.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact?service=itad"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  Start Your ITAD Project
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
        items={itadSectionItems}
      />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── 01 OUTCOMES — Light section with icon feature list ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="What You Get" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">What you get</h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  Every ITAD Japan project delivers complete chain of custody — from secure collection through certified data erasure to final asset disposition reporting.
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
                        alt="Hard drive after physical punch destruction"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 02 SERVICES — Tabbed interface ── */}
          <section id="services" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="ITAD Services" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  ITAD services we provide
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
                                alt="NIST 800-88 Compliance"
                                width={80}
                                height={80}
                                className="h-14 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                              />
                              <Image
                                src="/images/banners/itad/r2-logo.webp"
                                alt="R2v3 Certified"
                                width={80}
                                height={80}
                                className="h-14 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                              />
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="/images/banners/itad/blancco-logo.svg"
                                alt="Blancco Certified"
                                className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                              />
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src="/images/banners/itad/bitraser-logo.svg"
                                alt="BitRaser Certified"
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

          {/* ── Why ITAD — Compact stats callout ── */}
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
              <div className="text-center">
                <SectionLabel label="Why ITAD" />
                <h2 className="mx-auto font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  Why ITAD matters
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base/7 text-[#0A0B19]/70">
                  IT asset disposition is increasingly important for businesses in regulated markets. Information technology assets hold sensitive data requiring professional disposal.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
                {[
                  { keyword: 'APPI', title: 'Reduce compliance risk', desc: 'Documented data erasure and auditable chain-of-custody protect you from regulatory exposure. Business operators in Japan must prevent information leaks as required by the APPI.' },
                  { keyword: 'ROI', title: 'Recover hidden value', desc: 'Eligible assets are graded, refurbished, and remarketed — turning retired IT into measurable returns.' },
                  { keyword: 'ESG', title: 'Meet ESG commitments', desc: 'Proper electronic waste processing supports sustainability reporting and ESG initiatives.' },
                  { keyword: '1 PM', title: 'Simplify IT retirement', desc: 'One partner manages pickup, data erasure service, recycling, and reporting — so your team stays focused on operations.' },
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

          {/* ── 03 COMPLIANCE — Timeline with blue accent line ── */}
          <section id="compliance" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <SectionLabel label="Compliance" />
                    <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      Japan compliance snapshot
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      ITAD projects in Japan must navigate specific regulatory requirements across waste management, data protection, and environmental compliance.
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

          {/* ── 04 COVERAGE — Cards with colored top borders + badges ── */}
          <section id="coverage" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="text-center">
                  <SectionLabel label="Coverage" />
                  <h2 className="mx-auto font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                    Coverage: Japan / APAC / United States
                  </h2>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                  <article className="relative overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-white p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0066CC]" />
                    <span className="inline-flex items-center rounded-full bg-[#0066CC]/10 px-3 py-1 text-xs font-semibold text-[#0066CC]">
                      Primary
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A0B19]">Japan</h3>
                    <ul className="mt-4 space-y-2 text-sm/7 text-[#0A0B19]/80">
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />Tokyo metro and nationwide coordination for ITAD Japan projects</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />Office relocations, warehouse clearouts, and data center refresh</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />Bilingual Japanese and English</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/40" />Service available for any Japanese subsidiary requiring data erasure</li>
                    </ul>
                  </article>

                  <article className="relative overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-white p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0A0B19]/20" />
                    <span className="inline-flex items-center rounded-full bg-[#0A0B19]/5 px-3 py-1 text-xs font-semibold text-[#0A0B19]/60">
                      Regional
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A0B19]">APAC</h3>
                    <ul className="mt-4 space-y-2 text-sm/7 text-[#0A0B19]/80">
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />Regional coordination through vetted partners across key markets including Singapore</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />Standardized templates with consolidated reporting for HQ procurement</li>
                    </ul>
                  </article>

                  <article className="relative overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-white p-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0A0B19]/20" />
                    <span className="inline-flex items-center rounded-full bg-[#0A0B19]/5 px-3 py-1 text-xs font-semibold text-[#0A0B19]/60">
                      Coordination
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A0B19]">United States</h3>
                    <ul className="mt-4 space-y-2 text-sm/7 text-[#0A0B19]/80">
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />Support for US-side retirement programs and multi-region projects</li>
                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0B19]/30" />Documentation aligned to enterprise audit expectations</li>
                    </ul>
                  </article>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 05 PROCESS — Horizontal step flow with connected dots ── */}
          <section id="process" className="bg-gradient-to-b from-[#F7F7FC] to-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="text-center">
                  <SectionLabel label="Process" />
                  <h2 className="mx-auto font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">How the process works</h2>
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

          {/* ── 06 EQUIPMENT — Icon card grid with hover ── */}
          <section id="equipment" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Equipment" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">Equipment we handle</h2>

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

          {/* ── 07 ASSURANCE — Split card with divider + logo grid ── */}
          <section id="assurance" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Assurance" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">Compliance &amp; assurance</h2>

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
                        If your procurement requires specific certifications or ISO standards, we confirm availability per project.
                      </p>
                    </div>

                    <div className="flex items-center justify-center bg-[#FAFAFC] p-8 lg:p-12">
                      <div className="grid grid-cols-2 gap-8">
                        <Image
                          src="/images/banners/itad/nist-logo.webp"
                          alt="NIST 800-88 Compliance"
                          width={100}
                          height={100}
                          className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                        <Image
                          src="/images/banners/itad/r2-logo.webp"
                          alt="R2v3 Certified"
                          width={100}
                          height={100}
                          className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/banners/itad/blancco-logo.svg"
                          alt="Blancco Certified"
                          className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/banners/itad/bitraser-logo.svg"
                          alt="BitRaser Certified"
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
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">Frequently asked questions</h2>
                <p className="mt-4 max-w-2xl text-base/7 text-[#0A0B19]/70">
                  Common questions about our ITAD services.{' '}
                  <Link href="/contact" className="text-[#0066CC] underline decoration-[#0066CC]/30 underline-offset-4 hover:decoration-[#0066CC]">
                    Contact us
                  </Link>{' '}
                  for anything else.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0A0B19]/50">Related Guide</p>
            <h3 className="mt-2 font-serif text-2xl font-light tracking-[-0.04em] text-[#0A0B19]">
              Data Erasure Standards: The Complete Guide
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#0A0B19]/70">
              Understand NIST 800-88, DoD 5220.22-M, cryptographic erasure, and how to build a data destruction policy that keeps your organization compliant.
            </p>
            <Link
              href="/blog/data-erasure-standards"
              className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-[#0A0B19] underline decoration-[#0A0B19]/30 underline-offset-4 transition-colors hover:decoration-[#0A0B19]"
            >
              Read the full guide →
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
                  Ready to decommission with confidence?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                  Send your asset list and we will return a structured ITAD plan — recommended methods, logistics approach, deliverables, timeline, and cost estimate.
                </p>
              </div>
              <div className="mt-8 flex shrink-0 flex-wrap gap-4 lg:mt-0">
                <Link
                  href="/contact?service=itad"
                  className="inline-flex items-center justify-center rounded-md bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052A3]"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
