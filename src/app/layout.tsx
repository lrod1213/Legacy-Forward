import type { Metadata } from "next"
import { Open_Sans, Vollkorn } from "next/font/google"

import { ForwardStripe } from "@/components/forward-stripe"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

const vollkorn = Vollkorn({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-vollkorn",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Legacy Forward | A Future of Promise",
    template: "%s | Legacy Forward",
  },
  description:
    "Legacy Forward is the capital campaign for Legacy Christian Academy in Frisco, Texas. Twenty families have committed $6.725 million toward academic space, fine arts, athletics, and campus life.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${vollkorn.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-legacy">
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
      </body>
    </html>
  )
}
