"use client"

import { motion, useReducedMotion } from "framer-motion"

interface ProjectTitleIntroProps {
  category: string
  title: string
  overview: string
}

export default function ProjectTitleIntro({ category, title, overview }: ProjectTitleIntroProps) {
  const reduced = useReducedMotion()
  const words = title.split(" ")
  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

  return (
    <div className="case-title text-center">
      <motion.span
        className="font-editorial text-purple"
        style={{ fontSize: 16 }}
        initial={reduced ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .55, ease }}
      >
        {category}
      </motion.span>
      <h1 className="case-title-heading font-display text-purple-dark leading-none" style={{ fontSize: "clamp(56px, 6vw, 76px)" }}>
        {words.map((word, index) => (
          <span className="case-title-word-mask" key={`${word}-${index}`}>
            <motion.span
              className="case-title-word"
              initial={reduced ? false : { y: "115%", rotate: 2 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ duration: .85, ease, delay: .08 + index * .09 }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>
      <motion.p
        className="font-editorial text-gray leading-relaxed mx-auto"
        style={{ fontSize: 18, maxWidth: 768 }}
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7, ease, delay: .38 }}
      >
        {overview}
      </motion.p>
    </div>
  )
}
