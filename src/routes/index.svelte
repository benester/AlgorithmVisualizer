<style>
	.back {
		height: 80%;
		width: 80%;
		display: flex;
		flex-direction: row;
		margin-bottom: 4vh;
	}

	p {
		margin-top: 3vh;
		color: aliceblue;
	}
</style>

<script>
	import Column from '../components/grid/Column.svelte'
	import { gridStore } from '../stores/gridStore'
	import bfpf from '../stores/breadthFirst.js'

	let model

	gridStore.subscribe(data => {
		model = data
	})

	function find() {
		// TODO: bake into one method
		gridStore.resetHighlights()
		gridStore.showPath(bfpf(model))
		gridStore.showVisited()
	}

</script>

<svelte:head>
	<title>Algoviz</title>
</svelte:head>
<p>
	Right-click to place the start- and end squares. Left click and drag to place walls.
	Click the button to display the shortest path (if any)
</p>
<button on:click={find}>Run Algorithm</button>
<div class="back" ondragstart="return false;" ondrop="return false;">
	{#each model.grid as column}
			<Column {column}/>
	{/each}
</div>