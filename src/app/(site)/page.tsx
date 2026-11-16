import { AreasSection } from "@/components/sections/areas-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OwnerNote } from "@/components/sections/owner-note";
import { ProofStrip } from "@/components/sections/proof-strip";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { generalFaq } from "@/content/faq";

/** Home: canvas artboards Main (1440) and HomeMobile (390). */
export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ServicesGrid />
      <OwnerNote />
      <HowItWorks />
      <ReviewsSection />
      <AreasSection />
      <FaqSection items={generalFaq} />
      <ContactSection />
    </>
  );
}
