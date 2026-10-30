import { SectionTitle } from './SectionTitle'

export function Contact() {
  return (
    <section className="mt-10 lg:mt-12">
      <SectionTitle label="Contact" dot1Color="fill-science" dot2Color="fill-arcane" />
      <div className="h-px bg-linear-to-r from-edge/0 via-edge to-edge/0 lg:hidden" />
      <div className="flex justify-center lg:block">
      <ul
        role="list"
        className="mt-4 flex flex-col items-start gap-4 text-base/7 font-medium text-ink"
      >
        <li className="flex">
          <a
            className="group flex items-center"
            aria-label="Alejandro CR"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/alejandro-carrasco-web-ai-engineer"
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink/90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/linkedin.png" alt="LinkedIn" width={26} height={26} className="object-contain" />
            </span>
            <span className="ml-3">Alejandro CR</span>
          </a>
        </li>
        <li className="flex">
          <a
            className="group flex items-center"
            aria-label="contacto@alejandrocr.co"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:contacto@alejandrocr.co"
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink/90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/email.png" alt="Email" width={26} height={26} className="object-contain" />
            </span>
            <span className="ml-3">contacto@alejandrocr.co</span>
          </a>
        </li>
        <li className="flex">
          <a
            className="group flex items-center"
            aria-label="Download CV"
            target="_blank"
            rel="noopener noreferrer"
            href="/docs/cv__alejandrocr.co__1144198288.pdf"
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink/90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pdf.png" alt="PDF" width={26} height={26} className="object-contain" />
            </span>
            <span className="ml-3">Download CV</span>
          </a>
        </li>
      </ul>
      </div>
    </section>
  )
}
