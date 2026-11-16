"use client";

import { useEffect } from "react";

/**
 * Drives the two scroll-linked states (docs/MOTION.md):
 * - `.reveal` blocks get `data-revealed` the first time they enter the viewport (once, never again).
 * - `<html data-scrolled>` once the page leaves the top, so the sticky header shows its glass layer.
 *
 * Only IntersectionObservers: no scroll listeners, scrolling stays native. Content is hidden only
 * after `<html data-motion>` is set here, and blocks already on screen are revealed before that,
 * so nothing flashes and nothing depends on JavaScript.
 */
export function MotionRuntime() {
  useEffect(() => {
    const root = document.documentElement;

    const revealer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          revealer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const track = (element: Element) => {
      if (element.hasAttribute("data-revealed")) return;
      const box = element.getBoundingClientRect();
      // Already visible when tracking starts: show it as is, no animation.
      if (!root.hasAttribute("data-motion") && box.top < window.innerHeight && box.bottom > 0) {
        element.setAttribute("data-revealed", "");
        return;
      }
      revealer.observe(element);
    };

    document.querySelectorAll(".reveal").forEach(track);
    root.setAttribute("data-motion", "");

    // Blocks added later (client navigation, opened content) are picked up too.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".reveal")) track(node);
          node.querySelectorAll(".reveal").forEach(track);
        });
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    // A 1px sentinel at the very top: when it leaves the viewport, the page is scrolled.
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none";
    document.body.prepend(sentinel);
    const scrolled = new IntersectionObserver(([entry]) => {
      root.toggleAttribute("data-scrolled", !entry.isIntersecting);
    });
    scrolled.observe(sentinel);

    return () => {
      revealer.disconnect();
      mutations.disconnect();
      scrolled.disconnect();
      sentinel.remove();
      root.removeAttribute("data-motion");
      root.removeAttribute("data-scrolled");
    };
  }, []);

  return null;
}
