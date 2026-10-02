"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { GATE_COOKIE, GATE_TOKEN, passwordMatches, safeNext } from "@/lib/gate"

export type GateState = { error: string } | null

export async function unlock(
  _state: GateState,
  formData: FormData
): Promise<GateState> {
  const password = String(formData.get("password") ?? "")
  if (!password.trim()) {
    return { error: "Please enter the password." }
  }
  if (!passwordMatches(password)) {
    return { error: "That password is not correct." }
  }

  const jar = await cookies()
  jar.set(GATE_COOKIE, GATE_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })

  const next = safeNext(String(formData.get("next") ?? ""))
  redirect(next)
}
