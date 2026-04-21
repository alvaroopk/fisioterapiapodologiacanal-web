import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
    { path: "/equipo", priority: 0.8, changeFrequency: "yearly" },
    { path: "/tarifas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.9, changeFrequency: "yearly" },
  ];
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
