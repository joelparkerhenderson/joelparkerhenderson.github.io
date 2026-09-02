<script lang="ts">
	// SharePicker component
	//
	// Site-specific composition: a <details>/<summary> disclosure (Lily ships
	// no menu/popover-trigger component, and this is the simplest accessible
	// native pattern) opening a Lily <SharePage> group. Copy-link and mailto
	// use Lily's ClipboardCopyButton/ActionLink; LinkedIn, Bluesky and Reddit
	// have stable share-intent URLs so they're plain ActionLinks. Mastodon is
	// federated with no single share endpoint, so the standard pattern is to
	// ask once for the person's home instance (native prompt, remembered in
	// localStorage) and open https://<instance>/share?text=... — documented
	// tradeoff, see the redo plan.
	import { ActionLink, ClipboardCopyButton, SharePage } from 'lily-design-system-svelte-headless';
	import { browser } from '$app/environment';
	import { page } from '$app/state';

	let { title = 'Joel Parker Henderson' }: { title?: string } = $props();

	const MASTODON_INSTANCE_KEY = 'jph-mastodon-instance';

	let open = $state(false);
	let copied = $state(false);

	let shareUrl = $derived(browser ? page.url.href : '');
	let shareText = $derived(`${title} ${shareUrl}`);

	function encoded(value: string) {
		return encodeURIComponent(value);
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
	}

	function handleCopied() {
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<details class="share-picker" bind:open>
	<summary class="icon-button" aria-label="Share this page">Share</summary>
	<div class="share-picker-panel">
		<SharePage label="Share this page">
			<ClipboardCopyButton
				class="button"
				text={shareUrl}
				label="Copy link to this page"
				onsuccess={handleCopied}
				data-copied={copied}
			>
				{copied ? 'Copied!' : 'Copy link'}
			</ClipboardCopyButton>
			<ActionLink href={`mailto:?subject=${encoded(title)}&body=${encoded(shareUrl)}`}>
				Share by email
			</ActionLink>
			<ActionLink
				href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded(shareUrl)}`}
				target="_blank"
				rel="noopener"
			>
				Share on LinkedIn
			</ActionLink>
			<ActionLink
				href={`https://bsky.app/intent/compose?text=${encoded(shareText)}`}
				target="_blank"
				rel="noopener"
			>
				Share on Bluesky
			</ActionLink>
			<button type="button" class="button" onclick={shareToMastodon}>Share on Mastodon</button>
			<ActionLink
				href={`https://www.reddit.com/submit?url=${encoded(shareUrl)}&title=${encoded(title)}`}
				target="_blank"
				rel="noopener"
			>
				Share on Reddit
			</ActionLink>
		</SharePage>
	</div>
</details>
