import ScrollReveal from "@/components/ui/ScrollReveal"

export default function ContactCTA() {
  return (
    <section
      style={{
        background: "#003D6B",
        padding: "120px 0 0",
      }}
    >
      <div
        className="max-w-[1400px] mx-auto text-center"
        style={{ padding: "0 40px 120px" }}
      >
        <ScrollReveal className="flex flex-col items-center gap-8">
          {/* Label */}
          <span
            className="font-code text-purple-light/70 uppercase tracking-[0.25em]"
            style={{ fontSize: 11 }}
          >
            Let&apos;s Build Together
          </span>

          {/* Heading */}
          <h2
            className="font-display text-white leading-[0.95]"
            style={{ fontSize: "clamp(48px, 7vw, 112px)", maxWidth: 900 }}
          >
            Got a project
            <br />
            in mind?
          </h2>

          {/* Sub */}
          <p
            className="font-editorial text-white/60 leading-relaxed"
            style={{ fontSize: "clamp(16px, 1.3vw, 20px)", maxWidth: 520 }}
          >
            Whether you&apos;re starting from scratch or need to level up your
            existing platform — I&apos;d love to hear from you.
          </p>

          {/* CTA */}
          <a
            href="mailto:go4utech@gmail.com"
            className="font-ui font-semibold text-purple-dark bg-white rounded-pill hover:bg-lavender transition-colors duration-200 mt-4"
            style={{ padding: "16px 40px", fontSize: 16 }}
          >
            Get in Touch
          </a>

        </ScrollReveal>
      </div>
    </section>
  )
}
