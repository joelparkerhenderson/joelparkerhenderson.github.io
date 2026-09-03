<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';

	const title = 'Résumé — Joel Parker Henderson';
	const description =
		'Résumé for Joel Parker Henderson, Software Engineer: skill highlights, recent experience, project highlights, and guide publications.';

	const skillGroups = [
		{
			label: 'Role skills',
			items: [
				{ label: 'Leader', text: 'Principal technologist for strategic software initiatives, products, and programs.' },
				{ label: 'Programmer', text: 'Hands-on coder for agile product-led high-quality continuous delivery.' },
				{ label: 'Creator', text: '5 VC startups, 3 digital transformations, 6 guidebooks, 1MM OSS downloads.' }
			]
		},
		{
			label: 'Technology skills',
			items: [
				{ label: 'Full-stack', text: 'Ruby on Rails, Elixir Phoenix, Rust Axum, Node Express, Python Django.' },
				{ label: 'Back-end', text: 'Unix, SQL, AWS, APIs, TDD, CI/CD, QA, DevOps, IaC, Terraform, Ansible.' },
				{ label: 'Front-end', text: 'HTML, CSS, BEM, JavaScript, iOS, Android, Adobe CC, UI/UX tools, UML.' }
			]
		},
		{
			label: 'Management skills',
			items: [
				{ label: 'Product management', text: 'PLG with SDLC built on ways of working with KPIs, ADRs, SQAs.' },
				{ label: 'Project management', text: 'EPPM with agile, Kanban, Lean, Scrum, Kaizen, PRINCE2, CAST.' },
				{ label: 'Stakeholder management', text: 'RACI involving users, partners, contractors, suppliers, VARs.' }
			]
		}
	];

	const experience = [
		{
			role: 'Head of Software Engineering',
			org: 'NHS Wales, Digital Health and Care Wales (DHCW)',
			dates: '2025–Present',
			bullets: [
				'Leading technology capabilities growth for agile, analytics, automation, AI.',
				'Advising chief executives on business-technical practices, tools, vendors.',
				'Founding public open source free git repo for architecture decision records.'
			]
		},
		{
			role: 'Principal',
			org: 'SixArm Software Consulting',
			dates: '2006–Present',
			bullets: [
				'Developed $1MM+ business tools, 50MM downloads, 100MM MAUs, for CEOs & CTOs.',
				'Hired and headed software engineering teams from 0 through launch and scale up.',
				'Hands-on coded LOB web apps, consumer mobile apps, ETL data flows, product spikes.'
			]
		},
		{
			role: 'CTO',
			org: 'Commissary Club (Y Combinator VC)',
			dates: '2019–2021',
			bullets: [
				'Launched MVP for flagship social network from 0 to 100 MAUs, leading all tech aspects.',
				'Led and coded the flagship platform, website, mobile app, APIs, hosting, from 0 to MVP.',
				'Directed 10 employees and consultants: lead developer, lead designer, lead analyst.'
			]
		},
		{
			role: 'Technology Consultant to CTO',
			org: 'Omniex Holdings (Jump Capital VC)',
			dates: '2018',
			bullets: [
				'Led front-end team of 6, developing fintech blockchain product with React & JavaScript.',
				'Researched and coded next-gen product with Svelte, TypeScript, Node, from 0 to HiFi.',
				'Advised CTO & CEO on tech best practices, PPM/WBS, hiring/recruiting of 3 leads.'
			]
		},
		{
			role: 'Principal Consultant',
			org: 'ThoughtWorks',
			dates: '2016–2017',
			bullets: [
				'Grew most-advanced, most-profitable team from 0 to 20 FTEs, using iOS and blockchain.',
				'Coached $1MM+ engagement clients in Fortune 50 fintech, manufacturing, B2C goods.',
				'Grew practices in agile, lean, IaC, devops, pops, EPPM, from 0 to 1000 GitHub stars.'
			]
		},
		{
			role: 'Lead Software Consultant',
			org: 'Boxbee (500 Startups VC)',
			dates: '2013–2015',
			bullets: [
				'Led 5 FTE product team from pre-pitch mocks to winning Launch.com Best New Startup.',
				'Led Rails and JavaScript practices, and coded iOS Swift application from 0 to MVP.',
				'Coached CEO and PM on MVP roadmap, engineering, architecture, and fundraising.'
			]
		}
	];

	const projectGroups = [
		{
			label: 'For technology leaders',
			items: [
				{
					title: 'Architecture Decision Record: tactics to evaluate technology',
					href: 'https://github.com/joelparkerhenderson/architecture-decision-record',
					bullets: [
						'Learn how leaders and experts make smarter choices about the best tools for the job.',
						'Compare industry-leading decision record templates, their strengths, and their steps.'
					]
				},
				{
					title: 'Queueing Theory: an introduction for software development',
					href: 'https://github.com/joelparkerhenderson/queueing-theory',
					bullets: [
						'Learn about queues for services, workflows, streams, and distributed programming.',
						'Understand arrival rates, utilization ratios, error percentages, lead time, and more.'
					]
				}
			]
		},
		{
			label: 'For software teams',
			items: [
				{
					title: 'Git Alias: command line accelerators for version control',
					href: 'https://github.com/gitalias/gitalias',
					bullets: [
						'Hundreds of git alias configuration options to make git easier, faster, and smarter.',
						'Run commands for branches, workflows, topics, charts, churn, and optimizations.'
					]
				},
				{
					title: 'Unicode Separated Values: data exchange standard',
					href: 'https://github.com/sixarm/usv',
					bullets: [
						'Upgrade data files and streams beyond typical comma/tab separated values (CSV/TSV).',
						'Handle data that contains commas, semicolons, quotes, tabs, newlines, and more.'
					]
				}
			]
		},
		{
			label: 'For programmers',
			items: [
				{
					title: 'Assertables: Rust crate of assertion macros for testing',
					href: 'https://crates.io/crates/assertables',
					bullets: [
						'Upgrade your Rust test driven development (TDD) with smarter semantic macros.',
						'200K+ downloads, and can test values, groups, paths, streams, functions, and more.'
					]
				},
				{
					title: 'Unaccent: Ruby gem for string processing',
					href: 'https://rubygems.org/gems/sixarm_ruby_unaccent',
					bullets: [
						'Use Ruby and Unicode to process string accented characters to unaccented equivalents.',
						'50M+ downloads, plus full compatibility with every Ruby release for 15+ years.'
					]
				}
			]
		},
		{
			label: 'For end users',
			items: [
				{
					title: 'Bold Contacts: mobile app for users with vision/cognition/motor disabilities',
					href: 'https://boldcontacts.org',
					bullets: [
						"Improve accessibility for patients experiencing Alzheimer's, Parkinson's, MS, and ALS.",
						'Target users are patients, carers, care centers, hospitals, and disability researchers.'
					]
				},
				{
					title: 'Num Command: number utilities for mathematics on POSIX',
					href: 'https://github.com/numcommand/num',
					bullets: [
						'Calculate statistics and analytics on the command line entirely with standard POSIX.',
						'Do math on aggregations, deviations, moments, quartiles, kurtosis, skewness, and more.'
					]
				}
			]
		}
	];

	const guides = [
		{
			title: 'Agile Change Guide',
			href: 'https://gumroad.com/l/agile-change-guide',
			text: 'Covers agile ways of working for software engineering with customer collaborations. Examples are the agile manifesto, assessment, design, metrics, systems thinking, ceremonies such as sprints and retrospectives, voice of customer, three amigos, and practices including Lean, Six Sigma, Spiral, LESS, SAFe, Scrum, Kanban.'
		},
		{
			title: 'Startup Business Guide',
			href: 'https://gumroad.com/l/startup-business-guide',
			text: 'Covers concepts that help with entrepreneurship, especially for new software companies. Examples are pitch decks, market/customer/product discovery, product-market fit (PMF), minimum viable product (MVP), technology sectors, company roles and responsibilities, sales and marketing, venture capital (VC) investment, legal entities, and work contracts.'
		},
		{
			title: 'Innovation Partnership Guide',
			href: 'https://gumroad.com/l/innovation-partnership-guide',
			text: 'Covers innovation creation collaborations, especially for inter-organizational programs. Examples are joint venture approaches, culture, strategic alignment, long waves, Partner Readiness Level (PRL), Partner Relationship Management (PRM), technology transfer agreements, spinoffs and spinouts, AI, and business analysis tools.'
		},
		{
			title: 'Business Lingo Guide',
			href: 'https://gumroad.com/l/business-lingo-guide',
			text: "Covers popular work terminology to foster cross-cultural communication thus teamwork. Examples are laws \"Conway's Law\" and \"Brooks' Law\", aphorisms \"The Pareto Principle\" and \"Chesterton's fence\", idioms \"Boil the ocean\" and \"Unknown unknowns\", and quotations \"Execution eats strategy for lunch\" and \"Perfect is the enemy of good\"."
		},
		{
			title: 'Project Management Guide',
			href: 'https://gumroad.com/l/project-management-guide',
			text: 'Covers concepts that help with leading projects, programs, and portfolios. Examples are Project Management Life Cycle (PMLC), SMART criteria, change management, Objectives and Key Results (OKRs), Key Performance Indicators (KPIs), Work Breakdown Structure (WBS), digital transformation, agile, lean, and kaizen.'
		},
		{
			title: 'UI/UX Design Guide',
			href: 'https://gumroad.com/l/ui-ux-design-guide',
			text: 'Covers user interface (UI) design and user experience (UX) development. Examples are User-Centered Design (UCD), Information Architecture (IA), design management, task analysis, ideation, mockups, use cases, user stories, model diagrams, affordances, accessibility, internationalization/localization, UI/UX testing, and AI for UI/UX.'
		},
		{
			title: 'Software Programming Guide',
			href: 'https://gumroad.com/l/software-programming-guide',
			text: 'Covers industry practices for software programming, development, and deployment. Examples are programming paradigms, algorithms and data structures, design patterns, database implementations, distributed ledgers, asynchronicity, concurrency, parallelism, monolith and microservice architectures, testing, version control, devops, and security.'
		}
	];
</script>

<Seo {title} {description} path="/resume/" />

<main id="content" class="resume">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<p class="no-print"><a href="/hire/">← Hire me</a></p>
			<h1>Résumé</h1>
			<p class="resume-byline">Joel Parker Henderson · Software Engineer</p>
			<p class="resume-contact">
				<a href="mailto:joel@joelparkerhenderson.com">joel@joelparkerhenderson.com</a>
				·
				<a href="https://linkr.ee/joelparkerhenderson">linkr.ee/joelparkerhenderson</a>
			</p>
			<button type="button" class="button no-print" onclick={() => window.print()}>Print / save as PDF</button>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<h2>Skill highlights</h2>
		<div class="resume-skill-grid">
			{#each skillGroups as group (group.label)}
				<div class="card">
					<h3>{group.label}</h3>
					<ul class="link-list">
						{#each group.items as item (item.label)}
							<li><strong>{item.label}:</strong> {item.text}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<h2>Recent experience highlights</h2>
		{#each experience as job (job.role + job.org)}
			<div class="card">
				<h3>{job.role}</h3>
				<p class="resume-job-meta">{job.org} · {job.dates}</p>
				<ul class="link-list">
					{#each job.bullets as bullet (bullet)}
						<li>{bullet}</li>
					{/each}
				</ul>
			</div>
		{/each}

		<h2>Project highlights</h2>
		{#each projectGroups as group (group.label)}
			<div class="card">
				<h3>{group.label}</h3>
				{#each group.items as item (item.title)}
					<div class="resume-project">
						<p class="resume-project-title"><a href={item.href}>{item.title}</a></p>
						<ul class="link-list">
							{#each item.bullets as bullet (bullet)}
								<li>{bullet}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		{/each}

		<h2>Guide publications</h2>
		<div class="card">
			{#each guides as guide (guide.title)}
				<div class="resume-project">
					<p class="resume-project-title"><a href={guide.href}>{guide.title}</a></p>
					<p>{guide.text}</p>
				</div>
			{/each}
		</div>
	</ContainerWithFixedWidth>
</main>
