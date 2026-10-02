import type { ReactNode } from "react"

import { ForwardStripe } from "@/components/forward-stripe"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function CampaignLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-legacy"
      >
        Skip to content
      </a>
      <ForwardStripe />
      <SiteHeader />
      <div id="content" className="flex-1">
        {children}
      </div>
      <SiteFooter />
    </div>
  )
}
