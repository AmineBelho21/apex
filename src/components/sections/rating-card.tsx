import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Stars } from "@/components/ui/stars";
import { business } from "@/content/business";
import { cn } from "@/lib/cn";

/**
 * Google rating summary: big rating, stars, count, "Read all reviews" and "Write a review".
 * `sand` on light sections, `ink` inside a dark band (business pages).
 */
export function RatingCard({ tone = "sand", className }: { tone?: "sand" | "ink"; className?: string }) {
  const { reviews } = business;
  const ink = tone === "ink";
  return (
    <div
      className={cn(
        "squircle flex flex-col gap-3.5 rounded-card-sm px-[22px] py-[26px] lg:rounded-panel-sm lg:p-9",
        ink ? "bg-white/6 text-white" : "bg-sand text-ink",
        className,
      )}
    >
      <span className={cn("text-14", ink ? "text-on-ink-muted" : "text-subtle")}>Google reviews</span>
      <span className="flex flex-wrap items-baseline gap-3">
        <span className="text-[56px] leading-none font-medium tracking-[-0.04em] lg:text-[72px]">{reviews.rating}</span>
        <Stars size={16} />
      </span>
      <span className={cn("text-15", ink ? "text-on-ink-muted" : "text-muted")}>Based on {reviews.count} reviews</span>
      <div className="flex flex-col gap-2 pt-2">
        <ButtonLink href={reviews.readUrl} variant={ink ? "secondary" : "primary"} fullWidth className="h-12!">
          Read all reviews on Google
          <ArrowRightIcon size={17} />
        </ButtonLink>
        <a
          href={reviews.writeUrl}
          className={cn("flex min-h-11 items-center justify-center text-15 underline", ink ? "text-white" : "text-ink")}
        >
          Write a Google review
        </a>
      </div>
    </div>
  );
}
