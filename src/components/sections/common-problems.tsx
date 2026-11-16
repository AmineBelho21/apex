import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { PriceTag } from "@/components/ui/price-tag";
import { bookHref } from "@/content/navigation";
import { problemHref } from "@/content/problems";
import { stagger } from "@/lib/motion";

export type ProblemRow = { title: string; likelyCause: string; price: string; problem?: string };

/**
 * "Common problems, with upfront prices": numbered rows, likely cause, price, "Get a price".
 * A row with its own problem page links there (forward transition); the others go to booking.
 * Desktop: 5 columns; phone: number, title + cause, price.
 */
export function CommonProblems({
  eyebrow,
  title,
  lead,
  rows,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  rows: ProblemRow[];
}) {
  return (
    <section className="px-page flex flex-col gap-6 pt-16 lg:gap-10 lg:pt-[120px]">
      <div className="reveal flex flex-col gap-4">
        <SectionHeading eyebrow={eyebrow} title={title} />
        {lead ? <Lead className="max-w-[620px]">{lead}</Lead> : null}
      </div>
      <ul className="border-b border-line">
        {rows.map((row, index) => (
          <li key={row.title} className="reveal" style={stagger(index)}>
            <Link
              href={row.problem ? problemHref(row.problem) : bookHref}
              transitionTypes={row.problem ? ["nav-forward"] : undefined}
              className="group grid grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-3 border-t border-line py-[18px] text-ink lg:grid-cols-[60px_minmax(0,1fr)_minmax(0,1fr)_200px_140px] lg:gap-5 lg:py-6"
            >
              <span className="text-14 text-subtle">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex flex-col gap-1 lg:contents">
                <span className="text-18 font-medium tracking-[-0.015em] lg:text-22">{row.title}</span>
                <span className="text-14 text-muted lg:text-16">
                  <span className="hidden lg:inline">Likely cause: </span>
                  {row.likelyCause}
                </span>
              </span>
              <span className="text-right lg:text-left">
                <PriceTag value={row.price} size="sm" className="lg:text-15" />
              </span>
              <span className="hidden items-center gap-2 justify-self-end text-15 font-medium lg:inline-flex">
                Get a price
                <ArrowRightIcon size={16} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
