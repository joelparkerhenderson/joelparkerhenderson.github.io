<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';

	const title = 'Teamwork — Joel Parker Henderson';
	const description =
		'Leadership, ways of working, and team health: frameworks for direction, change, communication, and how people work well together.';

	const groups = [
		{
			label: 'Leadership & direction',
			items: [
				{ title: 'Leadership — notes and advice collected from various sources', href: 'https://github.com/joelparkerhenderson/leadership' },
				{ title: 'Organizational development — a practitioner’s guide to OD frameworks (McKinsey 7S, Kotter, Team Topologies, and more)', href: 'https://github.com/organizational-development/organizational-development' },
				{ title: 'ADKAR change management model — a stage-by-stage guide to leading change', href: 'https://github.com/joelparkerhenderson/adkar-change-management-model' }
			]
		},
		{
			label: 'Ways of working',
			items: [
				{ title: 'Ways of Working — 100+ tips for how teams work well together', href: 'https://github.com/joelparkerhenderson/ways-of-working' },
				{ title: 'TEAM FOCUS — a toolkit for team problem solving', href: 'https://github.com/joelparkerhenderson/team-focus' },
				{ title: 'Agile assessment — exercises for facilitating team agile-maturity discussions', href: 'https://github.com/joelparkerhenderson/agile-assessment' },
				{ title: 'Agile — my work with agile, and the Agile Change Guide (see the dedicated page)', href: '/agile/' }
			]
		},
		{
			label: 'Team health & communication',
			items: [
				{ title: 'Crucial conversations — notes on talking well when stakes are high', href: 'https://github.com/joelparkerhenderson/crucial-conversations' },
				{ title: 'Code of conduct guidelines — what makes a code of conduct actually work', href: 'https://github.com/joelparkerhenderson/code-of-conduct-guidelines' },
				{ title: 'Feedback request template — a fill-in-the-blank template for requesting feedback', href: 'https://github.com/joelparkerhenderson/feedback-request-template' },
				{ title: 'Big Five personality traits — a summary of the Big Five model for understanding teammates', href: 'https://github.com/joelparkerhenderson/big-five-personality-traits' }
			]
		}
	];
</script>

<Seo {title} {description} path="/teamwork/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs
				trail={[{ label: 'Home', href: '/' }, { label: 'Leadership', href: '/leadership/' }, { label: 'Teamwork' }]}
			/>
			<h1>Teamwork</h1>
			<p>
				Direction-setting only works if the team executing it is healthy — able to disagree
				productively, absorb change without losing momentum, and give each other feedback that
				actually lands. This is the collection behind that: leadership notes, ways-of-working
				guides, and the communication tools I reach for most often. Goals, OKRs, and decision
				frameworks live under <a href="/leadership/">Leadership</a>.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		{#each groups as group (group.label)}
			<div class="card">
				<h2>{group.label}</h2>
				<ul class="link-list">
					{#each group.items as item (item.href)}
						<li><a href={item.href}>{item.title}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
	</ContainerWithFixedWidth>
</main>
