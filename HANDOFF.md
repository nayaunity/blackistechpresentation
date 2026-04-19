# Handoff · Flickering Hearth

Session date: 2026-04-19
Owner: Nyaradzo "Naya" Bere (@nayaunity)
Repo: https://github.com/nayaunity/flickering-hearth (private)
Local path: `/Users/nyaradzobere/Documents/coding2026/blackistechpractice/`
Plan file: `/Users/nyaradzobere/.claude/plans/please-build-out-a-flickering-hearth.md`

## What this is

A mood-based portfolio. The visitor is asked one question on entry ("Why are you here?") and the site rebuilds itself into one of three distinct worlds based on the answer: **Hire Me** (editorial/gold), **Collaborate** (neon/violet), **Just Curious** (liquid/cream). Targeted at Anthropic DevRel recruiters, potential collaborators, and casual TikTok/YouTube visitors.

## What was done this session

### 1. Scaffold
Next.js 16.1.1 · React 19.2.3 · TypeScript strict · Tailwind CSS v4 · `framer-motion` ^11.11.17. Five self-hosted Google fonts via `next/font`: Geist Sans, Geist Mono, Fraunces, Space Grotesk, Instrument Serif, Caveat.

### 2. Mood shell
- `src/lib/mood-context.tsx` — `useSyncExternalStore` wrapper around `localStorage`, emits a custom `flickering-hearth:mood-change` event on same-origin writes.
- `src/app/globals.css` — palette switching via `html[data-mood="…"]` + CSS custom properties (`--bg`, `--fg`, `--accent`, `--accent-2`, `--surface`, `--font-display`).
- `src/components/Gate.tsx` — the entry question overlay with three glowing doors.
- `src/components/MoodTransition.tsx` — three wipe variants (gold sweep / neon glitch / liquid bloom).
- `src/components/VibeToggle.tsx` — corner toggle, persistent, opens a menu to switch mood or reopen the gate.
- `src/app/page.tsx` — orchestrator. Moods are `next/dynamic` with `ssr: false` so only the Gate ships on first paint.

### 3. Three worlds
Each under `src/components/moods/<Name>/`:
- **HireMe**: `ArchitecturalLines` canvas + Hero, CaseStudies, Experience, BookCTA.
- **Collaborate**: `NeonOrbs` canvas (cursor-tracking) + IdeaBoard (draggable stickies), ProjectsGrid, ContactBand.
- **Curious**: `LiquidBlobs` canvas (scroll-velocity reactive) + Story (3 chapters), NowReading, EasterEgg (word-keeper), Closing.

All three canvases: `requestAnimationFrame`, DPR-aware, pause on `visibilitychange`, fall back to static gradient under `prefers-reduced-motion`.

### 4. Personalization
Three sub-agents ran in parallel (Hire / Collaborate / Curious). Each owned its content file and its mood folder. Zero file conflicts. Content comes from:
- Resume: `/Users/nyaradzobere/Documents/NBere_Resume_Anthropic_DevRel.pdf`
- LinkedIn: `https://linkedin.com/in/theblackfemaleengineer`
- GitHub: `https://github.com/nayaunity` (pinned: PortfolioGPT, ManageAI, Confer)
- Screenshots provided by Naya during the session.

Real data only. No fabricated stats, companies, or achievements.

### 5. Copywriting pass
Applied the copywriting skill from https://github.com/alirezarezvani/claude-skills/tree/main/marketing-skill/copywriting to the Hire Me and Collaborate doors. Tightened headlines (benefit-forward, specific numbers), reshaped CTAs to action+outcome ("Email Naya about the role"), sharpened case-study titles.

### 6. Em-dash purge
Every em dash (—) in user-facing copy and component strings was replaced with real grammar. Patterns chosen:
- Parens for parentheticals
- Colons for lists-after-a-noun
- Periods for emphatic pauses
- Commas for beats
- Word "to" for date ranges ("2021 to Now")
- Middot "·" for the metadata title separator

### 7. GitHub setup
Private repo `nayaunity/flickering-hearth` created. Two open issues:
- **#1 Deploy to Vercel + wire custom domain** — highest-leverage next move
- **#2 Add real imagery — headshot, project screenshots, per-mood OG cards** — biggest polish gap

## Problems and fixes

### ESLint `react-hooks/set-state-in-effect` (React 19)
Calling `setMood(stored)` synchronously inside a `useEffect` for localStorage hydration triggered the new strict rule. Fix: refactored `mood-context.tsx` to use `useSyncExternalStore` with `subscribe` + `getSnapshot` + `getServerSnapshot`. Removed the separate `hydrated` state (also tripped the rule); the server snapshot returning `null` handles SSR cleanly.

### Custom storage events
`window.addEventListener("storage", …)` only fires for **other** tabs, not same-origin writes. Added a custom `CustomEvent("flickering-hearth:mood-change")` dispatched inside `writeStoredMood()` so the subscriber sees in-tab writes too.

### Unescaped apostrophe (`react/no-unescaped-entities`)
Sub-agent added `that's` inside JSX text in `Curious/Story.tsx`. Replaced with `that&apos;s`.

### Git commit author
First commit landed with the local default git identity (not `NayaUnityBere@gmail.com`). User was flagged. To fix attribution on future commits:
```
git config --global user.name "Nyaradzo Bere"
git config --global user.email "NayaUnityBere@gmail.com"
```
Not yet done.

### Next-env.d.ts is gitignored
Next 16 rewrites `next-env.d.ts` to import `./.next/types/routes.d.ts`. It's in `.gitignore`, so explicitly excluded from `git add`.

## Architectural decisions (load-bearing)

- **No WebGL.** HTML 2D canvas only. Confirmed with user during plan phase.
- **Each mood is its own world.** No shared "hearth" motif across modes. Confirmed with user.
- **Content lives in `src/lib/content/<mood>.ts` files** (not a single `content.ts`). This was a deliberate split to let three parallel sub-agents edit without file conflicts. `src/lib/content.ts` is now a barrel re-export.
- **Identity is separate** (`src/lib/identity.ts`) so updating Naya's name/email/links is a single-file change.
- **Mood state persists via `localStorage` only.** No cookies, no backend.
- **Lazy-load per mood via `next/dynamic` with `ssr: false`.** Gate ships in the first paint; mood bundles load on selection.
- **Palette is CSS vars + `data-mood` attribute on `<html>`.** Any new canvas/component can read `getComputedStyle(document.documentElement).getPropertyValue("--accent")` at runtime so it reshades automatically on mood change.
- **`prefers-reduced-motion` is respected in every canvas** (freezes to static gradient) and in every framer-motion transition.

## Dev server state

A background Next dev server was started on port 3000 during the session (`npx next dev -p 3000`). It may or may not still be running when the next session begins. Check and kill before restarting:
```
ps aux | grep "next dev" | grep -v grep
pkill -f "next dev"
```

## Verification results at end of session

- `npx tsc --noEmit` → clean
- `npx eslint .` → clean
- `npx next build` → 3 static pages generated, no errors
- `curl http://localhost:3000/` → 200 OK, Gate SSRs with all three doors visible
- Smoke path: Gate → pick mood → wipe transition → mood renders → VibeToggle reopens gate → reload keeps the chosen mood

## What is *not* done

- **No real imagery** anywhere. No headshot, no project screenshots, no favicon, no OG image. Filed as issue #2.
- **Not deployed.** Only runs locally. Filed as issue #1.
- **No tests.** Zero unit or integration tests. Not scoped this session.
- **Mobile untested** on a real device. Should work (grid collapses, canvases resize) but not verified.
- **No analytics.** Decide later: Vercel Analytics, Plausible, or nothing.
- **Easter-egg word is client-only.** The word the visitor types is held in component state and nothing persists it anywhere, which matches the intended "it's just for you" promise. If that ever changes, add a privacy note.
- **Git author identity not yet set globally.** Commits so far are attributed to the machine default.

## Next steps (in priority order)

1. **Deploy to Vercel** (issue #1). Fully static, auto-detects Next.js 16, no env vars needed. ~10 minutes. Without this the portfolio can't be shared.
2. **Add real imagery** (issue #2). Biggest lift-to-polish ratio left. Start with the headshot and project screenshots; OG cards can follow.
3. **Set git identity globally** so future commits are attributed to Naya.
4. **Mobile QA pass** on a real phone, paying particular attention to the Collaborate mood's draggable IdeaBoard (touch drag) and the Curious mood's scroll-velocity blobs.
5. **Swap the placeholder email subject lines** if Naya wants different pre-fills for the CTAs (`?subject=Hiring%20conversation`, `?subject=Partnership%20conversation`).
6. **Consider Vercel Analytics** once live; the mood selection is the primary conversion signal.
7. **Resume iteration as needed.** The resume PDF is the source of truth; if Naya's role or achievements change, update `src/lib/content/hire.ts` + `src/lib/identity.ts` only.

## Key file map

```
blackistechpractice/
├── HANDOFF.md                             this file
├── README.md                              public-facing
├── package.json                           Next 16, React 19, Tailwind v4, framer-motion
└── src/
    ├── app/
    │   ├── globals.css                    palette CSS vars, data-mood switching
    │   ├── layout.tsx                     fonts, MoodProvider, metadata
    │   └── page.tsx                       Gate vs. mood orchestrator
    ├── components/
    │   ├── Gate.tsx                       entry question + 3 doors
    │   ├── MoodTransition.tsx             three wipe variants
    │   ├── VibeToggle.tsx                 corner menu
    │   ├── canvases/
    │   │   ├── ArchitecturalLines.tsx     Hire Me
    │   │   ├── NeonOrbs.tsx               Collaborate (cursor-reactive)
    │   │   └── LiquidBlobs.tsx            Curious (scroll-reactive)
    │   └── moods/
    │       ├── HireMe/*.tsx
    │       ├── Collaborate/*.tsx
    │       └── Curious/*.tsx
    └── lib/
        ├── identity.ts                    Naya's name, email, links
        ├── mood-context.tsx               useSyncExternalStore + custom event
        ├── types.ts                       Mood types + MOOD_PALETTES constant
        ├── use-reduced-motion.ts          shared hook
        ├── content.ts                     barrel re-export
        └── content/
            ├── gate.ts                    the question + 3 door descriptions
            ├── hire.ts                    Hire Me copy
            ├── collaborate.ts             Collaborate copy
            └── curious.ts                 Just Curious copy
```

## Gotchas for the next session

- **Never write em dashes in user-facing copy.** User preference established this session. Use parens, colons, periods, commas, or "to" instead.
- **All bio/work facts must come from the resume + LinkedIn + GitHub.** Don't invent companies, metrics, or stories. If a field needs filling and no real data exists, simplify or omit.
- **React 19's `react-hooks/set-state-in-effect` is strict.** Don't call setState synchronously inside `useEffect` on mount. For external state (localStorage, media queries), reach for `useSyncExternalStore`.
- **The mood system is the only global state.** Keep it that way; don't add Redux, Zustand, or context layers unless there's a clear reason.
- **Dev server may be running in background.** Check before restarting.
- **Parallel sub-agents worked well for mood personalization** because the content files were pre-split. Future parallel work should follow the same pattern: give each agent a non-overlapping file scope before dispatch.

## Memory context already saved

See `~/.claude/projects/-Users-nyaradzobere-Documents-coding2026/memory/MEMORY.md` for durable facts carried forward.
