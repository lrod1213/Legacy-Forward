import { Suspense } from "react"

import { InterestForm } from "@/components/interest-form"
import { campaign } from "@/lib/campaign"

export const metadata = {
  title: "Ways to give",
  description:
    "Tell Legacy Forward whether you hope to make a gift, make a commitment, or start a conversation. This form does not take a payment.",
}

export default function GivePage() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:py-24">
        <div>
          <p className="campaign-label">Ways to give</p>
          <h1 className="campaign-headline mt-3 text-4xl md:text-6xl">
            There is a place for your yes
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            {campaign.formalName}. Families across the community are considering
            their own role in this moment. Tell us whether you hope to make a
            gift, make a commitment, or start a conversation.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            This form records that intention in this session. It does not
            process a payment or deliver a message to {campaign.school} yet.
          </p>
        </div>
        <div className="rounded-xl bg-white p-5 ring-1 ring-sage md:p-8">
          <Suspense
            fallback={
              <div aria-busy="true" className="space-y-4">
                <p className="sr-only">Loading the note form</p>
                <div className="h-11 animate-pulse rounded-lg bg-mist" />
                <div className="h-11 animate-pulse rounded-lg bg-mist" />
                <div className="h-28 animate-pulse rounded-lg bg-mist" />
              </div>
            }
          >
            <InterestForm />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
