import { BusinessPageView, businessMetadata } from "@/components/sections/business-page";

/** Canvas artboards Priority, PriorityMobile. */
export const metadata = businessMetadata("priority");

export default function PriorityPage() {
  return <BusinessPageView slug="priority" />;
}
