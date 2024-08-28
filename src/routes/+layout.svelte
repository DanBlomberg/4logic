<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Footer from '$lib/compononents/footer.svelte';
	import Dropdown from '$lib/compononents/menuNavBar.svelte';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="text-xl">4Logic</a>
			</svelte:fragment>
			<Dropdown />
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					target="_blank"
          href="/gallery"
					rel="noreferrer"
				>
					Feature Gallery 
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					target="_blank"
          href="/HCP"
					rel="noreferrer"
				>
					Gallery
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					target="_blank"
          href="/pricing"
					rel="noreferrer"
				>
					Pricing
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.linkedin.com/in/daniel-blomberg-iv"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://instagram.com/4logic.io"
					target="_blank"
					rel="noreferrer"
				>
					Instagram
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/DanBlomberg"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>

		<Footer />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
