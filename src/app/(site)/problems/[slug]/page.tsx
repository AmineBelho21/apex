import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import {
  CausesSection,
  ChecksSection,
  QuickAnswer,
  RelatedProblems,
  VerdictSection,
} from "@/components/sections/problem-sections";
import type { Crumb } from "@/components/ui/breadcrumb";
import { business } from "@/content/business";
import { problemBySlug, problemFaq, problemHref, problems } from "@/content/problems";
import { serviceByKey } from "@/content/services";
import { breadcrumbLd, faqLd } from "@/lib/seo";

/** Common-problem page: canvas artboards FridgeNotCooling, WasherLeaking, … (+ Mobile). */

export function generateStaticParams() {
  return problems.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata({ params }: PageProps<"/problems/[slug]">): Promise<Metadata> {
  const problem = problemBySlug((await params).slug);
  if (!problem) return {};
  return {
    title: `${problem.title} in ${business.city}`,
    description: problem.intro,
    alternates: { canonical: problemHref(problem.slug) },
  };
}

export default async function ProblemPage({ params }: PageProps<"/problems/[slug]">) {
  const problem = problemBySlug((await params).slug);
  if (!problem) notFound();

  const service = serviceByKey(problem.appliance);
  const faq = problemFaq(problem);
  // The canvas shows Home › Problem; the appliance in between gives a way back up to the service page.
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: `${service.name} repair`, href: service.href },
    { label: problem.title },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs, problemHref(problem.slug)), faqLd(faq)]} />
      <PageHero
        crumbs={crumbs}
        eyebrow={`${service.name} · Common problem`}
        title={
          <>
            {problem.title}
            <br />
            in {business.city}.
          </>
        }
        intro={problem.intro}
        aside={<QuickAnswer problem={problem} />}
      />
      <CausesSection problem={problem} />
      <ChecksSection problem={problem} />
      <VerdictSection problem={problem} />
      <RelatedProblems problem={problem} />
      <FaqSection items={faq} showIntro={false} />
      <ContactSection />
    </>
  );
}
