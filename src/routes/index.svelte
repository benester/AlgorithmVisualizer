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

	let model

	gridStore.subscribe(data => {
		model = data
	})

	let grid = model.grid



</script>

<svelte:head>
	<title>Algoviz</title>
</svelte:head>

<div class="back" ondragstart="return false;" ondrop="return false;">
	{#each grid as column}
			<Column {column}/>
		{/each}
</div>