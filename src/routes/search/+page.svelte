<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';

	const title = 'Search — Joel Parker Henderson';
	const description = 'Search this site.';

	// Pagefind indexes the static build (npm run build triggers its
	// `postbuild` script) and ships its own JS/CSS/WASM into
	// static-served /pagefind/ — none of that exists at dev-server time
	// or during SSR, so this loads entirely client-side, after mount.
	let searchReady = $state(false);
	let searchFailed = $state(false);

	$effect(() => {
		let cssLink: HTMLLinkElement | undefined;
		let script: HTMLScriptElement | undefined;

		cssLink = document.createElement('link');
		cssLink.rel = 'stylesheet';
		cssLink.href = '/pagefind/pagefind-ui.css';
		document.head.appendChild(cssLink);

		script = document.createElement('script');
		script.src = '/pagefind/pagefind-ui.js';
		script.onload = () => {
			// @ts-expect-error — PagefindUI is a global from the script above
			new window.PagefindUI({ element: '#search', showSubResults: true });
			searchReady = true;
		};
		script.onerror = () => {
			searchFailed = true;
		};
		document.body.appendChild(script);

		return () => {
			cssLink?.remove();
			script?.remove();
		};
	});
</script>

<Seo {title} {description} path="/search/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Search' }]} />
			<h1>Search</h1>
			<p>Search across every page on this site.</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		{#if !searchReady && !searchFailed}
			<p>Loading search…</p>
		{/if}
		<div id="search"></div>
		{#if searchFailed}
			<p class="card">
				Search isn't available right now — try the <a href="/">homepage</a> or the
				<a href="/guides/">Guides</a> page instead.
			</p>
		{/if}
	</ContainerWithFixedWidth>
</main>
