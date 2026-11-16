import { business } from "./business";
import type { FaqItem } from "./faq";

/**
 * The five appliances and their service pages (canvas: Refrigerator, Washer, Dryer, Oven, Dishwasher).
 * Copy from the canvas. Prices and anything tied to the old business are placeholders: canvas
 * value in brackets, or [PRICE] where the canvas had none.
 */
export type ApplianceKey = "refrigerator" | "washer" | "dryer" | "oven" | "dishwasher";

export type CommonProblem = {
  title: string;
  likelyCause: string;
  price: string;
  /** Slug of the matching problem page, when there is one. */
  problem?: string;
};

export type Service = {
  key: ApplianceKey;
  slug: string;
  name: string;
  /** Short name for chips ("Fridge", "Oven"). */
  shortName: string;
  /** Lower-case name used inside sentences ("fridge", "oven & stove"). */
  noun: string;
  href: string;
  /** Common problems line on the home card. */
  problems: string;
  fromPrice: string;
  /** Hero intro after "<Name> repair in <city>." */
  intro: string;
  commonProblemsTitle: string;
  commonProblems: CommonProblem[];
  brandsTitle: string;
  brands: string[];
  faq: FaqItem[];
};

const { pricing, serviceArea, gasEmergency } = business;
const gasLine = `call ${gasEmergency.utility} at ${gasEmergency.phone} or 911`;

const costAnswer = (noun: string, from: string) =>
  `A flat ${pricing.diagnostic} diagnostic that goes toward the repair. Most ${noun} repairs start from ${from}, and you get the exact price before any work.`;

export const services: Service[] = [
  {
    key: "refrigerator",
    slug: "refrigerator",
    name: "Refrigerator",
    shortName: "Fridge",
    noun: "fridge",
    href: "/services/refrigerator",
    problems: "Not cooling · Ice maker not working · Leaking water",
    fromPrice: "[$280]",
    intro: `Not cooling, leaking, a dead ice maker or frost build-up. Every major brand, owner-backed, with a flat ${pricing.diagnostic} diagnostic that goes toward the repair.`,
    commonProblemsTitle: "Common fridge problems, with upfront prices.",
    commonProblems: [
      { title: "Not cooling", likelyCause: "Evaporator fan motor", price: "[from $380]", problem: "refrigerator-not-cooling" },
      { title: "Leaking", likelyCause: "Clogged defrost drain", price: "[from $295]", problem: "refrigerator-leaking" },
      { title: "Ice maker", likelyCause: "Ice maker module", price: "[from $410]", problem: "ice-maker-not-working" },
      { title: "Freezer warm", likelyCause: "Evaporator fan", price: "[from $390]" },
      { title: "Too cold", likelyCause: "Thermistor / temp sensor", price: "[from $340]" },
    ],
    brandsTitle: "Every major refrigerator brand.",
    brands: ["Whirlpool", "LG", "Samsung", "GE", "Frigidaire", "KitchenAid", "Bosch", "Sub-Zero"],
    faq: [
      { question: "How much does a refrigerator repair cost?", answer: costAnswer("fridge", "[$280]") },
      {
        question: "My fridge isn’t cooling, can you come same-week?",
        answer: `Yes. Not-cooling is one of the most common jobs, usually same-week and often same-day across ${serviceArea}.`,
      },
      {
        question: "What refrigerator brands do you work on?",
        answer: "Every major brand, including Whirlpool, LG, Samsung, GE, Frigidaire, KitchenAid and Sub-Zero.",
      },
      {
        question: "Do you fix ice makers and water leaks?",
        answer: "Yes, ice makers, water dispensers, leaks and frost build-up are all standard fridge repairs.",
      },
    ],
  },
  {
    key: "washer",
    slug: "washer",
    name: "Washer",
    shortName: "Washer",
    noun: "washer",
    href: "/services/washer",
    problems: "Won’t drain · Won’t spin · Leaking",
    fromPrice: "[$245]",
    intro: `Won’t drain, won’t spin, leaking or shaking the floor. Top-load and front-load, every major brand, with a flat ${pricing.diagnostic} diagnostic that goes toward the repair.`,
    commonProblemsTitle: "Common problems, with upfront prices.",
    commonProblems: [
      { title: "Won’t drain", likelyCause: "Drain pump or clogged filter", price: "[PRICE]", problem: "washer-not-draining" },
      { title: "Won’t spin", likelyCause: "Lid switch or drive belt", price: "[PRICE]", problem: "washer-not-spinning" },
      { title: "Leaking", likelyCause: "Door boot seal or inlet hose", price: "[PRICE]", problem: "washer-leaking" },
      { title: "Loud or shaking", likelyCause: "Bearings or shock absorbers", price: "[PRICE]" },
      { title: "Won’t start", likelyCause: "Lid lock or control board", price: "[PRICE]" },
    ],
    brandsTitle: "Every major brand.",
    brands: ["Whirlpool", "LG", "Samsung", "GE", "Maytag", "Speed Queen", "Bosch", "Electrolux"],
    faq: [
      { question: "How much does a washer repair cost?", answer: costAnswer("washer", "[$245]") },
      {
        question: "My washer won’t drain, can you come same-week?",
        answer: "Yes. Drain problems are one of the most common washer jobs, usually same-week and often same-day.",
      },
      {
        question: "Is a front-load washer worth fixing?",
        answer:
          "Often, yes. A squeal with no spin is usually the bearings, and on most machines that is a replace. I’ll tell you which side you’re on before you spend anything.",
      },
      {
        question: "Do you fix stackable units?",
        answer: "Yes. Tell me it’s stackable when you book, so I plan the time and bring the right tools.",
      },
    ],
  },
  {
    key: "dryer",
    slug: "dryer",
    name: "Dryer",
    shortName: "Dryer",
    noun: "dryer",
    href: "/services/dryer",
    problems: "Not heating · Making noise · Won’t start",
    fromPrice: "[$245]",
    intro: `Not heating, squeaking, won’t start or taking forever. Gas and electric, every major brand, with a flat ${pricing.diagnostic} diagnostic that goes toward the repair.`,
    commonProblemsTitle: "Common problems, with upfront prices.",
    commonProblems: [
      {
        title: "Not heating",
        likelyCause: "Heating element, thermal fuse or gas igniter",
        price: "[PRICE]",
        problem: "dryer-not-heating",
      },
      { title: "Making noise", likelyCause: "Drum rollers or idler pulley", price: "[PRICE]", problem: "dryer-making-noise" },
      { title: "Won’t start", likelyCause: "Door switch or thermal fuse", price: "[PRICE]", problem: "dryer-not-starting" },
      { title: "Takes too long", likelyCause: "Vent packed with lint", price: "[from $245]" },
      { title: "Shuts off mid-cycle", likelyCause: "Thermostat or overheating", price: "[PRICE]" },
    ],
    brandsTitle: "Every major brand.",
    brands: ["Whirlpool", "LG", "Samsung", "GE", "Maytag", "Speed Queen", "Frigidaire", "Bosch"],
    faq: [
      { question: "How much does a dryer repair cost?", answer: costAnswer("dryer", "[$245]") },
      {
        question: "My dryer runs but doesn’t heat. Same-week?",
        answer: "Yes, no-heat is one of the most common dryer jobs, usually same-week, often same-day.",
      },
      {
        question: "Do you work on gas dryers?",
        answer: `Yes, gas and electric. If you ever smell gas, leave the building and ${gasLine} first.`,
      },
      {
        question: "Should I clean my dryer vent?",
        answer:
          "Yes. A packed vent is the most common reason a dryer takes forever, and it’s a fire risk. I check it on every dryer visit.",
      },
    ],
  },
  {
    key: "oven",
    slug: "oven",
    name: "Oven & stove",
    shortName: "Oven",
    noun: "oven and stove",
    href: "/services/oven",
    problems: "Not heating · Burner not working",
    fromPrice: "[$280]",
    intro: `Oven not heating, a burner that won’t light, temperatures that are way off. Gas and electric ranges, wall ovens and cooktops, with a flat ${pricing.diagnostic} diagnostic.`,
    commonProblemsTitle: "Common problems, with upfront prices.",
    commonProblems: [
      { title: "Oven not heating", likelyCause: "Bake igniter or element", price: "[PRICE]", problem: "oven-not-heating" },
      {
        title: "Burner won’t light",
        likelyCause: "Spark igniter or spark module",
        price: "[PRICE]",
        problem: "gas-oven-not-lighting",
      },
      { title: "Temperature is off", likelyCause: "Temperature sensor", price: "[PRICE]" },
      { title: "Door won’t unlock", likelyCause: "Door lock motor", price: "[PRICE]" },
      { title: "Clicking won’t stop", likelyCause: "Spark switch", price: "[PRICE]" },
    ],
    brandsTitle: "Every major brand.",
    brands: ["GE", "Whirlpool", "Samsung", "LG", "Frigidaire", "KitchenAid", "Bosch", "Viking"],
    faq: [
      {
        question: "How much does an oven repair cost?",
        answer: `A flat ${pricing.diagnostic} diagnostic that goes toward the repair. Most oven and stove repairs start from [$280], with the exact price before any work.`,
      },
      {
        question: "My gas oven won’t light. Is it dangerous?",
        answer: `A weak igniter is common and not dangerous on its own. But if you smell gas, leave right away and ${gasLine} from outside.`,
      },
      {
        question: "Do you repair glass cooktops?",
        answer:
          "I fix the controls and elements. A cracked glass top usually costs close to a new unit, and I’ll tell you so.",
      },
      { question: "Do you work on wall ovens?", answer: "Yes, single and double wall ovens, gas and electric." },
    ],
  },
  {
    key: "dishwasher",
    slug: "dishwasher",
    name: "Dishwasher",
    shortName: "Dishwasher",
    noun: "dishwasher",
    href: "/services/dishwasher",
    problems: "Not draining · Not cleaning",
    fromPrice: "[$265]",
    intro: `Water sitting at the bottom, dishes still dirty, leaks or a dead control panel. Every major brand, with a flat ${pricing.diagnostic} diagnostic that goes toward the repair.`,
    commonProblemsTitle: "Common problems, with upfront prices.",
    commonProblems: [
      {
        title: "Not draining",
        likelyCause: "Drain pump or clogged filter",
        price: "[PRICE]",
        problem: "dishwasher-not-draining",
      },
      { title: "Not cleaning", likelyCause: "Spray arms or wash motor", price: "[PRICE]" },
      { title: "Leaking", likelyCause: "Door gasket or hose", price: "[PRICE]" },
      { title: "Won’t start", likelyCause: "Door latch or control board", price: "[PRICE]" },
      { title: "Not drying", likelyCause: "Heating element or vent", price: "[PRICE]" },
    ],
    brandsTitle: "Every major brand.",
    brands: ["Bosch", "Whirlpool", "KitchenAid", "GE", "Samsung", "LG", "Frigidaire", "Miele"],
    faq: [
      { question: "How much does a dishwasher repair cost?", answer: costAnswer("dishwasher", "[$265]") },
      {
        question: "There’s water sitting in the bottom. Can you come same-week?",
        answer: "Yes. Not draining is the most common dishwasher job, usually same-week, often same-day.",
      },
      {
        question: "Do you fix Bosch and Miele?",
        answer: "Yes, including the compact European units common in city condos.",
      },
      {
        question: "Is my dishwasher worth fixing?",
        answer:
          "Most faults are. A failed tub or a rusted-through base usually isn’t, and I’ll tell you before you spend anything.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
export const serviceByKey = (key: ApplianceKey) => services.find((service) => service.key === key)!;
