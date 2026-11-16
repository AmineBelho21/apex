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
import { business } from "@/content/business";
import { serviceBySlug, services } from "@/content/services";
import { breadcrumbLd, faqLd } from "@/lib/seo";

/** Service page: canvas artboards Refrigerator / Washer / Dryer / Oven / Dishwasher (+ Mobile). */

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = serviceBySlug((await params).slug);
  if (!service) return {};
  return {
    title: `${service.name} repair in ${business.city}`,
    description: service.intro,
    alternates: { canonical: service.href },
  };
}

/** "Common problems, with upfront prices." → line break after the comma, as in the canvas. */
const breakAfterComma = (text: string) => {
  const [first, ...rest] = text.split(", ");
  return rest.length ? (
    <>
      {first},
      <br />
      {rest.join(", ")}
    </>
  ) : (
    text
  );
};

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = serviceBySlug((await params).slug);
  if (!service) notFound();

  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: `${service.name} repair` }];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs, service.href), faqLd(service.faq)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow={`${service.name} repair · ${business.city}`}
        title={
          <>
            {service.name} repair
            <br />
            in {business.city}.
          </>
        }
        intro={service.intro}
        aside={
          <ApplianceArt
            appliance={service.key}
            fromPrice={service.fromPrice}
            chip={`${business.license.refrigerant} certified`}
          />
        }
      />
      <CommonProblems
        eyebrow="What we fix"
        title={breakAfterComma(service.commonProblemsTitle)}
        lead={`Real numbers from past jobs. The ${business.pricing.diagnostic} diagnostic confirms the exact price and goes toward the repair.`}
        rows={service.commonProblems}
      />
      <BrandTiles
        eyebrow="Brands we service"
        title={service.brandsTitle}
        lead="If it’s a major brand, I fix it, and I bring the right parts."
        names={service.brands}
      />
      <HowItWorksShort />
      <ReviewsSection count={2} />
      <FaqSection items={service.faq} showIntro={false} />
      <ContactSection />
    </>
  );
}
