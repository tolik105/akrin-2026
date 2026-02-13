'use client'

import { useEffect, useState } from 'react'
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

export function SectionNav({
  items = DEFAULT_NAV_ITEMS,
  ariaLabel = 'Page sections',
  className,
}: {
  items?: SectionNavItem[]
  ariaLabel?: string
  className?: string
}) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )

    for (const { id } of items) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }

    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      className={clsx(
        'hidden h-fit w-40 shrink-0 self-start rounded-lg bg-[#F4F3EC]/80 px-3 py-2 backdrop-blur-sm lg:sticky lg:top-32 lg:block',
        className,
      )}
      aria-label={ariaLabel}
    >
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block border-b py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 ${
                active === item.id
                  ? 'border-[#3462BD] text-[#3462BD]'
                  : 'border-[#17100E]/10 text-[#17100E]/40 hover:text-[#17100E]/70'
              }`}
            >
              {item.num}&ensp;{item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
