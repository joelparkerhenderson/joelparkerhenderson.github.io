<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';

	const title = 'GitAlias — Joel Parker Henderson';
	const description =
		'GitAlias is a large, widely-used collection of Git command aliases that I maintain — 200+ documented shortcuts for everyday and advanced Git workflows.';

	const REPO_HREF = 'https://github.com/GitAlias/gitalias';
</script>

<Seo {title} {description} path="/gitalias/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs
				trail={[{ label: 'Home', href: '/' }, { label: 'Engineering', href: '/engineering/' }, { label: 'GitAlias' }]}
			/>
			<h1>GitAlias</h1>
			<p>
				GitAlias is a collection of Git command aliases — short, memorable shortcuts for the Git
				commands you type most often. I've maintained it for years; it's grown into one of the
				more widely-used projects I publish, with well over 300 commits of history and use across
				bash, zsh, and other shells.
			</p>
			<p>
				It's organized into a few families: short aliases that compress everyday operations
				(<code>git s</code> for status, <code>git a</code> for add), friendly aliases for less
				common but genuinely useful operations (<code>git chart</code> for an activity
				visualization, <code>git churn</code> for tracking which files change most), structured
				workflow aliases for topic-branching and publish/reset patterns, and tooling integrations
				like <code>gitk</code> and Graphviz. In total it documents 200+ commands, including some
				fairly advanced ones — merge analysis, orphaned-object detection, repository optimization.
			</p>
			<p>
				It's free to use: download <code>gitalias.txt</code> and include it in your own Git
				config. It's part of the same git-tooling family as the branch-naming and commit-message
				guides under <a href="/engineering/">Engineering</a>, and it's licensed
				GPL-2.0-or-later.
			</p>
			<a class="button" href={REPO_HREF}>See GitAlias on GitHub →</a>
		</ContainerWithFixedWidth>
	</section>
</main>
