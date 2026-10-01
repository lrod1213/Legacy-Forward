"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { interests, type InterestId } from "@/lib/campaign"

type Status = "idle" | "loading" | "success" | "error"

function initialInterest(value: string | null): InterestId | "" {
  if (value === "gift" || value === "pledge" || value === "conversation") {
    return value
  }
  return ""
}

export function InterestForm() {
  const searchParams = useSearchParams()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [interest, setInterest] = useState<InterestId | "">(
    initialInterest(searchParams.get("interest"))
  )
  const [note, setNote] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState("")

  function validate() {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = "Please add your name."
    if (!email.trim() || !email.includes("@")) {
      next.email = "Please add an email address."
    }
    if (!interest) next.interest = "Choose the kind of note you want to leave."
    setFieldErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError("")
    if (!validate()) return
    setStatus("loading")
    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest, note }),
      })
      const payload = (await response.json().catch(() => null)) as {
        error?: string
      } | null
      if (!response.ok) {
        setStatus("error")
        setFormError(
          payload?.error ??
            "The note did not go through. Nothing was sent. Please try again."
        )
        return
      }
      setStatus("success")
    } catch {
      setStatus("error")
      setFormError(
        "The note did not go through. Nothing was sent. Please try again."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-sage bg-mist px-5 py-8" role="status">
        <p className="campaign-label">Received here only</p>
        <h2 className="campaign-headline mt-3 text-3xl">
          Thank you. This note was not sent.
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          The care behind it is real. Legacy Forward does not have a connected
          inbox yet, so Marketing and Communications did not receive this note.
          When a destination is approved, this page will use it.
        </p>
        <Button
          type="button"
          className="mt-6 h-10 px-4"
          onClick={() => {
            setStatus("idle")
            setName("")
            setEmail("")
            setNote("")
            setInterest("")
          }}
        >
          Write another note
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(fieldErrors.name)}
          className="h-11 bg-white px-3"
        />
        {fieldErrors.name ? (
          <p className="text-sm text-destructive" role="alert">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(fieldErrors.email)}
          className="h-11 bg-white px-3"
        />
        {fieldErrors.email ? (
          <p className="text-sm text-destructive" role="alert">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">How you hope to take part</legend>
        {interests.map((item) => (
          <label
            key={item.id}
            className="flex cursor-pointer gap-3 rounded-lg border border-sage bg-white px-3 py-3"
          >
            <input
              type="radio"
              name="interest"
              value={item.id}
              checked={interest === item.id}
              onChange={() => setInterest(item.id)}
              className="mt-1 accent-legacy"
            />
            <span>
              <span className="block font-semibold">{item.label}</span>
              <span className="mt-1 block text-sm leading-relaxed">{item.note}</span>
            </span>
          </label>
        ))}
        {fieldErrors.interest ? (
          <p className="text-sm text-destructive" role="alert">
            {fieldErrors.interest}
          </p>
        ) : null}
      </fieldset>
      <div className="space-y-2">
        <Label htmlFor="note">Note, if you wish</Label>
        <Textarea
          id="note"
          name="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className="min-h-28 bg-white px-3 py-2"
        />
      </div>
      {status === "error" ? (
        <p role="alert" className="rounded-lg border border-destructive/40 bg-white px-3 py-3 text-sm">
          {formError}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-11 px-5 text-base"
      >
        {status === "loading" ? "Saving the note…" : "Leave a note"}
      </Button>
      <p className="text-sm leading-relaxed text-legacy/80">
        Builder note: an email ending in @error.test shows the error state.
        The form starts empty. Submitting a complete note shows the success
        state, which still does not deliver mail.
      </p>
    </form>
  )
}
