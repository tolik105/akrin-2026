'use client'

import { clsx } from 'clsx'
import { useEffect, useState } from 'react'

type ServiceChapterItem = {
  id: string
  label: string
  num: string
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value))
}

export function ServiceChapterNav({
  items,
  className,
}: {
  items: ServiceChapterItem[]
  className?: string
}) {
  const [progress, setProgress] = useState<number[]>(() => items.map(() => 0))
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!items.length) return

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
  }, [items])

  return (
    <nav
      className={clsx('hidden lg:sticky lg:top-28 lg:block lg:self-start', className)}
      aria-label="Service chapter navigation"
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
              <span className="mt-3 block h-[2px] w-full overflow-hidden rounded-full bg-[#0A0B19]/10" aria-hidden="true">
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
