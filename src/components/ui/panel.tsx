import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/**
 * Full-width rounded block inset from the viewport (8px on phones, 16px on desktop): the hero,
 * the owner's note, the contact block. Its content lines up with the 1200px page column.
 * Vertical padding and mobile side padding vary per section, so they come from `className`.
 */
export function Panel({
  tone = "sand",
  as: Tag = "section",
  className,
  ...props
}: Omit<ComponentProps<"section">, "ref"> & { tone?: "sand" | "ink"; as?: "section" | "div" }) {
  return (
    <Tag
      className={cn(
        "squircle mx-2 rounded-panel-sm lg:mx-4 lg:rounded-panel lg:px-[max(32px,calc((100%-1232px)/2))]",
        tone === "sand" ? "bg-sand text-ink" : "bg-ink text-white",
        className,
      )}
      {...props}
    />
  );
}
