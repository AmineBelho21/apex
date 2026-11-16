import type { CSSProperties } from "react";

/**
 * Stagger index for a list item. `.reveal` reads `--stagger`, `.enter` reads `--i`; both turn it
 * into 40ms per step, capped at 300ms (docs/MOTION.md §10).
 */
export function stagger(index: number, variable: "--stagger" | "--i" = "--stagger"): CSSProperties {
  return { [variable]: index } as CSSProperties;
}
