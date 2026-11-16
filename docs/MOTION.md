# UI motion & fluidity

Rules supplied by the project owner (2026-11-16). They apply to ALL UI work. The "How it's done
here" section maps them onto this codebase; the rules themselves follow, as given.

## How it's done here

| Rule | Implementation |
|---|---|
| Tokens | `globals.css`: `--ease-out`, `--ease-in-out`, `--ease-ios`, `--ease-spring` (Tailwind `ease-*`), `--dur-press` 80ms, `--dur-fast` 150ms, `--dur-base` 250ms, `--dur-spring` 400ms, `--dur-slow` 450ms (`duration-(--dur-base)`). Never hard-code a curve or a duration. |
| Spring | No JS animation library: `--ease-spring` is a damped spring (bounce 0.1) sampled as CSS `linear()`, used with `--dur-spring` for things that scale in (menus). |
| Interruptible | State changes are CSS transitions. `@keyframes` only for View Transitions (the API requires them). |
| Entrance on mount | `enter` utility: `@starting-style` + transition, 12px rise, stagger `[--i:n]` (40ms, cap 300ms). |
| Scroll reveal | `reveal` utility + `components/motion-runtime.tsx` (IntersectionObserver, once). 16px rise. Stagger via `stagger(index)` from `lib/motion.ts`. Hover effects go on a child, never on the `.reveal` element. Hidden only once the runtime runs (`html[data-motion]`). |
| Sticky header | Glass layer behind the header fades in (opacity) when `html[data-scrolled]` (sentinel observer). |
| Glass | `glass` utility: white 70%, `blur(20px) saturate(180%)`, hairline `rgb(0 0 0 / .06)`. Header and popovers only. |
| Shadows | `shadow-menu`, `shadow-float`, `shadow-lift`: three stacked soft layers. Hover shadows are a pseudo-element whose opacity fades (`lift`). |
| Press / hover | Buttons and chips `active:scale-[0.97]` in `--dur-press`. Hover is pointer-only (Tailwind `hover:` = `@media (hover: hover)`). `nav-pill`, `lift` utilities. |
| Height | Never animated. Accordion rows open at once; the answer fades and rises 8px. |
| Page transitions | `app/(site)/template.tsx`: fade (default), `nav-forward` / `nav-back` 24px slides via `<Link transitionTypes>`. Header anchored. |
| Scrolling | Native. `scroll-behavior: smooth` for in-page anchors only; Next jumps instantly between routes. |
| Reduced motion | The §12 snippet, plus View Transition pseudo-elements. |

**Deliberate exceptions (user decisions that predate these rules):**
- Font: BDO Grotesk stays (the design is kept exactly), not the system / SF stack of §11.
- Spacing: the canvas's measurements are kept even where they are off the 8px grid (§11).
- Dark mode: the site has none, so the dark glass variant isn't used.

---

## The rules

### 1. Easing & Timing
- NEVER use `linear` easing for UI motion (only for spinners/progress bars).
- Entrances use ease-out. Exits are faster than entrances (~70% of enter duration).
- Durations: micro-interactions (hover, press, toggle) 100–200ms; small UI (dropdowns, tooltips, popovers) 200–300ms; large (modals, sheets, page transitions) 350–500ms. Never exceed 600ms unless explicitly requested.
- Prefer spring physics over fixed durations for anything that moves. Low bounce (0–0.15). Bounce only for playful/celebratory moments.

### 2. Design tokens
Use the tokens, never hard-code curves/durations: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`, `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`, `--ease-ios: cubic-bezier(0.32, 0.72, 0, 1)`, `--dur-fast: 150ms`, `--dur-base: 250ms`, `--dur-slow: 450ms`. With Motion (Framer Motion), default spring `{ type: "spring", bounce: 0.1, duration: 0.4 }`.

### 3. Interruptibility (critical)
- Every animation must be interruptible and retarget smoothly from its current position. No jumps, no waiting for an animation to finish.
- Use CSS `transition` for state changes, NOT `@keyframes` (keyframes restart from zero).
- For JS-driven motion, use a spring library (Motion / react-spring), never setTimeout-chained animations.

### 4. Direct manipulation
- Draggable elements follow the pointer 1:1 with no easing or lag during drag.
- On release, carry the gesture velocity into the spring animation.
- Rubber-band resistance past bounds (never a hard stop).
- Sheets/drawers dismiss on swipe velocity OR distance threshold.

### 5. Instant feedback
- Pressed state appears in <100ms: `transform: scale(0.97)` on :active.
- Every interactive element has hover (pointer devices only, `@media (hover: hover)`), active and focus-visible states.
- Optimistic UI: update immediately, sync in the background, roll back on error.
- Only show loaders if an action takes >300ms.

### 6. Spatial continuity
- Elements come from somewhere: modals/popovers scale and fade from their trigger (transform-origin).
- Shared-element transitions (View Transitions API or Motion `layoutId`) for list → detail.
- Navigation direction matches hierarchy: forward = slide in from right, back = slide out to right.

### 7. Performance (60–120fps)
- ONLY animate `transform` and `opacity`. Never width, height, top, left, margin or padding.
- `will-change: transform` only on elements about to animate, never globally.
- Zero layout shift: reserve image space with `aspect-ratio`, skeleton placeholders, fade images in on load.
- `backdrop-filter` sparingly, never on large scrolling areas or many elements.
- No heavy JS on the main thread during animations.

### 8. Depth & materials
- Translucent glass for nav bars, sheets, popovers: `background: rgb(255 255 255 / 0.7)` (dark: `rgb(30 30 30 / 0.7)`), `backdrop-filter: blur(20px) saturate(180%)`, `border: 1px solid rgb(0 0 0 / 0.06)`.
- Soft layered shadows (2–3 stacked, low opacity, large blur), never one harsh shadow.
- When a modal/sheet opens, dim the background; optionally scale it to 0.95.

### 9. Scrolling
- Native scrolling. NEVER hijack scroll or alter scroll speed with smooth-scroll libraries.
- `scroll-snap` for carousels, `overscroll-behavior: contain` for modals and inner scroll areas.
- Sticky headers gain a blur + hairline bottom border once the page is scrolled.
- Scroll-reveal: subtle fade + 8–20px upward translate, triggered once.

### 10. Restraint
- Every animation has a purpose: explain a change, show origin/destination, or confirm an action. No decorative motion.
- Small distances: 8–24px.
- List stagger: 30–50ms per item, total capped at ~300ms.

### 11. Visual details
- Font stack: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif.
- Large headings: letter-spacing -0.02em to -0.04em. Body line-height ~1.5.
- Generous whitespace on an 8px grid.
- Consistent large radii; nested: inner radius = outer radius − padding.
- `corner-shape: squircle` inside `@supports`.

### 12. Accessibility (mandatory)
Reduced-motion support, replacing movement with simple fades rather than removing feedback:
`@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }`

### Checklist before finishing any UI task
- [ ] No linear easing; all motion uses the tokens
- [ ] Only transform/opacity animated
- [ ] Animations are interruptible
- [ ] Press/hover/focus states exist and respond in <100ms
- [ ] No layout shift during loading
- [ ] Elements animate from/to their logical origin
- [ ] prefers-reduced-motion is respected
- [ ] Nothing exceeds 600ms
