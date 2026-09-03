<script lang="ts">
	import { ContainerWithFixedWidth } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';

	const title = 'Assertables — Joel Parker Henderson';
	const description =
		'Assertables is a Rust crate of assert macros to improve compile-time tests and run-time reliability, published on crates.io.';
</script>

<Seo {title} {description} path="/assertables/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<p><a href="/technology/">← Technology</a></p>
			<h1>Assertables</h1>
			<p>
				Assertables is a Rust crate of assert macros that help you develop, test, and debug —
				built to improve compile-time tests and run-time reliability, and published on
				<a href="https://crates.io/crates/assertables">crates.io</a>.
			</p>
		</ContainerWithFixedWidth>
	</section>

	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="card">
			<h2>What it covers</h2>
			<ul class="link-list">
				<li>Values — <code>assert_lt</code>, <code>assert_gt</code>, <code>assert_in</code>, and more</li>
				<li>Groups — <code>assert_all</code>, <code>assert_any</code>, <code>assert_iter</code></li>
				<li>Wrappers — <code>assert_ok</code>, <code>assert_some</code>, <code>assert_ready</code></li>
				<li>Matching — <code>assert_matches</code>, <code>assert_is_match</code></li>
				<li>Approximations — <code>assert_approx</code>, <code>assert_abs_diff</code></li>
				<li>Programs — <code>assert_command</code>, <code>assert_status</code>, and more</li>
			</ul>
		</div>

		<h2>Links</h2>
		<ul class="link-list">
			<li><a href="https://docs.rs/assertables/">Documentation on docs.rs</a></li>
			<li><a href="https://crates.io/crates/assertables">Package on crates.io</a></li>
			<li><a href="https://github.com/assertables/assertables-rust-crate">Source on GitHub</a></li>
		</ul>
	</ContainerWithFixedWidth>
</main>
