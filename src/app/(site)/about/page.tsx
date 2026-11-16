import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/sections/page-hero";
import type { Crumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/heading";
import { business } from "@/content/business";
import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";
import { breadcrumbLd } from "@/lib/seo";

/** About the owner: canvas artboards About, AboutMobile. */

export const metadata: Metadata = {
  title: "About the owner",
  description: `One owner on every job. Why ${business.legalName} works the way it does.`,
  alternates: { canonical: "/about" },
};

const { pricing, warranty, reviews, license, shop } = business;

const principles = [
  {
    title: "I pick up the phone.",
    text: "You text or call me, not a dispatcher. The person you book with is the person who shows up.",
  },
  {
    title: "The price is the price.",
    text: `${pricing.diagnostic} to diagnose, credited to the repair. You get the exact number before I touch anything.`,
  },
  {
    title: "I’ll tell you when not to fix it.",
    text: "If the machine is finished, I say so, even when it costs me the job.",
  },
  { title: "It stays fixed.", text: `Every repair is backed ${warranty.span}. Same issue comes back, so do I.` },
];

const facts = [
  { figure: reviews.rating, text: `Stars from ${reviews.count} Google reviews.`, accent: true },
  { figure: license.refrigerant, text: "Certified for refrigerant work." },
  { figure: license.state, text: `Licensed in ${license.stateName}.` },
  { figure: shop.street, text: `The shop, in ${shop.area}.` },
];

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "About the owner" }];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs, "/about")} />
      <PageHero
        crumbs={crumbs}
        eyebrow={`Owner-operated · ${business.city}`}
        title={
          <>
            One owner.
            <br />
            Every job.
          </>
        }
        intro={`I’m ${business.ownerFullName}. I started ${business.legalName} because I was tired of hearing the same stories: call centers, no-shows, and a price at the door that wasn’t the price on the phone.`}
        actions={false}
        aside={
          // PLACEHOLDER until the owner's portrait exists.
          <div className="squircle flex h-[320px] items-center justify-center rounded-card-sm border border-dashed border-on-ink-muted bg-[#E9E4DA] p-5 text-center text-15 text-subtle lg:h-[520px] lg:rounded-[32px]">
            [PHOTO: portrait of the owner]
          </div>
        }
      />

      <section className="px-page flex flex-col gap-6 pt-16 lg:gap-10 lg:pt-[120px]">
        <SectionHeading className="reveal" eyebrow="How I work" title="Four things I don’t compromise on." />
        <ol className="border-b border-line">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              style={stagger(index)}
              className="reveal grid gap-2 border-t border-line py-6 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.2fr)] lg:items-baseline lg:gap-6 lg:py-8"
            >
              <span className="text-14 text-subtle">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-22 font-medium tracking-[-0.02em] lg:text-[28px]">{principle.title}</span>
              <span className="text-16 leading-normal text-muted lg:text-18">{principle.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="In numbers" className="px-page pt-16 lg:pt-[120px]">
        <ul className="grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-4">
          {facts.map((fact, index) => (
            <li
              key={fact.text}
              style={stagger(index)}
              className="reveal squircle flex flex-col gap-2 rounded-tile bg-sand p-5 lg:rounded-panel-sm lg:p-8"
            >
              <span
                className={cn(
                  "text-[30px] font-medium tracking-[-0.03em] lg:text-[40px]",
                  fact.accent ? "text-accent" : "text-ink",
                )}
              >
                {fact.figure}
              </span>
              <span className="text-14 leading-normal text-muted lg:text-15">{fact.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <ContactSection />
    </>
  );
}
