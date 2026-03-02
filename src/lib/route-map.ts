import { caseStudies } from '@/lib/case-studies-data'
import { allServices } from '@/lib/service-catalog'

export type LocalizedPair = {
  en: string
  ja: string
}

export type RouteMap = {
  localized: LocalizedPair[]
}

const staticPairs: LocalizedPair[] = [
  { en: '/', ja: '/ja' },
  { en: '/about', ja: '/ja/about' },
  { en: '/services', ja: '/ja/services' },
  { en: '/case-studies', ja: '/ja/case-studies' },
  { en: '/blog', ja: '/ja/blog' },
  { en: '/contact', ja: '/ja/contact' },
  { en: '/contact-form', ja: '/ja/contact-form' },
  { en: '/terms', ja: '/ja/terms' },
  { en: '/privacy', ja: '/ja/privacy' },
  { en: '/cookies', ja: '/ja/cookies' },
  { en: '/book-consultation', ja: '/ja/book-consultation' },
]

const servicePairs: LocalizedPair[] = allServices.map((service) => ({
  en: `/services/${service.slug}`,
  ja: `/ja/services/${service.slug}`,
}))

const caseStudyPairs: LocalizedPair[] = caseStudies.map((caseStudy) => ({
  en: `/case-studies/${caseStudy.slug}`,
  ja: `/ja/case-studies/${caseStudy.slug}`,
}))

export const routeMap: RouteMap = {
  localized: [...staticPairs, ...servicePairs, ...caseStudyPairs],
}

export function normalizePath(input: string): string {
  if (!input) return '/'
  try {
    const url = new URL(input, 'https://akrin.jp')
    const pathname = url.pathname.trim()
    if (pathname !== '/' && pathname.endsWith('/')) return pathname.slice(0, -1)
    return pathname || '/'
  } catch {
    const pathname = input.trim()
    if (pathname !== '/' && pathname.endsWith('/')) return pathname.slice(0, -1)
    return pathname || '/'
  }
}

export function getAlternatesForPath(pathname: string): LocalizedPair | null {
  const normalized = normalizePath(pathname)
  for (const pair of routeMap.localized) {
    if (normalizePath(pair.en) === normalized || normalizePath(pair.ja) === normalized) {
      return pair
    }
  }
  return null
}
