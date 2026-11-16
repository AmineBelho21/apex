import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/*
 * Form fields from the canvas: 14px/500 label, 8px gap, 16px-radius box with a hairline border.
 * The canvas draws no error state; errors use the accent (5.5:1 on white) on the border and the message.
 */

const control =
  "w-full rounded-field border border-line bg-white px-[18px] text-16 text-ink aria-invalid:border-accent";

export function Input({
  size = "md",
  className,
  ...props
}: Omit<ComponentProps<"input">, "size"> & { size?: "md" | "lg" }) {
  return <input className={cn(control, size === "lg" ? "h-14" : "h-[54px]", className)} {...props} />;
}

export function Textarea({ className, rows = 3, ...props }: ComponentProps<"textarea">) {
  return <textarea rows={rows} className={cn(control, "resize-y py-3.5", className)} {...props} />;
}

export function Label({ className, ...props }: ComponentProps<"label">) {
  return <label className={cn("text-14 font-medium", className)} {...props} />;
}

/** Label + control + optional hint or error. Pass the same `id` to the control. */
export function Field({
  id,
  label,
  hint,
  error,
  className,
  children,
}: {
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-13 text-accent">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-13 text-subtle">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
