# Apex — build guide

## Source

Design canvas: https://claude.ai/artifact/2m3R6csg1K9RGRrajoCSK8 (titled "Philly Appliances Repair"; the project is **Apex**).
Local copy: `_sources/canvas/project/` (gitignored). Refresh it from the canvas if the design changes.

## Decisions (2026-11-15)

| Topic | Decision |
|---|---|
| Business | Same as the design: owner-operated appliance repair (fridge, washer, dryer, oven & stove, dishwasher). |
| Business facts | Not known yet (owner name, phone, address, hours, service areas, prices). Kept as placeholders in one file. |
| Language | English only, US market. |
| Design | Kept exactly as drawn. |
| Backend | None exists. Everything is built in Next.js (see Backend below). |
| Stack | Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4, ESLint 9, npm. |
| Font | BDO Grotesk 400/500/600, self-hosted (`next/font/local`). It is not on Google Fonts: the canvas's Google Fonts link fails, so the canvas preview actually renders in the fallback (Helvetica Neue on a Mac). The site renders the intended face. |
| Repo | https://github.com/AmineBelho21/apex, branch `main`. |
| Name | "Apex Appliance Repair" (logo line "APPLIANCE REPAIR"), the usual US form, decided 2026-11-16. |

## Design tokens (from the canvas)

| Token | Value | Use |
|---|---|---|
| ink | `#111111` | text, primary buttons |
| paper | `#FFFFFF` | page background |
| sand | `#F4F1EB` | tinted sections, cards |
| line | `#E3DED4` | borders, dividers |
| muted | `#57534E` | body copy |
| muted-2 | `#6B665F` | secondary labels |
| faint | `#A9A197`, `#C9C2B8` | decorative only (fail 4.5:1 for text) |
| accent | `#B8412A` | eyebrows, highlights, focus ring |
| radius | 999 (pills), 20–32px (cards), 6px (small) | |

Placeholders in the design: `[PRICE]`, `[PHOTO: …]`, `[CONFIRM]`, `[CONFIRM: cut-off time]`.

## Layout rules (step 1)

The canvas only draws 1440 and 390. In between:

- **Type and spacing** switch from the mobile to the desktop values at `lg` (1024px).
- **Header**: the desktop header (top bar, centered nav) needs ~1100px, so it shows from `xl` (1280px). Below that: the mobile header and menu. The top bar exists on desktop only, as drawn.
- **Page column**: 1200px. `px-page` = 20px on phones, then `max(32px, (100% − 1200px) / 2)`, which gives the canvas's 120px sides at 1440. Inset panels (`Panel`, footer) sit 8px / 16px from the edge and line up with the same column.
- **Footer**: the mobile canvas has no "For business" column, so it is hidden below `lg`.
- **Squircle corners** (`corner-shape: squircle`) as in the canvas; browsers without support show plain rounded corners.
- **Additions the canvas doesn't draw**: field error state (accent border + 13px accent message), disabled buttons (50% opacity), focus ring on the newsletter pill, "Skip to content" link, and a Services dropdown in the desktop header (the canvas draws the chevron but no menu; decided 2026-11-16).

## Code conventions

- Tokens only: the default Tailwind palette and type scale are switched off. Sizes are named in px (`text-15`, `text-52`).
- Business facts: `src/content/business.ts`. Navigation: `src/content/navigation.ts`.
- `cn()` doesn't merge conflicting classes. To override a utility a component sets, mark it important: `px-[18px]!`.
- Internal links go through `SmartLink` / `ButtonLink` (next/link); `tel:`, `sms:` and external links stay plain anchors.

## Page inventory → routes

| Template | Artboards | Route |
|---|---|---|
| Home | Main, HomeMobile | `/` |
| Service | Refrigerator, Washer, Dryer, Oven, Dishwasher | `/services/[appliance]` |
| Brand | GE | `/brands/[brand]` |
| Problem | 12 (FridgeNotCooling, WasherLeaking…) | `/problems/[slug]` |
| Service area | 14 (Fishtown, Ardmore…) | `/areas/[slug]` |
| Business | Landlords, RealEstate, Priority | `/landlords`, `/real-estate`, `/priority` |
| Simple pages | About, Reviews, FAQ, Warranty, Thanks, Privacy, Terms, NotFound | `/about`, `/reviews`, `/faq`, `/warranty`, `/thanks`, `/privacy`, `/terms`, 404 |
| Booking | Book + Flow01–06 (branches 01b, 03b) | `/book` |
| After booking | Received/Flow07, ManageVisit, Quote/Flow10, Pay/Flow11, Flow12 | `/visit/[token]/…` |
| SMS | Flow08, 09, 10b, 12 | not pages: text messages sent by the backend |
| Journey | Journey | reference only (end-to-end story), not a page |

Final URL slugs are confirmed at step 4.

## Backend (all in Next.js)

No separate server: Next.js route handlers / server actions. Building blocks below approved by the user (2026-11-15).

**Hosting: not decided yet, likely Cloudflare (or similar), not Vercel.** Next.js runs on Cloudflare through the OpenNext adapter. Until hosting is picked, avoid Vercel-only features (`@vercel/*` packages, Vercel KV/Blob/Edge Config) and keep anything host-specific behind a small module.

- **Data:** Postgres (Neon, serverless driver: works from Cloudflare or any host) + Drizzle ORM. Tables: requests, visits, quotes, payments, contacts.
- **Validation:** Zod, shared by the forms and the server.
- **Notifications:** email via Resend (owner + customer). SMS via Twilio.
  US business texting needs **A2P 10DLC registration**, which can take days to weeks: start it as soon as the business details are known.
- **Payments:** Stripe (card). Venmo, Zelle and cash are marked as paid by the owner.
- **Owner space:** a small protected `/admin` to see requests, confirm windows, write quotes. Needed from step 8.

Until step 7, forms validate on the client and do not send anything.

## Steps

Each step ends with lint + typecheck + build passing and the user's approval.

0. **Setup** — Next scaffold, font, git, docs, design sources. ✅
1. **Design system** — tokens in `globals.css`, type scale, UI kit (Button, Chip, Card, Input, Textarea, Accordion, SectionHeader), top bar, header + mobile menu, footer. ✅ Review page: `/dev/ui` (development only).
2. **Home** — every section, desktop and mobile, matched to the canvas. ✅ Sections in `src/components/sections/` (reused by later templates). Content placeholders: canvas values in brackets (`[$89]`, `[90-day]`); the canvas's Google reviews belong to another business and are NOT reused.
3. **Content layer** — `src/content/`: business facts (placeholders), services, problems, areas, brands, reviews, FAQs. Apex replaces the Philly identity.
4. **Templates** — service, brand, problem and area pages, statically generated; metadata, LocalBusiness JSON-LD, sitemap, robots.
5. **Simple pages** — About, Reviews, FAQ, the 3 business pages, Warranty, Thanks, Privacy, Terms, 404.
6. **Booking wizard (front)** — `/book`, 6 steps + branches (ZIP outside the area, not worth fixing), validation.
7. **Backend v1** — database, booking requests, contact / business / warranty / newsletter forms, email + SMS to the owner and the customer.
8. **After booking** — visit page (received, manage, cancel), quote approval, Stripe payment, receipt + warranty, owner `/admin`.
9. **Launch** — performance, accessibility pass, analytics, domain, deploy (host to be chosen, likely Cloudflare).
