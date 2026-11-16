import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { RatingCard } from "@/components/sections/rating-card";
import { ReviewsBrowser } from "@/components/sections/reviews-browser";
import type { Crumb } from "@/components/ui/breadcrumb";
import { business } from "@/content/business";
import { breadcrumbLd } from "@/lib/seo";

/** Reviews: canvas artboards Reviews, ReviewsMobile. */

export const metadata: Metadata = {
  title: "Reviews",
  description: `Google reviews from people ${business.legalName} fixed something for.`,
  alternates: { canonical: "/reviews" },
};

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Reviews" }];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs, "/reviews")} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Reviews"
        title={
          <>
            {business.reviews.count} reviews.
            <br />
            Real neighbors.
          </>
        }
        intro="Every review comes from Google, from people I actually fixed something for. I read all of them."
        actions={false}
        narrowAside
        aside={<RatingCard className="bg-white!" />}
      />
      <ReviewsBrowser />
      <CtaBand
        title={
          <>
            Join the neighbors
            <br />
            who got it fixed.
          </>
        }
        text={`Same-week, often same-day. ${business.pricing.diagnostic} diagnostic, credited to the repair.`}
      />
    </>
  );
}
