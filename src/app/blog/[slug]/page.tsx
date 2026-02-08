import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { image } from '@/sanity/image'
import { getPost } from '@/sanity/queries'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

const siteUrl = 'https://akrin.jp'

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
  const portableBody = 'body' in post ? post.body : undefined
  const htmlContent =
    typeof (post as { htmlContent?: string }).htmlContent === 'string'
      ? (post as { htmlContent: string }).htmlContent
      : ''
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
        <Subheading className="mt-16">
          {dayjs(publishedAt).format('dddd, MMMM D, YYYY')}
        </Subheading>
        <Heading as="h1" className="mt-2">
          {postTitle}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).size(64, 64).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
            {Array.isArray(post.categories) && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`../?category=${category.slug}`}
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ''}
                  src={image(post.mainImage).size(2016, 1344).url()}
                  className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
                />
              )}
              {portableBody && (
                <PortableText
                  value={portableBody}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="my-10 text-base/8 first:mt-0 last:mb-0">
                          {children}
                        </p>
                      ),
                      h2: ({ children }) => (
                        <h2 className="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                          {children}
                        </h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
                          {children}
                        </blockquote>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <img
                          alt={value.alt || ''}
                          src={image(value).width(2000).url()}
                          className="w-full rounded-2xl"
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
                        <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => {
                        return (
                          <li className="my-2 pl-2 has-[br]:mb-8">
                            {children}
                          </li>
                        )
                      },
                      number: ({ children }) => {
                        return (
                          <li className="my-2 pl-2 has-[br]:mb-8">
                            {children}
                          </li>
                        )
                      },
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
              )}
              {!portableBody && htmlContent && (
                <div
                  className="[&>h1]:mt-0 [&>h1]:mb-6 [&>h1]:text-3xl [&>h1]:font-semibold [&>h1]:tracking-tight [&>h1]:text-gray-950 [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-gray-950 [&>h3]:mt-10 [&>h3]:mb-5 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:tracking-tight [&>h3]:text-gray-950 [&>p]:my-6 [&>p]:text-base/8 [&>p]:text-gray-700 [&>ul]:my-6 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul]:text-base/8 [&>ul]:text-gray-700 [&>ol]:my-6 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:pl-6 [&>ol]:text-base/8 [&>ol]:text-gray-700 [&_a]:font-medium [&_a]:text-gray-950 [&_a]:underline [&_a]:decoration-gray-400 [&_a]:underline-offset-4"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              )}
              <div className="mt-10">
                <Button variant="outline" href="../">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
