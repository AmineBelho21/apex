"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { business, telHref } from "@/content/business";
import { bookHref, mainNav } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { Logo } from "./logo";

/**
 * Mobile header: logo, round call button, round menu button. The menu opens as a floating card
 * under the header. Closes on Escape (focus back on the button), outside tap, link tap, or when
 * the viewport grows to the desktop header.
 */
export function MobileHeader({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(width >= 80rem)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <div className="flex h-[68px] items-center justify-between border-b border-line pr-3.5 pl-[18px]">
        <Logo compact />
        <div className="flex items-center gap-1.5">
          <a
            href={telHref}
            aria-label={`Call ${business.phone.display}`}
            className="flex size-11 items-center justify-center rounded-full bg-sand text-ink"
          >
            <PhoneIcon size={18} />
          </a>
          <button
            ref={buttonRef}
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink"
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Closed = invisible (out of the tab order and the accessibility tree), so it can fade and scale. */}
      <nav
        id={menuId}
        aria-label="Main"
        className={cn(
          "squircle absolute inset-x-2.5 top-[76px] z-30 flex origin-top-right flex-col rounded-menu border border-line bg-white px-5 pt-2.5 pb-[18px] shadow-menu",
          "transition-[opacity,scale,visibility] duration-300 ease-out-expo motion-reduce:transition-none",
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0",
        )}
      >
        {mainNav.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={close}
            style={{ transitionDelay: open ? `${60 + index * 35}ms` : "0ms" }}
            className={cn(
              "group flex min-h-[52px] items-center justify-between border-b border-line text-18 text-ink",
              "transition-[opacity,translate] duration-500 ease-out-expo motion-reduce:transition-none",
              open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
            )}
          >
            {item.label}
            <ArrowRightIcon size={16} />
          </Link>
        ))}
        <div className="pt-3.5">
          <ButtonLink href={bookHref} onClick={close} variant="primary" fullWidth className="h-[52px]! text-16!">
            Book my repair
            <ArrowRightIcon size={17} />
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
}
