'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'

type SectionNavItem = {
  id: string
  label: string
  num: string
}

const DEFAULT_NAV_ITEMS: SectionNavItem[] = [
  { id: 'services', label: 'SERVICES', num: '01' },
  { id: 'why-akrin', label: 'WHY AKRIN', num: '02' },
  { id: 'case-studies', label: 'CASE STUDIES', num: '03' },
  { id: 'expertise', label: 'EXPERTISE', num: '04' },
  { id: 'faq', label: 'FAQ', num: '05' },
]

function clamp(value: number) {
  return Math.min(1, Math.max(0, value))
}

export function SectionNav({
  items = DEFAULT_NAV_ITEMS,
  ariaLabel = 'Page sections',
  variant = 'desktop',
  className,
}: {
  items?: SectionNavItem[]
  ariaLabel?: string
  variant?: 'mobile' | 'desktop' | 'top' | 'ribbon'
  className?: string
}) {
  const [progress, setProgress] = useState<number[]>(() => items.map(() => 0))
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [highlight, setHighlight] = useState<{ left: number; width: number; ready: boolean }>({
    left: 0,
    width: 0,
    ready: false,
  })
  const listRef = useRef<HTMLUListElement | null>(null)
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const visibleIndex = hoverIndex ?? activeIndex
  const itemIds = items.map((item) => item.id).join('|')

  const updateRibbonHighlight = useCallback((index: number) => {
    const target = tabRefs.current[index]
    if (!target) {
      setHighlight((previous) => (previous.ready ? { ...previous, ready: false } : previous))
      return
    }

    const next = {
      left: target.offsetLeft,
      width: target.offsetWidth,
      ready: true,
    }

    setHighlight((previous) => {
      if (
        previous.ready === next.ready &&
        previous.left === next.left &&
        previous.width === next.width
      ) {
        return previous
      }
      return next
    })
  }, [])

  useEffect(() => {
    if (!items.length || variant === 'ribbon') return

    let frame = 0

    const update = () => {
      const viewportHeight = window.innerHeight || 1

      const nextProgress = items.map((item) => {
        const target = document.getElementById(item.id)
        if (!target) return 0

        const rect = target.getBoundingClientRect()
        const traversed = viewportHeight - rect.top
        const total = rect.height + viewportHeight * 0.35
        return clamp(traversed / Math.max(total, 1))
      })

      let nextActive = nextProgress.findIndex((value) => value > 0 && value < 1)
      if (nextActive === -1) {
        const finishedCount = nextProgress.filter((value) => value >= 1).length
        nextActive = Math.min(items.length - 1, Math.max(0, finishedCount))
      }

      setProgress((previous) => {
        if (
          previous.length === nextProgress.length &&
          previous.every((value, index) => Math.abs(value - nextProgress[index]) < 0.01)
        ) {
          return previous
        }
        return nextProgress
      })

      setActiveIndex((previous) => (previous === nextActive ? previous : nextActive))
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [itemIds, variant])

  useEffect(() => {
    if (variant !== 'ribbon' || !items.length) return

    const updateActiveFromScroll = () => {
      const stickyOffset = 156
      const marker = window.scrollY + stickyOffset
      let nextIndex = 0

      for (let index = 0; index < items.length; index += 1) {
        const section = document.getElementById(items[index].id)
        if (!section) continue
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        if (marker >= sectionTop) nextIndex = index
      }

      setActiveIndex((previous) => (previous === nextIndex ? previous : nextIndex))
    }

    window.addEventListener('scroll', updateActiveFromScroll, { passive: true })
    window.addEventListener('resize', updateActiveFromScroll)
    updateActiveFromScroll()

    return () => {
      window.removeEventListener('scroll', updateActiveFromScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
    }
  }, [itemIds, variant])

  useEffect(() => {
    if (variant !== 'ribbon') return

    updateRibbonHighlight(visibleIndex)
    const activeTab = tabRefs.current[activeIndex]
    activeTab?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeIndex, updateRibbonHighlight, variant, visibleIndex])

  useEffect(() => {
    if (variant !== 'ribbon') return

    const recalculate = () => updateRibbonHighlight(visibleIndex)
    window.addEventListener('resize', recalculate)

    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined' && listRef.current) {
      resizeObserver = new ResizeObserver(recalculate)
      resizeObserver.observe(listRef.current)
    }

    recalculate()

    return () => {
      window.removeEventListener('resize', recalculate)
      resizeObserver?.disconnect()
    }
  }, [updateRibbonHighlight, variant, visibleIndex])

  const handleRibbonClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    index: number,
  ) => {
    event.preventDefault()
    setActiveIndex(index)
    setHoverIndex(null)

    const target = document.getElementById(sectionId)
    if (!target) return

    const top = target.getBoundingClientRect().top + window.scrollY - 124
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleRibbonHover = (index: number) => {
    setHoverIndex(index)
    updateRibbonHighlight(index)
  }

  const clearRibbonHover = () => {
    setHoverIndex(null)
    updateRibbonHighlight(activeIndex)
  }

  if (variant === 'ribbon') {
    return (
      <nav
        className={clsx('sticky top-[68px] z-40 h-[40px] bg-[#0052A3] sm:h-[44px] lg:h-[48px]', className)}
        aria-label={ariaLabel}
      >
        <div className="h-full overflow-x-auto px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ul
            ref={listRef}
            onMouseLeave={clearRibbonHover}
            className="relative mx-auto flex h-full min-w-max items-center justify-start lg:justify-center"
          >
            <li
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-y-0 left-0 z-0 bg-[#0066CC] transition-[transform,width,opacity] duration-[400ms] ease-out',
                highlight.ready ? 'opacity-100' : 'opacity-0',
              )}
              style={{
                width: `${highlight.width}px`,
                transform: `translateX(${highlight.left}px)`,
              }}
            />
            {items.map((item, index) => (
              <li key={item.id} className="flex h-full items-center">
                <a
                  ref={(element) => {
                    tabRefs.current[index] = element
                  }}
                  href={`#${item.id}`}
                  onClick={(event) => handleRibbonClick(event, item.id, index)}
                  onMouseMove={() => handleRibbonHover(index)}
                  onMouseEnter={() => handleRibbonHover(index)}
                  onFocus={() => handleRibbonHover(index)}
                  onBlur={clearRibbonHover}
                  className={clsx(
                    'relative z-10 inline-flex h-full items-center whitespace-nowrap px-3 py-2 font-sans text-[12px] tracking-normal text-white transition-colors duration-200 sm:px-4 sm:py-3 sm:text-[13px] lg:px-5 lg:text-[14px]',
                    index === activeIndex ? 'font-semibold' : 'font-normal',
                  )}
                >
                  {item.num} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }

  /* ── Mobile: horizontal scrollable bar (lg:hidden) ── */
  if (variant === 'mobile') {
    return (
      <nav
        className={clsx(
          'sticky top-16 z-30 overflow-x-auto border-b border-[#0A0B19]/10 bg-[#F7F7FC]/95 backdrop-blur-sm lg:hidden',
          className,
        )}
        aria-label={ariaLabel}
      >
        <ul className="flex min-w-max px-6">
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx(
                  'block whitespace-nowrap border-b-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200',
                  index === activeIndex
                    ? 'border-[#0A0B19] text-[#0A0B19]'
                    : 'border-transparent text-[#0A0B19]/65 hover:text-[#0A0B19]/80',
                )}
              >
                {item.num}&ensp;{item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  /* ── Top: horizontal sticky bar with progress (hidden lg:block) — used on home page ── */
  if (variant === 'top') {
    return (
      <nav
        className={clsx(
          'sticky top-20 z-30 hidden border-b border-[#0A0B19]/10 bg-[#F7F7FC]/95 backdrop-blur-sm lg:block',
          className,
        )}
        aria-label={ariaLabel}
      >
        <ul className="mx-auto flex max-w-[1400px] justify-center px-8">
          {items.map((item, index) => (
            <li key={item.id} className="flex-1">
              <a
                href={`#${item.id}`}
                className={clsx(
                  'group relative block px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200',
                  index === activeIndex
                    ? 'text-[#0A0B19]'
                    : 'text-[#0A0B19]/50 hover:text-[#0A0B19]/75',
                )}
              >
                {item.num}&ensp;{item.label}
                <span
                  className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-[#0A0B19]/10"
                  aria-hidden="true"
                >
                  <span
                    className="block h-full origin-left bg-[#0A0B19]/70 transition-transform duration-200 will-change-transform"
                    style={{ transform: `scaleX(${progress[index] ?? 0})` }}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  /* ── Desktop: vertical sticky sidebar with progress — used on service/Ekahau pages ── */
  return (
    <nav
      className={clsx(
        'hidden lg:sticky lg:top-28 lg:block lg:self-start',
        className,
      )}
      aria-label={ariaLabel}
    >
      <ol className="space-y-4">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={clsx(
                'block rounded-xl border px-4 py-3 transition-all duration-300',
                index === activeIndex
                  ? 'border-[#0A0B19]/25 bg-white shadow-sm'
                  : 'border-[#0A0B19]/10 bg-white/50 hover:border-[#0A0B19]/20',
              )}
            >
              <span className="block font-mono text-[11px] tracking-[0.14em] text-[#0A0B19]/45">
                {item.num}
              </span>
              <span className="mt-1 block text-[13px] leading-[1.4] text-[#0A0B19]/75">
                {item.label}
              </span>
              <span
                className="mt-3 block h-[2px] w-full overflow-hidden rounded-full bg-[#0A0B19]/10"
                aria-hidden="true"
              >
                <span
                  className="block h-full origin-left bg-[#0A0B19]/55 transition-transform duration-200 will-change-transform"
                  style={{ transform: `scaleX(${progress[index] ?? 0})` }}
                />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
