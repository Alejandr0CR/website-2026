'use client'

import { useState } from 'react'
import { SectionTitle } from './SectionTitle'

export function About() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="mt-4">
      <SectionTitle label="About" dot1Color="fill-arcane" dot2Color="fill-flow" />
      <p className={`mt-2 text-lg/7 text-ink ${!showMore ? 'lg:line-clamp-4' : ''}`}>
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
        className="mt-2 hidden cursor-pointer text-sm/6 font-bold text-arcane hover:text-flow active:text-arcane lg:inline-block"
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </section>
  )
}
