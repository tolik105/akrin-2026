import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { SectionNav } from '@/components/SectionNav'
import { Link } from '@/components/link'
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
        service.slug !== 'it-managed-services' &&
        service.slug !== 'cloud-infrastructure',
    )
    .map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  const metaTitle = service.meta?.en.title || `${service.title.en} | Services`
  const metaDescription = service.meta?.en.description || service.intro.en

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
      languages: {
        en: `/services/${service.slug}`,
        ja: `/ja/services/${service.slug}`,
        'x-default': `/services/${service.slug}`,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
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

  const detail = service.details?.en
  const hasDetailedContent = Boolean(
    detail?.whatItIs?.length ||
      detail?.whatYouGet?.length ||
      detail?.whyBody ||
      detail?.whoItems?.length ||
      detail?.ctaTitle,
  )

  const sectionItems = hasDetailedContent
    ? [
        { id: 'overview', label: 'WHAT IT IS', num: '01' },
        { id: 'what-you-get', label: 'WHAT YOU GET', num: '02' },
        { id: 'why-akrin', label: 'WHY AKRIN', num: '03' },
        { id: 'who-its-for', label: "WHO IT'S FOR", num: '04' },
        { id: 'cta', label: 'NEXT STEP', num: '05' },
      ]
    : [
        { id: 'overview', label: 'OVERVIEW', num: '01' },
        { id: 'key-services', label: 'SERVICES', num: '02' },
      ]

  const heroTitle = detail?.heroTitle || service.title.en
  const heroLead = detail?.heroLead || service.intro.en
  const heroPrimaryCtaLabel = detail?.ctaPrimaryLabel || 'Schedule Consultation'
  const heroPrimaryCtaHref = detail?.ctaPrimaryHref || '/contact'
  const heroSecondaryCtaLabel = detail?.ctaSecondaryLabel || 'View All Services'
  const heroSecondaryCtaHref = detail?.ctaSecondaryHref || '/services'

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
    description: service.meta?.en.description || service.intro.en,
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <main>
        <section id="hero" className="relative overflow-hidden bg-[#02304F]">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 45%, rgba(2,48,79,0.8) 65%, rgba(2,48,79,0.45) 85%, rgba(2,48,79,0.25) 100%)',
            }}
          />
          <Container className="relative py-16 sm:py-20 lg:py-24">
            <nav className="mb-4 flex items-center gap-2 text-sm">
              <Link
                href="/services"
                className="text-white/50 transition-colors hover:text-white/80"
              >
                Services
              </Link>
              <span className="text-white/30">&rsaquo;</span>
              <span className="font-medium text-white">{service.title.en}</span>
            </nav>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-12">
              <div>
                <h1 className="font-serif text-3xl leading-tight font-light tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
                  {heroTitle}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  {heroLead}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={heroPrimaryCtaHref}>{heroPrimaryCtaLabel}</Button>
                  <Button href={heroSecondaryCtaHref} variant="secondary">
                    {heroSecondaryCtaLabel}
                  </Button>
                </div>
              </div>
              <div className="min-h-[220px] rounded-2xl border border-dashed border-white/30 bg-white/[0.04] p-6">
                <div className="flex h-full min-h-[172px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="font-mono text-xs tracking-[0.14em] text-white/45 uppercase">
                    Image Placeholder
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <SectionNav variant="ribbon" items={sectionItems} ariaLabel="Page sections" />

        <section id="overview" className="bg-white">
          <Container className="py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              {detail?.whatItIsTitle || 'What It Is'}
            </h2>
            {detail?.whatItIs?.length ? (
              <div className="mt-6 space-y-5 max-w-4xl">
                {detail.whatItIs.map((paragraph) => (
                  <p key={paragraph} className="text-base/8 text-gray-700 sm:text-lg/8">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-6 max-w-3xl text-base/8 text-gray-700 sm:text-lg/8">
                {service.intro.en}
              </p>
            )}
          </Container>
        </section>

        <section id={hasDetailedContent ? 'what-you-get' : 'key-services'}>
          <Container className="pb-24">
            <div className="rounded-2xl border border-gray-200 bg-[#FAFAFC] p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                {detail?.whatYouGetTitle || 'Key Services'}
              </h2>
              {detail?.whatYouGet?.length ? (
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {detail.whatYouGet.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-gray-200 bg-white px-5 py-4"
                    >
                      <h3 className="text-sm/6 font-semibold text-gray-950">{item.title}</h3>
                      <p className="mt-2 text-sm/7 text-gray-700">{item.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
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
              )}
            </div>
          </Container>
        </section>

        {detail?.whyBody ? (
          <section id="why-akrin" className="bg-white">
            <Container className="pb-20">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                {detail.whyTitle || 'Why AKRIN'}
              </h2>
              <p className="mt-6 max-w-4xl text-base/8 text-gray-700 sm:text-lg/8">
                {detail.whyBody}
              </p>
            </Container>
          </section>
        ) : null}

        {detail?.whoItems?.length ? (
          <section id="who-its-for" className="bg-white">
            <Container className="pb-20">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                {detail.whoTitle || "Who It's For"}
              </h2>
              <ul className="mt-6 space-y-3">
                {detail.whoItems.map((item) => (
                  <li key={item} className="text-base/8 text-gray-700 sm:text-lg/8">
                    • {item}
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}

        {detail?.ctaTitle ? (
          <section id="cta" className="pb-24">
            <Container>
              <div className="rounded-2xl border border-gray-200 bg-[#FAFAFC] p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                  {detail.ctaTitle}
                </h2>
                {detail.ctaBody ? (
                  <p className="mt-4 max-w-3xl text-base/8 text-gray-700 sm:text-lg/8">
                    {detail.ctaBody}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={detail.ctaPrimaryHref || '/contact'}>
                    {detail.ctaPrimaryLabel || 'Contact Us'}
                  </Button>
                  <Button href={detail.ctaSecondaryHref || '/contact'} variant="secondary">
                    {detail.ctaSecondaryLabel || 'Schedule Consultation'}
                  </Button>
                </div>
              </div>
            </Container>
          </section>
        ) : null}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
