import type { Metadata } from "next";
import { MotionRuntime } from "@/components/motion-runtime";
import { business } from "@/content/business";
import { siteUrl } from "@/lib/seo";
import { bdoGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: business.legalName, template: `%s · ${business.legalName}` },
  description: "Owner-operated appliance repair. Flat diagnostic credited to the repair, 90-day warranty.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior: Next jumps instantly on route changes, smooth scrolling stays for in-page anchors.
    <html lang="en" className={bdoGrotesk.variable} data-scroll-behavior="smooth">
      <body>
        {children}
        <MotionRuntime />
      </body>
    </html>
  );
}
