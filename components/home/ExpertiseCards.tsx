"use client"

import { motion, useReducedMotion } from "framer-motion"

const cards = [
  { title: "Digital Design", description: "Crafting digital experiences that are as functional as they are beautiful.", bg: "#E6F6FF", color: "#111", rotate: 2, icon: "⌘" },
  { title: "Web Development", description: "Building robust, user-friendly websites that perform flawlessly across devices.", bg: "#B3E4FF", color: "#111", rotate: -1.5, icon: "</>" },
  { title: "Graphic Design", description: "Creating visual identities that resonate with brands and captivate audiences.", bg: "#33B8FF", color: "#fff", rotate: 2.5, icon: "⌘" },
  { title: "AI Automation", description: "Integrating AI tools and workflows to accelerate design, content, and product delivery.", bg: "#0073B3", color: "#fff", rotate: 0, icon: "↗" },
]

export default function ExpertiseCards() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-white" style={{ padding: "96px 0 210px" }}>
      <div className="max-w-[1200px] mx-auto expertise-grid">
        <motion.h2
          className="expertise-heading font-display text-purple-dark leading-none"
          style={{ fontSize: "clamp(64px, 6vw, 88px)" }}
          initial={reduced ? false : { opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true, amount: .4 }}
          transition={{ duration: .8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Expertise
        </motion.h2>

        <div className="expertise-stack">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="expertise-card rounded-[12px] flex flex-col justify-end relative"
              style={{
                background: card.bg,
                color: card.color,
                height: 340,
                padding: "32px 28px",
                rotate: card.rotate,
                zIndex: index + 1,
              }}
              initial={reduced ? false : { opacity: 0, x: 140, y: 80, rotate: card.rotate + 5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: card.rotate }}
              viewport={{ once: true, amount: .25 }}
              transition={{ duration: .85, delay: index * .08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span
                className="expertise-icon absolute right-5 top-5 rounded-full w-11 h-11 flex items-center justify-center font-ui text-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.22)" }}
              >
                {card.icon}
              </span>
              <h3 className="font-editorial font-bold" style={{ fontSize: 30 }}>{card.title}</h3>
              <p className="font-editorial mt-4" style={{ fontSize: 16, opacity: .82 }}>{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
