'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
  ChevronDownIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BellAlertIcon,
  CpuChipIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
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
    q: "What's included in AKRIN's managed IT services?",
    a: 'Our managed services cover 24/7 network monitoring, bilingual help desk support with guaranteed SLAs, complete IT infrastructure management, integrated security services, business continuity planning, and strategic IT governance with quarterly reviews.',
  },
  {
    q: 'How fast do you respond to IT issues?',
    a: 'Critical incidents receive engineer engagement within 30 minutes. Standard support requests are resolved within 4 business hours. Proactive monitoring catches the majority of issues before they affect users.',
  },
  {
    q: 'Is all support available in Japanese and English?',
    a: 'Yes. Bilingual IT support services are essential to how we work. Every engineer, ticket, report, and executive review is available in both Japanese and English with native-speaking staff.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Absolutely. We support all major platforms including Microsoft 365, Azure, AWS, GCP, and VMware — whether on-premise, cloud, or hybrid infrastructure.',
  },
  {
    q: 'What kind of cost savings can we expect?',
    a: 'Businesses switching to managed services typically see 13–32% reduction in overall IT operational costs. Our subscription model converts unpredictable capital spending into fixed monthly operating expenses.',
  },
  {
    q: 'Do you handle equipment deployment and kitting?',
    a: 'Yes. Our kitting team handles hardware configuration, OS imaging, security agent deployment, application installation, asset tagging, and QA testing — devices arrive ready to use.',
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

export default function ITManagedServicesClient() {
  return (
    <main className="bg-[#F7F7FC]">
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
          <div className="mb-4 flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-white/60" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Managed IT Services</span>
          </div>
          <h1 className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]">
            Managed IT Services Tokyo: 24/7 Infrastructure Management &amp; Bilingual Support
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
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
              <div className="mb-4 flex items-center gap-2">
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-white/60" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">Managed IT Services</span>
              </div>
              <h1 className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]">
                Managed IT Services Tokyo: 24/7 Infrastructure Management &amp; Bilingual Support
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
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

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          {/* ── 01 OUTCOMES ── */}
          <section id="overview" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="What You Get" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">What you get</h2>
                <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                  Managed IT services provide comprehensive solutions for handling all aspects of your technology needs — from continuous monitoring and maintenance to troubleshooting and optimization of IT infrastructure.
                </p>

                <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Accordion */}
                  <div className="divide-y divide-[#0A0B19]/10 border-y border-[#0A0B19]/10">
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <BellAlertIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          24/7 monitoring and rapid incident response
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        24/7 support from professional providers ensures round-the-clock monitoring and rapid incident response. Managed service providers (MSPs) provide continuous monitoring essential for ensuring system stability and rapid incident response. A preventive maintenance model can result in 3.3 times less downtime compared to a reactive approach.
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <GlobeAltIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Bilingual IT support in English and Japanese
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        Bilingual IT support services are essential for effective communication between global headquarters and local operations in Japan. Many IT support providers in Tokyo offer bilingual support in English and Japanese to cater to diverse clientele. Bilingual IT support can enhance the efficiency of project management by facilitating communication between local vendors and international teams.
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <ServerStackIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Complete IT infrastructure management
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        Infrastructure management is a critical aspect of IT support, ensuring optimal performance and security of IT systems. Managed IT services include monitoring, maintenance, troubleshooting, and optimization of IT infrastructure. Access to specialized expertise and cutting-edge infrastructure ensures higher performance and reduced system downtime.
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <ShieldCheckIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Enhanced cybersecurity and compliance
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        Enhanced cybersecurity measures are critical in Japan&apos;s strict data compliance environment. Proactive threat prevention and regulatory compliance, such as ISO 27001, are part of managed security services. Managed IT services can provide tailored security solutions for businesses, including advanced access control and monitoring.
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <ChartBarIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Strategic IT planning and governance
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        Strategic IT planning involves developing a long-term technology roadmap aligned with business goals. Technology assessments are conducted to evaluate current infrastructure and identify gaps in business requirements. Ongoing governance in IT planning includes quarterly business reviews and performance monitoring to ensure alignment with business objectives.
                      </DisclosurePanel>
                    </Disclosure>
                  </div>

                  {/* Image */}
                  <div className="mt-10 lg:mt-0">
                    <div className="relative min-h-[420px] overflow-hidden rounded-2xl lg:sticky lg:top-32">
                      <Image
                        src="/images/banners/it-managed-services/monitoring.avif"
                        alt="24/7 IT infrastructure monitoring dashboard"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent" />

          {/* ── 02 SERVICES ── */}
          <section id="services" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="Managed IT Services" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                  Services we provide
                </h2>

                <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Accordion */}
                  <div className="divide-y divide-[#0A0B19]/10 border-y border-[#0A0B19]/10">
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <BellAlertIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Network monitoring and operations
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        <p>Real-time performance dashboards tracking CPU, memory, disk, and network metrics. Automated alerts escalate issues based on severity. Our engineers resolve 70%+ of alerts before users notice — keeping uptime high and disruptions near zero.</p>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <UserGroupIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Help desk and end-user support
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        <p>IT support services in Tokyo often include helpdesk support, which provides immediate assistance for technical issues. Remote support is a common IT support need, allowing technicians to troubleshoot issues directly over a secure internet connection. On-site support available same-day in Tokyo and Kanto region. Submit tickets by phone, email, chat, or self-service portal.</p>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <CpuChipIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Server and cloud management
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        <p>Proactive maintenance and dedicated server management in local data centers reduce operational risks associated with hardware failure or data loss. We handle Windows, Linux, VMware, and cloud workloads across AWS, Azure, and GCP — including provisioning, patching, and cost optimization.</p>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <ShieldCheckIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Managed security services
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        <p>Tailored security solutions including advanced access control and monitoring, endpoint detection and response (EDR), next-gen firewall configuration, and vulnerability assessments. Providers of managed IT services in Tokyo often emphasize the importance of compliance with local laws and regulations, including APPI, GDPR, and ISO 27001.</p>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <ArrowPathIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Business continuity and disaster recovery
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        <p>Automated backups with tested recovery procedures. Defined RTO/RPO for every critical system. Failover configurations, redundant network paths, and annual DR drills that verify your actual recovery procedures under realistic conditions.</p>
                      </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-4 rounded-xl px-4 transition-colors duration-200 hover:bg-white md:-mx-6 md:px-6">
                      <DisclosureButton className="group flex w-full items-center justify-between py-5 text-left">
                        <span className="flex items-center gap-3 text-base font-medium text-[#0A0B19]">
                          <WrenchScrewdriverIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/50" />
                          Kitting, procurement and project management
                        </span>
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0A0B19]/40 transition-transform duration-200 group-data-[open]:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="pb-5 pl-8 text-sm/7 text-[#0A0B19]/70">
                        <p>Companies in Japan typically require a diverse range of IT support, including on-site and remote support, infrastructure monitoring, asset management, office setup, relocation, and procurement. We handle equipment deployment, vendor coordination, and technology projects end-to-end.</p>
                      </DisclosurePanel>
                    </Disclosure>
                  </div>

                  {/* Image */}
                  <div className="mt-10 lg:mt-0">
                    <div className="relative min-h-[460px] overflow-hidden rounded-2xl lg:sticky lg:top-32">
                      <Image
                        src="/images/banners/it-managed-services/Infrastructure-Management.avif"
                        alt="IT infrastructure management services"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </section>

          {/* ── 03 WHY MSP ── */}
          <section id="why" className="bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
              <div className="mb-4 flex items-center gap-2">
                <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-white/40" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/40">Why Managed Services</span>
              </div>
              <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-white sm:text-5xl">
                Why businesses in Tokyo choose an MSP
              </h2>
              <p className="mt-4 max-w-3xl text-base/7 text-white/60">
                The Tokyo managed IT services market includes both domestic giants and specialized international firms. Managed IT services allow businesses to focus on their core operations while ensuring the smooth functioning of their IT systems.
              </p>
              <div className="mt-10 border-t border-white/10 pt-10">
                <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { num: '01', title: 'IT talent shortage', desc: '85% of Tokyo employers struggle to fill IT roles. Outsourcing to a managed service provider eliminates the hiring bottleneck and gives you a full team from day one.' },
                    { num: '02', title: 'Predictable costs', desc: 'Convert unpredictable CapEx into fixed monthly OpEx. Clients report 13–32% reduction in overall IT operational costs with subscription-based managed services.' },
                    { num: '03', title: 'Compliance expertise', desc: 'Experts assist in navigating complex data security regulations and industry-specific compliance requirements including APPI, GDPR, ISMAP, and ISO 27001.' },
                    { num: '04', title: 'Scalable growth', desc: 'Choosing a provider that can scale with business growth and offers expertise in emerging technology is crucial. Our services flex with your headcount and locations.' },
                  ].map((item, i) => (
                    <div
                      key={item.num}
                      className={[
                        i % 2 !== 0 ? 'sm:border-l sm:border-white/10 sm:pl-8' : '',
                        i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : '',
                      ].join(' ')}
                    >
                      <span className="font-serif text-[64px] font-normal leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)] sm:text-[80px]">
                        {item.num}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm/7 text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 04 SECURITY ── */}
          <section id="security" className="bg-[#F7F7FC]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
              <SectionLabel label="Security &amp; Compliance" />
              <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                Security and compliance snapshot
              </h2>
              <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="rounded-2xl border border-[#0A0B19]/10 bg-white p-6 sm:p-8">
                  <ul className="list-disc space-y-3 pl-6 text-base/8 text-[#0A0B19]/80">
                    <li><strong className="text-[#0A0B19]">Proactive threat prevention</strong> with advanced access control, EDR, and 24/7 threat monitoring across all managed devices.</li>
                    <li><strong className="text-[#0A0B19]">Regulatory compliance</strong> aligned with Japan&apos;s APPI, GDPR for international operations, and ISO 27001 — with audit-ready documentation.</li>
                    <li><strong className="text-[#0A0B19]">Vulnerability management</strong> including regular assessments, penetration testing, and security patching.</li>
                    <li><strong className="text-[#0A0B19]">Incident response</strong> with documented procedures, containment protocols, and post-incident reviews.</li>
                    <li><strong className="text-[#0A0B19]">Data protection</strong> with NIST-aligned data erasure, encrypted backups, and secure decommissioning through our <Link href="/services/itad-japan-apac-us" className="underline decoration-[#0A0B19]/30 underline-offset-2 hover:decoration-[#0A0B19]">ITAD services</Link>.</li>
                  </ul>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#E2E5EF]">
                    <div className="flex h-full min-h-[340px] items-center justify-center">
                      <span className="text-sm font-medium uppercase tracking-widest text-[#0A0B19]/20">Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 05 COVERAGE ── */}
          <section id="coverage" className="bg-[#F7F7FC]">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
              <SectionLabel label="Coverage" />
              <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">
                Bilingual IT support for global operations
              </h2>
              <p className="mt-4 max-w-3xl text-base/7 text-[#0A0B19]/70">
                Many managed IT service providers in Tokyo have experience working with both foreign and Japanese organizations. As your single point of contact, AKRIN simplifies communication and troubleshooting across all technology vendors.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <article className="rounded-2xl border border-[#0A0B19]/10 bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#0A0B19]">Japan (Tokyo Base)</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#0A0B19]/80">
                    <li>Managed IT services support a high concentration of corporate headquarters in Tokyo</li>
                    <li>On-site support same-day in Kanto, remote support nationwide</li>
                    <li>Help navigating local vendors, regulations, and business culture</li>
                    <li>Native Japanese and English — not just translation</li>
                  </ul>
                </article>
                <article className="rounded-2xl border border-[#0A0B19]/10 bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#0A0B19]">APAC &amp; US</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#0A0B19]/80">
                    <li>Coordination with HQ teams across Asia-Pacific and the United States</li>
                    <li>Standardized reporting and documentation for multi-region IT programs</li>
                    <li>Office setup, relocation, and procurement support for new markets</li>
                  </ul>
                </article>
                <article className="rounded-2xl border border-[#0A0B19]/10 bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#0A0B19]">Europe</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#0A0B19]/80">
                    <li>GDPR-compliant managed services for European companies with Japan operations</li>
                    <li>Cross-border data transfer compliance and documentation</li>
                    <li>Timezone-aware support coordination with EU headquarters</li>
                  </ul>
                </article>
              </div>

              {/* Coverage images */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-[#E2E5EF]">
                  <div className="flex h-full min-h-[220px] items-center justify-center">
                    <span className="text-sm font-medium uppercase tracking-widest text-[#0A0B19]/20">Image</span>
                  </div>
                </div>
                <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-[#E2E5EF]">
                  <div className="flex h-full min-h-[220px] items-center justify-center">
                    <span className="text-sm font-medium uppercase tracking-widest text-[#0A0B19]/20">Image</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent" />

          {/* ── 06 PROCESS ── */}
          <section id="process" className="bg-[#F7F7FC]">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
              <SectionLabel label="Process" />
              <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">How we work</h2>
              <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  { step: '1', title: 'Technology assessment', desc: 'Evaluate current infrastructure, identify gaps in business requirements, and build a cost-benefit analysis.' },
                  { step: '2', title: 'Roadmap and onboarding', desc: 'Prioritized technology roadmap with budget forecasts, vendor recommendations, and 12–36 month timeline.' },
                  { step: '3', title: 'Monitoring and management', desc: '24/7 monitoring, proactive maintenance, help desk activation, and security baseline deployment.' },
                  { step: '4', title: 'Ongoing governance', desc: 'Quarterly business reviews track KPIs, performance monitoring, and strategic adjustments for long-term success.' },
                  { step: '5', title: 'Scale and optimize', desc: 'Continuous improvement, capacity planning, and service scaling as your business and headcount grow.' },
                ].map((item) => (
                  <li key={item.step} className="rounded-2xl border border-[#0A0B19]/10 bg-white px-6 py-6">
                    <strong className="text-base font-semibold text-[#0A0B19]">{item.step}. {item.title}</strong>
                    <p className="mt-3 text-sm/7 text-[#0A0B19]/60">{item.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── 07 FAQ ── */}
          <section id="faq" className="bg-[#F7F7FC]">
            <RevealOnScroll>
              <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <SectionLabel label="FAQ" />
                <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-5xl">Frequently asked questions</h2>

                <dl className="mt-10 divide-y divide-[#0A0B19]/10">
                  {faqItems.map((faq) => (
                    <Disclosure
                      key={faq.q}
                      as="div"
                      className="-mx-4 rounded-lg px-4 py-6 first:pt-0 last:pb-0 transition-colors duration-200 hover:bg-white/40"
                    >
                      <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-[#0A0B19]">
                          <span className="text-base/7 font-semibold">{faq.q}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <PlusSmallIcon
                              aria-hidden="true"
                              className="size-6 text-[#0A0B19]/40 group-data-open:hidden"
                            />
                            <MinusSmallIcon
                              aria-hidden="true"
                              className="size-6 text-[#0A0B19]/40 group-not-data-open:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base/7 text-[#0A0B19]/70">{faq.a}</p>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </dl>
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
              IT Infrastructure Management in Japan: The Complete Guide
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#0A0B19]/70">
              Learn how international companies manage IT infrastructure in Japan — from vendor navigation and bilingual support to compliance frameworks and strategic planning.
            </p>
            <Link
              href="/blog/it-infrastructure-management-japan"
              className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-[#0A0B19] underline decoration-[#0A0B19]/30 underline-offset-4 transition-colors hover:decoration-[#0A0B19]"
            >
              Read the full guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-[#F7F7FC] pb-12 pt-4 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#0A0B19]/10 bg-white px-6 py-8 text-center sm:px-10 sm:py-10">
            <h2 className="font-serif text-2xl font-light tracking-[-0.04em] text-[#0A0B19] sm:text-3xl">
              Ready to simplify your IT operations?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#0A0B19]/80">
              Tell us about your infrastructure, compliance requirements, and business goals — we&apos;ll return a structured managed services plan with scope, SLAs, timeline, and cost estimate.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?service=managed-services"
                className="inline-flex items-center justify-center rounded-md bg-[#0066CC] px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#0052A3]"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#0A0B19]/20 bg-transparent px-5 py-2.5 text-base font-medium text-[#0A0B19] transition-colors hover:border-[#0066CC] hover:text-[#0066CC]"
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
