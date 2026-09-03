import { SITE_URL } from '$lib/site';

// Every route is static and prerendered (see root +layout.ts), so this
// endpoint itself is prerendered too, producing a plain sitemap.xml file
// rather than a directory — trailingSlash must be overridden to 'never'
// here, since the root layout sets 'always' for every page route.
export const prerender = true;
export const trailingSlash = 'never';

const routes = [
	'/',
	'/about/',
	'/contact/',
	'/leadership/',
	'/technology/',
	'/consulting/',
	'/resume/',
	'/speaking/',
	'/hire/',
	'/open-source/',
	'/health/',
	'/engineering/',
	'/teamwork/',
	'/lily/',
	'/vix/',
	'/assertables/',
	'/guides/',
	'/privacy/',
	'/accessibility/',
	'/agile/',
	'/ucd/',
	'/testing/',
	'/gitalias/',
	'/ways-of-working/',
	'/digital-health-guide/',
	// Static tool subfolders, shipped as-is via static/ (not SvelteKit routes).
	'/agile-checklist/',
	'/smart-okrs-kpis/',
	'/uk-gdad-pcf-skills-self-assessment/'
];

export function GET() {
	const urlset = routes
		.map((route) => `\t<url>\n\t\t<loc>${SITE_URL}${route}</loc>\n\t</url>`)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
