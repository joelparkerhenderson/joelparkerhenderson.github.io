<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';

	const title = 'Hire me to help you — Joel Parker Henderson';
	const description =
		'Advisory, fractional technical leadership, delivery health assessments, and workshop facilitation from Joel Parker Henderson — framework-based, not guesswork.';

	const engagements = [
		{
			title: 'Advisory retainer',
			blurb: 'Ongoing access for architecture, delivery, and leadership decisions as they come up — not a one-off engagement.'
		},
		{
			title: 'Fractional / interim technical leadership',
			blurb: 'Hands-on leadership for a defined period — filling a gap, standing up a practice, or steering a specific initiative.'
		},
		{
			title: 'Architecture & delivery health assessment',
			blurb: 'A structured review against real frameworks — maturity models, value stream mapping, agile and enterprise architecture assessments — with findings your team can act on.'
		},
		{
			title: 'Workshop facilitation',
			blurb: 'Hands-on sessions to stand up ADRs, OKRs, decision records, or an agile assessment inside your organization.'
		},
		{
			title: 'Healthcare interoperability advisory',
			blurb: 'Guidance on HL7, FHIR, SNOMED CT, and openEHR, informed by building working implementations of each in the open.'
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
			<h1>Hire me to help you</h1>
			<p>
				I help engineering organizations set direction, make decisions that hold up, and run
				delivery against real evidence rather than guesswork — using the same frameworks
				published under <a href="/leadership/">Leadership</a> and
				<a href="/consulting/">Consulting</a>. Engagements start with a conversation about the
				problem, not a fixed package; the ways of working below are starting points.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<h2>Ways to work together</h2>
		<div class="promo-tile-grid">
			{#each engagements as engagement (engagement.title)}
				<div class="card">
					<h3>{engagement.title}</h3>
					<p>{engagement.blurb}</p>
				</div>
			{/each}
		</div>

		<h2>How engagements are set up</h2>
		<p>
			Engagements are formalized with a straightforward
			<a href="https://github.com/sixarm/sixarm_company_consulting_agreement">consulting agreement</a>
			and, where needed, a
			<a href="https://github.com/sixarm/sixarm_company_confidentiality_agreement"
				>confidentiality agreement</a
			> — both published openly, so you can review the terms before we ever talk specifics.
		</p>

		<h2>Get in touch</h2>
		<p>
			Tell me about your organization and the problem you're trying to solve, and I'll follow up
			from there.
		</p>
		<div class="contact-actions">
			<a class="button" href="mailto:joel@joelparkerhenderson.com?subject=Consulting%20inquiry">
				Email a consulting inquiry
			</a>
			<a class="button" href="https://uk.linkedin.com/in/joelparkerhenderson" target="_blank" rel="noopener">
				Message on LinkedIn
			</a>
		</div>
	</ContainerWithFixedWidth>
</main>
