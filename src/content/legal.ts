import { business } from "./business";

/**
 * Privacy Policy and Terms (canvas copy). DRAFTS: the canvas marks them "to be reviewed by the
 * owner and a lawyer"; keep the [CONFIRM] marks until that's done.
 */
export type LegalDoc = { title: string; updated: string; sections: { id: string; title: string; body: string }[] };

const { pricing, warranty, phone, email, legalName, address, gasEmergency, paymentMethods } = business;
const contact = `${legalName}, ${address}. ${phone.display}.`;

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  updated: "[DATE]",
  sections: [
    {
      id: "collect",
      title: "What we collect",
      body: "When you book or contact us: your name, phone number, email if you give it, service address, the appliance and the problem, and how we get in (lockbox, doorman, door code).",
    },
    {
      id: "use",
      title: "Why we use it",
      body: `Only to schedule and do your repair: confirm your window, send updates, invoice you, and back the repair for ${warranty.span}.`,
    },
    {
      id: "texts",
      title: "Text messages",
      body: "We text only about your repair: confirmation, arrival window, any change, and one message after the job. No promotions. Reply STOP to stop, HELP for help. Message and data rates may apply.",
    },
    {
      id: "sharing",
      title: "Who sees it",
      body: "Us and the technician doing your job. We never sell or share your details. Payment is handled by our payment provider. [CONFIRM PROVIDERS]",
    },
    {
      id: "access",
      title: "Access details",
      body: "Door codes and lockbox codes are used for your visit only and deleted after the job. [CONFIRM]",
    },
    { id: "retention", title: "How long we keep it", body: "Job records are kept for [CONFIRM] for warranty and accounting." },
    {
      id: "cookies",
      title: "Cookies and analytics",
      body: "The site uses [CONFIRM: analytics provider]. You can block cookies in your browser.",
    },
    {
      id: "choices",
      title: "Your choices",
      body: `Ask us to see, correct or delete your data: text or call ${phone.display} or email ${email}.`,
    },
    { id: "contact", title: "Contact", body: contact },
  ],
};

export const terms: LegalDoc = {
  title: "Terms & Conditions",
  updated: "[DATE]",
  sections: [
    {
      id: "service-call",
      title: "The service call",
      body: `Every visit is a ${pricing.diagnostic} diagnostic. If you go ahead with the repair, the full ${pricing.diagnostic} comes off the repair total. If you decide not to repair, the ${pricing.diagnostic} covers the visit and the diagnosis.`,
    },
    {
      id: "quotes",
      title: "Quotes",
      body: "You get the exact price before any work begins. Nothing is done without your approval.",
    },
    {
      id: "parts",
      title: "Parts",
      body: "If a part has to be ordered, we tell you the expected date. [CONFIRM: deposit on special-order parts?]",
    },
    {
      id: "warranty",
      title: "Warranty",
      body: `Every repair is backed for ${warranty.span}, parts and labor, on the same issue. [CONFIRM SCOPE AND EXCLUSIONS]`,
    },
    {
      id: "scheduling",
      title: "Scheduling",
      body: "A requested window isn’t booked until we confirm it by text. Need to change it? Reply to the text or use the link in your confirmation. [CONFIRM CANCELLATION POLICY]",
    },
    {
      id: "access",
      title: "Access",
      body: "Someone 18+ must be home, or access must be arranged (lockbox, doorman, door code).",
    },
    {
      id: "payment",
      title: "Payment",
      body: `Due when the repair is done. ${paymentMethods.slice(0, -1).join(", ")} or ${paymentMethods.at(-1)?.toLowerCase()}. [CONFIRM]`,
    },
    {
      id: "safety",
      title: "Safety",
      body: `If you smell gas, leave the building and call ${gasEmergency.utility} at ${gasEmergency.phone} or 911. We won’t work on an appliance we consider unsafe.`,
    },
    { id: "contact", title: "Contact", body: contact },
  ],
};
