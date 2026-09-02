<script lang="ts">
	import { Avatar, AvatarText, ContainerWithFixedWidth, Header } from 'lily-design-system-svelte-headless';
	import ThemePicker from './ThemePicker.svelte';
	import TextSizePicker from './TextSizePicker.svelte';
	import SharePicker from './SharePicker.svelte';
</script>

<Header label="Site header">
	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="site-header-bar">
			<span class="brand">
				<Avatar alt="Joel Parker Henderson">
					<AvatarText>JPH</AvatarText>
				</Avatar>
				<strong>Joel Parker Henderson</strong>
			</span>
			<div class="site-header-controls">
				<TextSizePicker />
				<ThemePicker />
				<SharePicker />
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>
