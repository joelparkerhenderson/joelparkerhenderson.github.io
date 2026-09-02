# joelparkerhenderson.github.io

Source for [joelparkerhenderson.github.io](https://joelparkerhenderson.github.io/) — a SvelteKit site
styled with the [Lily Design System](https://lilydesignsystem.github.io/) (`lily-design-system-svelte-headless`).

Deploys automatically to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
on every push to `main`.

## Structure

- `src/routes/+page.svelte` — the homepage; content lives in `src/lib/data/sections.ts`
- `src/lib/components/site/` — site-specific header controls (theme, text size, share) built on
  top of Lily's headless components
- `src/lib/styles/theme.css` — custom theme (tokens + Lily class hooks); see the file header for
  design notes
- `static/agile-checklist/`, `static/smart-okrs-kpis/`, `static/uk-gdad-pcf-skills-self-assessment/`
  — standalone tool pages, unrelated to the SvelteKit app, carried through to the build unchanged

## Developing

```sh
npm install
npm run dev -- --open
```

## Building

```sh
npm run build      # fully static output in build/, via @sveltejs/adapter-static
npm run preview    # serve the production build locally
npm run check      # svelte-check
```
