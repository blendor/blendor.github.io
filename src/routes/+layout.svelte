<script>
	import Navbar from '../lib/Navbar.svelte';
	import Analytics from '../lib/analytics.svelte';
</script>

<Analytics />
<Navbar />
<slot />

<!-- markup (zero or more items) goes here -->

<style>
	/* your styles go here */
</style>
