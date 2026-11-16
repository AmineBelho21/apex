import { BusinessPageView, businessMetadata } from "@/components/sections/business-page";

/** Canvas artboards Landlords, LandlordsMobile. */
export const metadata = businessMetadata("landlords");

export default function LandlordsPage() {
  return <BusinessPageView slug="landlords" />;
}
