import { SectionTitle } from './SectionTitle'

export function Contact() {
  return (
    <section className="mt-10 lg:mt-12">
      <SectionTitle label="Contact" dot1Color="fill-indigo-300" dot2Color="fill-blue-300" />
      <div className="h-px bg-linear-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
      <ul
        role="list"
        className="mt-4 flex flex-col items-center justify-center gap-4 text-base/7 font-medium text-slate-700 lg:items-start lg:gap-4"
      >
        <li className="flex">
          <a
            className="group flex items-center"
            aria-label="Alejandro CR"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/alejandro-carrasco-web-ai-engineer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} className="object-contain" />
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/email.png" alt="Email" width={32} height={32} className="object-contain" />
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pdf.png" alt="PDF" width={32} height={32} className="object-contain" />
            <span className="ml-3">Download CV</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
