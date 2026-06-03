# SMART + OKRs + KPIs Generator

This is the Specification-Driven Development (SDD) single source of truth for
this page. Treat it as the canonical specification: if the code and this spec
disagree, the spec wins and the code must be corrected. Any behavior change
in code MUST be reflected here in the same change-set.

## Purpose

Help a user create an Objective & Key Result (OKR) with SMART criteria and a
matching Key Performance Indicator (KPI), then export the result as a Markdown
file the user can save, share, or check in to source control.

The page is intentionally a one-screen, dependency-free MVP. It runs entirely
in the browser. No data leaves the user's machine.

## User flow

1. The user is shown a single-page form with three sections (OKR, SMART, KPI),
   two action buttons ("Generate Markdown" and "Download Markdown"), and a
   read-only output textarea.
2. For each "suggestable" single-line input, the user may either:
   a. Click the arrow button to reveal a dropdown of curated suggestions and
      click one to populate the input, OR
   b. Type freeform text directly into the input.
3. For each textarea (SMART criteria, KPI content), the user may edit the
   seeded scaffolding prompts (guiding questions) into their real answers.
4. For each KPI single-line input (Title, URL, Contact name, Contact email),
   the user types directly; no suggestions are offered.
5. If the user clicks "Generate Markdown", then the page:
   a. Concatenates all field values into a single Markdown string.
   b. Writes the Markdown into the read-only output textarea so the user can
      see and copy it but not edit it.
6. If the user clicks "Download Markdown", then the page:
   a. Concatenates all field values into a single Markdown string fresh from
      the current form (NOT from the output textarea, so post-Generate edits
      are still picked up).
   b. Triggers a browser download of `smart-okrs-kpis.md`.

## Output document structure

The generated Markdown has three top-level sections in this fixed order:

```
## Objective & Key Result

<Objective sentence>.

<Key Result sentence>.

## SMART criteria

### Specific
<text>

### Measurable
<text>

### Actionable
<text>

### Relatable
<text>

### Timely
<text>

## Key Performance Indicator (KPI)

Title: <title>
URL: <url>
Contact name: <name>
Contact email: <email>

<content>
```

Each KPI metadata line ends with two trailing spaces followed by a newline so
Markdown renders them as a paragraph with hard line breaks.

## Section 1: Objective & Key Result

OKR sentence inputs (suggestable, single-line) — combined into two sentences:

- Sentence 1 (the Objective): `"<verb> <topic> <delta> <timing>."`
  - verb e.g. "Increase"
  - topic e.g. "customer satisfaction"
  - delta e.g. "by 10 percent"
  - timing e.g. "by end of Q4"
- Sentence 2 (the Key Result): `"<metric> <update> <source>."`
  - metric e.g. "Measure by Net Promoter Score (-100 to 100)"
  - update e.g. "with updates monthly"
  - source e.g. "via our CRM system"

Each suggestable is seeded with a short curated list of suggestion strings.

## Section 2: SMART criteria

Five multi-line textareas, one H3 subsection per SMART letter, in this order:

- Specific
- Measurable
- Actionable
- Relatable
- Timely

Each textarea is seeded with a short list of guiding questions the user edits
into their real answers.

## Section 3: Key Performance Indicator (KPI)

Four single-line inputs (no suggestions) plus one multi-line content textarea:

- `kpi-title`        (text)   — exact KPI name, used to avoid ambiguity.
- `kpi-url`          (url)    — exact KPI URL if one is available.
- `kpi-contact-name` (text)   — accountable person's full name.
- `kpi-contact-email`(email)  — accountable person's email address.
- `kpi-content`      (textarea, multi-line) — seeded with guiding questions:
  Scope, Formula, Units, Frequency, Data source, Comments.

The `url` and `email` input types enable native browser format hinting; no
client-side validation is required to gate Generate / Download.

## Suggestable component contract

A "suggestable" is a small Alpine.js component combining an arrow button, a
text input, and a hidden-by-default dropdown of suggestions. Contract:

- The input is always a real `<input type="text">` with a stable DOM `id`, so
  plain DOM code (and tests) can read its value via `getElementById`.
- The initial value is the empty string so the placeholder is visible.
- Clicking the arrow toggles the dropdown.
- Clicking a suggestion sets the input value and closes the dropdown.
- Clicking outside the component closes the dropdown.
- The user may type freeform text at any time; suggestions are advisory.

## Button contract

- "Generate Markdown" (`#generate-button`): populates `#markdown`. No download.
- "Download Markdown" (`#download-button`): triggers a file download of
  `smart-okrs-kpis.md` built from the current form (not the textarea).
- Neither button submits the form. The inline `onclick` uses `window.fn()`
  to bypass the form's named-elements scope.

## Technical stack

- HTML5, vanilla JavaScript (no build step, no bundler).
- Alpine.js 3.14.0 — reactivity for the suggestable component.
- Pure CSS 3.0.0 — base layout and responsive grid.
- FontAwesome 6.5.2 — header icons.

All third-party assets are loaded from cdnjs.cloudflare.com with Subresource
Integrity (SRI) hashes and `crossorigin="anonymous"`.

## Testing

Tests live in `test.spec.js` and run via Playwright against a `file://` URL
served from this directory. Run with:

```
npx playwright test test.spec.js --browser=chromium --workers=1
```

## Constraints

- Single HTML file MVP (index.html). No build step.
- No external dependencies except via cdnjs.cloudflare.com.
- No backend, no database, no persistence, no telemetry.
- No confidential information is collected, stored, or transmitted.
- Works offline once the page and CDN assets are cached.
