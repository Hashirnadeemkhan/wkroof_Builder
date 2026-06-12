import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

// Canonical domain — www version, GSC property ke saath consistent.
const SITE_URL = "https://www.wkroofbuild.com";

// Har request par fresh sitemap (naye blog posts foran aa jayein).
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static routes — site ke fixed pages.
  const staticRoutes = [
    "",
    "/about",
    "/gallery",
    "/blog",
    "/contact",
    "/services",
    "/services/roofing",
    "/services/new-roofs",
    "/services/flat-roofs",
    "/services/roof-repair",
    "/services/chimney-repair",
    "/services/guttering",
    "/services/painting",
    "/services/tiling",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  // Dynamic blog posts — DB se nikaalte hain. DB down ho to sitemap fail na ho.
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({
      select: { slug: true, updatedAt: true },
    });
    blogRoutes = posts.map((post) => ({
      url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    blogRoutes = [];
  }

  return [...staticRoutes, ...blogRoutes];
}
