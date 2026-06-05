"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

interface RotatingVisualStageProps {
  images: string[]
  title: string
  imageClass?: string
  aspectRatio?: string
}

export default function RotatingVisualStage({
  images,
  title,
  imageClass,
  aspectRatio = "16/9",
}: RotatingVisualStageProps) {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || images.length <= 1) return
    const t = setInterval(() => setActive((c) => (c + 1) % images.length), 3000)
    return () => clearInterval(t)
  }, [images.length, reduced])

  const isContain = imageClass === "contain" || imageClass === "portrait"

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[8px]",
        isContain ? "case-visual-image-contain" : "bg-gray-light",
      ].join(" ")}
      style={{ marginTop: 48, aspectRatio }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[active]}
          className="absolute inset-0"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images[active]}
            alt={`${title} — screen ${active + 1} of ${images.length}`}
            fill
            quality={92}
            sizes="(max-width: 809px) 100vw, 1200px"
            className={isContain ? "object-contain" : "object-cover object-top"}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Counter so it's obvious rotation is happening */}
          <div className="case-rotating-label" aria-hidden="true">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span> / </span>
            <span>{String(images.length).padStart(2, "0")}</span>
          </div>

          <div className="case-rotating-dots" aria-label="Image navigation">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
                aria-label={`Show screen ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
