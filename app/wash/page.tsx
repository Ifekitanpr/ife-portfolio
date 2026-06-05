import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import WashDesignSystem from "@/components/case-study/WashDesignSystem"

export const metadata = {
  title: "Wash: Care On Demand — Ifeoluwa Emmanuel",
}

export default function WashPage() {
  const project = getProject("wash")
  if (!project) notFound()

  const moreProjects = getMoreProjects("wash")

  return <CaseStudyLayout project={project} moreProjects={moreProjects} afterDesign={<WashDesignSystem />} />
}
