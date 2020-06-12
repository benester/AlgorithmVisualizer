<style>
    .back {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        margin-right: 1px;
        margin-left: 1px;
    }
</style>

<script>
    export let column

    import Square from './Square.svelte'




</script>

<div class="back">
    {#each column as square}
        <Square {square}/>
    {/each}
</div>