import { business } from "./business";

export type FaqItem = { question: string; answer: string };

const { pricing, warranty } = business;

/** General questions: home page (and the FAQ page in step 5). Copy from the canvas; numbers are placeholders. */
export const generalFaq: FaqItem[] = [
  {
    question: "How much does an appliance repair cost?",
    answer: `Every visit is a flat ${pricing.diagnostic} diagnostic that goes toward the repair when you move forward. Most repairs start from ${pricing.typicalFrom}, and you get the exact price before any work begins, no surprises at the door.`,
  },
  {
    question: `Does the ${pricing.diagnostic} diagnostic get wasted if I don’t repair?`,
    answer: `No. The ${pricing.diagnostic} covers the visit and a full diagnosis. If you go ahead, it comes straight off your repair total. If you decide not to, you still know exactly what’s wrong and what it would take, no pressure.`,
  },
  {
    question: "Do you cover my brand?",
    answer:
      "Every major brand, including Whirlpool, LG, Samsung, GE, Frigidaire, Maytag, KitchenAid and Bosch. Tell me the brand and the symptom and I’ll tell you straight whether it’s worth fixing.",
  },
  {
    question: "How soon can you come out?",
    answer:
      "Most jobs are booked the same week, and often same-day. Book in one text or through the site, and I confirm your window, usually within the hour.",
  },
  {
    question: "Do you offer a warranty?",
    answer: `Every repair is backed for ${warranty.span}. If the same issue comes back, I come back.`,
  },
  {
    question: "Should I repair or replace my appliance?",
    answer: `It comes down to what the machine is worth, not to what broke. I’ll tell you which side you’re on before you spend anything, because a ${pricing.diagnostic} visit on a machine that’s finished is no good for you or for me.`,
  },
];

/** The FAQ page: the home questions plus four more (canvas: FAQ). */
export const faqPage: FaqItem[] = [
  ...generalFaq,
  {
    question: "What appliances do you repair?",
    answer:
      "Five major appliances: refrigerators, washers, dryers, ovens and stoves, and dishwashers. I don’t service small appliances or microwaves.",
  },
  {
    question: "Are you licensed?",
    answer: `Owner-operated shop, licensed in ${business.license.stateName} and ${business.license.refrigerant} for refrigerant work.`,
  },
  {
    question: "Do you offer fixed price appliance repair?",
    answer: `The ${pricing.diagnostic} diagnostic is fixed and comes off the repair. The repair gets a fixed price too, once the machine has been seen, before any work.`,
  },
  {
    question: "What areas do you cover?",
    answer: `All of ${business.serviceArea}. Same-week, often same-day.`,
  },
];
