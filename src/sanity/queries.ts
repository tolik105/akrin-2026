import { defineQuery } from 'next-sanity'
import type { BlogLocale } from '@/lib/blog-fallback'
import {
  getFallbackCategories,
  getFallbackFeaturedPosts,
  getFallbackPost,
  getFallbackPostsCount,
  getFallbackPostsForFeed,
  getFallbackPostsPaginated,
} from '@/lib/blog-fallback'
import { sanityFetch } from './live'

const TOTAL_POSTS_QUERY = defineQuery(/* groq */ `count(*[
  _type == "post"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
])`)

export async function getPostsCount(
  category?: string,
  locale: BlogLocale = 'en',
) {
  const response = await sanityFetch({
    query: TOTAL_POSTS_QUERY,
    params: { category: category ?? null },
  })

  if (typeof response.data === 'number' && response.data > 0) {
    return response
  }

  return {
    ...response,
    data: getFallbackPostsCount(locale, category),
  }
}

const POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getPosts(
  startIndex: number,
  endIndex: number,
  category?: string,
  locale: BlogLocale = 'en',
) {
  const response = await sanityFetch({
    query: POSTS_QUERY,
    params: {
      startIndex,
      endIndex,
      category: category ?? null,
    },
  })

  if (Array.isArray(response.data) && response.data.length > 0) {
    return response
  }

  return {
    ...response,
    data: getFallbackPostsPaginated(locale, startIndex, endIndex, category),
  }
}

const FEATURED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && isFeatured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getFeaturedPosts(
  quantity: number,
  locale: BlogLocale = 'en',
) {
  const response = await sanityFetch({
    query: FEATURED_POSTS_QUERY,
    params: { quantity },
  })

  if (Array.isArray(response.data) && response.data.length > 0) {
    return response
  }

  return {
    ...response,
    data: getFallbackFeaturedPosts(locale, quantity),
  }
}

const FEED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
]|order(isFeatured, publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
  },
}`)

export async function getPostsForFeed() {
  const response = await sanityFetch({
    query: FEED_POSTS_QUERY,
  })

  if (Array.isArray(response.data) && response.data.length > 0) {
    return response
  }

  return {
    ...response,
    data: getFallbackPostsForFeed(),
  }
}

const POST_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}
`)

export async function getPost(slug: string, locale: BlogLocale = 'en') {
  const response = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  })

  if (response.data) {
    return response
  }

  return {
    ...response,
    data: getFallbackPost(slug, locale),
  }
}

const CATEGORIES_QUERY = defineQuery(/* groq */ `*[
  _type == "category"
  && count(*[_type == "post" && defined(slug.current) && ^._id in categories[]._ref]) > 0
]|order(title asc){
  title,
  "slug": slug.current,
}`)

export async function getCategories(locale: BlogLocale = 'en') {
  const response = await sanityFetch({
    query: CATEGORIES_QUERY,
  })

  if (Array.isArray(response.data) && response.data.length > 0) {
    return response
  }

  return {
    ...response,
    data: getFallbackCategories(locale),
  }
}

const CASE_STUDIES_QUERY = defineQuery(/* groq */ `*[
  _type == "caseStudy"
  && defined(slug.current)
]|order(order asc, publishedAt desc){
  "slug": slug.current,
  titleEN,
  titleJA,
  categoryEN,
  categoryJA,
  excerptEN,
  excerptJA,
  metaDescriptionEN,
  metaDescriptionJA,
  "mainImage": mainImage{
    "asset": asset->{url},
    alt,
    altJA,
    caption
  },
  imageUrl,
  htmlContentEN,
  htmlContentJA,
  metrics,
  tags,
  publishedAt,
  order,
  featured
}`)

export async function getCaseStudies() {
  return await sanityFetch({
    query: CASE_STUDIES_QUERY,
  })
}

const CASE_STUDY_QUERY = defineQuery(/* groq */ `*[
  _type == "caseStudy"
  && slug.current == $slug
][0]{
  "slug": slug.current,
  titleEN,
  titleJA,
  categoryEN,
  categoryJA,
  excerptEN,
  excerptJA,
  metaDescriptionEN,
  metaDescriptionJA,
  "mainImage": mainImage{
    "asset": asset->{url},
    alt,
    altJA,
    caption
  },
  imageUrl,
  htmlContentEN,
  htmlContentJA,
  metrics,
  tags,
  publishedAt,
  order,
  featured
}`)

export async function getCaseStudy(slug: string) {
  return await sanityFetch({
    query: CASE_STUDY_QUERY,
    params: { slug },
  })
}
