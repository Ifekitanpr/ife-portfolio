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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ifeoluwaemmanuel.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ifeoluwa Emmanuel — UI/UX & Product Designer",
    template: "%s | Ifeoluwa Emmanuel",
  },
  description:
    "UI/UX and product designer with proven experience across fintech, ed-tech, and consumer apps. Available for full-time, contract, and freelance roles. Remote, GMT+1.",
  keywords: [
    "UI/UX designer",
    "product designer",
    "UX designer portfolio",
    "Figma designer",
    "Framer developer",
    "fintech UI designer",
    "mobile app designer",
    "ed-tech designer",
    "Ifeoluwa Emmanuel",
  ],
  authors: [{ name: "Ifeoluwa Emmanuel", url: BASE_URL }],
  creator: "Ifeoluwa Emmanuel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Ifeoluwa Emmanuel",
    title: "Ifeoluwa Emmanuel — UI/UX & Product Designer",
    description:
      "UI/UX and product designer with experience across fintech, ed-tech, and consumer apps. Available for full-time, contract, and freelance roles.",
    images: [
      {
        url: "/ifeoluwa-portrait.jpg",
        width: 1200,
        height: 800,
        alt: "Ifeoluwa Emmanuel — UI/UX & Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifeoluwa Emmanuel — UI/UX & Product Designer",
    description:
      "UI/UX and product designer with experience across fintech, ed-tech, and consumer apps.",
    creator: "@heyitsife_",
    images: ["/ifeoluwa-portrait.jpg"],
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ifeoluwa Emmanuel",
              jobTitle: "UI/UX Designer",
              description:
                "UI/UX and product designer with experience across fintech, ed-tech, and consumer apps. Available for full-time, contract, and freelance roles.",
              url: BASE_URL,
              image: `${BASE_URL}/ifeoluwa-portrait.jpg`,
              email: "go4utech@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/ifeoluwa-ajele/",
                "https://www.instagram.com/heyitsife_/",
                "https://x.com/heyitsife_",
                "https://web.facebook.com/ajele.ifeoluwa/",
              ],
              knowsAbout: [
                "UI/UX Design",
                "Product Design",
                "Interaction Design",
                "Design Systems",
                "Framer Development",
                "Figma",
                "Fintech Design",
                "Ed-tech Design",
                "Mobile App Design",
              ],
            }),
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
