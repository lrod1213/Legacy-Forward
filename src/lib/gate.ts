import { createHmac, timingSafeEqual } from "node:crypto"

const PASSWORD = "LFLCA26!"
const TOKEN_SECRET = "legacy-forward-gate"

export const GATE_COOKIE = "lf_gate"

export const GATE_TOKEN = createHmac("sha256", TOKEN_SECRET)
  .update("unlocked")
  .digest("hex")

export function passwordMatches(input: string) {
  const provided = Buffer.from(input)
  const expected = Buffer.from(PASSWORD)
  if (provided.length !== expected.length) {
    timingSafeEqual(expected, expected)
    return false
  }
  return timingSafeEqual(provided, expected)
}

export function cookieMatches(value: string | undefined) {
  if (!value) return false
  const provided = Buffer.from(value)
  const expected = Buffer.from(GATE_TOKEN)
  if (provided.length !== expected.length) return false
  return timingSafeEqual(provided, expected)
}

export function safeNext(value: string | undefined) {
  if (
    !value ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.startsWith("/\\") ||
    value.startsWith("/enter")
  ) {
    return "/"
  }
  return value
}
