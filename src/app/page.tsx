import { HomePage } from "@/components/home-page"
import { panelState } from "@/lib/campaign"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  return (
    <HomePage
      storiesState={panelState(params.stories)}
      figuresState={panelState(params.figures)}
    />
  )
}
