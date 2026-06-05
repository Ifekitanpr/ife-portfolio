import type { Metadata } from "next"
import { Anton, PT_Serif, DM_Sans, Inter, Fragment_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
})

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ifeoluwa Emmanuel — Designer + Framer Builder",
  description:
    "I help online coaches & course creators go from idea to launched platform — full UX/UI design + Framer build + AI.",
  openGraph: {
    title: "Ifeoluwa Emmanuel — Designer + Framer Builder",
    description:
      "Design + Framer + AI for online coaches and course creators.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${ptSerif.variable} ${dmSans.variable} ${inter.variable} ${fragmentMono.variable}`}
      suppressHydrationWarning
      style={{ colorScheme: "light" }}
    >
      <body className="bg-lavender text-purple-dark font-ui">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
