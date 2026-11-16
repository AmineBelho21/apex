import Link from "next/link";
import { ApplianceIcon } from "@/components/appliance-icon";
import { ArrowRightIcon } from "@/components/icons";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { Panel } from "@/components/ui/panel";
import { PriceTag } from "@/components/ui/price-tag";
import { business } from "@/content/business";
import { problemHref, problemsFor, type Problem } from "@/content/problems";
import { serviceByKey } from "@/content/services";
import { stagger } from "@/lib/motion";

/** Hero aside: the three causes with prices at a glance. */
export function QuickAnswer({ problem }: { problem: Problem }) {
  return (
    <div className="squircle flex flex-col gap-3.5 rounded-card-sm border border-line bg-white p-6 lg:rounded-[32px] lg:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-14 items-center justify-center rounded-field bg-sand">
          <ApplianceIcon appliance={problem.appliance} size={34} />
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-13 text-subtle">Quick answer</span>
          <span className="text-18 font-medium">{problem.title}</span>
        </span>
      </div>
      <ol>
        {problem.causes.map((cause, index) => (
          <li key={cause.name} className="flex items-center justify-between gap-3 border-t border-line py-3">
            <span className="text-15">
              {index + 1}. {cause.name}
            </span>
            <PriceTag value={cause.price} size="sm" />
          </li>
        ))}
      </ol>
      <p className="text-13 text-subtle">
        Incl. parts. The {business.pricing.diagnostic} diagnostic confirms which one and goes toward the repair.
      </p>
    </div>
  );
}

/** "The three causes I see most": three sand cards, most common first. */
export function CausesSection({ problem }: { problem: Problem }) {
  return (
    <section className="px-page flex flex-col gap-6 pt-16 lg:gap-10 lg:pt-[120px]">
      <div className="reveal flex flex-col gap-4">
        <SectionHeading eyebrow="What usually causes it" title="The three causes I see most." />
        <Lead className="max-w-[620px]">Ranked by how often I find them on the job.</Lead>
      </div>
      <ol className="grid gap-2.5 lg:grid-cols-3 lg:gap-5">
        {problem.causes.map((cause, index) => (
          <li
            key={cause.name}
            style={stagger(index)}
            className="reveal squircle flex flex-col gap-2.5 rounded-tile bg-sand p-[22px] lg:rounded-panel-sm lg:p-[30px]"
          >
            <span className="text-13 text-subtle">
              Cause {String(index + 1).padStart(2, "0")}
              {index === 0 ? " · most common" : ""}
            </span>
            <span className="text-20 font-medium tracking-[-0.015em] lg:text-[24px]">{cause.name}</span>
            <span className="text-16">
              <PriceTag value={cause.price} />
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Dark panel: safe checks before booking. */
export function ChecksSection({ problem }: { problem: Problem }) {
  return (
    <Panel tone="ink" className="reveal mt-14 px-5 py-10 lg:mt-[120px] lg:py-[88px]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[72px]">
        <div className="flex flex-col gap-4">
          <SectionHeading
            eyebrow="Before you book"
            eyebrowTone="ink"
            title={
              <>
                Check this first.
                <br />
                It might save you {business.pricing.diagnostic}.
              </>
            }
          />
          <p className="text-16 leading-[1.55] text-on-ink-muted lg:text-18">
            Safe checks anyone can do. If none of them fixes it, text me.
          </p>
        </div>
        <ol>
          {problem.checks.map((check, index) => (
            <li key={check} className="flex gap-3.5 border-t border-white/14 py-5">
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-14 font-medium text-ink"
              >
                {index + 1}
              </span>
              <span className="text-16 leading-normal lg:text-18">{check}</span>
            </li>
          ))}
        </ol>
      </div>
    </Panel>
  );
}

/** "Repair or replace?": the owner's straight verdict on a rust-tint card. */
export function VerdictSection({ problem }: { problem: Problem }) {
  return (
    <section className="px-page pt-16 lg:pt-[120px]">
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <SectionHeading className="reveal" eyebrow="Repair or replace?" title="My straight answer." />
        <div className="reveal squircle flex flex-col gap-3 rounded-card-sm bg-accent-tint p-6 lg:rounded-[32px] lg:p-9">
          <p className="text-20 leading-[1.25] font-medium tracking-[-0.02em] lg:text-26">
            {problem.verdict}
            {problem.verdictNote ? ` ${problem.verdictNote}` : ""}
          </p>
          <p className="text-15 leading-normal text-muted">
            I’ll tell you which side you’re on before you spend anything, even when it costs me the job.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Other problems on the same appliance, then "All <appliance> repairs". */
export function RelatedProblems({ problem }: { problem: Problem }) {
  const service = serviceByKey(problem.appliance);
  const others = problemsFor(problem.appliance).filter((other) => other.slug !== problem.slug);
  return (
    <section className="px-page flex flex-col gap-5 pt-16 lg:pt-[120px]">
      <SectionHeading className="reveal" eyebrow="Related" title={`Other ${service.name.toLowerCase()} problems.`} />
      <ul className="reveal flex flex-wrap gap-2">
        {others.map((other) => (
          <li key={other.slug}>
            <Link
              href={problemHref(other.slug)}
              transitionTypes={["nav-forward"]}
              className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line px-[18px] text-15 transition-[scale] duration-(--dur-fast) ease-out hover:border-ink hover:opacity-100 active:scale-[0.97] active:duration-(--dur-press)"
            >
              {other.title}
              <ArrowRightIcon size={16} />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={service.href}
            transitionTypes={["nav-back"]}
            className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-ink px-[18px] text-15 text-white transition-[scale] duration-(--dur-fast) ease-out active:scale-[0.97] active:duration-(--dur-press)"
          >
            All {service.name.toLowerCase()} repairs
            <ArrowRightIcon size={16} />
          </Link>
        </li>
      </ul>
    </section>
  );
}
