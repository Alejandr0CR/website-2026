'use client'

import { useState } from 'react'
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
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const totalMatches = q
    ? SKILLS.reduce(
        (acc, s) => acc + s.items.filter((i) => i.toLowerCase().includes(q)).length,
        0,
      )
    : 0

  return (
    <div role="tabpanel">
      <div className="sm:mt-4 lg:mt-8 lg:border-t lg:border-edge">
        <div className="lg:px-8">
          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0 pt-10 pb-12 sm:pt-12">

            {/* Search — adapted from example.html .search-shell */}
            <label className="mb-6 flex h-14 w-full cursor-text items-center gap-4 border border-edge bg-canvas/80 px-5 text-science transition-colors duration-150 focus-within:border-science">
              <svg
                className="h-5 w-5 flex-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.65"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <circle cx="8.5" cy="8.5" r="5.5" />
                <line x1="13" y1="13" x2="17" y2="17" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills…"
                className="min-w-0 flex-1 border-0 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-muted/60"
              />
              <span className="font-mono text-[10px] text-edge-mid" aria-live="polite">
                {q ? `${totalMatches} match${totalMatches !== 1 ? 'es' : ''}` : 'SEARCH'}
              </span>
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <SkillSection {...SKILLS[0]} query={query} />
              <SkillSection {...SKILLS[1]} query={query} />
              <SkillSection {...SKILLS[2]} query={query} />
              <SkillSection {...SKILLS[3]} query={query} />
              <div className="sm:col-span-2">
                <SkillSection {...SKILLS[4]} query={query} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
