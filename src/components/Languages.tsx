import 'flag-icons/css/flag-icons.min.css'
import { SectionTitle } from './SectionTitle'

export function Languages() {
  return (
    <section className="mt-10 lg:mt-12">
      <SectionTitle label="Languages" dot1Color="fill-power" dot2Color="fill-science" />
      <div className="h-px bg-linear-to-r from-edge/0 via-edge to-edge/0 lg:hidden" />
      <div className="flex justify-center lg:block">
      <ul
        role="list"
        className="mt-4 flex flex-col items-start gap-4 text-base/7 font-medium text-ink"
      >
        <li className="flex items-center gap-2 cursor-pointer select-none">
          <span
            className="fi fi-co rounded"
            style={{ width: 32, height: 24, display: 'inline-block' }}
            aria-label="Bandera de Colombia"
          />
          <span>Español</span>
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
      </div>
    </section>
  )
}
