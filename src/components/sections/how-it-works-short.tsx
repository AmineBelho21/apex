import { ArrowRightIcon, MessageIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { business, smsHref, telHref } from "@/content/business";
import { TextThread } from "./text-thread";

const steps = [
  { title: "Tell me what’s wrong.", text: "Text or book online, the appliance and the symptom." },
  { title: `${business.pricing.diagnostic} flat diagnosis.`, text: "Often same-day. It goes toward the repair." },
  { title: "Upfront price, fixed right.", text: `You approve before any work, backed ${business.warranty.span}.` },
];

/** Service and brand pages: three steps on the left, the sample text thread on the right (sand panel). */
export function HowItWorksShort() {
  return (
    <Panel className="reveal mt-14 px-[18px] py-10 lg:mt-[120px] lg:py-[88px]">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:gap-[72px]">
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                Booked in a text.
                <br />
                Fixed by your neighbor.
              </>
            }
          />
          <ol>
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 border-t border-line py-5">
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-14 font-medium text-white"
                >
                  {index + 1}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-18 font-medium">{step.title}</span>
                  <span className="text-15 leading-normal text-muted">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <ButtonLink href={smsHref} size="xl" className="h-[54px]! px-6!">
              <MessageIcon size={18} />
              Text me to get started
              <ArrowRightIcon size={17} />
            </ButtonLink>
            <span className="text-15 text-muted">
              or call{" "}
              <a href={telHref} className="text-ink underline">
                {business.phone.display}
              </a>
            </span>
          </div>
        </div>
        <TextThread />
      </div>
    </Panel>
  );
}
