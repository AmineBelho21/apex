/**
 * Every business fact the site prints, in one place.
 *
 * PLACEHOLDERS: the real facts are not known yet (2026-11-15). Values in [BRACKETS] must be
 * replaced before launch; never fill them with invented numbers (ratings, review counts, prices).
 * The phone is a reserved fictional US number (555-01xx). The canvas's values are in comments
 * only to show the expected format.
 */
export const business = {
  name: "Apex",
  legalName: "Apex Appliance Repair",
  /** Logo lockup: big word + small line under it (canvas: PHILLY / APPLIANCES REPAIR; "Appliance" is the usual US form). */
  wordmark: "APEX",
  wordmarkLine: "APPLIANCE REPAIR",
  /** Footer blurb. Canvas: "Owner-operated appliance repair in Philadelphia and the Main Line." */
  blurb: "Owner-operated appliance repair in [SERVICE AREA].",
  ownerFirstName: "[OWNER]",
  /** Canvas format: "267-388-3044". */
  phone: { display: "555-555-0100", digits: "5555550100" },
  /** Canvas: "Mon–Fri, 9am–6pm". */
  hours: "[HOURS]",
  /** Canvas: "Philadelphia & the Main Line". */
  serviceArea: "[SERVICE AREA]",
  /** Canvas: "1431 N 20th St, Philadelphia, PA 19121". */
  address: "[STREET], [CITY], [STATE] [ZIP]",
  /** Canvas: 4.8 · 219 Google reviews. */
  reviews: {
    rating: "[RATING]",
    count: "[COUNT]",
    readUrl: "#",
    writeUrl: "#",
  },
  smsBody: "Hi! I need an appliance repair. When can you come take a look?",
  paymentMethods: ["Card", "Venmo", "Zelle", "Cash"],
} as const;

export const telHref = `tel:${business.phone.digits}`;
export const smsHref = `sms:${business.phone.digits}?&body=${encodeURIComponent(business.smsBody)}`;
