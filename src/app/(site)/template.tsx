import { ViewTransition } from "react";

/**
 * Re-mounts on every navigation, so the page content crossfades (old fades out, new rises in).
 * Animations are defined in globals.css (.page-exit / .page-enter); the header is anchored.
 */
export default function SiteTemplate({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
