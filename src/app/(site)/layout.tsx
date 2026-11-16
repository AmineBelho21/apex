import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { localBusinessLd } from "@/lib/seo";

/** Marketing pages: top bar + header, content, footer. The booking flow gets its own lighter shell (step 6). */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={localBusinessLd()} />
      <a
        href="#content"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-14 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
