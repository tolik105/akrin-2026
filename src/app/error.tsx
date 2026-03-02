'use client'

import { Button } from '@/components/button'
import { Logo } from '@/components/logo'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Logo className="mx-auto h-8 text-[#0A0B19]" />
        <p className="mt-10 text-base font-semibold text-[#0A0B19]">500</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-[#0A0B19] sm:text-7xl">
          Something went wrong
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-[#0A0B19]/60 sm:text-xl/8">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" href="/">
            Go back home <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </div>
    </main>
  )
}
