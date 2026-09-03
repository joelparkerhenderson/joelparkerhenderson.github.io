<script lang="ts">
	// SharePicker component
	//
	// Built on Lily's own "picker" convention: every theme file ships CSS
	// for .share-picker / .share-picker-button / .share-picker-icon /
	// .share-picker-list / .share-picker-list-item / .share-picker-target /
	// .share-picker-copy / .share-picker-status (see any theme's "The four
	// *-picker helpers" comment) — a button that toggles a [hidden] list,
	// not a native <details>, so every Lily theme styles it automatically.
	// LinkedIn, Bluesky, Mastodon and Reddit have stable share-intent URLs
	// so they're all Lily ActionLinks re-hooked to .share-picker-target.
	// Mastodon is federated with no single instance to post to directly,
	// so this goes through mastodonshare.com, which asks the visitor for
	// their home instance and redirects there.
	import { ActionLink, ClipboardCopyButton } from 'lily-design-system-svelte-headless';
	import { browser } from '$app/environment';
	import { page } from '$app/state';

	// U+27A4 BLACK RIGHTWARDS ARROWHEAD — Lily's share-picker glyph. Kept as
	// an escaped constant, not a bare literal in markup: a bare glyph is
	// near-invisible in an editor and easy to lose in an edit.
	const BLACK_RIGHTWARDS_ARROWHEAD = '\u27A4';

	let { title = 'Joel Parker Henderson' }: { title?: string } = $props();

	let open = $state(false);
	let copied = $state(false);
	let root: HTMLDivElement | undefined = $state();

	let shareUrl = $derived(browser ? page.url.href : '');
	let shareText = $derived(`${title} ${shareUrl}`);

	function encoded(value: string) {
		return encodeURIComponent(value);
	}

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}

	function handleWindowClick(event: MouseEvent) {
		if (open && root && !root.contains(event.target as Node)) {
			close();
		}
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (open && event.key === 'Escape') {
			close();
		}
	}

	function handleCopied() {
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<div class="share-picker" bind:this={root}>
	<button
		type="button"
		class="share-picker-button"
		aria-label="Share Picker"
		aria-expanded={open}
		aria-controls="share-picker-list"
		onclick={toggle}
	>
		<span class="share-picker-icon" aria-hidden="true">{BLACK_RIGHTWARDS_ARROWHEAD}</span>
	</button>
	<ul id="share-picker-list" class="share-picker-list" hidden={!open}>
		<li class="share-picker-list-item">
			<ClipboardCopyButton
				class="share-picker-copy"
				text={shareUrl}
				label="Copy link to this page"
				onsuccess={handleCopied}
			>
				{copied ? 'Copied!' : 'Copy link'}
			</ClipboardCopyButton>
		</li>
		<li class="share-picker-list-item">
			<ActionLink class="share-picker-target" href={`mailto:?subject=${encoded(title)}&body=${encoded(shareUrl)}`}>
				Share on email
			</ActionLink>
		</li>
		<li class="share-picker-list-item">
			<ActionLink
				class="share-picker-target"
				href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded(shareUrl)}`}
				target="_blank"
				rel="noopener"
			>
				Share on LinkedIn
			</ActionLink>
		</li>
		<li class="share-picker-list-item">
			<ActionLink
				class="share-picker-target"
				href={`https://bsky.app/intent/compose?text=${encoded(shareText)}`}
				target="_blank"
				rel="noopener"
			>
				Share on Bluesky
			</ActionLink>
		</li>
		<li class="share-picker-list-item">
			<ActionLink
				class="share-picker-target"
				href={`https://mastodonshare.com/?text=${encoded(title)}&url=${encoded(shareUrl)}`}
				target="_blank"
				rel="noopener"
			>
				Share on Mastodon
			</ActionLink>
		</li>
		<li class="share-picker-list-item">
			<ActionLink
				class="share-picker-target"
				href={`https://www.reddit.com/submit?url=${encoded(shareUrl)}&title=${encoded(title)}`}
				target="_blank"
				rel="noopener"
			>
				Share on Reddit
			</ActionLink>
		</li>
	</ul>
	<!-- Never hidden — a live region needs to stay in the accessibility tree. -->
	<p class="share-picker-status" aria-live="polite">{copied ? 'Link copied to clipboard' : ''}</p>
</div>
