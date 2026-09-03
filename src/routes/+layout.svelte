<script lang="ts">
	import '../lib/styles/theme.css';
	import { ContainerWithFixedWidth, Footer, SkipLink } from 'lily-design-system-svelte-headless';
	import SiteHeader from '$lib/components/site/Header.svelte';
	import SiteNav from '$lib/components/site/SiteNav.svelte';
	import FooterNav from '$lib/components/site/FooterNav.svelte';
	import ContactCta from '$lib/components/site/ContactCta.svelte';

	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<div data-pagefind-ignore="all">
	<SkipLink href="#content" label="Skip to content" />
	<SiteHeader />
	<SiteNav />
</div>

{@render children()}

<div data-pagefind-ignore="all">
	<Footer label="Site footer">
		<ContainerWithFixedWidth maxWidth="72rem">
			<div class="footer-cta">
				<h2>Let's talk</h2>
				<ContactCta subject="General inquiry" emailLabel="Get in touch" />
			</div>
			<FooterNav />
			<p class="footer-colophon">
				© {year} Joel Parker Henderson · <a href="https://github.com/joelparkerhenderson">GitHub</a> ·
				<a href="https://uk.linkedin.com/in/joelparkerhenderson">LinkedIn</a> · built with
				<a href="https://kit.svelte.dev">SvelteKit</a> and the
				<a href="https://lilydesignsystem.github.io/">Lily Design System</a>
			</p>
		</ContainerWithFixedWidth>
	</Footer>
</div>
