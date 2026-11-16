import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { LegalPage } from "@/components/sections/legal-page";
import { privacy } from "@/content/legal";
import { breadcrumbLd } from "@/lib/seo";

/** Canvas artboards Privacy, PrivacyMobile. Draft copy, to be reviewed by the owner and a lawyer. */

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ label: "Home", href: "/" }, { label: privacy.title }], "/privacy")} />
      <LegalPage doc={privacy} />
    </>
  );
}
