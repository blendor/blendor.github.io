<script>
</script>

<slot />
<div>
	<div class="card">
		<img
			src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
			alt="Avatar"
			style="width:100%"
		/>
		<div class="container">
			<h4><b>John Doe</b></h4>
			<p>Architect & Engineer</p>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	img {
		height: 300px;
		width: 200px;
	}
	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	/* Add some padding inside the card container */
	.container {
		padding: 2px 16px;
	}
</style>
