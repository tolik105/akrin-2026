import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata, Viewport } from 'next'

const siteUrl = 'https://akrin.jp'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#17100E',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | AKRIN K.K.',
    default: 'AKRIN K.K. | IT Solutions for Businesses in Japan',
  },
  description:
    'AKRIN delivers managed IT services, cybersecurity, cloud operations, and consulting for businesses in Japan and APAC.',
  keywords: [
    'AKRIN',
    'AKRIN K.K.',
    'IT services Japan',
    'Managed IT services',
    'Cybersecurity Japan',
    'Cloud infrastructure',
    'IT consulting',
    'ITAD services',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'AKRIN K.K.',
    title: 'AKRIN K.K. | IT Solutions for Businesses in Japan',
    description:
      'Managed IT services, cybersecurity, cloud operations, and strategic IT consulting for modern organizations.',
    images: [{ url: '/akrin-logo.svg', alt: 'AKRIN K.K.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKRIN K.K. | IT Solutions for Businesses in Japan',
    description:
      'Managed IT services, cybersecurity, cloud operations, and strategic IT consulting.',
    images: ['/akrin-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ja: '/ja',
      'x-default': '/',
    },
  },
}

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AKRIN K.K.',
  url: siteUrl,
  logo: `${siteUrl}/akrin-logo.svg`,
  telephone: '+81-3-6821-1223',
  email: 'support@akrin.jp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2-4-15 Minami Aoyama 4F',
    addressLocality: 'Minato City',
    addressRegion: 'Tokyo',
    postalCode: '107-0062',
    addressCountry: 'JP',
  },
  sameAs: ['https://www.linkedin.com/company/akrin-kk'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lora.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The AKRIN Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="bg-[#F4F3EC] text-[#17100E] antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
