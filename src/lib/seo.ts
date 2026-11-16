import type { Crumb } from "@/components/ui/breadcrumb";
import { business } from "@/content/business";
import type { FaqItem } from "@/content/faq";

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL once the domain is chosen (docs/GUIDE.md, step 9);
 * until then sitemap and canonical URLs point at localhost.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const absoluteUrl = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

/** schema.org LocalBusiness for the whole site. Placeholder facts stay placeholders until confirmed. */
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.legalName,
    url: siteUrl,
    telephone: `+1${business.phone.digits}`,
    description: business.blurb,
    areaServed: business.serviceArea,
    paymentAccepted: business.paymentMethods.join(", "),
  };
}

/** schema.org BreadcrumbList from the page's crumbs (the last one is the current page). */
export function breadcrumbLd(crumbs: Crumb[], currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href ?? currentPath),
    })),
  };
}

/** schema.org FAQPage from the page's FAQ. */
export function faqLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
