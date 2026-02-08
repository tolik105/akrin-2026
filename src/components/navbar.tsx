'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import { allServices } from '@/lib/service-catalog'
import { getAlternatesForPath } from '@/lib/route-map'
import { Link } from './link'
import { Logo } from './logo'

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isJapanese = pathname?.startsWith('/ja')

  const withLocale = (href: string) => {
    if (!isJapanese) return href
    if (href === '/') return '/ja'
    if (href.startsWith('/ja/')) return href
    return `/ja${href}`
  }

  const withoutJapanesePrefix = (href: string) => {
    if (!href.startsWith('/ja')) return href
    const stripped = href.slice(3)
    return stripped === '' ? '/' : stripped
  }

  const alternates = getAlternatesForPath(pathname || '/')
  const languageSwitchHref = isJapanese
    ? alternates?.en || withoutJapanesePrefix(pathname || '/')
    : alternates?.ja || `/ja${pathname === '/' ? '' : pathname || ''}`

  const services = allServices.map((service) => ({
    name: isJapanese ? service.title.ja : service.title.en,
    description: isJapanese ? service.intro.ja : service.intro.en,
    href: withLocale(`/services/${service.slug}`),
  }))
  const serviceIcons = [
    ChartPieIcon,
    SquaresPlusIcon,
    CursorArrowRaysIcon,
    ArrowPathIcon,
    FingerPrintIcon,
    DocumentChartBarIcon,
  ]

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 isolate transition-all duration-300',
          scrolled
            ? 'bg-white/80 shadow-sm backdrop-blur-lg'
            : 'bg-transparent',
        )}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4 lg:max-w-7xl lg:px-8"
        >
          <div className="flex items-center gap-6 lg:flex-1">
            <Link href={withLocale('/')} title="Home" className="-m-1.5 p-1.5">
              <span className="sr-only">AKRIN</span>
              <Logo className="h-9" />
            </Link>
            {banner && (
              <div className="hidden items-center py-3 lg:flex">{banner}</div>
            )}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              href={withLocale('/')}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {isJapanese ? 'ホーム' : 'Home'}
            </Link>
            <Popover className="relative">
              <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                {isJapanese ? 'サービス' : 'Services'}
                <ChevronDownIcon aria-hidden="true" className="size-5" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 lg:max-w-3xl">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                    {services.map((item, index) => {
                      const Icon = serviceIcons[index % serviceIcons.length]

                      return (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                        >
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <Icon
                              aria-hidden="true"
                              className="size-6 text-gray-600 group-hover:text-indigo-600"
                            />
                          </div>
                          <div>
                            <Link href={item.href} className="font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="bg-gray-50 px-8 py-6">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-sm/6 font-semibold text-gray-900">
                        {isJapanese ? 'すべてのサービス' : 'All Services'}
                      </h3>
                      <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">
                        {isJapanese ? '一覧' : 'New'}
                      </p>
                    </div>
                    <p className="mt-2 text-sm/6 text-gray-600">
                      {isJapanese
                        ? 'AKRINの全サービスを一覧で確認できます。'
                        : 'Explore the complete AKRIN service catalog.'}
                    </p>
                    <Link
                      href={withLocale('/services')}
                      className="mt-3 inline-block text-sm/6 font-semibold text-gray-900 hover:text-gray-700"
                    >
                      {isJapanese ? 'サービス一覧へ' : 'View all services'}
                    </Link>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>

            <Link
              href={withLocale('/about')}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {isJapanese ? '会社概要' : 'About Us'}
            </Link>
            <Link
              href={withLocale('/case-studies')}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {isJapanese ? '導入事例' : 'Case Studies'}
            </Link>
            <Link
              href={withLocale('/blog')}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {isJapanese ? 'ブログ' : 'Blog'}
            </Link>
            <Link
              href={withLocale('/contact')}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {isJapanese ? 'お問い合わせ' : 'Contact'}
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-5">
            <Link
              href={languageSwitchHref}
              className="text-sm/6 font-semibold text-gray-700 transition-colors hover:text-gray-900"
            >
              {isJapanese ? 'EN' : '日本語'}
            </Link>
            <span aria-hidden="true" className="h-4 w-px bg-gray-300" />
            <Link
              href={withLocale('/login')}
              className="text-sm/6 font-semibold text-gray-900 transition-colors hover:text-gray-700"
            >
              {isJapanese ? 'カスタマーポータル' : 'Customer Portal'}{' '}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href={withLocale('/')}
                title="Home"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">AKRIN</span>
                <Logo className="h-9" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      {isJapanese ? 'サービス' : 'Services'}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Link
                    href={withLocale('/')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {isJapanese ? 'ホーム' : 'Home'}
                  </Link>
                  <Link
                    href={withLocale('/about')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {isJapanese ? '会社概要' : 'About Us'}
                  </Link>
                  <Link
                    href={withLocale('/case-studies')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {isJapanese ? '導入事例' : 'Case Studies'}
                  </Link>
                  <Link
                    href={withLocale('/blog')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {isJapanese ? 'ブログ' : 'Blog'}
                  </Link>
                  <Link
                    href={withLocale('/contact')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {isJapanese ? 'お問い合わせ' : 'Contact'}
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href={languageSwitchHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 mb-2 block rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-base/7 font-semibold text-gray-900"
                  >
                    {isJapanese ? 'EN' : '日本語'}
                  </Link>
                  <Link
                    href={withLocale('/login')}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {isJapanese ? 'カスタマーポータル' : 'Customer Portal'}
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Spacer to push content below the fixed navbar */}
      <div className="h-20" />
    </>
  )
}
