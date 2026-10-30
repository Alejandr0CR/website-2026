'use client'

import { useEffect, useState } from 'react'
import { SkillsPanel } from './SkillsPanel'
import { WorkExperiencePanel } from './WorkExperiencePanel'

type Tab = 'work' | 'skills'

const GRADIENT_ARCANE = 'linear-gradient(90deg,#A78BFA 0%,#D78AF4 48%,#58C8F6 100%)'

function hashToTab(hash: string): Tab {
  if (hash === '#skills') return 'skills'
  return 'work'
}

export function TabsSection() {
  const [activeTab, setActiveTab] = useState<Tab>('work')

  useEffect(() => {
    setActiveTab(hashToTab(window.location.hash))

    const onHashChange = () => setActiveTab(hashToTab(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function handleTabClick(tab: Tab) {
    window.location.hash = tab === 'skills' ? 'skills' : 'experience'
  }

  return (
    <div>
      {/* Tab navigation */}
      <div className="lg:px-8">
        <div className="w-full">
          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
            <div
              role="tablist"
              aria-label="Work Experience and Skills tabs"
              className="flex h-[58px] border-b border-edge bg-canvas/35"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'work'}
                onClick={() => handleTabClick('work')}
                className={`relative flex w-1/2 cursor-pointer select-none items-center justify-center px-3 text-sm font-semibold uppercase tracking-[.045em] transition-colors ${
                  activeTab === 'work' ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
                style={
                  activeTab === 'work'
                    ? { background: 'linear-gradient(180deg,rgba(167,139,250,.035),rgba(167,139,250,.10))' }
                    : undefined
                }
              >
                Work Experience
                {activeTab === 'work' && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[-1px] left-[17%] right-[17%] h-[2px]"
                    style={{ background: GRADIENT_ARCANE, boxShadow: '0 -3px 13px rgba(167,139,250,.28)' }}
                  />
                )}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'skills'}
                onClick={() => handleTabClick('skills')}
                className={`relative flex w-1/2 cursor-pointer select-none items-center justify-center border-l border-edge/50 px-3 text-sm font-semibold uppercase tracking-[.045em] transition-colors ${
                  activeTab === 'skills' ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
                style={
                  activeTab === 'skills'
                    ? { background: 'linear-gradient(180deg,rgba(167,139,250,.035),rgba(167,139,250,.10))' }
                    : undefined
                }
              >
                Skills
                {activeTab === 'skills' && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[-1px] left-[17%] right-[17%] h-[2px]"
                    style={{ background: GRADIENT_ARCANE, boxShadow: '0 -3px 13px rgba(167,139,250,.28)' }}
                  />
                )}
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
