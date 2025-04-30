<!-- PricingPage.svelte -->

<script lang="ts">
	import { fade } from 'svelte/transition';

	const packages = [
		{
			name: "Starter",
			price: "2,999",
			description: "Perfect for small businesses getting started online",
			features: [
				"Custom Design (Based on Templates)",
				"5 Core Pages",
				"Mobile Responsive",
				"Basic SEO Setup",
				"Contact Form",
				"Social Media Integration",
				"1 Month Support"
			],
			example: "Similar to North Star Tattoo's basic information pages"
		},
		{
			name: "Professional",
			price: "5,999",
			description: "Comprehensive solution for growing businesses",
			features: [
				"Custom Design from Scratch",
				"Up to 10 Pages",
				"Advanced SEO Implementation",
				"Content Management System",
				"Blog Integration",
				"E-commerce Ready (Up to 25 Products)",
				"Image Gallery",
				"Google Analytics Integration",
				"3 Months Support",
				"Performance Optimization"
			],
			example: "Full-featured site like North Star Tattoos with artist portfolios"
		},
		{
			name: "Enterprise",
			price: "Starting at 9,999",
			description: "Advanced solutions for complex business needs",
			features: [
				"Full Custom Development",
				"Unlimited Pages",
				"Custom Features Development",
				"Advanced E-commerce Solutions",
				"Custom API Integration",
				"Database Design",
				"User Authentication System",
				"Admin Dashboard",
				"Advanced Security Features",
				"6 Months Support",
				"Performance Monitoring",
				"Regular Backups"
			],
			example: "Full-scale platforms with custom functionality"
		}
	];
</script>

<div class="container mx-auto px-4 py-8" in:fade>
	<div class="text-center mb-12">
		<h1 class="h1 mb-4">Web Development Packages</h1>
		<p class="text-lg max-w-2xl mx-auto">
			Professional web development solutions tailored to your needs. All packages include modern design,
			responsive layouts, and SEO-friendly structure.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		{#each packages as pkg}
			<div class="card variant-glass-surface p-6">
				<div class="text-center mb-6">
					<h2 class="h2">{pkg.name}</h2>
					<div class="text-3xl font-bold my-4">${pkg.price}</div>
					<p class="text-sm">{pkg.description}</p>
				</div>

				<ul class="space-y-3 mb-6">
					{#each pkg.features as feature}
						<li class="flex items-start">
							<span class="text-success-500 mr-2">✓</span>
							{feature}
						</li>
					{/each}
				</ul>

				<div class="mt-4">
					<p class="text-sm italic">Example: {pkg.example}</p>
				</div>

				<div class="mt-6">
					<a
						href="mailto:blomberg.dan@gmail.com?subject=Interest in {pkg.name} Package"
						class="btn variant-filled-primary w-full"
					>
						Get Started
					</a>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-12 text-center">
		<h3 class="h3 mb-4">Custom Solutions Available</h3>
		<p class="max-w-2xl mx-auto">
			Need something specific? We offer custom development solutions tailored to your unique requirements.
			Contact us for a personalized quote.
		</p>
		<a
			href="mailto:blomberg.dan@gmail.com?subject=Custom Development Inquiry"
			class="btn variant-filled-secondary mt-4"
		>
			Request Custom Quote
		</a>
	</div>

	<div class="mt-16 p-6 card variant-glass text-center">
		<h3 class="h3 mb-4">Why Choose 4Logic?</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
			<div>
				<h4 class="h4 mb-2">Expert Development</h4>
				<p>Led by Daniel Blomberg IV with extensive experience in modern web technologies</p>
			</div>
			<div>
				<h4 class="h4 mb-2">Quality Assurance</h4>
				<p>Rigorous testing and optimization for peak performance</p>
			</div>
			<div>
				<h4 class="h4 mb-2">Ongoing Support</h4>
				<p>Dedicated support and maintenance to keep your site running smoothly</p>
			</div>
		</div>
	</div>
</div>

<style>
	.plan {
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 20px;
		margin: 10px;
		text-align: center;
	}

	.plan h2 {
		margin-bottom: 10px;
	}

	.plan ul {
		list-style-type: none;
		padding: 0;
	}

	.plan li {
		margin-bottom: 5px;
	}

	.plan .price {
		font-size: 1.5em;
		margin-bottom: 15px;
	}
</style>
