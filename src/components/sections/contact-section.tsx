import type { ReactNode } from "react";
import { ClockIcon, MessageIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Lead, SectionHeading } from "@/components/ui/heading";
import { business, smsHref, telHref } from "@/content/business";
import { ContactForm } from "./contact-form";

function Detail({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-16">
      <span className="text-accent">{icon}</span>
      {children}
    </li>
  );
}

/** "Straight to the owner": contact details on the left, the message form on the right. Last section of a page. */
export function ContactSection({ title = "Tell me what’s going on.", area }: { title?: ReactNode; area?: string }) {
  return (
    <section id="contact" className="px-page scroll-mt-20 xl:scroll-mt-24 py-16 lg:py-[120px]">
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-[72px]">
        <div className="reveal flex flex-col gap-[18px]">
          <SectionHeading eyebrow="Straight to the owner" title={title} className="gap-[18px]!" />
          <Lead className="max-w-[440px]">
            This goes <strong className="font-semibold text-ink">straight to my phone</strong>. I’m{" "}
            {business.ownerFirstName}, the owner. No call center, no run-around.
          </Lead>
          <ul className="flex flex-col gap-3 pt-2">
            <Detail icon={<ClockIcon size={18} />}>Open {business.hours}</Detail>
            <Detail icon={<PinIcon size={18} />}>{business.address}</Detail>
            <Detail icon={<PhoneIcon size={18} />}>
              <a href={telHref} className="text-ink">
                {business.phone.display}
              </a>
            </Detail>
          </ul>
          <div className="flex flex-wrap gap-2 pt-1.5">
            <ButtonLink href={smsHref} variant="outline">
              <MessageIcon size={18} />
              Text me what’s wrong
            </ButtonLink>
          </div>
        </div>
        <ContactForm area={area} />
      </div>
    </section>
  );
}
