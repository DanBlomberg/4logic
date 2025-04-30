<script lang="ts">
	import { page } from '$app/stores';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	$: isOpen = $drawerStore;

	const navItems = [
		{ href: '/', label: 'Home', icon: '🏠' },
		{ href: '/pricing', label: 'Packages & Pricing', icon: '💰' },
		{ href: '/technology', label: 'Our Stack', icon: '⚡' },
		{ href: '/about', label: 'About Us', icon: 'ℹ️' }
	];

	function closeDrawer() {
		drawerStore.set(false);
	}
</script>

<!-- Rest of the component remains the same -->
