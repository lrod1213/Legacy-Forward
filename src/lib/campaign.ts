export const campaign = {
  name: "Legacy Forward",
  formalName: "Legacy Forward: The Capital Campaign for Legacy Christian Academy",
  tagline: "A Future of Promise",
  school: "Legacy Christian Academy",
  place: "Frisco, Texas",
  contact: "LCA Marketing and Communications",
} as const

export const nav = [
  { href: "/#priorities", label: "Priorities" },
  { href: "/#ways-to-give", label: "Ways to Give" },
  { href: "/#stories", label: "Stories" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const

export const promiseWords = [
  {
    title: "Faith",
    body: "Named in the campaign promise. A fuller account belongs in the approved case statement.",
  },
  {
    title: "Excellence",
    body: "Named in the campaign promise. A fuller account belongs in the approved case statement.",
  },
  {
    title: "Opportunity",
    body: "Named in the campaign promise. A fuller account belongs in the approved case statement.",
  },
] as const

export const prioritySlots = [
  {
    index: "01",
    title: "Priority to be named",
    body: "Replace this starter with a project from the approved case statement: its name, who it serves, and how a gift carries it forward.",
  },
  {
    index: "02",
    title: "Priority to be named",
    body: "Replace this starter with a project from the approved case statement: its name, who it serves, and how a gift carries it forward.",
  },
  {
    index: "03",
    title: "Priority to be named",
    body: "Replace this starter with a project from the approved case statement: its name, who it serves, and how a gift carries it forward.",
  },
] as const

export const waysToGive = [
  {
    title: "Give online",
    body: "Starter. A secure giving page is not connected on this shell.",
    href: "/give?interest=gift",
  },
  {
    title: "Make a pledge",
    body: "Starter. Pledge terms will follow the approved case statement.",
    href: "/give?interest=pledge",
  },
  {
    title: "Start a conversation",
    body: "Starter. Write toward the Marketing and Communications team. This form does not send mail yet.",
    href: "/give?interest=conversation",
  },
] as const

export const interests = [
  {
    id: "gift",
    label: "Make a gift",
    note: "Starter. An online gift page is not connected.",
  },
  {
    id: "pledge",
    label: "Make a pledge",
    note: "Starter. Pledge terms will follow the case statement.",
  },
  {
    id: "conversation",
    label: "Request a conversation",
    note: "Starter. This form does not yet reach the school.",
  },
] as const

export type InterestId = (typeof interests)[number]["id"]

export const faqs = [
  {
    id: "what",
    question: "What is Legacy Forward?",
    answer:
      "Legacy Forward is the capital campaign for Legacy Christian Academy. On first reference it is Legacy Forward: The Capital Campaign for Legacy Christian Academy. It honors what has been built and commits the school to carrying that work into the next generation.",
  },
  {
    id: "promise",
    question: "What does A Future of Promise mean?",
    answer:
      "The tagline names what every gift makes possible: a future for our students shaped by faith, excellence, and opportunity.",
  },
  {
    id: "figures",
    question: "Where are the goal, timeline, and priorities?",
    answer:
      "They are not published on this shell. Campaign facts, figures, and project names will stay consistent with the approved case statement. Until that statement is placed here, those fields stay empty on purpose.",
  },
  {
    id: "give",
    question: "How can I give?",
    answer:
      "Ways to give are starter paths for now: an online gift, a pledge, or a conversation with the school. None of them is connected to a payment or mail system yet. Use the form to see how a note will be asked for, knowing it will not be delivered.",
  },
  {
    id: "contact",
    question: "Who can answer a question about the campaign?",
    answer:
      "The LCA Marketing and Communications team. A street address, phone number, and email are not printed here, because the brand guide leaves them as blanks.",
  },
] as const

export type PanelState = "empty" | "loading" | "error"

export function panelState(value: string | string[] | undefined): PanelState {
  const v = Array.isArray(value) ? value[0] : value
  if (v === "loading" || v === "error") return v
  return "empty"
}
