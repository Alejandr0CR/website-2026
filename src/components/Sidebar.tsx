import { About } from './About'
import { Contact } from './Contact'
import { Languages } from './Languages'

export function Sidebar() {
  return (
    <header className="w-full bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-md lg:items-start lg:overflow-y-auto xl:w-120">
      {/* Vertical label (desktop only) */}
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:px-12 lg:text-sm/7 lg:whitespace-nowrap lg:[writing-mode:vertical-rl]">
        <span className="font-mono text-slate-500">Technical Lead</span>
        <span className="mt-6 flex gap-6 font-bold text-slate-900">
          Web &amp; AI Engineer
        </span>
      </div>

      {/* Main sidebar content */}
      <div className="relative z-10 mx-auto w-full px-4 pt-10 pb-4 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
        {/* Profile photo */}
        <div className="relative mx-auto block w-80 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-96 sm:rounded-xl lg:w-auto lg:rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Alejandro Carrasco Rodríguez"
            src="/images/me.jpg"
            className="w-full"
          />
          <div className="absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset sm:rounded-xl lg:rounded-2xl" />
        </div>

        {/* Name & title */}
        <div className="mt-10 text-center lg:mt-12 lg:text-left">
          <p className="text-xl font-bold text-slate-900">
            Alejandro Carrasco Rodríguez
          </p>
          <h1 className="mt-3 text-lg/8 font-medium text-slate-700">
            Technical Lead - Web &amp; AI Engineer
          </h1>
          <p className="mt-2 text-sm text-slate-600">Cali, Colombia</p>
        </div>

        <About />
        <Languages />
        <Contact />
      </div>
    </header>
  )
}
