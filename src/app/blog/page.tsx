import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { getFallbackImageMap } from '@/lib/blog-fallback'
import { image } from '@/sanity/image'
import { getPosts, getPostsCount } from '@/sanity/queries'
import dayjs from 'dayjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'AKRIN insights on managed IT services, cybersecurity, cloud operations, and technology strategy.',
  alternates: {
    canonical: '/blog',
    languages: {
      en: '/blog',
      ja: '/ja/blog',
      'x-default': '/blog',
    },
  },
}

const postsPerPage = 9

type BlogCard = {
  slug: string
  title: string
  excerpt: string
  publishedAt?: string
  mainImage?: unknown
  fallbackImage?: string
  author?: {
    name?: string | null
    image?: unknown
  } | null
}

function getBlogCardImage(post: BlogCard) {
  if (post.mainImage) {
    return image(post.mainImage).width(1200).height(675).fit('crop').url()
  }
  if (post.author?.image) {
    return image(post.author.image).width(1200).height(675).fit('crop').url()
  }
  if (post.fallbackImage) {
    return post.fallbackImage
  }
  return null
}

function getAuthorAvatar(post: BlogCard) {
  if (post.author?.image) {
    return image(post.author.image).size(80, 80).fit('crop').url()
  }
  return null
}

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>
}

function parsePage(rawPage: string | undefined) {
  const parsed = Number.parseInt(rawPage || '1', 10)
  if (!Number.isFinite(parsed) || parsed < 1) return 1
  return parsed
}

function getPageHref(page: number) {
  return page <= 1 ? '/blog' : `/blog?page=${page}`
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentQuery = await searchParams
  const requestedPage = parsePage(currentQuery.page)
  const { data: totalPosts } = await getPostsCount()
  const safeTotalPosts =
    typeof totalPosts === 'number' && totalPosts > 0 ? totalPosts : 0
  const totalPages = Math.max(1, Math.ceil(safeTotalPosts / postsPerPage))
  const currentPage = Math.min(requestedPage, totalPages)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const { data } = await getPosts(startIndex, endIndex)

  const fallbackImageMap = getFallbackImageMap('en')

  const posts: BlogCard[] = Array.isArray(data)
    ? data
        .filter((item) => typeof item?.slug === 'string' && item.slug.length > 0)
        .map((item) => {
          const slug = item.slug as string
          const directImage = typeof (item as Record<string, unknown>).image === 'string'
            ? ((item as Record<string, unknown>).image as string)
            : undefined

          return {
            slug,
            title: (item.title as string) || 'Post',
            excerpt: (item.excerpt as string) || '',
            publishedAt:
              typeof item.publishedAt === 'string' ? item.publishedAt : undefined,
            mainImage: item.mainImage,
            fallbackImage: directImage || fallbackImageMap.get(slug),
            author: item.author,
          }
        })
    : []

  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              AKRIN Insights
            </h1>
            <p className="mt-2 text-lg/8 text-gray-600">
              Articles, updates, and practical guidance for teams running modern
              IT operations in Japan.
            </p>
          </div>

          {posts.length > 0 ? (
            <>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => {
                  const cardImage = getBlogCardImage(post)
                  const authorAvatar = getAuthorAvatar(post)

                  return (
                    <article key={post.slug} className="flex flex-col items-start justify-between">
                    <div className="relative w-full">
                      {cardImage ? (
                        <img
                          alt={post.title}
                          src={cardImage}
                          loading="lazy"
                          className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                        />
                      ) : (
                        <div className="aspect-video w-full rounded-2xl bg-[#FAFAFC] sm:aspect-2/1 lg:aspect-3/2" />
                      )}
                      <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
                    </div>
                    <div className="flex max-w-xl grow flex-col justify-between">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={post.publishedAt ?? undefined}
                          className="text-gray-500"
                        >
                          {post.publishedAt
                            ? dayjs(post.publishedAt).format('MMM D, YYYY')
                            : ''}
                        </time>
                        <span className="relative z-10 rounded-full bg-[#FAFAFC] px-3 py-1.5 font-medium text-gray-600">
                          AKRIN Insights
                        </span>
                      </div>
                      <div className="group relative grow">
                        <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                          <Link href={`/blog/${post.slug}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                        {authorAvatar ? (
                          <img
                            alt={post.author?.name || 'AKRIN Team'}
                            src={authorAvatar}
                            className="size-10 rounded-full bg-gray-100 object-cover"
                          />
                        ) : (
                          <span className="size-10 rounded-full bg-gray-100" />
                        )}
                        <div className="text-sm/6">
                          <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0" />
                            {post.author?.name || 'AKRIN Team'}
                          </p>
                          <p className="text-gray-600">AKRIN Team</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  )
                })}
              </div>

              {totalPages > 1 ? (
                <div className="mt-16 flex items-center justify-center gap-4">
                  {currentPage > 1 ? (
                    <Link
                      href={getPageHref(currentPage - 1)}
                      className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Previous
                    </Link>
                  ) : (
                    <span className="rounded-md border border-gray-100 px-4 py-2 text-sm font-medium text-gray-400">
                      Previous
                    </span>
                  )}
                  <span className="text-sm font-medium text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  {currentPage < totalPages ? (
                    <Link
                      href={getPageHref(currentPage + 1)}
                      className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next
                    </Link>
                  ) : (
                    <span className="rounded-md border border-gray-100 px-4 py-2 text-sm font-medium text-gray-400">
                      Next
                    </span>
                  )}
                </div>
              ) : null}
            </>
          ) : (
            <p className="mt-10 text-sm/6 text-gray-600">No posts found.</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
