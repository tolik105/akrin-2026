import Image from 'next/image'
import { Link } from '@/components/link'

const timeline = [
  {
    name: 'Business partnership',
    description:
      'Direct access to senior engineers; no account-manager relay. We understand your business needs and technical challenges equally.',
    date: 'Pillar 01',
    dateTime: '2025-01',
  },
  {
    name: 'Continuous reliability',
    description:
      '24/7 monitoring, < 2h response SLA, and 99.9% uptime guarantee. Your infrastructure stays running so your business never stops.',
    date: 'Pillar 02',
    dateTime: '2025-02',
  },
  {
    name: 'Systematic growth',
    description:
      'Scalable solutions that grow with your business. From startup to enterprise, we provide the infrastructure foundation for success.',
    date: 'Pillar 03',
    dateTime: '2025-03',
  },
  {
    name: 'Automation first',
    description:
      'Scripted remediation and standardized operations reduce mean-time-to-restore while maintaining quality and compliance.',
    date: 'Pillar 04',
    dateTime: '2025-04',
  },
]

const serviceItems = [
  {
    id: 1,
    title: 'Managed IT & Cloud',
    href: '/services/managed-it-cloud-infrastructure-japan',
    description:
      'End-to-end design, migration, and 24/7 operations for Microsoft 365, Azure, AWS, and hybrid environments.',
    detail: 'Japan and APAC support',
  },
  {
    id: 2,
    title: 'Network Engineering',
    href: '/services/wifi-design',
    description:
      'Planning, installation, and optimisation of wired / wireless networks-from multi-site WANs to in-office Wi-Fi surveys.',
    detail: 'Office, data center, and branch rollouts',
  },
  {
    id: 3,
    title: 'Project Management & Delivery',
    href: '/services/it-consulting-project-management',
    description:
      'PMP-driven frameworks that keep complex roll-outs on time, on budget, and fully documented.',
    detail: 'Structured execution with transparent reporting',
  },
  {
    id: 4,
    title: 'Custom AI Solutions',
    href: '/services/it-consulting-project-management',
    description:
      'We build domain-specific chatbots, workflow automations, and data copilots tailored to your stack.',
    detail: 'Private beta lessons applied to client delivery',
  },
  {
    id: 5,
    title: 'Cybersecurity & Compliance',
    href: '/services/cybersecurity-compliance',
    description:
      'Hardening, real-time monitoring, incident response, and hands-on guidance toward frameworks such as ISO 27001.',
    detail: 'Security operations and compliance readiness',
  },
]

const coreValues = [
  {
    value: '99.9%',
    title: 'Uptime guarantee',
    description: 'Infrastructure reliability that keeps operations running.',
    className: 'bg-gray-50 text-gray-900',
    bodyClassName: 'text-gray-600',
  },
  {
    value: '< 2h',
    title: 'Response SLA',
    description: 'Accountable support response during business hours.',
    className: 'bg-gray-900 text-white',
    bodyClassName: 'text-gray-400',
  },
  {
    value: '40%',
    title: 'Faster MTTR',
    description: 'Automation-first remediation shortens restoration time.',
    className: 'bg-indigo-600 text-white',
    bodyClassName: 'text-indigo-200',
  },
]

export default function AboutClient() {
  return (
    <main className="isolate overflow-hidden bg-white pt-20">
      <section className="relative isolate -z-10 overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              About AKRIN
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Founded in Tokyo in 2025 by veteran infrastructure engineers, AKRIN blends 15 years of large-scale IT
                experience with a lean, automation-first mindset.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                Enterprise Reliability, Startup Agility.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <Image
              alt="AKRIN team collaborating"
              src="/company/1.jpg"
              width={1280}
              height={1066}
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-28"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </section>

      <section className="mx-auto -mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name} className="relative">
              <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-indigo-600">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-3 -z-10 ml-2 h-px w-screen bg-gray-900/10 lg:static lg:z-auto lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
              <p className="mt-2 text-base/7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <div className="rounded-3xl bg-gray-900 px-6 py-20 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Trusted technology partners and platforms
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
            AKRIN teams design, operate, and secure mission-critical environments across modern cloud and collaboration
            ecosystems.
          </p>
          <div className="mx-auto mt-14 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:max-w-4xl lg:grid-cols-5">
            <Image alt="Transistor" src="/logo-cloud/transistor.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="Laravel" src="/logo-cloud/laravel.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="Tuple" src="/logo-cloud/tuple.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="SavvyCal" src="/logo-cloud/savvycal.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="Statamic" src="/logo-cloud/statamic.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="mt-24 overflow-hidden sm:mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-12 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Who We Are</h2>
              <p className="mt-6 text-xl/8 text-gray-700">
                Our mission is simple: give high-growth companies in Japan the uptime, security, and innovation the
                Fortune 500 enjoy-without the enterprise price tag.
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                Engineer-Led Service, Automation First, Japan-Global Bridge. We combine local execution with global
                standards to keep your business resilient and scalable.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  alt="AKRIN office setup"
                  src="/company/2.jpg"
                  width={1152}
                  height={822}
                  className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                  <Image
                    alt="AKRIN delivery"
                    src="/company/3.jpg"
                    width={768}
                    height={604}
                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    alt="AKRIN collaboration"
                    src="/company/4.jpg"
                    width={1152}
                    height={842}
                    className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    alt="AKRIN engineering"
                    src="/company/5.jpg"
                    width={768}
                    height={604}
                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            We approach work as a place to make systems better
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Clarity, velocity, accountability, and partnership are the operating values behind every AKRIN engagement.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {coreValues.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:flex-row-reverse sm:items-end lg:flex-1 lg:flex-col lg:items-start ${item.className}`}
            >
              <p className="flex-none text-3xl font-bold tracking-tight">{item.value}</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight">{item.title}</p>
                <p className={`mt-2 text-base/7 ${item.bodyClassName}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 pb-24 sm:mt-28 lg:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              End-to-end IT services designed for security, resilience, and scalable growth in Japan and APAC.
            </p>
            <Image
              alt="AKRIN service delivery"
              src="/map.png"
              width={1344}
              height={1104}
              className="mt-12 aspect-6/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 lg:aspect-auto lg:h-138"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <ul className="-my-8 divide-y divide-gray-100">
              {serviceItems.map((item) => (
                <li key={item.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <Link href={item.href}>
                        {item.title}
                        <span aria-hidden="true" className="absolute inset-0" />
                      </Link>
                    </dd>
                    <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">{item.description}</dd>
                    <dd className="mt-4 text-base/7 font-semibold text-gray-900">Core capability</dd>
                    <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                      <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-gray-300">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {item.detail}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <Link href="/services" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                View all services <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
