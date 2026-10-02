"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <p className="campaign-label">Something went astray</p>
        <h1 className="campaign-headline mt-3 text-4xl md:text-5xl">
          This page did not load
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          The campaign page hit an error. Your place in the story is unchanged.
          Try the page again.
        </p>
        <Button type="button" className="mt-6 h-11 px-5" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </section>
  )
}
