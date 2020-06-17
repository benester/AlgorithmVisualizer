<style>
	.back {
		height: 80%;
		width: 80%;
		margin-top: 1vh;
		display: flex;
		flex-direction: row;
	}
</style>

<script>
	import Column from '../components/grid/Column.svelte'
	import { gridStore } from '../stores/gridStore'
	import bfpf from '../stores/breadthFirst.js'

	let grid

	gridStore.subscribe(data => {
		grid = data.grid
	})

	function find() {
		gridStore.setVisited(false)
		bfpf(grid)
		gridStore.showVisited()
	}

</script>

<svelte:head>
	<title>Algoviz</title>
</svelte:head>

<button on:click={find}>GO!</button>
<div class="back" ondragstart="return false;" ondrop="return false;">
	{#each grid as column}
			<Column {column}/>
	{/each}
</div>