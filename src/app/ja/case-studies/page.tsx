import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { caseStudies as fallbackCaseStudies } from '@/lib/case-studies-data'
import { getCaseStudies } from '@/sanity/queries'
import dayjs from 'dayjs'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: '導入事例',
  description:
    'AKRINの導入事例をご紹介します。マネージドIT、クラウド、セキュリティ、ネットワーク、ITADの実績を掲載。',
  alternates: {
    canonical: '/ja/case-studies',
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

const fallbackCardImages = [
  '/company/1.jpg',
  '/company/2.jpg',
  '/company/3.jpg',
  '/company/4.jpg',
  '/company/5.jpg',
]

const fallbackAuthorImages = [
  '/team/michael-foster.jpg',
  '/team/emily-selman.jpg',
  '/team/courtney-henry.jpg',
]

function fallbackCards(): CaseStudyCard[] {
  return fallbackCaseStudies.map((item, index) => ({
    slug: item.slug,
    title: item.title.ja,
    description: item.excerpt.ja,
    imageUrl: fallbackCardImages[index % fallbackCardImages.length],
    authorName: 'AKRINチーム',
    authorImageUrl: fallbackAuthorImages[index % fallbackAuthorImages.length],
  }))
}

export default async function JapaneseCaseStudiesPage() {
  const { data } = await getCaseStudies()

  const cards: CaseStudyCard[] =
    Array.isArray(data) && data.length > 0
      ? data
          .filter((item) => typeof item?.slug === 'string')
          .map((item, index) => {
            const imageFromSanity =
              typeof item.mainImage?.asset?.url === 'string'
                ? item.mainImage.asset.url
                : undefined
            const imageFromLegacy =
              typeof item.imageUrl === 'string' ? item.imageUrl : undefined

            return {
              slug: item.slug as string,
              title: (item.titleJA as string) || '導入事例',
              description: (item.excerptJA as string) || '',
              imageUrl:
                imageFromSanity ||
                imageFromLegacy ||
                fallbackCardImages[index % fallbackCardImages.length],
              publishedAt:
                typeof item.publishedAt === 'string' ? item.publishedAt : undefined,
              authorName: 'AKRINチーム',
              authorImageUrl:
                fallbackAuthorImages[index % fallbackAuthorImages.length],
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
              導入事例
            </h1>
            <p className="mt-2 text-lg/8 text-gray-600">
              AKRINが可用性・セキュリティ・運用効率を改善した実践事例をご紹介します。
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.slug}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
              >
                <img
                  alt={card.title}
                  src={card.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={card.publishedAt} className="mr-8">
                    {card.publishedAt ? dayjs(card.publishedAt).format('YYYY/MM/DD') : ''}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        alt={card.authorName}
                        src={card.authorImageUrl}
                        className="size-6 flex-none rounded-full bg-white/10 object-cover"
                      />
                      {card.authorName}
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 text-lg/6 font-semibold text-white">
                  <Link href={`/ja/case-studies/${card.slug}`}>
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
