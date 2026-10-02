"use client"

import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { unlock, type GateState } from "./actions"

export function GateForm({ nextPath }: { nextPath: string }) {
  const [state, action, pending] = useActionState<GateState, FormData>(
    unlock,
    null
  )

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="next" value={nextPath} />
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          aria-invalid={Boolean(state?.error)}
          className="h-11 bg-white px-3 text-base"
        />
        {state?.error ? (
          <p className="text-sm text-destructive" role="alert">
            {state.error}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={pending}
        className="h-11 w-full bg-gold px-5 text-base font-semibold text-legacy hover:bg-honey"
      >
        {pending ? "Checking…" : "Continue"}
      </Button>
    </form>
  )
}
