# SMART + OKRs + KPIs Generator

This is the Specification-Driven Development (SDD) single source of truth for
this page. Treat it as the canonical specification: if the code and this comment
disagree, the comment wins and the code must be corrected. Any behavior change
in code MUST be reflected here in the same change-set.

## Purpose

Help a user create an Objective & Key Result (OKR) with SMART criteria and a
matching Key Performance Indicator (KPI), then export the result as a Markdown
file the user can save, share, or check in to source control.

The page is intentionally a one-screen, dependency-free MVP. It runs entirely
in the browser. No data leaves the user's machine.

## User flow

1. The user is shown a form with seven "suggestable" single-line inputs, six
   multi-line textareas, and a "Generate Markdown" button.
2. For each suggestable, the user may either:
   a. Click the arrow button to reveal a dropdown of curated suggestions and
   click one to populate the input, OR
   b. Type freeform text directly into the input.
3. For each textarea, the user may edit the seeded scaffolding prompts (which
   act as guiding questions) into their real answers.
4. The user clicks "Generate Markdown". The page then:
   a. Concatenates all field values into a single Markdown document.
   b. Writes that Markdown into the read-only "markdown" output textarea so
   the user can copy it.
   c. Triggers a browser download of the same Markdown as
   "smart-okrs-kpis.md".

## Field inventory

OKR sentence inputs (suggestable, single-line) — combined into two sentences:

Sentence 1 (the Objective): "<verb> <topic> <delta> <timing>." - verb e.g. "Increase" - topic e.g. "customer satisfaction" - delta e.g. "by 10 percent" - timing e.g. "by end of Q4"

Sentence 2 (the Key Result): "<metric> <update> <source>." - metric e.g. "Measure by Net Promoter Score (-100 to 100)" - update e.g. "with updates monthly" - source e.g. "via our CRM system"

SMART criteria (textareas, multi-line): Specific, Measurable, Actionable,
Relatable, Timely. Each is seeded with a short list of guiding questions.

Key Performance Indicator (textarea, multi-line): seeded with a KPI template
(Title, Objective, Scope, Target, Formula, Units, Frequency, Data source,
Owner, Comments).

Output (textarea, multi-line, populated by the page on Generate):
A single Markdown document with three sections in this fixed order:

## Objective & Key Result

## SMART criteria (with H3 subsections for each SMART letter)

## Key Performance Indicator (KPI)

## Suggestable component contract

A "suggestable" is a small Alpine.js component combining an arrow button, a
text input, and a hidden-by-default dropdown of suggestions. Contract:

- The input is always a real <input type="text"> with a stable DOM `id`, so
  plain DOM code (and tests) can read its value via getElementById.
- The initial value is the empty string so the placeholder is visible.
- Clicking the arrow toggles the dropdown.
- Clicking a suggestion sets the input value and closes the dropdown.
- Clicking outside the component closes the dropdown.
- The user may type freeform text at any time; suggestions are advisory.

## Technical stack

- HTML5, vanilla JavaScript (no build step, no bundler).
- Alpine.js 3.14.0 — reactivity for the suggestable component.
- Pure CSS 3.0.0 — base layout and responsive grid.
- FontAwesome 6.5.2 — header icons.

All third-party assets are loaded from cdnjs.cloudflare.com with Subresource
Integrity (SRI) hashes and crossorigin="anonymous".

## Constraints

- Single HTML file MVP (index.html). No build step.
- No external dependencies except via cdnjs.cloudflare.com.
- No backend, no database, no persistence, no telemetry.
- No confidential information is collected, stored, or transmitted.
- Works offline once the page and CDN assets are cached.
