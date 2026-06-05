"use client"

import Image from "next/image"
import { useReducedMotion } from "framer-motion"

const skills = [
  { name: "Framer", icon: "https://framerusercontent.com/images/dM4dsG93LeGkpaCnGjjBCpdWILA.png" },
  { name: "Webflow", icon: null },
  { name: "Notion", icon: null },
  { name: "Canva", icon: null },
  { name: "Adobe", icon: null },
  { name: "Github", icon: null },
  { name: "Figma", icon: null },
  { name: "AI Tools", icon: null },
]

const SEPARATOR = "✦"

function TickerItem({ skill }: { skill: (typeof skills)[number] }) {
  return (
    <span
      className="font-display text-purple-dark/80 flex items-center gap-4 flex-shrink-0"
      style={{ fontSize: "clamp(24px, 3.5vw, 48px)" }}
    >
      {skill.icon && (
        <span className="relative inline-block w-8 h-8 flex-shrink-0">
          <Image
            src={skill.icon}
            alt={skill.name}
            fill
            sizes="32px"
            className="object-contain"
          />
        </span>
      )}
      {skill.name}
      <span className="text-purple-light mx-4">{SEPARATOR}</span>
    </span>
  )
}

export default function SkillTicker() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      style={{
        backgroundColor: "#E6F6FF",
        padding: "64px 0",
        borderTop: "1px solid rgba(190,135,221,0.2)",
        borderBottom: "1px solid rgba(190,135,221,0.2)",
        overflow: "hidden",
      }}
    >
      <div
        className={prefersReducedMotion ? "flex flex-wrap gap-6 px-10" : "flex"}
        aria-label="Skills and tools"
      >
        <div className={prefersReducedMotion ? "contents" : "flex ticker-track"}>
          {/* Duplicate for seamless loop */}
          {[...skills, ...skills].map((skill, i) => (
            <TickerItem key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
