<script lang="ts">
	import '../lib/styles/theme.css';
	import { ContainerWithFixedWidth, Footer, SkipLink } from 'lily-design-system-svelte-headless';
	import SiteHeader from '$lib/components/site/Header.svelte';
	import SiteNav from '$lib/components/site/SiteNav.svelte';

	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<SkipLink href="#content" label="Skip to content" />

<SiteHeader />
<SiteNav />

{@render children()}

<Footer label="Site footer">
	<ContainerWithFixedWidth maxWidth="72rem">
		<p>
			© {year} Joel Parker Henderson · <a href="https://github.com/joelparkerhenderson">GitHub</a> ·
			<a href="https://uk.linkedin.com/in/joelparkerhenderson">LinkedIn</a> · built with
			<a href="https://kit.svelte.dev">SvelteKit</a> and the
			<a href="https://lilydesignsystem.github.io/">Lily Design System</a>
		</p>
	</ContainerWithFixedWidth>
</Footer>
