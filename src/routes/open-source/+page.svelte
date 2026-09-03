<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';

	const title = 'Share my open source — Joel Parker Henderson';
	const description =
		'Everything published here — frameworks, templates, and software — is free and open source under your choice of MIT, Apache-2.0, GPL-2.0, GPL-3.0, or BSD-3-Clause.';

	const highlights = [
		{
			title: 'Lily Design System',
			blurb:
				'A headless, accessible Svelte 5 component library — 492 components, zero shipped CSS, 45 ready-made themes. This site is built with it, including the header controls above.',
			href: 'https://lilydesignsystem.github.io/'
		},
		{
			title: 'Healthcare interoperability in Rust',
			blurb: 'HL7, FHIR, SNOMED CT, and openEHR implementations, written alongside real software engineering leadership work at NHS Wales.',
			href: '/technology/'
		},
		{
			title: 'Leadership & delivery frameworks',
			blurb: 'Decision Records, ADRs, OKRs, agile and architecture assessments, and the rest of the catalog under Leadership and Consulting.',
			href: '/leadership/'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Share my open source</h1>
			<p>
				Everything on this site — every framework, template, and piece of software — is free
				and open source. That's a deliberate choice, not a marketing line: software and
				frameworks I use privately in consulting engagements are worth less to the field than
				the same work made reusable by anyone who needs it. This site itself is proof: it's
				built entirely on published, open packages, described under
				<a href="/technology/">Technology</a>.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<h2>A few highlights</h2>
		<div class="promo-tile-grid">
			{#each highlights as item (item.title)}
				<a class="card promo-tile" href={item.href}>
					<h3 class="promo-tile-title">{item.title}</h3>
					<p class="promo-tile-blurb">{item.blurb}</p>
					<span class="promo-tile-cta">Explore <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>

		<h2>Licensing</h2>
		<p>
			Everything is available under your choice of MIT, Apache-2.0, GPL-2.0-only, GPL-3.0-only,
			or BSD-3-Clause — pick whichever fits your project. Check each repository's own license
			file for specifics.
		</p>

		<h2>The full catalog</h2>
		<p>
			The complete collection is organized by topic rather than listed all in one place:
			<a href="/leadership/">Leadership</a> frameworks, <a href="/technology/">Technology</a>
			projects and reference code, and the <a href="/consulting/">Consulting</a> toolkit.
		</p>

		<h2>Contribute or ask a question</h2>
		<p>
			Everything lives on <a href="https://github.com/joelparkerhenderson">GitHub</a> — open an
			issue, send a pull request, or
			<a href="mailto:joel@joelparkerhenderson.com?subject=Open%20source%20question">email a question</a
			>.
		</p>
	</ContainerWithFixedWidth>
</main>
