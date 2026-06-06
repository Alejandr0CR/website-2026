'use client'

import { useState } from 'react'
import { SectionTitle } from './SectionTitle'

export function About() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="mt-8 lg:mt-12">
      <SectionTitle label="About" dot1Color="fill-violet-300" dot2Color="fill-pink-300" />
      <p className={`mt-2 text-lg/7 text-slate-700 ${!showMore ? 'lg:line-clamp-4' : ''}`}>
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
  )
}
