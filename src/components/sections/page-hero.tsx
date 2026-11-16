import type { ReactNode } from "react";
import { ApplianceIcon } from "@/components/appliance-icon";
import { ArrowRightIcon, MessageIcon } from "@/components/icons";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Lead } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { Stars } from "@/components/ui/stars";
import { business, smsHref } from "@/content/business";
import { bookHref } from "@/content/navigation";
import type { ApplianceKey } from "@/content/services";

/**
 * Hero of the service, problem, area and brand pages: sand panel, breadcrumb, eyebrow,
 * 64px title (40px on phones), intro, two CTAs, rating line; `aside` on the right.
 * Enters on load (`enter`, staggered), like the home hero.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  aside,
}: {
  crumbs: Crumb[];
  eyebrow: ReactNode;
  title: ReactNode;
  intro: ReactNode;
  aside: ReactNode;
}) {
  return (
    <Panel className="mt-2 px-[18px] py-8 lg:mt-0 lg:py-16">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="enter">
            <Breadcrumb items={crumbs} />
          </div>
          <Eyebrow className="enter [--i:1]">{eyebrow}</Eyebrow>
          <h1 className="enter text-[40px] leading-none font-medium tracking-[-0.04em] [--i:2] lg:text-[64px]">{title}</h1>
          <Lead className="enter max-w-[540px] [--i:3]">{intro}</Lead>
          <div className="enter flex flex-col gap-2.5 [--i:4] lg:flex-row">
            <ButtonLink href={bookHref} size="xl">
              Book a repair
              <ArrowRightIcon size={17} />
            </ButtonLink>
            <ButtonLink href={smsHref} size="xl" variant="secondary">
              <MessageIcon size={18} />
              Text me what’s wrong
            </ButtonLink>
          </div>
          <a href={business.reviews.readUrl} className="enter flex items-center gap-2.5 text-14 text-ink [--i:5]">
            <Stars size={16} />
            <span>
              <strong className="font-semibold">{business.reviews.rating}</strong> · {business.reviews.count} Google
              reviews · Every job backed {business.warranty.span}
            </span>
          </a>
        </div>
        <div className="enter [--i:3]">{aside}</div>
      </div>
    </Panel>
  );
}

/** Hero illustration: the appliance drawn large, a "Most repairs from" tag and a corner chip. */
export function ApplianceArt({ appliance, fromPrice, chip }: { appliance: ApplianceKey; fromPrice: string; chip: string }) {
  return (
    <div className="squircle relative flex h-[300px] items-center justify-center rounded-card-sm border border-line bg-white lg:h-[460px] lg:rounded-[32px]">
      <ApplianceIcon appliance={appliance} size={190} strokeWidth={1.1} className="lg:size-[300px]" />
      <span className="absolute bottom-4 left-4 flex flex-col gap-0.5 rounded-[18px] bg-ink px-4 py-3 text-white lg:bottom-6 lg:left-6">
        <span className="text-12 text-on-ink-muted">Most repairs</span>
        <span className="text-20 font-medium">from {fromPrice}</span>
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-accent-tint px-3 py-2 text-13 font-medium text-accent lg:top-6 lg:right-6">
        {chip}
      </span>
    </div>
  );
}
