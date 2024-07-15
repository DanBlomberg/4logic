<script>
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { DotsVerticalOutline } from 'flowbite-svelte-icons';
</script>

<DotsVerticalOutline class="dots-menu" />

<Dropdown triggeredBy=".dots-menu" class="bg-primary-300 hover:bg-gray-100 dark:bg-primary-700">
	<DropdownItem href="/technology">Technology Stack</DropdownItem>
	<DropdownItem href="/references">references</DropdownItem>
	<DropdownItem href="/pricing">Project Pricing</DropdownItem>
	<DropdownItem href="/languages">Languages</DropdownItem>
	<DropdownItem href="/about">about</DropdownItem>
</Dropdown>
