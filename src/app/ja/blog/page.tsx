import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { image } from '@/sanity/image'
import { getPosts } from '@/sanity/queries'
import dayjs from 'dayjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ブログ',
  description: 'AKRINのIT運用、セキュリティ、クラウドに関する知見を掲載。',
  alternates: {
    canonical: '/ja/blog',
    languages: {
      en: '/blog',
      ja: '/ja/blog',
      'x-default': '/blog',
    },
  },
}

const postsToShow = 9

type BlogCard = {
  slug: string
  title: string
  excerpt: string
  publishedAt?: string
  mainImage?: unknown
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
  return null
}

function getAuthorAvatar(post: BlogCard) {
  if (post.author?.image) {
    return image(post.author.image).size(80, 80).fit('crop').url()
  }
  return null
}

export default async function JapaneseBlogPage() {
  const { data } = await getPosts(0, postsToShow, undefined, 'ja')

  const posts: BlogCard[] = Array.isArray(data)
    ? data
        .filter((item) => typeof item?.slug === 'string' && item.slug.length > 0)
        .map((item) => ({
          slug: item.slug as string,
          title: (item.title as string) || '記事',
          excerpt: (item.excerpt as string) || '',
          publishedAt:
            typeof item.publishedAt === 'string' ? item.publishedAt : undefined,
          mainImage: item.mainImage,
          author: item.author,
        }))
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
              マネージドIT、クラウド、セキュリティに関する実践的な知見と最新情報を掲載しています。
            </p>
          </div>

          {posts.length > 0 ? (
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
                        className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                      />
                    ) : (
                      <div className="aspect-video w-full rounded-2xl bg-[#FAFAF7] sm:aspect-2/1 lg:aspect-3/2" />
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
                          ? dayjs(post.publishedAt).format('YYYY/MM/DD')
                          : ''}
                      </time>
                      <span className="relative z-10 rounded-full bg-[#FAFAF7] px-3 py-1.5 font-medium text-gray-600">
                        AKRIN Insights
                      </span>
                    </div>
                    <div className="group relative grow">
                      <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <Link href={`/ja/blog/${post.slug}`}>
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
                          alt={post.author?.name || 'AKRINチーム'}
                          src={authorAvatar}
                          className="size-10 rounded-full bg-gray-100 object-cover"
                        />
                      ) : (
                        <span className="size-10 rounded-full bg-gray-100" />
                      )}
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <span className="absolute inset-0" />
                          {post.author?.name || 'AKRINチーム'}
                        </p>
                        <p className="text-gray-600">AKRINチーム</p>
                      </div>
                    </div>
                  </div>
                </article>
                )
              })}
            </div>
          ) : (
            <p className="mt-10 text-sm/6 text-gray-600">記事が見つかりませんでした。</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
