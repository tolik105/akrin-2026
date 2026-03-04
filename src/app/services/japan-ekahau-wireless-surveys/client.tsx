'use client'

import Image from 'next/image'
import { useState } from 'react'
import sidekickImage from '../../../../Sidekick-2.avif'
import sidekickTransparentImage from '@/assets/Ekahau-Sidekick2-Transparent.avif'
import spectrumAnalyzerImage from '../../../../spectrum-analyzer.avif'
import wifiHeatMapImage from '../../../../wifi-coverage-heat-map.avif'
import wirelessSignalMapImage from '../../../../wireless-signal-heat-map.avif'
import flukeReportImage from '../../../../fluke-report.avif'
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
  { id: 'what-is', label: 'ABOUT', num: '02' },
  { id: 'survey-types', label: 'SURVEYS', num: '03' },
  { id: 'cabling', label: 'CABLING', num: '04' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '05' },
  { id: 'process', label: 'PROCESS', num: '06' },
  { id: 'industries', label: 'INDUSTRIES', num: '07' },
  { id: 'faq', label: 'FAQ', num: '08' },
]

const surveyTypes = [
  {
    title: 'Predictive Survey',
    subtitle: 'Pre-Deployment Wi-Fi Design',
    description:
      'Ekahau AI Pro predictive modeling to design access point placement and coverage before installation. Floor plan import, wall material mapping, and signal simulation.',
    outputs: [
      'Optimized access point placement recommendations',
      'Coverage and signal strength heatmaps',
      'Bill of materials with AP counts',
      'Channel and power configuration plan',
    ],
  },
  {
    title: 'Active Site Survey',
    subtitle: 'Post-Deployment Validation',
    description:
      'On site data collection with the Ekahau Sidekick to validate throughput, signal strength, noise level, latency, and roaming across your live wifi network.',
    outputs: [
      'Real-world signal strength and SNR heat maps',
      'Throughput and latency measurements',
      'Roaming analysis and handoff validation',
      'Dead-zone identification and remediation priorities',
    ],
  },
  {
    title: 'Passive Site Survey',
    subtitle: 'RF Environment Analysis',
    description:
      'Data collection from all nearby wifi networks and RF signals without connecting. Reveals neighboring access points, rogue devices, and rf interference patterns.',
    outputs: [
      'Complete radio frequency landscape visibility',
      'Rogue access point detection',
      'Channel utilization and rf interference mapping',
      'Channel-planning recommendations',
    ],
  },
  {
    title: 'Spectrum Analysis',
    subtitle: 'Deep RF Interference Investigation',
    description:
      'Ekahau Sidekick spectrum capabilities to identify non-wifi interference in the 2.4 GHz, 5 GHz, and 6 GHz bands — microwave ovens, Bluetooth, industrial equipment.',
    outputs: [
      'Non-wifi RF interference source identification',
      'Band utilization analysis (2.4/5/6 GHz)',
      'Interference severity assessment',
      'Actionable mitigation recommendations',
    ],
  },
]

const cablingServices = [
  {
    title: 'FLUKE Cable Testing & Certification',
    subtitle: 'Professional-Grade Verification',
    description:
      'Fluke Networks DSX CableAnalyzer certification for copper (Cat5e–Cat8) and fiber optic. Pass/fail documentation mapped to TIA and ISO requirements.',
  },
  {
    title: 'Cabling Design & Installation',
    subtitle: 'Built Right from the Start',
    description:
      'Structured cabling design, installation, and certification for Cat6, Cat6A, Cat7, Cat8, and fiber — including pathway planning, rack buildouts, and labeling.',
  },
  {
    title: 'Cabling Upgrade & Replacement',
    subtitle: 'Modernize Your Network Foundation',
    description:
      'Phased upgrades from Cat5/Cat5e to Cat6A or fiber, legacy run removal, and full FLUKE recertification to support higher-throughput data rates.',
  },
]

const processSteps = [
  {
    title: 'Discovery & Requirements',
    description: 'Wifi coverage goals, device density, floor plans, and existing network documentation.',
  },
  {
    title: 'Survey Planning',
    description: 'Select survey type(s), prepare Ekahau Sidekick, and map coverage paths for on site data collection.',
  },
  {
    title: 'On-Site Execution',
    description: 'Engineers collect data using the Ekahau Sidekick and Ekahau Survey software across your facility.',
  },
  {
    title: 'Analysis & Reporting',
    description: 'Heat map visualizations, issue maps, and data-driven recommendations for your wifi network.',
  },
  {
    title: 'Validation',
    description: 'Post deployment site survey to confirm your wireless network meets design targets.',
  },
]

const faqItems = [
  {
    q: 'How long does an Ekahau wireless site survey take?',
    a: 'A single-floor office can often be completed in one day. Multi-floor or multi-building facilities require multiple days based on scope and network complexity.',
  },
  {
    q: 'What is the difference between pre deployment and post deployment surveys?',
    a: 'Pre deployment uses predictive modeling to design access point placement before installation. Post deployment validates real-world wifi network performance and data rates after the network is live.',
  },
  {
    q: 'How does the Ekahau Sidekick improve accuracy?',
    a: 'The Ekahau Sidekick is a dedicated wifi site survey device with dual-band radios and spectrum analyzer — collecting signal strength, noise level, rf interference, and channel utilization data simultaneously.',
  },
  {
    q: 'Do I need floor plans for a wifi site survey?',
    a: 'Yes. Accurate floor plans with wall materials significantly improve predictive survey modeling. We can help prepare usable layouts from your existing documentation.',
  },
  {
    q: 'What wifi standards do you support?',
    a: 'Wi-Fi 6, Wi-Fi 6E, and legacy standards. Our Ekahau wireless survey methodology is vendor-neutral, working with any access point brand or model.',
  },
  {
    q: 'Will the wireless survey disrupt current network operations?',
    a: 'No. Active surveys connect to your live wifi network for data collection but do not modify settings. Passive surveys and spectrum analysis collect data without connecting at all. All survey activities are designed to avoid operational disruption.',
  },
  {
    q: 'Is FLUKE cable testing available with wireless surveys?',
    a: 'Yes. We provide FLUKE-certified structured cabling testing alongside wireless site surveys to ensure both wireless and wired infrastructure meet performance standards.',
  },
]

/* ── Helper Components ── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-[#0A0B19]" />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0A0B19]/40">{label}</span>
    </div>
  )
}

function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#F0F1F5] to-[#E8EAF0] ring-1 ring-[#E2E5EF] ${className || ''}`}
    >
      <div className="px-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm">
          <svg
            className="h-5 w-5 text-[#6B6D7C]/40"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 19.5V4.5a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
        <span className="mt-2 block text-[11px] font-medium uppercase tracking-wider text-[#6B6D7C]/40">
          {label}
        </span>
      </div>
    </div>
  )
}

/* ── Main Component ── */

export default function JapanEkahauWirelessSurveysClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-[#F7F7FC]">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src={sidekickImage}
            alt="Ekahau Sidekick wireless site survey measurement device"
            fill
            priority
            className="object-contain object-top p-4 sm:p-6"
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
            <span className="font-medium text-white">Ekahau Wireless Surveys</span>
          </nav>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            Ekahau Wireless Site Survey Services in Japan
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            Data-driven wireless site surveys that identify weak coverage, optimize access point placement, and validate real-world wifi network performance.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact?service=japan-ekahau-wireless-surveys"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              Request a Site Survey
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
        <div className="absolute inset-y-0 right-0 w-[55%]">
          <Image
            src={sidekickImage}
            alt="Ekahau Sidekick wireless site survey measurement device"
            fill
            priority
            className="object-contain object-right p-8"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 35%, rgba(2,48,79,0.95) 45%, rgba(2,48,79,0.7) 60%, rgba(2,48,79,0.3) 75%, rgba(2,48,79,0.1) 90%)',
          }}
        />
        <div className="relative flex h-[500px] items-center">
          <div className="mx-auto w-full max-w-[1047px] px-12">
            <div className="max-w-lg xl:max-w-xl">
              <nav className="mb-4 flex items-center gap-2 text-[15px]">
                <Link href="/services" className="text-white/50 transition-colors hover:text-white/80">Services</Link>
                <span className="text-white/30">&rsaquo;</span>
                <span className="font-medium text-white">Ekahau Wireless Surveys</span>
              </nav>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                Ekahau Wireless Site Survey Services in Japan
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                Professional Wi-Fi site surveys powered by Ekahau AI Pro &amp; Ekahau Sidekick. Data-driven wireless surveys that identify weak coverage, optimize access point placement, and validate real-world wifi network performance.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact?service=japan-ekahau-wireless-surveys"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  Request a Site Survey
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

          {/* ═══ 1. OVERVIEW ═══ */}
          <section id="overview" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  {/* Text — 7 columns */}
                  <div className="lg:col-span-7">
                    <SectionLabel label="Overview" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      Why Every Wifi Network Needs a Professional Site Survey
                    </h2>
                    <div className="mt-6 max-w-3xl text-base/7 text-[#0A0B19]/70">
                      <p>
                        Poor wifi performance disrupts operations, reduces productivity, and exposes critical risk across your network. Whether planning a new wireless deployment, expanding an existing wifi network, or troubleshooting persistent coverage issues, a professional Ekahau wireless survey provides the data needed for confident, evidence-based decisions.
                      </p>
                      <p className="mt-4">
                        At AKRIN, we use Ekahau as the industry-standard platform for wireless site survey planning and assessment. Our engineers combine practical on site field execution with detailed data analysis so your wifi network infrastructure performs as intended — from initial planning through post deployment validation.
                      </p>
                    </div>
                  </div>

                  {/* Image — 5 columns */}
                  <div className="mt-10 lg:col-span-5 lg:mt-0">
                    <div className="overflow-hidden rounded-2xl ring-1 ring-[#E2E5EF] lg:sticky lg:top-32">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={wifiHeatMapImage}
                          alt="WiFi coverage heat map showing signal strength distribution"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="border-t border-[#E2E5EF] bg-[#FAFAFC] px-6 py-3">
                        <p className="text-center text-[11px] font-medium uppercase tracking-wider text-[#6B6D7C]/60">
                          WiFi Coverage Heat Map — Signal Strength Analysis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checklist grid — bento cell pattern */}
                <div className="mt-16 border-t border-[#0A0B19]/[0.06] pt-10">
                  <h3 className="text-lg font-semibold text-[#0A0B19]">What a Wireless Site Survey Identifies</h3>
                  <div className="mt-8 rounded-3xl bg-[#0A0B19]/[0.03] p-1">
                    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        'Signal strength and coverage gaps across floors and zones',
                        'RF interference from neighboring wifi networks and non-wifi sources',
                        'Access point capacity and optimal number for device density',
                        'Noise level issues affecting wifi network data rates',
                        'Roaming problems and weak coverage in transition areas',
                        'Wall materials impacting radio frequency propagation',
                      ].map((item, idx) => (
                        <div key={item} className="relative overflow-hidden rounded-2xl">
                          <div className="absolute inset-0 rounded-2xl bg-white" />
                          <div className="relative flex items-start gap-4 p-6">
                            <span className="mt-0.5 font-mono text-[11px] font-medium tracking-wider text-[#0066CC]">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm leading-relaxed text-[#0A0B19]/70">{item}</span>
                          </div>
                          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-sm outline outline-1 -outline-offset-1 outline-black/5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 2. WHAT IS — 2-column with real image ═══ */}
          <section id="what-is" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  {/* Text — 7 columns */}
                  <div className="lg:col-span-7">
                    <SectionLabel label="Definition" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      What Is an Ekahau Wireless Site Survey?
                    </h2>
                    <div className="mt-6 space-y-4 text-base/7 text-[#0A0B19]/70">
                      <p>
                        An Ekahau wireless site survey is a professional RF and wifi performance assessment using Ekahau AI Pro, Ekahau Survey software, and the Ekahau Sidekick measurement device — the primary tools used by network professionals worldwide to collect data, identify coverage issues, and design high-performance wifi networks.
                      </p>
                      <p>
                        The Ekahau Sidekick captures data points on signal strength, rf interference, noise level, channel utilization, and coverage distribution simultaneously using built-in dual-band radios and a dedicated spectrum analyzer — far more accurate than a standard wireless adapter.
                      </p>
                    </div>

                    <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-[#0A0B19]">Key Wifi Site Survey Capabilities</h3>
                    <ul className="mt-4 space-y-2">
                      {[
                        'Signal strength mapping and heat map visualization',
                        'RF interference detection and radio frequency analysis',
                        'Capacity planning for wifi device density per access point',
                        'Optimal access point count and placement recommendations',
                        'Pre and post deployment network performance validation',
                        'Data collection for compliance, audit, and optimization',
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[#0A0B19]/65">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image column — 5 columns */}
                  <div className="mt-10 space-y-6 lg:col-span-5 lg:mt-0">
                    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#E2E5EF] lg:sticky lg:top-32">
                      <div className="p-6">
                        <Image
                          src={sidekickTransparentImage}
                          alt="Ekahau Sidekick wireless survey device"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 3. SURVEY TYPES ═══ */}
          <section id="survey-types" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <SectionLabel label="Service Scope" />
                <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  Ekahau Wireless Survey Services We Provide
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  Predictive, active, passive, and spectrum-focused wireless site surveys for the full wifi network lifecycle — from pre deployment planning through post deployment validation.
                </p>

                {/* Full-width heat map image */}
                <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-[#E2E5EF]">
                  <div className="relative aspect-[21/9]">
                    <Image
                      src={wirelessSignalMapImage}
                      alt="Wireless signal heat map visualization showing coverage patterns"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  {surveyTypes.map((item, idx) => (
                    <article
                      key={item.title}
                      className="relative overflow-hidden rounded-2xl bg-white p-8 ring-1 ring-black/5"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-3 right-6 select-none font-mono text-[80px] font-bold leading-none text-[#0066CC]/[0.04]"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#0066CC]">
                          {item.subtitle}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0A0B19]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#0A0B19]/65">{item.description}</p>
                        <div className="mt-6 border-t border-[#E2E5EF] pt-5">
                          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-[#0A0B19]/40">What You Get</p>
                          <ul className="space-y-2">
                            {item.outputs.map((output) => (
                              <li key={output} className="flex items-start gap-3 text-[13px] leading-relaxed text-[#0A0B19]/60">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#0066CC]" />
                                <span>{output}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 4. CABLING ═══ */}
          <section id="cabling" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  {/* Text — 7 columns */}
                  <div className="lg:col-span-7">
                    <SectionLabel label="Structured Cabling" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      Structured Cabling & Professional FLUKE Cable Testing
                    </h2>
                    <p className="mt-4 max-w-2xl text-base/7 text-[#0A0B19]/70">
                      Every access point connects back to structured cabling that must meet performance standards. AKRIN delivers end-to-end structured cabling services — from FLUKE-certified testing to complete design, installation, and recertification.
                    </p>
                  </div>

                  {/* Image — 5 columns */}
                  <div className="mt-10 lg:col-span-5 lg:mt-0">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E2E5EF]">
                      <div className="p-3">
                        <Image
                          src={flukeReportImage}
                          alt="FLUKE cable certification test report showing pass/fail results"
                          className="w-full rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                  {cablingServices.map((service) => (
                    <article
                      key={service.title}
                      className="group rounded-2xl bg-[#FAFAFC] p-7 ring-1 ring-[#E2E5EF] transition-all duration-300 hover:bg-white hover:shadow-lg hover:ring-[#0066CC]/20"
                    >
                      <h3 className="text-base font-semibold text-[#0A0B19]">{service.title}</h3>
                      <p className="mt-1 text-[12px] font-medium uppercase tracking-wide text-[#6B6D7C]">
                        {service.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#0A0B19]/65">{service.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 5. WHY AKRIN ═══ */}
          <section id="why-akrin" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                  <div className="lg:col-span-5">
                    <SectionLabel label="Why AKRIN" />
                    <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                      Why Choose AKRIN for Ekahau Wireless Surveys?
                    </h2>
                  </div>
                </div>

                <dl className="mt-14 grid gap-x-12 gap-y-0 lg:grid-cols-2">
                  {[
                    { title: 'Ekahau-Equipped Expertise', desc: 'Certified engineers using Ekahau AI Pro, Ekahau Survey, and the Ekahau Sidekick for accurate wireless site survey outcomes.' },
                    { title: 'Vendor-Neutral Recommendations', desc: 'Access point recommendations based on coverage requirements and performance goals — not tied to any single AP vendor.' },
                    { title: 'Detailed, Actionable Reports', desc: 'Visual heat map data, signal strength analysis, and prioritized next steps with clear data points.' },
                    { title: 'End-to-End Survey Support', desc: 'From pre deployment planning through post deployment validation — the full wireless site survey process.' },
                    { title: 'Rapid Turnaround', desc: 'Fast on site delivery without compromising data collection quality or wifi site survey accuracy.' },
                    { title: 'Scalable for Any Environment', desc: 'Single-floor offices to multi-building campuses, warehouses, and healthcare facilities.' },
                  ].map((feature, idx) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-5 border-b border-[#0A0B19]/[0.06] py-8 first:pt-0 last:border-b-0"
                    >
                      <span className="font-mono text-[28px] font-light leading-none text-[#0066CC]/20">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <dt className="text-[15px] font-semibold text-[#0A0B19]">{feature.title}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-[#0A0B19]/60">{feature.desc}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 6. PROCESS ═══ */}
          <section id="process" className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:py-32">
              <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="lg:col-span-5">
                  <SectionLabel label="Methodology" />
                  <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                    Our Wireless Site Survey Process
                  </h2>
                </div>
                <div className="mt-6 lg:col-span-7 lg:mt-0">
                  <ImagePlaceholder
                    label="On-Site Survey Execution"
                    className="aspect-[16/9]"
                  />
                </div>
              </div>

              {/* Desktop: Horizontal steps */}
              <div className="mt-16 hidden lg:block">
                <div className="grid grid-cols-5 gap-0">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="relative">
                      {/* Connector line */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute left-[calc(50%+20px)] right-0 top-5 h-px bg-[#E2E5EF]" />
                      )}
                      <div className="relative flex flex-col items-center px-4 text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066CC] text-sm font-bold text-white shadow-md shadow-[#0066CC]/20">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-[#0A0B19]">{step.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-[#0A0B19]/55">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: Vertical steps */}
              <div className="mt-12 lg:hidden">
                <div className="space-y-0">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                      {/* Vertical line */}
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-sm font-bold text-white shadow-md shadow-[#0066CC]/20">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="mt-1.5 w-px flex-1 bg-[#E2E5EF]" />
                        )}
                      </div>
                      <div className="pt-1 pb-2">
                        <h3 className="text-sm font-semibold text-[#0A0B19]">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#0A0B19]/60">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.06] to-transparent" />

          {/* ═══ 7. INDUSTRIES ═══ */}
          <section id="industries" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl py-24 sm:py-32">
                <SectionLabel label="Industries" />
                <h2 className="text-pretty font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  Industries That Rely on Wifi Site Surveys
                </h2>

                <div className="mt-14 overflow-hidden rounded-2xl bg-[#0A0B19]/[0.06]">
                  <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { title: 'Corporate Offices', desc: 'High-density meeting rooms and open-plan areas requiring stable roaming and reliable wifi network capacity.' },
                      { title: 'Warehouses & Logistics', desc: 'Inventory systems and automation workflows requiring uninterrupted wifi coverage across large coverage areas.' },
                      { title: 'Healthcare Facilities', desc: 'Mission-critical medical device connectivity and compliance-sensitive wifi networks.' },
                      { title: 'Education & Campuses', desc: 'Lecture halls, labs, and shared facilities requiring broad, consistent wireless network coverage.' },
                      { title: 'Retail & Hospitality', desc: 'Guest wifi, POS systems, and high-density environments where coverage impacts revenue.' },
                      { title: 'Manufacturing & Industrial', desc: 'IoT devices in interference-prone RF environments where spectrum analysis identifies coverage gaps.' },
                    ].map((industry) => (
                      <article key={industry.title} className="bg-[#F7F7FC] p-7">
                        <h3 className="text-[15px] font-semibold text-[#0A0B19]">{industry.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#0A0B19]/60">{industry.desc}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ═══ CTA Section ═══ */}
          <section className="relative my-8 overflow-hidden rounded-2xl bg-[#0B1F3A]">
            <Image
              src={spectrumAnalyzerImage}
              alt="Spectrum analyzer device for wifi site survey"
              fill
              className="object-cover object-center opacity-60"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#071528]/90 via-[#0B1F3A]/70 to-[#0B1F3A]/40" />

            <div className="relative px-8 py-14 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-14">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl font-light tracking-[-0.03em] text-white md:text-3xl">
                  Ready to Optimize Your Wifi Network Performance?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                  Get a professional Ekahau wireless site survey from AKRIN and make data-driven network decisions for reliable, high-performance wifi connectivity.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:ml-12 lg:shrink-0">
                <Link
                  href="/contact?service=japan-ekahau-wireless-surveys"
                  className="inline-flex items-center justify-center rounded-md bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052A3]"
                >
                  Request a Wireless Site Survey
                </Link>
                <Link
                  href="/contact?service=japan-ekahau-wireless-surveys&intent=sample-report"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Download a Sample Report
                </Link>
              </div>
            </div>
          </section>

          {/* ═══ Related Blog ═══ */}
          <section className="bg-[#F7F7FC] pt-12 pb-4 sm:pt-16 sm:pb-6">
            <div className="mx-auto max-w-7xl">
              <SectionLabel label="RELATED INSIGHTS" />
              <Link
                href="/blog/wifi-site-survey-guide"
                className="group mt-4 flex items-center justify-between rounded-2xl bg-white px-6 py-5 ring-1 ring-[#E2E5EF] transition-all duration-300 hover:shadow-lg hover:ring-[#0066CC]/20 sm:px-8"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#0066CC]">
                    Blog Guide
                  </span>
                  <span className="mt-1 block font-serif text-lg font-light tracking-[-0.02em] text-[#0A0B19] group-hover:text-[#0066CC] sm:text-xl">
                    WiFi Site Survey Guide: Types, Tools &amp; Best Practices
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-[#6B6D7C]">
                    Learn about predictive, passive, and active survey methods. Covers Ekahau tools, spectrum analysis, and how to plan a professional wifi site survey for your facility.
                  </span>
                </div>
                <svg className="ml-6 h-5 w-5 shrink-0 text-[#6B6D7C] transition-transform group-hover:translate-x-0.5 group-hover:text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </section>

          {/* ═══ 8. FAQ ═══ */}
          <section id="faq" className="bg-[#F7F7FC] pb-24 sm:pb-32">
            <div className="mx-auto max-w-7xl pt-12 sm:pt-16">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                {/* Left column: heading */}
                <div className="lg:col-span-4">
                  <SectionLabel label="FAQS" />
                  <h2 className="font-serif text-[36px] font-light leading-[1.05] tracking-[-0.04em] text-[#0A0B19] sm:text-[44px]">
                    Ekahau Wireless Survey FAQ
                  </h2>
                  <p className="mt-4 text-base/7 text-[#0A0B19]/65">
                    Common questions about our wifi site survey services, the Ekahau Sidekick, and our wireless survey process.{' '}
                    <Link href="/contact" className="font-semibold text-[#0066CC] hover:text-[#0052A3]">
                      Contact us
                    </Link>{' '}
                    for anything else.
                  </p>
                </div>

                {/* Right column: accordion */}
                <div className="mt-10 lg:col-span-8 lg:mt-0">
                  <dl className="divide-y divide-[#0A0B19]/[0.06]">
                    {faqItems.map((item, faqIdx) => (
                      <div key={item.q} className="py-6 first:pt-0">
                        <dt>
                          <button
                            className="flex w-full items-start gap-4 text-left"
                            onClick={() => setOpenFaq(openFaq === faqIdx ? null : faqIdx)}
                          >
                            <span className={`mt-1 font-mono text-[11px] tracking-[0.15em] transition-colors ${
                              openFaq === faqIdx ? 'text-[#0066CC]' : 'text-[#0A0B19]/25'
                            }`}>
                              {String(faqIdx + 1).padStart(2, '0')}
                            </span>
                            <span className="flex-1 text-[15px] font-medium leading-[1.4] text-[#0A0B19]">
                              {item.q}
                            </span>
                            <span className={`mt-0.5 shrink-0 transition-transform duration-200 ${openFaq === faqIdx ? 'rotate-45' : ''}`}>
                              <svg className="h-4 w-4 text-[#0A0B19]/30" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                            </span>
                          </button>
                        </dt>
                        {openFaq === faqIdx && (
                          <dd className="mt-3 pl-10 text-sm leading-[1.7] text-[#0A0B19]/55">{item.a}</dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
