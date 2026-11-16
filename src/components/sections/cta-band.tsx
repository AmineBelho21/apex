import type { ReactNode } from "react";
import { ArrowRightIcon, MessageIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { smsHref } from "@/content/business";
import { bookHref } from "@/content/navigation";

/** Dark closing band: a title, a line, Book + Text buttons (Reviews page). */
export function CtaBand({ title, text }: { title: ReactNode; text: ReactNode }) {
  return (
    <Panel
      tone="ink"
      className="reveal mt-14 mb-16 flex flex-col gap-6 px-5 py-10 lg:mt-[120px] lg:mb-[120px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-20"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-32 leading-[1.04] font-medium tracking-[-0.03em] lg:text-52">{title}</h2>
        <p className="text-16 text-on-ink-muted">{text}</p>
      </div>
      <div className="flex flex-col gap-2.5 lg:flex-row">
        <ButtonLink href={bookHref} size="xl" variant="secondary">
          Book my repair
          <ArrowRightIcon size={17} />
        </ButtonLink>
        <ButtonLink href={smsHref} size="xl" variant="outline" className="border-white/30! text-white!">
          <MessageIcon size={18} />
          Text me
        </ButtonLink>
      </div>
    </Panel>
  );
}
