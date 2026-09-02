<script lang="ts">
	// TextSizePicker — a native <select> (per request, not a button+popup),
	// styled with Lily's generic ".select" hook so it matches ThemePicker.
	// Sets --user-font-scale, which theme.css multiplies into the root font
	// size. Choice persists to localStorage; app.html applies it before
	// paint to avoid a flash of unscaled text.
	import { browser } from '$app/environment';

	const STORAGE_KEY = 'jph-font-scale';
	const OPTIONS = [
		{ value: 0.875, label: 'Small' },
		{ value: 1, label: 'Default' },
		{ value: 1.125, label: 'Large' },
		{ value: 1.25, label: 'Larger' },
		{ value: 1.375, label: 'Largest' }
	];
	const DEFAULT_SCALE = 1;

	function readStored(): number {
		if (!browser) return DEFAULT_SCALE;
		const stored = Number(localStorage.getItem(STORAGE_KEY));
		return OPTIONS.some((o) => o.value === stored) ? stored : DEFAULT_SCALE;
	}

	let scale = $state(readStored());

	$effect(() => {
		if (!browser) return;
		document.documentElement.style.setProperty('--user-font-scale', String(scale));
		if (scale === DEFAULT_SCALE) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, String(scale));
		}
	});
</script>

<select class="select" aria-label="Text size" bind:value={scale}>
	{#each OPTIONS as option (option.value)}
		<option value={option.value}>Text size: {option.label}</option>
	{/each}
</select>
