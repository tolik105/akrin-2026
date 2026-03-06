'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionNav } from '@/components/SectionNav'
import { RevealOnScroll } from '@/components/RevealOnScroll'

/* ─────────────────── data ─────────────────── */

const managedServices = [
  {
    id: 'soc',
    label: 'SOC',
    title: 'Security Operations Center',
    body: 'Our security operations center provides 24/7 threat monitoring with expert security analysts watching your environment around the clock. Continuous monitoring, alert triage, and escalation keep your organization protected against advanced persistent threats, ransomware, and unauthorized access.',
    highlights: ['24/7 threat monitoring', 'Alert triage & escalation', 'Security log management', 'Threat intelligence feeds'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    id: 'mdr',
    label: 'MDR',
    title: 'Managed Detection and Response',
    body: 'Managed detection and response combines automated threat detection with human-led investigation to identify and contain security incidents before they escalate. Our managed security service provider team delivers rapid incident response, forensic analysis, and remediation guidance.',
    highlights: ['Automated threat detection', 'Human-led investigation', 'Rapid incident response', 'Forensic analysis'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: 'endpoint',
    label: 'ENDPOINT & NETWORK',
    title: 'Endpoint and Network Security',
    body: 'Protect endpoints, servers, and network infrastructure against malware, ransomware, and sophisticated cyber attacks. Our endpoint security and network security services deploy defense-in-depth strategies with next-generation firewalls, endpoint detection and response, and network segmentation.',
    highlights: ['Endpoint detection & response', 'Next-gen firewall management', 'Network segmentation', 'Malware protection'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
]

const assessmentServices = [
  {
    title: 'Vulnerability Assessment and Penetration Testing',
    body: 'Regular vulnerability scanning and penetration testing identify security vulnerabilities across your infrastructure before attackers exploit them. Risk assessments evaluate your cyber security posture and prioritize remediation based on business impact.',
    items: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment & scoring', 'Remediation prioritization'],
  },
  {
    title: 'Compliance and Governance',
    body: 'Comprehensive security services supporting ISO 27001, SOC 2, PCI DSS, and regional compliance frameworks. Governance programs align your cyber security services with business objectives and regulatory requirements.',
    items: ['ISO 27001 compliance', 'SOC 2 readiness', 'PCI DSS assessment', 'Security policy development'],
  },
]

const orgSolutions = [
  {
    label: 'SMALL & MID-MARKET',
    title: 'Security for Small and Mid-Market Business',
    body: 'Cost-effective cybersecurity solutions designed for organizations that need enterprise-grade protection without enterprise complexity. Our managed security services scale with your business, providing access to a full security operations center and managed detection and response at predictable monthly costs.',
    accent: '#0066CC',
  },
  {
    label: 'ENTERPRISE',
    title: 'Enterprise Cyber Security Services',
    body: 'Advanced security programs for large organizations with complex hybrid environments, multi-location operations, and stringent compliance requirements. Our enterprise cybersecurity services include dedicated security analysts, custom detection rules, and executive-level reporting with strategic security consulting.',
    accent: '#0B1F3A',
  },
]

const whyItems = [
  {
    title: 'Expert Security Team',
    body: 'Certified security professionals with deep expertise in threat detection, incident response, vulnerability management, and compliance frameworks. Our security analysts operate as an extension of your team.',
  },
  {
    title: 'Bilingual Service Delivery',
    body: 'Full English and Japanese cybersecurity services delivery — from security monitoring dashboards and incident reports to executive briefings and compliance documentation — supporting international organizations operating in Japan.',
  },
  {
    title: 'Proven Cyber Security Processes',
    body: 'Structured methodologies aligned to NIST, MITRE ATT&CK, and industry-recognized frameworks deliver consistent, measurable improvements to your security posture with transparent reporting and accountability.',
  },
]

const faqItems = [
  { q: 'What cybersecurity services does AKRIN provide?', a: 'AKRIN provides managed security services including 24/7 security operations center monitoring, managed detection and response, endpoint and network security, vulnerability assessments, penetration testing, compliance consulting, and incident response for organizations operating in Japan.' },
  { q: 'What is the difference between a SOC and MDR?', a: 'A security operations center provides continuous monitoring and alert management, while managed detection and response goes further with active threat hunting, automated containment, and hands-on incident response. Many organizations use both as part of a layered security strategy.' },
  { q: 'Do you provide cybersecurity services for small business?', a: 'Yes. Our managed cybersecurity services are designed to scale — from small and mid-market organizations to large enterprises. Small business clients benefit from shared SOC resources and packaged security services at predictable monthly costs.' },
  { q: 'How does AKRIN handle a security incident?', a: 'Our incident response process follows established frameworks: detection and triage by our security operations center, investigation and containment by our managed detection and response team, eradication and recovery, followed by post-incident review with recommendations to strengthen defenses.' },
  { q: 'What compliance frameworks do you support?', a: 'We support ISO 27001, SOC 2, PCI DSS, GDPR, and Japan-specific regulatory requirements. Our compliance services include gap assessments, policy development, audit preparation, and continuous monitoring to maintain compliance posture.' },
  { q: 'Can AKRIN provide bilingual cybersecurity services?', a: 'Yes. All cybersecurity services are delivered in both English and Japanese — from security dashboards and incident alerts to executive reporting and compliance documentation. This bilingual capability supports multinational organizations with operations in Japan.' },
]

const sectionItems = [
  { id: 'overview', label: 'OVERVIEW', num: '01' },
  { id: 'managed-security', label: 'MANAGED SECURITY', num: '02' },
  { id: 'assessment', label: 'ASSESSMENT', num: '03' },
  { id: 'solutions', label: 'SOLUTIONS', num: '04' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '05' },
  { id: 'faq', label: 'FAQ', num: '06' },
]

/* ─────────────────── FAQ accordion ─────────────────── */

function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#0066CC]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-gray-950 sm:text-base">
                {item.q}
              </span>
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {open === i && (
            <p className="pb-5 pl-8 text-sm/7 text-gray-600">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─────────────────── component ─────────────────── */

export default function CybersecurityClient() {
  return (
    <main>
      {/* ── Mobile / Tablet Hero ── */}
      <section className="relative min-h-[520px] bg-[#02304F] lg:hidden" aria-labelledby="hero-mobile">
        <Image
          src="/images/banners/cybersecurity/banner1.avif"
          alt="Cybersecurity services for organizations in Japan"
          fill
          className="object-cover"
          priority
          quality={70}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(2,48,79,0.4) 40%, rgb(2,48,79) 58%)' }}
        />
        <div className="relative flex min-h-[520px] flex-col justify-end px-6 pb-10">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
            <span className="font-mono text-xs tracking-[0.14em] uppercase">Cybersecurity Services</span>
          </div>
          <h1 id="hero-mobile" className="mt-3 font-serif text-3xl leading-tight font-light tracking-[-0.02em] text-white sm:text-4xl">
            Cybersecurity Services
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
            Managed security solutions protecting organizations in Japan with 24/7 monitoring, threat detection, and incident response.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              Get Protected
            </a>
            <Link href="/services" className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Desktop Hero ── */}
      <section className="relative hidden h-[500px] bg-[#02304F] lg:block" aria-labelledby="hero-desktop">
        <Image
          src="/images/banners/cybersecurity/banner1.avif"
          alt="Cybersecurity services for organizations in Japan"
          fill
          className="object-cover"
          priority
          quality={70}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 35%, rgba(2,48,79,0.8) 55%, rgba(2,48,79,0.45) 75%, transparent 90%)' }}
        />
        <div className="relative mx-auto flex h-full max-w-[1047px] flex-col justify-center px-8">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="inline-block h-2 w-2 rounded-sm bg-white/60" />
            <span className="font-mono text-xs tracking-[0.14em] uppercase">Cybersecurity Services</span>
          </div>
          <h1 id="hero-desktop" className="mt-3 font-serif text-5xl leading-tight font-light tracking-[-0.02em] text-white">
            Cybersecurity Services
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            Managed security solutions protecting organizations in Japan with 24/7 monitoring, threat detection, and incident response.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              Get Protected
            </a>
            <Link href="/services" className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── SectionNav Ribbon ── */}
      <SectionNav variant="ribbon" items={sectionItems} ariaLabel="Page sections" />

      {/* ── Body wrapper ── */}
      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">

          {/* ── Overview: Why Organizations Need Cybersecurity Services ── */}
          <section id="overview" className="py-16 sm:py-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Why Organizations Need Cybersecurity Services
              </h2>
              <p className="mt-6 max-w-4xl text-base/8 text-gray-700 sm:text-lg/8">
                Cyber threats targeting organizations in Japan continue to grow in volume and sophistication. From ransomware campaigns and phishing attacks to insider threats and supply chain compromises, the attack surface expands as businesses adopt cloud infrastructure, remote work, and digital operations. Without dedicated cybersecurity services, organizations face data breaches, regulatory penalties, operational disruption, and lasting reputational damage.
              </p>
              <p className="mt-4 max-w-4xl text-base/8 text-gray-700 sm:text-lg/8">
                A managed security service provider delivers the expertise, tooling, and continuous monitoring that most in-house teams cannot sustain alone — providing enterprise-grade security services at a predictable cost.
              </p>
              {/* Stat highlight bar — UNIQUE to cybersecurity page */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { stat: '24/7', label: 'Continuous Security Monitoring' },
                  { stat: '< 15 min', label: 'Mean Incident Response Time' },
                  { stat: '100%', label: 'Bilingual EN/JA Delivery' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4 rounded-xl border border-[#0066CC]/15 bg-[#0066CC]/[0.03] px-5 py-4">
                    <span className="text-2xl font-bold text-[#0066CC]">{s.stat}</span>
                    <span className="text-sm text-gray-600">{s.label}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Managed Security Services (blue left-accent cards — UNIQUE) ── */}
          <section id="managed-security" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Managed Security Services
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                Our managed cybersecurity services combine round-the-clock monitoring, advanced threat detection, and expert-led incident response to protect your organization against evolving cyber threats.
              </p>
              <div className="mt-10 space-y-5">
                {managedServices.map((svc) => (
                  <div key={svc.id} className="group flex gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-[#0066CC]/30 hover:shadow-sm sm:p-8">
                    {/* Blue accent bar */}
                    <div className="hidden w-1 shrink-0 rounded-full bg-[#0066CC] sm:block" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066CC]/10 text-[#0066CC]">
                          {svc.icon}
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.14em] text-gray-400 uppercase">{svc.label}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-gray-950">{svc.title}</h3>
                      <p className="mt-2 text-sm/7 text-gray-600">{svc.body}</p>
                      <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                        {svc.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="h-4 w-4 shrink-0 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Security Assessment & Compliance (dark card with 2 columns inside — UNIQUE) ── */}
          <section id="assessment" className="pb-20">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Security Assessment and Compliance Services
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-white/70">
                  Proactive security assessments and governance programs that identify risk, strengthen your cyber security posture, and maintain compliance with industry standards.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {assessmentServices.map((svc) => (
                    <div key={svc.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-[#0B1F3A]">
                      <h3 className="text-base font-semibold text-white">{svc.title}</h3>
                      <p className="mt-3 text-sm/6 text-white/60">{svc.body}</p>
                      <ul className="mt-4 space-y-2">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0066CC]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Solutions by Org Size (stacked full-width cards — UNIQUE) ── */}
          <section id="solutions" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Cyber Security Solutions for Every Organization
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                Whether you are a growing business or a large enterprise, our cybersecurity solutions scale to meet your security requirements and budget.
              </p>
              <div className="mt-10 space-y-4">
                {orgSolutions.map((sol) => (
                  <div
                    key={sol.label}
                    className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-1"
                      style={{ backgroundColor: sol.accent }}
                    />
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: sol.accent }}>
                      {sol.label}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-950">{sol.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm/7 text-gray-600">{sol.body}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Why AKRIN (numbered cards with top accent — UNIQUE) ── */}
          <section id="why-akrin" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Why Choose AKRIN as Your Cybersecurity Provider
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                AKRIN delivers cybersecurity services that combine deep technical expertise with an understanding of the unique operational requirements of organizations in Japan.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {whyItems.map((item, i) => (
                  <div key={item.title} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
                    {/* Top accent bar */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-[#0066CC]" />
                    <span className="font-mono text-3xl font-bold text-[#0066CC]/15">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-gray-950">{item.title}</h3>
                    <p className="mt-2 text-sm/7 text-gray-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="pb-20">
            <RevealOnScroll>
              <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                    Cybersecurity<br />Services FAQ
                  </h2>
                  <p className="mt-3 text-sm/7 text-gray-600">
                    Common questions about our managed cybersecurity services.
                  </p>
                </div>
                <FAQAccordion items={faqItems} />
              </div>
            </RevealOnScroll>
          </section>

          {/* ── CTA ── */}
          <section className="pb-24">
            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFC] p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                Protect Your Organization with AKRIN Cybersecurity Services
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                Strengthen your security posture with managed cybersecurity services from AKRIN. Contact our team to discuss your security requirements and discover how our cyber security solutions protect organizations across Japan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center rounded-sm bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052A3]">
                  Contact Us
                </a>
                <a href="https://cal.com/akrinsupport/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-sm border border-[#0A0B19]/20 px-6 py-2.5 text-sm font-semibold text-[#0A0B19] transition-colors hover:border-[#0066CC] hover:text-[#0066CC]">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
