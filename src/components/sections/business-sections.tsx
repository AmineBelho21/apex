import Link from "next/link";
import { ApplianceIcon } from "@/components/appliance-icon";
import { SectionHeading } from "@/components/ui/heading";
import { business, telHref } from "@/content/business";
import { businessPages, type BusinessPage } from "@/content/business-pages";
import { businessQuote } from "@/content/reviews";
import type { ApplianceKey } from "@/content/services";
import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";
import { BusinessForm } from "./business-form";
import { RatingCard } from "./rating-card";
import { Stars } from "@/components/ui/stars";

const updates: { appliance: ApplianceKey; title: string; detail: string; status: string; tone: "ink" | "accent" | "sand" }[] = [
  { appliance: "dishwasher", title: "Unit 2B · Dishwasher", detail: "Access confirmed · Lockbox", status: "Tomorrow", tone: "ink" },
  { appliance: "dryer", title: "Unit 4 · Dryer not heating", detail: "Fixed · Invoice sent", status: "Done", tone: "accent" },
  { appliance: "refrigerator", title: "Rowhouse · Fridge", detail: "Part lands Thursday", status: "Waiting part", tone: "sand" },
];

/** Hero aside on the business pages: three example job updates. */
export function StatusUpdates() {
  return (
    <figure className="flex flex-col gap-2.5">
      <ul className="flex flex-col gap-2.5">
        {updates.map((update) => (
          <li
            key={update.title}
            className="squircle flex items-center gap-3.5 rounded-tile border border-line bg-white px-6 py-[22px]"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-sand">
              <ApplianceIcon appliance={update.appliance} size={26} />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-15">{update.title}</span>
              <span className="text-13 text-subtle">{update.detail}</span>
            </span>
            <span
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-12",
                update.tone === "ink" && "bg-ink text-white",
                update.tone === "accent" && "bg-accent-tint text-accent",
                update.tone === "sand" && "bg-sand text-ink",
              )}
            >
              {update.status}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="text-12 text-subtle">Example of how updates look.</figcaption>
    </figure>
  );
}

/** "Why they call me": four numbered sand cards. */
export function ReasonsSection({ page }: { page: BusinessPage }) {
  return (
    <section className="px-page flex flex-col gap-6 pt-16 lg:gap-10 lg:pt-[120px]">
      <SectionHeading className="reveal" eyebrow="Why they call me" title="Fast, clear, no headache." />
      <ol className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {page.reasons.map((reason, index) => (
          <li
            key={reason.title}
            style={stagger(index)}
            className="reveal squircle flex flex-col gap-3 rounded-tile bg-sand p-[22px] lg:rounded-panel-sm lg:p-8"
          >
            <span className="text-13 text-subtle">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-20 font-medium tracking-[-0.015em] lg:text-[24px]">{reason.title}</span>
            <span className="text-15 leading-normal text-muted lg:text-16">{reason.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Dark band: a client's quote beside the Google rating card. */
export function QuoteBand() {
  return (
    <section className="reveal px-2 pt-14 lg:px-4 lg:pt-[120px]">
      <div className="squircle grid gap-8 rounded-panel-sm bg-ink p-6 text-white lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-16 lg:rounded-panel lg:p-14">
        <figure className="flex flex-col gap-5">
          <span aria-hidden="true" className="text-[64px] leading-[0.6] font-medium text-accent lg:text-[80px]">
            “
          </span>
          <blockquote className="text-22 leading-[1.25] font-medium tracking-[-0.02em] lg:text-30">
            {businessQuote.quote}
          </blockquote>
          <figcaption className="flex items-center gap-2.5 text-15">
            <Stars size={14} />
            {businessQuote.name} · Google review
          </figcaption>
        </figure>
        <RatingCard tone="ink" />
      </div>
    </section>
  );
}

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

/** "Set up landlord service": pitch + cross-links on the left, the request form on the right. */
export function BusinessFormSection({ page }: { page: BusinessPage }) {
  const others = businessPages.filter((other) => other.slug !== page.slug);
  return (
    <section id="request" className="px-page scroll-mt-20 py-16 xl:scroll-mt-24 lg:py-[120px]">
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-[72px]">
        <div className="reveal flex flex-col gap-[18px]">
          <SectionHeading eyebrow={page.form.eyebrow} title={breakAfterComma(page.form.title)} className="gap-[18px]!" />
          <p className="max-w-[440px] text-16 leading-[1.55] text-muted lg:text-19">
            Tell me about your needs. I’ll call to confirm the details.
          </p>
          <p className="text-15 text-muted">
            Or call{" "}
            <a href={telHref} className="text-ink">
              {business.phone.display}
            </a>
            . Also:{" "}
            {others.map((other, index) => (
              <span key={other.slug}>
                {index > 0 ? " · " : ""}
                <Link href={other.href} className="text-ink underline">
                  {other.shortName}
                </Link>
              </span>
            ))}
            .
          </p>
        </div>
        <BusinessForm page={page.slug} extraField={page.form.extraField} />
      </div>
    </section>
  );
}
