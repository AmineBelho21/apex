/**
 * The five appliances. Prices are placeholders (canvas values in brackets) until confirmed.
 * Step 3 adds the full service-page content.
 */
export type ApplianceKey = "refrigerator" | "washer" | "dryer" | "oven" | "dishwasher";

export type Service = {
  key: ApplianceKey;
  name: string;
  /** Short name for chips ("Fridge", "Oven"). */
  shortName: string;
  href: string;
  /** Common problems line on the home card. */
  problems: string;
  fromPrice: string;
};

export const services: Service[] = [
  {
    key: "refrigerator",
    name: "Refrigerator",
    shortName: "Fridge",
    href: "/services/refrigerator",
    problems: "Not cooling · Ice maker not working · Leaking water",
    fromPrice: "[$280]",
  },
  {
    key: "washer",
    name: "Washer",
    shortName: "Washer",
    href: "/services/washer",
    problems: "Won’t drain · Won’t spin · Leaking",
    fromPrice: "[$245]",
  },
  {
    key: "dryer",
    name: "Dryer",
    shortName: "Dryer",
    href: "/services/dryer",
    problems: "Not heating · Making noise · Won’t start",
    fromPrice: "[$245]",
  },
  {
    key: "oven",
    name: "Oven & stove",
    shortName: "Oven",
    href: "/services/oven",
    problems: "Not heating · Burner not working",
    fromPrice: "[$280]",
  },
  {
    key: "dishwasher",
    name: "Dishwasher",
    shortName: "Dishwasher",
    href: "/services/dishwasher",
    problems: "Not draining · Not cleaning",
    fromPrice: "[$265]",
  },
];
