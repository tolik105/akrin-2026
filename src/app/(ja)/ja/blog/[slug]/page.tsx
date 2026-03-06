import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { getFallbackImageBySlug, getFallbackPost } from '@/lib/blog-fallback'
import { blogPostsJA } from '@/lib/blog-fallback-data'
import { image } from '@/sanity/image'
import { getPost } from '@/sanity/queries'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'
import { permanentRedirect } from 'next/navigation'
import { redirect } from 'next/navigation'

async function getRequestSiteUrl() {
  const headerStore = await headers()
  const host = headerStore.get('x-forwarded-host') || headerStore.get('host')
  const protocol = headerStore.get('x-forwarded-proto') || (host?.includes('localhost') ? 'http' : 'https')

  return host ? `${protocol}://${host}` : 'https://akrin.jp'
}

function normalizeMetaText(value: string | undefined, maxLength: number, fallback: string) {
  const text = (value || fallback).trim()
  if (text.length < 20) return fallback
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 3).trim()}...`
}

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const [{ data: post }, { data: englishPost }] = await Promise.all([
    getPost(slug, 'ja'),
    getPost(slug),
  ])
  const fallbackPost = getFallbackPost(slug, 'ja')
  const englishFallbackPost = getFallbackPost(slug, 'en')
  if (!post && !fallbackPost) return {}

  const siteUrl = await getRequestSiteUrl()
  const localMeta = (blogPostsJA as Record<string, { metaTitle?: string; metaDescription?: string; title?: string; excerpt?: string }>)[slug]
  const canonicalPath = `/ja/blog/${slug}`
  const imageUrl = '/og-image.png'
  const postTitle = normalizeMetaText(
    localMeta?.metaTitle || localMeta?.title || post?.title || fallbackPost?.metaTitle || fallbackPost?.title,
    52,
    'AKRINブログ',
  )
  const postDescription = normalizeMetaText(
    localMeta?.metaDescription || localMeta?.excerpt || post?.excerpt || fallbackPost?.metaDescription || fallbackPost?.excerpt,
    150,
    'AKRINの技術ブログ。日本企業向けIT運用、インフラ管理、セキュリティ対策の実践的な情報を発信。',
  )
  const languages: NonNullable<Metadata['alternates']>['languages'] = {
    ja: `${siteUrl}${canonicalPath}`,
    'x-default': englishPost || englishFallbackPost ? `${siteUrl}/blog/${slug}` : `${siteUrl}${canonicalPath}`,
  }

  if (englishPost || englishFallbackPost) {
    languages.en = `${siteUrl}/blog/${slug}`
  }

  return {
    title: postTitle,
    description: postDescription,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
      languages,
    },
    openGraph: {
      type: 'article',
      locale: 'ja_JP',
      title: postTitle,
      description: postDescription,
      url: `${siteUrl}${canonicalPath}`,
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

export default async function JapaneseBlogPostPage({ params }: Props) {
  const siteUrl = await getRequestSiteUrl()
  const slug = (await params).slug
  const [{ data: post }, { data: englishPost }] = await Promise.all([
    getPost(slug, 'ja'),
    getPost(slug, 'en'),
  ])
  const fallbackPost = getFallbackPost(slug, 'ja')
  const englishFallbackPost = getFallbackPost(slug, 'en')
  if (!post && !fallbackPost && (englishPost || englishFallbackPost)) {
    permanentRedirect(`/blog/${slug}`)
  }
  if (!post && !fallbackPost) notFound()
  const resolvedPost = post ?? {
    title: fallbackPost!.title,
    metaTitle: fallbackPost!.metaTitle,
    excerpt: fallbackPost!.excerpt,
    metaDescription: fallbackPost!.metaDescription,
    publishedAt: fallbackPost!.publishedAt,
    author: fallbackPost!.author,
    categories: fallbackPost!.categories,
    mainImage: null,
    image: fallbackPost!.image,
    htmlContent: fallbackPost!.htmlContent,
  }
  const localFallback = (blogPostsJA as Record<string, { image?: string; content?: string; title?: string; excerpt?: string; metaTitle?: string; metaDescription?: string } | undefined>)[slug]

  // If this post has no proper JA translation (auto-localized 【日本語版】 or English-only),
  // redirect to the English version instead of showing English content on the JA page.
  const rawTitle = localFallback?.title || resolvedPost.title || ''
  if (post && !localFallback?.content && (rawTitle.startsWith('【日本語版】') || rawTitle.startsWith('English Version:'))) {
    redirect(`/blog/${slug}`)
  }

  const localFallbackImage = localFallback?.image || fallbackPost?.image || getFallbackImageBySlug(slug, 'ja')
  const portableBody = 'body' in resolvedPost ? resolvedPost.body : undefined
  const sanityHtml =
    typeof (resolvedPost as { htmlContent?: string }).htmlContent === 'string'
      ? (resolvedPost as { htmlContent: string }).htmlContent
      : ''
  const sanityHasRealHtml = /<[a-z][\s\S]*>/i.test(sanityHtml)
  const rawHtml =
    localFallback?.content ||
    fallbackPost?.htmlContent ||
    (sanityHasRealHtml ? sanityHtml : '') ||
    ''
  // Strip leading <h1> from HTML content — we already render the title in the header
  const htmlContent = rawHtml.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '')
  const publishedAt = resolvedPost.publishedAt || new Date().toISOString()
  const publishedDate = new Date(publishedAt)
  const isPublishedDateValid = !Number.isNaN(publishedDate.getTime())
  const formattedPublishedDate = isPublishedDateValid
    ? publishedDate.toISOString()
    : new Date().toISOString()
  const postUrl = `${siteUrl}/ja/blog/${slug}`
  const postTitle = localFallback?.title || resolvedPost.title || fallbackPost?.title || 'AKRINブログ'
  const postDescription =
    localFallback?.metaDescription ||
    localFallback?.excerpt ||
    ('metaDescription' in resolvedPost ? resolvedPost.metaDescription : undefined) ||
    resolvedPost.excerpt ||
    fallbackPost?.metaDescription ||
    fallbackPost?.excerpt ||
    ''
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
      name: resolvedPost.author?.name || 'AKRIN編集部',
      url: `${siteUrl}/ja/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AKRIN株式会社',
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
            href="/ja/blog"
            className="inline-flex items-center gap-1 text-sm/6 font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon className="size-4" />
            ブログ一覧へ
          </Link>
        </div>

        {/* Article header */}
        <div className="mx-auto mt-8 max-w-3xl">
          {/* Categories */}
          {Array.isArray(resolvedPost.categories) && resolvedPost.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {resolvedPost.categories.map((category: { slug: string; title: string }) => (
                <Link
                  key={category.slug}
                  href={`/ja/blog?category=${category.slug}`}
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
            {resolvedPost.author && (
              <div className="flex items-center gap-2.5">
                {resolvedPost.author.image && (
                  <img
                    alt=""
                    src={image(resolvedPost.author.image).size(64, 64).url()}
                    className="aspect-square size-8 rounded-full object-cover ring-1 ring-gray-200"
                  />
                )}
                <span className="text-sm/5 font-medium text-gray-700">
                  {resolvedPost.author.name}
                </span>
              </div>
            )}
            {resolvedPost.author && <span className="text-gray-300">·</span>}
            <time className="text-sm/5 text-gray-500" dateTime={formattedPublishedDate}>
              {dayjs(publishedAt).format('YYYY年M月D日')}
            </time>
          </div>
        </div>

        {/* Article body */}
        <article className="mx-auto max-w-3xl pb-24">
          {/* Feature image */}
          {resolvedPost.mainImage ? (
            <img
              alt={resolvedPost.mainImage.alt || ''}
              src={image(resolvedPost.mainImage).size(2016, 1344).url()}
              className="mt-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          ) : ((resolvedPost as Record<string, unknown>).image || localFallbackImage) ? (
            <img
              alt={postTitle}
              src={((resolvedPost as Record<string, unknown>).image as string) || localFallbackImage || ''}
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
                }}
              />
            ) : null}
          </div>

          {/* Bottom CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-8">
            <Button variant="outline" href="/ja/blog">
              <ChevronLeftIcon className="size-4" />
              ブログ一覧へ
            </Button>
            <Button variant="outline" href="/ja/case-studies">
              導入事例を見る
            </Button>
          </div>
        </article>
      </Container>
      <Footer />
    </main>
  )
}
