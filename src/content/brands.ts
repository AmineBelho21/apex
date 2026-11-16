import { business } from "./business";
import type { FaqItem } from "./faq";
import type { ApplianceKey } from "./services";

/**
 * Brand pages (canvas: GE). Independent repair, not affiliated with the brand: the page says so.
 * [CONFIRM] marks what the canvas itself left unconfirmed.
 */
export type Brand = {
  slug: string;
  name: string;
  /** Hero intro after "<Name> appliance repair in <city>." */
  intro: string;
  fromPrice: string;
  /** Product lines shown in the hero proof row and the "lines" section. */
  lines: string[];
  linesNote: string;
  commonRepairs: { title: string; likelyCause: string; price: string; appliance: ApplianceKey; problem?: string }[];
  faq: FaqItem[];
};

export const brands: Brand[] = [
  {
    slug: "ge",
    name: "GE",
    intro:
      `GE refrigerators, washers, dryers, ranges and dishwashers. Parts on the van for the most common GE faults, and a flat ${business.pricing.diagnostic} diagnostic.`,
    fromPrice: "[$245]",
    lines: ["GE", "GE Profile", "Café [CONFIRM]", "Monogram [CONFIRM]"],
    linesNote: "Tell me the model number when you book, it helps me bring the right part.",
    commonRepairs: [
      {
        title: "GE fridge not cooling",
        likelyCause: "Evaporator fan or defrost",
        price: "[from $380]",
        appliance: "refrigerator",
        problem: "refrigerator-not-cooling",
      },
      {
        title: "GE ice maker",
        likelyCause: "Ice maker module",
        price: "[from $410]",
        appliance: "refrigerator",
        problem: "ice-maker-not-working",
      },
      {
        title: "GE washer won’t spin",
        likelyCause: "Lid lock or belt",
        price: "[PRICE]",
        appliance: "washer",
        problem: "washer-not-spinning",
      },
      {
        title: "GE dryer not heating",
        likelyCause: "Element or thermal fuse",
        price: "[PRICE]",
        appliance: "dryer",
        problem: "dryer-not-heating",
      },
      {
        title: "GE oven not heating",
        likelyCause: "Bake igniter",
        price: "[PRICE]",
        appliance: "oven",
        problem: "oven-not-heating",
      },
      {
        title: "GE dishwasher not draining",
        likelyCause: "Drain pump",
        price: "[PRICE]",
        appliance: "dishwasher",
        problem: "dishwasher-not-draining",
      },
    ],
    faq: [
      {
        question: "Do you use genuine GE parts?",
        answer: "Genuine or equivalent OEM parts, and I tell you which before I install it. [CONFIRM]",
      },
      {
        question: "Is my GE worth fixing?",
        answer: "Most GE faults are. A sealed-system failure on an older, lower-priced fridge usually isn’t.",
      },
      {
        question: "Where is the model number?",
        answer:
          "Fridge: inside, on the left wall. Washer and dryer: inside the door or under the lid. Range: behind the drawer.",
      },
    ],
  },
];

export const brandHref = (slug: string) => `/brands/${slug}`;
export const brandBySlug = (slug: string) => brands.find((brand) => brand.slug === slug);
