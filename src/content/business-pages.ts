import { business } from "./business";

/**
 * The three "For business" pages (canvas: Landlords, RealEstate, Priority). One template, three
 * audiences. [CONFIRM] marks what the canvas itself left open.
 */
export type BusinessPage = {
  slug: "landlords" | "real-estate" | "priority";
  href: string;
  /** Breadcrumb and cross-links. */
  shortName: string;
  eyebrow: string;
  title: string;
  intro: string;
  reasons: { title: string; text: string }[];
  form: {
    eyebrow: string;
    /** Rendered with a line break after the comma, as in the canvas. */
    title: string;
    /** The audience-specific field ("How many rental units?"). */
    extraField: { name: string; label: string; type: "text" | "date" | "number" };
  };
};

const { city, warranty, license } = business;

export const businessPages: BusinessPage[] = [
  {
    slug: "landlords",
    href: "/landlords",
    shortName: "For landlords",
    eyebrow: "For landlords & property managers",
    title: `Appliance repair for ${city} landlords.`,
    intro:
      "When a tenant’s appliance quits, you need it fixed fast with one clear invoice and no back-and-forth. I coordinate access with your tenant, fix it same-week, and bill you one honest price.",
    reasons: [
      {
        title: "Fast turnarounds",
        text: "A vacant unit or an unhappy tenant costs you money every day. Same-week, often same-day, one point of contact.",
      },
      {
        title: "One clear invoice",
        text: "A single itemized invoice with the exact price before any work begins. No padded line items.",
      },
      {
        title: "Tenant coordination",
        text: "I call your tenant, set the window and handle access. You get a quick update when it’s done.",
      },
      {
        title: "Repairs that hold",
        text: `Backed ${warranty.span}, ${license.refrigerant} and ${license.state}-licensed. On an older unit, I’ll tell you straight if it’s not worth it.`,
      },
    ],
    form: {
      eyebrow: "Set up landlord service",
      title: "Priority scheduling, one clear invoice.",
      extraField: { name: "units", label: "How many rental units? (optional)", type: "number" },
    },
  },
  {
    slug: "real-estate",
    href: "/real-estate",
    shortName: "For real estate agents",
    eyebrow: "For real estate agents",
    title: "Appliance repairs that don’t hold up your closing.",
    intro:
      "Inspection flagged the range? Buyer wants the dishwasher working before settlement? I fix it fast, send an itemized invoice to whoever pays, and a short written note for the file.",
    reasons: [
      { title: "Before listing", text: "Get the appliances working and photo-ready before the first showing." },
      {
        title: "After inspection",
        text: "Fix the items on the report, with an invoice and a written note for the buyer’s agent.",
      },
      { title: "On your timeline", text: "Tell me the settlement date. I plan the visit and the part around it." },
      {
        title: "Invoice who pays",
        text: "Seller, buyer, or your brokerage: one clear invoice to the right person.",
      },
    ],
    form: {
      eyebrow: "Work with me on a listing",
      title: "Fast fixes before settlement.",
      extraField: { name: "settlement", label: "Settlement date (optional)", type: "date" },
    },
  },
  {
    slug: "priority",
    href: "/priority",
    shortName: "Priority & volume",
    eyebrow: "For businesses & volume work",
    title: "Priority service for businesses and portfolios.",
    intro:
      "Short-term rentals, small offices, building managers. Priority windows, one account, monthly invoicing, and the same owner on every job. [TERMS TO CONFIRM]",
    reasons: [
      { title: "Priority windows", text: "Your calls go first in the schedule. [CONFIRM RESPONSE TIME]" },
      { title: "One account", text: "All your addresses and appliances in one place, one contact." },
      { title: "Monthly invoicing", text: "One invoice a month, itemized per address. [CONFIRM]" },
      { title: "Volume pricing", text: "Better rates as the volume grows. [CONFIRM TERMS]" },
    ],
    form: {
      eyebrow: "Ask about priority service",
      title: "One account, every address.",
      extraField: { name: "addresses", label: "Number of addresses (optional)", type: "number" },
    },
  },
];

export const businessPage = (slug: BusinessPage["slug"]) => businessPages.find((page) => page.slug === slug)!;
