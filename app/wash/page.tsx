import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import WashDesignSystem from "@/components/case-study/WashDesignSystem"

export const metadata: Metadata = {
  title: "Wash: Care On Demand — On-demand App UX/UI Case Study",
  description:
    "UX/UI design for Wash, an on-demand laundry and dry-cleaning platform. Case study covering service design, multi-sided product thinking, mobile-first design, and a full component system.",
  openGraph: {
    title: "Wash: Care On Demand — On-demand App UX/UI Case Study | Ifeoluwa Emmanuel",
    description:
      "UX/UI design for Wash, an on-demand laundry platform. Covers service design, multi-sided product thinking, and mobile-first design systems.",
    type: "article",
    images: [{ url: "/projects/wash/hero.png", width: 1200, height: 800, alt: "Wash Care On Demand app case study" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wash: Care On Demand — On-demand App UX/UI Case Study",
    description: "UX/UI design for Wash, an on-demand laundry platform covering service design and mobile-first systems.",
    images: ["/projects/wash/hero.png"],
  },
}

export default function WashPage() {
  const project = getProject("wash")
  if (!project) notFound()

  const moreProjects = getMoreProjects("wash")

  return <CaseStudyLayout project={project} moreProjects={moreProjects} afterDesign={<WashDesignSystem />} />
}
