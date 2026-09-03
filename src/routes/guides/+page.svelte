<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import GuideTile from '$lib/components/site/GuideTile.svelte';
	import Seo from '$lib/components/site/Seo.svelte';

	import agileChangeGuide from '$lib/assets/guides/agile-change-guide.jpg';
	import innovationPartnershipGuide from '$lib/assets/guides/innovation-partnership-guide.jpg';
	import projectManagementGuide from '$lib/assets/guides/project-management-guide.jpg';
	import startupBusinessGuide from '$lib/assets/guides/startup-business-guide.jpg';
	import testAutomationGuide from '$lib/assets/guides/test-automation-guide.jpg';
	import uiUxDesignGuide from '$lib/assets/guides/ui-ux-design-guide.jpg';
	import guidesImage from '$lib/assets/tiles/guides.jpg';

	const title = 'Guides — Joel Parker Henderson';
	const description =
		'Six long-form reference guides: agile change, innovation partnerships, project management, startup business, test automation, and UI/UX design.';

	const GUIDES_REPO = 'https://github.com/SixArm/topics/tree/main/guides';

	const guides = [
		{
			image: agileChangeGuide,
			title: 'Agile Change Guide',
			blurb:
				'A comprehensive reference for understanding, implementing, and improving agile practices — from core principles and manifesto values through frameworks, metrics, and real-world applications.',
			href: '/agile/'
		},
		{
			image: innovationPartnershipGuide,
			title: 'Innovation Partnership Guide',
			blurb:
				'How organizations form, manage, and sustain partnerships that drive innovation — joint ventures, research collaborations, and technology transfer, covering the strategic, operational, and legal dimensions.',
			href: `${GUIDES_REPO}/innovation-partnership-guide`
		},
		{
			image: projectManagementGuide,
			title: 'Project Management Guide',
			blurb:
				'The structured frameworks and practical techniques needed to deliver software systems and technology initiatives on time, within budget, and at the quality level stakeholders expect.',
			href: `${GUIDES_REPO}/project-management-guide`
		},
		{
			image: startupBusinessGuide,
			title: 'Startup Business Guide',
			blurb:
				'The full landscape of building, launching, and scaling a startup — concepts, frameworks, and terminology for founders, technical co-founders, engineering leaders, and product managers.',
			href: `${GUIDES_REPO}/startup-business-guide`
		},
		{
			image: testAutomationGuide,
			title: 'Test Automation Guide',
			blurb:
				'The full landscape of automated testing — foundational development methodologies, specialized testing types, tooling, quality assurance, and security practices.',
			href: '/testing/'
		},
		{
			image: uiUxDesignGuide,
			title: 'UI/UX Design Guide',
			blurb:
				'The principles, practices, and processes behind effective user interface and user experience design, from foundational concepts through advanced and AI-assisted techniques.',
			href: '/ucd/'
		}
	];
</script>

<Seo {title} {description} path="/guides/" image={guidesImage} />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<p><a href="/consulting/">← Consulting</a></p>
			<h1>Guides</h1>
			<p>
				Six long-form reference guides, each organized as a one-topic-per-page glossary so a
				reader can look up a specific concept quickly or work through the whole thing end to
				end. Every guide is free and open source.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="promo-tile-grid guide-tile-grid">
			{#each guides as guide (guide.title)}
				<GuideTile href={guide.href} image={guide.image} title={guide.title} blurb={guide.blurb} />
			{/each}
		</div>
	</ContainerWithFixedWidth>
</main>
