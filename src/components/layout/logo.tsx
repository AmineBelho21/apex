import Link from "next/link";
import { business } from "@/content/business";
import { cn } from "@/lib/cn";

/**
 * Wordmark: accent dot + spaced capitals + small line under it.
 * `compact` = the mobile header size (11px dot, 18px word); the footer keeps the full size on phones too.
 */
export function Logo({
  tone = "dark",
  compact = false,
  className,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${business.legalName}, home`}
      className={cn(
        "flex min-h-11 items-center",
        compact ? "gap-[9px]" : "gap-3",
        tone === "dark" ? "text-ink" : "text-white",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("shrink-0 rounded-full bg-accent", compact ? "size-[11px]" : "size-3.5")} />
      <span aria-hidden="true" className={cn("flex flex-col leading-none", compact ? "gap-0.5" : "gap-[3px]")}>
        <span className={cn("font-medium tracking-[0.38em]", compact ? "text-18" : "text-22")}>{business.wordmark}</span>
        <span
          className={cn(
            "text-9 font-medium tracking-[0.32em]",
            tone === "dark" ? "text-subtle" : "text-on-ink-subtle",
          )}
        >
          {business.wordmarkLine}
        </span>
      </span>
    </Link>
  );
}
