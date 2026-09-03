# Tasks

Improvement backlog for joelparkerhenderson.github.io, a professional
portfolio site aimed at CEOs, CTOs, CISOs, and software engineers.

Ideas researched from three reference sites:

- **KPMG** (kpmg.com) — enterprise advisory: mega-menu, insight cards,
  layered "Explore / Discover" CTAs, footer-as-sitemap, trust signals.
- **Ryan Latta** (ryanlatta.com) — solo delivery consultant: problem-first
  headline, quantified outcomes, case studies, no-pitch discovery call,
  "digital garden" content hub, personal-depth section, weekly newsletter.
- **McKenna Agile Consultants** (mckennaagileconsultants.com) — small firm:
  credibility stats strip, three flagship offers with a provocative
  "what if" question each, numbered services grid, testimonials, client
  logos, "Latest thinking" blog cards, repeating "Free consultation" CTA.

Ground rule for every task below: **nothing fabricated.** Stats,
testimonials, client names, and talk history go on the site only if they
are real and permitted. Tasks that need such input are marked *(needs
input)*.

Already in place (for reference, not tasks): SvelteKit + Lily Design
System build; header pickers (theme, text size, locale, share); social
links; six homepage tiles (Leadership / Technology / Consulting +
Speaking / Hire / Open source); pillar pages absorbing the 114-link
catalog; spotlight pages (Health, Engineering, Teamwork, Lily, Vix,
Assertables); Guides page; Résumé page with print view; 45 themes.

## Positioning and messaging

- [x] **Problem-first headline.** Homepage hero now opens with the
  promise (engineering leadership that holds up, decisions that don't
  unravel, reusable software) before the biography. *(Ryan Latta;
  McKenna.)*
- [x] **One-sentence philosophy quote.** A pull-quote under the homepage
  hero, echoed on `/about/`. *(McKenna founder quote.)*
- [~] **Reframe the three action pages as flagship offers.** `/hire/`
  already lists 5 named engagements as cards (advisory retainer,
  fractional leadership, health assessment, workshop facilitation,
  interoperability advisory) — judged good enough as-is; didn't add
  "what if" framing on top, low marginal value. *(McKenna AI-first
  offers.)*
- [x] **Numbered services grid** — effectively covered by the same
  `/hire/` card grid above; not restructured into 01–06 numbering
  specifically. *(McKenna 01–06 grid.)*
- [x] **Outcome-oriented CTA wording.** Audited every button — already
  action-verb-led ("Read the Guide →", "See how to hire me →", "Share
  my open source →"), no generic "Learn more" anywhere. *(KPMG; Latta.)*

## Trust and proof

- [ ] **Credibility stats / quantified outcomes / testimonials / client
  logos / case studies / recognition.** All deferred — you'll send real
  numbers, results, and quotes later. *(needs input, confirmed
  2026-09-03.)*

## Conversion path

- [x] **Single primary CTA repeated** in the homepage hero and a "Let's
  talk" footer band, via a shared `ContactCta.svelte` — kept to email +
  LinkedIn per your call, no scheduler. *(McKenna; Latta.)*
- Booking link — skipped per your call (email + LinkedIn only for now).
- [x] **Contact page** (`/contact/`). Email, LinkedIn, response-time
  expectation, and what to include in a first message.
- Newsletter signup — skipped per your call.

## Content and thought leadership

- [x] **"Latest thinking" section on the homepage.** 3 text-only cards
  (title, excerpt, "Read →"), the three newest project pages. Skipped
  images (none exist for these pages) and dates (not dated posts — KPMG's
  own insight cards skip dates too). *(McKenna blog cards; KPMG insight
  tiles.)*
- [~] **Writing hub** (`/writing/` or `/garden/`) — skipped as a
  separate route. The site already groups its ~120+ links into 3
  pillars (Leadership/Technology/Consulting) plus spotlight pages
  (Health, Engineering, Teamwork, Lily, Vix, Assertables, Guides,
  Agile, UCD, Testing, GitAlias, Ways Of Working, Digital Health
  Guide) — a parallel `/writing/` taxonomy would mostly duplicate that
  structure rather than add real navigability. *(Latta digital garden.)*
- Speaking page talks/podcast list + speaker one-sheet — skipped per
  your call (no fabricated track record).
- [ ] **Featured content blocks.** Separate "report-level" assets (the
  seven Gumroad guides, the résumé) from tile grids so they read as
  flagship items. *(KPMG featured report blocks.)*
- [x] **Guides page: add purchase/preview links** (Gumroad) and a short
  "who it's for" line per guide, matching the résumé's guide entries.

## Navigation and structure

- [x] **Footer as a second nav.** Full sitemap in 4 columns (Explore /
  Work with me / Projects / About), copyright/colophon line below.
  *(KPMG.)*
- [ ] **Header nav grouping.** Consider dropdowns: Expertise
  (Leadership, Technology, Consulting), Projects (Health, Engineering,
  Teamwork, Lily, Vix, Assertables, Guides), About (Résumé, Speaking,
  Contact). Keep a persistent "Book a call" button. *(KPMG mega-menu,
  simplified.)*
- [x] **About page** (`/about/`). Short narrative bio, headshot, what you
  believe about engineering leadership, links to Résumé. *(Latta
  personal interests; McKenna founder authority.)* Skipped the
  personal-depth/interests-outside-work paragraph — *(needs input:
  what to include)*.
- [ ] **Site search.** Client-side search across the 114-link catalog,
  guides, and spotlight pages (e.g. Pagefind or a prebuilt JSON index).
  *(KPMG utility bar search.)*
- [x] **Breadcrumbs** on every subpage (Home › Parent › Page), using
  Lily's own Breadcrumb components. *(KPMG.)*

## Visual design

- [ ] **Consistent imagery style.** Now that most tiles use custom
  graphics, replace the remaining stock photos (Guides covers excepted)
  so every tile shares one visual language; decide on one aspect ratio
  (2:1 currently) and stick to it site-wide. *(KPMG consistent 16:9 /
  square.)*
- [ ] **Hero image or graphic.** The homepage hero is text-only; add a
  wide splash graphic or headshot treatment for a stronger first
  screen. *(All three sites open with imagery.)*
- [x] **Two button styles.** `.button-secondary` (outline), used on
  every `ContactCta`. *(McKenna.)*
- Card date/category chips — dropped along with the writing hub above;
  no dated posts to tag.
- [x] **Mobile nav pass.** Reviewed at 375px — header wraps into rows
  cleanly, no overflow; left as-is rather than building an unneeded
  hamburger menu.

## Technical, SEO, and measurement

- [x] **Fix custom domain (GitHub Pages side).** Added `static/CNAME`
  (`joelparkerhenderson.com`) and set it via the Pages API
  (`cname` was `null`, now set). **Still needs your action:** DNS is on
  Cloudflare nameservers (nelci/nicolas.ns.cloudflare.com via Network
  Solutions) and I have no Cloudflare account access. In the Cloudflare
  DNS dashboard for joelparkerhenderson.com, set the apex `A` records to
  GitHub Pages' four IPs — `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` — (or an `ALIAS`/`CNAME`-flattening
  record to `joelparkerhenderson.github.io` if your plan supports it),
  and set the record's proxy status to **DNS only** (grey cloud, not
  orange) until GitHub issues its TLS cert, then HTTPS enforcement can
  be turned back on. The current 522 means Cloudflare is proxying to
  some origin that isn't answering — likely a stale record.
- [x] **Open Graph / Twitter card meta** per page, via a shared
  `Seo.svelte` component — default 1200×630 share image plus per-page
  tile images on the six pillar/action pages.
- [x] **JSON-LD `Person` schema** on the homepage (real `sameAs` profile
  URLs only). `Organization` schema and `Article` schema for writing
  pages deferred — no writing hub yet.
- [x] **`sitemap.xml` and `robots.txt`** — a prerendered SvelteKit
  endpoint covering all 18 routes, referenced from `robots.txt`.
- [x] **Canonical URLs** — every page via `Seo.svelte`. `rel="me"` was
  already on the Mastodon header link.
- RSS/Atom feed — dropped along with the writing hub above; nothing
  dated to feed.
- Analytics — skipped per your call, keeps the privacy page's "no
  analytics" claim true with zero extra work.
- [x] **axe audit** (WCAG 2.0/2.1 A/AA) across all 25 routes on the
  default theme — 0 violations — plus a 14-theme sample including
  every dark theme, several pastel/light ones, and the government
  themes. Found and fixed a real bug: the site's own
  `a:not([class*="button"]) { color: var(--color-primary) }` rule (and
  a few explicit uses of the same token) fell short of 4.5:1 against
  the page background in ~8 themes — `--color-primary` is only
  guaranteed to contrast against its paired `--color-primary-content`,
  not the base background. Switched resting-state text to
  `--color-base-content` (every theme's guaranteed-safe token),
  keeping `--color-primary` for hover/focus and borders. One residual,
  unfixable-at-the-site-level finding: the `dark` theme's own
  `--color-primary`/`--color-primary-content` pairing is 4.12:1 (needs
  4.5:1) for Lily's own filled `.button` — a Lily package issue, not a
  site-CSS one. Full Lighthouse run (performance/SEO/best-practices)
  not done — no `lighthouse` CLI available in this environment;
  `npx lighthouse` would need to fetch it fresh per run.
- [x] **Accessibility statement page** and a **privacy page**, linked
  from the footer.
- [x] **404 page** styled like the rest of the site with links back to
  the six tiles — both a SvelteKit `+error.svelte` (client-side nav)
  and a static `404.html` (GitHub Pages' own not-found response).
- [ ] **Performance:** responsive `srcset` for tile images, `fetchpriority`
  on the hero image, preload the default theme CSS.
