'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionNav } from '@/components/SectionNav'
import { RevealOnScroll } from '@/components/RevealOnScroll'

/* ─────────────────── data ─────────────────── */

const testingTypes = [
  {
    label: 'EXTERNAL',
    title: 'External Network Penetration Testing',
    body: 'Targets your internet-facing assets — web servers, FTP servers, email gateways, VPN endpoints, and cloud services — to determine what an outside attacker without prior knowledge could exploit. Reveals misconfigurations, unpatched software, weak authentication, and exposed services.',
    highlights: ['Perimeter security assessment', 'Open ports & service enumeration', 'Entry point identification', 'Cloud services evaluation'],
  },
  {
    label: 'INTERNAL',
    title: 'Internal Penetration Testing',
    body: 'Simulates an attacker who already has a foothold inside your corporate network — through a compromised device, insider threats, or a successful phishing attack. Evaluates lateral movement paths, privilege escalation, and Active Directory weaknesses.',
    highlights: ['Lateral movement analysis', 'Privilege escalation testing', 'Active Directory assessment', 'Sensitive data exposure'],
  },
]

const boxTypes = [
  {
    name: 'Black Box Testing',
    desc: 'Zero prior knowledge — pen testers discover the attack surface independently, providing the most realistic attacker simulation.',
    icon: (
      <svg className="h-6 w-6 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
  {
    name: 'Gray Box Testing',
    desc: 'Partial information — testers receive credentials or network maps for deeper exploration of specific security concerns.',
    icon: (
      <svg className="h-6 w-6 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    name: 'White Box Testing',
    desc: 'Full access to source code, architecture, and configurations for a comprehensive security assessment of your entire stack.',
    icon: (
      <svg className="h-6 w-6 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
]

const methodologySteps = [
  { num: '01', title: 'Reconnaissance & Scanning', body: 'Passive and active reconnaissance to map the target environment — network discovery, port scanning, service enumeration, and identifying potential entry points.' },
  { num: '02', title: 'Vulnerability Identification', body: 'Automated vulnerability scanners combined with manual analysis to identify security vulnerabilities including SQL injection, authentication bypass, and configuration weaknesses. Every finding verified manually.' },
  { num: '03', title: 'Exploitation & Post-Exploitation', body: 'Controlled exploitation of identified vulnerabilities to demonstrate real business impact — privilege escalation, lateral movement, and determining whether attackers could steal data or disrupt operations.' },
  { num: '04', title: 'Reporting & Remediation', body: 'Detailed penetration testing report with executive summaries, technical findings, proof-of-concept evidence, risk ratings, and prioritized remediation steps. Compliance mapping for PCI DSS and ISO 27001 included.' },
]

const whyItems = [
  { title: 'Certified Pen Testers', desc: 'OSCP, CEH, and GPEN certified ethical hackers with deep network security expertise.' },
  { title: 'Proven Methodology', desc: 'Testing aligned to PTES, OWASP, and NIST SP 800-115 frameworks.' },
  { title: 'Internal & External Coverage', desc: 'Full-spectrum testing across internal and external network environments.' },
  { title: 'Actionable Reporting', desc: 'Detailed network pen test reports with business-context risk ratings.' },
  { title: 'Remediation Verification', desc: 'Retesting included to confirm vulnerabilities are resolved.' },
  { title: 'Compliance Support', desc: 'Support for PCI DSS, ISO 27001, and SOC 2 compliance audits.' },
]

const faqItems = [
  { q: 'What is network penetration testing?', a: 'Network penetration testing is an authorized simulated attack on your IT infrastructure conducted by certified ethical hackers. The goal is to identify exploitable security vulnerabilities, test your security controls, and provide remediation guidance before real attackers gain access to your systems.' },
  { q: 'How often should penetration testing be performed?', a: 'Most compliance frameworks require annual penetration testing at minimum. We recommend testing after significant network changes, before major deployments, and at least annually to maintain a strong security posture and address newly discovered vulnerabilities.' },
  { q: 'What is the difference between external and internal penetration testing?', a: 'External penetration testing evaluates your internet-facing assets from an outsider\'s perspective, while internal testing simulates an attacker already inside your network. A comprehensive security assessment includes both internal and external testing to cover all attack vectors.' },
  { q: 'What is the difference between black box and gray box testing?', a: 'Black box testing gives pen testers no prior knowledge of your systems, simulating a real external attacker. Gray box testing provides limited information like credentials or network maps, enabling deeper exploration of specific security areas. Both approaches identify critical vulnerabilities.' },
  { q: 'How long does a network pen test take?', a: 'A typical network penetration testing engagement takes one to three weeks depending on scope, complexity, and the number of target systems. We provide a detailed timeline during the scoping phase so key stakeholders can plan accordingly.' },
  { q: 'What deliverables are included?', a: 'Every engagement concludes with a comprehensive network pen test report containing executive summaries, detailed technical findings, proof-of-concept evidence, risk ratings aligned to industry standards, and prioritized remediation guidance. We also offer a post-report consultation.' },
]

const sectionItems = [
  { id: 'overview', label: 'OVERVIEW', num: '01' },
  { id: 'testing-types', label: 'TESTING TYPES', num: '02' },
  { id: 'box-testing', label: 'APPROACH', num: '03' },
  { id: 'methodology', label: 'METHODOLOGY', num: '04' },
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

export default function NetworkPenetrationTestingClient() {
  return (
    <main>
      {/* ── Mobile / Tablet Hero ── */}
      <section className="relative min-h-[520px] bg-[#02304F] lg:hidden" aria-labelledby="hero-mobile">
        <Image
          src="/images/banners/penetration-testing/penetation-testing.avif"
          alt="Network penetration testing services"
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
            <span className="font-mono text-xs tracking-[0.14em] uppercase">Network Penetration Testing</span>
          </div>
          <h1 id="hero-mobile" className="mt-3 font-serif text-3xl leading-tight font-light tracking-[-0.02em] text-white sm:text-4xl">
            Network Penetration<br />Testing Services
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
            Identify exploitable security vulnerabilities across your IT infrastructure with professional pen testing from certified ethical hackers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              Schedule Assessment
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
          src="/images/banners/penetration-testing/penetation-testing.avif"
          alt="Network penetration testing services"
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
            <span className="font-mono text-xs tracking-[0.14em] uppercase">Network Penetration Testing</span>
          </div>
          <h1 id="hero-desktop" className="mt-3 font-serif text-5xl leading-tight font-light tracking-[-0.02em] text-white">
            Network Penetration<br />Testing Services
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            Identify exploitable security vulnerabilities across your IT infrastructure with professional pen testing from certified ethical hackers.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/contact" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#02304F]">
              Schedule Assessment
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

          {/* ── Overview ── */}
          <section id="overview" className="py-16 sm:py-20">
            <RevealOnScroll>
              <div className="grid gap-12 lg:grid-cols-[1fr_minmax(320px,420px)]">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                    Network Penetration Testing Services
                  </h2>
                  <p className="mt-6 text-base/8 text-gray-700 sm:text-lg/8">
                    AKRIN delivers professional network penetration testing services that identify exploitable security vulnerabilities across your IT infrastructure. Our certified pen testers simulate real-world attacks against your corporate network, web applications, and internet-facing assets to evaluate your security posture before malicious actors gain access to sensitive data.
                  </p>
                  <p className="mt-4 text-base/8 text-gray-700 sm:text-lg/8">
                    Whether you require external network penetration testing to assess your perimeter defenses or internal penetration testing to evaluate insider threats, our penetration testing services provide actionable findings with clear remediation guidance aligned to frameworks including PCI DSS, ISO 27001, and SOC 2.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">What a Network Pen Test Covers</h3>
                  <ul className="mt-4 space-y-3">
                    {['Firewalls, routers & switches', 'Open ports & service enumeration', 'Web application security', 'Wireless network assessment', 'Cloud services & VPN endpoints', 'Active Directory environments'].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0066CC]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── External & Internal Testing (unique split-panel design) ── */}
          <section id="testing-types" className="pb-20">
            <RevealOnScroll>
              <div className="grid gap-6 lg:grid-cols-2">
                {testingTypes.map((t) => (
                  <div key={t.label} className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-10">
                    <span className="font-mono text-xs tracking-[0.14em] text-white/50 uppercase">{t.label}</span>
                    <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{t.title}</h3>
                    <p className="mt-4 text-sm/7 text-white/70">{t.body}</p>
                    <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {t.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0066CC]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Box Testing Approaches ── */}
          <section id="box-testing" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Black Box, Gray Box &amp; White Box Testing
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                We offer three penetration testing approaches tailored to your objectives, each providing distinct advantages for evaluating your overall security posture.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {boxTypes.map((b) => (
                  <div key={b.name} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-[#0066CC]/30">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]/10">
                      {b.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-950">{b.name}</h3>
                    <p className="mt-2 text-sm/7 text-gray-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Methodology (numbered steps with accent line) ── */}
          <section id="methodology" className="pb-20">
            <RevealOnScroll>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Network Penetration Testing Methodology
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                Our network pen testing methodology follows industry-recognized frameworks including PTES, OWASP, and NIST SP 800-115.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {methodologySteps.map((s) => (
                  <div key={s.num} className="relative rounded-2xl border border-gray-200 bg-white p-6 pl-16">
                    <span className="absolute left-6 top-6 font-mono text-2xl font-bold text-[#0066CC]/20">{s.num}</span>
                    <h3 className="text-base font-semibold text-gray-950">{s.title}</h3>
                    <p className="mt-2 text-sm/7 text-gray-600">{s.body}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </section>

          {/* ── Why AKRIN ── */}
          <section id="why-akrin" className="pb-20">
            <RevealOnScroll>
              <div className="rounded-3xl bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19] p-8 sm:p-12">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Why Choose AKRIN for Network Penetration Testing
                </h2>
                <p className="mt-4 max-w-3xl text-base/7 text-white/70">
                  AKRIN combines deep network security expertise with a better understanding of the IT challenges facing businesses operating in Japan and the Asia-Pacific region.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {whyItems.map((item) => (
                    <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-[#0B1F3A]">
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm/6 text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="pb-20">
            <RevealOnScroll>
              <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                    Frequently Asked<br />Questions
                  </h2>
                  <p className="mt-3 text-sm/7 text-gray-600">
                    Common questions about our network penetration testing services.
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
                Schedule Your Network Penetration Testing Assessment
              </h2>
              <p className="mt-4 max-w-3xl text-base/8 text-gray-700">
                Protect your organization from evolving cyber threats with professional network penetration testing services from AKRIN. Contact our security team to discuss your requirements.
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
