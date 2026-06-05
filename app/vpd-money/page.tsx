import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import VpdMoneySections from "@/components/case-study/VpdMoneySections"

export const metadata: Metadata = {
  title: "VPD Money — Fintech App Redesign Case Study",
  description:
    "UI/UX redesign of VPD Money, a Nigerian fintech banking app — growing active customers 192% from 12,000 to 35,000. Covers mobile banking UX, personalisation, onboarding, and dark mode.",
  openGraph: {
    title: "VPD Money — Fintech App Redesign Case Study | Ifeoluwa Emmanuel",
    description:
      "UI/UX redesign of VPD Money, a Nigerian fintech app — 192% customer growth from 12,000 to 35,000. Covers mobile banking UX, personalisation, and onboarding design.",
    type: "article",
    images: [{ url: "/projects/vpd-money/cover.png", width: 1200, height: 800, alt: "VPD Money fintech redesign case study" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VPD Money — Fintech App Redesign Case Study",
    description: "UI/UX redesign of VPD Money — growing active customers 192% from 12,000 to 35,000.",
    images: ["/projects/vpd-money/cover.png"],
  },
}

export default function VpdMoneyPage() {
  const project = getProject("vpd-money")
  if (!project) notFound()

  const moreProjects = getMoreProjects("vpd-money")

  return <CaseStudyLayout project={project} moreProjects={moreProjects} afterDesign={<VpdMoneySections />} />
}
