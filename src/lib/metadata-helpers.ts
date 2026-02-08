import type { Metadata } from 'next'

type PageMetadataProps = {
  title: string
  description: string
  keywords?: string[]
  path: string
  image?: string
  alternates?: Metadata['alternates']
  robots?: Metadata['robots']
  openGraph?: Metadata['openGraph']
  twitter?: Metadata['twitter']
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  image = '/og-image.png',
  alternates,
  robots,
  openGraph,
  twitter
}: PageMetadataProps): Metadata {
  const baseUrl = 'https://akrin.jp'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const isJa = normalizedPath.startsWith('/ja')
  const enUrl = `${baseUrl}${isJa ? normalizedPath.replace(/^\/ja/, '') || '/' : normalizedPath}`
  const jaUrl = `${baseUrl}${isJa ? normalizedPath : `/ja${normalizedPath}`}`
  const fullUrl = isJa ? jaUrl : enUrl
  
  // Enforce length limits
  const normalizedTitle = title.length > 65 ? `${title.slice(0, 62)}...` : title
  const normalizedDescription = description.length > 158 ? `${description.slice(0, 155)}...` : description

  const defaultOpenGraph: Metadata['openGraph'] = {
    title: normalizedTitle,
    description: normalizedDescription,
    url: fullUrl,
    siteName: 'AKRIN株式会社',
    locale: isJa ? 'ja_JP' : 'en_US',
    alternateLocale: isJa ? 'en_US' : 'ja_JP',
    type: 'website',
    images: [{
      url: image,
      width: 1200,
      height: 630,
      alt: normalizedTitle,
    }],
  }

  const defaultTwitter: Metadata['twitter'] = {
    card: 'summary_large_image',
    title: normalizedTitle,
    description: normalizedDescription,
    creator: '@akrin',
    images: [image],
  }

  const defaultAlternates: Metadata['alternates'] = {
    canonical: fullUrl,
    languages: {
      'en-US': enUrl,
      'ja-JP': jaUrl,
      'x-default': enUrl
    }
  }

  return {
    title: normalizedTitle,
    description: normalizedDescription,
    keywords,
    openGraph: {
      ...defaultOpenGraph,
      ...openGraph,
      images: openGraph?.images ?? defaultOpenGraph.images,
    },
    twitter: {
      ...defaultTwitter,
      ...twitter,
      images: twitter?.images ?? defaultTwitter.images,
    },
    alternates: alternates ?? defaultAlternates,
    robots,
  }
}
