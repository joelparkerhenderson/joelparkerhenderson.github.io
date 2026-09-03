<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import ContactCta from '$lib/components/site/ContactCta.svelte';

	const title = 'Contact — Joel Parker Henderson';
	const description =
		'Get in touch by email or LinkedIn — for a speaking inquiry, a consulting engagement, or a question about the open-source work published here.';
</script>

<Seo {title} {description} path="/contact/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
			<h1>Contact</h1>
			<p>
				Email or LinkedIn both reach me directly — there's no form, no ticketing system, and no
				gatekeeping. If your message is really about
				<a href="/speaking/">booking a talk</a> or
				<a href="/hire/">hiring me for an engagement</a>, use the subject-prefilled buttons on
				those pages instead; this is the general-purpose version.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="card">
			<h2>What to include</h2>
			<ul class="link-list">
				<li>Who you are and what organization you're with, if any</li>
				<li>What you're trying to solve or achieve</li>
				<li>Any timeline or deadline that matters</li>
			</ul>
		</div>

		<div class="card">
			<h2>Response time</h2>
			<p>I read everything and reply personally — usually within a few business days.</p>
		</div>

		<h2>Get in touch</h2>
		<ContactCta subject="General inquiry" lead="Tell me what you're trying to do, and I'll follow up from there." />
	</ContainerWithFixedWidth>
</main>
