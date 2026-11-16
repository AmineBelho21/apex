import type { Metadata } from "next";
import Link from "next/link";
import { ApplianceIcon } from "@/components/appliance-icon";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MessagePage } from "@/components/sections/message-page";
import { ButtonLink } from "@/components/ui/button";
import { business, telHref } from "@/content/business";
import { bookHref } from "@/content/navigation";

/**
 * 404 (canvas: NotFound, NotFoundMobile). Lives at the root so it covers unknown URLs and
 * notFound() alike, so it brings the site header and footer itself.
 */
export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

const shortcuts = [
  { label: "Book a repair", href: bookHref },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="content" className="flex-1">
        <MessagePage
          icon={
            <span className="squircle flex size-[120px] items-center justify-center rounded-[28px] bg-sand lg:size-40 lg:rounded-footer">
              <ApplianceIcon appliance="washer" size={64} strokeWidth={1.2} className="lg:size-[88px]" />
            </span>
          }
          tag={<span className="rounded-full bg-accent-tint px-3.5 py-2 text-14 font-medium text-accent">Error 404</span>}
          title="This page is out of order."
          text="It may have moved, or the link is broken. The phone still works, though."
        >
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <ButtonLink href="/" size="xl" className="h-[54px]! px-6!">
              Back to home
              <ArrowRightIcon size={17} />
            </ButtonLink>
            <ButtonLink href={telHref} size="xl" variant="outline" className="h-[54px]! px-6!">
              <PhoneIcon size={18} />
              Call {business.phone.display}
            </ButtonLink>
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {shortcuts.map((shortcut) => (
              <li key={shortcut.label}>
                <Link
                  href={shortcut.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-15 transition-[scale] duration-(--dur-fast) ease-out hover:border-ink hover:opacity-100 active:scale-[0.97] active:duration-(--dur-press)"
                >
                  {shortcut.label}
                </Link>
              </li>
            ))}
          </ul>
        </MessagePage>
      </main>
      <SiteFooter />
    </div>
  );
}
