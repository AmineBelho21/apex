import type { Metadata } from "next";
import { CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { WarrantyForm } from "@/components/sections/warranty-form";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb";
import { Eyebrow } from "@/components/ui/heading";
import { business } from "@/content/business";
import { breadcrumbLd } from "@/lib/seo";

/** Warranty claim: canvas artboards Warranty, WarrantyMobile. */

const { warranty } = business;

export const metadata: Metadata = {
  title: "Warranty claim",
  description: `Same issue back within ${warranty.span}? Tell me what's going on and I come back.`,
  alternates: { canonical: "/warranty" },
};

const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Warranty claim" }];

const covered = [
  `Same appliance, same problem, within ${warranty.span}.`,
  "Parts and labor covered. [CONFIRM]",
  "A different fault is a new diagnostic, I’ll tell you before anything.",
];

export default function WarrantyPage() {
  return (
    <section className="px-page pt-10 pb-16 lg:pt-20 lg:pb-[120px]">
      <JsonLd data={breadcrumbLd(crumbs, "/warranty")} />
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-[72px]">
        <div className="flex flex-col gap-[18px]">
          <div className="enter">
            <Breadcrumb items={crumbs} />
          </div>
          <Eyebrow className="enter [--i:1]">{warranty.label} warranty</Eyebrow>
          <h1 className="enter text-[40px] leading-none font-medium tracking-[-0.04em] [--i:2] lg:text-[56px]">
            Same issue came back?
            <br />
            <span className="text-accent">So do I.</span>
          </h1>
          <p className="enter max-w-[480px] text-16 leading-[1.55] text-muted [--i:3] lg:text-19">
            If the same problem returns within {warranty.span} of the repair, I come back and fix it at no charge.
            Tell me what’s going on.
          </p>
          <ul className="enter squircle flex flex-col gap-2.5 rounded-tile bg-sand p-5 [--i:4]">
            {covered.map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-15">
                <CheckIcon size={16} className="mt-0.5 shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
        <WarrantyForm />
      </div>
    </section>
  );
}
