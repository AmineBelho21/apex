/**
 * Service areas, grouped by region. PLACEHOLDERS: the real areas aren't known yet.
 * An area with a `slug` gets its own page (solid pill); without one it's listed only (muted pill).
 * `map` places the area on the illustrative map (520×470 viewBox); the points reuse the canvas layout.
 */
export type Area = { name: string; slug?: string; map?: { x: number; y: number } };
export type AreaGroup = { name: string; areas: Area[] };

export const areaGroups: AreaGroup[] = [
  {
    name: "[Region 1]",
    areas: [
      { name: "[Area 1]", slug: "area-1", map: { x: 374, y: 197 } },
      { name: "[Area 2]", slug: "area-2", map: { x: 312, y: 376 } },
      { name: "[Area 3]", slug: "area-3", map: { x: 177, y: 122 } },
      { name: "[Area 4]", slug: "area-4", map: { x: 208, y: 28 } },
      { name: "[Area 5]", slug: "area-5", map: { x: 312, y: 282 } },
      { name: "[Area 6]", map: { x: 276, y: 244 } },
      { name: "[Area 7]" },
    ],
  },
  {
    name: "[Region 2]",
    areas: [
      { name: "[Area 8]", slug: "area-8", map: { x: 146, y: 207 } },
      { name: "[Area 9]", slug: "area-9", map: { x: 68, y: 216 } },
      { name: "[Area 10]", slug: "area-10" },
      { name: "[Area 11]" },
    ],
  },
  {
    name: "[Region 3]",
    areas: [
      { name: "[Area 12]", slug: "area-12", map: { x: 42, y: 301 } },
      { name: "[Area 13]", map: { x: 104, y: 329 } },
    ],
  },
];

/** Where the owner's shop sits on the map. */
export const shopOnMap = { x: 302, y: 216 };

export const areaHref = (slug: string) => `/areas/${slug}`;

/** Areas with their own page, in list order (the footer shows the first four). */
export const featuredAreas = areaGroups.flatMap((group) => group.areas).filter((area) => area.slug);
