import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <p className="campaign-label">Missing page</p>
        <h1 className="campaign-headline mt-3 text-4xl md:text-5xl">
          That page is not part of the campaign
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          The address does not match a page on this Legacy Forward site. Return
          home, or leave a note about a gift.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button nativeButton={false} render={<Link href="/" />} className="h-11 px-5">
            Back to the campaign
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/give" />}
            variant="outline"
            className="h-11 px-5"
          >
            Ways to give
          </Button>
        </div>
      </div>
    </section>
  )
}
