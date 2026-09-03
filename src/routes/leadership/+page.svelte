<script lang="ts">
	import { ContainerWithFixedWidth, GoToTop } from 'lily-design-system-svelte-headless';
	import PillarSections from '$lib/components/site/PillarSections.svelte';
	import PromoTile from '$lib/components/site/PromoTile.svelte';
	import { sections } from '$lib/data/sections';

	const pillarSections = sections.filter((s) =>
		['leadership-culture', 'goals-performance', 'decisions-thinking'].includes(s.id)
	);

	const title = 'Leadership — Joel Parker Henderson';
	const description =
		'Frameworks for direction, goals, and decisions: leadership and culture, OKRs and KPIs, decision records, and structured thinking tools.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main id="content">
	<section id="top" class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Leadership</h1>
			<p>
				Good leadership is a practice, not a personality trait — it shows up in how direction
				gets set, how goals get tracked, and how decisions get recorded so they can be
				understood, questioned, and revisited later. The frameworks below are the ones I
				actually use: for setting vision and culture, for turning goals into OKRs and KPIs that
				hold up under scrutiny, and for making decisions — Decision Records, Architecture
				Decision Records, SPADE, OODA — in a way that survives the people who made them moving
				on.
			</p>
			<p>
				None of this is theoretical. It's the operating layer beneath the engineering and
				delivery work described under <a href="/technology/">Technology</a> and
				<a href="/consulting/">Consulting</a>, published as open source so any team can adopt,
				adapt, or argue with it.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<PillarSections sections={pillarSections} />

		<h2>Featured project</h2>
		<div class="promo-tile-grid">
			<PromoTile href="/teamwork/" icon="👥" title="Teamwork" blurb="Ways of working, team health, and communication frameworks." />
		</div>

		<div class="cta-band">
			<p>Want this thinking applied inside your organization, not just read about it?</p>
			<a class="button" href="/hire/">Hire me →</a>
		</div>
	</ContainerWithFixedWidth>

	<GoToTop href="#top">Back to top ↑</GoToTop>
</main>
