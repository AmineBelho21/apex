import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { business, telHref } from "@/content/business";
import { bookHref, mainNav } from "@/content/navigation";
import { Logo } from "./logo";
import { MobileHeader } from "./mobile-header";
import { NavMenu } from "./nav-menu";
import { TopBar } from "./top-bar";

/**
 * Top bar + header. The desktop header (84px, centered nav) needs ~1100px, so it takes over
 * from 1280px; below that the mobile header (68px, call + menu buttons) is used.
 */
export function SiteHeader() {
  return (
    <>
      <TopBar />
      <header className="relative z-20">
        <div className="px-page hidden h-[84px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center bg-white xl:grid">
          <Logo />
          <nav aria-label="Main" className="flex">
            {mainNav.map((item) =>
              item.submenu ? (
                <NavMenu key={item.label} label={item.label} href={item.href} links={item.submenu} />
              ) : (
                <Link key={item.label} href={item.href} className="flex h-11 items-center px-3.5 text-15 text-ink">
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex justify-end gap-2">
            <ButtonLink href={telHref} variant="soft" size="md" className="gap-2! px-[18px]! font-normal!">
              <PhoneIcon size={16} />
              {business.phone.display}
            </ButtonLink>
            <ButtonLink href={bookHref} variant="primary" size="md">
              Book a repair
            </ButtonLink>
          </div>
        </div>
        <MobileHeader className="xl:hidden" />
      </header>
    </>
  );
}
