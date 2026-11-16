import { ArrowRightIcon, CheckIcon, MessageIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { DisplayTitle, Eyebrow, Lead } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { Stars } from "@/components/ui/stars";
import { business, smsHref, telHref } from "@/content/business";
import { bookHref } from "@/content/navigation";
import { cn } from "@/lib/cn";

const { ownerFirstName, pricing, warranty } = business;

type Message = { from: "you" | "owner"; text: string; time: string } | { divider: string };

/** The sample text thread in the hero card (copy from the canvas; prices are placeholders). */
const thread: Message[] = [
  { from: "you", text: "Water all over the kitchen floor from the fridge.", time: "8:12 AM" },
  { from: "owner", text: `I can be there tomorrow. ${pricing.diagnostic} to diagnose, and it comes off the repair.`, time: "8:14 AM" },
  { from: "you", text: "What time?", time: "8:15 AM" },
  { from: "owner", text: "11:30 to 1:30. I’ll text before I head over.", time: "8:16 AM" },
  { divider: "Next day" },
  {
    from: "owner",
    text: `Defrost drain is blocked, nothing is broken. [$295 to $375], backed ${warranty.span}. Go ahead?`,
    time: "12:05 PM",
  },
  { from: "you", text: "Yes, go for it.", time: "12:06 PM" },
  { from: "owner", text: "Fixed. Floor’s dry.", time: "1:20 PM" },
];

function TextThread() {
  return (
    <figure
      aria-label="Example text conversation with the owner"
      className="squircle flex flex-col overflow-hidden rounded-panel-sm border border-line bg-white shadow-float lg:rounded-[32px]"
    >
      <div className="flex items-center gap-3 border-b border-line px-4 py-3.5 lg:px-5 lg:py-4">
        <span className="flex size-[38px] items-center justify-center rounded-full bg-accent text-15 font-medium text-white">
          {business.ownerInitial}
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-15 font-medium">{ownerFirstName} · the owner</span>
          <span className="text-12 text-subtle">Usually replies within the hour</span>
        </span>
      </div>
      <div className="flex flex-col gap-2 px-3.5 pt-3.5 pb-[18px] lg:gap-2.5 lg:px-5 lg:pt-[18px] lg:pb-[22px]">
        {thread.map((message, i) => {
          // Messages arrive one after another, like a real thread.
          const delay = { animationDelay: `${700 + i * 260}ms` };
          if ("divider" in message) {
            return (
              <span key={i} style={delay} className="rise self-center py-1 text-12 text-subtle">
                {message.divider}
              </span>
            );
          }
          const mine = message.from === "you";
          return (
            <div
              key={i}
              style={delay}
              className={cn(
                "rise flex max-w-[82%] flex-col gap-1",
                mine ? "items-end self-end" : "items-start self-start",
              )}
            >
              <span
                className={cn(
                  "rounded-[20px] px-3.5 py-2.5 text-14 leading-[1.4] lg:px-[15px] lg:py-[11px] lg:text-15",
                  mine ? "rounded-br-md bg-ink text-white" : "rounded-bl-md bg-sand text-ink",
                )}
              >
                {message.text}
              </span>
              <span className="text-11 text-subtle">
                {mine ? "You" : ownerFirstName} · {message.time}
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

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
          <Eyebrow className="rise">{business.serviceArea}</Eyebrow>
          <DisplayTitle className="rise [--i:1]">
            Fixed this week.
            <br />
            <span className="text-accent">Often same day.</span>
          </DisplayTitle>
          <Lead className="rise max-w-[520px] [--i:2]">
            Fridge, washer, dryer, oven and stove, dishwasher. Owner-operated, one flat {pricing.diagnostic} diagnostic
            credited to the repair, and I tell you straight when a fix isn’t worth it.
          </Lead>
          <div className="rise flex flex-col gap-2.5 pt-1 [--i:3] lg:flex-row">
            <ButtonLink href={bookHref} size="xl">
              Book my repair
              <ArrowRightIcon size={17} />
            </ButtonLink>
            <ButtonLink href={smsHref} size="xl" variant="secondary">
              <MessageIcon size={18} />
              Text me what’s wrong
            </ButtonLink>
          </div>
          <span className="rise text-14 text-muted [--i:4]">
            or call{" "}
            <a href={telHref} className="text-ink underline">
              {business.phone.display}
            </a>
          </span>
          <a href={business.reviews.readUrl} className="rise flex items-center gap-2.5 pt-1.5 text-14 text-ink [--i:5]">
            <Stars size={16} />
            <span>
              <strong className="font-semibold">{business.reviews.rating}</strong> · {business.reviews.count} Google
              reviews
            </span>
          </a>
        </div>
        <div className="rise flex flex-col gap-3.5 [--i:2]">
          <TextThread />
          <div className="flex flex-wrap gap-2">
            <PromiseTag>{pricing.diagnostic} diagnostic, applied to the repair</PromiseTag>
            <PromiseTag>{warranty.label} warranty on every repair</PromiseTag>
          </div>
        </div>
      </div>
    </Panel>
  );
}
