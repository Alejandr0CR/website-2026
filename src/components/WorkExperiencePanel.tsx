import { WorkExperienceItem } from './WorkExperienceItem'

const WORK_EXPERIENCE = [
  {
    id: 'work-7',
    period: 'Mar 2026 — Present',
    title: 'Data Driven Software Engineer',
    company: 'Allup Teky',
    items: [
      'Owned the full design, implementation, and deployment of a personal finance PWA using Ionic, React, Vercel, and Supabase, helping users track weekly financial milestones and update their monthly financial health score.',
      'Improved users\' financial goal tracking by building data extraction, structuring, and analysis workflows that calculated weekly progress, identified areas for improvement, and generated recommended actions.',
      'Built a financial analysis and recommendation engine by selecting relevant financial data, structuring it into analysis-ready flows, and translating user progress into actionable financial insights.'
    ]
  },
  {
    id: 'work-6',
    period: 'Jan 2025 — Feb 2026',
    title: 'AI Engineer',
    company: 'Allup Teky',
    items: [
      'Reduced the time required to access operational information and generate reports by building LLM-powered assistants with LangChain, LangGraph, FAISS-based RAG, Ollama, AWS Bedrock, and relational databases.',
      'Automated support and analysis workflows for field technicians and back-office administrators by enabling database retrieval, document retrieval, contextualized answers, failure-cause analysis, and custom report generation.',
      'Integrated AI capabilities into the web product, including conversational assistants, document and database retrieval, and AI-powered report generation and analysis.',
      'Trained a computer vision model with YOLOv8 and PyTorch to detect warehouse operational risks, including misplaced items, blocked zones, unsafe conditions, and visual compliance issues.',
      'Scaled AWS infrastructure with AWS Bedrock, ECS, RDS, EC2, CloudWatch, and ALB to deploy and operate AI features, backend services, routing layers, databases, and production monitoring.',
      'Automated repetitive analysis, validation, and information-processing tasks through RPA/IPA workflows that contributed to business intelligence and reduced manual work.'
    ]
  },
  {
    id: 'work-5',
    period: 'Apr 2024 — Dec 2024',
    title: 'Programs Coordinator and Tech Director',
    company: 'HRBC Foundation',
    items: [
      'Centralized program operations by implementing web services, AWS infrastructure, operational documentation, internal workflows, and coordination tools that helped the foundation run programs through defined processes and connected services.',
      'Led multidisciplinary teams across program, product, and technology to define needs, prioritize deliverables, coordinate implementation, and ensure quality assurance across digital services and operational workflows.',
      'Established technical documentation, operating procedures, and delivery standards to improve team communication and support effective product development across program, product, and technology workflows.'
    ]
  },
  {
    id: 'work-4',
    period: 'Feb 2022 — Mar 2024',
    title: 'Engineering Team Leader',
    company: 'Deltec',
    items: [
      'Standardized development, testing, deployment, server documentation, versioning, and requirements processes by creating team-wide scripts and technical documentation standards, reducing operational errors and improving delivery continuity.',
      'Improved field asset tracking and operational control by building a geolocation system with OpenStreetMap and Mapbox that allowed teams to locate assets, review their field status, and support decision-making.',
      'Coordinated production releases for completed milestones by aligning development, testing, versioning, documentation, and deployment workflows.',
      'Improved engineering execution by systematizing delivery practices across development workflows, CI-based testing, technical documentation, and production deployment.'
    ]
  },
  {
    id: 'work-3',
    period: 'Oct 2020 — Jan 2022',
    title: 'Software and Innovation Team Leader',
    company: 'Eventech',
    items: [
      'Improved product usability and maintainability by leading UX-driven development and translating user needs into interfaces, reusable components, and consistent product flows.',
      'Increased development consistency by creating a reusable core codebase and shared component libraries for web product delivery.',
      'Supported platform continuity by managing infrastructure operations and migrations while reducing disruption to active services.',
      'Improved business visibility by building reporting systems that transformed operational data into decision-support information.'
    ]
  },
  {
    id: 'work-2',
    period: 'Oct 2019 — Feb 2020',
    title: 'Software Analyst and Developer',
    company: 'Jikkosoft',
    items: [
      'Improved tax-calculation reliability by developing algorithms aligned with regulatory requirements and validation rules.',
      'Built billing and invoicing systems for public-services operations by implementing calculation logic, validation flows, and transaction-oriented software components.'
    ]
  }
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
