import Image from "next/image"
import Link from "next/link"

import {
  ErrorPanel,
  LoadingRows,
  StatePreview,
} from "@/components/section-states"
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
  campaignUpdate,
  faqs,
  nextSteps,
  prioritySlots,
  progressFigures,
  progressNote,
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
              Legacy Forward is the most significant capital campaign in the
              history of {campaign.school}. It honors what has been built and
              commits us to carrying it into the next generation. Every gift
              makes possible a future for our students shaped by faith,
              excellence, and opportunity.
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
          <p className="campaign-label">The vision</p>
          <h2 className="campaign-headline mt-3 max-w-3xl text-4xl md:text-5xl">
            What every gift makes possible
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            For 27 years, God has faithfully guided {campaign.school}. Today,
            approximately 1,500 students from more than 50 zip codes benefit
            from an education grounded in biblical truth and committed to
            excellence.
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
                body="The September 2026 campaign totals could not be shown. Please try again."
                href="/#impact"
              />
            ) : (
              <div>
                <div className="grid gap-4 md:grid-cols-3">
                  {progressFigures.map((figure) => (
                    <div
                      key={figure.label}
                      className="rounded-xl bg-white px-5 py-8 ring-1 ring-sage"
                    >
                      <p className="campaign-headline text-3xl md:text-4xl">
                        {figure.value}
                      </p>
                      <p className="mt-3 text-base leading-relaxed">
                        {figure.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed">
                  {progressNote}
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
            Legacy Forward will help the campus support the programs, personal
            discipleship, and student experiences that distinguish an LCA
            education. These projects are investments in the students,
            educators, and programs that will shape the future of the school.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {prioritySlots.map((slot) => (
              <Card key={slot.index} className="bg-white ring-sage">
                <CardHeader>
                  <span className="inline-flex h-10 min-w-10 items-center justify-center bg-gold px-2 font-heading text-lg font-extrabold text-legacy italic">
                    {slot.index}
                  </span>
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
            A commitment, a gift, or a conversation each helps move this vision
            forward. Families who have already stepped forward give the school
            confidence to invite others into this moment.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {waysToGive.map((way) => (
              <Card key={way.title} className="bg-white text-legacy ring-0">
                <CardHeader>
                  <CardTitle className="campaign-headline text-2xl">
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
          <p className="campaign-label">Campaign update</p>
          <h2 className="campaign-headline mt-3 max-w-3xl text-4xl md:text-5xl">
            {campaignUpdate.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            A message from {campaignUpdate.author}, {campaignUpdate.role}.
          </p>
          <div className="mt-10">
            {storiesState === "loading" ? (
              <LoadingRows label="the campaign update" />
            ) : storiesState === "error" ? (
              <ErrorPanel
                title="The update could not be loaded"
                body="The September 2026 message from Head of School Kevin Mosley did not load. Please try again."
                href="/#stories"
              />
            ) : (
              <article className="rounded-xl bg-mist/50 px-5 py-8 ring-1 ring-sage md:px-8 md:py-10">
                <p className="campaign-label">{campaignUpdate.kicker}</p>
                <div className="mt-6 space-y-4 text-base leading-relaxed">
                  {campaignUpdate.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <h3 className="campaign-headline mt-10 text-3xl">
                  Our next steps
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed">
                  In the months ahead, our leadership team will remain focused
                  on careful planning, financial responsibility, and thoughtful
                  decision-making.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed">
                  {nextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
                <blockquote className="mt-10 border-l-4 border-gold pl-4">
                  <p className="font-heading text-2xl font-bold italic">
                    “{campaignUpdate.scripture}”
                  </p>
                  <footer className="mt-2 text-sm font-semibold">
                    {campaignUpdate.scriptureRef}
                  </footer>
                </blockquote>
                <p className="mt-8 text-base leading-relaxed">
                  With sincere gratitude,
                  <br />
                  <span className="font-semibold">{campaignUpdate.author}</span>
                  <br />
                  {campaignUpdate.role}
                </p>
              </article>
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
