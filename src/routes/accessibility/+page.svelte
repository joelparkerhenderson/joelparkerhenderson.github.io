<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';

	const title = 'Accessibility — Joel Parker Henderson';
	const description = 'This site is built on the Lily Design System — headless, accessible components, keyboard support, and a choice of 45 themes.';
</script>

<Seo {title} {description} path="/accessibility/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Accessibility</h1>
			<p>
				This site is built on the <a href="/lily/">Lily Design System</a>, an
				accessible-by-default component library — its own header controls, visible above,
				are the proof.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="card">
			<h2>What's built in</h2>
			<ul class="link-list">
				<li>A "Skip to content" link as the first focusable element on every page</li>
				<li>Semantic HTML, ARIA states, and keyboard support on every interactive component</li>
				<li>An adjustable text-size control in the header, independent of browser zoom</li>
				<li>45 selectable themes, including high-contrast and government-accessibility palettes</li>
				<li>A language/locale picker for interface strings</li>
				<li>Visible focus states throughout, rather than suppressed outlines</li>
			</ul>
		</div>

		<div class="card">
			<h2>Known limitations</h2>
			<p>
				This is an ongoing effort, not a certification. If something doesn't work with your
				assistive technology, keyboard, or browser settings, that's useful to know about.
			</p>
		</div>

		<div class="card">
			<h2>Report an issue</h2>
			<p>
				Email <a href="mailto:joel@joelparkerhenderson.com?subject=Accessibility%20issue">joel@joelparkerhenderson.com</a>
				with the page, what you were trying to do, and what happened instead.
			</p>
		</div>
	</ContainerWithFixedWidth>
</main>
