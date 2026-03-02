import type { MetadataRoute } from 'next'
import { routeMap } from '@/lib/route-map'
import { getPostsForFeed } from '@/sanity/queries'

const baseUrl = 'https://akrin.jp'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const routes = new Set<string>()
  for (const pair of routeMap.localized) {
    routes.add(pair.en)
    routes.add(pair.ja)
  }

  try {
    const { data: posts } = await getPostsForFeed()
    for (const post of posts) {
      if (!post?.slug) continue
      routes.add(`/blog/${post.slug}`)
      routes.add(`/ja/blog/${post.slug}`)
    }
  } catch {
    // Keep sitemap generation resilient if Sanity is unavailable at build time.
  }

  return Array.from(routes).map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
