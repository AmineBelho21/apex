import { Lead, SectionHeading } from "@/components/ui/heading";

// Placeholder until step 2 (Home). The UI kit is at /dev/ui in development.
export default function Home() {
  return (
    <section className="px-page flex flex-col gap-6 py-16 lg:py-[120px]">
      <SectionHeading eyebrow="Step 1" title="Home lands in step 2." as="h1" />
      <Lead>Header, footer and the UI kit are in place. Open /dev/ui to review the components.</Lead>
    </section>
  );
}
