<script>
	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';
</script>

<Footer
	class="absolute bottom-0 start-0 z-20 w-full p-4  border-t space-x-4 border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-primary-800 dark:border-gray-600"
>
	<FooterCopyright href="/" by="4Logic™" year={2024} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 space-x-4 dark:text-gray-400 sm:mt-0"
	>
		<a href="/about">About</a>
		<a href="/privacy">Privacy</a>
		<a href="/licensing">Licensing</a>
	</FooterLinkGroup>
</Footer>
