import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SmartLink } from "./smart-link";

/**
 * Selectable pill (radio or checkbox inside a label). Selected = 2px ink border and 500 weight,
 * as in the booking flow; drawn as 1px border + 1px inset shadow so the pill doesn't shift.
 * sm 44px (contact form, with icon) · md 52px (booking answers).
 */
export function ChoiceChip({
  icon,
  size = "sm",
  type = "radio",
  className,
  children,
  ...inputProps
}: Omit<ComponentProps<"input">, "size"> & { icon?: ReactNode; size?: "sm" | "md"; children: ReactNode }) {
  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center rounded-full border border-line bg-white text-ink transition-colors",
        "has-checked:border-ink has-checked:font-medium has-checked:shadow-[inset_0_0_0_1px_var(--color-ink)]",
        "has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-accent",
        size === "sm" ? "h-11 gap-2 px-3.5 text-14" : "min-h-[52px] px-5 text-15",
        className,
      )}
    >
      <input type={type} className="sr-only" {...inputProps} />
      {icon}
      {children}
    </label>
  );
}

/** A labelled group of chips. */
export function ChipGroup({
  legend,
  className,
  children,
}: {
  legend: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className={cn("flex flex-col gap-2", className)}>
      <legend className="mb-2 text-14 font-medium">{legend}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

/**
 * Small link pill (service-area lists). `muted` = an area without its own page yet:
 * transparent border, muted text.
 */
export function PillLink({
  href,
  muted,
  className,
  children,
}: {
  href: string;
  muted?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "inline-flex h-9 items-center rounded-full border bg-white px-3 text-14",
        muted ? "border-transparent text-muted" : "border-line text-ink",
        className,
      )}
    >
      {children}
    </SmartLink>
  );
}
