import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small pill above section titles: white, hairline border, accent dot. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 self-start rounded-full border border-line bg-white px-3.5 py-[7px] text-13 font-medium tracking-[0.02em] text-ink",
        className,
      )}
    >
      <span aria-hidden="true" className="size-[7px] rounded-full bg-accent" />
      {children}
    </span>
  );
}

/** Hero title: 44px on phones, 76px on desktop. */
export function DisplayTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={cn("text-44 leading-[0.98] font-medium tracking-[-0.04em] lg:text-76", className)}>
      {children}
    </h1>
  );
}

/** Section title: 32px on phones, 52px on desktop. */
export function SectionTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag className={cn("text-32 leading-[1.04] font-medium tracking-[-0.03em] lg:text-52", className)}>
      {children}
    </Tag>
  );
}

/** Intro paragraph under a title: 16px on phones, 19px on desktop, muted. */
export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-16 leading-[1.55] text-muted lg:text-19", className)}>{children}</p>;
}

/** Eyebrow + title, stacked with a 16px gap, as at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  as,
  className,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle as={as}>{title}</SectionTitle>
    </div>
  );
}
