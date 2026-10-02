import Link from "next/link"

import { Button } from "@/components/ui/button"
import type { PanelState } from "@/lib/campaign"
import { cn } from "cn"

const options = [
  { value: "empty", label: "Published" },
  { value: "loading", label: "Loading" },
  { value: "error", label: "Error" },
] as const

export function StatePreview({
  param,
  state,
  anchor,
}: {
  param: "stories" | "figures"
  state: PanelState
  anchor: string
}) {
  return (
    <p className="mt-8 text-sm text-legacy">
      <span className="campaign-label mr-3 align-middle text-[0.65rem]">
        Section states
      </span>
      {options.map((option) => {
        const href =
          option.value === "empty"
            ? `/#${anchor}`
            : `/?${param}=${option.value}#${anchor}`
        const current = state === option.value
        return (
          <Link
            key={option.value}
            href={href}
            aria-current={current ? "true" : undefined}
            className={cn(
              "mr-4 underline decoration-sage underline-offset-4 hover:decoration-legacy",
              current && "font-bold"
            )}
          >
            {option.label}
          </Link>
        )
      })}
    </p>
  )
}

export function LoadingRows({ label }: { label: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-3" aria-busy="true" aria-live="polite">
      <p className="sr-only">Loading {label}</p>
      {[0, 1, 2].map((item) => (
        <div key={item} className="rounded-xl border border-sage bg-white p-5">
          <div className="h-3 w-24 animate-pulse rounded bg-mist" />
          <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-mist" />
          <div className="mt-3 h-16 animate-pulse rounded bg-mist" />
        </div>
      ))}
    </div>
  )
}

export function ErrorPanel({
  title,
  body,
  href,
}: {
  title: string
  body: string
  href: string
}) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-sage bg-white px-5 py-8 md:px-8"
    >
      <p className="campaign-label">Unavailable</p>
      <h3 className="campaign-headline mt-3 text-3xl text-legacy">{title}</h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed">{body}</p>
      <Button
        nativeButton={false}
        render={<Link href={href} />}
        className="mt-6 h-10 px-4"
      >
        Try again
      </Button>
    </div>
  )
}
