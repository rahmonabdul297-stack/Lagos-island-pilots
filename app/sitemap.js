import { navLinks } from "@/lib/site";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Map over your site navigation links
  const routes = navLinks.map((link) => ({
    url: `${baseUrl}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: link.href === "/" ? 1.0 : 0.8,
  }));

  return routes;
}