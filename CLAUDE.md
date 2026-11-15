@AGENTS.md

# Apex

Marketing site + online booking for **Apex**, an owner-operated appliance repair business in the US.
Rebuilt from a design canvas originally titled "Philly Appliances Repair". The plan, decisions and step order live in [docs/GUIDE.md](docs/GUIDE.md).

## Rules

- **The design is the spec.** Match it exactly: spacing, sizes, colors, copy structure. Never "improve" it without asking first.
- **Design source:** `_sources/canvas/project/*.dc.html` (gitignored, one file per artboard, `<Name>.dc.html` = desktop 1440, `<Name>Mobile.dc.html` = mobile 390). `_sources/outline.py <file>` prints a text outline of one artboard. Index: `_sources/canvas/project/canvas.json`.
- **One responsive page per artboard pair.** Desktop and mobile artboards are the same route.
- **English only** (US market). US formats: phone `(555) 555-0100`, `$295`, `Mon–Fri, 9am–6pm`.
- **Brand name is Apex.** Never ship "Philly Appliances Repair", "Tariq", or that business's phone, address, Google links or reviews. Every business fact comes from one file (`src/content/business.ts`, step 3). Unknown facts stay as visible placeholders; never invent them.
- **Font:** BDO Grotesk (OFL), self-hosted in `src/app/fonts/`, weights 400/500/600 only.
- **Accessibility as drawn:** real `<a>`, `<button>`, `<label>`; focus ring `2px #B8412A`, offset 3px.
- Only add a dependency when a step needs it, and say why.
- Work step by step; the user approves each step. Do not commit or push unless asked.

## Commands

- `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`
