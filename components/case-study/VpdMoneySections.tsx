"use client"

import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"

const competitors = [
  { name: "VPD Money", logo: "/projects/vpd-money/competitors/vpd-money.png" },
  { name: "Kuda",      logo: "/projects/vpd-money/competitors/kuda.png" },
  { name: "OPay",      logo: "/projects/vpd-money/competitors/opay.png" },
  { name: "Carbon",    logo: "/projects/vpd-money/competitors/carbon.png" },
  { name: "PalmPay",   logo: "/projects/vpd-money/competitors/palmpay.png" },
]

// true = has feature, false = doesn't
const features: { label: string; values: boolean[] }[] = [
  { label: "Customised Banking",         values: [true,  false, false, false, false] },
  { label: "AI Savings",                 values: [true,  true,  true,  true,  true ] },
  { label: "Borderless Transfer",        values: [true,  true,  false, false, false] },
  { label: "Digital / Offline Onboarding", values: [true, true, true,  true,  true ] },
  { label: "Bill Payments",              values: [true,  true,  true,  true,  true ] },
  { label: "Virtual / Physical Cards",   values: [true,  true,  true,  true,  false] },
  { label: "Lending & Loan Service",     values: [false, false, true,  true,  true ] },
  { label: "Scheduled Payment",          values: [true,  false, true,  false, false] },
  { label: "Free Local Transfer",        values: [true,  true,  false, true,  true ] },
  { label: "Cashback",                   values: [true,  false, false, false, true ] },
  { label: "Sub-Account / Multi-Currency", values: [true, false, false, false, false] },
]

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#22c55e" fillOpacity=".15" />
      <path d="M5 9l3 3 5-5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#f1f5f9" />
      <path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function BeforeAfter() {
  return (
    <section className="vpd-before-after">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="vpd-before-after-heading">
          <span>Before vs After</span>
          <h2 className="font-display">The home screen, redesigned.</h2>
          <p className="font-editorial">Version 1.4 buried the most-used actions inside a dense layout. The 2.0 redesign surfaced what users actually reach for first, clearing everything else out of the way.</p>
        </ScrollReveal>
        <div className="vpd-before-after-grid">
          <ScrollReveal>
            <div className="vpd-ba-card">
              <div className="vpd-ba-image-frame vpd-ba-before">
                <Image src="/projects/vpd-money/old-home.png" alt="VPD Money 1.4 old home screen" fill quality={92} sizes="(max-width: 809px) 100vw, 50vw" className="object-contain" unoptimized />
              </div>
              <div className="vpd-ba-label">
                <span className="vpd-ba-tag vpd-ba-tag-before">Before</span>
                <p>Version 1.4: generic balance view, 3 actions, sub-account buried below the fold</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="vpd-ba-card">
              <div className="vpd-ba-image-frame vpd-ba-after">
                <Image src="/projects/vpd-money/new-home.png" alt="VPD Money 2.0 redesigned home screen" fill quality={92} sizes="(max-width: 809px) 100vw, 50vw" className="object-contain" unoptimized />
              </div>
              <div className="vpd-ba-label">
                <span className="vpd-ba-tag vpd-ba-tag-after">After</span>
                <p>Version 2.0: personalised account identity, 4 actions, tabbed access to sub-accounts and analytics</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default function VpdMoneySections() {
  return (
    <>
      <BeforeAfter />
      <section className="vpd-competitor-section">
      <div className="max-w-[1200px] mx-auto">
        <div className="vpd-competitor-heading">
          <ScrollReveal>
            <span>Competitive landscape</span>
            <h2 className="font-display">Looking at the competition.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="font-editorial">Understanding where VPD Money could differentiate and where table stakes already existed shaped every prioritisation decision. <span className="vpd-research-date">Research conducted in 2023.</span></p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08}>
          <div className="vpd-competitor-table-wrapper">
            <table className="vpd-competitor-table">
              <thead>
                <tr>
                  <th className="vpd-feature-col">Features</th>
                  {competitors.map((c) => (
                    <th key={c.name} className="vpd-brand-col">
                      <div className="vpd-brand-logo">
                        <Image src={c.logo} alt={c.name} width={120} height={40} style={{ objectFit: "contain", maxHeight: 32 }} unoptimized />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((row) => (
                  <tr key={row.label}>
                    <td className="vpd-feature-label">{row.label}</td>
                    {row.values.map((has, i) => (
                      <td key={i} className="vpd-feature-cell">
                        {has ? <Check /> : <Cross />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </>
  )
}
