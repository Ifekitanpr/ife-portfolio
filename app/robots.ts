import { MetadataRoute } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ifeoluwaemmanuel.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/booknest", "/ecopulse", "/vividlyrics", "/healthmate"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
