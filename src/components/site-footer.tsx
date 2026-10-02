import Image from "next/image"
import Link from "next/link"

import { ForwardStripe } from "@/components/forward-stripe"
import { campaign, nav } from "@/lib/campaign"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-legacy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:py-16">
        <div>
          <Image
            src="/brand/logo-reversed.png"
            alt="Legacy Forward. A Future of Promise."
            width={1304}
            height={375}
            className="h-auto w-full max-w-[420px]"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/90">
            {campaign.formalName}. A campaign of {campaign.school},{" "}
            {campaign.place}.
          </p>
        </div>
        <div>
          <p className="campaign-label text-white">On this site</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/give" className="text-sm hover:underline">
                Give
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="campaign-label text-white">Questions</p>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            The {campaign.update} update is from {campaign.headOfSchool}, Head
            of School. Questions can also go to the {campaign.contact} team.
            That update does not include a street address, phone number, or
            email.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            {campaign.school} remains the sponsoring institution. School
            communications keep the academy’s own identity. Campaign pieces
            lead with Legacy Forward.
          </p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>Legacy Forward capital campaign. Update, {campaign.update}.</p>
          <p>“Commit your work to the Lord, and your plans will be established.” Proverbs 16:3</p>
        </div>
      </div>
      <ForwardStripe />
    </footer>
  )
}
