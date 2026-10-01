export default function GiveLoading() {
  return (
    <section className="bg-mist" aria-busy="true">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="sr-only">Loading ways to give</p>
        <div className="h-4 w-32 animate-pulse rounded bg-sage/70" />
        <div className="mt-4 h-12 w-2/3 max-w-md animate-pulse rounded bg-sage/70" />
        <div className="mt-8 h-64 max-w-xl animate-pulse rounded-xl bg-white" />
      </div>
    </section>
  )
}
