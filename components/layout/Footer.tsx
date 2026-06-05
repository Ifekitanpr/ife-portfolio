import Link from "next/link"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ifeoluwa-ajele/" },
  { label: "Instagram", href: "https://www.instagram.com/heyitsife_/" },
  { label: "Facebook", href: "https://web.facebook.com/ajele.ifeoluwa/" },
  { label: "Twitter [X]", href: "https://x.com/heyitsife_" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-purple-dark text-lavender font-editorial">
      <div className="max-w-[1200px] mx-auto" style={{ padding: "96px 0 80px" }}>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h3 className="font-display uppercase border-y border-purple-light py-5" style={{ fontSize: 18 }}>Get in Touch</h3>
            <div className="flex flex-col gap-5 pt-10">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-purple-light">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display uppercase border-y border-purple-light py-5" style={{ fontSize: 18 }}>Explore</h3>
            <div className="flex flex-col gap-5 pt-10">
              <Link href="/#home">Home</Link><Link href="/#work">Work</Link><Link href="/#about">About</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-light mt-20 pt-6 flex justify-between gap-8">
          <span>Ifeoluwa Emmanuel © 2026 All rights reserved</span>
          <a href="mailto:iphekitan@gmail.com">iphekitan@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
