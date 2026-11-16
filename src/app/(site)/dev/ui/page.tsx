import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowRightIcon, MessageIcon, PhoneIcon } from "@/components/icons";
import { Accordion } from "@/components/ui/accordion";
import { Button, ButtonLink } from "@/components/ui/button";
import { ChipGroup, ChoiceChip, PillLink } from "@/components/ui/chip";
import { Field, Input, Textarea } from "@/components/ui/field";
import { DisplayTitle, Eyebrow, Lead, SectionHeading } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { Stars } from "@/components/ui/stars";

export const metadata: Metadata = { title: "UI kit", robots: { index: false } };

const colors = [
  ["ink", "#111111", "bg-ink"],
  ["white", "#FFFFFF", "bg-white"],
  ["sand", "#F4F1EB", "bg-sand"],
  ["line", "#E3DED4", "bg-line"],
  ["muted", "#57534E", "bg-muted"],
  ["subtle", "#6B665F", "bg-subtle"],
  ["accent", "#B8412A", "bg-accent"],
  ["accent-tint", "#F7E6DF", "bg-accent-tint"],
  ["on-ink-soft", "#D8D2C8", "bg-on-ink-soft"],
  ["on-ink-muted", "#C9C2B8", "bg-on-ink-muted"],
  ["on-ink-subtle", "#BDB6AC", "bg-on-ink-subtle"],
  ["on-ink-faint", "#A9A197", "bg-on-ink-faint"],
] as const;

const faq = [
  {
    question: "How much does an appliance repair cost?",
    answer:
      "Every visit is a flat diagnostic that goes toward the repair when you move forward. You get the exact price before any work begins.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Every repair is backed for 90 days. If the same issue comes back, I come back.",
  },
  {
    question: "Should I repair or replace my appliance?",
    answer: "It comes down to what the machine is worth, not to what broke.",
  },
];

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-5 border-t border-line pt-8">
      <h2 className="text-13 font-medium tracking-[0.02em] text-subtle uppercase">{title}</h2>
      {children}
    </section>
  );
}

/** Development-only showcase of the step 1 design system. 404 in production. */
export default function UiKitPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <div className="flex flex-col gap-16 pb-16 lg:pb-[120px]">
      <div className="px-page flex flex-col gap-12 pt-12">
        <DisplayTitle>
          UI kit.
          <br />
          <span className="text-accent">Step 1.</span>
        </DisplayTitle>

        <Block title="Colors">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {colors.map(([name, hex, cls]) => (
              <div key={name} className="flex flex-col gap-2">
                <span className={`h-16 rounded-field border border-line ${cls}`} />
                <span className="text-14 font-medium">{name}</span>
                <span className="text-13 text-subtle">{hex}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Type">
          <SectionHeading eyebrow="Services" title={<>Five appliances,<br />done properly.</>} />
          <Lead className="max-w-[420px]">
            The five that matter most. Every major brand, parts on the van, and the price before any work.
          </Lead>
          <p className="text-17 leading-[1.6] text-muted">Body 17 · line height 1.6 · muted</p>
          <p className="text-26 font-medium tracking-[-0.02em]">Card title 26</p>
          <div className="flex items-center gap-2 text-14">
            <Stars size={16} />
            <span>
              <strong className="font-semibold">[RATING]</strong> · [COUNT] Google reviews
            </span>
          </div>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/book" size="xl">
              Book my repair
              <ArrowRightIcon size={17} />
            </ButtonLink>
            <ButtonLink href="/book" size="xl" variant="outline">
              <MessageIcon size={18} />
              Text me what’s wrong
            </ButtonLink>
            <ButtonLink href="/book" size="lg" variant="outline">
              Text me or call
            </ButtonLink>
            <ButtonLink href="/book" size="md">
              Book a repair
            </ButtonLink>
            <ButtonLink href="tel:5555550100" size="md" variant="soft" className="gap-2! px-[18px]! font-normal!">
              <PhoneIcon size={16} />
              555-555-0100
            </ButtonLink>
            <Button size="sm" variant="soft">
              Small
            </Button>
            <Button size="lg" disabled>
              Disabled
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-panel-sm bg-sand p-6">
            <ButtonLink href="/book" size="xl" variant="secondary">
              <MessageIcon size={18} />
              Secondary on sand
            </ButtonLink>
            <Eyebrow>Eyebrow on sand</Eyebrow>
          </div>
        </Block>

        <Block title="Chips and pills">
          <ChipGroup legend="Which appliance?">
            {["Fridge", "Washer", "Dryer", "Oven", "Dishwasher"].map((label, i) => (
              <ChoiceChip key={label} name="kit-appliance" value={label} defaultChecked={i === 0}>
                {label}
              </ChoiceChip>
            ))}
          </ChipGroup>
          <ChipGroup legend="What’s it doing? (booking size)">
            {["Not cooling", "Leaking water", "Ice maker", "Something else"].map((label, i) => (
              <ChoiceChip key={label} size="md" name="kit-problem" value={label} defaultChecked={i === 1}>
                {label}
              </ChoiceChip>
            ))}
          </ChipGroup>
          <div className="flex flex-wrap gap-2">
            <PillLink href="/#areas">Area with a page</PillLink>
            <PillLink href="/#areas" muted>
              Area without a page
            </PillLink>
          </div>
        </Block>

        <Block title="Fields">
          <div className="grid max-w-[560px] gap-3.5 sm:grid-cols-2">
            <Field id="kit-name" label="Your name">
              <Input id="kit-name" placeholder="First name" autoComplete="given-name" />
            </Field>
            <Field id="kit-phone" label="Phone" error="Enter a 10-digit US number.">
              <Input
                id="kit-phone"
                type="tel"
                placeholder="(555) 555-0100"
                defaultValue="555"
                aria-invalid
                aria-describedby="kit-phone-error"
              />
            </Field>
            <Field id="kit-msg" label="What’s it doing?" className="sm:col-span-2">
              <Textarea id="kit-msg" placeholder="Brand, model if you have it, and the symptom." />
            </Field>
          </div>
        </Block>

        <Block title="Accordion">
          <Accordion items={faq} className="max-w-[760px]" />
        </Block>
      </div>

      <Panel className="flex flex-col gap-4 px-[18px] py-10 lg:py-[88px]">
        <SectionHeading eyebrow="Panel · sand" title="Inset panel." />
        <Lead>8px from the edge on phones, 16px on desktop. Content lines up with the page column.</Lead>
      </Panel>
      <Panel tone="ink" className="flex flex-col gap-4 px-5 py-10 lg:py-[88px]">
        <p className="text-32 leading-[1.04] font-medium tracking-[-0.03em] lg:text-52">Ink panel.</p>
        <p className="max-w-[560px] text-18 leading-[1.6] text-on-ink-muted">The owner’s note sits on this one.</p>
      </Panel>
    </div>
  );
}
