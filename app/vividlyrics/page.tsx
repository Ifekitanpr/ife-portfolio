import { notFound } from "next/navigation"
import { getProject, getAllProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"

export const metadata = {
  title: "VividLyrics — Ifeoluwa Emmanuel",
}

export default function VividLyricsPage() {
  const project = getProject("vividlyrics")
  if (!project) notFound()

  const all = getAllProjects()
  const moreProjects = all.filter((p) => p.slug !== "vividlyrics").slice(0, 2)

  return <CaseStudyLayout project={project} moreProjects={moreProjects} />
}
