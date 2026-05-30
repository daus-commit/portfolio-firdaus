import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllBlogsMeta } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Main pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: `https://portfolio-firdaus-umber.vercel.app`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `https://portfolio-firdaus-umber.vercel.app/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `https://portfolio-firdaus-umber.vercel.app/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `https://portfolio-firdaus-umber.vercel.app/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `https://portfolio-firdaus-umber.vercel.app/contributions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/blogs`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    {
      url: `https://portfolio-firdaus-umber.vercel.app/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `https://portfolio-firdaus-umber.vercel.app/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Blog post pages — each gets its own sitemap entry with correct date
  const blogs = getAllBlogsMeta();
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `https://portfolio-firdaus-umber.vercel.app/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
