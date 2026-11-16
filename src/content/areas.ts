import { business } from "./business";
import type { FaqItem } from "./faq";

/**
 * Service areas, grouped by region. PLACEHOLDERS: the real areas aren't known yet.
 * An area with a `slug` gets its own page (solid pill); without one it's listed only (muted pill).
 * `map` places the area on the illustrative map (520×470 viewBox); the points reuse the canvas layout.
 * `intro` is the one local line under the area page title (canvas, Ardmore: "Twins, singles and
 * apartments along Lancaster Avenue.").
 */
export type Area = { name: string; slug?: string; intro?: string; map?: { x: number; y: number } };
export type AreaGroup = {
  name: string;
  /** How the FAQ refers to the region: "part of my regular route in <routeLabel>". */
  routeLabel: string;
  areas: Area[];
};

const intro = "[One line about the homes and streets here.]";

export const areaGroups: AreaGroup[] = [
  {
    name: "[Region 1]",
    routeLabel: "[Region 1]",
    areas: [
      { name: "[Area 1]", slug: "area-1", intro, map: { x: 374, y: 197 } },
      { name: "[Area 2]", slug: "area-2", intro, map: { x: 312, y: 376 } },
      { name: "[Area 3]", slug: "area-3", intro, map: { x: 177, y: 122 } },
      { name: "[Area 4]", slug: "area-4", intro, map: { x: 208, y: 28 } },
      { name: "[Area 5]", slug: "area-5", intro, map: { x: 312, y: 282 } },
      { name: "[Area 6]", map: { x: 276, y: 244 } },
      { name: "[Area 7]" },
    ],
  },
  {
    name: "[Region 2]",
    routeLabel: "[Region 2]",
    areas: [
      { name: "[Area 8]", slug: "area-8", intro, map: { x: 146, y: 207 } },
      { name: "[Area 9]", slug: "area-9", intro, map: { x: 68, y: 216 } },
      { name: "[Area 10]", slug: "area-10", intro },
      { name: "[Area 11]" },
    ],
  },
  {
    name: "[Region 3]",
    routeLabel: "[Region 3]",
    areas: [
      { name: "[Area 12]", slug: "area-12", intro, map: { x: 42, y: 301 } },
      { name: "[Area 13]", map: { x: 104, y: 329 } },
    ],
  },
];

/** Where the owner's shop sits on the map. */
export const shopOnMap = { x: 302, y: 216 };

export const areaHref = (slug: string) => `/areas/${slug}`;

/** Areas with their own page, in list order (the footer shows the first four). */
export const featuredAreas = areaGroups.flatMap((group) => group.areas).filter((area) => area.slug);

export function areaBySlug(slug: string): { area: Area; group: AreaGroup } | undefined {
  for (const group of areaGroups) {
    const area = group.areas.find((candidate) => candidate.slug === slug);
    if (area) return { area, group };
  }
  return undefined;
}

/** The three questions every area page answers (templated in the canvas). */
export function areaFaq(area: Area, group: AreaGroup): FaqItem[] {
  return [
    {
      question: `Do you cover ${area.name}?`,
      answer: `Yes. ${area.name} is part of my regular route in ${group.routeLabel}. Not sure about your block? Call ${business.phone.display}.`,
    },
    {
      question: `How fast can you come to ${area.name}?`,
      answer: "Usually same-week, often same-day. Book in one text and I confirm a window within the hour.",
    },
    {
      question: "What does it cost?",
      answer: `A flat ${business.pricing.diagnostic} diagnostic that goes toward the repair, and the exact price before any work.`,
    },
  ];
}
