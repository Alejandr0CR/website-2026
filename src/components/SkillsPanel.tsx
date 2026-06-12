import { SkillSection } from './SkillSection'

const SKILLS = [
  {
    title: 'Web & Backend Development',
    items: [
      'Django',
      'FastAPI',
      'NestJS',
      'Express',
      'React',
      'Next.js',
      'REST',
      'GraphQL',
      'Webhooks',
      'WebSockets',
      'Progressive Web Apps: PWA',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Aurora',
      'AWS SES',
    ],
  },
  {
    title: 'Cloud, DevOps & Infrastructure',
    items: [
      'AWS: networks, instances, Lambdas, containers, clusters',
      'Linux web servers: Nginx, systemd, journald',
      'Docker',
      'ECS',
      'ECR',
      'Git',
      'GitLab',
      'Jenkins',
      'DNS setup',
      'CloudWatch',
    ],
  },
  {
    title: 'Artificial Intelligence & Automation',
    items: [
      'Applied AI: prototype to production',
      'LangChain',
      'LangGraph',
      'RAG',
      'FAISS',
      'MongoDB',
      'Ollama',
      'YOLOv8',
      'n8n',
      'PyTorch',
      'Data analysis & visualization',
    ],
  },
  {
    title: 'Architecture & Engineering Practices',
    items: [
      'Scalable architecture',
      'Design patterns',
      'Clean code',
      'Microservices',
      'Distributed systems',
      'Performance & complexity',
      'TDD',
      'OAuth',
      'OpenAPI',
    ],
  },
  {
    title: 'Leadership & Management',
    items: [
      'Tech leadership & mentoring',
      'Agile planning & delivery',
      'OKRs / KPIs',
      'Process & workflow design',
      'SRS',
      'UML',
      'Layered architecture',
      'Hexagonal architecture',
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
