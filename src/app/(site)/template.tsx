import { ViewTransition } from "react";

/**
 * Re-mounts on every navigation, so page content transitions (docs/MOTION.md §6):
 * - default: old page fades out (300ms), new one fades in and rises 12px (450ms);
 * - links tagged `transitionTypes={["nav-forward"]}` (going deeper) slide in from the right,
 *   `["nav-back"]` (back up, e.g. breadcrumbs) from the left. 24px, never more.
 * Curves live in globals.css; the header is anchored and doesn't move.
 */
export default function SiteTemplate({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "page-enter" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "page-exit" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
