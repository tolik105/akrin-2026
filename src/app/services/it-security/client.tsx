'use client'

import {
  ShieldCheckIcon,
  LockClosedIcon,
  ServerStackIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  DocumentMagnifyingGlassIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  EyeIcon,
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
  { id: 'managed-security', label: 'MANAGED', num: '02' },
  { id: 'consulting', label: 'CONSULTING', num: '03' },
  { id: 'audit', label: 'AUDIT', num: '04' },
  { id: 'endpoint-network', label: 'PROTECTION', num: '05' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '06' },
  { id: 'faq', label: 'FAQ', num: '07' },
]

const overviewItems = [
  {
    icon: ShieldCheckIcon,
    title: 'Managed IT security services',
    desc: '24/7 monitoring, early detection, and rapid response across endpoints, network devices, and cloud systems.',
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: 'Information security consulting',
    desc: 'Security assessments, gap analysis, and policy development aligned with ISO 27001 and PCI DSS.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'IT security audit services',
    desc: 'Comprehensive audits examining systems, access controls, data protection, and compliance posture.',
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Endpoint & network security',
    desc: 'EDR, mobile device management, firewalls, network segmentation, and remote work security solutions.',
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Incident response & threat management',
    desc: 'Immediate containment, forensic analysis, recovery, and proactive threat intelligence monitoring.',
  },
]

const consultingDeliverables = [
  'Security risk assessment and gap analysis',
  'ISO 27001 and PCI DSS alignment review',
  'Security policy and procedure development',
  'Prioritized remediation roadmap',
  'Information security program maturity scoring',
  'Regulatory compliance mapping (APPI, GDPR)',
]

const auditAreas = [
  {
    icon: ServerStackIcon,
    title: 'Network & Infrastructure',
    desc: 'Firewall rules, network devices, segmentation, and access control lists across all systems.',
  },
  {
    icon: LockClosedIcon,
    title: 'Access & Identity',
    desc: 'User authentication, privilege management, and zero-trust access controls for information assets.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Data Protection',
    desc: 'Encryption standards, data classification, backup procedures, and data loss prevention controls.',
  },
  {
    icon: EyeIcon,
    title: 'Compliance & Standards',
    desc: 'Audit findings mapped to PCI DSS, ISO 27001, SOC 2, and Japan-specific regulatory requirements.',
  },
]

const whyItems = [
  {
    icon: ShieldCheckIcon,
    title: 'Full-lifecycle security services',
    desc: 'From initial security assessments through ongoing managed security operations and incident response.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Japan compliance expertise',
    desc: 'Information security programs aligned with APPI, ISO 27001, PCI DSS, and Japanese regulatory standards.',
  },
  {
    icon: CpuChipIcon,
    title: 'Managed security operations',
    desc: '24/7 managed security service with SIEM, EDR, and continuous threat monitoring across all systems.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Security consulting depth',
    desc: 'Security consulting that translates assessments into actionable controls and measurable improvements.',
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Rapid incident response',
    desc: 'Defined SLAs with immediate containment, forensic investigation, and recovery support.',
  },
  {
    icon: LockClosedIcon,
    title: 'Industry-specific experience',
    desc: 'Extensive experience securing financial services, healthcare, manufacturing, and technology environments.',
  },
]

const faqItems = [
  {
    q: 'What types of security threats do IT security services protect against?',
    a: 'Our IT security services protect against malware, ransomware, phishing, data breaches, insider threats, and advanced persistent threats using a multi-layered managed security approach with early detection and rapid response capabilities.',
  },
  {
    q: 'How do managed security services differ from in-house security?',
    a: 'Managed security services provide 24/7 monitoring, specialized security expertise, and advanced threat detection systems that most organizations cannot maintain internally. Our managed security service model delivers enterprise-grade information security at predictable costs.',
  },
  {
    q: 'What compliance frameworks do your security consulting services cover?',
    a: 'Our security consulting covers ISO 27001, PCI DSS, SOC 2, GDPR, Japan\'s Personal Information Protection Act, and industry-specific standards. Each information security audit maps findings to relevant compliance requirements.',
  },
  {
    q: 'Can you secure remote work environments?',
    a: 'Yes. We implement comprehensive remote work security including VPN configuration, endpoint protection, zero-trust access, cloud security controls, and mobile device management to protect distributed systems and information assets.',
  },
  {
    q: 'What does an information security audit include?',
    a: 'An information security audit examines network devices, access controls, data protection, incident response procedures, and compliance posture. We deliver a comprehensive report with prioritized findings and remediation guidance.',
  },
  {
    q: 'How quickly can you respond to security incidents?',
    a: 'Our managed security services include defined response SLAs with rapid response capabilities. We provide immediate threat containment, forensic investigation, and recovery support to minimize the impact of security incidents on your operations.',
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

export default function ITSecurityClient() {
  return (
    <main className="bg-[#F7F7FC]">
      {/* ── Mobile / Tablet hero ── */}
      <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/cybersecurity/banner1.avif"
            alt="AKRIN IT Security Services"
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
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Security Services</span>
          </div>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            IT Security Services for Enterprises in Japan
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
            Managed IT security services, information security consulting, and audit services to protect your systems against evolving cyber threats.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact?service=it-security"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
            >
              Start Security Consultation
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
            src="/images/banners/cybersecurity/banner1.avif"
            alt="AKRIN IT Security Services"
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
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Security Services</span>
              </div>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                IT Security Services for Enterprises in Japan
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                Managed IT security services combining security consulting, managed security operations, and continuous monitoring to reduce risk and strengthen your security posture against evolving cyber threats.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact?service=it-security"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  Start Security Consultation
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

          {/* ── 01 OVERVIEW — Icon cards with gradient hover ── */}
          <section id="overview" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="What We Deliver" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  IT security services built for enterprise
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  Protecting information assets against evolving cyber threats requires a structured approach to information security built on industry best practices and appropriate controls. AKRIN delivers managed IT security services covering every layer of your environment.
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

          {/* ── 02 MANAGED SECURITY — Dark gradient card with 2-column ── */}
          <section id="managed-security">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] px-8 py-14 sm:px-12 sm:py-16 lg:px-16">
                  <DarkSectionLabel label="Managed Security" />
                  <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl">
                    Managed IT security services
                  </h2>
                  <div className="mt-6 max-w-3xl space-y-4">
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      Our managed security services provide 24/7 monitoring, early detection, and rapid response to potential threats across your entire IT environment. We deploy managed security service platforms that correlate data from endpoint agents, network devices, and cloud systems to identify cyber threats before they cause damage.
                    </p>
                    <p className="text-[15px] leading-[1.75] text-white/70">
                      Managed security covers firewall management, intrusion detection and prevention, vulnerability scanning, security information and event management (SIEM), and endpoint detection and response. Each managed security service engagement starts with a security assessment to identify weak points and build a protection plan aligned with your business objectives.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'SIEM & Log Correlation', sub: 'Real-time threat detection' },
                      { label: 'Endpoint Detection & Response', sub: 'EDR across all systems' },
                      { label: 'Vulnerability Scanning', sub: 'Continuous assessments' },
                      { label: 'Incident Response', sub: 'Rapid response SLAs' },
                    ].map((card) => (
                      <div
                        key={card.label}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#0B1F3A]"
                      >
                        <h3 className="text-sm font-semibold text-white">{card.label}</h3>
                        <p className="mt-1 text-xs text-white/50">{card.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 03 CONSULTING — Two-column with checklist card ── */}
          <section id="consulting" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Consulting" />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      Information security consulting
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Effective information security starts with understanding your risk landscape. Our security consulting services include security assessments, gap analysis against frameworks like ISO 27001 and PCI DSS, and development of security policies and procedures.
                    </p>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Security consulting engagements deliver a comprehensive report of findings, prioritized remediation recommendations, and a roadmap for improving your security posture. We help organizations implement appropriate controls that balance protection with operational efficiency, ensuring information security programs align with industry best practices.
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <div className="rounded-2xl border border-[#E2E5EF] bg-[#FAFAFC] p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A0B19]/50">Consulting Deliverables</h3>
                      <ul className="mt-5 space-y-3">
                        {consultingDeliverables.map((item) => (
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

          {/* ── 04 AUDIT — 2x2 audit area grid ── */}
          <section id="audit">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Audit" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  IT security audit services
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  Regular information security audits are essential for maintaining compliance and identifying emerging risks. Our IT security audit services examine your systems, network devices, access controls, data protection measures, and incident response capabilities against established security standards. Each audit produces a comprehensive report with findings categorized by severity, along with actionable recommendations.
                </p>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">
                  {auditAreas.map((area) => (
                    <div
                      key={area.title}
                      className="relative rounded-xl border border-[#E2E5EF] bg-white p-6 pl-8 transition-all duration-300 hover:border-[#0066CC]/30 hover:shadow-md"
                    >
                      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#0066CC] to-[#0066CC]/20" />
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066CC]/10 ring-1 ring-[#0066CC]/20">
                          <area.icon className="h-4.5 w-4.5 text-[#0066CC]" />
                        </div>
                        <h3 className="text-[15px] font-semibold text-[#0A0B19]">{area.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#2D2E3F]/70">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 05 ENDPOINT & NETWORK — Two-column with image ── */}
          <section id="endpoint-network" className="bg-white">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                  <div>
                    <SectionLabel label="Protection" />
                    <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                      Endpoint and network security
                    </h2>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Modern IT security services extend protection across every device and connection point. We implement endpoint detection and response (EDR), mobile device management, next-generation firewalls, network segmentation, and secure remote work solutions to protect distributed workforces.
                    </p>
                    <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                      Our security services include device encryption, zero-trust access controls, VPN configuration, and continuous network monitoring. For organizations with remote work environments, we deploy security architectures that protect information assets without compromising productivity across all connected systems.
                    </p>
                    <div className="mt-6 space-y-2">
                      {[
                        'Endpoint detection and response (EDR)',
                        'Mobile device management (MDM)',
                        'Next-generation firewall deployment',
                        'Zero-trust network segmentation',
                        'Secure remote work architecture',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircleIcon className="h-5 w-5 shrink-0 text-[#0066CC]" />
                          <span className="text-sm text-[#2D2E3F]/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <Image
                      src="/images/banners/cybersecurity/detection-response.avif"
                      alt="Endpoint and Network Security Protection"
                      width={1024}
                      height={768}
                      className="w-full h-auto rounded-2xl shadow-lg"
                      quality={70}
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 06 WHY AKRIN — Icon grid ── */}
          <section id="why-akrin">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Why AKRIN" />
                <h2 className="font-serif text-3xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-4xl">
                  Why choose AKRIN for IT security services
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  AKRIN combines deep information security expertise with hands-on managed security operations. Our security consulting and managed security service capabilities span the full security lifecycle — from initial security assessments through ongoing monitoring, incident response, and compliance management.
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
                      Common questions about our IT security services and managed security operations.
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
                      Ready to secure your business?
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.7] text-white/60">
                      Share your security requirements and we will deliver a structured assessment — managed security scope, compliance alignment, and actionable recommendations.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/contact?service=it-security"
                        className="inline-flex items-center justify-center rounded-full bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0052A3]"
                      >
                        Start Security Consultation
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
