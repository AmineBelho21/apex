/**
 * Site navigation. Routes are provisional until step 4 (see docs/GUIDE.md, page inventory);
 * most of them 404 until their step lands.
 */
import { areaHref, featuredAreas } from "./areas";

export type NavLink = { label: string; href: string };

/** The five appliances: header Services menu and footer column. */
export const serviceLinks: NavLink[] = [
  { label: "Refrigerator", href: "/services/refrigerator" },
  { label: "Washer", href: "/services/washer" },
  { label: "Dryer", href: "/services/dryer" },
  { label: "Oven & stove", href: "/services/oven" },
  { label: "Dishwasher", href: "/services/dishwasher" },
];

/** Header nav (desktop) and mobile menu, same order as the canvas. */
export const mainNav: (NavLink & { submenu?: NavLink[] })[] = [
  // The canvas draws a chevron here but no menu: on desktop it opens the five services (decided 2026-11-16).
  { label: "Services", href: "/#services", submenu: serviceLinks },
  { label: "How it works", href: "/#how" },
  // Canvas links this to the Fishtown page (prototype shortcut).
  { label: "Service areas", href: "/#areas" },
  { label: "Landlords", href: "/landlords" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

export const bookHref = "/book";

export type FooterColumn = { title: string; links: NavLink[]; desktopOnly?: boolean };

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: serviceLinks,
  },
  {
    title: "Common problems",
    links: [
      { label: "Oven not heating", href: "/problems/oven-not-heating" },
      { label: "Dryer not heating", href: "/problems/dryer-not-heating" },
      { label: "Fridge leaking water", href: "/problems/refrigerator-leaking" },
      { label: "Washer not draining", href: "/problems/washer-not-draining" },
      { label: "Dryer making noise", href: "/problems/dryer-making-noise" },
    ],
  },
  {
    title: "Service areas",
    links: [
      ...featuredAreas.slice(0, 4).map((area) => ({ label: area.name, href: areaHref(area.slug!) })),
      { label: "All areas", href: "/#areas" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About the owner", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "How it works", href: "/#how" },
      { label: "FAQ", href: "/faq" },
      { label: "Warranty claim", href: "/warranty" },
    ],
  },
  {
    title: "For business",
    // The mobile canvas leaves this column out of the footer.
    desktopOnly: true,
    links: [
      { label: "Landlords & property managers", href: "/landlords" },
      { label: "Real estate agents", href: "/real-estate" },
      { label: "Priority & volume service", href: "/priority" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
