import type { MetadataRoute } from "next";

import { blogPosts, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/contact", "/blog"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    }),
  );

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
