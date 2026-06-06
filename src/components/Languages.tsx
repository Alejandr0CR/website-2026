import 'flag-icons/css/flag-icons.min.css'
import { SectionTitle } from './SectionTitle'

export function Languages() {
  return (
    <section className="mt-10 lg:mt-12">
      <SectionTitle label="Languages" dot1Color="fill-amber-300" dot2Color="fill-blue-300" />
      <div className="h-px bg-linear-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
      <ul
        role="list"
        className="mt-4 flex flex-col items-center justify-center gap-4 text-base/7 font-medium text-slate-700 lg:items-start lg:gap-4"
      >
        <li className="flex items-center gap-2 cursor-pointer select-none">
          <span
            className="fi fi-co rounded"
            style={{ width: 32, height: 24, display: 'inline-block' }}
            aria-label="Bandera de Colombia"
          />
          <span>Spanish</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer select-none">
          <span
            className="fi fi-us rounded"
            style={{ width: 32, height: 24, display: 'inline-block' }}
            aria-label="Bandera de Estados Unidos"
          />
          <span>English</span>
        </li>
      </ul>
    </section>
  )
}
