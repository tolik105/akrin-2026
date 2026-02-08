import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'AKRIN engagement models for managed services, project delivery, and long-term IT operations.',
  alternates: {
    canonical: '/pricing',
    languages: {
      en: '/pricing',
      ja: '/ja/pricing',
      'x-default': '/pricing',
    },
  },
}

const tiers = [
  {
    name: 'Managed Operations',
    description:
      'Continuous 24/7 operational support with monitoring, incident response, and governance.',
    fit: 'Organizations requiring day-to-day reliability and fast support.',
  },
  {
    name: 'Project Delivery',
    description:
      'Fixed-scope implementation for cloud migrations, network upgrades, and security programs.',
    fit: 'Teams running transformation initiatives with clear milestones.',
  },
  {
    name: 'Advisory & Retainer',
    description:
      'Strategic consulting, architecture reviews, and leadership guidance.',
    fit: 'Companies that need ongoing technical leadership and planning support.',
  },
]

export default function PricingPage() {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Container className="py-20 sm:py-28">
          <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
            Pricing
          </p>
          <Heading as="h1" className="mt-2 max-w-4xl">
            Engagement models aligned to your operating needs.
          </Heading>
          <p className="mt-8 max-w-3xl text-lg/8 text-gray-700">
            We scope each engagement to your environment, risk profile, and
            business priorities. Contact us for tailored pricing.
          </p>
        </Container>

        <Container className="pb-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <section
                key={tier.name}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <h2 className="text-xl font-semibold tracking-tight text-gray-950">
                  {tier.name}
                </h2>
                <p className="mt-3 text-sm/7 text-gray-700">{tier.description}</p>
                <p className="mt-3 text-sm/7 text-gray-600">{tier.fit}</p>
              </section>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact">Request Proposal</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
