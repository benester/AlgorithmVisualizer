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

	let columns = 64
	let rows = 32
	let grid = new Array(columns)

	for (let x = 0; x < columns; x++) {
		grid[x] = new Array(rows)
		for (let y = 0; y < rows; y++) {
			grid[x][y] = { x, y, clicked: false }
		}
	}


</script>

<svelte:head>
	<title>Algoviz</title>
</svelte:head>

<div class="back">
		{#each grid as column}
			<Column {column}/>
		{/each}
</div>