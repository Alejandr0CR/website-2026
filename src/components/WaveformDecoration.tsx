const WAVEFORM_HEIGHTS = [
  83, 99, 52, 99, 86, 91, 92, 75, 51, 88, 45, 56, 80, 44, 93, 98, 41, 47, 87,
  67, 73, 69, 88, 53, 69, 75, 86, 43, 80, 81, 78, 56, 47, 90, 50, 52, 77, 81,
  98, 48, 87, 87, 55, 41, 42, 93, 84, 67, 68, 55, 57, 56, 55, 46, 67, 69, 79,
  84, 63, 94, 90, 51, 73, 55, 57, 69, 88, 84, 49, 95, 73, 54, 57, 72, 51, 44,
  52, 87, 93, 46, 47, 57, 79, 95, 54, 65, 90, 99, 82, 98, 93, 60, 50, 69, 77,
  93, 44, 51, 96, 60,
]

export function WaveformDecoration() {
  return (
    <svg aria-hidden="true" className="absolute top-0 left-0 h-20 w-full">
      <defs>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="40%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#4989E8" />
          <stop offset="50%" stopColor="#6159DA" />
          <stop offset="100%" stopColor="#FF54AD" />
        </linearGradient>
        <mask id="mask">
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </mask>
        <pattern id="pattern" width="400" height="100%" patternUnits="userSpaceOnUse">
          {WAVEFORM_HEIGHTS.map((h, i) => (
            <rect key={i} width={2} height={`${h}%`} x={2 + i * 4} fill="url(#fade)" />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)" opacity="0.25" />
    </svg>
  )
}
