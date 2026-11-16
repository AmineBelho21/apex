import { ArrowRightIcon, CheckIcon, MessageIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { DisplayTitle, Eyebrow, Lead } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { Stars } from "@/components/ui/stars";
import { business, smsHref, telHref } from "@/content/business";
import { bookHref } from "@/content/navigation";
import { TextThread } from "./text-thread";

const { pricing, warranty } = business;

function PromiseTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2.5 text-13">
      <CheckIcon className="text-accent" />
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <Panel className="mt-2 px-[18px] pt-9 pb-5 lg:mt-0 lg:py-[72px]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-[72px]">
        <div className="flex flex-col gap-[18px] lg:gap-[26px]">
          <Eyebrow className="enter">{business.serviceArea}</Eyebrow>
          <DisplayTitle className="enter [--i:1]">
            Fixed this week.
            <br />
            <span className="text-accent">Often same day.</span>
          </DisplayTitle>
          <Lead className="enter max-w-[520px] [--i:2]">
            Fridge, washer, dryer, oven and stove, dishwasher. Owner-operated, one flat {pricing.diagnostic} diagnostic
            credited to the repair, and I tell you straight when a fix isn’t worth it.
          </Lead>
          <div className="enter flex flex-col gap-2.5 pt-1 [--i:3] lg:flex-row">
            <ButtonLink href={bookHref} size="xl">
              Book my repair
              <ArrowRightIcon size={17} />
            </ButtonLink>
            <ButtonLink href={smsHref} size="xl" variant="secondary">
              <MessageIcon size={18} />
              Text me what’s wrong
            </ButtonLink>
          </div>
          <span className="enter text-14 text-muted [--i:4]">
            or call{" "}
            <a href={telHref} className="text-ink underline">
              {business.phone.display}
            </a>
          </span>
          <a href={business.reviews.readUrl} className="enter flex items-center gap-2.5 pt-1.5 text-14 text-ink [--i:5]">
            <Stars size={16} />
            <span>
              <strong className="font-semibold">{business.reviews.rating}</strong> · {business.reviews.count} Google
              reviews
            </span>
          </a>
        </div>
        <div className="enter flex flex-col gap-3.5 [--i:2]">
          <TextThread animate />
          <div className="flex flex-wrap gap-2">
            <PromiseTag>{pricing.diagnostic} diagnostic, applied to the repair</PromiseTag>
            <PromiseTag>{warranty.label} warranty on every repair</PromiseTag>
          </div>
        </div>
      </div>
    </Panel>
  );
}
