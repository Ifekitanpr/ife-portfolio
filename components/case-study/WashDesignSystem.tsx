import ScrollReveal from "@/components/ui/ScrollReveal"

const colors = [
  { name: "Primary", hex: "#1941B3", note: "Trust and action" },
  { name: "Secondary", hex: "#0D9C35", note: "Care and completion" },
  { name: "Ink", hex: "#1F1F1F", note: "Clear hierarchy" },
  { name: "Canvas", hex: "#F9FBFF", note: "Calm service space" },
]

const services = ["Everyday wash", "Dry cleaning", "EleganceHub", "Shoe & bag care", "LaundryXpress"]

export default function WashDesignSystem() {
  return (
    <section className="wash-system">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="wash-system-intro">
          <div>
            <span>Signature system</span>
            <h2 className="font-display">One language.<br />Five services.</h2>
          </div>
          <p className="font-editorial">
            The system needed enough consistency to feel effortless, and enough flexibility for everyday laundry, luxury care, restoration, and self-service to remain distinct.
          </p>
        </ScrollReveal>

        <div className="wash-system-grid">
          <ScrollReveal className="wash-system-colors">
            <span className="wash-system-label">Colour roles</span>
            <div className="wash-color-grid">
              {colors.map((color) => (
                <div className="wash-color" key={color.name} style={{ backgroundColor: color.hex, color: color.name === "Canvas" ? "#1F1F1F" : "#fff" }}>
                  <strong>{color.name}</strong>
                  <small>{color.hex}<br />{color.note}</small>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="wash-system-components" delay={.08}>
            <span className="wash-system-label">Shared interaction grammar</span>
            <div className="wash-component-preview">
              <div className="wash-preview-header"><span>Schedule care</span><span>02 / 04</span></div>
              <div className="wash-preview-field">Pickup address <strong>Home</strong></div>
              <div className="wash-preview-field">Preferred time <strong>Tomorrow, 10:00</strong></div>
              <button>Continue</button>
            </div>
            <div className="wash-service-pills">
              {services.map((service) => <span key={service}>{service}</span>)}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
