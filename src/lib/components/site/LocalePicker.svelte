<script lang="ts">
	// LocalePicker — Lily's own locale-picker helper. The site has only
	// English content today, so "English (US)" is the sole option — this
	// still does real work (sets lang/dir on <html>, satisfying WCAG 3.1.1)
	// and is ready to grow into real i18n later without changing the
	// header wiring, just the `locales` list plus a translation library
	// wired through `onChange`.
	import LocalePicker, { bcp47LocaleTag, localeName } from 'lily-design-system-svelte-locale-picker';

	const STORAGE_KEY = 'jph-locale';
	const DEFAULT_LOCALE = 'en_US';

	let value = $state(DEFAULT_LOCALE);
</script>

<LocalePicker
	label="Locale Picker"
	locales={[DEFAULT_LOCALE]}
	storageKey={STORAGE_KEY}
	name="locale"
	bind:value
/>
<!-- Recommended by the package's own docs, visually hidden for the
     same reason as theme-picker's status line — see ThemePicker.svelte. -->
<p class="locale-picker-status visually-hidden" aria-live="polite">
	Active language: <span lang={bcp47LocaleTag(value)}>{localeName(value)}</span>
</p>
