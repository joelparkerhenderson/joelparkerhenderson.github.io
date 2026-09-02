<script lang="ts">
	// SharePicker component
	//
	// Built on Lily's own "picker" convention: every theme file ships CSS
	// for .share-picker / .share-picker-button / .share-picker-icon /
	// .share-picker-list / .share-picker-list-item / .share-picker-target /
	// .share-picker-copy / .share-picker-status (see any theme's "The four
	// *-picker helpers" comment) — a button that toggles a [hidden] list,
	// not a native <details>, so every Lily theme styles it automatically.
	// LinkedIn, Bluesky and Reddit have stable share-intent URLs so they're
	// Lily ActionLinks re-hooked to .share-picker-target. Mastodon is
	// federated with no single share endpoint, so the standard pattern is
	// to ask once for the person's home instance (native prompt, remembered
	// in localStorage) and open https://<instance>/share?text=...
	import { ActionLink, ClipboardCopyButton } from 'lily-design-system-svelte-headless';
	import { browser } from '$app/environment';
	import { page } from '$app/state';

	let { title = 'Joel Parker Henderson' }: { title?: string } = $props();

	const MASTODON_INSTANCE_KEY = 'jph-mastodon-instance';

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

	function shareToMastodon() {
		if (!browser) return;
		let instance = localStorage.getItem(MASTODON_INSTANCE_KEY);
		if (!instance) {
			const answer = window.prompt('Which Mastodon instance do you use? (e.g. mastodon.social)');
			if (!answer) return;
			instance = answer.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
			localStorage.setItem(MASTODON_INSTANCE_KEY, instance);
		}
		window.open(`https://${instance}/share?text=${encoded(shareText)}`, '_blank', 'noopener');
		close();
	}
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<div class="share-picker" bind:this={root}>
	<button
		type="button"
		class="share-picker-button"
		aria-label="Share this page"
		aria-haspopup="true"
		aria-expanded={open}
		onclick={toggle}
	>
		<span class="share-picker-icon" aria-hidden="true">➤</span>
	</button>
	<ul class="share-picker-list" hidden={!open}>
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
			<button type="button" class="share-picker-target" onclick={shareToMastodon}>Share on Mastodon</button>
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
