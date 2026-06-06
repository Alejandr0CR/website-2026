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
              <div className="order-first flex items-center gap-2 font-mono text-base/7 text-slate-500">
                <span>{period}</span>
              </div>
              <h3 id={id} className="mt-2 text-xl font-bold text-slate-900">
                {title}
              </h3>
              <p className="text-base font-semibold text-pink-500">{company}</p>
              <ul className="mt-4 space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start text-lg/6 text-slate-700">
                    <span className="mr-2 text-pink-500">•</span>
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
