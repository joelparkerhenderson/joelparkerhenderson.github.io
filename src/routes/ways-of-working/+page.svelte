<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';

	const title = 'Ways Of Working — Joel Parker Henderson';
	const description =
		'Ways of Working is a collection I maintain of 100+ tips for how teams work well together — principles, ground rules, communication norms, and remote-work practices.';

	const REPO_HREF = 'https://github.com/ways-of-working/ways-of-working';
</script>

<Seo {title} {description} path="/ways-of-working/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs
				trail={[{ label: 'Home', href: '/' }, { label: 'Teamwork', href: '/teamwork/' }, { label: 'Ways Of Working' }]}
			/>
			<h1>Ways Of Working</h1>
			<p>
				Ways of Working is a collection I maintain of 100+ tips for how teams work well
				together — principles, values, tenets, ground rules, aspirations, norms, agreements,
				and expectations. The idea behind it is simple: teams work better when their norms are
				written down, easy to find, and open to debate, rather than left as unstated assumptions
				that only surface when someone breaks one.
			</p>
			<p>
				It's organized across the areas that actually cause friction on real teams: goodness,
				focus, and respect; collaboration and discussions; communications, feedback, and
				meetings; remote and asynchronous work; team bonding and onboarding; and safety and
				shared spaces. Some of it is curated from recognizable sources — Amazon, Google,
				Basecamp — and some is original material, including practical artifacts like meeting
				ground rules and hand signals for coordinating in a group.
			</p>
			<p>
				It's free to read, fork, and adapt for your own team. It sits alongside the leadership
				and team-health frameworks under <a href="/teamwork/">Teamwork</a> — the same practice
				area, at a more tactical, day-to-day level.
			</p>
			<a class="button" href={REPO_HREF}>See Ways Of Working on GitHub →</a>
		</ContainerWithFixedWidth>
	</section>
</main>
