<script lang="ts">
	import { ContainerWithFixedWidth, GoToTop } from 'lily-design-system-svelte-headless';
	import PillarSections from '$lib/components/site/PillarSections.svelte';
	import PromoTile from '$lib/components/site/PromoTile.svelte';
	import { sections } from '$lib/data/sections';
	import healthImage from '$lib/assets/tiles/health.jpg';
	import engineeringImage from '$lib/assets/tiles/engineering.jpg';
	import lilyImage from '$lib/assets/tiles/lily.jpg';
	import vixImage from '$lib/assets/tiles/vix.jpg';
	import assertablesImage from '$lib/assets/tiles/assertables.jpg';
	import technologyImage from '$lib/assets/tiles/technology.jpg';
	import Seo from '$lib/components/site/Seo.svelte';

	// Tile photos are free-to-use Pexels images (pexels.com/license):
	// health — Stephen T. Andrews, photo 9408871; engineering — Cottonbro
	// Studio, photo 5483077; lily — Mogilat, photo 3987856; vix — UseHex,
	// photo 9553909; assertables — Towfiqu Barbhuiya, photo 11412596.

	const pillarSections = sections.filter((s) =>
		['healthcare-interoperability', 'engineering-reference'].includes(s.id)
	);

	const title = 'Technology — Joel Parker Henderson';
	const description =
		'Open-source software engineering, including Rust implementations of core healthcare data standards (HL7, FHIR, SNOMED CT, openEHR), plus a wide catalog of engineering reference code.';
</script>

<Seo {title} {description} path="/technology/" image={technologyImage} />

<main id="content">
	<section id="top" class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Technology</h1>
			<p>
				I build in the open, on the theory that software worth writing once is worth writing
				where other people can use it, review it, and improve it. That includes the design
				system this very page is built with — <a href="https://lilydesignsystem.github.io/"
					>Lily</a
				>, a headless, accessible Svelte component library I publish alongside its own theme
				catalog — and a set of Rust implementations of core healthcare interoperability
				standards, written while leading software engineering at Digital Health and Care
				Wales (NHS Wales): HL7, ER7, FHIR, SNOMED CT, and openEHR.
			</p>
			<p>
				Below that sits a long tail of smaller reference code — one focused example per
				language, framework, or API — kept public because the fifth time you need a working
				example of something is usually easier to find on GitHub than to rebuild from memory.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<PillarSections sections={pillarSections} />

		<h2>Featured projects</h2>
		<div class="promo-tile-grid">
			<PromoTile href="/health/" image={healthImage} title="Health" blurb="Health economics, clinical data, and standards work." />
			<PromoTile href="/engineering/" image={engineeringImage} title="Engineering" blurb="Decision records, testing, git tooling, and CLI utilities." />
			<PromoTile href="/lily/" image={lilyImage} title="Lily Design System" blurb="The headless component library this site is built with." />
			<PromoTile href="/vix/" image={vixImage} title="Vix IDE" blurb="A high-speed, high-security terminal text editor." />
			<PromoTile href="/assertables/" image={assertablesImage} title="Assertables" blurb="Assert macros for better Rust testing." />
		</div>

		<div class="cta-band">
			<p>Curious how to use, license, or contribute to any of this?</p>
			<a class="button" href="/open-source/">See how to share my open source →</a>
		</div>
	</ContainerWithFixedWidth>

	<GoToTop href="#top">Back to top ↑</GoToTop>
</main>
