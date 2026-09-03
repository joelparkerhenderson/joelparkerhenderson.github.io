<script lang="ts">
	import { ContainerWithFixedWidth, GoToTop } from 'lily-design-system-svelte-headless';
	import PillarSections from '$lib/components/site/PillarSections.svelte';
	import PromoTile from '$lib/components/site/PromoTile.svelte';
	import { sections } from '$lib/data/sections';
	import guidesImage from '$lib/assets/tiles/guides.jpg';

	// Tile photo is a free-to-use Pexels image (pexels.com/license):
	// guides — Sumcig, photo 38323235.

	const pillarSections = sections.filter((s) =>
		['delivery-projects', 'startups-strategy', 'risk-security'].includes(s.id)
	);

	const title = 'Consulting — Joel Parker Henderson';
	const description =
		'Delivery frameworks, business assessments, startup and strategy tools, and cross-company collaboration templates behind advisory and consulting engagements.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main id="content">
	<section id="top" class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Consulting</h1>
			<p>
				Advisory work is only useful if it leaves something behind: a shared framework, a
				decision record, an assessment the client's own team can rerun next year without me
				in the room. That's the approach behind the material below — statements of work,
				functional specifications, project checklists, and structured assessments of agile
				maturity, architecture, and value stream health — built from templates I use in real
				engagements, not theory.
			</p>
			<p>
				It also covers the mechanics of working across company boundaries: coordinated
				vulnerability disclosure, and the consulting and confidentiality agreements that make
				an engagement possible in the first place.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<PillarSections sections={pillarSections} />

		<h2>Featured project</h2>
		<div class="promo-tile-grid">
			<PromoTile href="/guides/" image={guidesImage} title="Guides" blurb="Six long-form reference guides on agile change, project management, startups, testing, and design." />
		</div>

		<div class="cta-band">
			<p>Ready to bring this into your organization?</p>
			<a class="button" href="/hire/">See how to hire me →</a>
		</div>
	</ContainerWithFixedWidth>

	<GoToTop href="#top">Back to top ↑</GoToTop>
</main>
