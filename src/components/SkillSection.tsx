type Props = {
  title: string
  items: string[]
  query?: string
}

export function SkillSection({ title, items, query = '' }: Props) {
  const q = query.trim().toLowerCase()

  return (
    <section
      className="border border-edge p-5"
      style={{ background: 'linear-gradient(148deg, #1B2842, #0D1426)' }}
    >
      <header className="mb-4 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-7 flex-none bg-arcane" />
        <h3 className="font-display text-sm font-semibold tracking-wide text-ink">{title}</h3>
      </header>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item, i) => {
          const isMatch = q ? item.toLowerCase().includes(q) : false
          const isDimmed = Boolean(q) && !isMatch

          return (
            <span
              key={i}
              className={[
                'cursor-help select-none border px-2.5 py-1 font-mono text-[10px] tracking-[.05em] transition-all duration-150',
                isMatch
                  ? 'border-arcane bg-arcane/15 text-ink shadow-[0_0_12px_rgba(167,139,250,0.5)]'
                  : isDimmed
                    ? 'border-edge/30 bg-canvas/20 text-muted/30'
                    : 'border-edge bg-canvas/50 text-muted hover:border-arcane/60 hover:bg-arcane/10 hover:text-ink hover:shadow-[0_0_8px_rgba(167,139,250,0.25)]',
              ].join(' ')}
            >
              {item}
            </span>
          )
        })}
      </div>
    </section>
  )
}
