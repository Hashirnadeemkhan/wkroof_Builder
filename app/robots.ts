import type { MetadataRoute } from "next";

// Canonical domain — www version, GSC property aur sitemap ke saath consistent.
const SITE_URL = "https://www.wkroofbuild.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Admin aur API routes ko index hone se rokte hain.
      disallow: ["/admin", "/api"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
