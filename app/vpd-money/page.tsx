import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import VpdMoneySections from "@/components/case-study/VpdMoneySections"

export const metadata = {
  title: "VPD Money — Ifeoluwa Emmanuel",
}

export default function VpdMoneyPage() {
  const project = getProject("vpd-money")
  if (!project) notFound()

  const moreProjects = getMoreProjects("vpd-money")

  return <CaseStudyLayout project={project} moreProjects={moreProjects} afterDesign={<VpdMoneySections />} />
}
