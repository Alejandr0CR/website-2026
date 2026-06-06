import { SkillSection } from './SkillSection'

const SKILLS = [
  {
    title: 'Web & Backend Development',
    items: [
      'Python (Django, FastAPI)',
      'TS/JS (NestJS, Express, React, Next.js)',
      'APIs: REST, GraphQL, Webhooks, WebSockets',
      'Progressive Web Apps (PWA)',
      'DB + cache: Postgres, MySQL, MongoDB, Redis, Aurora',
      'Email: AWS SES',
    ],
  },
  {
    title: 'Cloud, DevOps & Infrastructure',
    items: [
      'AWS: networks, instances, lambdas, containers, clusters',
      'Linux web servers: Nginx, systemd, journald',
      'Containers: Docker, ECS, ECR',
      'CI/CD: Git, GitLab, Jenkins',
      'DNS setup',
      'Observability: CloudWatch',
    ],
  },
  {
    title: 'Artificial Intelligence & Automation',
    items: [
      'Applied AI: prototype to production',
      'LLM orchestration: LangChain, LangGraph',
      'RAG: FAISS + MongoDB',
      'Hosted LLMs/GPU: Ollama',
      'Computer vision: YOLOv8',
      'Automation: n8n',
      'PyTorch',
      'Data analysis & visualization',
    ],
  },
  {
    title: 'Architecture & Engineering Practices',
    items: [
      'Scalable architecture',
      'Design patterns & clean code',
      'Microservices & distributed systems',
      'Performance & complexity',
      'TDD',
      'Auth/Identity: OAuth',
      'API contracts/docs: OpenAPI',
    ],
  },
  {
    title: 'Leadership & Management',
    items: [
      'Tech leadership & mentoring',
      'Agile planning & delivery',
      'OKRs/KPIs',
      'Process & workflow design',
      'Requirements: SRS',
      'Modeling/docs: UML',
      'Architecture styles: layered, hexagonal',
      'Data-driven decisions',
    ],
  },
]

export function SkillsPanel() {
  return (
    <div role="tabpanel">
      <div className="sm:mt-4 lg:mt-8">
        <div className="lg:px-8">
          <div className="w-full">
            <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
              <div className="grid gap-8 sm:grid-cols-2 py-10 sm:py-12">
                {SKILLS.map((skill) => (
                  <SkillSection key={skill.title} title={skill.title} items={skill.items} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
