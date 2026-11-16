import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { LegalPage } from "@/components/sections/legal-page";
import { terms } from "@/content/legal";
import { breadcrumbLd } from "@/lib/seo";

/** Canvas artboards Terms, TermsMobile. Draft copy, to be reviewed by the owner and a lawyer. */

export const metadata: Metadata = { title: "Terms & Conditions", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ label: "Home", href: "/" }, { label: terms.title }], "/terms")} />
      <LegalPage doc={terms} />
    </>
  );
}
