<style>
    .back {
        justify-content: center;
        align-content: center;
        text-align: center;
        background-color: rgb(141, 141, 136);
        width: 100%;
        margin-top: 1px;
        margin-bottom: 1px;
        height: 100%;
    }
    .back:hover {
        background-color: rgb(173, 173, 169);
    }
    .square {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    export let square;

    function handleClick() {
        square.clicked = !square.clicked
    }
</script>

<div class="back" on:click={handleClick}>
    {#if square.clicked}
    <div style="background-color: blue;" class="square">

    </div>
    {:else}
    <div style="background-color: red;" class="square">

    </div>
    {/if}
</div>