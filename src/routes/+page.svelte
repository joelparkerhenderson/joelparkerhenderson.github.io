<script lang="ts">
	import { Card, ContainerWithFixedWidth, GoToTop, SectionLink, SectionNav } from 'lily-design-system-svelte-headless';
	import { sections } from '$lib/data/sections';

	const title = 'Joel Parker Henderson';
	const description =
		'Practical frameworks, templates, and decision tools for technology leadership: leadership & culture, goals, decisions, delivery, startups, risk & security, healthcare interoperability, and engineering reference.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main id="content">
	<section id="top" class="site-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Joel Parker Henderson</h1>
			<p>
				Software engineer and technology leader with 20+ years building and consulting across
				engineering teams, currently leading software engineering at
				<a href="https://dhcw.nhs.wales/">Digital Health and Care Wales</a> (NHS Wales). This site
				collects the frameworks, templates, and decision tools used along the way — for setting
				direction, tracking goals, recording decisions, and running delivery — plus, in the
				healthcare interoperability section below, open-source Rust implementations of core
				standards such as HL7, FHIR, SNOMED CT, and openEHR. Everything here is free and open
				source on GitHub.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<SectionNav label="Jump to a section">
		<ContainerWithFixedWidth maxWidth="72rem">
			<ul>
				{#each sections as section (section.id)}
					<li><SectionLink href={`#${section.id}`}>{section.heading}</SectionLink></li>
				{/each}
			</ul>
		</ContainerWithFixedWidth>
	</SectionNav>

	<ContainerWithFixedWidth maxWidth="72rem">
		{#each sections as section (section.id)}
			{#if section.collapsed}
				<details class="engineering-reference" id={section.id}>
					<summary>{section.heading}</summary>
					<p>{section.blurb}</p>
					{#each section.groups as group (group.label)}
						<div class="section-group">
							<h3>{group.label}</h3>
							<ul class="link-list">
								{#each group.items as item (item.href)}
									<li><a href={item.href}>{item.title}</a></li>
								{/each}
							</ul>
						</div>
					{/each}
				</details>
			{:else}
				<Card id={section.id} heading={section.heading} headingLevel={2}>
					<p>{section.blurb}</p>
					{#each section.groups as group (group.label)}
						<div class="section-group">
							{#if section.groups.length > 1}
								<h3>{group.label}</h3>
							{/if}
							<ul class="link-list">
								{#each group.items as item (item.href)}
									<li><a href={item.href}>{item.title}</a></li>
								{/each}
							</ul>
						</div>
					{/each}
				</Card>
			{/if}
		{/each}
	</ContainerWithFixedWidth>

	<GoToTop href="#top">Back to top ↑</GoToTop>
</main>
