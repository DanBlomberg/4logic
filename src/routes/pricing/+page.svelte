<!-- PricingPage.svelte -->

<script>
	// Define your pricing tiers or plans here
	let plans = [
		{
			name: 'Basic',
			price: '$99',
			features: ['Feature 1', 'Feature 2', 'Feature 3']
		},
		{
			name: 'Standard',
			price: '$199',
			features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
		},
		{
			name: 'Premium',
			price: '$299',
			features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
		}
	];
</script>

<div>
	<h1>Our Pricing Plans</h1>
	{#each plans as plan}
		<div class="plan">
			<h2>{plan.name}</h2>
			<div class="price">{plan.price} / month</div>
			<ul>
				{#each plan.features as feature}
					<li>{feature}</li>
				{/each}
			</ul>
			<button>Choose Plan</button>
		</div>
	{/each}
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
