'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  target: number
  suffix?: string
  duration?: number
}

export function CountUp({ target, suffix = '%', duration = 1800 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setCount(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.unobserve(element)

          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = progress === 1 ? 1 : 1 - 2 ** (-10 * progress)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {count}
      {suffix}
    </span>
  )
}
