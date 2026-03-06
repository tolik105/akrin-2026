import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { getFallbackPost, getFallbackPostSlugs } from '@/lib/blog-fallback'
import { routeMap } from '@/lib/route-map'
import { getPost, getPostsForFeed } from '@/sanity/queries'

async function getRequestSiteUrl() {
  const headerStore = await headers()
  const host = headerStore.get('x-forwarded-host') || headerStore.get('host')
  const protocol = headerStore.get('x-forwarded-proto') || (host?.includes('localhost') ? 'http' : 'https')

  return host ? `${protocol}://${host}` : 'https://akrin.jp'
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getRequestSiteUrl()
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
      const { data: japanesePost } = await getPost(post.slug, 'ja')

      if (japanesePost || getFallbackPost(post.slug, 'ja')) {
        routes.add(`/ja/blog/${post.slug}`)
      }
    }
  } catch {
    // Keep sitemap generation resilient if Sanity is unavailable at build time.
  }

  for (const slug of getFallbackPostSlugs('en', true)) {
    routes.add(`/blog/${slug}`)
  }

  for (const slug of getFallbackPostSlugs('ja', true)) {
    routes.add(`/ja/blog/${slug}`)
  }

  return Array.from(routes).map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
