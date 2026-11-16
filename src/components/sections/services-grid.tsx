import Link from "next/link";
import type { ReactNode } from "react";
import { ApplianceIcon } from "@/components/appliance-icon";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { business, telHref } from "@/content/business";
import { services } from "@/content/services";

/** "Five appliances, done properly": five service cards + the dark "I keep it to five" card. */
export function ServicesGrid({
  id = "services",
  eyebrow = "Services",
  title = (
    <>
      Five appliances,
      <br />
      done properly.
    </>
  ),
  lead = "The five that matter most. Every major brand, parts on the van, and the price before any work.",
}: {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section id={id} className="px-page flex scroll-mt-20 xl:scroll-mt-24 flex-col gap-6 pt-16 lg:gap-11 lg:pt-[120px]">
      <div className="reveal flex flex-col gap-3.5 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow={eyebrow} title={title} />
        {lead ? <Lead className="max-w-[420px]">{lead}</Lead> : null}
      </div>
      <div className="grid gap-3 lg:grid-cols-3 lg:gap-5">
        {services.map((service, index) => (
          <Link
            key={service.key}
            href={service.href}
            className="reveal group squircle flex flex-col gap-3.5 rounded-card-sm border border-line bg-white p-5 text-ink transition-[translate,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-[#D8D2C8] hover:opacity-100 hover:shadow-lift lg:gap-[18px] lg:rounded-card lg:p-[26px]"
          >
            <div className="flex items-start justify-between">
              <span className="squircle flex size-[76px] items-center justify-center rounded-tile bg-sand transition-[scale] duration-500 ease-out-expo group-hover:scale-[1.04] lg:size-[92px]">
                <ApplianceIcon appliance={service.key} size={58} className="lg:size-[70px]" />
              </span>
              <span className="text-13 text-subtle">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <span className="text-22 font-medium tracking-[-0.02em] lg:text-26">{service.name}</span>
            <span className="text-15 leading-normal text-muted">{service.problems}</span>
            <div className="mt-auto flex items-end justify-between border-t border-line pt-3.5">
              <span className="flex flex-col gap-[3px]">
                <span className="text-17 font-medium">From {service.fromPrice}</span>
                <span className="text-13 text-subtle">{business.pricing.diagnostic} diagnostic, applied to the repair</span>
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-[scale] duration-300 ease-out-expo group-hover:scale-110">
                <ArrowRightIcon size={17} />
              </span>
            </div>
          </Link>
        ))}
        <div className="reveal squircle flex flex-col gap-4 rounded-card-sm bg-ink p-[22px] text-white lg:rounded-card lg:p-[30px]">
          <p className="text-22 leading-[1.15] font-medium tracking-[-0.02em] lg:text-26">
            I keep it to five, so I do each one right.
          </p>
          <p className="text-15 leading-normal text-on-ink-muted">
            No microwaves or small appliances. Not sure about yours? Ask, and I’ll point you to someone I trust.
          </p>
          <div className="mt-auto">
            <ButtonLink href={telHref} variant="secondary" fullWidth>
              <PhoneIcon size={18} />
              Call {business.phone.display}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
