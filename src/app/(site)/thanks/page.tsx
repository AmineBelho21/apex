import type { Metadata } from "next";
import { ArrowRightIcon, ClockIcon, MessageIcon, ShieldCheckIcon } from "@/components/icons";
import { MessagePage } from "@/components/sections/message-page";
import { ButtonLink } from "@/components/ui/button";
import { business } from "@/content/business";

/** Thank you (after a form): canvas artboards Thanks, ThanksMobile. Not indexed. */

export const metadata: Metadata = { title: "Thanks", robots: { index: false } };

const notes = [
  { icon: <MessageIcon size={18} />, text: `Keep your phone close, I’ll text from ${business.phone.display}.` },
  { icon: <ClockIcon size={18} />, text: "Outside hours? First thing next business day." },
  {
    icon: <ShieldCheckIcon size={18} />,
    text: `Smell gas? Leave and call ${business.gasEmergency.utility} at ${business.gasEmergency.phone}.`,
  },
];

export default function ThanksPage() {
  return (
    <MessagePage
      icon={
        <span className="flex size-[72px] items-center justify-center rounded-full bg-success-tint text-success">
          <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
      }
      title="Got it. Thanks."
      text={`Your message went straight to ${business.ownerFirstName}’s phone. You’ll get a text back, usually within the hour, ${business.hours}.`}
    >
      <ul className="squircle flex w-full max-w-[560px] flex-col gap-3 rounded-menu bg-sand p-[22px] text-left">
        {notes.map((note) => (
          <li key={note.text} className="flex items-center gap-3 text-15">
            <span className="shrink-0 text-accent">{note.icon}</span>
            {note.text}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <ButtonLink href="/" size="xl" className="h-[54px]! px-6!">
          Back to home
          <ArrowRightIcon size={17} />
        </ButtonLink>
        <ButtonLink href="/reviews" size="xl" variant="outline" className="h-[54px]! px-6!">
          Read reviews
        </ButtonLink>
      </div>
    </MessagePage>
  );
}
