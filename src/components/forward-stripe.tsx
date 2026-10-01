const bands = [
  "bg-legacy",
  "bg-evergreen",
  "bg-sage",
  "bg-mist",
  "bg-honey",
  "bg-gold",
] as const

export function ForwardStripe() {
  return (
    <div className="flex h-2 w-full" aria-hidden="true">
      {bands.map((band) => (
        <div key={band} className={`h-full flex-1 ${band}`} />
      ))}
    </div>
  )
}
