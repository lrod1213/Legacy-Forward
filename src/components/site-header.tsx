"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav } from "@/lib/campaign"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-sage/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link href="/" className="hidden shrink-0 md:inline-flex">
          <Image
            src="/brand/logo-full-color.png"
            alt="Legacy Forward. A Future of Promise."
            width={1059}
            height={307}
            priority
            className="h-auto w-[300px]"
          />
        </Link>
        <Link href="/" className="flex min-w-0 items-center gap-2.5 md:hidden">
          <Image
            src="/brand/chevron.png"
            alt=""
            width={289}
            height={233}
            className="h-auto w-12 shrink-0"
          />
          <span className="min-w-0">
            <span className="block font-heading text-lg leading-none font-extrabold italic">
              Legacy Forward
            </span>
            <span className="campaign-label mt-1 block text-[0.62rem]">
              A Future of Promise
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Campaign">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-legacy hover:underline hover:underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<Link href="/give" />}
            className="h-10 bg-gold px-4 text-sm font-semibold text-legacy hover:bg-honey"
          >
            Give
          </Button>
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 lg:hidden"
                  aria-label="Open the campaign menu"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] bg-white">
              <SheetHeader>
                <SheetTitle className="font-heading text-2xl font-extrabold italic">
                  Legacy Forward
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Campaign mobile">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={<Link href={item.href} />}
                    className="rounded-md px-2 py-3 text-left text-lg font-semibold text-legacy hover:bg-mist"
                  >
                    {item.label}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/give" />}
                  className="mt-3 rounded-md bg-gold px-3 py-3 text-center text-base font-semibold text-legacy"
                >
                  Give
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
