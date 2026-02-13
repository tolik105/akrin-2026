import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { caseStudies as fallbackCaseStudies } from '@/lib/case-studies-data'
import { getCaseStudies } from '@/sanity/queries'
import dayjs from 'dayjs'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore AKRIN case studies across managed IT, cloud, cybersecurity, network, and ITAD services.',
  alternates: {
    canonical: '/case-studies',
    languages: {
      en: '/case-studies',
      ja: '/ja/case-studies',
      'x-default': '/case-studies',
    },
  },
}

type CaseStudyCard = {
  slug: string
  title: string
  description: string
  imageUrl: string
  publishedAt?: string
  authorName: string
  authorImageUrl: string
}

function fallbackCards(): CaseStudyCard[] {
  return fallbackCaseStudies.map((item) => ({
    slug: item.slug,
    title: item.title.en,
    description: item.excerpt.en,
    imageUrl: '',
    authorName: 'AKRIN Team',
    authorImageUrl: '',
  }))
}

export default async function CaseStudiesPage() {
  const { data } = await getCaseStudies()

  const cards: CaseStudyCard[] =
    Array.isArray(data) && data.length > 0
      ? data
          .filter((item) => typeof item?.slug === 'string')
          .map((item) => {
            const imageFromSanity =
              typeof item.mainImage?.asset?.url === 'string'
                ? item.mainImage.asset.url
                : undefined
            const imageFromLegacy =
              typeof item.imageUrl === 'string' ? item.imageUrl : undefined

            return {
              slug: item.slug as string,
              title: (item.titleEN as string) || 'Case Study',
              description: (item.excerptEN as string) || '',
              imageUrl:
                imageFromSanity ||
                imageFromLegacy ||
                '',
              publishedAt:
                typeof item.publishedAt === 'string' ? item.publishedAt : undefined,
              authorName: 'AKRIN Team',
              authorImageUrl: '',
            }
          })
      : fallbackCards()

  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Case Studies
            </h1>
            <p className="mt-2 text-lg/8 text-gray-600">
              Explore how AKRIN improves reliability, security, and operational
              performance across complex IT environments.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.slug}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-[#1F1E1D] px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
              >
                {card.imageUrl ? (
                  <img
                    alt={card.title}
                    src={card.imageUrl}
                    className="absolute inset-0 -z-10 size-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={card.publishedAt} className="mr-8">
                    {card.publishedAt ? dayjs(card.publishedAt).format('MMM D, YYYY') : ''}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      {card.authorImageUrl ? (
                        <img
                          alt={card.authorName}
                          src={card.authorImageUrl}
                          className="size-6 flex-none rounded-full bg-white/10 object-cover"
                        />
                      ) : (
                        <span className="size-6 flex-none rounded-full bg-white/10" />
                      )}
                      {card.authorName}
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 text-lg/6 font-semibold text-white">
                  <Link href={`/case-studies/${card.slug}`}>
                    <span className="absolute inset-0" />
                    {card.title}
                  </Link>
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
