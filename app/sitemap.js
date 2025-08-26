import { program } from "../data/program";
export default function sitemap(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const staticRoutes = ["/", "/landing", "/learn", "/dashboard", "/faq", "/contact", "/legal/terms", "/legal/privacy"];
  const dynamic = program.map(d => `/learn/${d.day}`);
  return [...staticRoutes, ...dynamic].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7
  }));
}
