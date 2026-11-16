import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/heading";
import { Stars } from "@/components/ui/stars";
import { business } from "@/content/business";
import { featuredReviews } from "@/content/reviews";

/** Google rating card + four quoted reviews. */
export function ReviewsSection() {
  const { reviews } = business;
  return (
    <section id="reviews" className="px-page flex scroll-mt-4 flex-col gap-6 pt-16 lg:gap-11 lg:pt-[120px]">
      <SectionHeading
        eyebrow={`Why ${business.city} keeps calling`}
        title={
          <>
            Real reviews.
            <br />
            Real neighbors.
          </>
        }
      />
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-5">
        <div className="squircle flex flex-col gap-3.5 rounded-card-sm bg-sand px-[22px] py-[26px] lg:rounded-panel-sm lg:p-9">
          <span className="text-14 text-subtle">Google reviews</span>
          <span className="flex flex-wrap items-baseline gap-3">
            <span className="text-[56px] leading-none font-medium tracking-[-0.04em] lg:text-[72px]">
              {reviews.rating}
            </span>
            <Stars size={16} />
          </span>
          <span className="text-15 text-muted">Based on {reviews.count} reviews</span>
          <div className="flex flex-col gap-2 pt-2">
            <ButtonLink href={reviews.readUrl} fullWidth className="h-12!">
              Read all reviews on Google
              <ArrowRightIcon size={17} />
            </ButtonLink>
            <a href={reviews.writeUrl} className="flex min-h-11 items-center justify-center text-15 text-ink underline">
              Write a Google review
            </a>
          </div>
        </div>
        <ul className="grid gap-3 lg:grid-cols-2 lg:gap-5">
          {featuredReviews.map((review, index) => (
            <li
              key={index}
              className="squircle flex flex-col gap-4 rounded-card-sm border border-line bg-white p-[22px] lg:rounded-panel-sm lg:p-7"
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
