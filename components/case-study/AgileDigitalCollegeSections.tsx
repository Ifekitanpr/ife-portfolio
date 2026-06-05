"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import ScrollReveal from "@/components/ui/ScrollReveal"

type Pillar = {
  numeral: string
  eyebrow: string
  title: string
  intro: string
  points: string[]
  images: { src: string; label: string }[]
  mode?: "pan" | "contain"
}

const pillarOnePages = [
  { src: "/projects/agile-digital-college/pillar-1-full/home.png", label: "ADC home", stops: 8 },
  { src: "/projects/agile-digital-college/pillar-1-full/bootcamp.png", label: "Bootcamp", stops: 8 },
  { src: "/projects/agile-digital-college/pillar-1-full/certification.png", label: "Certification", stops: 8 },
  { src: "/projects/agile-digital-college/pillar-1-full/competency-management.png", label: "Competency management", stops: 5 },
  { src: "/projects/agile-digital-college/pillar-1-full/pricing.png", label: "Pricing", stops: 7 },
]

const pillars: Pillar[] = [
  {
    numeral: "I",
    eyebrow: "The Custom CMS Mindset",
    title: "Scaling 50+ courses without designing 50+ pages.",
    intro: "A template-led content system gave every course a premium identity while keeping the growing catalogue manageable for both design and development.",
    points: [
      "Master templates for certification, practitioner, and leadership categories",
      "Flexible modules that preserve hierarchy while content changes",
      "A conversion path that moves learners from evaluation to success",
    ],
    images: [],
  },
  {
    numeral: "II",
    eyebrow: "The Gamified LMS",
    title: "Turning course progress into a reason to return.",
    intro: "The learning environment was rebuilt as an engagement engine, replacing a passive video library with visible momentum and useful accountability.",
    points: [
      "Daily challenges, badges, and proficiency levels",
      "Exam countdowns paired with adaptive study plans",
      "Timestamped video notes and personal reflections",
    ],
    images: [
      { src: "/projects/agile-digital-college/pillar-2/overview.png", label: "Learning overview" },
      { src: "/projects/agile-digital-college/pillar-2/dashboard.png", label: "Learner dashboard" },
      { src: "/projects/agile-digital-college/pillar-2/notes.png", label: "In-course notes" },
      { src: "/projects/agile-digital-college/pillar-2/progress.png", label: "Progress and achievements" },
      { src: "/projects/agile-digital-college/pillar-2/courses.png", label: "My courses" },
    ],
  },
  {
    numeral: "III",
    eyebrow: "The Growth Stack",
    title: "A career companion, not just a course dashboard.",
    intro: "Learning outcomes were connected to the learner's bigger ambition: understanding their readiness, seeing their growth, and finding the next opportunity.",
    points: [
      "Career and innovation assessments with clear visual feedback",
      "Future-ready status and growth recommendations",
      "Job-market matching based on demonstrated proficiency",
    ],
    images: [
      { src: "/projects/agile-digital-college/pillar-3/assessment.png", label: "Career assessment" },
      { src: "/projects/agile-digital-college/pillar-3/career-growth.png", label: "Career growth" },
      { src: "/projects/agile-digital-college/pillar-3/career-growth-detail.png", label: "Growth detail" },
      { src: "/projects/agile-digital-college/pillar-3/job-market.png", label: "Job market" },
    ],
  },
  {
    numeral: "IV",
    eyebrow: "The Enterprise Suite",
    title: "Making workforce learning measurable for employers.",
    intro: "A dedicated B2B surface gives organisations the information and controls they need without forcing enterprise workflows into the learner product.",
    points: [
      "License-pool and employee course management",
      "Workforce competency and progress visibility",
      "A clearer path from learning investment to business value",
    ],
    images: [
      { src: "/projects/agile-digital-college/pillar-4/dashboard.png", label: "Employer dashboard" },
      { src: "/projects/agile-digital-college/pillar-4/courses-library.png", label: "Enterprise courses" },
      { src: "/projects/agile-digital-college/pillar-4/courses-detail.png", label: "Course management" },
    ],
  },
  {
    numeral: "V",
    eyebrow: "The Back Office",
    title: "A command centre for the business behind the learning.",
    intro: "The internal team needed a high-density workspace that made a complex operation feel controlled, legible, and fast.",
    points: [
      "One view across learners, courses, enterprise accounts, and revenue",
      "Clear hierarchy for high-density operational data",
      "Rapid actions that reduce training and repetitive admin work",
    ],
    images: [
      { src: "/projects/agile-digital-college/pillar-5/home.png", label: "Operations overview" },
      { src: "/projects/agile-digital-college/pillar-5/users.png", label: "User management" },
    ],
  },
]

function RotatingStage({ images, mode = "contain" }: Pick<Pillar, "images" | "mode">) {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % images.length), mode === "pan" ? 5200 : 4200)
    return () => window.clearInterval(timer)
  }, [images.length, mode, reduceMotion])

  return (
    <div className={`adc-stage adc-stage-${mode}`}>
      <div className="adc-stage-topline">
        <span>{images[active].label}</span>
        <span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="adc-stage-window">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[active].src}
            className="adc-stage-frame"
            initial={reduceMotion ? false : { opacity: 0, scale: .985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 1.01 }}
            transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images[active].src}
              alt={images[active].label}
              fill
              quality={95}
              sizes="(max-width: 809px) 100vw, 1100px"
              className={mode === "pan" ? "adc-stage-image adc-stage-image-pan" : "adc-stage-image"}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="adc-stage-controls" aria-label="Choose screen">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show ${image.label}`}
          />
        ))}
      </div>
    </div>
  )
}

function FullPageStage() {
  const [pageIndex, setPageIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const page = pillarOnePages[pageIndex]
  // Each "stop" = ~2400ms of continuous scroll; gives proportionally longer time to taller pages
  const scrollMs = page.stops * 2400

  useEffect(() => {
    const total = reduceMotion ? 4000 : scrollMs + 700
    const t = window.setTimeout(
      () => setPageIndex((p) => (p + 1) % pillarOnePages.length),
      total
    )
    return () => window.clearTimeout(t)
  }, [pageIndex, scrollMs, reduceMotion])

  return (
    <div className="adc-stage adc-full-page-stage">
      <div className="adc-stage-topline">
        <span>{page.label}</span>
        <span>{String(pageIndex + 1).padStart(2, "0")} / {String(pillarOnePages.length).padStart(2, "0")}</span>
      </div>
      <div className="adc-stage-window">
        {/* Inset viewport — dark strips on left/right make the scroll direction obvious */}
        <div className="adc-page-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={page.src}
              className="adc-stage-frame"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: .45 }}
            >
              <Image
                src={page.src}
                alt={`${page.label} full page`}
                fill
                quality={85}
                priority={pageIndex === 0}
                sizes="(max-width: 809px) 76vw, 860px"
                className={
                  reduceMotion
                    ? "object-cover object-top"
                    : "adc-page-scroll-image"
                }
                style={
                  reduceMotion
                    ? undefined
                    : { animationDuration: `${scrollMs}ms` }
                }
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="adc-page-controls" aria-label="Choose landing page">
        {pillarOnePages.map((item, index) => (
          <button
            type="button"
            className={index === pageIndex ? "is-active" : ""}
            onClick={() => setPageIndex(index)}
            key={item.src}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

const palette = [
  { name: "Core blue", hex: "#165DFF" },
  { name: "Action blue", hex: "#074CDE" },
  { name: "Deep blue", hex: "#002B79" },
  { name: "Ink", hex: "#07111E" },
  { name: "Signal orange", hex: "#FF934F" },
]

const customIcons = [
  "foundations",
  "insight",
  "expedition",
  "blueprint",
  "pinnacle",
  "breakthrough",
  "momentum",
  "perspective",
  "ascend",
  "focus",
]

const adcLearnings = [
  "The strongest design systems encode business strategy, not only visual consistency. Reusable course structures were as important as colour and components.",
  "Engagement is useful when it helps people make a better next decision. Every progress signal needed to point learners toward action.",
  "Large ecosystems become clearer when each audience gets a focused surface and the shared logic stays underneath.",
]

const adcResults = [
  "One connected product vision spanning acquisition, learning, career growth, enterprise, and operations",
  "A reusable course-marketing system designed to scale beyond 50 programmes",
  "A differentiated learning experience built around momentum rather than passive content consumption",
  "Dedicated enterprise and back-office products that make the platform commercially and operationally scalable",
]

const buttonFamilies = [
  { name: "Primary", className: "adc-matrix-primary" },
  { name: "Secondary", className: "adc-matrix-secondary" },
  { name: "Borderless", className: "adc-matrix-borderless" },
  { name: "Bordered", className: "adc-matrix-bordered" },
  { name: "Link", className: "adc-matrix-link" },
]

const buttonStates = ["Default", "Hover", "Focus", "Active", "Disabled"]

function VisualSystem() {
  return (
    <section className="adc-system">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="adc-system-intro">
          <span>Project-specific design system</span>
          <h2 className="font-display">The system before the screens.</h2>
          <p className="font-editorial">A custom ecosystem needed more than a polished interface. It needed visual rules and product components strong enough to stay coherent across every learner, enterprise, and operations surface.</p>
        </ScrollReveal>
        <div className="adc-system-grid">
          <ScrollReveal className="adc-system-card-wide">
            <article className="adc-system-card adc-palette-card">
              <div className="adc-system-copy">
                <span>Colour foundation</span>
                <p>Blue creates trust and precision across learning and operations. Orange is reserved for momentum, emphasis, and the moments that ask learners to act.</p>
              </div>
              <div className="adc-palette-grid">
                {palette.map((colour) => (
                  <div className="adc-swatch" key={colour.hex}>
                    <div style={{ backgroundColor: colour.hex }} />
                    <strong>{colour.name}</strong>
                    <span>{colour.hex}</span>
                  </div>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="adc-system-card adc-type-card">
              <div className="adc-system-copy">
                <span>Typography</span>
              </div>
              <div className="adc-type-showcase">
                <div className="adc-type-family">
                  <span>Eina 04 / Headings</span>
                  <strong className="adc-eina adc-weight-regular">Regular</strong>
                  <strong className="adc-eina adc-weight-semibold">Semibold</strong>
                  <strong className="adc-eina adc-weight-bold">Bold</strong>
                </div>
                <div className="adc-type-family">
                  <span>Poppins / Body & labels</span>
                  <strong className="adc-poppins adc-weight-regular">Regular</strong>
                  <strong className="adc-poppins adc-weight-semibold">Semibold</strong>
                  <strong className="adc-poppins adc-weight-bold">Bold</strong>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={.05}>
            <article className="adc-system-card adc-button-card">
              <div className="adc-system-copy">
                <span>Interaction states</span>
              </div>
              <div className="adc-button-matrix">
                <div className="adc-button-matrix-head">{buttonFamilies.map((family) => <span key={family.name}>{family.name}</span>)}</div>
                {buttonStates.map((state) => (
                  <div className="adc-button-matrix-row" key={state}>
                    {buttonFamilies.map((family) => (
                      <button
                        type="button"
                        className={`adc-matrix-button ${family.className} is-${state.toLowerCase()}`}
                        disabled={state === "Disabled"}
                        key={family.name}
                      >
                        Button Text
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal className="adc-system-card-wide">
            <article className="adc-system-card adc-icons-card">
              <div className="adc-system-copy">
                <span>Custom assets</span>
                <p>Individually crafted geometric symbols make abstract ideas such as discovery, focus, growth, synthesis, and mastery recognisable across the product.</p>
              </div>
              <div className="adc-icon-grid">
                {customIcons.map((icon) => (
                  <div className="adc-icon-tile" key={icon}>
                    <Image src={`/projects/agile-digital-college/icons/${icon}.png`} alt="" width={65} height={65} />
                    <span>{icon}</span>
                  </div>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function AdcClosingSections() {
  return (
    <>
      <section className="adc-learnings">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="adc-closing-heading">
            <span>What I would carry forward</span>
            <h2 className="font-display">The work changed how I design.</h2>
          </ScrollReveal>
          <div className="adc-learning-grid">
            {adcLearnings.map((learning, index) => (
              <ScrollReveal key={learning} delay={index * .05}>
                <article><span>0{index + 1}</span><p>{learning}</p></article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="adc-outcomes">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="adc-closing-heading adc-outcomes-heading">
            <span>Outcome</span>
            <h2 className="font-display"><span>What changed because</span><span>of the work.</span></h2>
          </ScrollReveal>
        </div>
        <div className="adc-outcome-rail">
          {adcResults.map((result, index) => (
            <article key={result}>
              <span>0{index + 1}</span>
              <p>{result}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default function AgileDigitalCollegeSections() {
  return (
    <>
      <VisualSystem />
      <section className="adc-story">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="adc-story-intro">
            <span>One ecosystem, five connected pillars</span>
            <h2 className="font-display"><span>Designed as an engine.</span><span>Not a collection of screens.</span></h2>
            <p className="font-editorial">The experience had to sell learning, deliver it, connect it to career growth, serve enterprise clients, and give ADC control over the entire operation.</p>
          </ScrollReveal>
        </div>
        <div className="adc-pillar-list">
          {pillars.map((pillar, index) => (
            <article className={`adc-pillar adc-pillar-${index + 1}`} key={pillar.numeral}>
              <div className="max-w-[1200px] mx-auto">
                <ScrollReveal className="adc-pillar-copy">
                  <div className="adc-pillar-heading">
                    <div className="adc-pillar-number">{pillar.numeral}</div>
                    <div>
                      <span>{pillar.eyebrow}</span>
                      <h3>{pillar.title}</h3>
                    </div>
                  </div>
                  <div className="adc-pillar-detail">
                    <p>{pillar.intro}</p>
                    <ul>
                      {pillar.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={.08}>
                  {index === 0 ? <FullPageStage /> : <RotatingStage images={pillar.images} mode={pillar.mode} />}
                </ScrollReveal>
              </div>
            </article>
          ))}
        </div>
      </section>
      <AdcClosingSections />
    </>
  )
}
