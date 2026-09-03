<script lang="ts">
	// PromoTile — one square KPMG-style promo card. The whole tile is a
	// single <a> (not Lily's Card heading-link pattern, which only links
	// the heading text) — reuses the .card class hook for Lily-themed
	// colour/border/shadow, adds our own .promo-tile layout on top.
	let {
		href,
		icon,
		title,
		blurb
	}: {
		href: string;
		icon: string;
		title: string;
		blurb: string;
	} = $props();
</script>

<a class="card promo-tile" {href}>
	<span class="promo-tile-icon" aria-hidden="true">{icon}</span>
	<h3 class="promo-tile-title">{title}</h3>
	<p class="promo-tile-blurb">{blurb}</p>
	<span class="promo-tile-cta">Explore <span aria-hidden="true">→</span></span>
</a>
