import type { MetadataRoute } from "next";
import { featuredAreas, areaHref } from "@/content/areas";
import { brandHref, brands } from "@/content/brands";
import { businessPages } from "@/content/business-pages";
import { problemHref, problems } from "@/content/problems";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

/** Every public, indexable page (Thanks and the 404 are left out). */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/reviews",
    "/faq",
    ...businessPages.map((page) => page.href),
    "/warranty",
    "/privacy",
    "/terms",
    ...services.map((service) => service.href),
    ...problems.map((problem) => problemHref(problem.slug)),
    ...featuredAreas.map((area) => areaHref(area.slug!)),
    ...brands.map((brand) => brandHref(brand.slug)),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path), priority: path === "/" ? 1 : 0.7 }));
}
