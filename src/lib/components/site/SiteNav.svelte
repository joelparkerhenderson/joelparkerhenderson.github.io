<script lang="ts">
	// SiteNav — global page navigation. The site grew from one page to
	// seven in this pass; without this there is no way to reach any page
	// other than home except by using the browser back button.
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/leadership/', label: 'Leadership' },
		{ href: '/technology/', label: 'Technology' },
		{ href: '/consulting/', label: 'Consulting' },
		{ href: '/resume/', label: 'Résumé' },
		{ href: '/speaking/', label: 'Speaking' },
		{ href: '/hire/', label: 'Hire me' },
		{ href: '/open-source/', label: 'Open source' }
	];
</script>

<nav class="site-nav" aria-label="Site">
	<ul>
		{#each links as link (link.href)}
			<li>
				<a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
