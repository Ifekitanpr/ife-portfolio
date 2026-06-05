import { readFileSync } from "fs"
import { join } from "path"

export interface ProcessStep {
  step: string
  description: string
}

export interface Persona {
  name: string
  role: string
  image?: string
  context: string
  painPoint: string
  goal: string
}

export interface DesignDecision {
  decision: string
  rationale: string
}

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  role: string
  duration: string
  team: string
  tags: string[]
  heroImage: string
  bannerImage: string
  overview: string
  challenge: string
  solution: string
  research: string[]
  personas?: Persona[]
  process: ProcessStep[]
  designDecisions?: DesignDecision[]
  results: string[]
  learnings?: string[]
  visualSections?: {
    title: string
    description: string
    image?: string
    images?: string[]
    imageClass?: string
    aspectRatio?: string
    layout?: "single" | "storefront-pair"
  }[]
  nextProject: string
}

const contentDir = join(process.cwd(), "content", "projects")

function loadProject(slug: string): Project {
  const filePath = join(contentDir, `${slug}.json`)
  const raw = readFileSync(filePath, "utf-8")
  return JSON.parse(raw) as Project
}

export const SLUGS = ["agile-digital-college", "zaron", "wash", "vpd-money"] as const
export type Slug = (typeof SLUGS)[number]

export function getAllProjects(): Project[] {
  return SLUGS.map(loadProject)
}

export function getProject(slug: string): Project | null {
  if (!SLUGS.includes(slug as Slug)) return null
  return loadProject(slug)
}

export function getAdjacentProject(nextSlug: string): Project | null {
  return getProject(nextSlug)
}

export function getMoreProjects(currentSlug: string, count = 2): Project[] {
  const slugs = [...SLUGS]
  const idx = slugs.indexOf(currentSlug as Slug)
  const result: Project[] = []
  for (let i = 1; i <= slugs.length && result.length < count; i++) {
    result.push(loadProject(slugs[(idx + i) % slugs.length]))
  }
  return result
}
