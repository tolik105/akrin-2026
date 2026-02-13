'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  BanknotesIcon,
  BellAlertIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  LifebuoyIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { Link } from '@/components/link'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SectionNav } from '@/components/SectionNav'

type SectionItem = {
  id: string
  label: string
  num: string
}

const managedServicesSectionItems: SectionItem[] = [
  { id: 'overview', label: 'OVERVIEW', num: '01' },
  { id: 'monitoring', label: 'MONITORING', num: '02' },
  { id: 'help-desk', label: 'HELP DESK', num: '03' },
  { id: 'infrastructure', label: 'INFRASTRUCTURE', num: '04' },
  { id: 'security', label: 'SECURITY', num: '05' },
  { id: 'continuity', label: 'CONTINUITY', num: '06' },
  { id: 'planning', label: 'PLANNING', num: '07' },
  { id: 'partnership', label: 'PARTNERSHIP', num: '08' },
  { id: 'faq', label: 'FAQ', num: '09' },
]

const monitoringFeatures = [
  {
    title: 'Real-time Performance',
    description:
      'System health dashboards tracking CPU, memory, disk, and network metrics across your entire infrastructure.',
    icon: ChartBarIcon,
  },
  {
    title: 'Automated Alerts',
    description:
      'Intelligent notification system that escalates issues based on severity and impact to your operations.',
    icon: BellAlertIcon,
  },
  {
    title: 'Proactive Resolution',
    description:
      'Our engineers resolve 70%+ of alerts before users notice, patching vulnerabilities, clearing bottlenecks, and preventing cascading failures.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Threat Detection',
    description:
      'Integrated security monitoring that identifies suspicious activity, unauthorized access attempts, and malware across your network.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Capacity Planning',
    description:
      'Trend analysis and forecasting that helps you scale infrastructure ahead of demand, not after performance degrades.',
    icon: ServerStackIcon,
  },
]

const helpDeskFeatures = [
  {
    title: '30-Minute Critical Response',
    description:
      'Severity 1 issues including system outages, security incidents, and production-down scenarios get an engineer engaged within 30 minutes.',
    icon: ClockIcon,
  },
  {
    title: '4-Hour Standard Resolution',
    description:
      'Routine requests including software issues, access problems, and configuration changes are handled within 4 business hours.',
    icon: LifebuoyIcon,
  },
  {
    title: 'Multi-Channel Access',
    description:
      'Submit tickets by phone, email, chat, or self-service portal, whichever is fastest for your team.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Remote & On-site Support',
    description:
      'Our Tokyo-based engineers provide hands-on support same-day in Kanto, with remote support available instantly for distributed teams.',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Bilingual by Default',
    description:
      'Every interaction including tickets, calls, reports, and escalations is available in Japanese and English with native-speaking engineers.',
    icon: GlobeAltIcon,
  },
]

const continuityCards = [
  {
    title: 'Backup & Recovery',
    description:
      'Automated daily backups with tested recovery procedures. We verify backup integrity regularly, not just when you need them. Recovery time objectives (RTO) and recovery point objectives (RPO) are defined and documented for every critical system.',
    icon: ArchiveBoxIcon,
  },
  {
    title: 'Redundancy Architecture',
    description:
      'Failover configurations, redundant network paths, and high-availability deployments that eliminate single points of failure across your infrastructure.',
    icon: ServerStackIcon,
  },
  {
    title: 'Rapid Incident Response',
    description:
      'When critical issues occur, our team mobilizes within minutes, containing impact, communicating with stakeholders, and executing recovery plans with documented procedures.',
    icon: ExclamationTriangleIcon,
  },
  {
    title: 'DR Testing & Validation',
    description:
      'Annual disaster recovery drills that test your actual recovery procedures under realistic conditions. We identify gaps before a real incident exposes them.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Documentation & Runbooks',
    description:
      'Complete operational documentation including network diagrams, escalation procedures, vendor contacts, and step-by-step recovery runbooks, maintained and updated quarterly.',
    icon: DocumentTextIcon,
  },
]

const partnershipValues = [
  'Proactive management that prevents problems instead of reacting to them',
  'Predictable monthly costs that simplify budgeting and eliminate surprise IT expenses',
  'Enterprise-level expertise and tooling without enterprise-level overhead',
  'Scalable services that flex with your headcount, locations, and growth trajectory',
]

const faqItems = [
  {
    question: "What's included in AKRIN's managed IT services?",
    answer:
      'Our managed services cover 24/7 network monitoring, unlimited help desk support with guaranteed SLAs, complete infrastructure management across servers, networks, and cloud platforms, integrated security services, business continuity and disaster recovery, and strategic IT planning with quarterly governance reviews. We also provide specialized services including kitting for new equipment deployment, office IT setup, and technology project management.',
  },
  {
    question: 'How fast do you respond to IT issues?',
    answer:
      'Critical incidents including system outages, security breaches, and production-impacting failures receive engineer engagement within 30 minutes. Standard support requests are resolved within 4 hours. Our proactive monitoring catches and resolves the majority of issues before they affect users, so most problems never become tickets in the first place.',
  },
  {
    question: 'Is all support available in Japanese and English?',
    answer:
      'Yes. Bilingual operations are fundamental to how we work, not an add-on. Every engineer, every ticket, every report, and every executive review is available in both Japanese and English. Our team includes native speakers of both languages, which matters for accurate technical communication, not just translation.',
  },
  {
    question: 'Can you integrate with our existing IT systems?',
    answer:
      "Absolutely. We start every engagement with a thorough assessment of your current environment. Our managed services work with all major platforms including Microsoft 365, Azure, AWS, GCP, VMware, and more, whether you're running on-premise, cloud, or hybrid infrastructure. We optimize what you have and plan improvements aligned with your business goals.",
  },
  {
    question: 'What kind of cost savings can we expect?',
    answer:
      'Businesses that switch to managed services typically see 13-32% reduction in overall IT operational costs compared to fully in-house teams. In Tokyo, comprehensive managed services typically run ¥20,000-¥30,000 per user monthly, a fraction of what equivalent in-house staffing costs. Our subscription model converts unpredictable capital spending into fixed monthly operating expenses.',
  },
  {
    question: 'How do you handle data destruction and ITAD?',
    answer:
      "We follow NIST 800-88 certified data erasure methods with software-based overwriting and physical destruction when required. Every processed asset receives a Certificate of Data Destruction with full chain-of-custody documentation. Our ITAD operations align with ISO 27001, Japan's APPI, and GDPR requirements, providing audit-ready compliance records for regulated industries.",
  },
  {
    question: 'Do you offer kitting services for equipment deployment?',
    answer:
      'Yes. Our kitting team handles hardware configuration, OS imaging, security agent deployment, application installation, asset tagging, peripheral bundling, and QA testing, all completed at our facility before equipment ships to your location. Devices arrive ready to use out of the box, which dramatically reduces on-site deployment time and ensures consistency across large rollouts.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'We use a subscription-based model with transparent per-user or per-device pricing. Costs are customized based on the scope of services, number of users and devices under management, SLA tier, and specific requirements like compliance reporting or on-site support frequency. No hidden fees, no surprise invoices, your finance team gets clear, predictable IT spending every month.',
  },
]

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-[#3462BD]" />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#17100E]/40">{label}</span>
    </div>
  )
}

function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex min-h-[260px] items-center justify-center rounded-xl border border-[#17100E]/10 bg-white/60 ${className}`}
    >
      {/* IMAGE PLACEHOLDER */}
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#17100E]/40">
        IMAGE PLACEHOLDER
      </p>
    </div>
  )
}

export default function ITManagedServicesClient() {
  return (
    <main className="bg-[#F4F3EC]">
      <section className="relative overflow-hidden bg-[#17100E] pt-28 sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,138,196,0.32)_0%,transparent_52%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(131,161,173,0.22)_0%,transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">
          <nav className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>{' '}
            <span className="px-1 text-white/45">&gt;</span>{' '}
            <span className="text-white">IT Managed Services</span>
          </nav>

          <div className="mt-8 max-w-4xl">
            <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
              Managed Services Tokyo: IT Solutions for Growing Businesses
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-100 sm:text-xl/8">
              We handle your infrastructure, security, and daily IT operations — so
              your teams can focus on driving revenue.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-base font-medium text-[#17100E] transition-colors hover:bg-gray-100"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="mt-14 max-w-4xl">
            <ImagePlaceholder className="min-h-[220px] border-white/20 bg-white/[0.04]" />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="overflow-visible lg:flex lg:items-start lg:gap-12">
          <SectionNav items={managedServicesSectionItems} />

          <div className="min-w-0 flex-1">
            <section id="overview" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="OVERVIEW" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    What Are Managed IT Services?
                  </h2>
                  <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-[#17100E]/80">
                    <p>
                      Managed IT services shift the responsibility of maintaining your
                      technology infrastructure from an in-house team to a dedicated
                      external partner. Instead of hiring, training, and retaining
                      specialists across networking, security, cloud, and helpdesk —
                      you get a single managed service provider (MSP) that covers all
                      of it under one agreement.
                    </p>
                    <div className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
                      <p>
                        Traditional IT support reacts to problems after they happen.
                        AKRIN&apos;s managed services take a different approach —
                        continuous monitoring, proactive maintenance, and strategic
                        planning that prevents issues before they reach your users.
                      </p>
                    </div>
                    <p>
                      AKRIN operates as a bilingual MSP with deep roots in the Japanese
                      market. Every engagement starts with a full assessment of your
                      current infrastructure, business requirements, and compliance
                      obligations. From there, we build a service plan that aligns with
                      your operational goals — whether that means 24/7 monitoring for a
                      200-person office or a complete infrastructure overhaul across
                      multiple locations.
                    </p>
                  </div>

                  <div className="mt-14 rounded-2xl border border-[#17100E]/10 bg-white p-8 sm:p-10">
                    <h3 className="font-serif text-2xl font-normal tracking-tight text-[#17100E] sm:text-3xl">
                      Why Businesses in Tokyo Choose Managed Services
                    </h3>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <UserGroupIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">
                          Talent Shortage
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          85% of Tokyo employers struggle to fill skilled IT roles.
                          Outsourcing to an MSP eliminates the hiring bottleneck and
                          gives you a full team from day one.
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <ShieldCheckIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">
                          Regulatory Pressure
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          Japan&apos;s APPI, GDPR for international operations, and
                          industry-specific frameworks like FSA and ISMAP demand
                          specialized compliance expertise most internal teams do not
                          have.
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <GlobeAltIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">
                          Bilingual Operations
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          International companies in Japan need seamless Japanese and
                          English support across tickets, reports, and stakeholder
                          communication, not just translation, but native fluency in
                          both.
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-[#FAFAF7] p-6">
                        <BanknotesIcon className="h-6 w-6 text-[#3462BD]" />
                        <h4 className="mt-4 text-lg font-semibold text-[#17100E]">
                          Predictable Costs
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                          Managed services convert unpredictable CapEx into fixed
                          monthly OpEx. Our clients report 13-32% reduction in overall
                          IT operational costs. Tokyo businesses typically invest
                          ¥20,000-¥30,000 per user monthly for comprehensive managed
                          services.
                        </p>
                      </article>
                    </div>

                    <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                      In 2026, leading MSPs in Japan are integrating AI-driven
                      automation and predictive analytics to reduce system downtime by
                      up to 40%, a capability that would cost millions to build
                      internally.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="monitoring" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="MONITORING" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    24/7 Network Monitoring
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                    <div>
                      <p className="text-base leading-relaxed text-[#17100E]/80">
                        Every managed services engagement at AKRIN starts with
                        continuous monitoring. Our operations center watches your
                        servers, networks, endpoints, and cloud environments around the
                        clock, identifying anomalies and resolving issues before they
                        affect your business.
                      </p>

                      <div className="mt-8 space-y-4">
                        {monitoringFeatures.map((feature) => {
                          const Icon = feature.icon
                          return (
                            <article
                              key={feature.title}
                              className="rounded-xl border border-[#17100E]/10 bg-white p-5"
                            >
                              <div className="flex items-start gap-4">
                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#3462BD]/10">
                                  <Icon className="h-5 w-5 text-[#3462BD]" />
                                </span>
                                <div>
                                  <h3 className="text-base font-semibold text-[#17100E]">
                                    {feature.title}
                                  </h3>
                                  <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </article>
                          )
                        })}
                      </div>

                      <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                        Proactive monitoring is what separates managed services from
                        traditional break-fix IT support. Instead of waiting for
                        something to fail and scrambling to restore service, our
                        systems detect early warning signs and our engineers take
                        action during maintenance windows, keeping your uptime high and
                        your disruptions near zero.
                      </p>
                    </div>

                    <div>
                      <ImagePlaceholder className="min-h-[520px]" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="help-desk" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="HELP DESK" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    Unlimited Help Desk Support
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                    <div className="order-2 lg:order-1">
                      <ImagePlaceholder className="min-h-[520px]" />
                    </div>

                    <div className="order-1 lg:order-2">
                      <p className="text-base leading-relaxed text-[#17100E]/80">
                        Your employees deserve fast, reliable technical support in
                        their language, on their schedule. AKRIN&apos;s managed help
                        desk provides unlimited support requests with guaranteed
                        response times, so IT issues never slow down your business.
                      </p>

                      <div className="mt-8 space-y-4">
                        {helpDeskFeatures.map((feature) => {
                          const Icon = feature.icon
                          return (
                            <article
                              key={feature.title}
                              className="rounded-xl border border-[#17100E]/10 bg-white p-5"
                            >
                              <div className="flex items-start gap-4">
                                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#3462BD]/10">
                                  <Icon className="h-5 w-5 text-[#3462BD]" />
                                </span>
                                <div>
                                  <h3 className="text-base font-semibold text-[#17100E]">
                                    {feature.title}
                                  </h3>
                                  <p className="mt-2 text-sm leading-relaxed text-[#17100E]/75">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </article>
                          )
                        })}
                      </div>

                      <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                        Our help desk operates as an extension of your team. We track
                        every request, measure resolution times, and report monthly on
                        support metrics, giving you full visibility into how IT support
                        is performing across your organization. This is not outsourced
                        support that disappears into a queue. It is a named team that
                        knows your environment and your people.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="infrastructure" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="INFRASTRUCTURE" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    Complete Infrastructure Management
                  </h2>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    AKRIN manages your entire technology stack, from physical servers
                    in your office to cloud workloads running on AWS, Azure, or GCP.
                    We handle the complexity of multi-platform environments so your
                    internal teams do not have to.
                  </p>

                  <div className="mt-10">
                    <ImagePlaceholder className="min-h-[260px]" />
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">
                        Server Management
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- Windows &amp; Linux server administration</li>
                        <li>- VMware and Hyper-V virtualization</li>
                        <li>- Performance tuning and optimization</li>
                        <li>- Security patching and update management</li>
                      </ul>
                    </article>

                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">
                        Network Management
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- WAN/LAN architecture and optimization</li>
                        <li>- Enterprise WiFi design and management</li>
                        <li>- Next-gen firewall configuration</li>
                        <li>- VPN deployment and maintenance</li>
                      </ul>
                    </article>

                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">
                        Cloud Operations
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- Microsoft 365 administration</li>
                        <li>- AWS, Azure, GCP workload management</li>
                        <li>- Backup and disaster recovery</li>
                        <li>- Cloud cost optimization and rightsizing</li>
                      </ul>
                    </article>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">
                        Endpoint Security
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- Device protection and EDR</li>
                        <li>- Real-time threat monitoring</li>
                        <li>- Mobile device management (MDM)</li>
                      </ul>
                    </article>

                    <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#17100E]">
                        Compliance Management
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#17100E]/75">
                        <li>- APPI, GDPR, ISMAP alignment</li>
                        <li>- Vulnerability scanning and assessments</li>
                        <li>- Audit-ready documentation and reporting</li>
                      </ul>
                    </article>
                  </div>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    Whether you&apos;re running a hybrid environment with on-premise
                    servers and cloud services, or fully cloud-native, our
                    infrastructure management adapts to your architecture. We handle
                    provisioning, monitoring, maintenance, and optimization across
                    every platform, giving you a single partner for all your
                    technology operations.
                  </p>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="security" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="SECURITY" />
                  <div className="rounded-2xl border border-[#3462BD]/20 bg-[#3462BD]/[0.06] p-8 sm:p-10">
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      Security Services
                    </h2>

                    <div className="mt-8 space-y-6 text-base leading-relaxed text-[#17100E]/80">
                      <p>
                        Cybersecurity is not optional, it is embedded in every layer of
                        AKRIN&apos;s managed services. Our security practice protects
                        your business against evolving threats through continuous
                        monitoring, proactive defense, and rapid incident response. We
                        do not bolt security on as an afterthought; it is built into
                        every system we manage.
                      </p>
                      <p>
                        Our security services cover the full spectrum: network
                        perimeter defense with next-generation firewalls, endpoint
                        detection and response (EDR) across all managed devices,
                        regular vulnerability assessments and penetration testing, and
                        compliance monitoring for APPI, GDPR, and industry-specific
                        regulations. Every client environment receives a tailored
                        security posture that reflects their risk profile, industry
                        requirements, and data sensitivity.
                      </p>
                      <p>
                        When incidents occur, our response team acts immediately,
                        containing threats, preserving evidence, and restoring
                        operations with minimal business impact. We maintain documented
                        incident response procedures, conduct post-incident reviews,
                        and continuously update defensive measures based on emerging
                        threat intelligence. For businesses in Tokyo handling sensitive
                        data, our security services provide the protection and
                        compliance assurance that regulators and clients expect.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="continuity" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="CONTINUITY" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    Business Continuity &amp; Disaster Recovery
                  </h2>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    Downtime costs money. Every minute your systems are unavailable,
                    your teams cannot work, your customers cannot reach you, and your
                    revenue stops. AKRIN&apos;s business continuity services ensure
                    your operations keep running, even when hardware fails, disasters
                    strike, or unexpected disruptions occur.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {continuityCards.map((card) => {
                      const Icon = card.icon
                      return (
                        <article
                          key={card.title}
                          className="rounded-xl border border-[#17100E]/10 bg-white p-6"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#3462BD]/10">
                            <Icon className="h-5 w-5 text-[#3462BD]" />
                          </span>
                          <h3 className="mt-4 text-lg font-semibold text-[#17100E]">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                            {card.description}
                          </p>
                        </article>
                      )
                    })}
                  </div>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    Business continuity is not just about technology, it is about
                    having the right processes, the right documentation, and the right
                    team ready to execute when it matters most. AKRIN builds
                    resilience into every managed services engagement, so disruptions
                    become manageable events instead of business-threatening crises.
                  </p>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="planning" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="PLANNING" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    Strategic IT Planning &amp; Governance
                  </h2>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    Technology decisions should drive business outcomes, not just keep
                    the lights on. AKRIN&apos;s strategic planning services align your
                    IT investments with your growth objectives through structured
                    assessment, roadmap development, and ongoing governance.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
                    <div className="space-y-4 lg:col-span-3">
                      <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3462BD]">
                          Step 1
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[#17100E]">
                          Technology Assessment
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                          We evaluate your current infrastructure, document business
                          requirements, identify technology gaps, and build a
                          cost-benefit analysis, giving you a clear picture of where
                          you stand and what needs to change.
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3462BD]">
                          Step 2
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[#17100E]">
                          Roadmap Development
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                          Based on the assessment, we create a prioritized technology
                          roadmap with budget forecasts, vendor recommendations,
                          implementation timelines, and risk mitigation strategies,
                          typically spanning 12-36 months.
                        </p>
                      </article>

                      <article className="rounded-xl border border-[#17100E]/10 bg-white p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3462BD]">
                          Step 3
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-[#17100E]">
                          Ongoing Governance
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#17100E]/75">
                          Quarterly business reviews track progress against the
                          roadmap. We monitor KPIs, report on service performance,
                          recommend adjustments, and ensure your technology strategy
                          evolves as your business grows.
                        </p>
                      </article>
                    </div>

                    <div className="lg:col-span-2">
                      <ImagePlaceholder className="min-h-[100%]" />
                    </div>
                  </div>

                  <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#17100E]/80">
                    Strategic IT governance ensures your technology spending delivers
                    measurable value, not just operational upkeep. Our quarterly
                    reviews give leadership clear visibility into IT performance,
                    spending trends, and upcoming investments, enabling confident
                    decision-making backed by real data.
                  </p>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="partnership" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <SectionLabel label="PARTNERSHIP" />
                  <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                    Your Trusted IT Partner in Tokyo
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                    <div>
                      <p className="text-base leading-relaxed text-[#17100E]/80">
                        The right managed service provider is not just a vendor, they
                        are a strategic partner who understands your business,
                        anticipates your needs, and grows with you. AKRIN has built
                        lasting partnerships with businesses across Japan by combining
                        enterprise-grade capabilities with the responsiveness and
                        personal attention of a dedicated team.
                      </p>

                      <div className="mt-8 space-y-4">
                        {partnershipValues.map((value) => (
                          <div key={value} className="flex items-start gap-3">
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#3462BD]" />
                            <p className="text-sm leading-relaxed text-[#17100E]/80">{value}</p>
                          </div>
                        ))}
                      </div>

                      <p className="mt-8 text-base leading-relaxed text-[#17100E]/80">
                        Our services extend beyond traditional IT support. We handle
                        office IT setup for new locations, manage technology aspects of
                        office relocations, provide kitting services for new equipment
                        deployment, and deliver project management for complex
                        technology initiatives. Everything your organization needs from
                        a technology partner, under one roof, in both languages.
                      </p>

                      <p className="mt-6 text-base leading-relaxed text-[#17100E]/80">
                        When evaluating managed service providers, look for proven
                        experience in your industry, transparent pricing without hidden
                        costs, strong client references, documented SLAs with
                        measurable response times, and the ability to scale services as
                        your needs evolve. Ask about their team&apos;s qualifications,
                        security certifications, and disaster recovery capabilities. The
                        best providers do not just answer tickets, they become an
                        integral part of how your business operates.
                      </p>

                      <p className="mt-6 text-base leading-relaxed text-[#17100E]/80">
                        From startups establishing their first Tokyo office to
                        established enterprises managing hundreds of endpoints across
                        Japan, AKRIN provides the technology foundation that lets your
                        business move faster with less risk.
                      </p>
                    </div>

                    <div>
                      <ImagePlaceholder className="min-h-[520px]" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

            <section id="faq" className="bg-[#F4F3EC]">
              <RevealOnScroll>
                <div className="py-20 sm:py-28">
                  <div className="max-w-4xl">
                    <SectionLabel label="FAQ" />
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
                      Frequently Asked Questions
                    </h2>

                    <dl className="mt-16 divide-y divide-[#17100E]/10">
                      {faqItems.map((item) => (
                        <Disclosure
                          key={item.question}
                          as="div"
                          className="-mx-4 rounded-lg px-4 py-6 first:pt-0 last:pb-0 transition-colors duration-200 hover:bg-white/40"
                        >
                          <dt>
                            <DisclosureButton className="group flex w-full items-start justify-between text-left text-[#17100E]">
                              <span className="text-base/7 font-semibold">{item.question}</span>
                              <span className="ml-6 flex h-7 items-center">
                                <PlusSmallIcon
                                  aria-hidden="true"
                                  className="size-6 text-[#17100E]/40 group-data-open:hidden"
                                />
                                <MinusSmallIcon
                                  aria-hidden="true"
                                  className="size-6 text-[#17100E]/40 group-not-data-open:hidden"
                                />
                              </span>
                            </DisclosureButton>
                          </dt>
                          <DisclosurePanel as="dd" className="mt-2 pr-12">
                            <p className="text-base/7 text-[#17100E]/70">{item.answer}</p>
                          </DisclosurePanel>
                        </Disclosure>
                      ))}
                    </dl>
                  </div>
                </div>
              </RevealOnScroll>
            </section>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

      <section className="bg-[#F4F3EC]" id="cta">
        <div className="px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-xl border border-[#17100E]/10 bg-white px-6 py-16 text-center sm:px-10">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-[#17100E] sm:text-4xl">
                Ready to Transform Your IT Operations?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base/7 text-[#17100E]/80">
                Get a customized managed services plan built around your
                infrastructure, compliance requirements, and business goals, starting
                with a free assessment.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#17100E] px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#2A2523]"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
