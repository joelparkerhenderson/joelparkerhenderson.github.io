<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import PromoTile from '$lib/components/site/PromoTile.svelte';
	import Seo from '$lib/components/site/Seo.svelte';
	import ContactCta from '$lib/components/site/ContactCta.svelte';
	import { corePillars, actionTiles } from '$lib/data/pillars';
	import { SITE_URL } from '$lib/site';

	// No dates shown — these aren't dated blog posts, and KPMG's own
	// insight cards (see the redesign research) skip dates too, grouping
	// implicitly instead. Picked as the three newest project pages added.
	const latest = [
		{
			title: 'Digital Health Guide',
			excerpt: 'An open-source handbook for leaders delivering digital services in health and social care — 50+ chapters, foundations through measurement.',
			href: '/digital-health-guide/'
		},
		{
			title: 'GitAlias',
			excerpt: 'A collection of Git command aliases I maintain — 200+ documented shortcuts for everyday and advanced Git workflows.',
			href: '/gitalias/'
		},
		{
			title: 'Ways Of Working',
			excerpt: "100+ tips for how teams work well together — principles, ground rules, and communication norms, written down so they're debatable.",
			href: '/ways-of-working/'
		}
	];

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
				Engineering leadership that holds up under pressure. Decisions that don't unravel.
				Teams that stay healthy. Software built to be reused, not shipped once and forgotten.
				That's the result of 20+ years building and consulting across industry and government.
				I'm currently head of software engineering for a national health service organization.
				My work spans both commercial and public-sector engineering. The frameworks, templates,
				and open-source software I publish are free, open, and used well beyond either sector.
			</p>
			<blockquote class="hero-quote">
				Direction only helps if the team executing it is healthy. Decisions only hold up if
				they're written down and revisited.
			</blockquote>
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

		<h2>Latest thinking</h2>
		<div class="insight-card-grid">
			{#each latest as item (item.href)}
				<a class="card insight-card" href={item.href}>
					<h3>{item.title}</h3>
					<p>{item.excerpt}</p>
					<span class="promo-tile-cta">Read <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>
	</ContainerWithFixedWidth>
</main>
