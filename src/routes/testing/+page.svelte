<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import testAutomationGuide from '$lib/assets/guides/test-automation-guide.jpg';

	const title = 'Testing — Joel Parker Henderson';
	const description =
		'My work with test automation: publishing Assertables and browser-automation examples, and editing the Test Automation Guide — a one-topic-per-page reference on testing types and practice.';

	const GUIDE_HREF = 'https://github.com/SixArm/topics/tree/main/guides/test-automation-guide';
</script>

<Seo {title} {description} path="/testing/" image={testAutomationGuide} />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs
				trail={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Testing' }]}
			/>
			<h1>Testing</h1>
			<p>
				Test automation is one of the parts of engineering practice I publish the most open-source
				code for — see <a href="/assertables/">Assertables</a>, a Rust crate of assert macros for
				better compile-time and run-time testing, and the Playwright/Selenium browser-automation
				examples under <a href="/engineering/">Engineering</a>. I think of tests as a design tool
				as much as a safety net: writing them well shapes the code being tested.
			</p>
			<p>
				That's the practice behind the <em>Test Automation Guide</em>, a book I edited and
				publish for free: a one-topic-per-page reference covering test-driven, behavior-driven,
				and specification-driven development; the full landscape of testing types — unit,
				integration, end-to-end, regression, usability, accessibility, and more; and the tooling
				and quality-assurance practice around them.
			</p>
			<p>
				The book is free to read on GitHub, alongside its EPUB and PDF exports and source
				topics. If you're setting up a test strategy from scratch, or just want the vocabulary
				straight, it's a good place to start.
			</p>
			<a class="button" href={GUIDE_HREF}>Read the Test Automation Guide →</a>
		</ContainerWithFixedWidth>
	</section>
</main>
