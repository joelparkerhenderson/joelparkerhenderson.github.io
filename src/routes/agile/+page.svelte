<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import agileChangeGuide from '$lib/assets/guides/agile-change-guide.jpg';

	const title = 'Agile — Joel Parker Henderson';
	const description =
		'My work with agile: leading agile teams and assessments, and editing the Agile Change Guide — a one-topic-per-page reference on the manifesto, principles, and practice of agile change.';

	const GUIDE_HREF = 'https://github.com/SixArm/topics/tree/main/guides/agile-change-guide';
</script>

<Seo {title} {description} path="/agile/" image={agileChangeGuide} />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs
				trail={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Agile' }]}
			/>
			<h1>Agile</h1>
			<p>
				I've spent most of my career inside agile teams, not just reading about them — leading
				delivery, facilitating retrospectives, and running the kind of team-health and
				agile-maturity assessments collected under <a href="/teamwork/">Teamwork</a>. What I
				keep coming back to is that agile is a set of values and principles, not a checklist:
				teams that treat the manifesto as a compliance exercise get the ceremonies without the
				benefit, and teams that internalize it adapt their process instead of following it
				blindly.
			</p>
			<p>
				That perspective is what shaped the <em>Agile Change Guide</em>, a book I edited and
				publish for free: a one-topic-per-page reference covering the agile manifesto and
				principles, agile and mindfulness (flow state, systems thinking, psychological safety),
				and the frameworks and metrics teams actually use day to day. It's written to be looked
				things up in, not read cover to cover — the kind of reference I wanted when I was
				learning this myself.
			</p>
			<p>
				The book is free to read on GitHub, alongside its EPUB and PDF exports and source
				topics. If you're setting up a new team's ways of working, or trying to explain agile to
				a skeptical stakeholder, it's a good place to start.
			</p>
			<a class="button" href={GUIDE_HREF}>Read the Agile Change Guide →</a>
		</ContainerWithFixedWidth>
	</section>
</main>
