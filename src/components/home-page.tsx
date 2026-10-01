import Image from "next/image"
import Link from "next/link"

import {
  ErrorPanel,
  LoadingRows,
  StatePreview,
} from "@/components/section-states"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  campaign,
  faqs,
  prioritySlots,
  promiseWords,
  waysToGive,
  type PanelState,
} from "@/lib/campaign"

export function HomePage({
  storiesState,
  figuresState,
}: {
  storiesState: PanelState
  figuresState: PanelState
}) {
  return (
    <>
      <section id="campaign" className="bg-legacy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:py-24">
          <div>
            <p className="campaign-label text-white">
              The capital campaign for {campaign.school}
            </p>
            <h1 className="campaign-headline mt-4 text-5xl md:text-7xl">
              A future of promise
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/95">
              Legacy Forward honors what has been built at Legacy Christian
              Academy and commits us to carrying it into the next generation.
              Every gift makes possible a future for our students shaped by
              faith, excellence, and opportunity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/#priorities" />}
                className="h-11 bg-gold px-5 text-base font-semibold text-legacy hover:bg-honey"
              >
                Campaign priorities
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/#ways-to-give" />}
                variant="outline"
                className="h-11 border-white/40 bg-transparent px-5 text-base text-white hover:bg-white/10 hover:text-white"
              >
                Ways to give
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-legacy px-2 py-6 sm:px-6">
            <Image
              src="/brand/logo-reversed.png"
              alt="Legacy Forward. A Future of Promise."
              width={1304}
              height={375}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section id="impact" className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="campaign-label">The promise</p>
          <h2 className="campaign-headline mt-3 max-w-3xl text-4xl md:text-5xl">
            What every gift makes possible
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            A future for our students shaped by faith, excellence, and
            opportunity. These words come from the campaign tagline. They are
            not a published impact report.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {promiseWords.map((word) => (
              <Card key={word.title} className="bg-white ring-sage">
                <CardHeader>
                  <CardTitle className="campaign-headline text-3xl">
                    {word.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-legacy">
                    {word.body}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            {figuresState === "loading" ? (
              <LoadingRows label="campaign figures" />
            ) : figuresState === "error" ? (
              <ErrorPanel
                title="Figures are unavailable"
                body="The goal, timeline, and totals could not be shown. Nothing is missing from a published report — this shell does not have those figures yet."
                href="/#impact"
              />
            ) : (
              <div className="rounded-xl border border-dashed border-legacy/30 bg-white px-5 py-8 md:px-8">
                <p className="campaign-label">Empty</p>
                <h3 className="campaign-headline mt-3 text-3xl">
                  Campaign figures are not published
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed">
                  Goal, timeline, and impact totals will appear here only after
                  they are confirmed in the approved case statement. No dollar
                  goal is shown, because none is in the brand guide.
                </p>
              </div>
            )}
            <StatePreview param="figures" state={figuresState} anchor="impact" />
          </div>
        </div>
      </section>

      <section id="priorities" className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:py-24 xl:grid-cols-[minmax(0,1fr)_11rem]">
          <div>
          <p className="campaign-label">Campaign priorities</p>
          <h2 className="campaign-headline mt-3 max-w-3xl text-4xl md:text-5xl">
            The work a gift will carry forward
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Project names stay consistent with the approved case statement.
            These three places are ready for them. Each card is starter copy.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {prioritySlots.map((slot) => (
              <Card key={slot.index} className="bg-white ring-sage">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-10 min-w-10 items-center justify-center bg-gold px-2 font-heading text-lg font-extrabold text-legacy italic">
                      {slot.index}
                    </span>
                    <Badge className="bg-honey text-legacy">Starter</Badge>
                  </div>
                  <CardTitle className="campaign-headline mt-3 text-2xl">
                    {slot.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">{slot.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
          <div
            className="relative hidden overflow-hidden xl:block"
            aria-hidden="true"
          >
            <Image
              src="/brand/chevron.png"
              alt=""
              width={289}
              height={233}
              className="absolute top-8 -right-10 w-56 max-w-none"
            />
          </div>
        </div>
      </section>

      <section id="ways-to-give" className="bg-legacy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="campaign-label text-white">Ways to give</p>
          <h2 className="campaign-headline mt-3 max-w-3xl text-4xl md:text-5xl">
            There is a place for your yes
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/95">
            The paths below are starters, labeled as such. They show how the
            campaign will invite a gift. They do not take payment or send a
            message.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {waysToGive.map((way) => (
              <Card key={way.title} className="bg-white text-legacy ring-0">
                <CardHeader>
                  <Badge className="bg-honey text-legacy">Starter</Badge>
                  <CardTitle className="campaign-headline mt-3 text-2xl">
                    {way.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-base leading-relaxed">{way.body}</p>
                  <Button
                    nativeButton={false}
                    render={<Link href={way.href} />}
                    className="mt-6 h-10 w-fit px-4"
                  >
                    Continue
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="campaign-label">Stories</p>
          <h2 className="campaign-headline mt-3 max-w-3xl text-4xl md:text-5xl">
            Voices from the school community
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Approved stories will be gathered here. The brand guide does not
            include any, so this shell does not invent them.
          </p>
          <div className="mt-10">
            {storiesState === "loading" ? (
              <LoadingRows label="stories" />
            ) : storiesState === "error" ? (
              <ErrorPanel
                title="Stories could not be loaded"
                body="Please try again in a moment. No story was lost, because none has been published on this shell."
                href="/#stories"
              />
            ) : (
              <div className="rounded-xl border border-dashed border-legacy/30 bg-mist/50 px-5 py-10 md:px-8">
                <p className="campaign-label">Empty</p>
                <h3 className="campaign-headline mt-3 text-3xl">
                  No approved stories yet
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed">
                  When a story is approved, it will name a person, a place in
                  the school, and the hope a gift carries forward. Until then,
                  this space stays open.
                </p>
              </div>
            )}
            <StatePreview param="stories" state={storiesState} anchor="stories" />
          </div>
        </div>
      </section>

      <section id="faq" className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
          <p className="campaign-label">FAQ</p>
          <h2 className="campaign-headline mt-3 text-4xl md:text-5xl">
            Questions worth a clear answer
          </h2>
          <Accordion className="mt-8 border-t border-sage">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-sage">
                <AccordionTrigger className="campaign-headline py-5 text-left text-2xl font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
