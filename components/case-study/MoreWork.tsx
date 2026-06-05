import Image from "next/image"
import Link from "next/link"
import { Project } from "@/lib/projects"

interface MoreWorkProps {
  projects: Project[]
}

export default function MoreWork({ projects }: MoreWorkProps) {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "96px 0 120px" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <h2
            className="font-display text-purple-dark leading-none"
            style={{ fontSize: "clamp(38px, 4vw, 48px)" }}
          >
            View More Work...
          </h2>
        </div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))" }}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${project.slug}`}
              className="group block rounded-[16px] overflow-hidden bg-white"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 809px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <span
                  className="font-code text-purple uppercase tracking-[0.16em]"
                  style={{ fontSize: 10 }}
                >
                  {project.category}
                </span>
                <h3
                  className="font-display text-purple-dark mt-1"
                  style={{ fontSize: 22 }}
                >
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
