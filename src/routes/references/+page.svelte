<svelte:head>
	<title>References</title>
</svelte:head>

<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	interface PortfolioItem {
		title: string;
		description: string;
		image: string;
		technologies: string[];
		features: string[];
		link: string;
		category: string;
		testimonial?: {
			quote: string;
			author: string;
			role: string;
		};
	}

	const portfolioItems: PortfolioItem[] = [
		{
			title: 'North Star Tattoos',
			description: 'A modern, dynamic website for a premier tattoo studio showcasing artist portfolios and booking capabilities.',
			image: '/images/northstar-preview.jpg', // You'll need to add this image
			technologies: ['SvelteKit', 'Tailwind CSS', 'Supabase', 'Stripe Integration'],
			features: [
				'Custom artist portfolio galleries',
				'Online booking system',
				'Real-time availability calendar',
				'Secure payment processing',
				'Mobile-responsive design',
				'SEO optimization'
			],
			link: 'http://northstartattoos.com',
			category: 'E-commerce & Booking',
			testimonial: {
				quote: 'The new website has transformed our business, making it easier for clients to book appointments and browse our artists\' work.',
				author: 'North Star Tattoos',
				role: 'Owner'
			}
		}
		// Add more portfolio items as they become available
	];
</script>

<div class="container mx-auto px-4 py-8" in:fade>
	<div class="text-center mb-12" in:fly={{ y: -20, duration: 500 }}>
		<h1 class="h1 mb-4">Our Portfolio</h1>
		<p class="text-lg max-w-2xl mx-auto">
			Showcasing our commitment to excellence through successful client projects. Each project represents
			our dedication to creating powerful, user-centric web solutions.
		</p>
	</div>

	{#each portfolioItems as item}
		<div
			class="card variant-glass-surface p-6 mb-12"
			in:fly={{ y: 20, duration: 500 }}
		>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- Project Preview -->
				<div class="space-y-4">
					<div class="relative aspect-video rounded-xl overflow-hidden">
						<img
							src={item.image}
							alt={item.title}
							class="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-transparent" />
					</div>
					<div class="flex flex-wrap gap-2">
						{#each item.technologies as tech}
							<span class="badge variant-soft">{tech}</span>
						{/each}
					</div>
				</div>

				<!-- Project Details -->
				<div class="space-y-4">
					<h2 class="h2">{item.title}</h2>
					<p class="text-lg">{item.description}</p>

					<div class="space-y-2">
						<h3 class="h3">Key Features</h3>
						<ul class="list">
							{#each item.features as feature}
								<li class="flex items-center gap-2">
									<span class="text-success-500">✓</span>
									{feature}
								</li>
							{/each}
						</ul>
					</div>

					{#if item.testimonial}
						<blockquote class="card variant-ghost-surface p-4 mt-4">
							<p class="italic">"{item.testimonial.quote}"</p>
							<footer class="mt-2">
								<strong>{item.testimonial.author}</strong>
								<span class="text-surface-600-300-token">{item.testimonial.role}</span>
							</footer>
						</blockquote>
					{/if}

					<a
						href={item.link}
						class="btn variant-filled-primary"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Live Site
					</a>
				</div>
			</div>
		</div>
	{/each}

	<!-- Call to Action -->
	<div class="card variant-glass text-center p-8 mt-12" in:fly={{ y: 20, duration: 500, delay: 200 }}>
		<h2 class="h2 mb-4">Ready to Start Your Project?</h2>
		<p class="text-lg mb-6 max-w-2xl mx-auto">
			Let's create something amazing together. We'll bring your vision to life with modern technology and
			exceptional design.
		</p>
		<div class="flex justify-center gap-4">
			<a href="/pricing" class="btn variant-filled-primary">View Packages</a>
			<a
				href="mailto:blomberg.dan@gmail.com?subject=Project Inquiry"
				class="btn variant-soft"
			>
				Contact Us
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply transition-all duration-300 hover:shadow-xl;
	}

	.h1 {
		@apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-tertiary-500;
	}

	.list {
		@apply space-y-2;
	}

	img {
		@apply transform-gpu;
	}

	blockquote {
		@apply border-l-4 border-primary-500;
	}

	.badge {
		@apply px-3 py-1 rounded-full text-sm font-medium;
	}
</style>
