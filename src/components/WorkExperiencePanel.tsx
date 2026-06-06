import { WorkExperienceItem } from './WorkExperienceItem'

const WORK_EXPERIENCE = [
  {
    id: 'work-1-title',
    period: 'Jan 2025 — Present',
    title: 'AI Engineer',
    company: 'Allup Teky',
    items: [
      'Designed and delivered AI-enabled product features end to end.',
      'Created conversational systems, new models by training, analytical workflows, and RPA/IPA automations.',
      "Developed and maintained the web layer of the company's product.",
      'Supported and scaled the AWS infrastructure for AI to meet evolving product feature requirements.',
      'Translated product requirements into scalable capabilities and measurable outcomes.',
    ],
  },
  {
    id: 'work-2-title',
    period: 'Apr 2024 — Dec 2024',
    title: 'Programs Coordinator and Tech Director',
    company: 'HRBC Foundation',
    items: [
      "Designed and implemented the organization's end-to-end technology ecosystem.",
      'Defined, developed, and deployed core services on AWS.',
      'Led cross-functional teams ensuring alignment of different contexts and workflows.',
      'Established engineering standards, operating procedures, and technical documentation.',
    ],
  },
  {
    id: 'work-3-title',
    period: 'Feb 2022 — Mar 2024',
    title: 'Engineering Team Leader',
    company: 'Deltec',
    items: [
      'Directed automation initiatives and feature development for core products.',
      'Designed and implemented a geolocation and asset-tracking system.',
      'Automated version control workflows and CI-based testing processes.',
      'Coordinated release activities and executed production deployments.',
      'Defined documentation standards and ensured consistent adoption across teams.',
    ],
  },
  {
    id: 'work-4-title',
    period: 'Oct 2020 — Jan 2022',
    title: 'Software and Innovation Team Leader',
    company: 'Eventech',
    items: [
      'Led UX-driven product development with an emphasis on usability and maintainability.',
      'Developed a reusable core codebase and shared component libraries.',
      'Managed infrastructure operations and executed platform migrations with minimal downtime.',
      'Designed and delivered reporting systems to support business decision-making.',
    ],
  },
  {
    id: 'work-5-title',
    period: 'Oct 2019 — Feb 2020',
    title: 'Software Analyst and Developer',
    company: 'Jikkosoft',
    items: [
      'Developed tax-calculation algorithms aligned with regulatory requirements.',
      'Designed and implemented public services billing and invoicing systems with robust validations.',
    ],
  },
]

export function WorkExperiencePanel() {
  return (
    <div role="tabpanel">
      <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
        {WORK_EXPERIENCE.map((job) => (
          <WorkExperienceItem key={job.id} {...job} />
        ))}
      </div>
    </div>
  )
}
