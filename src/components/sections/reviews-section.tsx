import { SectionHeading } from "@/components/ui/heading";
import { Stars } from "@/components/ui/stars";
import { business } from "@/content/business";
import { featuredReviews } from "@/content/reviews";
import { RatingCard } from "./rating-card";
import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";

/**
 * Google rating card + quoted reviews. `count` 4 (home): 2×2 grid beside the card;
 * 2 (service, area, brand pages): one row of three columns.
 */
export function ReviewsSection({ count = 4 }: { count?: 2 | 4 }) {
  const row = count === 2;
  return (
    <section id="reviews" className="px-page flex scroll-mt-20 xl:scroll-mt-24 flex-col gap-6 pt-16 lg:gap-11 lg:pt-[120px]">
      <SectionHeading
        className="reveal"
        eyebrow={`Why ${business.city} keeps calling`}
        title={
          <>
            Real reviews.
            <br />
            Real neighbors.
          </>
        }
      />
      <div
        className={cn(
          "flex flex-col gap-3 lg:grid lg:items-start lg:gap-5",
          row ? "lg:grid-cols-[340px_minmax(0,1fr)_minmax(0,1fr)]" : "lg:grid-cols-[340px_minmax(0,1fr)]",
        )}
      >
        <RatingCard className="reveal" />
        <ul className={cn("grid gap-3 lg:gap-5", row ? "lg:col-span-2 lg:grid-cols-2" : "lg:grid-cols-2")}>
          {featuredReviews.slice(0, count).map((review, index) => (
            <li
              key={index}
              style={stagger(index + 1)}
              className="reveal squircle flex flex-col gap-4 rounded-card-sm border border-line bg-white p-[22px] lg:rounded-panel-sm lg:p-7"
            >
              <div className="flex items-center justify-between">
                <Stars size={14} />
                <span className="text-12 text-subtle">Verified · Google</span>
              </div>
              <blockquote className="text-16 leading-normal text-ink lg:text-17">“{review.quote}”</blockquote>
              <div className="mt-auto flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full bg-sand text-13 font-medium"
                >
                  {review.initials}
                </span>
                <span className="text-15 font-medium">{review.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
