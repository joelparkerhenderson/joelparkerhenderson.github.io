<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';

	const title = 'Engineering — Joel Parker Henderson';
	const description =
		'Software development practice: decision records, testing, git tooling, CLI utilities, and engineering governance guides.';

	const groups = [
		{
			label: 'Decision records & governance',
			items: [
				{ title: 'Architecture Decision Record — guide, templates, and tutorials for ADRs', href: 'https://github.com/joelparkerhenderson/architecture-decision-record' },
				{ title: 'Decision Records — the practice of initiating, debating, and archiving choices', href: 'https://github.com/decision-records/decision-records' },
				{ title: 'System quality attributes — 100+ documented SQAs, alphabetically', href: 'https://github.com/joelparkerhenderson/system-quality-attributes' },
				{ title: 'Monorepo vs. polyrepo — tradeoffs, tooling, and scaling problems', href: 'https://github.com/joelparkerhenderson/monorepo-vs-polyrepo' }
			]
		},
		{
			label: 'Guides & books',
			items: [
				{ title: 'Software Engineering Guide — good practices across ways of working, architecture, security, delivery, and operations', href: 'https://github.com/software-engineering-guide/software-engineering-guide' },
				{ title: 'Software Engineering Metrics — Flow Framework, SPACE, queueing theory, and DORA', href: 'https://github.com/software-engineering-metrics/software-engineering-metrics' },
				{ title: 'Functional specifications tutorial — why and how to write one', href: 'https://github.com/joelparkerhenderson/functional-specifications-tutorial' }
			]
		},
		{
			label: 'Testing',
			items: [
				{ title: 'Testing examples — Playwright and Selenium browser automation across TypeScript, JavaScript, Python, and Rust', href: 'https://github.com/testingexamples/demo-playwright-typescript' },
				{ title: 'Assertables — a Rust crate of assert macros for testing (see the dedicated page)', href: '/assertables/' },
				{ title: 'Testing — my work with test automation, and the Test Automation Guide (see the dedicated page)', href: '/testing/' }
			]
		},
		{
			label: 'Git tooling & workflow',
			items: [
				{ title: 'gitalias — a large collection of git alias settings', href: 'https://github.com/GitAlias/gitalias' },
				{ title: 'git-tools — command-line scripts for everyday git tasks', href: 'https://github.com/SixArm/git-tools' },
				{ title: 'Git branch name — naming conventions and ideas', href: 'https://github.com/joelparkerhenderson/git-branch-name' },
				{ title: 'Git commit message — guidelines for writing great commit messages', href: 'https://github.com/joelparkerhenderson/git-commit-message' },
				{ title: 'Git workflow help — branching, publishing, and revising practices', href: 'https://github.com/joelparkerhenderson/git-workflow-help' }
			]
		},
		{
			label: 'CLI tools',
			items: [
				{ title: 'num — a command-line tool for math and statistics data processing', href: 'https://github.com/numcommand/num' },
				{ title: 'update — one CLI that runs update scripts across dozens of package managers', href: 'https://github.com/UpdateCommand/update' },
				{ title: 'Unix shell script tactics — a POSIX shell scripting style guide', href: 'https://github.com/SixArm/unix-shell-script-tactics' }
			]
		}
	];
</script>

<Seo {title} {description} path="/engineering/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<p><a href="/technology/">← Technology</a></p>
			<h1>Engineering</h1>
			<p>
				The practice layer beneath the software: how decisions get recorded, how tests get
				written, how git gets used well, and the small tools that remove friction from a
				working day. Most of this grew out of real team needs — a git alias someone kept
				retyping, a decision nobody wrote down until it was too late to remember why.
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
