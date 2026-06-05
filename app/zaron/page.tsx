import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import ZaronDesignSystem from "@/components/case-study/ZaronDesignSystem"

export const metadata = {
  title: "Zaron Cosmetics — Ifeoluwa Emmanuel",
}

export default function ZaronPage() {
  const project = getProject("zaron")
  if (!project) notFound()

  const moreProjects = getMoreProjects("zaron")

  return (
    <CaseStudyLayout
      project={project}
      moreProjects={moreProjects}
      afterDesign={<ZaronDesignSystem />}
    />
  )
}
