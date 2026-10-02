export const campaign = {
  name: "Legacy Forward",
  formalName: "Legacy Forward: The Capital Campaign for Legacy Christian Academy",
  tagline: "A Future of Promise",
  school: "Legacy Christian Academy",
  place: "Frisco, Texas",
  contact: "LCA Marketing and Communications",
  headOfSchool: "Kevin Mosley",
  update: "September 2026",
} as const

export const nav = [
  { href: "/#priorities", label: "Priorities" },
  { href: "/#ways-to-give", label: "Ways to Give" },
  { href: "/#stories", label: "Update" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const

export const promiseWords = [
  {
    title: "Faith",
    body: "For 27 years, God has faithfully guided Legacy Christian Academy. An LCA education is grounded in biblical truth, so students can walk boldly in faith.",
  },
  {
    title: "Excellence",
    body: "The school is committed to excellence in the classroom, the arts, and athletics. These projects help LCA fulfill that mission for generations to come.",
  },
  {
    title: "Opportunity",
    body: "About 1,500 students from more than 50 zip codes need room to discover and develop their God-given abilities.",
  },
] as const

export const progressFigures = [
  {
    value: "20",
    label: "Families have made a commitment",
  },
  {
    value: "$6.725 million",
    label: "Committed to Legacy Forward",
  },
  {
    value: "$2.63 million",
    label: "Already received, and more",
  },
] as const

export const progressNote =
  "Shared in the September 2026 campaign update from Kevin Mosley, Head of School. That update does not publish a total campaign goal or a construction date."

export const prioritySlots = [
  {
    index: "01",
    title: "Expanded academic and programmatic space",
    body: "New and reimagined spaces will provide greater capacity for STEAM instruction, specialized learning, and other high-impact academic programs. Teachers will have the environments they need to teach effectively, and students can more fully discover and develop their God-given abilities.",
  },
  {
    index: "02",
    title: "A new band hall and fine arts improvements",
    body: "Purpose-built space will strengthen the daily experience of our student musicians and create additional flexibility throughout the campus. This investment cultivates creativity, discipline, confidence, and excellence through the arts.",
  },
  {
    index: "03",
    title: "An athletics training and support facility",
    body: "The proposed facility of about 27,000 square feet will provide dedicated space for training, nutrition, hydration, recovery, and student-athlete development. Nearly 80 percent of Middle and Upper School students participate in athletics, so this facility will have a broad and lasting effect on student health, safety, and performance.",
  },
  {
    index: "04",
    title: "Improved campus capacity and experience",
    body: "Expanded dining and gathering areas, along with the thoughtful reallocation of existing spaces, will relieve current pressure points and let our programs operate with greater effectiveness.",
  },
] as const

export const waysToGive = [
  {
    title: "Make a commitment",
    body: "A commitment strengthens the foundation of this campaign and moves these projects closer to life. Twenty families have already stepped forward.",
    href: "/give?interest=pledge",
  },
  {
    title: "Give toward the vision",
    body: "More than $2.63 million has already been received. A gift continues the momentum this community has begun.",
    href: "/give?interest=gift",
  },
  {
    title: "Start a conversation",
    body: "Leadership is meeting with families across the community. Ask for a conversation about your role in this moment.",
    href: "/give?interest=conversation",
  },
] as const

export const interests = [
  {
    id: "gift",
    label: "Make a gift",
    note: "Tell us you want to give. This form does not process a payment.",
  },
  {
    id: "pledge",
    label: "Make a commitment",
    note: "Share your intention to commit. A commitment moves these projects closer to life.",
  },
  {
    id: "conversation",
    label: "Request a conversation",
    note: "Ask the campaign team to talk with your family about Legacy Forward.",
  },
] as const

export type InterestId = (typeof interests)[number]["id"]

export const campaignUpdate = {
  kicker: "A campaign update · September 2026",
  title: "Your generosity is moving the vision forward",
  author: "Kevin Mosley",
  role: "Head of School, Legacy Christian Academy",
  paragraphs: [
    "Because of your generosity, the vision for the future of Legacy Christian Academy is becoming a reality. Families who prayerfully stepped forward were among the first to commit to Legacy Forward, the most significant capital campaign in our school’s history. That leadership has created meaningful momentum and shown a profound belief in the mission and future of LCA.",
    "On behalf of our Board of Trustees, leadership team, faculty, staff, and students, thank you.",
    "Twenty families have now made commitments totaling $6.725 million, with more than $2.63 million already received. Recent campaign activity includes new commitments of $750,000 and $500,000, along with a generous increase that brought one family’s total commitment to $1 million. Each commitment strengthens the foundation of this campaign and moves us closer to bringing these projects to life.",
    "For 27 years, God has faithfully guided Legacy Christian Academy. Today, approximately 1,500 students from more than 50 zip codes benefit from an education grounded in biblical truth and committed to excellence. As LCA has grown, our need for additional and improved space has become increasingly clear. Legacy Forward will help ensure that our campus continues to support the exceptional programs, personal discipleship, and student experiences that distinguish an LCA education.",
    "These projects represent far more than new construction. They are investments in the students, educators, and programs that will shape the future of LCA. Families understand that these projects are essential investments in the school’s ability to fulfill its mission with excellence for generations to come.",
    "We ask that you continue praying for wisdom, provision, and unity, and that you share your enthusiasm for the campaign as opportunities arise. Your personal belief in this vision is one of the most powerful ways others can be encouraged to join us.",
    "Thank you for investing in our students. Thank you for believing in the mission of Legacy Christian Academy. Most importantly, thank you for helping us build a future in which generations of students can walk boldly in faith, pursue truth, and lead with integrity.",
    "Together, we are moving Legacy Forward.",
  ],
  scripture:
    "Commit your work to the Lord, and your plans will be established.",
  scriptureRef: "Proverbs 16:3",
} as const

export const nextSteps = [
  "Continuing personal conversations with prospective campaign families",
  "Finalizing commitments currently under consideration",
  "Advancing architectural, programmatic, and financial planning",
  "Evaluating project sequencing based on funding and campus priorities",
  "Maintaining disciplined stewardship of every campaign gift",
  "Sharing meaningful progress and milestones with our campaign families",
] as const

export const faqs = [
  {
    id: "what",
    question: "What is Legacy Forward?",
    answer:
      "Legacy Forward is the capital campaign for Legacy Christian Academy, and the most significant in the school’s history. On first reference it is Legacy Forward: The Capital Campaign for Legacy Christian Academy. It honors what has been built and commits the school to carrying that work into the next generation.",
  },
  {
    id: "promise",
    question: "What does A Future of Promise mean?",
    answer:
      "The tagline names what every gift makes possible: a future for our students shaped by faith, excellence, and opportunity. The September 2026 update describes that future as one in which students walk boldly in faith, pursue truth, and lead with integrity.",
  },
  {
    id: "figures",
    question: "Where are the goal, timeline, and priorities?",
    answer:
      "As of September 2026, 20 families have made commitments totaling $6.725 million, and more than $2.63 million has already been received. The update names four priorities: academic and programmatic space, a new band hall and fine arts improvements, an athletics training and support facility, and improved campus capacity. It does not publish a total campaign goal or a construction timeline.",
  },
  {
    id: "give",
    question: "How can I give?",
    answer:
      "You can make a gift, make a commitment, or start a conversation with the school. The note on this site records that intention. It does not process a payment or deliver a message yet.",
  },
  {
    id: "contact",
    question: "Who can answer a question about the campaign?",
    answer:
      "The September 2026 update is from Kevin Mosley, Head of School. Questions can also go to the LCA Marketing and Communications team. That update does not include a street address, phone number, or email.",
  },
] as const

export type PanelState = "empty" | "loading" | "error"

export function panelState(value: string | string[] | undefined): PanelState {
  const v = Array.isArray(value) ? value[0] : value
  if (v === "loading" || v === "error") return v
  return "empty"
}
