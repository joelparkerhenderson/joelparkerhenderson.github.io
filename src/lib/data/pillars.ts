// Metadata for the six square promo tiles on the homepage — three pillar
// pages (bodies of expertise, each absorbing a subset of sections.ts) and
// three action pages (ways to engage directly). Shared between the
// homepage tile grid and each destination page's own hero, so the tile
// blurb and the page it links to never drift out of sync.

export interface Pillar {
	id: string;
	route: string;
	icon: string;
	title: string;
	tileBlurb: string;
	/** ids from sections.ts this pillar page absorbs; omitted for action pages. */
	sectionIds?: string[];
}

export const corePillars: Pillar[] = [
	{
		id: 'leadership',
		route: '/leadership/',
		icon: '🧭',
		title: 'Leadership',
		tileBlurb: 'Frameworks for direction, goals, and decisions — how healthy teams set course and stay accountable.',
		sectionIds: ['leadership-culture', 'goals-performance', 'decisions-thinking']
	},
	{
		id: 'technology',
		route: '/technology/',
		icon: '⚙',
		title: 'Technology',
		tileBlurb: 'Open-source engineering, in the open — including Rust implementations of core healthcare data standards.',
		sectionIds: ['healthcare-interoperability', 'engineering-reference']
	},
	{
		id: 'consulting',
		route: '/consulting/',
		icon: '🤝',
		title: 'Consulting',
		tileBlurb: 'Delivery, assessment, and cross-company collaboration — the toolkit behind advisory engagements.',
		sectionIds: ['delivery-projects', 'startups-strategy', 'risk-security']
	}
];

export const actionTiles: Pillar[] = [
	{
		id: 'speaking',
		route: '/speaking/',
		icon: '🎤',
		title: 'Book me as a speaker',
		tileBlurb: 'Keynotes, panels, and workshops on leadership, engineering governance, and healthcare interoperability.'
	},
	{
		id: 'hire',
		route: '/hire/',
		icon: '💼',
		title: 'Hire me to help you',
		tileBlurb: 'Advisory, fractional technical leadership, and delivery health assessments — framework-based, not guesswork.'
	},
	{
		id: 'open-source',
		route: '/open-source/',
		icon: '📦',
		title: 'Use my open source',
		tileBlurb: 'Everything on this site is free and open source, including the design system this page is built with.'
	}
];
