# CLAUDE.md · Flickering Hearth

## First action of every new session

**Read `HANDOFF.md` before doing anything else.** No exceptions. Read it in full with the `Read` tool before responding to the user's first message, running any other tool, or making any edits. The handoff contains session history, load-bearing decisions, known gotchas, the dev server state, open issues, and next steps. Skipping it leads to duplicated work, wrong assumptions, and avoidable rework.

Only after you have read `HANDOFF.md` should you engage with the user's request.

When a session produces meaningful new work, update `HANDOFF.md` before ending so the next session starts with current context. The handoff is a living document, not a historical log.

## Project one-liner

A mood-based portfolio for Nyaradzo "Naya" Bere, targeting Anthropic Developer Relations. One question on entry rebuilds the entire experience into one of three worlds: Hire Me, Collaborate, Just Curious.

## Must-know rules for this repo

- **No em dashes in user-facing copy.** Ever. Use parens, colons, periods, commas, or "to" for date ranges. Details in `HANDOFF.md`.
- **All biographical facts must come from Naya's resume, LinkedIn, or GitHub.** Never fabricate companies, metrics, projects, or credentials. If data is missing, simplify or omit.
- **Content lives in `src/lib/content/<mood>.ts` + `src/lib/identity.ts`.** Not a monolith. This split exists so parallel sub-agents can edit without conflicts.
- **Mood state uses `useSyncExternalStore`**, not `useEffect` + `setState`. React 19's `react-hooks/set-state-in-effect` rule is strict.
- **No WebGL. No backend. No tests yet.** Don't introduce any without asking.

## Key paths

- Handoff: `HANDOFF.md` (this repo, root)
- Plan: `/Users/nyaradzobere/.claude/plans/please-build-out-a-flickering-hearth.md`
- Resume source of truth: `/Users/nyaradzobere/Documents/NBere_Resume_Anthropic_DevRel.pdf`
- Remote: https://github.com/nayaunity/flickering-hearth (private)

## Quick commands

```
npm run dev          # Next dev on :3000
npm run build        # Production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```
