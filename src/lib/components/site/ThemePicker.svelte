<script lang="ts">
	// ThemePicker — site-specific composition of Lily's ThemeSelect.
	//
	// Lily ships no themed default: "system" means no [data-theme] attribute
	// (theme.css then follows prefers-color-scheme); "light" and "dark" set
	// [data-theme] explicitly. Choice persists to localStorage; app.html
	// applies the stored choice before paint to avoid a flash.
	import { ThemeSelect, ThemeSelectOption } from 'lily-design-system-svelte-headless';
	import { browser } from '$app/environment';

	type ThemeChoice = 'system' | 'light' | 'dark';
	const STORAGE_KEY = 'jph-theme';

	function readStored(): ThemeChoice {
		if (!browser) return 'system';
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored === 'light' || stored === 'dark' ? stored : 'system';
	}

	let value = $state<ThemeChoice>(readStored());

	$effect(() => {
		if (!browser) return;
		if (value === 'system') {
			delete document.documentElement.dataset.theme;
			localStorage.removeItem(STORAGE_KEY);
		} else {
			document.documentElement.dataset.theme = value;
			localStorage.setItem(STORAGE_KEY, value);
		}
	});
</script>

<ThemeSelect label="Colour theme" bind:value>
	<ThemeSelectOption value="system">Theme: System</ThemeSelectOption>
	<ThemeSelectOption value="light">Theme: Light</ThemeSelectOption>
	<ThemeSelectOption value="dark">Theme: Dark</ThemeSelectOption>
</ThemeSelect>
