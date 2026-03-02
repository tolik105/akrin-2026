import { Button } from '@/components/button'
import { Logo } from '@/components/logo'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Logo className="mx-auto h-8 text-[#0A0B19]" />
        <p className="mt-10 text-base font-semibold text-[#0A0B19]">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-[#0A0B19] sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-[#0A0B19]/60 sm:text-xl/8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/">Go back home</Button>
          <Button variant="outline" href="/contact">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </div>
    </main>
  )
}
