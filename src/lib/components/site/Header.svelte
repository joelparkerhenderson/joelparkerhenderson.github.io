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
				<TextSizePicker />
				<ThemePicker />
				<LocalePicker />
				<SharePicker />
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>
