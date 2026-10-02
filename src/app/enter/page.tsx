import Image from "next/image"

import { ForwardStripe } from "@/components/forward-stripe"
import { safeNext } from "@/lib/gate"

import { GateForm } from "./gate-form"

export const metadata = {
  title: "Enter",
  description: "Enter the password to open the Legacy Forward campaign site.",
}

export default async function EnterPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string | string[] }>
}) {
  const params = await searchParams
  const requested = Array.isArray(params.next) ? params.next[0] : params.next

  return (
    <div className="flex min-h-full flex-1 flex-col bg-legacy text-white">
      <ForwardStripe />
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-16">
        <Image
          src="/brand/logo-reversed.png"
          alt="Legacy Forward. A Future of Promise."
          width={1304}
          height={375}
          priority
          className="h-auto w-full"
        />
        <div className="mt-10 rounded-xl bg-white p-6 text-legacy md:p-8">
          <p className="campaign-label">Legacy Forward</p>
          <h1 className="campaign-headline mt-3 text-4xl">
            Enter the password
          </h1>
          <p className="mt-3 text-base leading-relaxed">
            This campaign site is private. Enter the password to continue.
          </p>
          <div className="mt-6">
            <GateForm nextPath={safeNext(requested)} />
          </div>
        </div>
      </div>
    </div>
  )
}
