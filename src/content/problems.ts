import { business } from "./business";
import type { FaqItem } from "./faq";
import type { ApplianceKey } from "./services";

/**
 * Common-problem pages (canvas: FridgeNotCooling, WasherLeaking, …). Copy from the canvas;
 * prices are placeholders. Related problems are derived from the appliance (the canvas's
 * dishwasher page linked to fridge problems by mistake).
 */
export type Problem = {
  slug: string;
  appliance: ApplianceKey;
  /** Page title and breadcrumb ("Washer not draining"). */
  title: string;
  /** Hero intro under the title. */
  intro: string;
  /** Three causes, most common first. */
  causes: { name: string; price: string }[];
  /** Safe checks before booking. */
  checks: string[];
  /** Repair or replace: the headline verdict, plus an optional caveat. */
  verdict: string;
  verdictNote?: string;
};

const { gasEmergency, pricing, serviceArea, warranty } = business;
const gas = `${gasEmergency.utility} at ${gasEmergency.phone}`;

export const problems: Problem[] = [
  {
    slug: "refrigerator-not-cooling",
    appliance: "refrigerator",
    title: "Refrigerator not cooling",
    intro: "Fridge warm but the freezer still cold? Usually a fan or the defrost system, not the compressor.",
    causes: [
      { name: "Evaporator fan motor", price: "[from $380]" },
      { name: "Defrost system", price: "[PRICE]" },
      { name: "Dirty condenser coils", price: "[PRICE]" },
    ],
    checks: [
      "Check the dial or display didn’t get bumped to a warmer setting.",
      "Clear the vents inside the freezer, and keep them free of food.",
      "Pull the fridge out and vacuum the coils underneath or at the back.",
    ],
    verdict: "Usually worth fixing.",
    verdictNote: "A failed compressor on a fridge under about $3,000 is the exception.",
  },
  {
    slug: "ice-maker-not-working",
    appliance: "refrigerator",
    title: "Ice maker not working",
    intro: "No ice, slow ice or hollow cubes. Usually the ice maker module or the water inlet valve.",
    causes: [
      { name: "Ice maker module", price: "[from $410]" },
      { name: "Water inlet valve", price: "[PRICE]" },
      { name: "Frozen fill tube", price: "[PRICE]" },
    ],
    checks: [
      "Make sure the ice maker arm or switch is on.",
      "Check the water line behind the fridge isn’t kinked.",
      "Replace the water filter if it’s older than 6 months.",
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "refrigerator-leaking",
    appliance: "refrigerator",
    title: "Refrigerator leaking water",
    intro: "Water on the floor or under the crisper drawers. Most often a blocked defrost drain, nothing broken.",
    causes: [
      { name: "Clogged defrost drain", price: "[from $295]" },
      { name: "Water inlet valve", price: "[PRICE]" },
      { name: "Cracked water line", price: "[PRICE]" },
    ],
    checks: [
      "Wipe up the water and check if it comes from the front or the back.",
      "Look for ice at the back wall of the freezer.",
      "Check the water line connection behind the fridge.",
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "washer-not-draining",
    appliance: "washer",
    title: "Washer not draining",
    intro: "Standing water after the cycle or clothes soaking wet. Usually the pump or a clogged filter.",
    causes: [
      { name: "Drain pump", price: "[PRICE]" },
      { name: "Clogged pump filter", price: "[PRICE]" },
      { name: "Kinked drain hose", price: "[PRICE]" },
    ],
    checks: [
      "Check the drain hose isn’t kinked behind the machine.",
      "On a front-loader, empty the small filter at the bottom front (have towels ready).",
      "Run a drain and spin cycle once, empty.",
    ],
    verdict: "Usually worth fixing.",
  },
  {
    slug: "washer-not-spinning",
    appliance: "washer",
    title: "Washer not spinning",
    intro: "It fills and washes, but won’t spin. Often the lid switch, the belt or the bearings.",
    causes: [
      { name: "Lid switch or door lock", price: "[PRICE]" },
      { name: "Drive belt", price: "[PRICE]" },
      { name: "Bearings", price: "[PRICE]" },
    ],
    checks: [
      "Redistribute the load, a single heavy item can stop the spin.",
      "Make sure the lid or door is fully closed.",
      "Listen for a loud squeal or grinding, and tell me when you book.",
    ],
    verdict: "Lid and belt: worth fixing.",
    verdictNote: "Bearings on most front-loaders: usually replace.",
  },
  {
    slug: "washer-leaking",
    appliance: "washer",
    title: "Washer leaking",
    intro: "Water under the machine during or after a cycle. Usually the door seal or a hose.",
    causes: [
      { name: "Door boot seal", price: "[PRICE]" },
      { name: "Inlet hose", price: "[PRICE]" },
      { name: "Drain pump seal", price: "[PRICE]" },
    ],
    checks: [
      "Check the rubber door seal for tears or trapped socks.",
      "Use less detergent, too much suds can overflow.",
      "Look at the hoses behind the washer while it fills.",
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "dryer-not-heating",
    appliance: "dryer",
    title: "Dryer not heating",
    intro: "Runs, spins, but no heat. Usually the element, a thermal fuse or the gas igniter.",
    causes: [
      { name: "Heating element", price: "[PRICE]" },
      { name: "Thermal fuse", price: "[PRICE]" },
      { name: "Gas igniter", price: "[PRICE]" },
    ],
    checks: [
      "Check both breakers on an electric dryer, one can trip alone.",
      "Clean the lint screen and check the vent outside is blowing air.",
      `On gas: if you smell gas, leave and call ${gas}.`,
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "dryer-making-noise",
    appliance: "dryer",
    title: "Dryer making noise",
    intro: "Squealing, thumping or grinding. Usually rollers, the idler pulley or the belt.",
    causes: [
      { name: "Drum rollers", price: "[PRICE]" },
      { name: "Idler pulley", price: "[PRICE]" },
      { name: "Drive belt", price: "[PRICE]" },
    ],
    checks: [
      "Check pockets: coins and keys make a lot of noise.",
      "Note when it happens: at start, all cycle, or only loaded.",
      "Stop using it if you smell burning.",
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "dryer-not-starting",
    appliance: "dryer",
    title: "Dryer won’t start",
    intro: "Nothing happens when you press start. Often the door switch, the thermal fuse or the start switch.",
    causes: [
      { name: "Door switch", price: "[PRICE]" },
      { name: "Thermal fuse", price: "[PRICE]" },
      { name: "Start switch", price: "[PRICE]" },
    ],
    checks: [
      "Check the dryer is plugged in and the breaker is on.",
      "Close the door firmly, the switch can wear out.",
      "Look for a child-lock setting on the panel.",
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "oven-not-heating",
    appliance: "oven",
    title: "Oven not heating",
    intro: "Oven stays cold or heats slowly. Usually the bake igniter on gas, the element on electric.",
    causes: [
      { name: "Bake igniter (gas)", price: "[PRICE]" },
      { name: "Bake element (electric)", price: "[PRICE]" },
      { name: "Temperature sensor", price: "[PRICE]" },
    ],
    checks: [
      "Make sure the clock is set, some ovens won’t heat without it.",
      "On electric, look for a broken or blistered element.",
      `On gas, if you smell gas, leave and call ${gas}.`,
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "gas-oven-not-lighting",
    appliance: "oven",
    title: "Gas oven or burner not lighting",
    intro: "Clicking without a flame, or no click at all. Usually an igniter or the spark module.",
    causes: [
      { name: "Spark igniter", price: "[PRICE]" },
      { name: "Spark module", price: "[PRICE]" },
      { name: "Burner cap misaligned", price: "[PRICE]" },
    ],
    checks: [
      "Make sure the burner cap sits flat and dry.",
      "Clean the burner ports with a dry brush.",
      `If you smell gas, leave and call ${gas} or 911.`,
    ],
    verdict: "Almost always worth fixing.",
  },
  {
    slug: "dishwasher-not-draining",
    appliance: "dishwasher",
    title: "Dishwasher not draining",
    intro: "Water sitting in the bottom after a cycle. Usually a clogged filter or the drain pump.",
    causes: [
      { name: "Clogged filter", price: "[PRICE]" },
      { name: "Drain pump", price: "[PRICE]" },
      { name: "Blocked drain hose", price: "[PRICE]" },
    ],
    checks: [
      "Take out and rinse the filter at the bottom of the tub.",
      "If you just installed a disposal, check the knockout plug.",
      "Run the disposal, the dishwasher often drains through it.",
    ],
    verdict: "Almost always worth fixing.",
  },
];

export const problemHref = (slug: string) => `/problems/${slug}`;
export const problemBySlug = (slug: string) => problems.find((problem) => problem.slug === slug);
export const problemsFor = (appliance: ApplianceKey) => problems.filter((problem) => problem.appliance === appliance);

const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");

/** The three questions every problem page answers (templated in the canvas). */
export function problemFaq(problem: Problem): FaqItem[] {
  const title = problem.title.toLowerCase();
  return [
    {
      question: `How much does it cost to fix ${article(title)} ${title}?`,
      answer: `A flat ${pricing.diagnostic} diagnostic that goes toward the repair, then the exact price before any work. The most common fix here is ${problem.causes[0].name.toLowerCase()}.`,
    },
    {
      question: "Can you come same-week?",
      answer: `Yes, usually same-week and often same-day across ${serviceArea}.`,
    },
    {
      question: "Is the repair guaranteed?",
      answer: `Every repair is backed for ${warranty.span}. If the same issue comes back, I come back.`,
    },
  ];
}
