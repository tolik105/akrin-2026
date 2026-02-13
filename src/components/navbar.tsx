'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
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

type SectionNavItem = {
  id: string
  number: string
  en: string
  ja: string
}

type SectionNavContext = {
  basePath: string
  items: SectionNavItem[]
}

const EMPTY_SECTION_NAV_ITEMS: SectionNavItem[] = []

const HOME_SECTION_NAV_ITEMS: SectionNavItem[] = [
  { id: 'services', number: '01', en: 'Services', ja: 'サービス' },
  { id: 'why-akrin', number: '02', en: 'Why Akrin', ja: 'AKRINの強み' },
  { id: 'case-studies', number: '03', en: 'Case Studies', ja: '導入事例' },
  { id: 'expertise', number: '04', en: 'Expertise', ja: '専門領域' },
  { id: 'faq', number: '05', en: 'FAQ', ja: 'FAQ' },
]

const ABOUT_SECTION_NAV_ITEMS: SectionNavItem[] = [
  { id: 'about-intro', number: '01', en: 'Intro', ja: 'イントロ' },
  { id: 'pillars', number: '02', en: 'Pillars', ja: '柱' },
  { id: 'partners', number: '03', en: 'Partners', ja: 'パートナー' },
  { id: 'values', number: '04', en: 'Values', ja: '価値観' },
  { id: 'offerings', number: '05', en: 'Offerings', ja: '提供内容' },
]

const SERVICES_INDEX_NAV_ITEMS: SectionNavItem[] = [
  { id: 'overview', number: '01', en: 'Overview', ja: '概要' },
  { id: 'service-catalog', number: '02', en: 'Services', ja: 'サービス' },
]

const SERVICE_DETAIL_NAV_ITEMS: SectionNavItem[] = [
  { id: 'overview', number: '01', en: 'Overview', ja: '概要' },
  { id: 'key-services', number: '02', en: 'Key Services', ja: '提供内容' },
]

const IT_MANAGED_SERVICES_NAV_ITEMS: SectionNavItem[] = [
  { id: 'overview', number: '01', en: 'Overview', ja: '概要' },
  { id: 'monitoring', number: '02', en: 'Monitoring', ja: '監視' },
  { id: 'help-desk', number: '03', en: 'Help Desk', ja: 'ヘルプデスク' },
  { id: 'infrastructure', number: '04', en: 'Infrastructure', ja: 'インフラ' },
  { id: 'security', number: '05', en: 'Security', ja: 'セキュリティ' },
  { id: 'continuity', number: '06', en: 'Continuity', ja: '事業継続' },
  { id: 'planning', number: '07', en: 'Planning', ja: 'IT戦略' },
  { id: 'partnership', number: '08', en: 'Partnership', ja: 'パートナー' },
  { id: 'faq', number: '09', en: 'FAQ', ja: 'FAQ' },
]

const IT_ASSET_SECTION_NAV_ITEMS: SectionNavItem[] = [
  { id: 'overview', number: '01', en: 'Overview', ja: '概要' },
  { id: 'benefits', number: '02', en: 'Benefits', ja: 'メリット' },
  { id: 'services', number: '03', en: 'Services', ja: 'サービス' },
  { id: 'process', number: '04', en: 'Process', ja: 'プロセス' },
  { id: 'why-akrin', number: '05', en: 'Why Akrin', ja: 'AKRINの強み' },
  { id: 'industries', number: '06', en: 'Industries', ja: '対応業界' },
  { id: 'faq', number: '07', en: 'FAQ', ja: 'FAQ' },
]

const ITAD_SECTION_NAV_ITEMS: SectionNavItem[] = [
  { id: 'overview', number: '01', en: 'Outcomes', ja: '提供価値' },
  { id: 'services', number: '02', en: 'Services', ja: 'サービス' },
  { id: 'compliance', number: '03', en: 'Compliance', ja: 'コンプライアンス' },
  { id: 'coverage', number: '04', en: 'Coverage', ja: '対応地域' },
  { id: 'process', number: '05', en: 'Process', ja: '標準フロー' },
  { id: 'equipment', number: '06', en: 'Equipment', ja: '対応機器' },
  { id: 'assurance', number: '07', en: 'Assurance', ja: '安心' },
  { id: 'faq', number: '08', en: 'FAQ', ja: 'FAQ' },
]

function getSectionNavContext(pathname: string | null): SectionNavContext | null {
  if (!pathname) return null

  if (pathname === '/' || pathname === '/ja') {
    return { basePath: pathname, items: HOME_SECTION_NAV_ITEMS }
  }

  if (pathname === '/about' || pathname === '/ja/about') {
    return { basePath: pathname, items: ABOUT_SECTION_NAV_ITEMS }
  }

  if (pathname === '/services' || pathname === '/ja/services') {
    return { basePath: pathname, items: SERVICES_INDEX_NAV_ITEMS }
  }

  if (pathname === '/services/it-asset-management' || pathname === '/ja/services/it-asset-management') {
    return { basePath: pathname, items: IT_ASSET_SECTION_NAV_ITEMS }
  }

  if (pathname === '/services/it-managed-services' || pathname === '/ja/services/it-managed-services') {
    return { basePath: pathname, items: IT_MANAGED_SERVICES_NAV_ITEMS }
  }

  if (pathname === '/services/itad-japan-apac-us' || pathname === '/ja/services/itad-japan-apac-us') {
    return { basePath: pathname, items: ITAD_SECTION_NAV_ITEMS }
  }

  if (/^\/services\/[^/]+$/.test(pathname) || /^\/ja\/services\/[^/]+$/.test(pathname)) {
    return { basePath: pathname, items: SERVICE_DETAIL_NAV_ITEMS }
  }

  return null
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileView, setMobileView] = useState<'main' | 'services'>('main')
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isJapanese = pathname?.startsWith('/ja')
  const isHome = pathname === '/' || pathname === '/ja'
  const sectionNavContext = getSectionNavContext(pathname)
  const hasSectionNav = Boolean(sectionNavContext)
  const sectionNavItems = sectionNavContext?.items ?? EMPTY_SECTION_NAV_ITEMS
  const sectionBasePath = sectionNavContext?.basePath ?? ''

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      const offset = hasSectionNav ? 132 : 84
      const top = section.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleSectionNavClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    closeMobileMenu()
    if (!hasSectionNav) return

    if (pathname !== sectionBasePath) {
      window.location.assign(`${sectionBasePath}#${id}`)
      return
    }

    window.setTimeout(() => {
      scrollToSection(id)
    }, 120)
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) setMobileView('main')
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!hasSectionNav || pathname !== sectionBasePath) {
      setActiveSection('')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )

    for (const item of sectionNavItems) {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    }

    return () => observer.disconnect()
  }, [hasSectionNav, pathname, sectionBasePath, sectionNavItems])

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 isolate transition-all duration-300',
          scrolled
            ? isHome
              ? 'bg-[#F4F3EC]/80 shadow-sm backdrop-blur-xl'
              : 'bg-white/80 shadow-sm backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        >
          <div className="flex items-center gap-6 xl:flex-1">
            <Link href={withLocale('/')} title="Home" className="-m-1.5 p-1.5">
              <span className="sr-only">AKRIN</span>
              <Logo className={clsx('h-9', isHome ? 'text-[#17100E]' : 'text-gray-950')} />
            </Link>
            {banner && (
              <div className="hidden items-center py-3 lg:flex">{banner}</div>
            )}
          </div>
          <div className="flex xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={clsx(
                '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
                isHome ? 'text-[#17100E]' : 'text-gray-700',
              )}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden xl:flex xl:gap-x-12">
            <Link
              href={withLocale('/')}
              className={clsx(
                'text-sm/6 font-semibold transition-colors',
                isHome ? 'text-[#17100E]/70 hover:text-[#17100E]' : 'text-gray-900',
              )}
            >
              {isJapanese ? 'ホーム' : 'Home'}
            </Link>
            <Popover className="relative">
              <PopoverButton
                className={clsx(
                  'inline-flex items-center gap-x-1 text-sm/6 font-semibold transition-colors',
                  isHome ? 'text-[#17100E]/70 hover:text-[#17100E]' : 'text-gray-900',
                )}
              >
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
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-[#FAFAF7]"
                        >
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-[#FAFAF7] group-hover:bg-white">
                            <Icon
                              aria-hidden="true"
                              className="size-6 text-gray-600 group-hover:text-[#3462BD]"
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
                  <div className="bg-[#FAFAF7] px-8 py-6">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-sm/6 font-semibold text-gray-900">
                        {isJapanese ? 'すべてのサービス' : 'All Services'}
                      </h3>
                      <p className="rounded-full bg-[#17100E]/10 px-2.5 py-1.5 text-xs font-semibold text-[#3462BD]">
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
              className={clsx(
                'text-sm/6 font-semibold transition-colors',
                isHome ? 'text-[#17100E]/70 hover:text-[#17100E]' : 'text-gray-900',
              )}
            >
              {isJapanese ? '会社概要' : 'About Us'}
            </Link>
            <Link
              href={withLocale('/case-studies')}
              className={clsx(
                'text-sm/6 font-semibold transition-colors',
                isHome ? 'text-[#17100E]/70 hover:text-[#17100E]' : 'text-gray-900',
              )}
            >
              {isJapanese ? '導入事例' : 'Case Studies'}
            </Link>
            <Link
              href={withLocale('/blog')}
              className={clsx(
                'text-sm/6 font-semibold transition-colors',
                isHome ? 'text-[#17100E]/70 hover:text-[#17100E]' : 'text-gray-900',
              )}
            >
              {isJapanese ? 'ブログ' : 'Blog'}
            </Link>
            <Link
              href={withLocale('/contact')}
              className={clsx(
                'text-sm/6 font-semibold transition-colors',
                isHome ? 'text-[#17100E]/70 hover:text-[#17100E]' : 'text-gray-900',
              )}
            >
              {isJapanese ? 'お問い合わせ' : 'Contact'}
            </Link>
          </PopoverGroup>
          <div className="hidden xl:flex xl:flex-1 xl:items-center xl:justify-end xl:gap-5">
            <Link
              href={languageSwitchHref}
              className={clsx(
                'text-sm/6 font-semibold transition-colors',
                isHome ? 'text-[#17100E]/40 hover:text-[#17100E]/70' : 'text-gray-700 hover:text-gray-900',
              )}
            >
              {isJapanese ? 'EN' : '日本語'}
            </Link>
            <span
              aria-hidden="true"
              className={clsx('h-4 w-px', isHome ? 'bg-[#17100E]/20' : 'bg-gray-300')}
            />
            <Link
              href={withLocale('/login')}
              className={clsx(
                'text-sm/6 font-semibold transition-colors',
                isHome ? 'text-[#17100E]/80 hover:text-[#17100E]' : 'text-gray-900 hover:text-gray-700',
              )}
            >
              {isJapanese ? 'カスタマーポータル' : 'Customer Portal'}{' '}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {hasSectionNav && (
          <div className="border-t border-[#17100E]/10 bg-[#F4F3EC]/95 backdrop-blur-sm lg:hidden">
            <nav aria-label="Mobile page sections" className="overflow-x-auto px-3 py-2">
              <div className="flex min-w-max items-center gap-5">
                {sectionNavItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={handleSectionNavClick(item.id)}
                    className={clsx(
                      'border-b py-2 font-mono text-[11px] uppercase tracking-[0.14em] whitespace-nowrap transition-colors duration-200',
                      activeSection === item.id
                        ? 'border-[#3462BD] text-[#3462BD]'
                        : 'border-transparent text-[#17100E]/45 hover:text-[#17100E]/75',
                    )}
                  >
                    {item.number} {isJapanese ? item.ja : item.en}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="xl:hidden"
        >
          <DialogPanel className="fixed inset-0 z-50 h-[100svh] w-full overflow-y-auto bg-[#17100E] px-4 pt-[68px] pb-6">
            <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-[#17100E] px-6 py-4">
              <Link
                href={withLocale('/')}
                title="Home"
                className="-m-1.5 p-1.5 text-gray-100"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">AKRIN</span>
                <Logo className="h-9" />
              </Link>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="-m-2.5 rounded-md p-2.5 text-white transition-colors hover:text-white/70"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-7xl flex-col justify-between">
              <div className="overflow-hidden">
                <div
                  className={clsx(
                    'flex w-[200%] transition-transform duration-300 ease-out',
                    mobileView === 'services' ? '-translate-x-1/2' : 'translate-x-0',
                  )}
                >
                  <div className="w-1/2 pr-1">
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() => setMobileView('services')}
                        className="flex w-full items-center justify-between px-3 py-3 text-left text-[22px] font-normal leading-[1em] text-white transition-colors hover:text-white/70"
                      >
                        <span>{isJapanese ? 'サービス' : 'Services'}</span>
                        <span aria-hidden="true" className="text-sm text-white/70">▶</span>
                      </button>
                      <Link
                        href={withLocale('/')}
                        onClick={closeMobileMenu}
                        className="block w-full px-3 py-3 text-[22px] font-normal leading-[1em] text-white transition-colors hover:text-white/70"
                      >
                        {isJapanese ? 'ホーム' : 'Home'}
                      </Link>
                      <Link
                        href={withLocale('/about')}
                        onClick={closeMobileMenu}
                        className="block w-full px-3 py-3 text-[22px] font-normal leading-[1em] text-white transition-colors hover:text-white/70"
                      >
                        {isJapanese ? '会社概要' : 'About Us'}
                      </Link>
                      <Link
                        href={withLocale('/case-studies')}
                        onClick={closeMobileMenu}
                        className="block w-full px-3 py-3 text-[22px] font-normal leading-[1em] text-white transition-colors hover:text-white/70"
                      >
                        {isJapanese ? '導入事例' : 'Case Studies'}
                      </Link>
                      <Link
                        href={withLocale('/blog')}
                        onClick={closeMobileMenu}
                        className="block w-full px-3 py-3 text-[22px] font-normal leading-[1em] text-white transition-colors hover:text-white/70"
                      >
                        {isJapanese ? 'ブログ' : 'Blog'}
                      </Link>
                      <Link
                        href={withLocale('/contact')}
                        onClick={closeMobileMenu}
                        className="block w-full px-3 py-3 text-[22px] font-normal leading-[1em] text-white transition-colors hover:text-white/70"
                      >
                        {isJapanese ? 'お問い合わせ' : 'Contact'}
                      </Link>
                    </div>

                    <div className="mt-8 space-y-1">
                      <Link
                        href={languageSwitchHref}
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {isJapanese ? 'EN' : '日本語'}
                      </Link>
                      <Link
                        href={withLocale('/login')}
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {isJapanese ? 'カスタマーポータル' : 'Customer Portal'}
                      </Link>
                    </div>

                    {hasSectionNav && (
                      <div className="mt-6 border-t border-white/10 pt-4">
                        <nav aria-label="Page sections">
                          <div className="space-y-0">
                            {sectionNavItems.map((item, index) => (
                              <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={handleSectionNavClick(item.id)}
                                className={clsx(
                                  'block py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200',
                                  index < sectionNavItems.length - 1 && 'border-b border-white/10',
                                  activeSection === item.id
                                    ? 'border-[#3462BD] text-[#3462BD]'
                                    : 'text-gray-500 hover:text-white',
                                )}
                              >
                                {item.number} {isJapanese ? item.ja : item.en}
                              </a>
                            ))}
                          </div>
                        </nav>
                      </div>
                    )}
                  </div>

                  <div className="w-1/2 pl-1">
                    <button
                      type="button"
                      onClick={() => setMobileView('main')}
                      className="mb-4 px-3 py-2 text-sm text-white transition-colors hover:text-white/70"
                    >
                      ← {isJapanese ? 'すべて' : 'All'}
                    </button>
                    <div className="space-y-2">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2 transition-colors hover:text-white/70"
                        >
                          <span className="block text-base text-white">{item.name}</span>
                          <span className="mt-1 block text-sm text-white/60">
                            {item.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <Link
                  href={withLocale('/contact')}
                  onClick={closeMobileMenu}
                  className="w-full rounded-md border border-white bg-transparent px-4 py-3.5 text-center text-base text-white transition-colors hover:bg-white/10"
                >
                  {isJapanese ? 'お問い合わせ' : 'Contact Us'}
                </Link>
                <Link
                  href={withLocale('/contact')}
                  onClick={closeMobileMenu}
                  className="w-full rounded-md bg-white px-4 py-3.5 text-center text-base text-black transition-colors hover:bg-gray-100"
                >
                  {isJapanese ? 'はじめる' : 'Get Started'}
                </Link>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Spacer to push content below the fixed navbar */}
      <div className={clsx(hasSectionNav ? 'h-[124px] lg:h-20' : 'h-20')} />
    </>
  )
}
