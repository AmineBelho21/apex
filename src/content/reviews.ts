/**
 * Google reviews shown on the site. PLACEHOLDERS: the canvas quotes real reviews of another
 * business, which can't be reused. Replace with Apex's own Google reviews, word for word.
 */
export type Review = { quote: string; name: string; initials: string };

export const featuredReviews: Review[] = [
  { quote: "[Review 1: a real Google review, quoted word for word.]", name: "[Customer name]", initials: "[A]" },
  { quote: "[Review 2: a real Google review, quoted word for word.]", name: "[Customer name]", initials: "[B]" },
  { quote: "[Review 3: a real Google review, quoted word for word.]", name: "[Customer name]", initials: "[C]" },
  { quote: "[Review 4: a real Google review, quoted word for word.]", name: "[Customer name]", initials: "[D]" },
];
