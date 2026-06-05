"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProcessStep } from "@/lib/projects"

interface AccordionProps {
  items: ProcessStep[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col divide-y divide-gray-muted/30">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between text-left py-6 group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-5">
                <span
                  className="font-code text-gray-muted"
                  style={{ fontSize: 12, minWidth: 28 }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-ui font-semibold text-purple-dark group-hover:text-purple transition-colors"
                  style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
                >
                  {item.step}
                </h3>
              </div>
              <span
                className="font-ui text-purple-dark/50 transition-transform duration-300 flex-shrink-0 ml-4"
                style={{
                  fontSize: 20,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <p
                    className="font-editorial text-gray leading-relaxed pb-8 pl-[52px]"
                    style={{ fontSize: 16 }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
