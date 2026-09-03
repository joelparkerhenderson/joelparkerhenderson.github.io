// Metadata for the six promo tiles on the homepage — three pillar pages
// (bodies of expertise, each absorbing a subset of sections.ts) and
// three action pages (ways to engage directly). Shared between the
// homepage tile grid and each destination page's own hero, so the tile
// blurb and the page it links to never drift out of sync.
//
// Tile images are free-to-use photos from Pexels (pexels.com/license —
// no attribution required, credited here anyway as good practice), except
// technology, which is a "matrix" digital-rain graphic from the
// Software Programming Guide's own asset set (~/git/sixarm/topics/guides/
// software-programming-guide/assets/images/matrix/original.png), cropped
// to 960x480:
//   leadership   — Kampus, photo 8463151
//   consulting   — silverkblack, photo 36733331
//   speaking     — Bertelli Fotografia, photo 34774349
//   hire         — Anthony Shkraba Production, photo 8837510
//   open-source  — duncanoluwaseun, photo 226232

import leadershipImage from '$lib/assets/tiles/leadership.jpg';
import technologyImage from '$lib/assets/tiles/technology.jpg';
import consultingImage from '$lib/assets/tiles/consulting.jpg';
import speakingImage from '$lib/assets/tiles/speaking.jpg';
import hireImage from '$lib/assets/tiles/hire.jpg';
import openSourceImage from '$lib/assets/tiles/open-source.jpg';

export interface Pillar {
	id: string;
	route: string;
	image: string;
	title: string;
	tileBlurb: string;
	/** ids from sections.ts this pillar page absorbs; omitted for action pages. */
	sectionIds?: string[];
}

export const corePillars: Pillar[] = [
	{
		id: 'leadership',
		route: '/leadership/',
		image: leadershipImage,
		title: 'Leadership',
		tileBlurb: 'Frameworks for direction, goals, and decisions — how healthy teams set course and stay accountable.',
		sectionIds: ['leadership-culture', 'goals-performance', 'decisions-thinking']
	},
	{
		id: 'technology',
		route: '/technology/',
		image: technologyImage,
		title: 'Technology',
		tileBlurb: 'Open-source engineering, in the open — including Rust implementations of core healthcare data standards.',
		sectionIds: ['healthcare-interoperability', 'engineering-reference']
	},
	{
		id: 'consulting',
		route: '/consulting/',
		image: consultingImage,
		title: 'Consulting',
		tileBlurb: 'Delivery, assessment, and cross-company collaboration — the toolkit behind advisory engagements.',
		sectionIds: ['delivery-projects', 'startups-strategy', 'risk-security']
	}
];

export const actionTiles: Pillar[] = [
	{
		id: 'speaking',
		route: '/speaking/',
		image: speakingImage,
		title: 'Book me as a speaker',
		tileBlurb: 'Keynotes, panels, and workshops on leadership, engineering governance, and healthcare interoperability.'
	},
	{
		id: 'hire',
		route: '/hire/',
		image: hireImage,
		title: 'Hire me to help you',
		tileBlurb: 'Advisory, fractional technical leadership, and delivery health assessments — framework-based, not guesswork.'
	},
	{
		id: 'open-source',
		route: '/open-source/',
		image: openSourceImage,
		title: 'Use my open source',
		tileBlurb: 'Everything on this site is free and open source, including the design system this page is built with.'
	}
];
