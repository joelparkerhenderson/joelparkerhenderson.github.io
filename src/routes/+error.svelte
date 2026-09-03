<script lang="ts">
	import { page } from '$app/state';
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import { corePillars, actionTiles } from '$lib/data/pillars';

	// Handles a client-side navigation to a route that doesn't exist
	// (e.g. a stale bookmark or typo in the URL bar followed by a link
	// click). GitHub Pages itself serves static/404.html for a direct,
	// full server-side request to a missing URL — this component covers
	// the SPA-navigation case, and matches that page's content.
</script>

<Seo
	title={`${page.status} — Joel Parker Henderson`}
	description="Page not found."
	path={page.url.pathname}
/>

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Page not found</h1>
			<p>
				That page doesn't exist ({page.status}) — it may have moved, or the link was mistyped.
				Here's the rest of the site.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="promo-tile-grid">
			{#each [...corePillars, ...actionTiles] as tile (tile.id)}
				<a class="card promo-tile" href={tile.route}>
					<h3 class="promo-tile-title">{tile.title}</h3>
					<span class="promo-tile-cta">Explore <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>
	</ContainerWithFixedWidth>
</main>
