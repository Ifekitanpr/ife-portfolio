import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import AgileDigitalCollegeSections from "@/components/case-study/AgileDigitalCollegeSections"

export const metadata: Metadata = {
  title: "Agile Digital College — Ed-tech UX/UI Case Study",
  description:
    "End-to-end UX/UI design for Agile Digital College, an ed-tech platform built for working professionals. Case study covering 5 learning pillars, design systems, and enterprise L&D features.",
  openGraph: {
    title: "Agile Digital College — Ed-tech UX/UI Case Study | Ifeoluwa Emmanuel",
    description:
      "End-to-end UX/UI design for Agile Digital College, an ed-tech platform built for working professionals. Covers 5 learning pillars, design systems, and enterprise L&D features.",
    type: "article",
    images: [{ url: "/projects/agile-digital-college/cover.png", width: 1200, height: 800, alt: "Agile Digital College case study" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Digital College — Ed-tech UX/UI Case Study",
    description: "End-to-end UX/UI design for Agile Digital College, an ed-tech platform built for working professionals.",
    images: ["/projects/agile-digital-college/cover.png"],
  },
}

export default function AgileDigitalCollegePage() {
  const project = getProject("agile-digital-college")
  if (!project) notFound()

  const moreProjects = getMoreProjects("agile-digital-college")

  return (
    <CaseStudyLayout
      project={project}
      moreProjects={moreProjects}
      afterDesign={<AgileDigitalCollegeSections />}
      hideClosingSections
    />
  )
}
