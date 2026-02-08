'use client'

import { usePathname } from 'next/navigation'
import { allServices } from '@/lib/service-catalog'
import { Link } from './link'
import { Logo } from './logo'

export function Footer() {
  const pathname = usePathname()
  const isJapanese = pathname?.startsWith('/ja')

  const withLocale = (href: string) => {
    if (!isJapanese) return href
    if (href === '/') return '/ja'
    if (href.startsWith('/ja/')) return href
    return `/ja${href}`
  }

  const navigation = {
    solutions: allServices.slice(0, 5).map((service) => ({
      name: isJapanese ? service.title.ja : service.title.en,
      href: withLocale(`/services/${service.slug}`),
    })),
    support: [
      {
        name: isJapanese ? 'お問い合わせ' : 'Contact',
        href: withLocale('/contact'),
      },
      {
        name: isJapanese ? 'カスタマーポータル' : 'Customer Portal',
        href: withLocale('/login'),
      },
    ],
    company: [
      { name: isJapanese ? '会社概要' : 'About', href: withLocale('/about') },
      { name: isJapanese ? 'ブログ' : 'Blog', href: withLocale('/blog') },
      {
        name: isJapanese ? '導入事例' : 'Case Studies',
        href: withLocale('/case-studies'),
      },
      { name: isJapanese ? 'お問い合わせ' : 'Contact', href: withLocale('/contact') },
    ],
    legal: [
      {
        name: isJapanese ? '利用規約' : 'Terms of service',
        href: withLocale('/terms'),
      },
      {
        name: isJapanese ? 'プライバシーポリシー' : 'Privacy policy',
        href: withLocale('/privacy'),
      },
      {
        name: isJapanese ? 'クッキーポリシー' : 'Cookie policy',
        href: withLocale('/cookies'),
      },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/akrin-kk',
        icon: (props: React.ComponentPropsWithoutRef<'svg'>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.4c0-3.14-1.67-4.6-3.9-4.6-1.8 0-2.6 1-3.05 1.7h-.05V8.5H10.2V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.39v-6.6Z" />
          </svg>
        ),
      },
    ],
  }

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href={withLocale('/')} className="inline-block text-gray-950">
              <span className="sr-only">AKRIN</span>
              <Logo className="h-9" />
            </Link>
            <p className="text-sm/6 text-balance text-gray-600">
              {isJapanese
                ? 'AKRINは、日本企業向けにバイリンガルのIT運用・セキュリティ・クラウド支援を提供しています。'
                : 'AKRIN delivers bilingual IT operations, security, and cloud services for businesses in Japan.'}
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {isJapanese ? 'ソリューション' : 'Solutions'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {isJapanese ? 'サポート' : 'Support'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {isJapanese ? '会社情報' : 'Company'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {isJapanese ? '法務' : 'Legal'}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-600">
            &copy; {new Date().getFullYear()} AKRIN K.K.{' '}
            {isJapanese ? '無断複写・転載を禁じます。' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
