<script lang="ts">
	// PillarSections — renders a filtered subset of sections.ts. Extracted
	// unchanged from the original single-page homepage so leadership/,
	// technology/, and consulting/ can each render their own slice without
	// duplicating this markup three times.
	import { Card } from 'lily-design-system-svelte-headless';
	import type { Section } from '$lib/data/sections';

	let { sections }: { sections: Section[] } = $props();
</script>

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
