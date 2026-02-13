'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Link } from '@/components/link'
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

const faqItems = [
  {
    q: 'How fast can you schedule a pickup?',
    a: 'Tokyo metro pickups can often be arranged within a few business days depending on site access and packaging requirements. For large or secure facilities, we align to your change calendar and access rules.',
  },
  {
    q: 'Can you destroy data on-site?',
    a: 'Yes. On-site destruction or witness processing is available for projects that require immediate risk removal. If on-site is not required, secure facility processing with evidence and certificates is typically more cost-effective.',
  },
  {
    q: 'What about value recovery?',
    a: 'We can grade eligible devices for refurbishment and remarketing after verified sanitization. You receive clear reporting on which assets were reused/resold versus recycled, and any agreed credit model.',
  },
  {
    q: 'Do you handle multi-country projects?',
    a: 'Yes. We provide one project manager, consistent templates, and consolidated reporting across Japan / APAC / US, so procurement and compliance teams get a single audit pack.',
  },
  {
    q: 'Can you work in secure facilities?',
    a: 'Yes. We follow your security rules (escorts, restricted windows, packaging controls, sign-offs) and design the chain-of-custody steps to support audits.',
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
      className={`flex min-h-[240px] items-center justify-center rounded-2xl border border-white/20 bg-white/[0.04] ${className}`}
      aria-hidden="true"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
        IMAGE PLACEHOLDER
      </span>
    </div>
  )
}

export default function ITADPageClient() {
  return (
    <main className="bg-[#F4F3EC]">
      <section className="relative overflow-hidden bg-[#17100E] pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,138,196,0.28)_0%,transparent_55%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
          <nav className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>{' '}
            <span className="px-1 text-white/45">&gt;</span>{' '}
            <span className="text-white">ITAD Japan / APAC / US</span>
          </nav>

          <div className="mt-8 max-w-5xl">
            <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
              ITAD Tokyo &amp; Japan: Secure IT Asset Disposition (Japan / APAC / US)
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-100 sm:text-xl/8">
              AKRIN provides end-to-end <strong>IT Asset Disposition (ITAD)</strong> for companies that need to retire laptops,
              servers, network gear, and storage media <strong>securely, legally, and sustainably</strong>, with clear reporting for
              audits, compliance, and ESG.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg/7">
              <strong>Best fit for:</strong> office relocations, data center refresh, lifecycle swaps, employee device returns, and
              multi-site decomm projects.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact?service=itad"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-base font-medium text-[#17100E] transition-colors hover:bg-gray-100"
              >
                Start Your ITAD Project
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Contact Team
              </Link>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="overflow-visible lg:flex lg:items-start lg:gap-12">
          <SectionNav items={itadSectionItems} />

          <div className="min-w-0 flex-1">
            <section id="overview" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="What You Get" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">What you get</h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">Secure chain-of-custody:</strong> labeled handling, sealed packaging, documented hand-offs.
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">Data destruction you can prove:</strong> verified erasure and/or physical destruction with serial-level evidence.
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">Value recovery:</strong> grading, refurbishment pathways, and resale reporting when eligible.
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">Compliant recycling:</strong> environmentally sound processing for non-reusable assets.
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80 md:col-span-2">
              <strong className="text-[#17100E]">Audit-ready documentation:</strong> inventory, certificates, and final disposition summary.
            </li>
          </ul>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="services" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="ITAD Services" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
            ITAD services we provide
          </h2>

          <div className="mt-10 space-y-10">
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">1) Secure decommissioning &amp; logistics</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>On-site pickup / collection (single site or multi-site)</li>
                <li>Asset labeling + serial capture (or reconciliation against your asset register)</li>
                <li>Secure packaging (tamper-evident where required) and controlled transportation</li>
                <li>Site access support: escorts, restricted windows, sign-in/out, photo proof (optional)</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">2) Data sanitization &amp; destruction (on-site or off-site)</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">Choose the method based on risk, policy, and the asset type:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>
                  <strong className="text-[#17100E]">Software erasure / cryptographic erase</strong> (verification reports), aligned to <strong className="text-[#17100E]">NIST SP 800-88 Rev.1</strong> concepts (Clear / Purge / Destroy).
                </li>
                <li><strong className="text-[#17100E]">Physical destruction</strong> (e.g., shredding / crushing) for high-risk media or non-wipeable devices.</li>
                <li><strong className="text-[#17100E]">Witness options</strong> for projects requiring immediate risk removal.</li>
              </ul>
              <p className="mt-4 text-base/8 text-[#17100E]/80">
                You receive a <strong className="text-[#17100E]">Certificate of Data Destruction / Data Erasure</strong> with supporting evidence (media serials and/or processing logs).
              </p>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">3) Asset audit, refurbishment &amp; remarketing</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">For eligible assets (condition + specs-dependent):</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>Function testing + grading</li>
                <li>Refurbishment pathways (when feasible)</li>
                <li>Resale / value recovery reporting (per your agreed model)</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">4) Compliant recycling (e-waste)</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">For non-reusable assets:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>Material separation and responsible downstream processing</li>
                <li>Documentation for final destination and environmental compliance</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">5) Reporting &amp; certificates</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">Typical deliverables:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>Serialized inventory (CSV/PDF)</li>
                <li>Chain-of-custody log (handoff history)</li>
                <li>Certificate(s): data destruction / recycling / disposal (as applicable)</li>
                <li>Final summary report (quantities, outcomes, and exceptions)</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="why-itad" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="Why ITAD Now" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
            Why ITAD matters
          </h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <p className="text-base leading-relaxed text-[#17100E]/80">
              Global e-waste is rising faster than collection systems. <strong className="text-[#17100E]">In 2022, the world generated ~62 million tonnes of e-waste and only ~22.3% was documented as formally collected and recycled</strong>, with projections rising toward ~82 million tonnes by 2030.
            </p>
            <p className="mt-4 text-sm text-[#17100E]/60">
              Source: ITU/UNITAR Global E-waste Monitor 2024.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#17100E]/80">
              For your compliance program, the key takeaway is simple: <strong className="text-[#17100E]">documented disposal + verified data destruction</strong> is now expected in most enterprise policies and ESG reporting.
            </p>
          </div>
        </div>
      </section>

      <section id="compliance" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24 lg:px-8">
          <SectionLabel label="Compliance" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
            Japan compliance snapshot
          </h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <ul className="list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
              <li><strong className="text-[#17100E]">Proper waste treatment and documentation</strong> aligned with Japan&apos;s waste management framework.</li>
              <li><strong className="text-[#17100E]">Industrial waste tracking workflows</strong> (including manifest-style tracking where applicable).</li>
              <li><strong className="text-[#17100E]">Downstream partner vetting</strong> (licenses / permitted processing / documented outcomes).</li>
              <li><strong className="text-[#17100E]">Data protection alignment:</strong> minimize exposure windows; keep evidence at the serial level.</li>
              <li><strong className="text-[#17100E]">Exception handling:</strong> locked devices, failed drives, damaged media are recorded explicitly.</li>
            </ul>
            <p className="mt-4 text-base/8 text-[#17100E]/80">
              If your client requires a specific form of certificate, we standardize the deliverable package to match your audit template.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="coverage" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="Coverage" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
            Coverage: Japan / APAC / United States
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-[#17100E]">Japan</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#17100E]/80">
                <li>Tokyo metro and nationwide project coordination</li>
                <li>Office relocations, warehouse clearouts, and data center refresh support</li>
                <li>Bilingual project communication available (JP/EN)</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-[#17100E]">APAC</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#17100E]/80">
                <li>Regional coordination through vetted partners</li>
                <li>Standardized inventory and certificate templates across countries</li>
                <li>Consolidated reporting for HQ procurement and compliance</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-[#17100E]">United States</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#17100E]/80">
                <li>Support for US-side retirement programs and multi-region projects</li>
                <li>Documentation aligned to enterprise audit expectations</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F3EC] pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="h-56 rounded-2xl border border-[#17100E]/10 bg-white" aria-hidden="true" />
            <div className="h-56 rounded-2xl border border-[#17100E]/10 bg-white" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="process" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="Process" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">How the process works</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">1. Scope &amp; risk alignment</strong>
              <p className="mt-2">Asset list review, data destruction requirements, site constraints, timeline.</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">2. Pickup &amp; custody setup</strong>
              <p className="mt-2">Labeling approach, packaging, access rules, handoff documentation.</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">3. Processing</strong>
              <p className="mt-2">Erasure and/or destruction, testing for remarketing eligibility, recycling for non-reusable items.</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">4. Reporting</strong>
              <p className="mt-2">Inventory reconciliation + exceptions, certificates, and summary report.</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">5. Closeout</strong>
              <p className="mt-2">Final audit pack delivered; value recovery results reported (if applicable).</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="equipment" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24 lg:px-8">
          <SectionLabel label="Equipment" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">Equipment we handle</h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <ul className="grid gap-2 text-base/8 text-[#17100E]/80 sm:grid-cols-2 lg:grid-cols-3">
              <li>• Laptops / desktops / workstations</li>
              <li>• Servers / storage arrays / NAS / SAN components</li>
              <li>• HDD / SSD / removable media</li>
              <li>• Network gear: switches, routers, firewalls, APs</li>
              <li>• Monitors, peripherals, docks, accessories (by project scope)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="assurance" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24 lg:px-8">
          <SectionLabel label="Assurance" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">Compliance &amp; assurance</h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <ul className="list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
              <li><strong className="text-[#17100E]">NIST SP 800-88 Rev.1-aligned sanitization approach</strong> (method selection + verification).</li>
              <li><strong className="text-[#17100E]">Chain-of-custody</strong> designed for audits and security reviews.</li>
              <li><strong className="text-[#17100E]">Documented exceptions</strong> (erase failed / locked / damaged media) with recommended treatment.</li>
              <li><strong className="text-[#17100E]">ESG-friendly outcomes:</strong> prioritize reuse/refurbishment when safe and appropriate; recycle responsibly when not.</li>
            </ul>
            <p className="mt-4 text-sm/7 text-[#17100E]/70">
              Note: We describe alignment to standards and best practices. If your procurement requires specific certifications, we&apos;ll confirm availability per project and downstream partner.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="faq" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="FAQ" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">Frequently asked questions</h2>

          <dl className="mt-16 divide-y divide-[#17100E]/10">
            {faqItems.map((faq) => (
              <Disclosure
                key={faq.q}
                as="div"
                className="py-6 first:pt-0 last:pb-0 -mx-4 rounded-lg px-4 transition-colors duration-200 hover:bg-white/40"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-[#17100E]">
                    <span className="text-base/7 font-semibold">{faq.q}</span>
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
                  <p className="text-base/7 text-[#17100E]/70">{faq.a}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </section>

          </div>
        </div>
      </div>

      <section id="cta" className="bg-[#F4F3EC] pb-20 pt-4 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#17100E]/10 bg-white px-6 py-12 text-center sm:px-10 sm:py-14">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-[#17100E] sm:text-4xl">
              Ready to decommission with confidence?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#17100E]/80">
              Send your asset list (or export) and we&apos;ll return a structured ITAD plan: recommended methods, logistics approach, expected deliverables, timeline, and cost breakdown.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?service=itad"
                className="inline-flex items-center justify-center rounded-md bg-[#17100E] px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#2A2523]"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#17100E] bg-transparent px-5 py-2.5 text-base font-medium text-[#17100E] transition-colors hover:bg-black/5"
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
