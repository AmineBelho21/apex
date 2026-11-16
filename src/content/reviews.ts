/**
 * Google reviews shown on the site. PLACEHOLDERS: the canvas quotes real reviews of another
 * business, which can't be reused. Replace with Apex's own Google reviews, word for word, and tag
 * each with what it was about (the Reviews page filters on it).
 */
export type ReviewTopic = "refrigerator" | "washer" | "dryer" | "oven" | "dishwasher" | "landlords";
export type Review = { quote: string; name: string; initials: string; topic: ReviewTopic };

export const reviewTopics: { key: ReviewTopic; label: string }[] = [
  { key: "refrigerator", label: "Refrigerator" },
  { key: "washer", label: "Washer" },
  { key: "dryer", label: "Dryer" },
  { key: "oven", label: "Oven" },
  { key: "dishwasher", label: "Dishwasher" },
  { key: "landlords", label: "Landlords" },
];

const placeholder = (n: number, topic: ReviewTopic): Review => ({
  quote: `[Review ${n}: a real Google review, quoted word for word.]`,
  name: "[Customer name]",
  initials: `[${String.fromCharCode(64 + n)}]`,
  topic,
});

export const allReviews: Review[] = [
  placeholder(1, "refrigerator"),
  placeholder(2, "washer"),
  placeholder(3, "dryer"),
  placeholder(4, "oven"),
  placeholder(5, "dishwasher"),
  placeholder(6, "landlords"),
  placeholder(7, "washer"),
  placeholder(8, "dryer"),
  placeholder(9, "refrigerator"),
];

/** The four shown on the home page (two on service, area and brand pages). */
export const featuredReviews: Review[] = allReviews.slice(0, 4);

/** The quote on the business pages (canvas: a landlord's review). */
export const businessQuote = {
  quote: "[A landlord’s or property manager’s Google review, quoted word for word.]",
  name: "[Customer name]",
};
