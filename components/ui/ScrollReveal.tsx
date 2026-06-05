"use client"

import { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={`reveal-motion ${className}`}
      initial={reduced ? false : { opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px" }}
      transition={{
        duration: reduced ? 0 : 0.8,
        delay: reduced ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
