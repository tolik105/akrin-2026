import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { getFallbackImageBySlug } from '@/lib/blog-fallback'
import { blogPostsEN } from '@/lib/blog-fallback-data'
import { image } from '@/sanity/image'
import { getPost } from '@/sanity/queries'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

const siteUrl = 'https://akrin.jp'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { data: post } = await getPost(slug)
  if (!post) return {}

  const canonicalPath = `/blog/${slug}`
  const imageUrl = '/og-image.png'
  const postTitle = post.title || 'AKRIN Blog'
  const postDescription = post.excerpt || undefined

  return {
    title: postTitle,
    description: postDescription,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: canonicalPath,
        ja: `/ja/blog/${slug}`,
        'x-default': canonicalPath,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      title: postTitle,
      description: postDescription,
      url: canonicalPath,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postDescription,
      images: [imageUrl],
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let { data: post } = await getPost(slug)
  if (!post) notFound()
  const localFallback = (blogPostsEN as Record<string, { image?: string; content?: string }>)[slug]
  const localFallbackImage = localFallback?.image || getFallbackImageBySlug(slug, 'en')
  const portableBody = 'body' in post ? post.body : undefined
  const sanityHtml =
    typeof (post as { htmlContent?: string }).htmlContent === 'string'
      ? (post as { htmlContent: string }).htmlContent
      : ''
  const sanityHasRealHtml = /<[a-z][\s\S]*>/i.test(sanityHtml)
  const rawHtml = localFallback?.content || (sanityHasRealHtml ? sanityHtml : '') || ''
  // Strip leading <h1> from HTML content — we already render the title in the header
  const htmlContent = rawHtml.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '')
  const publishedAt = post.publishedAt || new Date().toISOString()
  const publishedDate = new Date(publishedAt)
  const isPublishedDateValid = !Number.isNaN(publishedDate.getTime())
  const formattedPublishedDate = isPublishedDateValid
    ? publishedDate.toISOString()
    : new Date().toISOString()
  const postUrl = `${siteUrl}/blog/${slug}`
  const postTitle = post.title || 'AKRIN Blog'
  const postDescription = post.excerpt || ''
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: postTitle,
    description: postDescription,
    image: [`${siteUrl}/og-image.png`],
    author: {
      '@type': 'Person',
      name: post.author?.name || 'AKRIN Editorial Team',
      url: `${siteUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/akrin-logo.svg`,
      },
    },
    datePublished: formattedPublishedDate,
    dateModified: formattedPublishedDate,
  }

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="../"
            className="inline-flex items-center gap-1 text-sm/6 font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon className="size-4" />
            Back to blog
          </Link>
        </div>

        {/* Article header */}
        <div className="mx-auto mt-8 max-w-3xl">
          {/* Categories */}
          {Array.isArray(post.categories) && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category: { slug: string; title: string }) => (
                <Link
                  key={category.slug}
                  href={`../?category=${category.slug}`}
                  className="rounded-full border border-dotted border-gray-300 bg-[#FAFAFC] px-2.5 py-0.5 text-xs/5 font-medium text-gray-500 hover:border-gray-400 hover:text-gray-700"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="mt-4 text-3xl/tight font-semibold tracking-tight text-gray-950 sm:text-4xl/tight">
            {postTitle}
          </h1>

          {/* Excerpt */}
          {postDescription && (
            <p className="mt-4 text-lg/7 text-gray-600">
              {postDescription}
            </p>
          )}

          {/* Meta: date + author */}
          <div className="mt-6 flex items-center gap-4 border-y border-gray-200 py-4">
            {post.author && (
              <div className="flex items-center gap-2.5">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).size(64, 64).url()}
                    className="aspect-square size-8 rounded-full object-cover ring-1 ring-gray-200"
                  />
                )}
                <span className="text-sm/5 font-medium text-gray-700">
                  {post.author.name}
                </span>
              </div>
            )}
            {post.author && <span className="text-gray-300">·</span>}
            <time className="text-sm/5 text-gray-500" dateTime={formattedPublishedDate}>
              {dayjs(publishedAt).format('MMMM D, YYYY')}
            </time>
          </div>
        </div>

        {/* Article body */}
        <article className="mx-auto max-w-3xl pb-24">
          {/* Feature image */}
          {post.mainImage ? (
            <img
              alt={post.mainImage.alt || ''}
              src={image(post.mainImage).size(2016, 1344).url()}
              className="mt-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          ) : ((post as Record<string, unknown>).image || localFallbackImage) ? (
            <img
              alt={postTitle}
              src={((post as Record<string, unknown>).image as string) || localFallbackImage || ''}
              className="mt-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          ) : null}

          {/* Content */}
          <div className="mt-10">
            {htmlContent ? (
              <div
                className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-10 prose-h3:text-xl prose-h4:mt-8 prose-h4:text-lg prose-a:font-medium prose-a:text-gray-950 prose-a:decoration-gray-400 prose-a:underline-offset-4 hover:prose-a:decoration-gray-600 prose-img:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            ) : portableBody ? (
              <PortableText
                value={portableBody}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="my-6 text-base/8 text-gray-700 first:mt-0 last:mb-0">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mt-12 mb-6 text-2xl/8 font-semibold tracking-tight text-gray-950 first:mt-0 last:mb-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mt-10 mb-5 text-xl/8 font-semibold tracking-tight text-gray-950 first:mt-0 last:mb-0">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="my-8 border-l-2 border-l-[#0066CC] pl-6 text-base/8 text-gray-700 first:mt-0 last:mb-0">
                        {children}
                      </blockquote>
                    ),
                  },
                  types: {
                    image: ({ value }) => (
                      <img
                        alt={value.alt || ''}
                        src={image(value).width(2000).url()}
                        className="my-8 w-full rounded-2xl"
                      />
                    ),
                    separator: ({ value }) => {
                      switch (value.style) {
                        case 'line':
                          return (
                            <hr className="my-8 border-t border-gray-200" />
                          )
                        case 'space':
                          return <div className="my-8" />
                        default:
                          return null
                      }
                    },
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="my-6 list-disc space-y-2 pl-6 text-base/8 text-gray-700 marker:text-gray-400">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="my-6 list-decimal space-y-2 pl-6 text-base/8 text-gray-700 marker:text-gray-400">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="pl-1">{children}</li>
                    ),
                    number: ({ children }) => (
                      <li className="pl-1">{children}</li>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-950">
                        {children}
                      </strong>
                    ),
                    code: ({ children }) => (
                      <>
                        <span aria-hidden>`</span>
                        <code className="text-[15px]/8 font-semibold text-gray-950">
                          {children}
                        </code>
                        <span aria-hidden>`</span>
                      </>
                    ),
                    link: ({ value, children }) => {
                      return (
                        <Link
                          href={value.href}
                          className="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-hover:decoration-gray-600"
                        >
                          {children}
                        </Link>
                      )
                    },
                  },
                }}
              />
            ) : null}
          </div>

          {/* Bottom CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-8">
            <Button variant="outline" href="../">
              <ChevronLeftIcon className="size-4" />
              Back to blog
            </Button>
            <Button variant="outline" href="/case-studies">
              View case studies
            </Button>
          </div>
        </article>
      </Container>
      <Footer />
    </main>
  )
}
