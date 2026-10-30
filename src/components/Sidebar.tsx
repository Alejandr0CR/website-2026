import { About } from './About.tsx'
import { Contact } from './Contact.tsx'
import { Languages } from './Languages.tsx'

export function Sidebar() {
  return (
    <header className="w-full bg-panel lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-md lg:items-start lg:overflow-y-auto xl:w-120">
      {/* Vertical label (desktop only) */}
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:px-12 lg:text-sm/7 lg:whitespace-nowrap lg:[writing-mode:vertical-rl]">
        <span className="font-mono text-muted">Technical Lead</span>
        <span className="mt-6 flex gap-6 font-display font-bold text-ink">
          Web &amp; AI Engineer
        </span>
      </div>

      {/* Main sidebar content */}
      <div className="relative z-10 mx-auto w-full px-4 pt-10 pb-4 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-edge lg:px-8 lg:py-12 xl:px-12">
        {/* Profile photo */}
        <div className="relative mx-auto block w-80 overflow-hidden rounded-lg bg-raised shadow-xl shadow-black/30 sm:w-96 sm:rounded-xl lg:w-auto lg:rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Alejandro Carrasco Rodríguez"
            src="/images/me.ai.png"
            className="w-full"
          />
          <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 ring-inset sm:rounded-xl lg:rounded-2xl" />
        </div>

        {/* Name & title */}
        <div className="mt-10 text-center lg:mt-12 lg:text-left">
          <p className="font-display text-xl font-bold text-ink">
            Alejandro Carrasco Rodríguez
          </p>
          <h1 className="mt-3 text-lg/8 font-medium text-muted">
            Technical Lead - Web &amp; AI Engineer
          </h1>
          <p className="mt-2 text-sm text-muted">Cali, Colombia</p>
          <a
            href="https://blog.alejandrocr.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-4 flex h-[46px] w-full items-center justify-center no-underline transition-colors duration-150 hover:bg-arcane/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-science"
          >
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible fill-none [stroke:var(--color-power)] [stroke-width:.35px] [transition:stroke_.16s_ease] group-hover:[stroke:var(--color-science)]"
              focusable="false"
              preserveAspectRatio="none"
              viewBox="0 0 100 46"
            >
              <rect height="45" width="99" x=".5" y=".5" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="relative z-10 font-sans text-xs font-semibold uppercase tracking-[.085em] text-ink transition-colors duration-150 group-hover:text-power">
              Ir al blog
            </span>
          </a>
        </div>

        <About />
        <Languages />
        <Contact />
      </div>
    </header>
  )
}
