<script>
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { DotsVerticalOutline } from 'flowbite-svelte-icons';
	import { DarkMode } from 'flowbite-svelte';
</script>

<DarkMode />

<DotsVerticalOutline class="dots-menu" />

<Dropdown triggeredBy=".dots-menu">
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownItem>Earnings</DropdownItem>
	<DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
