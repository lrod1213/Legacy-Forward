import { NextResponse, type NextRequest } from "next/server"

import { cookieMatches, GATE_COOKIE } from "@/lib/gate"

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const unlocked = cookieMatches(request.cookies.get(GATE_COOKIE)?.value)

  if (pathname === "/enter") {
    if (unlocked) {
      return NextResponse.redirect(new URL("/", request.url))
    }
    return NextResponse.next()
  }

  if (unlocked) return NextResponse.next()

  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      { error: "A password is required." },
      { status: 401 }
    )
  }

  const url = request.nextUrl.clone()
  url.pathname = "/enter"
  url.search = ""
  const next = `${pathname}${search}`
  if (next !== "/") url.searchParams.set("next", next)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!_next/|brand/|favicon.ico|icon.png|.*\\.(?:png|jpg|jpeg|svg|ico|webp)$).*)",
  ],
}
