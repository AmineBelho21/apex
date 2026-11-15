import type { Metadata } from "next";
import { bdoGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Appliance Repair",
  description: "Owner-operated appliance repair. Flat diagnostic credited to the repair, 90-day warranty.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bdoGrotesk.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
