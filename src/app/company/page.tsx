import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Learn about AKRIN K.K., our mission, delivery approach, and commitment to secure, reliable IT operations in Japan.',
  alternates: {
    canonical: '/company',
    languages: {
      en: '/company',
      ja: '/ja/company',
      'x-default': '/company',
    },
  },
}

export default function CompanyPage() {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Container className="py-20 sm:py-28">
          <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
            Company
          </p>
          <Heading as="h1" className="mt-2 max-w-4xl">
            AKRIN K.K.
          </Heading>
          <p className="mt-8 max-w-3xl text-lg/8 text-gray-700">
            Founded in Tokyo by experienced infrastructure engineers, AKRIN
            delivers enterprise-grade IT operations with startup-level execution
            speed.
          </p>
        </Container>

        <Container className="pb-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <section className="rounded-2xl border border-gray-200 bg-[#FAFAF7] p-6">
              <h2 className="text-xl font-semibold text-gray-950">Mission</h2>
              <p className="mt-3 text-sm/7 text-gray-700">
                Give growth-focused businesses in Japan secure, reliable, and
                scalable IT foundations.
              </p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-[#FAFAF7] p-6">
              <h2 className="text-xl font-semibold text-gray-950">Approach</h2>
              <p className="mt-3 text-sm/7 text-gray-700">
                Engineer-led delivery, automation-first operations, and
                transparent communication in English and Japanese.
              </p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-[#FAFAF7] p-6">
              <h2 className="text-xl font-semibold text-gray-950">Coverage</h2>
              <p className="mt-3 text-sm/7 text-gray-700">
                Tokyo HQ with nationwide execution support across managed
                services, cloud, security, and infrastructure programs.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
