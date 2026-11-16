import { cn } from "@/lib/cn";

/**
 * A price. Placeholders ("[PRICE]", "[from $380]") get the canvas's rust tag so they can't be
 * missed; real prices ("from $380") print as plain text.
 */
export function PriceTag({ value, size = "md", className }: { value: string; size?: "sm" | "md"; className?: string }) {
  if (!value.startsWith("[")) return <span className={cn("font-medium", className)}>{value}</span>;
  return (
    <span
      className={cn(
        "inline-flex rounded-lg bg-accent-tint px-2.5 py-[3px] font-semibold whitespace-nowrap text-accent",
        size === "sm" ? "text-13" : "text-15",
        className,
      )}
    >
      {value}
    </span>
  );
}
