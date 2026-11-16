"use client";

import { useId, useState, type ReactNode } from "react";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export type AccordionItem = { question: string; answer: ReactNode };

/**
 * FAQ list from the canvas: hairline rows, question + round sand toggle, first item open.
 * Answers stay in the HTML when closed (`hidden`), so search engines still read them.
 */
export function Accordion({
  items,
  defaultOpen = 0,
  className,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
  className?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set(defaultOpen === null ? [] : [defaultOpen]));

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex min-h-[60px] w-full items-center justify-between gap-4 py-4 text-left lg:min-h-[72px] lg:py-5"
              >
                <span className="text-17 leading-[1.3] font-medium tracking-[-0.01em] lg:text-20">
                  {item.question}
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sand">
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <div className="pb-5 text-16 leading-[1.6] text-muted lg:pr-[60px] lg:pb-6 lg:text-17">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
