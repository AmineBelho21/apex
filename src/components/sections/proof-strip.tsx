import { business } from "@/content/business";
import { cn } from "@/lib/cn";

const { pricing, warranty, license } = business;

const proofs = [
  { figure: pricing.diagnostic, title: "Diagnostic.", text: "Applied to your repair.", accent: true },
  { figure: warranty.label, title: "Warranty.", text: "On every repair." },
  { figure: "$0", title: "Surprises.", text: "Upfront price before any work." },
  { figure: "1", title: "Owner.", text: "On every job, start to finish." },
  { figure: license.state, title: "Licensed.", text: `And ${license.refrigerant} for refrigerant.` },
];

/** Five figures under the hero: 2 columns with top rules on phones, 5 columns with left rules on desktop. */
export function ProofStrip() {
  return (
    <section aria-label="Why book with us" className="px-page pt-9 lg:pt-16">
      <div className="grid grid-cols-2 gap-x-4 lg:-mx-6 lg:grid-cols-5 lg:gap-0">
        {proofs.map((proof) => (
          <div
            key={proof.title}
            className="reveal flex flex-col gap-1.5 border-t border-line py-4 lg:border-t-0 lg:border-l lg:px-6 lg:py-0"
          >
            <span
              className={cn(
                "text-[34px] font-medium tracking-[-0.03em] lg:text-44",
                proof.accent ? "text-accent" : "text-ink",
              )}
            >
              {proof.figure}
            </span>
            <span className="text-15">
              <strong className="font-semibold">{proof.title}</strong> <span className="text-muted">{proof.text}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
