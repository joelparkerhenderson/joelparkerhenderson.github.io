// Fully static site: every route is prerendered at build time for GitHub Pages.
export const prerender = true;

// Directory + index.html per route (e.g. leadership/index.html), matching
// the proven-working pattern the three static tool subfolders already use
// on GitHub Pages, rather than adapter-static's default flat leadership.html
// — both work on GH Pages, but this is the pattern already verified live.
export const trailingSlash = 'always';
