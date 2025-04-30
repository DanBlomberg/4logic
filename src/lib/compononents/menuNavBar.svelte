<script>
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { DotsVerticalOutline } from 'flowbite-svelte-icons';
	import { fade, slide } from 'svelte/transition';
</script>

<DotsVerticalOutline class="dots-menu hover:rotate-90 transition-transform duration-300" />

<Dropdown 
	triggeredBy=".dots-menu" 
	class="!bg-surface-100-800-token/90 backdrop-blur-sm border border-surface-500/20 rounded-xl shadow-xl"
	placement="bottom"
	transition={fade}
	transitionParams={{ duration: 200 }}
>
	<div class="p-2 space-y-1" in:slide={{ duration: 200 }}>
		{#each [
			{ href: '/technology', label: 'Technology Stack', icon: '⚡' },
			{ href: '/references', label: 'References', icon: '📚' },
			{ href: '/pricing', label: 'Project Pricing', icon: '💰' },
			{ href: '/languages', label: 'Languages', icon: '🌐' },
			{ href: '/about', label: 'About', icon: 'ℹ️' }
		] as item}
			<DropdownItem 
				href={item.href}
				class="px-4 py-2 rounded-lg hover:!bg-primary-500/20 transition-colors duration-200"
			>
				<div class="flex items-center gap-2">
					<span class="text-lg">{item.icon}</span>
					<span>{item.label}</span>
				</div>
			</DropdownItem>
		{/each}
	</div>
</Dropdown>

<style lang="postcss">
	:global(.dots-menu) {
		@apply w-6 h-6 text-surface-900-50-token cursor-pointer;
	}

	/* Custom styling for dropdown items */
	:global(.dropdown-item) {
		@apply font-medium !text-surface-900-50-token;
	}

	/* Hover effect for the entire dropdown */
	:global(.dropdown) {
		@apply ring-1 ring-surface-500/20;
	}

	/* Animation for dropdown items */
	:global(.dropdown-item:hover) {
		@apply scale-[1.02] transform transition-transform;
	}
</style>
