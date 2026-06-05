import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"

export const metadata = {
  title: "HealthMate — Ifeoluwa Emmanuel",
}

export default function HealthMatePage() {
  const project = getProject("healthmate")
  if (!project) notFound()

  const moreProjects = getMoreProjects("healthmate")

  return <CaseStudyLayout project={project} moreProjects={moreProjects} />
}
