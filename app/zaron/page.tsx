import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, getMoreProjects } from "@/lib/projects"
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout"
import ZaronDesignSystem from "@/components/case-study/ZaronDesignSystem"

export const metadata: Metadata = {
  title: "Zaron Cosmetics — E-commerce UX/UI Case Study",
  description:
    "E-commerce UX/UI design and design system for Zaron Cosmetics. Case study covering brand-aligned storefront experience, product discovery, checkout flow, and admin dashboard design.",
  openGraph: {
    title: "Zaron Cosmetics — E-commerce UX/UI Case Study | Ifeoluwa Emmanuel",
    description:
      "E-commerce UX/UI design for Zaron Cosmetics. Covers brand-aligned storefront, product discovery, checkout flow, and admin dashboard design.",
    type: "article",
    images: [{ url: "/projects/zaron/hero.jpg", width: 1200, height: 800, alt: "Zaron Cosmetics e-commerce case study" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaron Cosmetics — E-commerce UX/UI Case Study",
    description: "E-commerce UX/UI design and design system for Zaron Cosmetics — storefront, checkout, and admin.",
    images: ["/projects/zaron/hero.jpg"],
  },
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
