import type { Metadata } from "next";
import { ArrowRightIcon, MessageIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Accordion } from "@/components/ui/accordion";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/heading";
import { business, smsHref } from "@/content/business";
import { faqPage } from "@/content/faq";
import { bookHref } from "@/content/navigation";
import { breadcrumbLd, faqLd } from "@/lib/seo";

/** FAQ: canvas artboards FAQ, FAQMobile. The intro column stays in view while the answers scroll. */

export const metadata: Metadata = {
  title: "FAQ",
  description: "Cost, coverage, brands and how a repair works, answered straight.",
  alternates: { canonical: "/faq" },
};

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "FAQ" }];

export default function FaqPage() {
  return (
    <section className="px-page pt-10 pb-16 lg:pt-20 lg:pb-[120px]">
      <JsonLd data={[breadcrumbLd(crumbs, "/faq"), faqLd(faqPage)]} />
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-24">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
          <div className="enter">
            <Breadcrumb items={crumbs} />
          </div>
          <Eyebrow className="enter [--i:1]">FAQ</Eyebrow>
          <h1 className="enter text-[40px] leading-none font-medium tracking-[-0.04em] [--i:2] lg:text-[60px]">
            Questions, answered straight.
          </h1>
          <p className="enter max-w-[380px] text-16 leading-[1.55] text-muted [--i:3] lg:text-19">
            Cost, coverage, brands and how a repair works. Still not sure? Text {business.phone.display}.
          </p>
          <div className="enter flex flex-col gap-2.5 pt-2 [--i:4] sm:flex-row">
            <ButtonLink href={smsHref} className="h-[52px]!">
              <MessageIcon size={18} />
              Text me
            </ButtonLink>
            <ButtonLink href={bookHref} variant="outline" className="h-[52px]!">
              Book a repair
              <ArrowRightIcon size={17} />
            </ButtonLink>
          </div>
        </div>
        <Accordion items={faqPage} className="enter [--i:3]" />
      </div>
    </section>
  );
}
