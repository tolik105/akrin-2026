import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import { caseStudies, getCaseStudyBySlug } from '@/lib/case-studies-data'
import { Link } from '@/components/link'
import { getCaseStudy } from '@/sanity/queries'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

type CaseStudySanityData = {
  mainImage?: {
    asset?: {
      url?: string
    }
  }
  imageUrl?: string
  titleEN?: string
  categoryEN?: string
  excerptEN?: string
  metaDescriptionEN?: string
  htmlContentEN?: string
  metrics?: unknown
}

export const revalidate = 3600

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))
}

function normalizeMetrics(metrics: unknown): string[] {
  if (!Array.isArray(metrics)) return []
  return metrics.filter((m): m is string => typeof m === 'string')
}

function imageUrlFromCaseStudy(caseStudy: CaseStudySanityData | null): string | null {
  if (typeof caseStudy?.mainImage?.asset?.url === 'string') {
    return caseStudy.mainImage.asset.url
  }
  if (typeof caseStudy?.imageUrl === 'string') {
    return caseStudy.imageUrl
  }
  return null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = await getCaseStudy(slug)
  const caseStudy = (data ?? null) as CaseStudySanityData | null
  const fallback = getCaseStudyBySlug(slug)

  const title = caseStudy?.titleEN || fallback?.title.en
  const description =
    caseStudy?.metaDescriptionEN ||
    caseStudy?.excerptEN ||
    fallback?.excerpt.en

  if (!title || !description) return {}

  return {
    title: `${title} | Case Study`,
    description,
    alternates: {
      canonical: `/case-studies/${slug}`,
      languages: {
        en: `/case-studies/${slug}`,
        ja: `/ja/case-studies/${slug}`,
        'x-default': `/case-studies/${slug}`,
      },
    },
  }
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const { data } = await getCaseStudy(slug)
  const caseStudy = (data ?? null) as CaseStudySanityData | null
  const fallback = getCaseStudyBySlug(slug)

  if (!caseStudy && !fallback) {
    notFound()
  }

  const title = caseStudy?.titleEN || fallback?.title.en || 'Case Study'
  const category = caseStudy?.categoryEN || fallback?.category.en || ''
  const excerpt = caseStudy?.excerptEN || fallback?.excerpt.en || ''
  const htmlContent = caseStudy?.htmlContentEN || ''
  const imageUrl = imageUrlFromCaseStudy(caseStudy)
  const metrics = normalizeMetrics(caseStudy?.metrics)

  const fallbackOutcomes = fallback?.outcomes.en ?? []

  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Container className="py-20 sm:py-28">
          <Link href="/case-studies" className="text-sm/6 text-gray-600">
            ← Back to Case Studies
          </Link>
          <p className="mt-6 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
            {category || 'Case Study'}
          </p>
          <Heading as="h1" className="mt-2 max-w-4xl">
            {title}
          </Heading>
          {excerpt ? (
            <p className="mt-6 max-w-3xl text-lg/8 text-gray-700">{excerpt}</p>
          ) : null}

          {metrics.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {metric}
                </span>
              ))}
            </div>
          ) : null}
        </Container>

        {imageUrl ? (
          <Container className="pb-10">
            <img
              src={imageUrl}
              alt=""
              className="w-full rounded-2xl border border-gray-200 object-cover"
              loading="lazy"
            />
          </Container>
        ) : null}

        <Container className="pb-24">
          <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10">
            {htmlContent ? (
              <div
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            ) : (
              <div className="space-y-8">
                {fallback?.challenge ? (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-950">
                      Challenge
                    </h2>
                    <p className="mt-3 text-base/8 text-gray-700">
                      {fallback.challenge.en}
                    </p>
                  </section>
                ) : null}
                {fallback?.solution ? (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-950">
                      Solution
                    </h2>
                    <p className="mt-3 text-base/8 text-gray-700">
                      {fallback.solution.en}
                    </p>
                  </section>
                ) : null}
                {fallbackOutcomes.length > 0 ? (
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-950">
                      Outcomes
                    </h2>
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-gray-700">
                      {fallbackOutcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            )}
          </article>

          <div className="mt-10">
            <Button href="/contact">Schedule Consultation</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
