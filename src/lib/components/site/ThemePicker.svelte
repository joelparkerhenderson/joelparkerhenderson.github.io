<script lang="ts">
	// ThemePicker — lets a visitor pick any of Lily's 45 ready-made themes.
	//
	// Each theme is a standalone stylesheet (static/themes/<id>.css) that
	// styles every Lily component hook. Rather than bundling all 45 into the
	// page (~5MB), this swaps the href of a single <link id="lily-theme">
	// (declared with a default in app.html/+layout.svelte) and sets
	// [data-theme] to match, since every theme file scopes its tokens to
	// :root and :root[data-theme="<id>"] alike. Choice persists to
	// localStorage; app.html applies it before paint to avoid a flash.
	import { ThemeSelect, ThemeSelectOption } from 'lily-design-system-svelte-headless';
	import { browser } from '$app/environment';
	import { themes, DEFAULT_THEME_ID } from '$lib/data/themes';

	const STORAGE_KEY = 'jph-theme';
	const GROUPS = ['Government & healthcare', 'General'] as const;

	function readStored(): string {
		if (!browser) return DEFAULT_THEME_ID;
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored && themes.some((t) => t.id === stored) ? stored : DEFAULT_THEME_ID;
	}

	let value = $state(readStored());

	$effect(() => {
		if (!browser) return;
		document.documentElement.dataset.theme = value;
		const link = document.getElementById('lily-theme');
		if (link instanceof HTMLLinkElement) {
			link.href = `/themes/${value}.css`;
		}
		if (value === DEFAULT_THEME_ID) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, value);
		}
	});
</script>

<ThemeSelect class="select" label="Colour theme — all 45 Lily Design System themes" bind:value>
	{#each GROUPS as group (group)}
		<optgroup label={group}>
			{#each themes.filter((t) => t.group === group) as theme (theme.id)}
				<ThemeSelectOption value={theme.id}>{theme.label}</ThemeSelectOption>
			{/each}
		</optgroup>
	{/each}
</ThemeSelect>
