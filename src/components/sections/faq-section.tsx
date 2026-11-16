import Link from "next/link";
import type { ReactNode } from "react";
import { Accordion } from "@/components/ui/accordion";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { business } from "@/content/business";
import type { FaqItem } from "@/content/faq";

/** Heading column (380px on desktop) + accordion. */
export function FaqSection({
  items,
  title = (
    <>
      Questions,
      <br />
      answered straight.
    </>
  ),
  showAllLink = true,
}: {
  items: FaqItem[];
  title?: ReactNode;
  showAllLink?: boolean;
}) {
  return (
    <section
      id="faq"
      className="px-page flex scroll-mt-4 flex-col gap-6 pt-16 lg:grid lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-20 lg:pt-[120px]"
    >
      <div className="flex flex-col gap-4">
        <SectionHeading eyebrow="FAQ" title={title} />
        <Lead className="max-w-[620px]">Still not sure? Text {business.phone.display}.</Lead>
        {showAllLink ? (
          <Link href="/faq" className="flex min-h-11 items-center self-start text-15 font-medium underline">
            All the questions people ask
          </Link>
        ) : null}
      </div>
      <Accordion items={items.map(({ question, answer }) => ({ question, answer }))} />
    </section>
  );
}
