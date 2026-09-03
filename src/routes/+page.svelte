<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import PromoTile from '$lib/components/site/PromoTile.svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import ContactCta from '$lib/components/site/ContactCta.svelte';
	import { corePillars, actionTiles } from '$lib/data/pillars';
	import { SITE_URL } from '$lib/site';

	const title = 'Joel Parker Henderson';
	const description =
		'Software engineering leadership, technology, and consulting — leadership frameworks, open-source engineering, and advisory services. Book a talk, hire me, or use the open source.';

	// schema.org Person, for search engines and AI assistants — every URL
	// here is a real, live profile (see SocialLinks.svelte), nothing
	// invented.
	const personJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Joel Parker Henderson',
		url: SITE_URL,
		jobTitle: 'Software Engineer and Technology Leader',
		sameAs: [
			'https://github.com/joelparkerhenderson',
			'https://uk.linkedin.com/in/joelparkerhenderson',
			'https://bsky.app/profile/joelparkerhenderson.com',
			'https://mastodon.social/@joelparkerhenderson'
		]
	};
</script>

<Seo {title} {description} path="/" />

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(personJsonLd)}</script>`}
</svelte:head>

<main id="content">
	<section class="site-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Joel Parker Henderson</h1>
			<p>
				Software engineer and technology leader with 20+ years of experience. I build and
				consult across industry and government. I'm currently head of software engineering
				for a national health service organization. My work spans both commercial and
				public-sector engineering. I publish frameworks, templates, and open-source
				software. They're used well beyond either sector — free, open, and built to be
				reused anywhere in the world.
			</p>
			<ContactCta subject="General inquiry" emailLabel="Get in touch" />
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<h2>Explore my work</h2>
		<div class="promo-tile-grid">
			{#each corePillars as pillar (pillar.id)}
				<PromoTile href={pillar.route} image={pillar.image} title={pillar.title} blurb={pillar.tileBlurb} />
			{/each}
		</div>

		<h2>Work with me</h2>
		<div class="promo-tile-grid">
			{#each actionTiles as tile (tile.id)}
				<PromoTile href={tile.route} image={tile.image} title={tile.title} blurb={tile.tileBlurb} />
			{/each}
		</div>
	</ContainerWithFixedWidth>
</main>
