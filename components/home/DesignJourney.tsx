import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"

const experiences = [
  { company: "Agile Digital College", role: "UIUX Designer", period: "Aug 2024 – Present" },
  { company: "VPD Money", role: "UIUX Designer", period: "Sep 2023 – Dec 2025" },
  { company: "Alpha Core Labs", role: "UI/UX Designer", period: "Aug 2023 – Jan 2024" },
]

const skills = [
  { name: "Framer", icon: "/logos/framer.svg" },
  { name: "Figma", icon: "/logos/figma.svg" },
  { name: "Webflow", icon: "/logos/webflow.svg" },
  { name: "Canva", icon: "/logos/canva.svg" },
  { name: "Adobe", icon: "/logos/adobe.svg" },
  { name: "GitHub", icon: "/logos/github.svg" },
]

export default function DesignJourney() {
  return (
    <section id="about" className="journey-section bg-white" style={{ padding: "112px 0 196px" }}>
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-purple-dark leading-none" style={{ fontSize: "clamp(64px, 6vw, 88px)" }}>
            Design Journey
          </h2>
        </ScrollReveal>

        <div className="journey-grid" style={{ marginTop: 96 }}>
          <div>
            <p className="font-editorial text-purple mb-3" style={{ fontSize: 18 }}>⌘ Experience</p>
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * .06}>
                <div className="experience-row border-t border-purple-light/20 py-7">
                  <h3 className="font-editorial font-bold text-purple-dark" style={{ fontSize: 30 }}>{exp.company}</h3>
                  <div className="flex justify-between gap-6 mt-5 font-editorial text-gray" style={{ fontSize: 16 }}>
                    <span>{exp.role}</span><span>{exp.period}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div>
            <p className="font-editorial text-purple mb-3" style={{ fontSize: 18 }}>⌕ Skill Set</p>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * .045}>
                  <div className="skill-card border border-purple-light/20 rounded-[8px] flex flex-col items-center justify-between text-center py-5" style={{ height: 120 }}>
                    <span className="skill-card-icon relative block h-9 w-9">
                      <Image src={skill.icon} alt={`${skill.name} logo`} fill sizes="36px" className="object-contain" />
                    </span>
                    <span className="font-editorial text-gray" style={{ fontSize: 15 }}>{skill.name}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
