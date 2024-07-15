<script>
	let keyPoints = [
		{
			title: 'Definition and Scope',
			content:
				'A Software Licensing Agreement is a contract where the software owner (licensor) grants the user (licensee) the right to use the software under specified conditions. Clearly define what rights are being granted (e.g., use, modify, distribute) and any limitations (e.g., number of users, geographic restrictions).'
		},
		{
			title: 'Types of Licenses',
			content:
				'Determine whether the license is exclusive (only the licensee can use the software) or non-exclusive (multiple licensees can use the software). Decide if the license is perpetual (lasting indefinitely) or for a specific term.'
		},
		{
			title: 'Payment Terms',
			content:
				'Specify the licensing fees, payment schedule, and any additional costs (e.g., maintenance, support).'
		},
		{
			title: 'Intellectual Property Rights',
			content:
				'Clearly state that the licensor retains ownership of the software and all associated intellectual property rights.'
		},
		{
			title: 'Restrictions on Use',
			content:
				'Include clauses on prohibited actions, such as reverse engineering, decompiling, or unauthorized copying.'
		},
		{
			title: 'Confidentiality',
			content: 'Address the handling of any confidential information exchanged between the parties.'
		},
		{
			title: 'Warranties and Disclaimers',
			content:
				'Outline any warranties provided by the licensor and include disclaimers of liability for certain types of damages.'
		},
		{
			title: 'Indemnification',
			content:
				'Specify the indemnification obligations of each party, particularly regarding intellectual property infringement claims.'
		},
		{
			title: 'Termination',
			content:
				'Detail the conditions under which the agreement can be terminated and the consequences of termination.'
		},
		{
			title: 'Governing Law and Dispute Resolution',
			content:
				'Indicate that Minnesota law governs the agreement and outline the process for resolving disputes (e.g., mediation, arbitration, litigation).'
		},
		{
			title: 'Compliance with Laws',
			content:
				'Ensure the agreement complies with relevant state and federal laws, including data protection and privacy regulations.'
		},
		{
			title: 'Miscellaneous Provisions',
			content:
				'Include standard contract clauses, such as force majeure, assignment, and amendment procedures.'
		},
		{
			title: 'Legal Assistance',
			content:
				'For tailored advice and to ensure compliance with Minnesota-specific requirements, consider consulting with a legal professional who specializes in software licensing and technology law.'
		}
	];
</script>

<div class="container">
	{#each keyPoints as keyPoint}
		<div class="section">
			<div class="title">{keyPoint.title}</div>
			<div class="content">{keyPoint.content}</div>
		</div>
	{/each}
</div>

<style>
	.container {
		max-width: 800px;
		margin: auto;
		padding: 1em;
	}
	.section {
		margin-bottom: 1.5em;
	}
	.title {
		font-size: 1.5em;
		margin-bottom: 0.5em;
	}
	.content {
		font-size: 1em;
		line-height: 1.5;
	}
</style>
