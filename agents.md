# AGENTS.md

Guidance for AI coding agents (Claude Code, Cursor, etc.) working in this repository.

## Project overview

This is a **Stitch-generated design template**, built with **React + Tailwind CSS**. Stitch exports UI screens as React components with Tailwind utility classes; this repo wraps those exports into a working, maintainable codebase.

## Tech stack

- **Framework:** React (functional components + hooks only — no class components)
- **Styling:** Tailwind CSS utility classes (no CSS modules, styled-components, or inline `style=` unless unavoidable)
- **Language:** JavaScript/TypeScript (match whatever the existing files use — don't mix)
- **Package manager:** npm (use `npm install`, not yarn/pnpm, unless a lockfile says otherwise)

## Setup commands

```bash
npm install        # install dependencies
npm run dev         # start local dev server
```

Adjust the above if `package.json` scripts differ — always check `package.json` first rather than assuming.

## Project structure

```
/src
  /components   # Reusable UI pieces (buttons, cards, nav, etc.)
  /screens      # Full Stitch-exported screens/pages
  /assets       # Images, icons, fonts exported from Stitch
  /styles       # Global Tailwind config / base styles
App.jsx          # Root component / router
```

If the actual structure differs, update this section to match — don't let it drift out of sync with reality.

## Conventions

- **Component naming:** PascalCase for components (`ProfileCard.jsx`), camelCase for utility functions.
- **Tailwind classes:** keep class lists readable; group by layout → spacing → typography → color. Avoid arbitrary values (`w-[123px]`) unless matching an exact Stitch export measurement.
- **Imports:** absolute imports from `src/` where configured; otherwise relative imports, no deep `../../../` chains — restructure instead.
- **Assets:** keep Stitch-exported images/icons in `/src/assets`, referenced via import, not hardcoded public paths, unless the project already does otherwise.
- **No inline business logic in screens:** screens compose components; logic and state live in components or hooks.

## Design fidelity

- Preserve the visual design coming out of Stitch as closely as possible (spacing, color tokens, typography scale) unless explicitly asked to change it.
- When adapting a static Stitch export into reusable components, factor out repeated UI into shared components rather than duplicating markup across screens.
- Keep Tailwind config (`tailwind.config.js`) as the single source of truth for design tokens (colors, spacing, fonts) — don't hardcode hex values in components if a token already exists.

## Testing & verification

- Run `npm run lint` and `npm run build` before considering a change complete.
- If tests exist (`npm test`), run them; if none exist, don't add a test framework unprompted — ask first.
- Visually sanity-check responsive behavior (mobile/tablet/desktop breakpoints) for any layout change, since Stitch designs are often crafted at specific breakpoints.

## What not to do

- Don't introduce a new UI library (MUI, Chakra, etc.) — this template is Tailwind-only.
- Don't remove or rewrite Tailwind utility classes wholesale "for cleanliness" — they often encode exact Stitch design values.
- Don't commit generated build output (`/dist`, `/build`) — confirm `.gitignore` covers it.
- Don't change the package manager or add lockfiles for a different one.

## Notes for agents

- This file is a starting template — update the **Project structure**, **Setup commands**, and **Tech stack** sections once the real repo content is in place, since they're currently based on common Stitch + React + Tailwind conventions rather than an inspected codebase.