<script>
	import Nav from '../components/Nav.svelte';

</script>

<style>
	.main {
		position: relative;
		width: 100%;
		height: 100%;
		font: 1em sans-serif;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
</style>

<Nav />

<main class="main">
	<slot></slot>
</main>