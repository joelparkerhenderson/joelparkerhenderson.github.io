<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';

	const title = 'Book me as a speaker — Joel Parker Henderson';
	const description =
		'Book Joel Parker Henderson for a keynote, panel, or workshop on leadership, engineering governance, or healthcare interoperability.';

	const topics = [
		{
			title: 'Leadership & decision-making frameworks',
			blurb:
				'How teams set direction, track goals honestly, and make decisions that survive the people who made them moving on — Decision Records, ADRs, SPADE, OODA.'
		},
		{
			title: 'Engineering governance in practice',
			blurb:
				'Architecture Decision Records, delivery health assessments, and maturity models as working tools, not audit paperwork.'
		},
		{
			title: 'Healthcare interoperability, in Rust',
			blurb:
				'Building HL7, FHIR, SNOMED CT, and openEHR implementations in the open, and what that teaches about standards work generally.'
		},
		{
			title: 'Sustaining an open-source practice',
			blurb: 'What it takes to keep a wide catalog of frameworks and libraries genuinely usable, not just published once and abandoned.'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<h1>Book me as a speaker</h1>
			<p>
				I speak on leadership, engineering governance, and healthcare interoperability, drawing
				on 20+ years building and consulting across industry and government — currently leading
				software engineering at <a href="https://dhcw.nhs.wales/">Digital Health and Care Wales</a>
				(NHS Wales). Talks are practical, not theoretical: the frameworks and open-source code
				referenced come from
				<a href="/leadership/">real, published work</a>, not slideware. For the background, see
				my <a href="/resume/">résumé</a>.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<h2>Topics</h2>
		<div class="promo-tile-grid">
			{#each topics as topic (topic.title)}
				<div class="card">
					<h3>{topic.title}</h3>
					<p>{topic.blurb}</p>
				</div>
			{/each}
		</div>

		<h2>Formats</h2>
		<p>Keynotes, conference talks, panels, workshops, and fireside chats — in person or remote.</p>

		<h2>Get in touch</h2>
		<p>Tell me about your event, audience, and preferred format, and I'll follow up from there.</p>
		<div class="contact-actions">
			<a
				class="button"
				href="mailto:joel@joelparkerhenderson.com?subject=Speaking%20inquiry"
			>
				Email a speaking inquiry
			</a>
			<a class="button" href="https://uk.linkedin.com/in/joelparkerhenderson" target="_blank" rel="noopener">
				Message on LinkedIn
			</a>
		</div>
	</ContainerWithFixedWidth>
</main>
