<!-- PricingPage.svelte -->

<script>
	// Define your pricing tiers or plans here
	let plans = [
		{
			name: 'Basic Usage and Reporting',
			features: [
				'Standard Transaction set',
				'48 hour support response guaruntee',
				'Automated regression'
			],
			price: '$1199'
		},
		{
			name: 'Premium Usage and Reporting',
			features: [
        'Basic+', 
        'Custom Build', 
        '24 hour support response guaruntee', 
        'Feature 4'
      ],
			price: '$2499'
		},
		{
			name: 'Ultimate Usage and Reporting',
			features: [
        'Feature 1', 
        'Feature 2', 
        'Feature 3', 
        'Feature 4', 'Feature 5'],
			price: '$4999'
		}
	];
</script>

<div>
	{#each plans as plan}
		<h1>Pricing Plans services</h1>
		<div class="plan">
			<h2>{plan.name}</h2>
			<ul>
				<div class="price">{plan.price} / month</div>
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
