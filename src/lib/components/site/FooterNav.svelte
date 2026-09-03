<script lang="ts">
	// Footer sitemap — every route on the site, grouped, so the footer
	// works as a second, exhaustive nav rather than an afterthought.
	const columns = [
		{
			label: 'Explore',
			links: [
				{ href: '/leadership/', label: 'Leadership' },
				{ href: '/technology/', label: 'Technology' },
				{ href: '/consulting/', label: 'Consulting' }
			]
		},
		{
			label: 'Work with me',
			links: [
				{ href: '/speaking/', label: 'Book me as a speaker' },
				{ href: '/hire/', label: 'Hire me to help you' },
				{ href: '/open-source/', label: 'Share my open source' }
			]
		},
		{
			label: 'Projects',
			links: [
				{ href: '/health/', label: 'Health' },
				{ href: '/engineering/', label: 'Engineering' },
				{ href: '/teamwork/', label: 'Teamwork' },
				{ href: '/lily/', label: 'Lily Design System' },
				{ href: '/vix/', label: 'Vix IDE' },
				{ href: '/assertables/', label: 'Assertables' },
				{ href: '/guides/', label: 'Guides' }
			]
		},
		{
			label: 'About',
			links: [
				{ href: '/about/', label: 'About' },
				{ href: '/resume/', label: 'Résumé' },
				{ href: '/contact/', label: 'Contact' },
				{ href: '/accessibility/', label: 'Accessibility' },
				{ href: '/privacy/', label: 'Privacy' }
			]
		}
	];
</script>

<nav class="footer-nav" aria-label="Footer">
	{#each columns as column (column.label)}
		<div class="footer-nav-column">
			<h2>{column.label}</h2>
			<ul>
				{#each column.links as link (link.href)}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
			</ul>
		</div>
	{/each}
</nav>
