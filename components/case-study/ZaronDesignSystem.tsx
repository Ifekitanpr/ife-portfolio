import ScrollReveal from "@/components/ui/ScrollReveal"

/* ── Zaron brand tokens ── */
const COLORS = [
  { name: "Primary",  hex: "#0B0709", label: "Near Black",  textLight: true  },
  { name: "Gray",     hex: "#E7E6E6", label: "Neutral Gray", textLight: false },
  { name: "Accent",   hex: "#C09271", label: "Warm Camel",  textLight: true  },
]

/* ── Icon set — SVG paths matching Zaron Figma ── */
const icons = [
  { label: "Bag",      d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" },
  { label: "Minus",    d: "M5 12h14" },
  { label: "Plus",     d: "M12 5v14M5 12h14" },
  { label: "Close",    d: "M18 6 6 18M6 6l12 12" },
  { label: "Eye",      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { label: "Store",    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" },
  { label: "Upload",   d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" },
  { label: "Chat",     d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
  { label: "Chevron",  d: "M6 9l6 6 6-6" },
  { label: "Send",     d: "M22 2 11 13M22 2 15 22 11 13 2 9l20-7z" },
  { label: "Search",   d: "M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM21 21l-4.35-4.35" },
  { label: "Arrow",    d: "M5 12h14M12 5l7 7-7 7" },
  { label: "Delivery", d: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
  { label: "Check",    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" },
  { label: "Users",    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
]

const typeSamples = [
  { weight: 300, label: "Light" },
  { weight: 400, label: "Regular" },
  { weight: 600, label: "Semibold" },
  { weight: 700, label: "Bold" },
]

function Icon({ d, label }: { d: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2" title={label}>
      <svg
        width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <path d={d} />
      </svg>
      <span style={{ fontSize: 9, opacity: 0.5, letterSpacing: "0.08em" }}>{label}</span>
    </div>
  )
}

export default function ZaronDesignSystem() {
  return (
    <section
      style={{ backgroundColor: "#001a33", color: "#fff", padding: "96px 0 112px" }}
    >
      <div className="max-w-[1200px] mx-auto" style={{ padding: "0 40px" }}>

        {/* ── Header ── */}
        <ScrollReveal className="mb-16">
          <span
            className="font-editorial block mb-3"
            style={{ fontSize: 13, color: "#00A4FF", letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            Design Language
          </span>
          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(38px, 4vw, 56px)", color: "#fff" }}
          >
            Design System
          </h2>
        </ScrollReveal>

        {/* ── Colour Palette ── */}
        <ScrollReveal className="mb-24">
          <p className="font-editorial mb-8" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.45 }}>
            Colour Palette
          </p>
          <div className="grid grid-cols-3 gap-4">
            {COLORS.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-[10px]" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                {/* Swatch */}
                <div style={{ backgroundColor: c.hex, height: 120 }} />
                {/* Label */}
                <div style={{ padding: "16px 20px", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <p className="font-editorial font-bold" style={{ fontSize: 15, color: "#fff" }}>{c.name}</p>
                  <p className="font-code" style={{ fontSize: 11, color: "#00A4FF", marginTop: 4 }}>{c.hex}</p>
                  <p className="font-editorial" style={{ fontSize: 12, opacity: 0.4, marginTop: 2 }}>{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Iconography + Typography ── */}
        <div className="grid gap-20" style={{ gridTemplateColumns: "1fr 1.3fr", marginBottom: 80 }}>

          {/* Icons */}
          <ScrollReveal>
            <p className="font-editorial mb-8" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.45 }}>
              Iconography
            </p>
            <div
              className="rounded-[10px] grid"
              style={{
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "24px 16px",
                padding: "32px 28px",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {icons.map((icon) => (
                <Icon key={icon.label} d={icon.d} label={icon.label} />
              ))}
            </div>
          </ScrollReveal>

          {/* Typography */}
          <ScrollReveal delay={0.08}>
            <p className="font-editorial mb-8" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.45 }}>
              Typography — Montserrat
            </p>
            <div className="flex flex-col gap-5">
              {typeSamples.map(({ weight, label }) => (
                <div key={weight}>
                  <p
                    style={{
                      fontFamily: "'Montserrat', 'DM Sans', sans-serif",
                      fontWeight: weight,
                      fontSize: "clamp(16px, 2vw, 24px)",
                      color: "#fff",
                      lineHeight: 1.2,
                    }}
                  >
                    Beauty Without Compromise
                  </p>
                  <span className="font-code" style={{ fontSize: 10, color: "#00A4FF", opacity: 0.7, letterSpacing: "0.12em" }}>
                    {label} / {weight}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── UI Components ── */}
        <ScrollReveal>
          <p className="font-editorial mb-8" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.45 }}>
            UI Components
          </p>
        </ScrollReveal>

        <div className="grid gap-8" style={{ gridTemplateColumns: "1fr 1fr" }}>

          {/* Buttons */}
          <ScrollReveal>
            <div
              className="rounded-[10px] flex flex-col gap-6"
              style={{ padding: "32px 28px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-editorial" style={{ fontSize: 12, opacity: 0.45, letterSpacing: "0.1em", textTransform: "uppercase" }}>Buttons</span>

              {/* Primary */}
              <div className="flex flex-col gap-2">
                <span className="font-editorial" style={{ fontSize: 11, opacity: 0.4 }}>Primary</span>
                <button
                  style={{
                    backgroundColor: "#0B0709", color: "#fff",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: 6, padding: "12px 28px",
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14,
                    cursor: "default", width: "100%",
                  }}
                >
                  Goto Basket
                </button>
              </div>

              {/* Secondary */}
              <div className="flex flex-col gap-2">
                <span className="font-editorial" style={{ fontSize: 11, opacity: 0.4 }}>Secondary</span>
                <button
                  style={{
                    backgroundColor: "transparent", color: "#fff",
                    border: "1px solid rgba(255,255,255,0.55)",
                    borderRadius: 6, padding: "12px 28px",
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 14,
                    cursor: "default", width: "100%",
                  }}
                >
                  Goto Basket
                </button>
              </div>

              {/* Disabled */}
              <div className="flex flex-col gap-2">
                <span className="font-editorial" style={{ fontSize: 11, opacity: 0.4 }}>Disabled</span>
                <button
                  disabled
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 6, padding: "12px 28px",
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 14,
                    cursor: "not-allowed", width: "100%",
                  }}
                >
                  Goto Basket
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Inputs */}
          <ScrollReveal delay={0.08}>
            <div
              className="rounded-[10px] flex flex-col gap-6"
              style={{ padding: "32px 28px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="font-editorial" style={{ fontSize: 12, opacity: 0.45, letterSpacing: "0.1em", textTransform: "uppercase" }}>Input Fields</span>

              {/* Default */}
              <div className="flex flex-col gap-2">
                <span className="font-editorial" style={{ fontSize: 11, opacity: 0.4 }}>Default</span>
                <div
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: 6,
                    padding: "10px 14px", display: "flex", alignItems: "center", gap: 6,
                  }}
                >
                  <span className="font-editorial" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Typing |</span>
                </div>
              </div>

              {/* Error */}
              <div className="flex flex-col gap-2">
                <span className="font-editorial" style={{ fontSize: 11, opacity: 0.4 }}>Error</span>
                <div
                  style={{
                    border: "1.5px solid #ff6b6b", borderRadius: 6,
                    padding: "10px 14px", backgroundColor: "rgba(255,107,107,0.06)",
                  }}
                >
                  <span className="font-editorial" style={{ fontSize: 14, color: "#fff" }}>Error</span>
                </div>
                <span className="font-editorial" style={{ fontSize: 12, color: "#ff6b6b", opacity: 0.9 }}>Something went wrong.</span>
              </div>

              {/* Filled */}
              <div className="flex flex-col gap-2">
                <span className="font-editorial" style={{ fontSize: 11, opacity: 0.4 }}>Filled</span>
                <div
                  style={{
                    border: "1.5px solid #C09271", borderRadius: 6,
                    padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between",
                    backgroundColor: "rgba(192,146,113,0.08)",
                  }}
                >
                  <span className="font-editorial" style={{ fontSize: 14, color: "#fff" }}>Filled</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C09271" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
