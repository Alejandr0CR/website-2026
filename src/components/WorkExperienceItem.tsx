type Props = {
  id: string
  period: string
  title: string
  company: string
  items: string[]
}

export function WorkExperienceItem({ id, period, title, company, items }: Props) {
  return (
    <article aria-labelledby={id} className="py-10 sm:py-12">
      <div className="lg:px-8">
        <div className="w-full">
          <div className="mx-auto px-4 sm:px-6 md:max-w-3xl md:px-4 lg:px-0">
            <div className="flex flex-col items-start">
              <div className="order-first flex items-center gap-2 font-mono text-base/7 text-muted">
                <span>{period}</span>
              </div>
              <h3 id={id} className="mt-2 font-display text-xl font-bold text-ink">
                {title}
              </h3>
              <p className="text-base font-semibold text-arcane">{company}</p>
              <ul className="mt-4 space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start text-lg/6 text-ink">
                    <span className="mr-2 text-arcane">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
