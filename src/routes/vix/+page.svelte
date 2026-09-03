<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';

	const title = 'Vix IDE — Joel Parker Henderson';
	const description =
		'Vix IDE is a high-speed, high-security terminal text editor and integrated development environment — file explorer, keymaps, themes, and a command palette.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<p><a href="/technology/">← Technology</a></p>
			<h1>Vix IDE</h1>
			<p>
				Vix is a high-speed, high-security terminal text editor with a full integrated
				development environment built in — a file explorer, keymaps, tools, locales, themes,
				and a great deal more, all running in the terminal.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="card">
			<h2>A few of the features</h2>
			<ul class="link-list">
				<li>Full menu bar — File, Edit, View, Go, Run, AI, DB, Git, Org, Tools, Help</li>
				<li>Tabs, undo/redo, tree-sitter syntax highlighting, a code-overview minimap, and sticky scroll</li>
				<li>Command palette (<code>Ctrl+P</code>) with five modes: file finder, commands, buffers, go-to-line, go-to-symbol</li>
				<li>Find & replace with regex, smart-case, and capture groups</li>
				<li>A file explorer with copy/cut/paste, multi-select, and preview tabs</li>
				<li>Persistent, branch-preserving undo history saved per file</li>
				<li>Image viewing directly in the terminal on graphics-capable terminals</li>
				<li>Mouse support throughout — click to place the cursor, drag to select, click tabs and menus</li>
			</ul>
		</div>

		<h2>Links</h2>
		<ul class="link-list">
			<li><a href="https://github.com/vixide/vix">Source code</a></li>
			<li><a href="https://github.com/vixide">GitHub organization</a></li>
		</ul>
	</ContainerWithFixedWidth>
</main>
