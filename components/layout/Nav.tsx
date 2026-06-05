"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const AVATAR = "/ifeoluwa-portrait.jpg"

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(1440)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { scrollY } = useScroll()
  const contentWidth = Math.min(1200, Math.max(320, viewportWidth - (viewportWidth < 810 ? 32 : 80)))
  const margin = (viewportWidth - contentWidth) / 2
  const avatarOpacity = useTransform(scrollY, [isHome ? 60 : 0, isHome ? 145 : 1], [isHome ? 0 : 1, 1])
  const avatarY = useTransform(scrollY, [isHome ? 60 : 0, isHome ? 145 : 1], [34, 16])
  const avatarScale = useTransform(scrollY, [isHome ? 60 : 0, isHome ? 145 : 1], [.55, 1])
  const navWidth = useTransform(scrollY, [0, 150], [isHome ? contentWidth : 340, viewportWidth < 810 ? contentWidth : 340])
  const navBackground = useTransform(scrollY, [0, 120], [isHome ? "rgba(255,255,255,0)" : "rgba(255,255,255,.88)", "rgba(255,255,255,.88)"])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth)
      if (window.innerWidth >= 810) setMobileOpen(false)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <motion.a
        href="/#home"
        aria-label="Back to home"
        className="nav-avatar fixed z-[51] block overflow-hidden rounded-[8px]"
        style={{ left: margin, top: avatarY, width: 40, height: 40, opacity: avatarOpacity, scale: avatarScale }}
      >
        <Image src={AVATAR} alt="Ifeoluwa Emmanuel" fill priority sizes="40px" className="object-cover object-[50%_25%]" />
      </motion.a>

      <motion.header className="fixed top-0 left-0 right-0 z-50 nav-backdrop" style={{ backgroundColor: navBackground }}>
        <div
          className="mx-auto flex items-center justify-end"
          style={{ height: 72, width: contentWidth }}
        >
          <motion.nav className="items-center hidden md:flex justify-between" style={{ width: navWidth }} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-ui text-sm text-gray"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://drive.google.com/file/d/1cF40tFMNBLe8zW9X2lJ_19XTEF4QuSLq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link font-ui text-sm text-purple rounded-pill border border-purple"
              style={{ padding: "10px 24px" }}
            >
              Resume
            </Link>
          </motion.nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className="block h-0.5 bg-purple-dark transition-all duration-300 origin-center"
              style={{
                width: 22,
                transform: mobileOpen ? "rotate(45deg) translate(3px, 4px)" : "none",
              }}
            />
            <span
              className="block h-0.5 bg-purple-dark transition-all duration-300"
              style={{ width: 22, opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-purple-dark transition-all duration-300 origin-center"
              style={{
                width: 22,
                transform: mobileOpen ? "rotate(-45deg) translate(3px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 nav-backdrop flex flex-col"
            style={{ paddingTop: 72 }}
          >
            <nav className="flex flex-col gap-2 px-8 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-ui font-medium text-2xl text-purple-dark py-3 border-b border-purple-dark/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="font-ui font-medium text-sm bg-purple-dark text-white rounded-pill mt-6 text-center"
                style={{ padding: "14px 24px" }}
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
