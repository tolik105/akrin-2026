import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { allServices } from '@/lib/service-catalog'
import { generatePageMetadata } from '@/lib/metadata-helpers'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'IT Services for Businesses in Japan | Akrin',
  description:
    'Explore our comprehensive IT services including Managed IT, Cybersecurity, Cloud Solutions, and IT Consulting. We also offer specialized services in Penetration Testing, WiFi Assessment, and IT Security.',
  keywords: [
    'IT services Japan',
    'managed IT services',
    'cybersecurity solutions',
    'cloud services',
    'IT consulting',
  ],
  path: '/services',
  image: '/og-image.png',
})

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.jp' },
  { name: 'Services', url: 'https://akrin.jp/services' },
]

export default function ITServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'AKRIN Services',
            itemListElement: allServices.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title.en,
                url: `https://akrin.jp/services/${service.slug}`,
                description: service.intro.en,
              },
            })),
          }),
        }}
      />
      <div className="overflow-x-clip bg-white">
        <Navbar />
        <main>
          <section id="overview" className="border-b border-gray-200 bg-[#FAFAF7]">
            <Container className="py-16 sm:py-24">
              <Subheading>Services</Subheading>
              <Heading as="h1" className="mt-3 max-w-4xl">
                Professional IT Services
              </Heading>
              <p className="mt-6 max-w-3xl text-lg/8 text-gray-700">
                Robust, scalable, and secure solutions designed for enterprises in Japan and worldwide.
              </p>
            </Container>
          </section>

          <section id="service-catalog">
            <Container className="py-16 sm:py-20">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {allServices.map((service) => (
                  <article
                    key={service.slug}
                    className="rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <h2 className="text-lg font-semibold text-gray-950">
                      {service.title.en}
                    </h2>
                    <p className="mt-3 text-sm/7 text-gray-700">{service.intro.en}</p>
                    <ul className="mt-5 list-disc space-y-1 pl-5 text-sm/6 text-gray-700">
                      {service.keyServices.en.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button href={`/services/${service.slug}`} variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
