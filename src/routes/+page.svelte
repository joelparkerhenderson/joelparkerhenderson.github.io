<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import PromoTile from '$lib/components/site/PromoTile.svelte';
	import { corePillars, actionTiles } from '$lib/data/pillars';

	const title = 'Joel Parker Henderson';
	const description =
		'Software engineering leadership, technology, and consulting — leadership frameworks, open-source engineering, and advisory services. Book a talk, hire me, or use the open source.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
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
