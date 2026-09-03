<script lang="ts">
	// LocalePicker — Lily's own locale-picker helper. The site has only
	// English content today, so "English (US)" is the sole option — this
	// still does real work (sets lang/dir on <html>, satisfying WCAG 3.1.1)
	// and is ready to grow into real i18n later without changing the
	// header wiring, just the `locales` list plus a translation library
	// wired through `onChange`.
	import LocalePicker from 'lily-design-system-svelte-locale-picker';

	const STORAGE_KEY = 'jph-locale';
</script>

<LocalePicker label="Locale Picker" locales={['en_US']} storageKey={STORAGE_KEY} name="locale" />
