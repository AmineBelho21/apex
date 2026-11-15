import localFont from "next/font/local";

/**
 * BDO Grotesk, the only face in the design (Lokal Container, SIL OFL 1.1, see ./fonts/OFL.txt).
 * It is not on Google Fonts, so it is self-hosted. The design uses 400, 500 and 600 only.
 * The fallback stack is the one the design declares.
 */
export const bdoGrotesk = localFont({
  src: [
    { path: "./fonts/BDOGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BDOGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/BDOGrotesk-DemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-bdo-grotesk",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});
