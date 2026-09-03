<script lang="ts">
	// PromoTile — one KPMG-style promo card. The whole tile is a single <a>
	// (not Lily's Card heading-link pattern, which only links the heading
	// text) — reuses the .card class hook for Lily-themed colour/border/
	// shadow, adds our own .promo-tile layout on top. Image-forward: a
	// real photo (Pexels, see each page's own comment for source/credit),
	// not an icon or emoji.
	let {
		href,
		image,
		title,
		blurb
	}: {
		href: string;
		image: string;
		title: string;
		blurb: string;
	} = $props();
</script>

<a class="card promo-tile" {href}>
	<img class="promo-tile-image" src={image} alt="" loading="lazy" />
	<div class="promo-tile-body">
		<h3 class="promo-tile-title">{title}</h3>
		<p class="promo-tile-blurb">{blurb}</p>
		<span class="promo-tile-cta">Explore <span aria-hidden="true">→</span></span>
	</div>
</a>
