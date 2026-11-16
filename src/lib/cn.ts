/**
 * Joins class names, skipping falsy values. There is no conflict merging: to override a utility a
 * component already sets (padding, height, size…), mark the override important, e.g. `px-[18px]!`.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
