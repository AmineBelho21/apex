import type { ReactNode } from "react";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { stagger } from "@/lib/motion";

/** "Every major brand" / "The GE lines I service": sand name tiles, 2 columns on phones, 4 on desktop. */
export function BrandTiles({
  eyebrow,
  title,
  lead,
  names,
  note,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  names: string[];
  note?: ReactNode;
}) {
  return (
    <section className="px-page flex flex-col gap-6 pt-16 lg:gap-9 lg:pt-[120px]">
      <div className="reveal flex flex-col gap-4">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Lead className="max-w-[620px]">{lead}</Lead>
      </div>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {names.map((name, index) => (
          <li
            key={name}
            style={stagger(index)}
            className="reveal squircle flex h-[52px] items-center justify-center rounded-[18px] bg-sand px-3 text-center text-16 font-medium lg:h-16 lg:text-19"
          >
            {name}
          </li>
        ))}
      </ul>
      {note ? <p className="text-13 text-subtle">{note}</p> : null}
    </section>
  );
}
