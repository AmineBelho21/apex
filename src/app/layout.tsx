import type { Metadata } from "next";
import { business } from "@/content/business";
import { bdoGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: business.legalName,
  description: "Owner-operated appliance repair. Flat diagnostic credited to the repair, 90-day warranty.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior: Next jumps instantly on route changes, smooth scrolling stays for in-page anchors.
    <html lang="en" className={bdoGrotesk.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
