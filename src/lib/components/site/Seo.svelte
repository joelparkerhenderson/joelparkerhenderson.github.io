<script lang="ts">
	// Shared <svelte:head> block for every route: title, description,
	// canonical link, Open Graph, and Twitter card meta. `path` is the
	// route's own trailing-slash path (e.g. "/leadership/"), used to build
	// the canonical and og:url. `image` is an absolute URL if given —
	// callers pass a Vite-bundled asset's root-relative src (e.g.
	// "/_app/immutable/assets/leadership.abc123.jpg") and this component
	// prefixes it with SITE_URL; otherwise DEFAULT_OG_IMAGE is used.
	import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '$lib/site';

	let {
		title,
		description,
		path,
		image
	}: {
		title: string;
		description: string;
		path: string;
		image?: string;
	} = $props();

	let url = $derived(`${SITE_URL}${path}`);
	// `image` is normally root-relative (a Vite-bundled asset's resolved
	// src), but after client-side hydration Vite can resolve it as a full
	// absolute URL instead — guard against double-prefixing either way.
	let ogImage = $derived(
		image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
