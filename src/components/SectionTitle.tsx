type Props = {
  label: string
  dot1Color: string
  dot2Color: string
}

export function SectionTitle({ label, dot1Color, dot2Color }: Props) {
  return (
    <h2 className="flex items-center justify-center font-mono text-sm/7 font-medium text-slate-900 select-none lg:justify-start">
      <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
        <path
          d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
          className={dot1Color}
        />
        <path
          d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
          className={dot2Color}
        />
      </svg>
      <span className="ml-2.5">{label}</span>
    </h2>
  )
}
