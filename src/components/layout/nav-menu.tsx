"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import type { NavLink } from "@/content/navigation";
import { cn } from "@/lib/cn";

/**
 * Desktop nav item with a small dropdown (Services). The canvas draws the chevron but no menu;
 * this opens a card styled like the mobile menu. Closes on Escape, outside click or link click.
 */
export function NavMenu({ label, href, links }: { label: string; href: string; links: NavLink[] }) {
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
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 items-center gap-1 px-3.5 text-15 text-ink"
      >
        {label}
        <ChevronDownIcon size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>
      <div
        id={menuId}
        hidden={!open}
        className="squircle absolute top-full left-0 z-30 mt-2 flex w-[260px] flex-col rounded-menu border border-line bg-white px-5 pt-1.5 pb-3 shadow-menu"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className="flex min-h-11 items-center border-b border-line text-15 text-ink"
          >
            {link.label}
          </Link>
        ))}
        <Link href={href} onClick={close} className="flex min-h-11 items-center text-15 text-muted underline">
          All services
        </Link>
      </div>
    </div>
  );
}
