<script lang="ts">
	// Shared "get in touch" CTA — email (with a prefilled subject) and
	// LinkedIn, matching the pattern already used on /hire/ and /speaking/.
	// Reused wherever the site wants to repeat the primary conversion path
	// (homepage, footer, /contact/) rather than only on the two dedicated
	// action pages.
	let {
		subject = 'General inquiry',
		emailLabel = 'Email me',
		lead
	}: {
		subject?: string;
		emailLabel?: string;
		lead?: string;
	} = $props();

	let encodedSubject = $derived(encodeURIComponent(subject));
</script>

<div class="contact-cta">
	{#if lead}
		<p>{lead}</p>
	{/if}
	<div class="contact-actions">
		<a class="button" href={`mailto:joel@joelparkerhenderson.com?subject=${encodedSubject}`}>
			{emailLabel}
		</a>
		<a class="button" href="https://uk.linkedin.com/in/joelparkerhenderson" target="_blank" rel="noopener">
			Message on LinkedIn
		</a>
	</div>
</div>
