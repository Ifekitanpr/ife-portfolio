import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"

const photos = [
  "/life/ife-photo-booth.jpg",
  "/life/speaking.jpg",
  "/life/gaming.jpg",
]

function Photo({ src, className = "", sizes }: { src: string; className?: string; sizes: string }) {
  return (
    <div className={`life-image relative overflow-hidden rounded-[8px] ${className}`}>
      <Image src={src} alt="Life outside work" fill sizes={sizes} className="life-image-inner object-cover" unoptimized />
    </div>
  )
}

export default function LifeOutsideWork() {
  return (
    <section className="life-section bg-white" style={{ padding: "0 0 280px" }}>
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-purple-dark leading-none" style={{ fontSize: "clamp(64px, 6vw, 88px)" }}>
            Life Outside Work
          </h2>
        </ScrollReveal>

        <div className="life-gallery mt-24">
          <ScrollReveal className="life-gallery-main">
            <Photo src={photos[0]} className="h-full min-h-[350px]" sizes="66vw" />
          </ScrollReveal>
          <div className="life-gallery-side">
            <ScrollReveal delay={.08}><Photo src={photos[1]} className="aspect-square" sizes="33vw" /></ScrollReveal>
            <ScrollReveal delay={.14}><Photo src={photos[2]} className="aspect-square" sizes="33vw" /></ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
