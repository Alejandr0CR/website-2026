import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white">
      {/* Waveform decoration — mirrors the main page */}
      <svg aria-hidden="true" className="absolute top-0 left-0 h-20 w-full">
        <defs>
          <linearGradient id="fade404" x1="0" x2="0" y1="0" y2="1">
            <stop offset="40%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <linearGradient id="gradient404">
            <stop offset="0%" stopColor="#4989E8" />
            <stop offset="50%" stopColor="#6159DA" />
            <stop offset="100%" stopColor="#FF54AD" />
          </linearGradient>
          <mask id="mask404">
            <rect width="100%" height="100%" fill="url(#pattern404)" />
          </mask>
          <pattern id="pattern404" width="400" height="100%" patternUnits="userSpaceOnUse">
            {[83,99,52,99,86,91,92,75,51,88,45,56,80,44,93,98,41,47,87,67,73,69,88,53,69,75,86,43,80,81,78,56,47,90,50,52,77,81,98,48,87,87,55,41,42,93,84,67,68,55,57,56,55,46,67,69,79,84,63,94,90,51,73,55,57,69,88,84,49,95,73,54,57,72,51,44,52,87,93,46,47,57,79,95,54,65,90,99,82,98,93,60,50,69,77,93,44,51,96,60].map(
              (h, i) => (
                <rect key={i} width={2} height={`${h}%`} x={2 + i * 4} fill="url(#fade404)" />
              )
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient404)" mask="url(#mask404)" opacity="0.25" />
      </svg>

      <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-4 text-center sm:px-6">
        <div className="flex items-center gap-2.5">
          <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5 flex-none">
            <path
              d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
              className="fill-violet-300"
            />
            <path
              d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
              className="fill-pink-300"
            />
          </svg>
          <span className="font-mono text-sm/7 text-slate-500">404</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Page not found
        </h1>

        <p className="mt-3 text-base/7 text-slate-700">
          This page doesn&apos;t exist — but the engineer behind it does.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-lg bg-pink-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-pink-600 active:bg-pink-700"
        >
          Back to Alejandro&apos;s profile
        </Link>

        <p className="mt-6 font-mono text-xs text-slate-400">alejandrocr.co</p>
      </main>
    </div>
  )
}
