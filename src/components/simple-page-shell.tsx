import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'

export function SimplePageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Container className="py-20 sm:py-28">
          <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
            {eyebrow}
          </p>
          <Heading as="h1" className="mt-2 max-w-4xl">
            {title}
          </Heading>
          <p className="mt-8 max-w-3xl text-lg/8 text-gray-700">{description}</p>
          {children ? <div className="mt-12">{children}</div> : null}
        </Container>
      </main>
      <Footer />
    </div>
  )
}
