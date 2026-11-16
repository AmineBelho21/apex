"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Stars } from "@/components/ui/stars";
import { business } from "@/content/business";
import { allReviews, reviewTopics, type ReviewTopic } from "@/content/reviews";
import { cn } from "@/lib/cn";

/**
 * Reviews page: topic filter (radio pills; the canvas draws them static) and a 3-column grid.
 * Switching topic swaps the list instantly and the cards fade in (@starting-style, no layout animation).
 */
export function ReviewsBrowser() {
  const [topic, setTopic] = useState<ReviewTopic | "all">("all");
  const shown = topic === "all" ? allReviews : allReviews.filter((review) => review.topic === topic);
  const options = [{ key: "all" as const, label: "All" }, ...reviewTopics];

  return (
    <section className="px-page flex flex-col gap-6 pt-12 lg:gap-8 lg:pt-20">
      <fieldset className="reveal">
        <legend className="sr-only">Filter reviews</legend>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0">
          {options.map((option) => (
            <label
              key={option.key}
              className={cn(
                "inline-flex h-11 shrink-0 cursor-pointer items-center rounded-full border px-4 text-14 transition-[scale] duration-(--dur-fast) ease-out active:scale-[0.97] active:duration-(--dur-press)",
                "has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-accent",
                topic === option.key ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink",
              )}
            >
              <input
                type="radio"
                name="review-topic"
                value={option.key}
                checked={topic === option.key}
                onChange={() => setTopic(option.key)}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <ul aria-live="polite" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {shown.map((review, index) => (
          <li
            key={`${topic}-${index}`}
            style={{ transitionDelay: `${Math.min(index * 40, 300)}ms` }}
            className="squircle flex flex-col gap-4 rounded-card-sm border border-line bg-white p-[22px] transition-[opacity,translate] duration-(--dur-slow) ease-out starting:translate-y-3 starting:opacity-0 lg:rounded-panel-sm lg:p-7"
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
      {shown.length === 0 ? <p className="text-15 text-muted">No reviews on this topic yet.</p> : null}

      <div className="reveal flex justify-center pt-2">
        <ButtonLink href={business.reviews.readUrl} variant="outline">
          Read all {business.reviews.count} on Google
          <ArrowRightIcon size={17} />
        </ButtonLink>
      </div>
    </section>
  );
}
