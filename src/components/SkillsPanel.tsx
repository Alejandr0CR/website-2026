import { SkillSection } from './SkillSection'

const SKILLS = [
  {
    title: 'Web Development',
    items: [
      'FastAPI',
      'NestJS',
      'Express',
      'React',
      'React Native',
      'Next.js',
      'REST',
      'GraphQL',
      'Webhooks',
      'WebSockets',
      'PWA',
      'Payment Gateways',
      'OAuth',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Aurora',
    ],
  },
  {
    title: 'Cloud, DevOps & Infrastructure',
    items: [
      'Amazon Web Services',
      'AWS Containers',
      'AWS Lambdas',
      'AWS Instances',
      'AWS Events',
      'Linux',
      'Nginx',
      'systemd',
      'journald',
      'Docker',
      'GitLab',
      'Jenkins',
      'DNS',
      'CloudWatch',
    ],
  },
  {
    title: 'Artificial Intelligence & Automation',
    items: [
      'MindStudio',
      'Model Training',
      'LangChain',
      'LangGraph',
      'RAG',
      'FAISS',
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
      'Test-driven Development',
      'Spec-driven Development',
      'OpenAPI standard',
    ],
  },
  {
    title: 'Leadership & Management',
    items: [
      'Tech leadership',
      'Mentoring',
      'Agile planning & delivery',
      'OKRs',
      'KPIs',
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
