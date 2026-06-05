import { notFound } from "next/navigation"
import { getProject, getAllProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"

export const metadata = {
  title: "EcoPulse — Ifeoluwa Emmanuel",
}

export default function EcoPulsePage() {
  const project = getProject("ecopulse")
  if (!project) notFound()

  const all = getAllProjects()
  const moreProjects = all.filter((p) => p.slug !== "ecopulse").slice(0, 2)

  return <CaseStudyLayout project={project} moreProjects={moreProjects} />
}
