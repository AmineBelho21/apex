import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { AreaMapCard } from "@/components/sections/areas-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import type { Crumb } from "@/components/ui/breadcrumb";
import { ButtonLink } from "@/components/ui/button";
import { smsHref } from "@/content/business";
import { areaBySlug, areaFaq, areaHref, featuredAreas } from "@/content/areas";
import { breadcrumbLd, faqLd } from "@/lib/seo";

/** Service-area page: canvas artboards Fishtown, Ardmore, … (+ Mobile). */

export function generateStaticParams() {
  return featuredAreas.map((area) => ({ slug: area.slug! }));
}

export async function generateMetadata({ params }: PageProps<"/areas/[slug]">): Promise<Metadata> {
  const found = areaBySlug((await params).slug);
  if (!found) return {};
  return {
    title: `Appliance repair in ${found.area.name}`,
    description: `${found.area.intro ?? ""} Same-week, often same-day appliance repair in ${found.area.name}.`.trim(),
    alternates: { canonical: areaHref(found.area.slug!) },
  };
}

const chip = "inline-flex h-11 items-center rounded-full bg-sand px-4 text-15";

export default async function AreaPage({ params }: PageProps<"/areas/[slug]">) {
  const found = areaBySlug((await params).slug);
  if (!found) notFound();
  const { area, group } = found;
  const nearby = group.areas.filter((other) => other.name !== area.name);
  const faq = areaFaq(area, group);
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: area.name }];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs, areaHref(area.slug!)), faqLd(faq)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow={`Service area · ${area.name}`}
        title={
          <>
            Appliance repair
            <br />
            in {area.name}.
          </>
        }
        intro={`${area.intro ?? ""} Same-week, often same-day, from the shop.`.trim()}
        aside={<AreaMapCard />}
      />
      <ServicesGrid
        eyebrow={`What I fix in ${area.name}`}
        lead={null}
        asideCard={{
          title: `In ${area.name} this week?`,
          text: "Text me the appliance and the symptom. I confirm a window, usually within the hour.",
          action: (
            <ButtonLink href={smsHref} variant="secondary" fullWidth>
              <MessageIcon size={18} />
              Text me what’s wrong
            </ButtonLink>
          ),
        }}
        footer={
          nearby.length ? (
            <div className="reveal flex flex-wrap items-center gap-2">
              <span className="mr-1.5 text-15 text-subtle">Also nearby</span>
              {nearby.map((other) =>
                other.slug ? (
                  <Link
                    key={other.name}
                    href={areaHref(other.slug)}
                    className={`${chip} transition-[scale] duration-(--dur-fast) ease-out hover:opacity-100 active:scale-[0.97] active:duration-(--dur-press)`}
                  >
                    {other.name}
                  </Link>
                ) : (
                  <span key={other.name} className={chip}>
                    {other.name}
                  </span>
                ),
              )}
            </div>
          ) : null
        }
      />
      <ReviewsSection count={2} />
      <FaqSection items={faq} showIntro={false} />
      <ContactSection title={`Tell me what’s going on in ${area.name}.`} area={area.name} />
    </>
  );
}
