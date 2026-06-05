import Image from "next/image"
import { Project } from "@/lib/projects"
import MoreWork from "@/components/case-study/MoreWork"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ProjectTitleIntro from "@/components/case-study/ProjectTitleIntro"
import RotatingVisualStage from "@/components/case-study/RotatingVisualStage"

interface CaseStudyLayoutProps {
  project: Project
  moreProjects: Project[]
  afterDesign?: React.ReactNode
  hideClosingSections?: boolean
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-purple-dark leading-none" style={{ fontSize: "clamp(38px, 4vw, 48px)" }}>
      {children}
    </h2>
  )
}

function StorefrontPair({ src, title }: { src: string; title: string }) {
  return (
    <div className="storefront-pair">
      <div className="storefront-window storefront-window-top">
        {/* A single long storefront flow, cropped twice to match the source Figma frame. */}
        <Image src={src} alt={`${title} storefront home and product discovery`} width={757} height={4096} unoptimized />
      </div>
      <div className="storefront-window storefront-window-lower">
        <Image src={src} alt={`${title} storefront recommendations and collections`} width={757} height={4096} unoptimized />
      </div>
    </div>
  )
}

export default function CaseStudyLayout({ project, moreProjects, afterDesign, hideClosingSections = false }: CaseStudyLayoutProps) {
  return (
    <>
      <section className="case-hero bg-white">
        <div className="max-w-[1200px] mx-auto">
          <ProjectTitleIntro category={project.category} title={project.title} overview={project.overview} />

          <ScrollReveal>
            <div className={`case-banner relative overflow-hidden rounded-[8px] ${project.slug === "agile-digital-college" ? "case-banner-agile-digital-college" : ""}`}>
              <Image src={project.bannerImage} alt={`${project.title} banner`} fill priority quality={95} sizes="(max-width: 809px) 100vw, 1200px" className={project.slug === "agile-digital-college" ? "object-contain" : "object-cover"} />
            </div>
          </ScrollReveal>

          <div className="case-meta">
            {[
              { label: "My Role", value: project.role },
              { label: "Duration", value: project.duration },
              { label: "Disciplines", value: project.tags.join(", ") },
              { label: "Year", value: project.year },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="font-editorial text-purple block mb-2" style={{ fontSize: 14 }}>{label}</span>
                <span className="font-editorial text-gray" style={{ fontSize: 16 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section bg-white">
        <div className="case-editorial max-w-[1200px] mx-auto">
          <ScrollReveal><SectionHeading>Overview</SectionHeading></ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal className="case-copy-card">
              <span>/Challenge</span>
              <p>{project.challenge}</p>
            </ScrollReveal>
            <ScrollReveal className="case-copy-card" delay={.08}>
              <span>/Solution</span>
              <p>{project.solution}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="case-section bg-lavender">
        <div className="case-editorial max-w-[1200px] mx-auto">
          <ScrollReveal><SectionHeading>Research</SectionHeading></ScrollReveal>
          <div>
            <ScrollReveal>
              <p className="font-editorial text-gray leading-relaxed mb-8" style={{ fontSize: 18 }}>
                The work began by understanding the complete ecosystem, the people using it, and the moments where unclear structure created unnecessary friction.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.research.map((item, index) => (
                <ScrollReveal key={item} delay={index * .05}>
                  <div className="case-research-card">
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.personas && project.personas.length > 0 && (
        <section className="case-signature-section bg-white">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal className="case-signature-heading">
              <span>Who this had to work for</span>
              <h2 className="font-display text-purple-dark">Different lives.<br />Different stakes.</h2>
              <p className="font-editorial text-gray">A useful product must understand what each person is trying to protect, avoid, and accomplish.</p>
            </ScrollReveal>
            <div className="case-persona-grid">
              {project.personas.map((persona, index) => (
                <ScrollReveal key={persona.name} delay={index * .08}>
                  <article className="case-persona-card">
                    {persona.image && (
                      <div className="case-persona-image">
                        <Image src={persona.image} alt="" fill quality={90} sizes="(max-width: 809px) 100vw, 50vw" className="object-cover" />
                      </div>
                    )}
                    <span>0{index + 1} / {persona.role}</span>
                    <h3>{persona.name}</h3>
                    <p>{persona.context}</p>
                    <div><strong>Friction</strong>{persona.painPoint}</div>
                    <div><strong>Success looks like</strong>{persona.goal}</div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process section — steps only, no visuals yet */}
      <section className="case-section bg-white">
        <div className="case-editorial max-w-[1200px] mx-auto">
          <ScrollReveal><SectionHeading>Process</SectionHeading></ScrollReveal>
          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <p className="font-editorial text-gray leading-relaxed" style={{ fontSize: 18 }}>
                The design process translated those findings into a clear, scalable system. Each stage reduced complexity while preserving the personality and purpose of the product.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.process.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * .05}>
                  <div className="case-process-card">
                    <span>0{index + 1}</span>
                    <h3>{item.step}</h3>
                    <p>{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.designDecisions && project.designDecisions.length > 0 && (
        <section className="case-decisions">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal className="case-decisions-intro">
              <span>Product judgment</span>
              <h2 className="font-display">The decisions<br />behind the screens.</h2>
            </ScrollReveal>
            <div className="case-decision-list">
              {project.designDecisions.map((item, index) => (
                <ScrollReveal key={item.decision} delay={index * .06}>
                  <article>
                    <span>0{index + 1}</span>
                    <h3>{item.decision}</h3>
                    <p>{item.rationale}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design System or other project-specific section */}
      {afterDesign}

      {/* Visual design screens — after design system */}
      {project.visualSections && project.visualSections.length > 0 && (
        <section className="case-section bg-white">
          {project.visualSections.map((visual) => (
            <div className="case-visual max-w-[1200px] mx-auto" key={visual.title}>
              <div className="case-editorial">
                <ScrollReveal>
                  <h3 className="font-display text-purple-dark leading-none" style={{ fontSize: "clamp(32px, 3vw, 44px)" }}>{visual.title}</h3>
                </ScrollReveal>
                <ScrollReveal delay={.05}>
                  <p className="font-editorial text-gray leading-relaxed" style={{ fontSize: 17 }}>{visual.description}</p>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={.08}>
                {visual.images && visual.images.length > 0 ? (
                  <RotatingVisualStage images={visual.images} title={visual.title} imageClass={visual.imageClass} aspectRatio={visual.aspectRatio} />
                ) : visual.layout === "storefront-pair" && visual.image ? (
                  <StorefrontPair src={visual.image} title={project.title} />
                ) : visual.image ? (
                  <div className={`case-visual-image relative overflow-hidden rounded-[8px] ${
                    visual.imageClass === "contain-dark" ? "case-visual-image-contain-dark" :
                    visual.imageClass === "contain-light" ? "case-visual-image-contain-light" :
                    visual.imageClass === "contain" ? "case-visual-image-contain bg-gray-light" :
                    visual.imageClass === "portrait" ? "case-visual-image-portrait bg-gray-light" :
                    "bg-gray-light"
                  }`}>
                    {(visual.imageClass === "contain-dark" || visual.imageClass === "contain-light") ? (
                      <div className="case-visual-screen-frame">
                        <Image
                          src={visual.image}
                          alt={`${project.title} ${visual.title}`}
                          fill
                          quality={95}
                          unoptimized
                          sizes="(max-width: 809px) 100vw, 1200px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Image
                        src={visual.image}
                        alt={`${project.title} ${visual.title}`}
                        fill
                        quality={95}
                        unoptimized={visual.image.endsWith(".gif") || visual.imageClass === "contain"}
                        sizes="(max-width: 809px) 100vw, 1200px"
                        className={visual.imageClass === "portrait" || visual.imageClass === "contain" ? "object-contain" : "object-cover object-top"}
                      />
                    )}
                  </div>
                ) : null}
              </ScrollReveal>
            </div>
          ))}
        </section>
      )}

      {!hideClosingSections && project.learnings && project.learnings.length > 0 && (
        <section className="case-learnings bg-white">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal className="case-signature-heading">
              <span>What I would carry forward</span>
              <h2 className="case-learning-heading font-display text-purple-dark">The work changed how I design.</h2>
            </ScrollReveal>
            <div className="case-learning-grid">
              {project.learnings.map((learning, index) => (
                <ScrollReveal key={learning} delay={index * .06}>
                  <article><span>0{index + 1}</span><p>{learning}</p></article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {!hideClosingSections && <section className="case-results-section">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="case-results-heading">
            <span>Outcome</span>
            <h2 className="font-display">What changed<br />because of the work.</h2>
          </ScrollReveal>
          <div className={`case-results ${project.results.length > 3 ? "case-results-scroll" : ""}`}>
            {project.results.map((result, index) => (
              <ScrollReveal key={result} delay={index * .06}>
                <article><span>0{index + 1}</span><p>{result}</p></article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>}

      <MoreWork projects={moreProjects} />
    </>
  )
}
