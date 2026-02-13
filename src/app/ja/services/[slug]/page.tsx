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
    .filter(
      (service) =>
        service.slug !== 'it-asset-management' &&
        service.slug !== 'it-managed-services',
    )
    .map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.title.ja} | サービス`,
    description: service.intro.ja,
    alternates: {
      canonical: `/ja/services/${service.slug}`,
      languages: {
        en: `/services/${service.slug}`,
        ja: `/ja/services/${service.slug}`,
        'x-default': `/services/${service.slug}`,
      },
    },
    openGraph: {
      title: `${service.title.ja} | サービス`,
      description: service.intro.ja,
      url: `/ja/services/${service.slug}`,
      type: 'website',
    },
  }
}

export default async function JapaneseServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title.ja,
    serviceType: service.title.ja,
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: `https://akrin.jp/ja/services/${service.slug}`,
    description: service.intro.ja,
  }

  return (
    <div className="overflow-x-clip bg-white">
      <Navbar />
      <main>
        <section id="overview">
          <Container className="py-20 sm:py-28">
            <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
              サービス
            </p>
            <Heading as="h1" className="mt-2 max-w-4xl">
              {service.title.ja}
            </Heading>
            <p className="mt-8 max-w-3xl text-lg/8 text-gray-700">
              {service.intro.ja}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/ja/contact">相談を予約</Button>
              <Button href="/ja/services" variant="secondary">
                すべてのサービス
              </Button>
            </div>
          </Container>
        </section>

        <section id="key-services">
          <Container className="pb-24">
            <div className="rounded-2xl border border-gray-200 bg-[#FAFAF7] p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                主な提供内容
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.keyServices.ja.map((item) => (
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
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
