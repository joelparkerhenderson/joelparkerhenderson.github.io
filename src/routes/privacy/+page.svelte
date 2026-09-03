<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';

	const title = 'Privacy — Joel Parker Henderson';
	const description = 'This site collects no analytics and sets no tracking cookies. Here is exactly what it stores and why.';
</script>

<Seo {title} {description} path="/privacy/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Privacy</h1>
			<p>
				This is a static site — there's no server-side code, no account system, and no
				analytics or advertising trackers of any kind. Here's exactly what runs in your
				browser and why.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="card">
			<h2>What's stored in your browser</h2>
			<ul class="link-list">
				<li>
					<strong>Theme, text size, and language preference</strong> — saved to
					<code>localStorage</code> on this device only, so your choice persists between visits.
					Nothing is sent anywhere; it never leaves your browser.
				</li>
			</ul>
		</div>

		<div class="card">
			<h2>What's not on this site</h2>
			<ul class="link-list">
				<li>No cookies</li>
				<li>No analytics or usage tracking</li>
				<li>No advertising or third-party trackers</li>
				<li>No forms that collect personal data</li>
			</ul>
		</div>

		<div class="card">
			<h2>Links to other sites</h2>
			<p>
				Pages here link out to GitHub, LinkedIn, and other third-party sites — those sites
				have their own privacy practices, which this statement doesn't cover.
			</p>
		</div>

		<div class="card">
			<h2>Contact</h2>
			<p>
				Questions about this site's data practices:
				<a href="mailto:joel@joelparkerhenderson.com">joel@joelparkerhenderson.com</a>.
			</p>
		</div>
	</ContainerWithFixedWidth>
</main>
