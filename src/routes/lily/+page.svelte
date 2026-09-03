<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';

	const title = 'Lily Design System — Joel Parker Henderson';
	const description =
		'Lily is a free, open-source headless design system: 492 accessible components across seven frameworks, 45 ready-made themes, zero shipped CSS. This site is built with it.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<p><a href="/technology/">← Technology</a></p>
			<h1>Lily Design System</h1>
			<p>
				Lily is a free, open-source headless design system — 492 accessible, reusable
				components, implemented in plain HTML, Svelte, React, Vue, Angular, Blazor, and
				Nunjucks. Each component is one kebab-case CSS class hook, semantic markup, ARIA
				states, keyboard behaviour, and zero shipped CSS: you style it yourself, or link one
				of 45 ready-made themes — NHS, GOV.UK, USWDS, and general-purpose palettes among them.
			</p>
			<p>
				This site is proof, not marketing copy: the header's theme, text-size, locale, and
				share controls are all Lily's own picker packages, and every page is built on
				<code>lily-design-system-svelte-headless</code>. Switch the theme picker in the header
				to see all 45 themes applied live to this exact page.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="card">
			<h2>What's in the catalog</h2>
			<ul class="link-list">
				<li>492 components — layout, navigation, forms, feedback, data display, dialogs, and more</li>
				<li>45 ready-made themes, including government and healthcare-specific palettes</li>
				<li>Dedicated picker packages: theme, text-size, locale, and share pickers</li>
				<li>Seven framework implementations sharing the same class hooks and behaviour</li>
			</ul>
		</div>

		<div class="cta-band">
			<p>See it and other open-source work in context.</p>
			<a class="button" href="/open-source/">Use my open source →</a>
		</div>

		<h2>Links</h2>
		<ul class="link-list">
			<li><a href="https://lilydesignsystem.github.io/">Documentation & component catalog</a></li>
			<li><a href="https://github.com/LilyDesignSystem">GitHub organization</a></li>
		</ul>
	</ContainerWithFixedWidth>
</main>
