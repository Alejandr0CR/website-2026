type Props = {
  title: string
  items: string[]
}

export function SkillSection({ title, items }: Props) {
  return (
    <section>
      <h3 className="text-center text-xl font-bold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-lg/6 text-slate-700">
            <span className="mr-2 text-pink-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
