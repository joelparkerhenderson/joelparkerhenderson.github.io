<script lang="ts">
	import { ContainerWithFixedWidth, Avatar, AvatarImage } from 'lily-design-system-svelte-headless';
	import Seo from '$lib/components/site/Seo.svelte';
	import Breadcrumbs from '$lib/components/site/Breadcrumbs.svelte';
	import avatarPhoto from '$lib/assets/avatar.jpg';

	const title = 'About — Joel Parker Henderson';
	const description =
		'Software engineer and technology leader, working across industry and government. What I believe about engineering leadership, and how this site itself is built.';
</script>

<Seo {title} {description} path="/about/" />

<main id="content">
	<section class="page-hero">
		<ContainerWithFixedWidth maxWidth="72rem">
			<Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
			<div class="about-header">
				<Avatar alt="Joel Parker Henderson">
					<AvatarImage src={avatarPhoto} alt="" />
				</Avatar>
				<h1>About</h1>
			</div>
			<p>
				I'm a software engineer and technology leader with 20+ years of experience building
				and consulting across industry and government. I'm currently head of software
				engineering for a national health service organization, and my work spans commercial
				and public-sector engineering — the frameworks, templates, and open-source software I
				publish are used well beyond either.
			</p>
			<p>
				What I believe about engineering leadership: direction only helps if the team executing
				it is healthy, decisions only hold up if they're written down and revisited, and
				software worth writing once is worth writing where other people can use it, review it,
				and improve it. Those beliefs aren't abstract on this site — they're the reason
				<a href="/leadership/">Leadership</a>, <a href="/technology/">Technology</a>, and
				<a href="/consulting/">Consulting</a> exist as separate, linked bodies of work rather
				than one undifferentiated list.
			</p>
			<p>
				This site is itself an example of that practice: it's built entirely on the
				<a href="/lily/">Lily Design System</a>, a component library I publish myself, and every
				framework and template linked from here is free and open source. For the detailed
				work history, see my <a href="/resume/">résumé</a>.
			</p>
		</ContainerWithFixedWidth>
	</section>
</main>

<style>
	.about-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}
	.about-header :global(img) {
		width: 4rem;
		height: 4rem;
	}
	.about-header h1 {
		margin: 0;
	}
</style>
