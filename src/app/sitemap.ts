import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/hospices",
    "/hospices/anuradhapura",
    "/hospices/saku-nikethana-karapitiya",
    "/home-based-palliative-care",
    "/gallery",
    "/what-we-do",
    "/donate",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-10-19"),
    changeFrequency: route === "" || route === "/donate" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/donate" || route === "/hospices" ? 0.9 : 0.8,
  }));
}
