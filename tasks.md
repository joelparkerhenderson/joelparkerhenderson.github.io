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

- [ ] **Problem-first headline.** Replace the bio-first hero ("Software
  engineer and technology leader with 20+ years…") with a one-line
  promise aimed at the reader's pain, then a supporting line with the
  credentials. *(Ryan Latta: "I deliver the answer to your impossible
  ask…"; McKenna: "Your strategy is sound… but execution keeps
  failing.")*
- [ ] **One-sentence philosophy quote.** A short, memorable line on how
  you work, attributed to you, placed under the hero or on the Hire
  page. *(McKenna founder quote.)*
- [ ] **Reframe the three action pages as flagship offers.** On `/hire/`,
  present 2–3 named engagements (e.g. fractional/interim head of
  engineering, delivery health assessment, architecture & governance
  review), each with a provocative "what if" question and its own CTA.
  *(McKenna AI-first offers.)*
- [ ] **Numbered services grid.** Below the flagship offers, a 01–06 grid
  of the narrower services (advisory retainer, workshop facilitation,
  ADR/decision-records rollout, OKR setup, interoperability advisory,
  open-source strategy). *(McKenna 01–06 grid.)*
- [ ] **Outcome-oriented CTA wording.** Audit every button: prefer
  "Explore", "Discover", "Book a call" over generic "Learn more".
  *(KPMG layered CTAs; Latta outcome CTAs.)*

## Trust and proof

- [ ] **Credibility stats strip** under the hero: e.g. years in industry,
  open-source repos published, guides published, teams led. Use only
  numbers you can stand behind; the open-source and guide counts can be
  computed from GitHub/SixArm directly. *(McKenna "20+ years / 500+
  teams / 50+ orgs".)* *(needs input for people/team figures)*
- [ ] **Quantified outcomes.** Add 2–4 real, specific results to Hire
  and Consulting pages (delivery time reduced, cost avoided, teams
  scaled, standards adopted). *(Latta "450% faster"; McKenna "22% WIP
  reduction".)* *(needs input)*
- [ ] **Testimonials.** 3 short quotes with name, title, organization,
  and permission. Card layout, on Hire and homepage. *(McKenna.)*
  *(needs input)*
- [ ] **Employer / client logo row.** Only where permitted; otherwise a
  text list of sectors ("UK national health service, US fintech,
  startups"). *(McKenna, KPMG alliances row.)* *(needs input)*
- [ ] **Case studies page** (`/case-studies/`). 3 anonymised write-ups:
  situation → approach → measurable result, each linking to the
  frameworks/tools used from the catalog. Feature 3 on the homepage.
  *(Latta, McKenna.)* *(needs input)*
- [ ] **Recognition / credentials block.** Certifications, awards, notable
  publications, if any. *(KPMG analyst-recognition callouts.)* *(needs
  input)*

## Conversion path

- [ ] **Single primary CTA repeated** in the header bar, after the hero,
  and in the footer: "Book a 30-minute call — no pitch". *(McKenna
  repeating "Free consultation"; Latta "no pitch".)*
- [ ] **Booking link.** Add a scheduling link (Calendly / Cal.com / Google
  appointment page) alongside the existing mailto and LinkedIn CTAs.
  *(Latta schedule link; McKenna `/free-consultation/`.)* *(needs
  input: which scheduler)*
- [ ] **Contact page** (`/contact/`). Email, LinkedIn, booking link,
  response-time expectation, and what to include in a first message.
- [ ] **Newsletter signup** (optional). A weekly or monthly note; footer
  form with privacy line. *(Latta "Fridays".)* *(needs input: decide
  whether to run one; provider)*

## Content and thought leadership

- [ ] **"Latest thinking" section on the homepage.** 3 cards: image,
  title, date, one-line excerpt, "Read →". Source from GitHub topics /
  SixArm guides / a new `/writing/` route. *(McKenna blog cards; KPMG
  insight tiles.)*
- [ ] **Writing hub** (`/writing/` or `/garden/`). Group the large
  SixArm/topics body of work into 3–4 pillars (Leadership, Delivery,
  Engineering, Health interoperability), 3 featured pieces each, then
  "browse everything". *(Latta digital garden.)*
- [ ] **Speaking page: talks list.** Past and upcoming talks, podcast
  appearances, slides/video links, and a downloadable speaker one-sheet
  (bio, headshot, topics, AV needs). *(Latta talks/podcasts.)* *(needs
  input)*
- [ ] **Featured content blocks.** Separate "report-level" assets (the
  seven Gumroad guides, the résumé) from tile grids so they read as
  flagship items. *(KPMG featured report blocks.)*
- [ ] **Guides page: add purchase/preview links** (Gumroad) and a short
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
- [ ] **Two button styles.** Define primary (filled) vs secondary
  (outline) buttons and use them consistently for main vs supporting
  CTAs. *(McKenna.)*
- [ ] **Card date/category chips** for writing cards, distinct from
  service tiles.
- [ ] **Mobile nav pass.** Review header (pickers + social links + nav)
  at 375px; collapse into a menu button if it wraps badly.

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
- [ ] **RSS/Atom feed** once a writing hub exists.
- [ ] **Privacy-respecting analytics** (e.g. Plausible, GoatCounter) to
  see which tiles and CTAs get used. *(needs input: provider)*
- [ ] **Lighthouse + axe audit** on every route; fix any contrast issues
  across the 45 themes (the `:where()` zero-specificity theme rules make
  this worth checking per theme).
- [x] **Accessibility statement page** and a **privacy page**, linked
  from the footer.
- [x] **404 page** styled like the rest of the site with links back to
  the six tiles — both a SvelteKit `+error.svelte` (client-side nav)
  and a static `404.html` (GitHub Pages' own not-found response).
- [ ] **Performance:** responsive `srcset` for tile images, `fetchpriority`
  on the hero image, preload the default theme CSS.
