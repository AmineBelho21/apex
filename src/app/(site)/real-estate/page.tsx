import { BusinessPageView, businessMetadata } from "@/components/sections/business-page";

/** Canvas artboards RealEstate, RealEstateMobile. */
export const metadata = businessMetadata("real-estate");

export default function RealEstatePage() {
  return <BusinessPageView slug="real-estate" />;
}
