import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { SmartLink } from "./smart-link";

/**
 * Pill buttons from the canvas.
 * Variants: primary (ink), secondary (white, used on sand panels), outline (1px ink), soft (sand, header phone).
 * Sizes: sm 44 (Subscribe), md 46 (header), lg 50 (section CTAs), xl 56 (hero, forms).
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "soft";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

/*
 * `group` lets icons react to the button's hover (the arrow nudges forward). Pressing scales it to
 * 0.97 in 80ms (docs/MOTION.md §5); hover dims it slightly (pointer devices only).
 */
const base =
  "group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap transition-[opacity,scale] duration-(--dur-fast) ease-out hover:opacity-85 active:scale-[0.97] active:duration-(--dur-press)";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white",
  secondary: "bg-white text-ink",
  outline: "border border-ink bg-transparent text-ink",
  soft: "bg-sand text-ink",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-11 px-[18px] text-14",
  md: "h-[46px] px-[22px] text-15",
  lg: "h-[50px] px-[23px] text-15",
  xl: "h-14 px-[25px] text-16",
};

type StyleProps = { variant?: ButtonVariant; size?: ButtonSize; fullWidth?: boolean };

export function buttonClass({ variant = "primary", size = "lg", fullWidth }: StyleProps = {}) {
  return cn(base, variants[variant], sizes[size], fullWidth && "w-full");
}

export function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: StyleProps & ComponentProps<"a"> & { href: string }) {
  return <SmartLink className={cn(buttonClass({ variant, size, fullWidth }), className)} {...props} />;
}

export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = "button",
  ...props
}: StyleProps & ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(
        buttonClass({ variant, size, fullWidth }),
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
