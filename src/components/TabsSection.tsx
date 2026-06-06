'use client'

import { useState } from 'react'
import { SkillsPanel } from './SkillsPanel'
import { WorkExperiencePanel } from './WorkExperiencePanel'

type Tab = 'work' | 'skills'

export function TabsSection() {
  const [activeTab, setActiveTab] = useState<Tab>('work')

  return (
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

      {activeTab === 'work' && <WorkExperiencePanel />}
      {activeTab === 'skills' && <SkillsPanel />}
    </div>
  )
}
