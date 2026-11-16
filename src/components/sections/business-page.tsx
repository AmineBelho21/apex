import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import type { Crumb } from "@/components/ui/breadcrumb";
import { businessPage, type BusinessPage } from "@/content/business-pages";
import { breadcrumbLd } from "@/lib/seo";
import { BusinessFormSection, QuoteBand, ReasonsSection, StatusUpdates } from "./business-sections";
import { PageHero } from "./page-hero";

/** Shared template of the three business pages (canvas: Landlords, RealEstate, Priority). */
export function businessMetadata(slug: BusinessPage["slug"]): Metadata {
  const page = businessPage(slug);
  return { title: page.title.replace(/\.$/, ""), description: page.intro, alternates: { canonical: page.href } };
}

export function BusinessPageView({ slug }: { slug: BusinessPage["slug"] }) {
  const page = businessPage(slug);
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: page.shortName }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs, page.href)} />
      <PageHero
        crumbs={crumbs}
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        actions={false}
        aside={<StatusUpdates />}
      />
      <ReasonsSection page={page} />
      <QuoteBand />
      <BusinessFormSection page={page} />
    </>
  );
}
