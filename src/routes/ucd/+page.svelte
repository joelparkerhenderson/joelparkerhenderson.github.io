<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import uiUxDesignGuide from '$lib/assets/guides/ui-ux-design-guide.jpg';

	const title = 'UI/UX — Joel Parker Henderson';
	const description =
		'My work with UI/UX and user-centered design: building the Lily Design System, and editing the UI/UX Design Guide — a one-topic-per-page reference on UI, UX, and design thinking.';

	const GUIDE_HREF = 'https://github.com/SixArm/topics/tree/main/guides/ui-ux-design-guide';
</script>

<Seo {title} {description} path="/ucd/" image={uiUxDesignGuide} />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs
				trail={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'UI/UX' }]}
			/>
			<h1>UI/UX</h1>
			<p>
				This site is my clearest evidence of how I think about UI/UX: it's built entirely on
				the <a href="/lily/">Lily Design System</a>, a headless, accessible component library I
				publish myself — every picker in the header above is one of its packages. User-centered
				design isn't a phase I hand off to a designer; for a solo engineer building products and
				internal tools, usability and accessibility have to be part of the same decision as the
				architecture.
			</p>
			<p>
				That's the thinking behind the <em>UI/UX Design Guide</em>, a book I edited and publish
				for free: a one-topic-per-page reference covering UI, UX, CX, and DX; user-centered
				design, usability, and accessibility; design thinking tools like empathy maps, personas,
				and journey maps; and design management practice. Like my other guides, it's built to be
				looked things up in rather than read start to finish.
			</p>
			<p>
				The book is free to read on GitHub, alongside its EPUB and PDF exports and source
				topics. If you're trying to bring some structure to how your team talks about design —
				or just want a fast glossary of the vocabulary — it's a good place to start.
			</p>
			<a class="button" href={GUIDE_HREF}>Read the UI/UX Design Guide →</a>
		</ContainerWithFixedWidth>
	</section>
</main>
