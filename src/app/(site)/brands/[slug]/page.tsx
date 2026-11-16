import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { BrandTiles } from "@/components/sections/brand-tiles";
import { CommonProblems } from "@/components/sections/common-problems";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HowItWorksShort } from "@/components/sections/how-it-works-short";
import { ApplianceArt, PageHero } from "@/components/sections/page-hero";
import { ReviewsSection } from "@/components/sections/reviews-section";
import type { Crumb } from "@/components/ui/breadcrumb";
import { brandBySlug, brandHref, brands } from "@/content/brands";
import { business } from "@/content/business";
import { breadcrumbLd, faqLd } from "@/lib/seo";

/** Brand page: canvas artboard GE (+ Mobile). */

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: PageProps<"/brands/[slug]">): Promise<Metadata> {
  const brand = brandBySlug((await params).slug);
  if (!brand) return {};
  return {
    title: `${brand.name} appliance repair in ${business.city}`,
    description: brand.intro,
    alternates: { canonical: brandHref(brand.slug) },
  };
}

export default async function BrandPage({ params }: PageProps<"/brands/[slug]">) {
  const brand = brandBySlug((await params).slug);
  if (!brand) notFound();
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: `${brand.name} appliance repair` }];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs, brandHref(brand.slug)), faqLd(brand.faq)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow={`Brand · ${brand.name}`}
        title={
          <>
            {brand.name} appliance repair
            <br />
            in {business.city}.
          </>
        }
        intro={brand.intro}
        aside={<ApplianceArt appliance="oven" fromPrice={brand.fromPrice} chip={brand.lines.slice(0, 3).join(", ")} />}
      />
      <CommonProblems
        eyebrow={`Most common ${brand.name} repairs`}
        title={`What I fix on ${brand.name}, most often.`}
        rows={brand.commonRepairs}
      />
      <BrandTiles
        eyebrow={`${brand.name} lines`}
        title={`The ${brand.name} lines I service.`}
        lead={brand.linesNote}
        names={brand.lines}
        note={`${business.legalName} is an independent repair service, not affiliated with or endorsed by ${brand.name}.`}
      />
      <HowItWorksShort />
      <ReviewsSection count={2} />
      <FaqSection items={brand.faq} showIntro={false} />
      <ContactSection />
    </>
  );
}
