<script lang="ts">
	// TextSizePicker component
	//
	// A small headless-in-spirit text-size control, in Lily's own idiom (one
	// class hook, ARIA group, no component in the Lily catalog covers this).
	// Cycles the root font size through five steps by setting the
	// --user-font-scale custom property that theme.css multiplies into
	// `html { font-size }`. Choice persists to localStorage; app.html applies
	// the stored value before paint to avoid a flash of unscaled text.
	//
	// Props: none — this is a page-level, single-instance control.
	import { browser } from '$app/environment';

	const STORAGE_KEY = 'jph-font-scale';
	const STEPS = [0.875, 1, 1.125, 1.25, 1.375];
	const DEFAULT_INDEX = 1; // 1 === 100%, the un-scaled default

	function readStoredIndex(): number {
		if (!browser) return DEFAULT_INDEX;
		const stored = Number(localStorage.getItem(STORAGE_KEY));
		const index = STEPS.indexOf(stored);
		return index === -1 ? DEFAULT_INDEX : index;
	}

	let index = $state(readStoredIndex());

	$effect(() => {
		if (!browser) return;
		const scale = STEPS[index];
		document.documentElement.style.setProperty('--user-font-scale', String(scale));
		if (index === DEFAULT_INDEX) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, String(scale));
		}
	});

	function decrease() {
		index = Math.max(0, index - 1);
	}
	function reset() {
		index = DEFAULT_INDEX;
	}
	function increase() {
		index = Math.min(STEPS.length - 1, index + 1);
	}
</script>

<div class="text-size-picker" role="group" aria-label="Text size">
	<button type="button" onclick={decrease} disabled={index === 0} aria-label="Decrease text size">
		A−
	</button>
	<button
		type="button"
		onclick={reset}
		aria-pressed={index === DEFAULT_INDEX}
		aria-label="Reset text size to default"
	>
		A
	</button>
	<button
		type="button"
		onclick={increase}
		disabled={index === STEPS.length - 1}
		aria-label="Increase text size"
	>
		A+
	</button>
</div>
