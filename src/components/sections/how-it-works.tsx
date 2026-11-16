import { ArrowRightIcon, MessageIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { business, smsHref, telHref } from "@/content/business";
import { stagger } from "@/lib/motion";

const steps = [
  {
    title: "Book it.",
    text: "Text or book online, the appliance and what it’s doing. I confirm a window, usually within the hour.",
  },
  { title: "I come out.", text: "Same-week, often same-day. The same person you booked with, start to finish." },
  {
    title: `${business.pricing.diagnostic} diagnostic.`,
    text: "I find the real problem. You get the exact price before I touch anything.",
  },
  {
    title: "Order the part if needed.",
    text: "If it’s on the van, I fix it right there. If not, I tell you the day it lands.",
  },
  {
    title: "Same-day fix when possible.",
    text: `Fault found and price given on that visit, fixed right and backed ${business.warranty.span}.`,
  },
  { title: "Done.", text: "Working again, the price was the price, and if the same issue comes back, so do I." },
];

/** Six numbered steps on sand cards, then the text / call CTA. */
export function HowItWorks() {
  return (
    <section id="how" className="px-page flex scroll-mt-20 xl:scroll-mt-24 flex-col gap-6 pt-16 lg:gap-11 lg:pt-[120px]">
      <div className="reveal flex flex-col gap-4">
        <SectionHeading eyebrow="How it works" title="The real way a repair goes." />
        <Lead className="max-w-[620px]">
          No call centers, no run-around. The same steps, every job, from the first text to the moment it’s fixed.
        </Lead>
      </div>
      <ol className="grid gap-2.5 lg:grid-cols-3 lg:gap-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            style={stagger(index)}
            className="reveal squircle flex flex-col gap-3 rounded-tile bg-sand p-[22px] lg:rounded-panel-sm lg:p-[30px]"
          >
            <span
              aria-hidden="true"
              className="flex size-[38px] items-center justify-center rounded-full border border-line bg-white text-15 font-medium"
            >
              {index + 1}
            </span>
            <span className="text-19 font-medium tracking-[-0.015em] lg:text-21">{step.title}</span>
            <span className="text-15 leading-normal text-muted">{step.text}</span>
          </li>
        ))}
      </ol>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <ButtonLink href={smsHref} size="xl" className="h-[54px]! px-6!">
          <MessageIcon size={18} />
          Text me
          <ArrowRightIcon size={17} />
        </ButtonLink>
        <span className="text-15 text-muted">
          or call{" "}
          <a href={telHref} className="text-ink underline">
            {business.phone.display}
          </a>
        </span>
      </div>
    </section>
  );
}
