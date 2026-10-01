import { interests, type InterestId } from "@/lib/campaign"

function isInterest(value: unknown): value is InterestId {
  return interests.some((item) => item.id === value)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json(
      { error: "The note could not be read. Nothing was sent." },
      { status: 400 }
    )
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { error: "The note could not be read. Nothing was sent." },
      { status: 400 }
    )
  }

  const { name, email, interest } = body as {
    name?: unknown
    email?: unknown
    interest?: unknown
  }

  if (typeof name !== "string" || !name.trim()) {
    return Response.json(
      { error: "Please add your name. Nothing was sent." },
      { status: 400 }
    )
  }

  if (typeof email !== "string" || !email.includes("@")) {
    return Response.json(
      { error: "Please add an email address. Nothing was sent." },
      { status: 400 }
    )
  }

  if (!isInterest(interest)) {
    return Response.json(
      { error: "Choose how you hope to take part. Nothing was sent." },
      { status: 400 }
    )
  }

  if (email.toLowerCase().endsWith("@error.test")) {
    return Response.json(
      {
        error:
          "The note did not go through. Nothing was sent. Please try again.",
      },
      { status: 503 }
    )
  }

  return Response.json({
    ok: true,
    delivered: false,
  })
}
