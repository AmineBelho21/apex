import Link from "next/link";
import { business, telHref } from "@/content/business";
import { footerColumns, legalLinks } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";

/** Dark rounded footer, inset like the panels. */
export function SiteFooter() {
  return (
    <footer className="squircle mx-2 mb-2 flex flex-col gap-8 rounded-panel-sm bg-ink px-[22px] pt-11 pb-7 text-white lg:mx-4 lg:mb-4 lg:gap-12 lg:rounded-footer lg:px-[max(32px,calc((100%-1232px)/2))] lg:pt-[72px] lg:pb-10">
      <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-[60px]">
        <div className="flex flex-col gap-[18px]">
          <Logo tone="light" />
          <p className="max-w-[300px] text-15 leading-[1.55] text-on-ink-muted">{business.blurb}</p>
          <a href={telHref} className="self-start text-26 font-medium tracking-[-0.02em] text-white lg:text-30">
            {business.phone.display}
          </a>
        </div>
        <div className="flex max-w-[360px] flex-col gap-3">
          <p className="text-17 font-medium">Repair tips, no spam.</p>
          <p className="text-14 leading-normal text-on-ink-muted">
            A short note now and then on keeping your appliances alive longer.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-7 border-t border-white/12 pt-7 lg:grid-cols-5 lg:gap-8 lg:pt-10">
        {footerColumns.map((column) => (
          <nav
            key={column.title}
            aria-label={column.title}
            className={cn("flex-col gap-0.5", column.desktopOnly ? "hidden lg:flex" : "flex")}
          >
            <p className="mb-2 text-13 text-on-ink-faint">{column.title}</p>
            {column.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex min-h-10 items-center text-15 text-white lg:min-h-[34px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      <div className="flex flex-col gap-3.5 border-t border-white/12 pt-6 text-13 text-on-ink-faint lg:flex-row lg:items-center lg:justify-between">
        <p>
          {business.legalName} · {business.address}
          {legalLinks.map((link) => (
            <span key={link.href}>
              {" · "}
              <Link href={link.href} className="underline">
                {link.label}
              </Link>
            </span>
          ))}
        </p>
        <p className="flex flex-wrap items-center gap-2">
          Pay how you like
          {business.paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-badge border border-white/20 px-2.5 py-1 text-12 font-medium text-white"
            >
              {method}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
