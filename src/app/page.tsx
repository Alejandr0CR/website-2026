'use client'

import 'flag-icons/css/flag-icons.min.css'
import { useState } from 'react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'work' | 'skills'>('work')
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* ── Sidebar ── */}
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

          {/* About */}
          <section className="mt-8 lg:mt-12">
            <h2 className="flex items-center justify-center font-mono text-sm/7 font-medium text-slate-900 select-none lg:justify-start">
              <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
                <path
                  d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                  className="fill-violet-300"
                />
                <path
                  d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                  className="fill-pink-300"
                />
              </svg>
              <span className="ml-2.5">About</span>
            </h2>
            <p
              className={`mt-2 text-lg/7 text-slate-700 ${!showMore ? 'lg:line-clamp-4' : ''}`}
            >
              <b>
                Engineer with experience in software + AI-based solutions
                development and technology team leadership.
              </b>{' '}
              Specialized in AWS, web development, RPA/IPA automation, and
              AI-powered systems. I have led interdisciplinary teams across
              multiple organizations, from startups to established companies. My
              approach combines technical skills with strategic planning to align
              technological capabilities with business objectives and product
              requirements.
            </p>
            <button
              type="button"
              onClick={() => setShowMore((v) => !v)}
              className="mt-2 hidden cursor-pointer text-sm/6 font-bold text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </section>

          {/* Languages */}
          <section className="mt-10 lg:mt-12">
            <h2 className="flex items-center justify-center font-mono text-sm/7 font-medium text-slate-900 select-none lg:justify-start">
              <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
                <path
                  d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                  className="fill-amber-300"
                />
                <path
                  d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                  className="fill-blue-300"
                />
              </svg>
              <span className="ml-2.5">Languages</span>
            </h2>
            <div className="h-px bg-linear-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul
              role="list"
              className="mt-4 flex flex-col items-center justify-center gap-4 text-base/7 font-medium text-slate-700 lg:items-start lg:gap-4"
            >
              <li className="flex items-center gap-2 cursor-pointer select-none">
                <span className="fi fi-co rounded" style={{ width: 32, height: 24, display: 'inline-block' }} aria-label="Bandera de Colombia" />
                <span>Spanish</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer select-none">
                <span className="fi fi-us rounded" style={{ width: 32, height: 24, display: 'inline-block' }} aria-label="Bandera de Estados Unidos" />
                <span>English</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mt-10 lg:mt-12">
            <h2 className="flex items-center justify-center font-mono text-sm/7 font-medium text-slate-900 select-none lg:justify-start">
              <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
                <path
                  d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                  className="fill-indigo-300"
                />
                <path
                  d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                  className="fill-blue-300"
                />
              </svg>
              <span className="ml-2.5">Contact</span>
            </h2>
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
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="w-full flex-1 border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        {/* Waveform decoration */}
        <svg aria-hidden="true" className="absolute top-0 left-0 h-20 w-full">
          <defs>
            <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="40%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </linearGradient>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#4989E8" />
              <stop offset="50%" stopColor="#6159DA" />
              <stop offset="100%" stopColor="#FF54AD" />
            </linearGradient>
            <mask id="mask">
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </mask>
            <pattern id="pattern" width="400" height="100%" patternUnits="userSpaceOnUse">
              {[83,99,52,99,86,91,92,75,51,88,45,56,80,44,93,98,41,47,87,67,73,69,88,53,69,75,86,43,80,81,78,56,47,90,50,52,77,81,98,48,87,87,55,41,42,93,84,67,68,55,57,56,55,46,67,69,79,84,63,94,90,51,73,55,57,69,88,84,49,95,73,54,57,72,51,44,52,87,93,46,47,57,79,95,54,65,90,99,82,98,93,60,50,69,77,93,44,51,96,60].map(
                (h, i) => (
                  <rect key={i} width={2} height={`${h}%`} x={2 + i * 4} fill="url(#fade)" />
                )
              )}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)" opacity="0.25" />
        </svg>

        <div className="relative w-full">
          <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
            <div>
              {/* Tab navigation */}
              <div className="lg:px-8">
                <div className="w-full">
                  <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
                    <div role="tablist" aria-label="Work Experience and Skills tabs" className="flex flex-row">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'work'}
                        onClick={() => setActiveTab('work')}
                        className={`w-1/2 cursor-pointer select-none pb-3 text-center text-2xl/7 font-bold transition-colors border-b-8 ${
                          activeTab === 'work'
                            ? 'border-fuchsia-800 text-slate-900'
                            : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        Work Experience
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'skills'}
                        onClick={() => setActiveTab('skills')}
                        className={`w-1/2 cursor-pointer select-none pb-3 text-center text-2xl/7 font-bold transition-colors border-b-8 ${
                          activeTab === 'skills'
                            ? 'border-fuchsia-800 text-slate-900'
                            : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        Skills
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience panel */}
              {activeTab === 'work' && (
                <div role="tabpanel">
                  <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">

                    {/* 1 */}
                    <article aria-labelledby="work-1-title" className="py-10 sm:py-12">
                      <div className="lg:px-8">
                        <div className="w-full">
                          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
                            <div className="flex flex-col items-start">
                              <div className="order-first flex items-center gap-2 font-mono text-base/7 text-slate-500">
                                <span>Jan 2025 — Present</span>
                              </div>
                              <h3 id="work-1-title" className="mt-2 text-xl font-bold text-slate-900">
                                AI Engineer
                              </h3>
                              <p className="text-base font-semibold text-pink-500">Allup Teky</p>
                              <ul className="mt-4 space-y-2">
                                {[
                                  'Designed and delivered AI-enabled product features end to end.',
                                  'Created conversational systems, new models by training, analytical workflows, and RPA/IPA automations.',
                                  "Developed and maintained the web layer of the company's product.",
                                  'Supported and scaled the AWS infrastructure for AI to meet evolving product feature requirements.',
                                  'Translated product requirements into scalable capabilities and measurable outcomes.',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* 2 */}
                    <article aria-labelledby="work-2-title" className="py-10 sm:py-12">
                      <div className="lg:px-8">
                        <div className="w-full">
                          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
                            <div className="flex flex-col items-start">
                              <div className="order-first flex items-center gap-2 font-mono text-base/7 text-slate-500">
                                <span>Apr 2024 — Dec 2024</span>
                              </div>
                              <h3 id="work-2-title" className="mt-2 text-xl font-bold text-slate-900">
                                Programs Coordinator and Tech Director
                              </h3>
                              <p className="text-base font-semibold text-pink-500">HRBC Foundation</p>
                              <ul className="mt-4 space-y-2">
                                {[
                                  "Designed and implemented the organization's end-to-end technology ecosystem.",
                                  'Defined, developed, and deployed core services on AWS.',
                                  'Led cross-functional teams ensuring alignment of different contexts and workflows.',
                                  'Established engineering standards, operating procedures, and technical documentation.',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* 3 */}
                    <article aria-labelledby="work-3-title" className="py-10 sm:py-12">
                      <div className="lg:px-8">
                        <div className="w-full">
                          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
                            <div className="flex flex-col items-start">
                              <div className="order-first flex items-center gap-2 font-mono text-base/7 text-slate-500">
                                <span>Feb 2022 — Mar 2024</span>
                              </div>
                              <h3 id="work-3-title" className="mt-2 text-xl font-bold text-slate-900">
                                Engineering Team Leader
                              </h3>
                              <p className="text-base font-semibold text-pink-500">Deltec</p>
                              <ul className="mt-4 space-y-2">
                                {[
                                  'Directed automation initiatives and feature development for core products.',
                                  'Designed and implemented a geolocation and asset-tracking system.',
                                  'Automated version control workflows and CI-based testing processes.',
                                  'Coordinated release activities and executed production deployments.',
                                  'Defined documentation standards and ensured consistent adoption across teams.',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* 4 */}
                    <article aria-labelledby="work-4-title" className="py-10 sm:py-12">
                      <div className="lg:px-8">
                        <div className="w-full">
                          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
                            <div className="flex flex-col items-start">
                              <div className="order-first flex items-center gap-2 font-mono text-base/7 text-slate-500">
                                <span>Oct 2020 — Jan 2022</span>
                              </div>
                              <h3 id="work-4-title" className="mt-2 text-xl font-bold text-slate-900">
                                Software and Innovation Team Leader
                              </h3>
                              <p className="text-base font-semibold text-pink-500">Eventech</p>
                              <ul className="mt-4 space-y-2">
                                {[
                                  'Led UX-driven product development with an emphasis on usability and maintainability.',
                                  'Developed a reusable core codebase and shared component libraries.',
                                  'Managed infrastructure operations and executed platform migrations with minimal downtime.',
                                  'Designed and delivered reporting systems to support business decision-making.',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* 5 */}
                    <article aria-labelledby="work-5-title" className="py-10 sm:py-12">
                      <div className="lg:px-8">
                        <div className="w-full">
                          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
                            <div className="flex flex-col items-start">
                              <div className="order-first flex items-center gap-2 font-mono text-base/7 text-slate-500">
                                <span>Oct 2019 — Feb 2020</span>
                              </div>
                              <h3 id="work-5-title" className="mt-2 text-xl font-bold text-slate-900">
                                Software Analyst and Developer
                              </h3>
                              <p className="text-base font-semibold text-pink-500">Jikkosoft</p>
                              <ul className="mt-4 space-y-2">
                                {[
                                  'Developed tax-calculation algorithms aligned with regulatory requirements.',
                                  'Designed and implemented public services billing and invoicing systems with robust validations.',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                  </div>
                </div>
              )}

              {/* Skills panel */}
              {activeTab === 'skills' && (
                <div role="tabpanel">
                  <div className="sm:mt-4 lg:mt-8">
                    <div className="lg:px-8">
                      <div className="w-full">
                        <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
                          <div className="grid gap-8 sm:grid-cols-2 py-10 sm:py-12">

                            <section>
                              <h3 className="text-center text-xl font-bold text-slate-900">
                                Web &amp; Backend Development
                              </h3>
                              <ul className="mt-3 space-y-2">
                                {[
                                  'Python (Django, FastAPI)',
                                  'TS/JS (NestJS, Express, React, Next.js)',
                                  'APIs: REST, GraphQL, Webhooks, WebSockets',
                                  'Progressive Web Apps (PWA)',
                                  'DB + cache: Postgres, MySQL, MongoDB, Redis, Aurora',
                                  'Email: AWS SES',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </section>

                            <section>
                              <h3 className="text-center text-xl font-bold text-slate-900">
                                Cloud, DevOps &amp; Infrastructure
                              </h3>
                              <ul className="mt-3 space-y-2">
                                {[
                                  'AWS: networks, instances, lambdas, containers, clusters',
                                  'Linux web servers: Nginx, systemd, journald',
                                  'Containers: Docker, ECS, ECR',
                                  'CI/CD: Git, GitLab, Jenkins',
                                  'DNS setup',
                                  'Observability: CloudWatch',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </section>

                            <section>
                              <h3 className="text-center text-xl font-bold text-slate-900">
                                Artificial Intelligence &amp; Automation
                              </h3>
                              <ul className="mt-3 space-y-2">
                                {[
                                  'Applied AI: prototype to production',
                                  'LLM orchestration: LangChain, LangGraph',
                                  'RAG: FAISS + MongoDB',
                                  'Hosted LLMs/GPU: Ollama',
                                  'Computer vision: YOLOv8',
                                  'Automation: n8n',
                                  'PyTorch',
                                  'Data analysis & visualization',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </section>

                            <section>
                              <h3 className="text-center text-xl font-bold text-slate-900">
                                Architecture &amp; Engineering Practices
                              </h3>
                              <ul className="mt-3 space-y-2">
                                {[
                                  'Scalable architecture',
                                  'Design patterns & clean code',
                                  'Microservices & distributed systems',
                                  'Performance & complexity',
                                  'TDD',
                                  'Auth/Identity: OAuth',
                                  'API contracts/docs: OpenAPI',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </section>

                            <section>
                              <h3 className="text-center text-xl font-bold text-slate-900">
                                Leadership &amp; Management
                              </h3>
                              <ul className="mt-3 space-y-2">
                                {[
                                  'Tech leadership & mentoring',
                                  'Agile planning & delivery',
                                  'OKRs/KPIs',
                                  'Process & workflow design',
                                  'Requirements: SRS',
                                  'Modeling/docs: UML',
                                  'Architecture styles: layered, hexagonal',
                                  'Data-driven decisions',
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                                    <span className="mr-2 text-pink-500">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </section>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
