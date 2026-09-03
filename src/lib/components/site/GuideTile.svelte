<script lang="ts">
	// GuideTile — like PromoTile, but image-forward: the six SixArm guide
	// cover images are 1920x960 (2:1) banners with the title already baked
	// into the image, so forcing PromoTile's square aspect-ratio would crop
	// them badly. Alt is empty: the visible <h3> immediately below is the
	// same text the image already shows, so the image is redundant/decorative.
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

<a class="card guide-tile" {href} target="_blank" rel="noopener">
	<img class="guide-tile-image" src={image} alt="" loading="lazy" />
	<div class="guide-tile-body">
		<h3 class="promo-tile-title">{title}</h3>
		<p class="promo-tile-blurb">{blurb}</p>
		<span class="promo-tile-cta">Explore <span aria-hidden="true">→</span></span>
	</div>
</a>
