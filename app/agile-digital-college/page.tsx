import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import AgileDigitalCollegeSections from "@/components/case-study/AgileDigitalCollegeSections"

export const metadata = {
  title: "Agile Digital College — Ifeoluwa Emmanuel",
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
