import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import { allServices, getServiceBySlug } from '@/lib/service-catalog'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allServices
    .filter((service) => service.slug !== 'it-asset-management')
    .map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.title.en} | Services`,
    description: service.intro.en,
    alternates: {
      canonical: `/services/${service.slug}`,
      languages: {
        en: `/services/${service.slug}`,
        ja: `/ja/services/${service.slug}`,
        'x-default': `/services/${service.slug}`,
      },
    },
    openGraph: {
      title: `${service.title.en} | Services`,
      description: service.intro.en,
      url: `/services/${service.slug}`,
      type: 'website',
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title.en,
    serviceType: service.title.en,
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: `https://akrin.jp/services/${service.slug}`,
    description: service.intro.en,
  }

  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Container className="py-20 sm:py-28">
          <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
            Services
          </p>
          <Heading as="h1" className="mt-2 max-w-4xl">
            {service.title.en}
          </Heading>
          <p className="mt-8 max-w-3xl text-lg/8 text-gray-700">
            {service.intro.en}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/contact">Schedule Consultation</Button>
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </Container>

        <Container className="pb-24">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
              Key Services
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.keyServices.en.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm/7 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
