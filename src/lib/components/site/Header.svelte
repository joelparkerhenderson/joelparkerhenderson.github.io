<script lang="ts">
	import {
		Avatar,
		AvatarImage,
		ContainerWithFixedWidth,
		Header
	} from 'lily-design-system-svelte-headless';
	import avatarPhoto from '$lib/assets/avatar.jpg';
	import ThemePicker from './ThemePicker.svelte';
	import TextSizePicker from './TextSizePicker.svelte';
	import LocalePicker from './LocalePicker.svelte';
	import SharePicker from './SharePicker.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<Header label="Site header">
	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="site-header-bar">
			<a class="brand" href="/">
				<Avatar alt="Joel Parker Henderson">
					<AvatarImage src={avatarPhoto} alt="" />
				</Avatar>
				<strong>Joel Parker Henderson</strong>
			</a>
			<div class="site-header-controls">
				<SocialLinks />
				<span class="site-header-divider" aria-hidden="true"></span>
				<TextSizePicker />
				<ThemePicker />
				<LocalePicker />
				<SharePicker />
				<a class="icon-button" href="/search/" aria-label="Search">
					<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
						<circle cx="11" cy="11" r="7" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</svg>
				</a>
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>
