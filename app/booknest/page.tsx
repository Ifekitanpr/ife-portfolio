import { notFound } from "next/navigation"
import { getProject, getAllProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"

export const metadata = {
  title: "BookNest — Ifeoluwa Emmanuel",
}

export default function BookNestPage() {
  const project = getProject("booknest")
  if (!project) notFound()

  const all = getAllProjects()
  const moreProjects = all.filter((p) => p.slug !== "booknest").slice(0, 2)

  return <CaseStudyLayout project={project} moreProjects={moreProjects} />
}
