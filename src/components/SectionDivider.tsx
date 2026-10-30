export function SectionDivider() {
  return (
    <div className="flex items-center gap-3 px-16 sm:px-20 lg:px-24 my-8">
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #7C8BA4)' }} />
      <div className="h-[6px] w-[6px] flex-none rotate-45 border border-arcane/60" />
      <div
        className="h-[8px] w-[8px] flex-none rotate-45 border border-arcane"
        style={{ boxShadow: '0 0 10px rgba(167,139,250,0.55)' }}
      />
      <div className="h-[6px] w-[6px] flex-none rotate-45 border border-arcane/60" />
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #7C8BA4)' }} />
    </div>
  )
}
