<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';

	const title = 'Digital Health Guide — Joel Parker Henderson';
	const description =
		'The Digital Health Guide is an open-source handbook I maintain for leaders delivering digital services in health and social care — foundations through measurement, in 50+ chapters.';

	const REPO_HREF = 'https://github.com/digital-health-guide/digital-health-guide';
</script>

<Seo {title} {description} path="/digital-health-guide/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs
				trail={[{ label: 'Home', href: '/' }, { label: 'Health', href: '/health/' }, { label: 'Digital Health Guide' }]}
			/>
			<h1>Digital Health Guide</h1>
			<p>
				Digital Health Guide is an open-source handbook for leaders and professionals delivering
				digital services in health and social care — the operating playbook I wished existed
				earlier in my own work leading software engineering inside a national health service
				organization. It consolidates evidence-based practice into one consistent reference
				rather than leaving it scattered across policy documents, vendor whitepapers, and
				institutional memory.
			</p>
			<p>
				It's organized into ten sections spanning 50+ chapters: foundations (clinical safety,
				regulation, data ethics, inclusion), work management, the delivery lifecycle, technology
				and data (architecture, interoperability, patient records), delivery modes, financial and
				governance practice, people and teams, change and innovation (including AI governance),
				partnerships, and measurement and leadership. Every chapter follows the same structure —
				a thesis, best practices, discussion questions, sector-specific lenses from startup to
				government, a maturity model, and a checklist — so it reads consistently cover to cover
				or as a lookup reference.
			</p>
			<p>
				It's written primarily with the NHS in mind, since that's the system I know best, but the
				practices generalize to any health or social care organization building digital services.
				It's free and open source, and pairs with the health-economics and interoperability work
				under <a href="/health/">Health</a>.
			</p>
			<a class="button" href={REPO_HREF}>See the Digital Health Guide on GitHub →</a>
		</ContainerWithFixedWidth>
	</section>
</main>
