import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ui/ScrollReveal"

const projects = [
  {
    slug: "agile-digital-college",
    category: "EdTech Ecosystem & Operations",
    title: "Agile Digital College",
    image: "/projects/agile-digital-college/cover.png",
  },
  {
    slug: "zaron",
    category: "Commerce & Operations",
    title: "Zaron Cosmetics",
    image: "/projects/zaron/hero.jpg",
  },
  {
    slug: "wash",
    category: "On-Demand Services",
    title: "Wash: Care On Demand",
    image: "/projects/wash/hero.png",
  },
  {
    slug: "vpd-money",
    category: "Personal Banking & Fintech",
    title: "VPD Money",
    image: "/projects/vpd-money/cover.png",
  },
]

export default function FeaturedWork() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: "#E6F6FF",
        padding: "96px 0 112px",
      }}
      className="featured-section"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Centered section header */}
        <ScrollReveal className="flex flex-col items-center text-center gap-3 mb-16">
          <h2
            className="font-display text-purple-dark leading-none"
            style={{ fontSize: "clamp(54px, 5vw, 72px)" }}
          >
            Featured Work
          </h2>
        </ScrollReveal>

        {/* 2-column grid */}
        <div className="work-grid grid gap-x-12 gap-y-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.07}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="project-card group block"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[8px]" style={{ aspectRatio: "1.6/1" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={90}
          sizes="(max-width: 809px) 100vw, 50vw"
          className="project-card-image object-cover"
        />
      </div>

      {/* Content */}
      <div className="project-card-copy" style={{ padding: "22px 0 0" }}>
        <span className="font-editorial text-purple" style={{ fontSize: 16 }}>
          {project.category}
        </span>
        <h3
          className="font-editorial font-bold text-purple-dark mt-2 leading-tight"
          style={{ fontSize: "clamp(28px, 2.2vw, 34px)" }}
        >
          {project.title}
        </h3>
      </div>
    </Link>
  )
}
