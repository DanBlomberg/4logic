<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	interface TechCategory {
		name: string;
		icon: string;
		description: string;
		technologies: {
			name: string;
			description: string;
			icon: string;
			level: number;
		}[];
	}

	const techStack: TechCategory[] = [
		{
			name: 'Frontend Development',
			icon: '🎨',
			description: 'Modern, responsive, and interactive user interfaces',
			technologies: [
				{
					name: 'Svelte & SvelteKit',
					description: 'High-performance reactive framework for building fast, efficient web applications',
					icon: '⚡',
					level: 95
				},
				{
					name: 'TypeScript',
					description: 'Type-safe JavaScript for robust application development',
					icon: '📘',
					level: 90
				},
				{
					name: 'Tailwind CSS',
					description: 'Utility-first CSS framework for rapid UI development',
					icon: '🎯',
					level: 95
				}
			]
		},
		{
			name: 'Backend & Infrastructure',
			icon: '🏗️',
			description: 'Scalable and secure server-side solutions',
			technologies: [
				{
					name: 'Docker',
					description: 'Containerization for consistent deployment environments',
					icon: '🐳',
					level: 85
				},
				{
					name: 'Linux/Unix',
					description: 'Robust server operating systems and administration',
					icon: '🐧',
					level: 90
				},
				{
					name: 'Payment Systems',
					description: 'ISO 8583 (1987/1993) specialist for financial transactions',
					icon: '💳',
					level: 95
				}
			]
		},
		{
			name: 'Development Tools',
			icon: '🛠️',
			description: 'Professional development environment and tools',
			technologies: [
				{
					name: 'Neovim',
					description: 'Advanced text editor for efficient coding',
					icon: '📝',
					level: 90
				},
				{
					name: 'tmux',
					description: 'Terminal multiplexer for enhanced productivity',
					icon: '⌨️',
					level: 85
				},
				{
					name: 'AI Integration',
					description: 'LLM & Codeium for intelligent development assistance',
					icon: '🤖',
					level: 90
				}
			]
		},
		{
			name: 'Programming Languages',
			icon: '💻',
			description: 'Versatile language expertise',
			technologies: [
				{
					name: 'JavaScript',
					description: 'Modern ECMAScript for dynamic web applications',
					icon: '🟨',
					level: 95
				},
				{
					name: 'C',
					description: 'System-level programming and performance optimization',
					icon: '⚙️',
					level: 85
				},
				{
					name: 'Perl',
					description: 'Text processing and system administration',
					icon: '🐪',
					level: 80
				}
			]
		}
	];
</script>

<div class="container mx-auto px-4 py-8" in:fade>
	<div class="text-center mb-12" in:fly={{ y: -20, duration: 500 }}>
		<h1 class="h1 mb-4">Technology Stack</h1>
		<p class="text-lg max-w-2xl mx-auto">
			At 4Logic Software, we leverage cutting-edge technologies to deliver high-performance, scalable
			solutions. Our tech stack is carefully chosen to ensure optimal results for every project.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each techStack as category, i}
			<div
				class="card variant-glass-surface p-6"
				in:fly={{ x: i % 2 === 0 ? -20 : 20, duration: 500, delay: i * 100 }}
			>
				<div class="flex items-center gap-3 mb-4">
					<span class="text-3xl">{category.icon}</span>
					<h2 class="h2">{category.name}</h2>
				</div>
				<p class="mb-6 text-surface-600-300-token">{category.description}</p>

				<div class="space-y-6">
					{#each category.technologies as tech}
						<div class="space-y-2">
							<div class="flex items-center gap-2">
								<span class="text-xl">{tech.icon}</span>
								<h3 class="h3">{tech.name}</h3>
							</div>
							<p class="text-sm text-surface-600-300-token">{tech.description}</p>
							<div class="w-full bg-surface-600/20 rounded-full h-2">
								<div
									class="bg-primary-500 h-2 rounded-full transition-all duration-500"
									style="width: {tech.level}%"
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-12 card variant-glass text-center p-8" in:fly={{ y: 20, duration: 500, delay: 300 }}>
		<h2 class="h2 mb-4">Why Our Tech Stack?</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
			<div class="space-y-2">
				<span class="text-3xl">🚀</span>
				<h3 class="h3">Performance</h3>
				<p>Optimized for speed and efficiency at every level</p>
			</div>
			<div class="space-y-2">
				<span class="text-3xl">🛡️</span>
				<h3 class="h3">Security</h3>
				<p>Built with security best practices and regular updates</p>
			</div>
			<div class="space-y-2">
				<span class="text-3xl">⚡</span>
				<h3 class="h3">Scalability</h3>
				<p>Designed to grow with your business needs</p>
			</div>
		</div>
	</div>

	<div class="mt-12 text-center" in:fly={{ y: 20, duration: 500, delay: 400 }}>
		<a href="/pricing" class="btn variant-filled-primary">View Our Development Packages</a>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply transition-all duration-300 hover:scale-[1.02] hover:shadow-xl;
	}

	/* Gradient text effect */
	.h1 {
		@apply bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-tertiary-500;
	}

	/* Smooth animations */
	.transition-all {
		@apply transform-gpu;
	}
</style>
