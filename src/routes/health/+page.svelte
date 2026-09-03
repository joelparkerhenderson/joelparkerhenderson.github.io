<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';

	const title = 'Health — Joel Parker Henderson';
	const description =
		'Health economics, clinical data, and standards work: software engineering built alongside leading software engineering at Digital Health and Care Wales (NHS Wales).';

	const groups = [
		{
			label: 'Health economics',
			items: [
				{ title: 'Health Economics Guide — a practical handbook for health/care leaders', href: 'https://github.com/health-economics-guide/health-economics-guide' },
				{ title: 'Health Economics Metrics — QALY, DALY, ICER and related metrics, for engineers', href: 'https://github.com/health-economics-metrics/health-economics-metrics' },
				{ title: 'Health economics Rust crate — 76 modules of health economics calculations', href: 'https://github.com/joelparkerhenderson/heath-economics-rust-crate' }
			]
		},
		{
			label: 'Clinical data & records',
			items: [
				{ title: 'Medical Forms — a monorepo of structured clinical assessment and intake forms (FHIR R5, generated front and back ends)', href: 'https://github.com/FormExamples/form-examples' },
				{ title: 'Master Patient Index (Rust crate) — probabilistic and deterministic patient matching', href: 'https://github.com/master-patient-index/master-patient-index-rust-crate' },
				{ title: 'Patient Administration System — an API + frontend workspace for patient administration', href: 'https://github.com/patient-administration-system/patient-administration-system' },
				{ title: 'Cardiac ECG decision tree — a structured 12-lead ECG interpretation guide', href: 'https://github.com/joelparkerhenderson/cardiac-ecg-decision-tree' },
				{ title: 'ECG Toolkit (Rust crate) — reading, writing, and converting ECG medical data files', href: 'https://github.com/SixArm/ecgtoolkit-rust-crate' },
				{ title: 'GE Healthcare MUSE parser (Rust crate) — parsing and validating MUSE XML cardiology files', href: 'https://github.com/SixArm/ge-healthcare-muse-rust-crate' },
				{ title: 'MIMIC-IV clinical database demo (Rust crate) — tooling for the public MIMIC-IV ICU/ED dataset', href: 'https://github.com/joelparkerhenderson/mimic-iv-clinical-database-demo-rust-crate' }
			]
		},
		{
			label: 'Standards & guides',
			items: [
				{ title: 'WHO-FIC Rust — ICD-10, ICD-11, ICF, ICHI, and a live WHO ICD-API client', href: 'https://github.com/who-fic-rust/who-fic-rust' },
				{ title: 'Digital Health Guide — best practices for delivering digital services in health and care', href: 'https://github.com/digital-health-guide/digital-health-guide' },
				{ title: 'NHS Wales first aid kit — adapted from the NHS 111 Wales "Live Well" guide', href: 'https://github.com/GIG-Cymru-NHS-Wales/first-aid-kit' }
			]
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
			<p><a href="/technology/">← Technology</a></p>
			<h1>Health</h1>
			<p>
				Health economics and clinical data work, built alongside leading software engineering
				at Digital Health and Care Wales (NHS Wales): calculating the numbers health systems
				plan around, matching and administering patient records safely, and turning clinical
				standards into working software. The HL7, FHIR, SNOMED CT, and openEHR implementations
				live under <a href="/technology/">Technology</a> — this page covers the rest of the
				health-domain work.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		{#each groups as group (group.label)}
			<div class="card">
				<h2>{group.label}</h2>
				<ul class="link-list">
					{#each group.items as item (item.href)}
						<li><a href={item.href}>{item.title}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
	</ContainerWithFixedWidth>
</main>
