"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

/* ── Timezone / clock icon ── */
function TimezoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

/* ── Social SVG icons ── */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
function TwitterXIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

const socials = [
  { label: "LinkedIn",    href: "https://www.linkedin.com/in/ifeoluwa-ajele/", Icon: LinkedInIcon },
  { label: "Instagram",   href: "https://www.instagram.com/heyitsife_/", Icon: InstagramIcon },
  { label: "Facebook",    href: "https://web.facebook.com/ajele.ifeoluwa/", Icon: FacebookIcon },
  { label: "Twitter / X", href: "https://x.com/heyitsife_", Icon: TwitterXIcon },
]

export default function Hero() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const portraitOpacity = useTransform(scrollY, [45, 145], [1, 0])
  const portraitScale = useTransform(scrollY, [0, 145], [1, .88])
  const portraitY = useTransform(scrollY, [0, 145], [0, -54])
  const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
  const dur  = reduced ? 0 : 0.7

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden bg-white"
      style={{ paddingTop: 92 }}
    >
      <div className="max-w-[1200px] mx-auto" style={{ padding: "0 0" }}>

        <motion.div
          className="hero-portrait relative ml-auto overflow-hidden rounded-[8px]"
          style={{ opacity: reduced ? 1 : portraitOpacity, scale: reduced ? 1 : portraitScale, y: reduced ? 0 : portraitY }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduced ? false : { opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, ease, delay: .05 }}
          >
            <Image
              src="/ifeoluwa-portrait.jpg"
              alt="Ifeoluwa Emmanuel"
              fill
              priority
              sizes="(max-width: 809px) calc(100vw - 32px), 768px"
              className="object-cover object-[50%_8%]"
            />
          </motion.div>
        </motion.div>

        {/* ── Name + bio — full-width 2-col below image ── */}
        <div
          className="hero-grid"
          style={{ paddingTop: 24, paddingBottom: 176 }}
        >
          {/* Left: location + name */}
          <div className="flex flex-col gap-3">
            <motion.span
              className="text-purple inline-flex items-center gap-1.5 font-ui"
              style={{ fontSize: 14 }}
              initial={reduced ? false : { opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, ease, delay: 0.12 }}
            >
              <TimezoneIcon />
              Remote · GMT+1
            </motion.span>

            <motion.h1
              className="font-display text-purple-dark leading-[0.92]"
              style={{ fontSize: "clamp(52px, 6.5vw, 96px)", letterSpacing: ".02em", lineHeight: 0.92 }}
              initial={reduced ? false : { opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, ease, delay: 0.18 }}
            >
              Ifeoluwa<br />Emmanuel
            </motion.h1>
          </div>

          {/* Right: bio + social icons only (no CTA — not in Framer template) */}
          <motion.div
            className="flex flex-col justify-end gap-6"
            initial={reduced ? false : { opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, ease, delay: 0.24 }}
          >
            <p
              className="font-editorial leading-relaxed"
              style={{ fontSize: "clamp(15px, 1.2vw, 18px)", color: "#003D6B" }}
            >
              UI/UX designer with end-to-end experience across fintech, ed-tech,
              and consumer products — from research and systems thinking through
              to polished, shipped interfaces.
            </p>

            {/* Social icons — dark filled circles, white icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#f4f4f5",
                    color: "#52525b",
                    flexShrink: 0,
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
